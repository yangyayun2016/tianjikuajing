---
title: "06-腾讯云+飞书+ MiniMax全流程配置指南（3月6日）"
feishu_url: https://my.feishu.cn/wiki/ES3dwbqCNi6CthkCVBvcrDBanFg
obj_type: docx
obj_token: Im2pdDEIooxHiQx0DMsc2MpYnYK
updated: 2026-03-11T11:08:33+08:00
---

# 06-腾讯云+飞书+ MiniMax全流程配置指南（3月6日）

> 🔗 

# 一、登录腾讯云服务器

## 一）做一些前期工作

首先，我们需要登录到部署了 OpenClaw 的腾讯云服务器。阿坡推荐使用 Orcaterm 来操作我们云服务器上的 openclaw：

下载地址：https://orcaterm.com/

> 💡 **小提示 **：Orcaterm 是腾讯云出品的一个免费的在线 SSH 终端工具，支持腾讯云账号一键登录，非常方便。

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_XEvxbK0WXo.jpg)

OrcaTerm 安装完成后，点击左下角的 **登录 **按钮：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_FgntbVArzo.jpg)

选择「腾讯云账号登录」，系统会自动拉起网页进行登录授权。

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_F09Dbtk6Mo.jpg)

会打开浏览器进入授权页面：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_XsQtbguMgo.jpg)

登录成功后，在左侧边栏点击第二个 Tab**「轻量应用服务器」**。

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_PMuebbAqpo.jpg)

这就是我们之前购买的云服务器了，点击进去。

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_IrLYbYBw7o.jpg)

选择免密连接，点击连接并保存，然后就直接进入服务器终端了。

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_IXD2bo6Y9o.jpg)

进入终端后，先进入Openclaw主目录，并打开资源管理器：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_C7EJbw0gSo.jpg)

显示隐藏文件：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Do7FbAmdCo.jpg)

点击进入 openclaw 主目录：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Q2FQbMIVqo.jpg)

先对腾讯给我们配置的用不上的东西做一下清理（可跳过）：

打开 `.openclaw.json` 主配置文件：

删除飞书以外的配置，暂时用不上，用的时候再配置也不晚：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_VLmDb0qP3o.jpg)

删完记得 Ctrl+s 保存

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_MJV4btEP4o.jpg)

删完后看着清爽多了：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_DcoZbBn5Qo.jpg)

## 二）给openclaw配置个”大脑“

这里我以为 MiniMax 的大模型为例，给 openclaw 配置”大脑“：

大家可以选择自己喜欢的大模型，MiniMax 购买地址： [https://platform.minimaxi.com/subscribe/coding-plan](https://platform.minimaxi.com/subscribe/coding-plan?code=FSXNO2PNQ1&source=link)

进入配置向导：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_KxXNbeLH5o.jpg)

选择模型：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Ne5sbTnONo.jpg)

选择 Minimax：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_T5KcbYlDyo.jpg)

选择 CN：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Y9jcbtq5Do.jpg)

输选择粘贴Api Key：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Hu88bf7gmo.jpg)

输入自己的API Key:

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Wpsib0JJho.jpg)

默认选择minimax2.5，回车即可：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_H5VCbXAzho.jpg)

完成：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_PduNb8Afro.jpg)

腾讯服务器的准备操作，暂时先告一段落，接下来进入飞书后台，创建飞书应用

# 二、飞书创建应用

## 一） 进入飞书开发者后台

打开浏览器，访问飞书开发者后台：

**网址 **：https://open.feishu.cn/app?lang=zh-CN

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_LrlDbkn9no.jpg)

## 二）创建多个机器人应用

根据你的需求，创建一个应用。

接下来我们以创建应用：创意助理-墨灵为例进行讲解：

**创建步骤 **：

1、点击**「创建企业自建应用」** 2、填写应用名称、图标、描述 3、点击 **创建**

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_VWbDbKYkFo.jpg)

## 三）记录凭证信息

每个应用创建成功后，都需要记录以下信息：

- **App ID**

- **App Secret**

> ⚠️ **重要提醒 **： 后面还会创建多个Bot，建议将这些信息粘贴到记事本里，保存好！

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_J8RMbrv9No.jpg)

## 四）添加机器人

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_YZ0NbXWV4o.jpg)

## 五）配置权限

对每个应用，都需要配置相同的权限：

点击左侧菜单的「权限管理」→ 「开通权限」：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_XMt9bsJ4lo.jpg)

配置完成后， **记得点击「发布」按钮 **！

> 注意： 飞书应用所有的改动一定记得要发布！不然不生效！

点击创建版本并发布：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_PE7Tb0z2Vo.jpg)

填写版本信息：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_AbusbtK0co.jpg)

点击保存：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_XAbQbZeVeo.jpg)

点击申请线上发布按钮：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_LTiMbg8Lgo.jpg)

来到飞书客户端审批应用通过：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_OPifbRxDFo.jpg)

再回到开发者后台，看到应用状态是已发布：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_SbLYb9fz0o.jpg)

## 六）回到腾讯云服务器配置飞书凭证

前面我们已经获取了飞书应用的AppID和AppSecret，现在来到Openclaw配置向导，将飞书应用凭证配置进去：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_DqXobqe3Co.jpg)

选择渠道：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_UeJUbF6wao.jpg)

选择配置/链接：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_WwYybNt5Qo.jpg)

选择飞书：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_WqOJbgLqYo.jpg)

下载飞书插件：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_A5M9bcHF0o.png)

下载安装飞书插件时报错：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_BPxxbRIL2o.jpg)

把报错信息丢给 Claude Code 来修复：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_VE35bdJVYo.jpg)

修复完成：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_UV8ebtNgqo.jpg)

现在重新进入配置向导配置飞书渠道:

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_HcDMb6TI4o.jpg)

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Ml5CbheJko.png)

默认选择 websocket：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_SHWTb24wdo.jpg)

选择中国：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_JPOKbMOEho.png)

选择仅响应所有群组，后面也可修改：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_HzkrbdhaZo.png)

选择 DM 访问策略，默认配对：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_HNITbifXAo.jpg)

选择配对：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Co7CbkfQoo.jpg)

启动 gateway 服务： 已经启动的，输入 `openclaw gateway restart` 重启：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_ClvsbdhVxo.jpg)

## 七）回到飞书后台配置事件订阅

点击左侧菜单的「事件与回调」→ 「事件配置」 →「订阅方式右侧点击编辑按钮」：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_J0PObE1gHo.jpg)

点击保存：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_TZWSb6TCzo.jpg)

可以看到添加事件按钮由原来的灰色不可点击变为可点击：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_CH8FbxF5co.jpg)

 添加接收消息事件：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Xu7rbVANPo.jpg)

给应用开通获取通讯录基本信息的权限：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_K6vjbNxVvo.jpg)

不要忘记发版：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_UrJyb7bWio.jpg)

## 八）来到飞书客户端打开机器人获取配对码

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_DbySb9U2jo.jpg)

给机器人发个消息，获取包含配对码的配对指令：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_KhD7bCwpWo.jpg)

## 九）回到腾讯云openclaw执行配对

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_Gyb5bFXXSo.jpg)

测试连通性：

![](assets/06-%E8%85%BE%E8%AE%AF%E4%BA%91%2B%E9%A3%9E%E4%B9%A6%2B%20MiniMax%E5%85%A8%E6%B5%81%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%883%E6%9C%886%E6%97%A5%EF%BC%89_NqJsbqWmLo.jpg)

恭喜你，现在你就可以跟你的机器人进行对话了！

