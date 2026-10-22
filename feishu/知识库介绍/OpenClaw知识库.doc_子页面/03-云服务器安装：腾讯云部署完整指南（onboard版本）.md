---
title: "03-云服务器安装：腾讯云部署完整指南（onboard版本）"
feishu_url: https://my.feishu.cn/wiki/Et57wtVHniI2t8kwBXncQpAYnqh
obj_type: docx
obj_token: M3C9d7RkFot5xnxaCQqclVumnbf
updated: 2026-03-13T14:42:47+08:00
---

# 03-云服务器安装：腾讯云部署完整指南（onboard版本）

> 

[第2章：环境搭建    openclaw前沿agent技术](https://my.feishu.cn/docx/BdfKd9vhKoTpQix0XUEcJJbfnig?from=from_copylink)

> 本教程适用没有本地设备/条件、想要尝试不确定要不要深度使用的会员，可以快速0成本上手体验OpenClaw。如果需要深度使用，请尝试本地部署以及购买大模型Token，详情咨询群内 阿坡、明鉴。

> *本教程可以让你实现体验基于腾讯轻量云Lighthouse一键秒级部署OpenClaw（原Clawdbot），7*24无间断运行，安全隔离，无惧AI影响个人主力电脑。*

> 后续教程提供：快速接入QQ、企微、飞书、钉钉等IM软件。

# 一、为什么要使用云服务器？

前两节分别介绍了OpenClaw部署在win和mac端硬件设备上，但是很多小伙伴没有适合的设备或者只有一台主力机。

所以为了让更多小伙伴能够更安全的体验到OpenClaw的乐趣，同时又不影响自己的正常工作生活，所以这边建议可以使用云服务器进行初步尝试！

[第2章：环境搭建    openclaw前沿agent技术](https://my.feishu.cn/docx/BdfKd9vhKoTpQix0XUEcJJbfnig?from=from_copylink)

## 一）为什么要使用云服务器？

下面是使用云服务器的一些特点：

1. **安全隔离 **：OpenClaw 权限高，云服务器与本地电脑环境隔离， **保护本地数据安全 **，避免损坏本地文件。

1. **24 小时在线 **：可让 OpenClaw 持续运行， **随时随地都能使用 **。

1. **系统适配 **：对 Linux 支持好，适合部署 OpenClaw。

1. **官方建议 **：OpenClaw 官方不推荐部署在主力电脑，云服务器是更稳妥的方案。

## 二）为什么要使用腾讯云服务器？

最近各家大厂云服务器层出不穷，经过对比，当前腾讯云性价比比较高，对于接入微信生态也是比较有优势（后续教程会根据各厂商优惠方案不同，做更新迭代），所以本次云服务器教程选择腾讯云部署方案！

1. **简单易用 **：无需懂复杂云计算， **几分钟就能上手 **。

1. **成本更低 **：相比买 Mac Mini， **价格更划算 **。

1. **开箱即用 **：提供 **OpenClaw 一键部署模板 **，自带依赖环境，不用手动安装。

1. **稳定持续 **：天然支持 **7×24 小时运行 **。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_TZImbkypMo.jpg)

> 如果你有其他的云服务器厂商资源，也可以部署其他服务器，本质上没有太多区别。

# 二、云服务器购买

## 一）腾讯云服务器活动版本（仅限首次购买服务器用户）

因为现在OpenClaw比较火，当前各家大厂纷纷入局，价格也是拉得很低，小鉴这边也是找到了性价比比较合适的方案，当前如果小伙伴入门玩耍的话，可以选择一折活动的 79元/年 4核4G3M 的方案。（价格会随着活动时间有浮动）

购买地址链接： [腾讯云国内高性价比服务器选购 ](https://cloud.tencent.com/act/pro/lighthouse-moltbot)（进入链接，一直向下滑动）

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_UvDab8m2Mo.jpg)

点击立即购买按钮，使用默认配置，直接点击立即购买，支付即可！（新用户可能需要实名认证，认证之后即可）

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_K47PbcTOmo.jpg)

认证之后，可以使用默认配置，然后点击立即购买。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_F2aZbyE9Qo.jpg)

可以查看是否使用了活动价购买：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_ZzVQbzFOJo.jpg)

使用适合的支付方式，优先推荐【在线支付】：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_SWaVbApO1o.jpg)

出现下面的界面代表购买成功，点击查看实例，即可进到自己专属服务器界面：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Eh26bXa19o.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Aa7JbqeZWo.jpg)

恭喜，OpenClaw腾讯云部署工作已完成50%

## 二）腾讯云服务器老用户

> 如果已购买活动版的腾讯云服务器，请跳过此步，跳转到第三步

如果上面的模版不能满足自己的需求，或者不满足首次购买标准，可以来到定制化选择配置，地址： [腾讯云服务器选配页面](https://buy.cloud.tencent.com/lighthouse?blueprintType=APP_OS&blueprintOfficialId=lhbp-dxuz4oaa&regionId=8&zone=ap-beijing-3&bundleId=bundle_rs_mc_med2_01&rule=true)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_GNSnbbYQto.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Ys5TbhA1po.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_F3GObBwC8o.jpg)

注意当前的价格是单月价格，如果新手，建议新注册账号参加活动，或者购买一个月体验！

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Cu6AbdZDLo.jpg)

点击查看服务器，即可进到自己服务器界面：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Pt4zb26HKo.jpg)

