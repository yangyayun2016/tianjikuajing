import os,re,json,time,requests,traceback,threading,glob
from concurrent.futures import ThreadPoolExecutor
LK=threading.Lock()
from urllib.parse import quote
B="https://open.feishu.cn/open-apis";SP="7592104357470981323";OUT=os.environ.get("FEISHU_OUT","/workspace/feishu_kb_compressed/feishu");COMPRESS=os.environ.get("COMPRESS","1")=="1"
MAXW=int(os.environ.get("IMG_MAXW","1600"));QUAL=int(os.environ.get("IMG_Q","80"))
os.makedirs(OUT,exist_ok=True)
S=requests.Session();S.mount("https://",requests.adapters.HTTPAdapter(pool_maxsize=16));TOK={"t":None,"exp":0};LAST=[0]
def tok():
    if time.time()>TOK["exp"]:
        r=S.post(B+"/auth/v3/tenant_access_token/internal",json={"app_id":"cli_aa5330c010f89c0a","app_secret":os.environ["FEISHU_APP_SECRET"]}).json()
        TOK["t"]=r["tenant_access_token"];TOK["exp"]=time.time()+r["expire"]-300
    return TOK["t"]
def req(m,path,raw=False,**kw):
    for a in range(6):
        with LK:
            w=0.21-(time.time()-LAST[0])
            if w>0: time.sleep(w)
            LAST[0]=time.time()
        try: r=S.request(m,B+path,headers={"Authorization":"Bearer "+tok()},timeout=120,stream=raw,**kw)
        except Exception as e:
            time.sleep(2*(a+1));err=str(e);continue
        if r.status_code==429 or (not raw and r.headers.get("content-type","").startswith("application/json") and r.json().get("code") in (99991400,99991663)):
            time.sleep(2**a);err="rate";continue
        if raw:
            if r.status_code!=200 or r.headers.get("content-type","").startswith("application/json"):
                raise Exception(f"HTTP{r.status_code} {r.text[:200]}")
            return r
        j=r.json()
        if j.get("code")!=0: raise Exception(f"code {j.get('code')} {j.get('msg')}")
        return j.get("data",{})
    raise Exception("retries exhausted "+err)
FAIL=[];MAN=[]
def san(s):
    s=re.sub(r'[\\/:*?"<>|\x00-\x1f#%]','_',(s or "untitled")).strip().strip('.') or "untitled"
    return s[:80]
def uniq(d,name,ext,used):
    n=name;i=2
    while (d,n+ext) in used: n=f"{name}_{i}";i+=1
    used.add((d,n+ext));return n
def nodes(parent=None):
    out=[];pt=None
    while True:
        p={"page_size":50}
        if parent:p["parent_node_token"]=parent
        if pt:p["page_token"]=pt
        d=req("GET",f"/wiki/v2/spaces/{SP}/nodes",params=p)
        out+=d.get("items",[])
        if not d.get("has_more"):return out
        pt=d["page_token"]
def save(r,path):
    tot=0
    with open(path,"wb") as f:
        for c in r.iter_content(1<<20):
            tot+=len(c)
            if tot>90*1024*1024: f.close();os.remove(path);raise Exception("over 90MB, skipped")
            f.write(c)
def compress(p):
    """resize to MAXW, PNG/JPEG -> JPEG q; keep PNG if transparent or smaller. returns final path"""
    from PIL import Image
    ext=os.path.splitext(p)[1].lower()
    if ext not in (".png",".jpg",".jpeg",".webp"):return p
    try:
        im=Image.open(p);im.load()
        if im.width>MAXW:im=im.resize((MAXW,round(im.height*MAXW/im.width)),Image.LANCZOS)
        alpha=im.mode in("RGBA","LA") or (im.mode=="P" and "transparency" in im.info)
        if alpha and im.mode!="P":alpha=im.getchannel("A").getextrema()[0]<255
        orig=os.path.getsize(p);base=os.path.splitext(p)[0]
        if alpha or ext==".png":
            tp=base+".tmp.png";im.save(tp,optimize=True)
            if not alpha:
                tj=base+".tmp.jpg";im.convert("RGB").save(tj,quality=QUAL,optimize=True)
                if os.path.getsize(tj)<os.path.getsize(tp):os.remove(tp);tp=None
                else:os.remove(tj);tj=None
            else:tj=None
            if tp:
                if os.path.getsize(tp)<orig:os.replace(tp,p)
                else:os.remove(tp)
                return p
            if os.path.getsize(tj)<orig:os.remove(p);os.replace(tj,base+".jpg");return base+".jpg"
            os.remove(tj);return p
        tj=base+".tmp.jpg";im.convert("RGB").save(tj,quality=QUAL,optimize=True)
        if os.path.getsize(tj)<orig:os.remove(p);os.replace(tj,base+".jpg");return base+".jpg"
        os.remove(tj);return p
    except Exception:return p
