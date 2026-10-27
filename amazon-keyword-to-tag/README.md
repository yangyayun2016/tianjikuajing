# 亚马逊关键词原子级打标系统 · 学习库

> Amazon Keyword-to-Tag Intelligence System  
> **原子标签解决「看懂关键词」，组合标签解决「看懂需求」，机会指数解决「该不该做」。**

本目录供学习与复用：把 ChatGPT 分享全文、SIF 价值打法（刘松）、canonical Canvas 路径，整理成可推入 GitHub `yangyayun2016/tianjikuajing/amazon-keyword-to-tag/` 的文档包。

## 学习目的

1. 掌握 **ABA关键词通用版本①**：12 维标签本体、0-1-3 颗粒度、规则+词典打标、机会等级 S/A/B/C/D、Excel 交付。
2. 掌握 **SIF价值打法升级版本②**：词库→TF 双词频→供给 0/1/3 反向匹配→需求中心广告→匹配模式→集中度拆分→价值验证三阶段。
3. 用真实样例（发夹 ABA 561 词）与 ChatGPT 先例（空净 / 英德布艺清洗机 / 广告计划公式）对照落地。

## ① 与 ② 的关系

| 版本 | 定位 | 主产出 |
|------|------|--------|
| ① ABA通用版 | 底座：看懂词、打标签、分级、Excel | 打标结果 / 高机会清单 / 看板 / 词典 / 规则 |
| ② SIF价值升级版 | 升级：看懂需求、匹配供给、建广告骨架、验证价值 | 需求词频表 / 需求供给矩阵 / 广告结构 / Value Score |

**推荐流程**：先用 ① 对 ABA 做原子打标与机会分级 → 再用 ② 做 TF、供给匹配与需求中心广告规划。两版共享 12 维本体与 0-1-3，不另开平行体系。

对应 Bot：
- [关键词打标bot（ABA通用版）](grokbot://app/v1/agent?id=933f0b36-dd2b-4d52-9359-22d71b543b5f)
- [关键词打标bot（价值打法升级版）](grokbot://app/v1/agent?id=ee7b65ad-c770-4e96-af16-3033de91001f)

## 推荐阅读顺序

1. `docs/01-system-overview.md` — 系统总框架与 5 层数据
2. `docs/02-tag-ontology-12.md` — 12 维本体 + 购买意图七层
3. `docs/03-granularity-0-1-3.md` — 0-1-3 与标签公式
4. `docs/04-pipeline-and-dictionary.md` — 流水线与词典字段
5. `docs/05-output-format.md` — 输出、迁移、机会指数、MVP、8 问
6. `docs/06-sif-value-play-six-steps.md` — SIF 六步全文 + 算法
7. `docs/07-ads-planning-formulas.md` — 广告策略与 CPC/ACOS 公式
8. `docs/08-case-air-purifier.md` / `09-case-hair-clips.md` / `10-case-upholstery-uk-de.md` — 案例
9. `docs/11-chatgpt-share-archive.md` — ChatGPT 对话完整归档
10. `skills/aba-general/SKILL.md` 与 `skills/sif-value-play/SKILL.md` — 可运行 skill

## 目录结构

```
amazon-keyword-to-tag/
  README.md
  sources/SOURCES.md
  sources/sif-value-play-pdf.txt
  docs/01 … 11
  skills/aba-general/SKILL.md
  skills/sif-value-play/SKILL.md
  samples/README.md
  samples/hair-clips-aba-tagged-sample.xlsx
```

## 来源链接（必读）

| 来源 | URL |
|------|-----|
| Canonical Page | https://cursor.com/canvas/store-1de4b0aa-ba6f-43af-829d-dc133f21bfc6/0598cc68-1dab-4279-b3ce-29d581fccd16 |
| ChatGPT 分享（全文归档于 docs/11） | https://chatgpt.com/share/6ae0608d-97f0-83ea-99c6-b2f8bef41897 |
| pages.grok.bot 发布页 | https://aba-sif-xzm2.pages.grok.bot/ |
| SIF 价值打法 PDF 提取 | `sources/sif-value-play-pdf.txt`（刘松 / COSMO+Rufus） |

> **pages.grok.bot 已登录确认与 canonical Page 同源；见 docs/00-pages-site.md**：本包构建时 `aba-sif-pages-dump.txt` 尚不存在；站点需登录。内容以本 README、docs、skills 与 Canvas 为准，待 dump 可用后并入 `docs/00-pages-site.md`。

## Skills 入口

- 版本①：`skills/aba-general/SKILL.md`
- 版本②：`skills/sif-value-play/SKILL.md`
- 已安装工作流 skill：`amazon-keyword-tagging-sif`（两层合一）

## 样例数据

见 `samples/`：美国站 hair clips ABA 已打标 Excel（561 词，S14/A13/B81，高机会 27）。**注意：该附件不是空净原始库**；空净先例见 `docs/08-case-air-purifier.md`。
