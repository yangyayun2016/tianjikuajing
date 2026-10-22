---
title: "04-接入 Telegram：详细配置指南"
feishu_url: https://my.feishu.cn/wiki/HBrxwSaiwi0hzqk2p09csMkOnzc
obj_type: docx
obj_token: FqhudZJmQoaM86xO8RqcIv6mnWd
updated: 2026-03-20T16:03:34+08:00
---

# 04-接入 Telegram：详细配置指南

> 🔗 链接： ⁣⁢⁣⁣⁡04-接入 Telegram：详细配置指南

> ⏰ 

> 【飞书文档】04-接入 Telegram：详细配置指南-可复制素材

前面几篇文章，我们都是通过命令行和 AI 对话。但这样太不方便了——每次都要打开终端，输入命令，体验不够好。

这篇文章，我就手把手教你把 OpenClaw 接入 **Telegram **，让 AI 真正"活"在你的常用聊天软件里。

# 一、前置准备

## 需要准备什么？

| 平台 | 需要什么 | 难度 |
|---|---|---|
| **Telegram** | 手机号注册 Telegram | ⭐⭐ |

**建议 **：新手先从 **Telegram **开始，配置更简单，成功率更高。

# 二、接入 Telegram

## 一）获取 Token

1. **创建 Bot 并获取 Token**
 在 Telegram 中搜索 `@BotFather` ，进入聊天界面。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_ZBsIbJrnQo.jpg)

1. 输入 `/newbot` ，按提示设置机器人名称和用户名，完成后会收到一个 **API Token **， **请务必保存好 **，后面配置时需要用到。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_NzA9bujHuo.jpg)

## 二）到openclaw配置 token

1. 打开终端，输入以下命令开始配置：

```
openclaw config
```

1. 选择 `local` 。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_VxBtb3x1go.jpg)

1. 进入 `channels` 配置项。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_BJbQb4akFo.jpg)

1. 选择 **配置连接 **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_OFTFb5236o.jpg)

1. 在平台列表中选择 **电报（Telegram） **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_Z1ItbAjuno.jpg)

1. 粘贴刚刚保存的 Bot Token。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_LDmgbs9JSo.jpg)

1. 确认无误后点击 **完成 **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_HrYbbvVJZo.jpg)

1. **进入配对模式**
 系统会询问安全策略，选择 `yes` ，默认使用配对模式。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_Qzm4blX0Qo.jpg)

1. 选择 **配对（Pairing） **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_EvoYb2lsto.jpg)

1. 点击 **继续 **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_B7axbDf55o.jpg)

## 三）启动 gateway

为了后面的配对请求正常发起，这里要启动 gateway 服务，输入以下命令启动：

```
openclaw gateway
```

如果之前已经启动过了，需要重启一下：

```
openclaw gateway restart
```

此时可以看到，前面配置的bot 加载成功了

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_FkrmbQKxQo.jpg)

> 注意：一定要确保刚才配置 token 的 bot 已经在启动时加载，否则，后面的配置码取不出来

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_RWhnbZh8No.jpg)

如果已经配置过 token，启动 gateway 时，未看到 bot 被加载，请检查 Token 是否正确

```
# 测试 Token 是否有效
curl https://api.telegram.org/bot<你的Token>/getMe
```

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_Cjz8boCzao.jpg)

## 四） 到 telegram 获取配对码

搜索你刚创建的 Bot 用户名，进入聊天界面，点击 **Start **。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_UyiSbMwtRo.jpg)

随便发送一条消息，Bot 会自动回复一个 **配对码（Pairing Code） **，请复制保存，后面配对环节会用到。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_RIXRbQV3oo.jpg)

---

## 五）完成配对

新开一个 终端窗口 执行以下命令，将 `openclaw` 与你的 Bot 绑定：

```
```bash
openclaw pairing approve telegram <你的配对码>
```
```

看到成功提示即表示配对完成。

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_EkG6baqP7o.jpg)

---

## 六）测试效果

现在回到 Telegram 中，向你的 Bot 发送任意消息。如果一切顺利，你会收到来自 `openclaw` 的回复，说明 Telegram 接入已成功生效！

![](assets/04-%E6%8E%A5%E5%85%A5%20Telegram%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97_BFmHbIOeNo.jpg)

**恭喜 ，你的 Telegram Bot 就配置完成了！**

