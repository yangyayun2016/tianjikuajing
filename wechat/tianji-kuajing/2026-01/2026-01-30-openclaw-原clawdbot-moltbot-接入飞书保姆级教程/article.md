---
title: OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程
source_url: "https://mp.weixin.qq.com/s/08cLfbY2KYyLwvmh8W-DLg"
published_at: "2026-01-30T21:09:58+08:00"
content_hash: 096f4a3a3ff03f9020d0b967e8a84a25f90716219b466be1c2421787819db6b7
platform: wechat
author: 天机跨境
account: tianji-kuajing
---
# OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程

> Source: wechat
> Author: 天机跨境
> Original: https://mp.weixin.qq.com/s/08cLfbY2KYyLwvmh8W-DLg

---

![cover](images/cover.jpg)

---

## OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程

今天讲讲最火的Clawdbot/Moltbot(现在更名为OpenClaw)，怎么部署哦，以及怎么使用，用一些案例讲解，如何做到最有效，亲测有效~目前全流程保姆级教程，本文内容大致是

①云服务选择-轻量应用服务器②VPS好处

③无痛使用，接入飞书，启动机器人聊天窗口

④案例，实操& 使用场景，后面还会继续更新

⑥讨论(微信13265758038)

一站式接入飞书，教程 无痛使用

玩转 Lighthouse｜OpenClaw（原 Moltbot）接入飞书保姆级教程 原创

### 写在前面

双手奉上🚀 云上Moltbot（原moltbot）最全实践指南合辑

https://cloud.tencent.com/developer/article/2624973

欢迎大家打开链接查询更多接入教程！

### 一、一句话介绍：什么是 Moltbot？

Moltbot 原名 moltbot，是一款可运行在个人环境中的高权限 AI 智能体，支持通过 WhatsApp、飞书、Telegram 等常用聊天软件交互，能实现邮件发送、日程管理、数据查询等自动化任务，且数据隐私自主可控，搭配腾讯云 Lighthouse 可实现 7\*24 小时无间断运行（下文为适配操作场景，部分环节仍沿用“moltbot”表述，均指代同一产品 Moltbot）。

#### 二、部署到 Lighthouse 教程

基于腾讯云 Lighthouse 应用模板，可通过 “新购实例” 或 “重装旧实例” 两种方式一键部署 Moltbot（原 moltbot），无需手动配置运行环境，全程仅需几分钟，新手可直接跟着操作。

#### 方式一：选购一台Lighthouse实例

前往Lighthouse购买页，配置项按照下图直接选择即可

- 应用创建方式：应用模板 > AI智能体 > moltbot
- 地域：优先选择海外地域，如硅谷、弗吉尼亚、新加坡等
- 套餐

- 套餐类型：锐驰型（推荐）、入门型、通用型
- 套餐配置：2C  2GB或以上均可

- 服务器名称、登录方式等按需配置即可。

![Image](images/img_001.png)

配置完成后，点击页面右下角“立即购买”，按照页面引导完成支付即可。

#### 方式二：重装一台“吃灰机”

在Lighthouse控制台内，找到自己账号下长期吃灰的那台Lighthouse实例，在实例页面内点击“…”或“更多”按钮，找到并点击**重装系统**。

注意：moltbot应用模板仅上架至中国香港、其他海外地域。因此未上架地域的重装系统页无法看到moltbot的选项。

在重装系统的页面，选择应用模板 > AI 智能体 > moltbot，登录凭证可以先直接选择重装后设置。

备份选项处，建议优先选择备份后重装，以免原实例内还存放部分重要数据。

点击页面内的**确认**按钮，待重装完成后，继续进行后续步骤即可～

#### 登入服务器完成后续步骤

前往Lighthouse控制台即可查看刚刚选购或重装完成的moltbot实例，点击页面内的“登录按钮”：

![Image](images/img_002.png)

点击登录后，在登录工具（OrcaTerm）的页面内，选择免密连接，点击登录即可：

![Image](images/img_003.png)

登录成功的界面：

![Image](images/img_004.png)

### 后续配置