def url(n):return f"https://my.feishu.cn/wiki/{n['node_token']}"
def fm(n):
    t=time.strftime('%Y-%m-%dT%H:%M:%S+08:00',time.localtime(int(n.get('obj_edit_time') or 0)))
    return f"---\ntitle: {json.dumps(n['title'],ensure_ascii=False)}\nfeishu_url: {url(n)}\nobj_type: {n['obj_type']}\nobj_token: {n['obj_token']}\nupdated: {t}\n---\n\n"
def txt(els):
    o=""
    for e in els or []:
        if "text_run" in e:
            c=e["text_run"]["content"];st=e["text_run"].get("text_element_style",{})
            if c.strip():
                if st.get("inline_code"):c=f"`{c}`"
                if st.get("bold"):c=f"**{c}**"
                if st.get("italic"):c=f"*{c}*"
                if st.get("strikethrough"):c=f"~~{c}~~"
                if st.get("link"):
                    from urllib.parse import unquote
                    c=f"[{c}]({unquote(st['link']['url'])})"
            o+=c
        elif "mention_doc" in e:o+=f"[{e['mention_doc'].get('title','doc')}]({e['mention_doc'].get('url','')})"
        elif "mention_user" in e:o+="@user"
        elif "equation" in e:o+=f"${e['equation']['content'].strip()}$"
    return o