恭喜你，部署工作已完成50%，给自己鼓鼓掌吧～🎉🎉🎉

# 三、为服务器配置大模型

上一步刚购买的云服务器，当前服务器还不能够使用，如果想让OpenClaw具有聊天、管理、协助的能力，需要配置大模型给到服务器。

接下来带大家实操配置大模型流程。首先点击服务器卡片（上一步购买之后进入服务器界面）

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_GSMabQOTqo.jpg)

因为OpenClaw很火，所以腾讯云厂商已经帮大家做好模版，点进应用管理会发现已经在面板上列好了【模型】【通道】和【技能】了，很贴心。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_W3JvbaHqPo.jpg)

本小节主要配置大模型，系统内置了很多国内厂商的模型，如果不满足还可以自定义（使用一些中转站资源，使用海外的模型）

| ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_C2vGb7G27o.jpg) | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_W56Bbngsuo.jpg) |
|---|---|

本次以2025年爆火的deepseek来演示，选择deepseek模型，然后点击下方的链接，跳转到授权页面。

| ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_RkeJbofRJo.jpg) | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_NfJSbOodto.jpg) |
|---|---|

点击API keys列表，创建api key。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_GYmwbfAtno.jpg)

> ⚠️api key名字随便起，便于记忆即可，创建的API key要注意保存，只显示一次，后续丢失只能重新申请新的API key。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_BRGlbhsrWo.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Cw8cbW7tno.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Lpkxb5pN5o.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_O9SJb3AKCo.jpg)

当前已配置成功，其他大模型，原理一致。

# 四、体验腾讯云OpenClaw交互

大家都听过使用OpenClaw接入各种即时聊天类的APP渠道，在此之前，让我们先体验一下在服务器上的基础聊天操作。

首先要登录腾讯云服务器，在面板右上角找到【登陆】按钮：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_VDNXb9uQuo.jpg)

如果有二次验证的设置，还需要用户扫码验证：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Irmeb8kPmo.jpg)

登录之后，选择：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_PXKKbGGfGo.jpg)

然后进到终端命令行界面，进到这个界面新手朋友不要被吓到，就是这样的！

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_PwKEbEjylo.jpg)

我们在命令行中输入： `clawdbot onboard` 命令即可进入配置界面。就会看到OpenClaw大龙虾的配置信息了！

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_JeDxbXV1so.jpg)

我们滑到最后就会发现一些指令： 使用键盘左右按键可以控制选项，使用Enter回车键可以确定进行下一步操作。

## 一）签署免责协议

这一步主要是类似一个风险确认书，就是OpenClaw会操作你的设备，有一定风险，你是否继续， **选择Yes，然后按回车。**

（最大的风险就是把服务器玩关机，所以购买服务器最大的好处就是可以放心玩耍，不用担心把自己电脑的文件删除）

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_TdiybhAf3o.png)

## 二）设置启动模式

这里如果不是资深玩家，建议选择快速启动，然后按回车进行下一步：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_ZXpJbNoT3o.jpg)

## 三）设置认证参数

当前没有需要配置的参数，所以直接选择存在的参数值就好。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_QfYobsgEvo.jpg)

## 四）配置大模型

因为我们已经配置了DeepSeek，所以这里直接跳过就好

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_HLxQb8fNmo.jpg)

在这里直接选择 DeepSeek：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_KLfCbMKSxo.jpg)

选择保持当前的模型：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_QMTobsae7o.png)

## 五）选择渠道

这里咱们先选择跳过，后续会教大家在腾讯云中配置渠道参数

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_WMISbe4Fro.jpg)

## 六）配置Skills

接下来进行配置skills的模块，同样此时暂时不配置skill，因为skills很多，后续可以按需配置自己需要的skills。（当前不配置也不影响使用）

| ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_LCwybBH1Ko.jpg) | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_UPnIbxUeoo.jpg) | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_AuqfbsKmio.png) |
|---|---|---|

这个是多选，我们在【skip for now】模块，点击【空格键】可以选中这个选项，然后点击回车

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_Tkhkbxmeio.jpg)

## 七）配置国外的api

在这里，咱们如果有的话，可以配置，如果没有，直接全部选择No。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_OrnBb8w8ho.jpg)

## 八）其他选项

剩余其他选项，跟着流程操作即可：

| 选项 | 示意图 |
|---|---|
| Skip for now | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_WSZnbzgnho.jpg)  |
| Skip | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_OhNjbBMyLo.jpg)  |
| Hatch in TUI | ![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_SShXbbJHEo.jpg)  |

此刻可以正常对话。

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_FA79bAhQco.jpg)

# 五、显示设置

如果你的界面也像截图中一样，看不清文字，请你点击设置：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_LZnvbdDT9o.jpg)

在主题中选择一个你喜欢的样式即可：

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_A8TTbHDsfo.jpg)

然后在对话框中输入【你好 hello world】，即可看到他的回复！

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_NrUabQGFao.jpg)

![](assets/03-%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85%EF%BC%9A%E8%85%BE%E8%AE%AF%E4%BA%91%E9%83%A8%E7%BD%B2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97%EF%BC%88onboard%E7%89%88%E6%9C%AC%EF%BC%89_NwrabJ5BBo.jpg)

恭喜你，已完成从0到1 腾讯云部署OpenClaw的完整体验，请浏览其他教程，有问题欢迎群内交流～

我是明鉴，专注于AI自动化、TK跨境电商，欢迎交流～