moltbot与常见的应用模板不同，官方提供了若干需用户自行手动配置的步骤，在首次登入服务器后，输入并回车运行如下命令开始配置：

代码语言：txt

AI代码解释


```
moltbot onboard
```


运行 moltbot onboard 后，需要通过键盘来完成后续配置动作，关键操作：方向键控制选项，回车表示选择并确认。

#### 同意免责声明

运行上面的命令后，将会出现一个问题：是否知晓风险，选择Yes就行。

#### 配置模式选择：快速入门

接下来需要选择Onboarding的模式，我们选择QuickStart。

#### 模型配置

注意由于Kimi、MiniMax、GLM分了国际版和国内版，moltbot默认集成的是国际版的接口地址，因此如果在配置模型时需要使用这三家的模型，则需要登录国际版控制台申请API Key：

- Kimi：https://platform.moonshot.ai/
- MiniMax：https://platform.minimax.io/
- GLM：https://z.ai/manage-apikey/apikey-list

紧接着的一步是选择Model/auth提供商，如果想省时省心的话优先推荐选择国内的厂商（MiniMax、Qwen、Moonshot AI、Z.AI/GLM）默认模型选择Keep current。

#### 聊天软件（Channel）配置

最新moltbot镜像已支持飞书，但是在onboard流程中不会显示；

⚠️ 这里请大家先跳过！后续我们通过增加channel的方式添加！（详见下文）

#### 技能包（Skill）配置

新手暂时无需添加额外技能包，选中 “No” 跳过，按回车键确认；

如果选择“Yes”，可以现行跳过，后续再进行配置。

![Image](images/img_005.png)

这个是很重要的一点要注意session-memory 上下文 记忆 一定要

#### Hooks 配置

选中 “Memory”（启用记忆功能，支持多轮对话上下文关联，避免每次聊天都需要重复说明需求），按回车键确认；

![Image](images/img_006.png)

#### 等待部署完成

配置确认后，系统将自动完成部署，耗时约 30 秒 - 1 分钟，无需操作，待配置向导自动退出，返回命令行界面（显示「root@VM-xxx-ubuntu:~#」），即为部署成功。

##### 创建飞书企业自建应用

1. 访问飞书开发者平台（https://open.feishu.cn/app?lang=zh-CN）；
2. 登录后，点击 “创建企业自建应用”；
3. 填写应用基础信息：应用名称（如 “Moltbot 助手”），选择应用图标，点击 “创建” 按钮，进入应用管理页面。

![Image](images/img_007.png)

4.添加机器人能力：在应用管理页左侧导航栏，找到并点击 “添加应用能力”，在弹出的列表中选择 “机器人”，点击 “添加”。

![Image](images/img_008.png)

5.点击上方的创建版本并发布。

![Image](images/img_009.png)

**获取飞书应用凭证**

1. 在飞书应用管理页，左侧导航栏找到 “凭据与基础信息” 栏目，点击进入；
2. 在页面中找到 “App ID” 和 “App Secret” 两个参数，分别点击右侧 “复制” 按钮，将其保存到记事本或备忘录中；

![Image](images/img_010.png)

3.保存完成后，不要关闭飞书开发者平台页面，后续配置权限还需使用。

#### 添加飞书channel配置

返回终端运行下方命令

代码语言：txt

AI代码解释


```
moltbot channels add
```


选择"Yes"以及“飞书”；

![Image](images/img_011.png)

![Image](images/img_012.png)

#### 输入APP id 与 APP Secret

输入上一步获取到的id与secret，回车确认；

![Image](images/img_013.png)

#### 完成添加流程

完成APP ID与Secret配置后，选择Finish即可；

![Image](images/img_014.png)

![Image](images/img_015.png)

**在终端启动网关，运行下方命令：**

代码语言：txt

AI代码解释


```
moltbot gateway --port 18789 --verbose


```


#### 三、飞书机器人配置

##### 飞书应用权限与事件配置

此步骤分为「事件配置」「权限配置」「应用发布」三部分，全程在飞书开发者平台操作，按顺序执行：

###### （1）事件配置

