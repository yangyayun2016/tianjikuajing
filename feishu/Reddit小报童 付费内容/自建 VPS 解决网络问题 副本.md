---
title: "自建 VPS 解决网络问题 副本"
feishu_url: https://my.feishu.cn/wiki/Y3GzwbIF4iN51QkkkqDcPy1ynag
obj_type: docx
obj_token: U8XNdaDLtoqe9axEBwectxmFncD
updated: 2026-02-06T10:21:48+08:00
---

# 自建 VPS 解决网络问题 副本

# 方案一：IP和VPS分开买

https://articles.zsxq.com/id_gb6sbbbl616f.html

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_Ro0rbCWroo.jpg)

自建 VPS 优势

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_Q1ZLbZ6iko.jpg)

静态住宅 IP 优势

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_JMi6bJldJo.jpg)

1. 准备银行卡用于海外支付

1. Webshare

可以直接用谷歌登录

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_ELi2br99Po.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_KEX3bwPOro.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_MiHlbZt0Mo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_PiFHbv5Vxo.jpg)

点订阅，自行支付，看到这个界面就成功了

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_DQa2bCRWNo.jpg)

## 买 vps

谷歌登录

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_HeHLbXNQOo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_PpFpbaTQso.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_WaV9bJpMFo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_HusGbYva5o.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_YA86bA3eNo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_O1nSbufMTo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_AfClbsEZao.jpg)

```
ssh root@45.63.0.66
```

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_QYuNbp7vXo.jpg)

```
apt update -y && apt install -y curl wget
```

```
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

至少充值 10 美元

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_V2DZbuXdUo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_YaNybSXXAo.jpg)

vps中开放端口(提前开放3x-ui面板端口，后续yps需要用到的端口，在finalshell中依次执行下列命令(自己的3x-ui端口对应替换)，前面2条是开放需要的端口，保证外部可访问，第3条命令是重新加载防火墙，让配置放行的端口生效

```
ufw allow 443/tcp
ufw allow 43221/tcp
ufw allow 2096/tcp
ufw reload
```

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_I01AbGlteo.jpg)

先 add group

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_WisMbpIjXo.jpg)

```
http://45.63.0.66:43221/GxFdeF87iUOwPMtgry

iSqwllc0ie
bgrtjUGvX9
```

```
curl -x "http://用户名:密码@代理IP:代理端口" -I https://example.com --connect-timeout 10

curl --proxy "http://pnhwaybm:60g6p0h0oa6o@216.98.252.251:5981/" https://ipv4.webshare.io/
```

# 方案二：丽萨主机合并解决

https://lisahost.com

确保长时间连接

```
mkdir -p ~/.ssh && touch ~/.ssh/config

# 如果已存在同名配置，可先备份
cp ~/.ssh/config ~/.ssh/config.bak.$(date +%Y%m%d%H%M%S)

# 追加全局保活配置
cat >> ~/.ssh/config <<'EOF'

Host *
    ServerAliveInterval 30
    ServerAliveCountMax 6
    TCPKeepAlive yes
EOF

chmod 600 ~/.ssh/config

echo "✅ SSH keepalive 已启用：ServerAliveInterval=30, ServerAliveCountMax=6"
```

安装：https://github.com/Alvin9999/Sing-Box-Plus

**github.com/yonggekkk**

https://github.com/yonggekkk/sing-box-yg

```
bash <(wget -qO- https://raw.githubusercontent.com/yonggekkk/sing-box-yg/main/sb.sh)
```

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_LyiAbuWSBo.jpg)

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_YlvxbutUxo.jpg)

输入 1，安装

随时输入`sb` 调出面板

输入 11，加速

输入 9 查看订阅链接 - 选择 2- 然后把下面 从 port 开始的所有内容复制到本地的文本文件里，改名为： `xxx.yaml`

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_GVksbafQyo.jpg)

## 订阅

下载 flclash

https://flclash.cc/en/download.html

打开后，跳到「配置页」，点右下角的+ 导入配置

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_G4KEbHlyKo.jpg)

选择文件

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_Xs5tbSyi6o.jpg)

配置出现后，就证明导入成功了

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_AbNbbaBCqo.jpg)

此时切换回「代理」，先点一下右下角测速度

图中 204ms 是速度，每次测试都不一样，是绿色的证明是通常的

选择如图的 vless 方案

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_AXFVbBMydo.jpg)

回到首页，如图顺序打开后，确保网络检测是美国地址，就可以打开系统代理

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_BwrubaJGno.jpg)

打开 ping0.cc

检测 ip 纯净即可

![](assets/%E8%87%AA%E5%BB%BA%20VPS%20%E8%A7%A3%E5%86%B3%E7%BD%91%E7%BB%9C%E9%97%AE%E9%A2%98%20%E5%89%AF%E6%9C%AC_Q7RKbxRUJo.jpg)

