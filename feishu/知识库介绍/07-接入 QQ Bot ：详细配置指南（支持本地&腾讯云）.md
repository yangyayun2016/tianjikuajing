---
title: "07-接入 QQ Bot ：详细配置指南（支持本地&腾讯云）"
feishu_url: https://my.feishu.cn/wiki/OPk1wag7oiMLwakTexCcJMuZnpg
obj_type: docx
obj_token: B8JcdbJZ9o5Ou3xKow2cqhjLnMb
updated: 2026-03-11T11:08:26+08:00
---

# 07-接入 QQ Bot ：详细配置指南（支持本地&腾讯云）

> 🔗 

> **「恭喜你来到第7关！」 **本次特训将教会你如何让 AI 助手入驻 QQ，开启你的智能机器人之旅！

> ⏱️ 预计耗时：15-20 分钟 | ⭐ 难度：⭐⭐⭐ | 🎯 目标：成功在 QQ 上与 AI 对话

---

## 📋 任务背景

QQ 是国内最流行的即时通讯工具之一，拥有超过 7 亿用户。本次任务我们将学习如何将 OpenClaw AI 助手接入 QQ，让它成为你的智能机器人朋友！

**你将学到：**

- ✅ 如何注册 QQ 开放平台账号

- ✅ 如何创建并配置 QQ Bot

- ✅ 如何将 Bot 接入 OpenClaw

- ✅ 如何与你的 AI 助手首次对话

- 

---

# 一、基础配置

## 🎯 第一步：安装插件装备

> **如果是腾讯云配置，跳过此步，直接进入第二步：注册 QQ 开放平台**

> **「工欲善其事，必先利其器！」 **在开始之前，我们需要先安装 QQ Bot 插件。

在本地部署的OpenClaw中，我们会发现，Channel的模块中是找不到QQ这个插件的存在，所以为了让我们能够接入QQ这个渠道，我们需要安装对应的插件，来搞定。

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_KZcnbNEkuo.jpg)

### 方式一：快速安装（推荐 ⭐）

[复制代码](https://lightship-rpa.feishu.cn/wiki/XOdMwt3eyiNMQIk5iy6cMtjUnLb#share-DkwvdVq5toyalfxPqrXcAvB7nPd)

```
openclaw plugins install @sliverp/qqbot@latest
```

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_Ji1kbBwqzo.jpg)

### 方式二：源码安装

如果方式一安装不成功，请参考下面的代码进行安装

[复制代码](https://lightship-rpa.feishu.cn/wiki/XOdMwt3eyiNMQIk5iy6cMtjUnLb#share-UJj4dUvIVoAEbqx8EXtc4NxEnCh)

```
git clone https://github.com/sliverp/qqbot.git && cd qqbot
openclaw plugins install .
```

> 💡 **小贴士 **：如果你在安装过程中遇到问题，记得在训练营的社群提问哦！

---

## 🎯 第二步：注册 QQ 开放平台

> **「这是成为开发者的第一步！」**

### 步骤 2.1：访问 QQ 开放平台

前往 [QQ 开放平台官网 ](https://open.qq.com/)👈 点击跳转

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_R1qIb5md7o.jpg)

> ⚠️ **注意 **：可以先使用QQ扫码的方式，如果你现有的 QQ 号无法直接登录，需要新注册一个开发者账号哦！

| ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_NEEMbBuQBo.jpg) | ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_O2L7bewMyo.jpg) 当前扫码登录不上，证明需要重新注册QQ开放平台账号 |
|---|---|

注册账号：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_VdzQbQARoo.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_N4Nmb1T5Ro.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_UUe0b27tvo.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_EIYZbwyA6o.jpg)

点击即可验证，弹出设置超级管理员界面：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_UuK8bBJ2po.jpg)

### 步骤 2.2：设置超级管理员，填写主体信息+人脸验证

首次注册后，按照指引设置超级管理员信息：

以「个人」为例，依次填写：

- 📛 姓名

- 🆔 身份证号

- 📱 手机号

- 🔢 验证码

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_RjjSba0ySo.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_DlJvbt6fro.jpg)

> 🎉 **恭喜！ **审核通过后，你就可以登录 QQ 开放平台啦！

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_IRsPbIXVOo.jpg)

重新登陆即可：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_AD6WbrGiQo.jpg)

---

## 🎯 第三步：创建你的专属 Bot

> **「是时候创造一个属于你的机器人了！」**

### 步骤 3.1：创建机器人

在 QQ 开放平台的「QQ机器人」页面，点击「创建机器人」：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_K6h3btYHso.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_HLBzbBbG7o.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_RC75bsEQHo.jpg)

### 步骤 3.2：获取密钥