1. 在飞书应用管理页，左侧导航栏找到 “事件与回调” 栏目，点击进入；
2. 事件配置：在页面中选择 “长连接”，点击 “保存”；

⚠️如果这一步提示“**未建立长连接”，**请检查自己的APP ID和APP Secret是否已正确配置。

（操作见上一步：添加飞书channel配置-配置APP ID与APP Secret）

![Image](images/img_016.png)

3.添加事件：点击页面中的 “添加事件”，在弹出的事件列表中，选择 “消息与群组” 分类，勾选 “接收消息”，点击 “确定”，完成事件订阅。

![Image](images/img_017.png)

4.回调配置：订阅方式选择 “使用长连接”，无需填写其他地址，配置自动生效。

![Image](images/img_018.png)

###### （2）权限配置

1. 在飞书应用管理页，左侧导航栏找到 “权限管理” 栏目，点击进入；
2. 点击页面中的 “批量导入权限” 按钮，弹出权限导入窗口；

![Image](images/img_019.png)

![Image](images/img_020.png)

3.复制以下 JSON 代码，粘贴到导入窗口的输入框中，点击 “导入” 按钮，等待权限导入完成：

代码语言：txt

AI代码解释


```
{
  "scopes": {
    "tenant": [
      "contact:user.base:readonly",
      "im:chat",
      "im:chat:read",
      "im:chat:update",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.p2p_msg:readonly",
      "im:message:send_as_bot",
      "im:resource"
    ],
    "user": []
  }
}
```


4.导入验证：页面显示 “导入成功”，且权限列表中出现上述导入的权限，即为配置完成。

###### （3）发布应用

1. 在飞书应用管理页，左侧导航栏找到 “版本管理与发布” 栏目，点击进入；
2. 点击右上角的新建版本；

![Image](images/img_021.png)

填写版本号与描述后，保存并发布；

![Image](images/img_022.png)

1. ##### **启动 Moltbot 网关**

回到 OrcaTerm 命令行界面，输入以下命令，启动后不要关闭命令行窗口：

代码语言：txt

AI代码解释


```
moltbot gateway
```


7. ##### **验证飞书接入**

1. 打开手机或电脑端飞书 APP，登录与飞书开发者平台相同的账号；
2. 在飞书首页，找到 “工作台” 入口，点击进入，在工作台列表中找到已发布的 Moltbot 应用（如 “Moltbot 助手”），点击进入；
3. 系统将自动启动私聊窗口，发送任意消息（如 “你好”“查询今日日程”）；
4. 验证结果：如果收到 Moltbot 的回复，即为飞书接入成功

![Image](images/img_023.png)

**大家快快用起来吧！！！**

### 写在前面

双手奉上🚀 云上OpenClaw（原moltbot）最全实践指南合辑

https://cloud.tencent.com/developer/article/2624973

欢迎大家打开链接查询更多接入教程！

![Image](images/img_024.png)

### 一、一句话介绍：什么是OpenClaw  Moltbot？

OpenClaw 原名 moltbot，是一款可运行在个人环境中的高权限 AI 智能体，支持通过 WhatsApp、飞书、Telegram 等常用聊天软件交互，能实现邮件发送、日程管理、数据查询等自动化任务，且数据隐私自主可控，搭配腾讯云 Lighthouse 可实现 7\*24 小时无间断运行（下文为适配操作场景，部分环节仍沿用“moltbot”表述，均指代同一产品 Moltbot）。

#### 二、部署到 Lighthouse 教程

基于腾讯云 Lighthouse 应用模板，可通过 “新购实例” 或 “重装旧实例” 两种方式一键部署 Moltbot（原 moltbot），无需手动配置运行环境，全程仅需几分钟，新手可直接跟着操作。

OpenClaw

## OpenClaw（原 moltbot）接入飞书保姆级教程

从原理上讲：Mac系统本质上只是Linux/Unix套壳，我们直接租云端的Linux VPS(虚拟电脑)就可以了，每个月只要几十块钱。