KEYS={2:"text",3:"heading1",4:"heading2",5:"heading3",6:"heading4",7:"heading5",8:"heading6",9:"heading7",10:"heading8",11:"heading9",12:"bullet",13:"ordered",14:"code",15:"quote",17:"todo"}
def docx(n,d,base):
    items=[];pt=None
    while True:
        p={"page_size":500,"document_revision_id":-1}
        if pt:p["page_token"]=pt
        r=req("GET",f"/docx/v1/documents/{n['obj_token']}/blocks",params=p)
        items+=r.get("items",[])
        if not r.get("has_more"):break
        pt=r["page_token"]
    M={b["block_id"]:b for b in items};assets=os.path.join(d,"assets");imgs=[0]
    IM={}
    def img(tokn):return IM.get(tokn) or f"> [图片未能下载，见飞书原文]({url(n)})"
    def dl(tokn):
        os.makedirs(assets,exist_ok=True)
        ex=glob.glob(os.path.join(assets,glob.escape(f"{base}_{tokn[:10]}")+".*"))
        if ex:IM[tokn]=f"![](assets/{quote(os.path.basename(ex[0]))})";return
        try:
            r=req("GET",f"/drive/v1/medias/{tokn}/download",raw=True)
            ct=r.headers.get("content-type","");ext={"image/png":".png","image/jpeg":".jpg","image/gif":".gif","image/webp":".webp","image/svg+xml":".svg"}.get(ct.split(";")[0],".png")
            fn=f"{base}_{tokn[:10]}{ext}";save(r,os.path.join(assets,fn));imgs[0]+=1
            if COMPRESS:fn=os.path.basename(compress(os.path.join(assets,fn)))
            IM[tokn]=f"![](assets/{quote(fn)})"
        except Exception as e:
            FAIL.append((n['title'],"image",str(e)[:150]))
    with ThreadPoolExecutor(8) as ex:list(ex.map(dl,[b["image"]["token"] for b in items if b["block_type"]==27 and b.get("image",{}).get("token")]))
    def cell(bid):
        return " ".join(render(c,0).strip().replace("\n","<br>") for c in M.get(bid,{}).get("children",[])).replace("|","\\|")
    def kids(b,ind):return "".join(render(c,ind) for c in b.get("children",[]))
    def render(bid,ind):
        b=M.get(bid);
        if not b:return ""
        t=b["block_type"];pre="  "*ind
        if t==1:return kids(b,0)
        if t in KEYS:
            k=KEYS[t];body=b.get(k,{});s=txt(body.get("elements"))
            if t==2:return pre+s+"\n\n"+kids(b,ind)
            if 3<=t<=11:return "#"*min(t-2,6)+" "+s+"\n\n"+kids(b,ind)
            if t==12:return pre+"- "+s+"\n"+kids(b,ind+1)+("\n" if ind==0 else "")
            if t==13:return pre+"1. "+s+"\n"+kids(b,ind+1)+("\n" if ind==0 else "")
            if t==14:return "```\n"+"".join(e.get("text_run",{}).get("content","") for e in body.get("elements",[]))+"\n```\n\n"
            if t==15:return "> "+s+"\n\n"
            if t==17:return pre+("- [x] " if body.get("style",{}).get("done") else "- [ ] ")+s+"\n"+kids(b,ind+1)
        if t==19:return "> 💡 "+kids(b,0).strip().replace("\n","\n> ")+"\n\n"
        if t==34:return "> "+kids(b,0).strip().replace("\n","\n> ")+"\n\n"
        if t==22:return "---\n\n"
        if t==27:return img(b["image"]["token"])+"\n\n"
        if t==23:
            ft=b.get("file",{});return f"[附件：{ft.get('name','file')}]({url(n)})\n\n"
        if t==31:
            tb=b["table"];cols=tb["property"]["column_size"];cs=tb.get("cells",[])
            rows=[cs[i:i+cols] for i in range(0,len(cs),cols)]
            if not rows:return ""
            o="| "+" | ".join(cell(c) for c in rows[0])+" |\n|"+"---|"*cols+"\n"
            for r in rows[1:]:o+="| "+" | ".join(cell(c) for c in r)+" |\n"
            return o+"\n"
        if t in (24,25,33,35,36):return kids(b,ind)  # grid/columns/view/etc
        if t==43:return f"> [画板（白板）请在飞书查看]({url(n)})\n\n"
        if t==26:return f"> [嵌入内容请在飞书查看]({url(n)})\n\n"+kids(b,ind)
        return f"> [不支持的块类型 {t}，请在飞书查看]({url(n)})\n\n"+kids(b,ind)
    root=items[0]["block_id"] if items else None
    md=fm(n)+f"# {n['title']}\n\n"+(render(root,0) if root else "")
    open(os.path.join(d,base+".md"),"w").write(re.sub(r"\n{3,}","\n\n",md))
    return base+".md"
def export(n,d,base,typ):
    r=req("POST","/drive/v1/export_tasks",json={"file_extension":"xlsx","token":n["obj_token"],"type":typ})
    tk=r["ticket"]
    for i in range(60):
        time.sleep(2)
        res=req("GET",f"/drive/v1/export_tasks/{tk}",params={"token":n["obj_token"]})["result"]
        if res.get("job_status")==0:break
        if res.get("job_status") not in (1,2):raise Exception(f"export status {res.get('job_status')} {res.get('job_error_msg')}")
    else: raise Exception("export timeout")
    p=os.path.join(d,base+".xlsx");save(req("GET",f"/drive/v1/export_tasks/file/{res['file_token']}/download",raw=True),p)
    try:
        import openpyxl
        wb=openpyxl.load_workbook(p,read_only=True,data_only=True);ws=wb.worksheets[0]
        rows=[["" if v is None else str(v).replace("|","\\|").replace("\n","<br>") for v in r] for _,r in zip(range(201),ws.iter_rows(values_only=True))]
        tab=""
        if rows:
            w=max(len(r) for r in rows);rows=[r+[""]*(w-len(r)) for r in rows]
            tab="| "+" | ".join(rows[0])+" |\n|"+"---|"*w+"\n"+"".join("| "+" | ".join(r)+" |\n" for r in rows[1:])
        prev=f"预览：第一个工作表「{ws.title}」，最多 200 行。完整数据见 [{base}.xlsx]({quote(base)}.xlsx)。\n\n"+tab
    except Exception as e: prev=f"预览生成失败：{e}。完整数据见 [{base}.xlsx]({quote(base)}.xlsx)。\n"
    open(os.path.join(d,base+".md"),"w").write(fm(n)+f"# {n['title']}\n\n"+prev)
    return base+".xlsx"