机器人创建完成后，点击进入管理页面，获取你的：

- 🔑 **AppID**

- 🔐 **AppSecret**

- 

> ⚠️ **重要 **：AppSecret 只显示一次！请立即保存到安全的地方（推荐：密码管理器）

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_MnXmbgzimo.jpg)

---

## 🎯 第四步：沙箱配置

> **「让机器人在安全环境中练兵！」**

### 步骤 4.1：进入开发管理

在机器人管理页面，找到「沙箱配置」：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_PYSybRNFdo.jpg)

### 步骤 4.2：配置单独聊天

选择「在消息列表配置」：

> ⚠️ **注意 **：QQ 开放平台暂不支持群聊配置，目前只能与机器人单独聊天哦！

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_Kpy4bKzbao.jpg)

### 步骤 4.3：添加成员

1. 先在「成员管理」中添加成员

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_AIX1blWWjo.jpg)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_QdA9bBhSCo.jpg)

1. 非管理员成员需通过 QQ 扫码来添加机器人 

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_EvrDbGldto.png)

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_EZpFbBuiCo.jpg)

| ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_STcbbuP7oo.jpg) | ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_QtGwb2XI2o.jpg) |
|---|---|

> 🤔 **等等！ **如果你看到「该机器人去火星了，稍后再试吧」的提示，别慌！这是正常的 —— 因为机器人还没和 OpenClaw 打通呢。继续往下走！

---

# 二、本地配置：

> 腾讯云配置请移步下方腾讯云配置章节： [【飞书文档】07-接入 QQ Bot ：详细配置指南](https://lightship-rpa.feishu.cn/wiki/QnlFwOtOTiCLZLkH0bvcBysnnUb?fromScene=spaceOverview#share-TZCXdCwIQoDa2MxzpSLcNG4RnBb)

## 🎯 第五步：配置 OpenClaw

> **「最后一步，连接两个世界！」**

### 方式一：Wizard 配置（推荐 ⭐）

[复制代码](https://lightship-rpa.feishu.cn/wiki/XOdMwt3eyiNMQIk5iy6cMtjUnLb#share-KFUPdNvcfobBe6xuA1kcrOT8nZd)

```
openclaw channels add --channel qqbot --token "你的AppID:你的AppSecret"
```

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_PWDZbckaMo.jpg)

### 方式二：配置文件配置

如果上述的指令不成功，还可以直接配置文件：

编辑 `~/.openclaw/openclaw.json` :

[复制代码](https://lightship-rpa.feishu.cn/wiki/XOdMwt3eyiNMQIk5iy6cMtjUnLb#share-Fv2NdKSkToZPLHx3aZMchr5jnhf)

```
{
  "channels": {
    "qqbot": {
      "enabled": true,
      "appId": "你的AppID",
      "clientSecret": "你的AppSecret"
    }
  }
}
```

---

## 🎯 第六步：启动与测试

> **「见证奇迹的时刻！」**

### 步骤 6.1：启动 Gateway

```
openclaw gateway
```

### 步骤 6.2：开始对话

打开手机 QQ，找到你的机器人，开始聊天吧！

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_CwNgb3uGfo.jpg)

# 三、腾讯云配置：

登陆网站： https://console.cloud.tencent.com/lighthouse/instance/index?rid=4

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_EnllbP4L5o.jpg)

将之前的APPID和APPSecret填入并点击添加应用：

![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_VsypbfNQ5o.jpg)

部署成功显示已接入通道，然后就可以回到QQ进行聊天了：

| ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_ScbUbxIHOo.jpg) | ![](assets/07-%E6%8E%A5%E5%85%A5%20QQ%20Bot%20%EF%BC%9A%E8%AF%A6%E7%BB%86%E9%85%8D%E7%BD%AE%E6%8C%87%E5%8D%97%EF%BC%88%E6%94%AF%E6%8C%81%E6%9C%AC%E5%9C%B0%26%E8%85%BE%E8%AE%AF%E4%BA%91%EF%BC%89_C8slb6odto.jpg) |
|---|---|

---

## ❓ 常见问题

**Q：为什么我的 Bot 一直显示"去火星了"？**

> A：这是因为还没有配置 OpenClaw！完成步骤 5 即可解决。

**Q：AppSecret 忘记了怎么办？**

> A：可以在机器人管理页面重新生成，但之前的密钥会失效。

**Q：可以不注册开发者账号直接用现有 QQ 吗？**

> A：不可以，必须注册 QQ 开放平台的开发者账号。

---

> **「太棒了！你已经完成了 QQ Bot 的接入！」**

> 

> 🎉 **训练营提示 **：记得把完成情况记录到你的训练营笔记中，下一个任务再见！

> 