我用的是腾讯云，一个月20.7元。也可以用阿里云、火山云、其他的LInux VPS。有的厂商还有优惠，前几个月不要钱。模型API Key我用的是谷歌Gemini Pro ，也可以用国产大模型（推荐谷歌Gemini）

只提醒一点：选用海外的服务器，这样网络方面可以方便一些。

https://console.cloud.tencent.com/?Is=sdk-topnav

在“控制台”找到“轻量应用服务器”

![Image](images/img_025.png)

https://console.cloud.tencent.com/

选择Moltbot(Clawdbot)

![Image](images/img_026.jpg)

选择CPU核心不少于2核、内存不小于2G的。

比如我截图这个月，一个月才20.4元。如果要安装桌面，建议内存4G起。

![Image](images/img_027.jpg)

不要担心资源不够用。实测2核2G、2核4G都够用。下面是我的腾讯云VPS过去一天的资源占用情况。

![Image](images/img_028.jpg)

使用Linux VPS跑Moltbot，除了省钱，还有额外的好处：

- 永久在线、网络环境比较好
- 稳定性强,无故障
- 虚拟机，安全，不怕搞坏
- 不需要科学上网，因为本来就是海外的VPS

我是选择新加坡的地址CPU 2核 内存2GB 系统盘40GB，在那个登录旁边选择：“重装系统”

![Image](images/img_029.png)

![Image](images/img_030.png)

点击登录-免密链接TAT

![Image](images/img_031.png)

登录进去的页面是显示root@VM-015-ubuntu:~# (远程终端OrcaTerm)

![Image](images/img_032.png)

后续配置（按自己实际需求）

![Image](images/img_033.png)

moltbot onboard

输入指令，需要注意一点：在终端内运行需要通过键盘来完成（方向健 上下-选择，回车- 确认）

![Image](images/img_034.png)

![Image](images/img_035.png)

同意免责申明 “我明白它功能强大，但也存在固有风险。是否继续？”

(I understand this is powerful and inherently risky. Continue?)  选择 Yes

### 配置模式选择：快速入门 快速启动（QuickStart）模式

接下来需要选择Onboarding的模式，我们选择`QuickStart`。

![Image](images/img_036.png)

![Image](images/img_037.png)

我目前用的是Gemini Pro学生版 （配置的是Gemini API Key）,比较稳定，有三百美金免费额度

![Image](images/img_038.png)

![Image](images/img_039.png)

目前可以接入国内主要聊天平台，推荐使用飞书 和钉钉

![Image](images/img_040.png)

**在onboard面板中选择对应的软件后，即可正式开始接入飞书、钉钉、QQ、企业微信、Discord等各类软件，详细操作指引可参见**🚀 云上Moltbot（原moltbot）最全实践指南合辑。

https://cloud.tencent.com/developer/article/2625073

## OpenClaw（原 Moltbot）接入飞书保姆级教程

原创

![Image](images/img_041.png)

![Image](images/img_042.png)

![Image](images/img_043.png)

![Image](images/img_044.png)

![Image](images/img_045.png)

如果你不喜欢黑乎乎的命令行，更喜欢可视化界面，那也没问题，Linux也是可以装上桌面的。安装一个XFCE

我给我的Linux安装了一个最简单的桌面XFCE，还可以通过我的Macbook/Windows，通过“远程桌面”的方式连接它

![Image](images/img_046.jpg)

## 给OpenClaw配一台永远在线的电脑

腾讯云可以一键部署OpenClaw(moltbot)了

选择最便宜的套餐即可 国内新加坡 选择最便宜的套装， 20.7一个月，配置2核2G

执行


```
moltbot onboard --install-daemon
```


接受一些霸王条款“我理解非常有风险”。选择Yes

后面跟着指引就能配置完成，如果英文不好，自己想办法翻译一下即可。moltbot指引做得很好，就算是没有技术功底的人，也不需要看自媒体博主的二手指导。

![Image](images/img_047.jpg)

![Image](images/img_048.png)

![Image](images/img_049.png)

![Image](images/img_050.png)

PS踩坑~~

默认推荐是用Telegram进行沟通。按照moltbot的指引，很快就无痛配置好了。