def legacy(n,d,base):
    c=req("GET",f"/doc/v2/{n['obj_token']}/raw_content")["content"]
    open(os.path.join(d,base+".md"),"w").write(fm(n)+f"# {n['title']}\n\n> 旧版文档，仅导出纯文本。\n\n"+c)
    return base+".md"
def file(n,d,base):
    r=req("GET",f"/drive/v1/files/{n['obj_token']}/download",raw=True)
    cd=r.headers.get("content-disposition","");ext=os.path.splitext(n["title"])[1]
    if not ext:
        m=re.search(r"filename\*?=(?:UTF-8'')?\"?([^\";]+)",cd)
        if m:ext=os.path.splitext(requests.utils.unquote(m.group(1)))[1]
    fn=base if base.endswith(ext) else base+ext;save(r,os.path.join(d,fn));return fn
USED=set();STAT={}
try:OLD={m["node_token"]:m for m in json.load(open(OUT+"/_manifest.json"))["nodes"]}
except Exception:OLD={}
FORCE=os.environ.get("FULL")=="1"
def unchanged(n):
    o=OLD.get(n["node_token"])
    if FORCE or not o or not o.get("path") or o.get("obj_edit_time")!=n.get("obj_edit_time"):return None
    p=os.path.join(OUT,o["path"])
    if not os.path.exists(p):return None
    md=os.path.splitext(p)[0]+".md"
    if os.path.exists(md) and "图片未能下载" in open(md,errors="ignore").read():return None
    return o["path"]
def walk(parent,d,depth):
    for n in nodes(parent):
        base=uniq(d,san(n["title"]),"",USED);typ=n["obj_type"];rel=None
        os.makedirs(d,exist_ok=True)
        try:
            old=unchanged(n)
            if old:rel=os.path.basename(old);STAT.setdefault("skipped_unchanged",[0,0])[0]+=1
            elif typ=="docx":rel=docx(n,d,base)
            elif typ in("sheet","bitable"):rel=export(n,d,base,typ)
            elif typ=="doc":rel=legacy(n,d,base)
            elif typ=="file":rel=file(n,d,base)
            else: raise Exception("unsupported type "+typ)
            if not old:STAT.setdefault(typ,[0,0])[0]+=1
        except Exception as e:
            STAT.setdefault(typ,[0,0])[1]+=1;FAIL.append((n["title"],typ,str(e)[:200]))
        MAN.append({"node_token":n["node_token"],"obj_token":n["obj_token"],"type":typ,"title":n["title"],"path":os.path.relpath(os.path.join(d,rel),OUT) if rel else None,"obj_edit_time":n.get("obj_edit_time"),"depth":depth,"parent":parent})
        print(len(MAN),typ,n["title"],flush=True)
        if n.get("has_child"):
            cd=os.path.join(d,base)
            if os.path.isfile(cd):cd+="_子页面"
            walk(n["node_token"],cd,depth+1)
if __name__!="__main__":raise SystemExit
walk(None,OUT,0)
json.dump({"space_id":SP,"generated":time.strftime('%Y-%m-%dT%H:%M:%S+08:00'),"nodes":MAN},open(OUT+"/_manifest.json","w"),ensure_ascii=False,indent=1)
with open(OUT+"/_failures.md","w") as f:
    f.write("# 导出失败记录\n\n| 标题 | 类型 | 原因 |\n|---|---|---|\n")
    for t,y,e in FAIL:f.write(f"| {t} | {y} | {e.replace('|','/')} |\n")
with open(OUT+"/README.md","w") as f:
    f.write("# 飞书知识库：阳亚运的知识库\n\n自动从飞书导出。各类型说明：文档为 Markdown，表格/多维表格为 xlsx + md 预览，文件为原文件。\n\n")
    for m in MAN:
        lk=f"[{m['title']}]({quote(m['path'])})" if m["path"] else f"{m['title']}（导出失败）"
        f.write("  "*m["depth"]+f"- {lk} `{m['type']}`\n")
print("STAT",STAT,"FAILS",len(FAIL))