![Image](images/img_051.jpg)

![Image](images/img_052.png)

玩转 Lighthouse｜OpenClaw（原 moltbot/clawdbot）接入飞书保姆级教程 原创

https://cloud.tencent.com/developer/article/2625073

默认的Telegram实在是不好用，因为我们的工作和生活都不在Telegram上。

考虑到主要是想给工作提效，我给OpenClaw(moltbot)配置了飞书。

至于具体怎么配置飞书？跳转后面查看， 无痛使用

①可以跳转后面手把手教搭建，无痛 使用，大家可以试试

②让OpenClaw自己搭建

我哪儿知道，我让OpenClaw，moltbot自己给自己配置的


```
https://github.com/m1heng/moltbot-feishu
根据这个说明，帮我配置飞书，我要用飞书和moltbot沟通
```


大概两分钟就好了，需要人工操作的部分，大多数是设置AppID、AppSecrect、权限等等，按照指引，逐一操作，简单。

做完以后，我们以后就用飞书来沟通了。

案例：

**下面是我测试的一些场景。**

特别说明：我加的工具比较全，无论是图片、视频、搜索、社交媒体等等能力，还是流行的第三方Skills，凡是我自己用Claude Code写代码时会用到的Skills，我全都给OpenClaw（moltbot）加上了，所以它综合能力比较强。

我也建议你这么做。怎么加skills可以加我微信13265758038 如果问的人多了，我再写一篇文章

![Image](images/img_053.png)

飞书APP ID要去飞书开放平台-创建一个应用，添加机器人角色

![Image](images/img_054.png)

![Image](images/img_055.png)

![Image](images/img_056.png)

## 我用到OpenClaw ，moltbot的一些场景

### 做导览地图

最近打算带家人游览卢浮宫，我让OpenClaw，moltbot给我生成一个卢浮宫游览地图

![Image](images/img_057.jpg)

### 做视频

生成介绍卢浮宫蒙娜丽莎的视频

![Image](images/img_058.jpg)

### 用飞书审核代码、部署上线 OpenClaw

接下来我们干点正事，

刚刚同事发飞书消息给说，说提交了代码，让我部署上线。OpenClaw

![Image](images/img_059.jpg)

我人不在电脑前，但是可以掏出手机，先让Molt审查一下她最新提交代码…… 😂OpenClaw


```
查看我的github这个仓库raphael-nextjs，main 分支， 最近我同事提交的两笔代码，做的啥内容，并且给出代码评审
```


![Image](images/img_060.jpg)

### 快速理解社交媒体热点  可以借鉴到我们独立站 社媒 VOC 舆情控制等等场景

提示词


```
twitter搜索moltbot，为什么大家要买mac mini？用vps不行吗？到底为啥？
除了给出结论，你也列出twitter的原始链接，我要自己看
```


![Image](images/img_061.jpg)

### 到Github找开源项目

https://zhuanlan.zhihu.com/p/1940183214875456279


```
到github搜索一下，别人有没有什么和moltbot相关的仓库
```


![Image](images/img_062.jpg)

### 使用所有工具，做调研

我最近注意到朋友的Youmind产品起飞很厉害，好奇其中的原因。

有了moltbot加上配套工具，这件事就变得无比简单了……


```
调用你所有工具，想办法找到youmind最近三个月流量起飞的原因，写到飞书文档里发给我
```


![Image](images/img_063.jpg)

其实是可以变成飞书文档的，我还没来得及配置，先用md吧。

下面是调研报告的开头部分预览

![Image](images/img_064.jpg)

还是不太得劲，我要求转成PDF

![Image](images/img_065.jpg)

### 急事打电话喊我

我设置了一些重要的事情，让moltbot打电话提醒我。

比如：收到产品VIP用户发邮件反馈问题、网站遭受攻击、API调用失败等等。

特别好使。

![Image](images/img_066.jpg)

大半夜的，感觉起床打开飞书看看。发现原来是产品爆单了 😄 ……

![Image](images/img_067.jpg)

---

你还知道哪些好玩的玩法吗？期待你的反馈
