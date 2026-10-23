# OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程

Source: https://zhuanlan.zhihu.com/p/2001626324209537372

## OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程[https://mp.weixin.qq.com/s/08cLfbY2KYyLwvmh8W-DLg](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/08cLfbY2KYyLwvmh8W-DLg)

## vx:132 6575 8038

OpenClaw（原Clawdbot/Moltbot）接入飞书保姆级教程

今天讲讲最火的Clawdbot/Moltbot(现在更名为OpenClaw)，怎么部署哦，以及怎么使用，用一些案例讲解，如何做到最有效，亲测有效~目前全流程保姆级教程，本文内容大致是

①云服务选择-轻量应用服务器②VPS好处

③无痛使用，接入飞书，启动机器人聊天窗口

④案例，实操& 使用场景，后面还会继续更新

⑥讨论(微信13265758038)

一站式接入飞书，教程 无痛使用

玩转 Lighthouse｜OpenClaw（原 Moltbot）接入飞书保姆级教程 原创

### **写在前面**

双手奉上 云上Moltbot（原moltbot）最全实践指南合辑

[https://cloud.tencent.com/developer/article/2624973](https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/2624973)

欢迎大家打开链接查询更多接入教程！

### **一、一句话介绍：什么是 Moltbot？**

Moltbot 原名 moltbot，是一款可运行在个人环境中的高权限 AI 智能体，支持通过 WhatsApp、飞书、Telegram 等常用聊天软件交互，能实现邮件发送、日程管理、数据查询等自动化任务，且数据隐私自主可控，搭配腾讯云 Lighthouse 可实现 7\*24 小时无间断运行（下文为适配操作场景，部分环节仍沿用“moltbot”表述，均指代同一产品 Moltbot）。

### **二、部署到 Lighthouse 教程**

基于腾讯云 Lighthouse 应用模板，可通过 “新购实例” 或 “重装旧实例” 两种方式一键部署 Moltbot（原 moltbot），无需手动配置运行环境，全程仅需几分钟，新手可直接跟着操作。

### **方式一：选购一台Lighthouse实例**

前往Lighthouse购买页，配置项按照下图直接选择即可

- 应用创建方式：应用模板 > AI智能体 > moltbot
- 地域：优先选择海外地域，如硅谷、弗吉尼亚、新加坡等
- 套餐

- 套餐类型：锐驰型（推荐）、入门型、通用型
- 套餐配置：2C 2GB或以上均可

- 服务器名称、登录方式等按需配置即可。

![](https://pic4.zhimg.com/v2-82b2e28e2f8f27353e25a649954d3b57_1440w.jpg)

配置完成后，点击页面右下角“立即购买”，按照页面引导完成支付即可。

### **方式二：重装一台“吃灰机”**

在Lighthouse控制台内，找到自己账号下长期吃灰的那台Lighthouse实例，在实例页面内点击“…”或“更多”按钮，找到并点击**重装系统**。

注意：moltbot应用模板仅上架至中国香港、其他海外地域。因此未上架地域的重装系统页无法看到moltbot的选项。

在重装系统的页面，选择应用模板 > AI 智能体 > moltbot，登录凭证可以先直接选择重装后设置。

备份选项处，建议优先选择备份后重装，以免原实例内还存放部分重要数据。

点击页面内的**确认**按钮，待重装完成后，继续进行后续步骤即可～

### **登入服务器完成后续步骤**

前往Lighthouse控制台即可查看刚刚选购或重装完成的moltbot实例，点击页面内的“登录按钮”：

![](https://pic1.zhimg.com/v2-44b1856bd2cc47177ec0ab30b6b3572a_1440w.jpg)

点击登录后，在登录工具（OrcaTerm）的页面内，选择免密连接，点击登录即可：

![](https://pic3.zhimg.com/v2-cb2f1a6391dde085d92d9be3c0cb5efe_1440w.jpg)

登录成功的界面：

![](https://pic2.zhimg.com/v2-bbed9ece83544b943076bcdaf8e8b993_1440w.jpg)

### 

### **后续配置**

moltbot与常见的应用模板不同，官方提供了若干需用户自行手动配置的步骤，在首次登入服务器后，输入并回车运行如下命令开始配置：

代码语言：txt

AI代码解释

```
moltbot onboard
```

运行 moltbot onboard 后，需要通过键盘来完成后续配置动作，关键操作：方向键控制选项，回车表示选择并确认。

### **同意免责声明**

运行上面的命令后，将会出现一个问题：是否知晓风险，选择Yes就行。

### **配置模式选择：快速入门**

接下来需要选择Onboarding的模式，我们选择QuickStart。

### **模型配置**

注意由于Kimi、MiniMax、GLM分了国际版和国内版，moltbot默认集成的是国际版的接口地址，因此如果在配置模型时需要使用这三家的模型，则需要登录国际版控制台申请API Key：

- Kimi：[https://platform.moonshot.ai/](https://link.zhihu.com/?target=https%3A//platform.moonshot.ai/)
- MiniMax：[https://platform.minimax.io/](https://link.zhihu.com/?target=https%3A//platform.minimax.io/)
- GLM：[https://z.ai/manage-apikey/apikey-list](https://link.zhihu.com/?target=https%3A//z.ai/manage-apikey/apikey-list)

紧接着的一步是选择Model/auth提供商，如果想省时省心的话优先推荐选择国内的厂商（MiniMax、Qwen、Moonshot AI、Z.AI/GLM）默认模型选择Keep current。

### **聊天软件（Channel）配置**

最新moltbot镜像已支持飞书，但是在onboard流程中不会显示；

⚠️ 这里请大家先跳过！后续我们通过增加channel的方式添加！（详见下文）

### **技能包（Skill）配置**

新手暂时无需添加额外技能包，选中 “No” 跳过，按回车键确认；

如果选择“Yes”，可以现行跳过，后续再进行配置。

![](https://pic3.zhimg.com/v2-30728466b8710e5293b35973fe790a40_1440w.jpg)

这个是很重要的一点要注意session-memory 上下文 记忆 一定要

### **Hooks 配置**

选中 “Memory”（启用记忆功能，支持多轮对话上下文关联，避免每次聊天都需要重复说明需求），按回车键确认；

![](https://picx.zhimg.com/v2-d2602947e4b2565fa6aabecfec5c74a5_1440w.jpg)

### **等待部署完成**

配置确认后，系统将自动完成部署，耗时约 30 秒 - 1 分钟，无需操作，待配置向导自动退出，返回命令行界面（显示「root@VM-xxx-ubuntu:~#」），即为部署成功。

### **创建飞书企业自建应用**

1. 访问飞书开发者平台（[https://open.feishu.cn/app?lang=zh-CN](https://link.zhihu.com/?target=https%3A//open.feishu.cn/app%3Flang%3Dzh-CN)）；
2. 登录后，点击 “创建企业自建应用”；
3. 填写应用基础信息：应用名称（如 “Moltbot 助手”），选择应用图标，点击 “创建” 按钮，进入应用管理页面。

![](https://pic2.zhimg.com/v2-9ec46c421656f1057c2d3b3290887f37_1440w.jpg)

4.添加机器人能力：在应用管理页左侧导航栏，找到并点击 “添加应用能力”，在弹出的列表中选择 “机器人”，点击 “添加”。

![](https://pica.zhimg.com/v2-bbec18da21f2077f9d636649139c1588_1440w.jpg)

5.点击上方的创建版本并发布。

![](https://pic1.zhimg.com/v2-dcecef240fa5d0e4632ce33d4398adce_1440w.jpg)

**获取飞书应用凭证**

1. 在飞书应用管理页，左侧导航栏找到 “凭据与基础信息” 栏目，点击进入；
2. 在页面中找到 “App ID” 和 “App Secret” 两个参数，分别点击右侧 “复制” 按钮，将其保存到记事本或备忘录中；

![](https://pic1.zhimg.com/v2-cd52a42270034388f0ba495b6af50052_1440w.jpg)

3.保存完成后，不要关闭飞书开发者平台页面，后续配置权限还需使用。

### **添加飞书channel配置**

返回终端运行下方命令

代码语言：txt

AI代码解释

```
moltbot channels add
```

选择"Yes"以及“飞书”；

![](https://pic3.zhimg.com/v2-91d751f67aa6e31ab9fd5458abc2112e_1440w.jpg)![](https://pic1.zhimg.com/v2-9c8c49a3305e270b4a9fd4f285a45d0e_1440w.jpg)

### **输入APP id 与 APP Secret**

输入上一步获取到的id与secret，回车确认；

![](https://pic2.zhimg.com/v2-60bfa88776e81a8be92325b793ac2bf9_1440w.jpg)

### **完成添加流程**

完成APP ID与Secret配置后，选择Finish即可；

![](https://pica.zhimg.com/v2-3f0e4e684bf3391a899557c913d0f54a_1440w.jpg)![](https://pic1.zhimg.com/v2-8f0163355a7c23331788ee100e4f5712_1440w.jpg)

**在终端启动网关，运行下方命令：**

代码语言：txt

AI代码解释

```
moltbot gateway --port 18789 --verbose
```

### **三、飞书机器人配置**

### **飞书应用权限与事件配置**

此步骤分为「事件配置」「权限配置」「应用发布」三部分，全程在飞书开发者平台操作，按顺序执行：

### **（1）事件配置**

1. 在飞书应用管理页，左侧导航栏找到 “事件与回调” 栏目，点击进入；
2. 事件配置：在页面中选择 “长连接”，点击 “保存”；

⚠️如果这一步提示**“未建立长连接”，**请检查自己的APP ID和APP Secret是否已正确配置。

（操作见上一步：添加飞书channel配置-配置APP ID与APP Secret）

![](https://picx.zhimg.com/v2-0d92a4c2e81559f406a04adee1d998ed_1440w.jpg)

3.添加事件：点击页面中的 “添加事件”，在弹出的事件列表中，选择 “消息与群组” 分类，勾选 “接收消息”，点击 “确定”，完成事件订阅。

![](https://pic1.zhimg.com/v2-54844d2a49db27deab1459a624830378_1440w.jpg)

4.回调配置：订阅方式选择 “使用长连接”，无需填写其他地址，配置自动生效。

![](https://pic3.zhimg.com/v2-8f433bbad58dcb6e8b03ad76c5dc8204_1440w.jpg)

### **（2）权限配置**

1. 在飞书应用管理页，左侧导航栏找到 “权限管理” 栏目，点击进入；
2. 点击页面中的 “批量导入权限” 按钮，弹出权限导入窗口；

![](https://pic3.zhimg.com/v2-a0a363eaa991b517b0b440373f58bdd2_1440w.jpg)![](https://pic4.zhimg.com/v2-541bb08d914e891bdf233be2d5ace13f_1440w.jpg)

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

### **（3）发布应用**

1. 在飞书应用管理页，左侧导航栏找到 “版本管理与发布” 栏目，点击进入；
2. 点击右上角的新建版本；

![](https://pica.zhimg.com/v2-0730ce0b481c0b8ccc00876996b6a750_1440w.jpg)

填写版本号与描述后，保存并发布；

![](https://pica.zhimg.com/v2-66e2fe8ba1c303dc375868653e3ab2da_1440w.jpg)

1. **启动 Moltbot 网关**

回到 OrcaTerm 命令行界面，输入以下命令，启动后不要关闭命令行窗口：

代码语言：txt

AI代码解释

```
moltbot gateway
```

1. **验证飞书接入**
2. 打开手机或电脑端飞书 APP，登录与飞书开发者平台相同的账号；
3. 在飞书首页，找到 “工作台” 入口，点击进入，在工作台列表中找到已发布的 Moltbot 应用（如 “Moltbot 助手”），点击进入；
4. 系统将自动启动私聊窗口，发送任意消息（如 “你好”“查询今日日程”）；
5. 验证结果：如果收到 Moltbot 的回复，即为飞书接入成功

![](https://pic3.zhimg.com/v2-25d692e90497d03264072d26bd4ce54c_1440w.jpg)

**大家快快用起来吧！！！**

### **写在前面**

双手奉上 云上OpenClaw（原moltbot）最全实践指南合辑

[https://cloud.tencent.com/developer/article/2624973](https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/2624973)

欢迎大家打开链接查询更多接入教程！

https://wsurl.cc/ercpiz (二维码自动识别)

### **一、一句话介绍：什么是OpenClaw Moltbot？**

OpenClaw 原名 moltbot，是一款可运行在个人环境中的高权限 AI 智能体，支持通过 WhatsApp、飞书、Telegram 等常用聊天软件交互，能实现邮件发送、日程管理、数据查询等自动化任务，且数据隐私自主可控，搭配腾讯云 Lighthouse 可实现 7\*24 小时无间断运行（下文为适配操作场景，部分环节仍沿用“moltbot”表述，均指代同一产品 Moltbot）。

### **二、部署到 Lighthouse 教程**

基于腾讯云 Lighthouse 应用模板，可通过 “新购实例” 或 “重装旧实例” 两种方式一键部署 Moltbot（原 moltbot），无需手动配置运行环境，全程仅需几分钟，新手可直接跟着操作。

OpenClaw

## OpenClaw（原 moltbot）接入飞书保姆级教程

## 

## 

从原理上讲：Mac系统本质上只是Linux/Unix套壳，我们直接租云端的Linux VPS(虚拟电脑)就可以了，每个月只要几十块钱。

我用的是腾讯云，一个月20.7元。也可以用阿里云、火山云、其他的LInux VPS。有的厂商还有优惠，前几个月不要钱。模型API Key我用的是谷歌Gemini Pro ，也可以用国产大模型（推荐谷歌Gemini）

只提醒一点：选用海外的服务器，这样网络方面可以方便一些。

[https://console.cloud.tencent.com/?Is=sdk-topnav](https://link.zhihu.com/?target=https%3A//console.cloud.tencent.com/%3FIs%3Dsdk-topnav)

在“控制台”找到“轻量应用服务器”

![](https://pic4.zhimg.com/v2-63c34dc8a1e94a2c61468430562b9427_1440w.jpg)

[https://console.cloud.tencent.com/](https://link.zhihu.com/?target=https%3A//console.cloud.tencent.com/)

选择Moltbot(Clawdbot)

![](https://pic4.zhimg.com/v2-b3b5e868a7fc230d75f446ff956af80f_1440w.jpg)

选择CPU核心不少于2核、内存不小于2G的。

比如我截图这个月，一个月才20.4元。如果要安装桌面，建议内存4G起。

![](https://pic3.zhimg.com/v2-b580cffb4cfd9adc1f4834eb9927340c_1440w.jpg)

不要担心资源不够用。实测2核2G、2核4G都够用。下面是我的腾讯云VPS过去一天的资源占用情况。

![](https://pic1.zhimg.com/v2-7029d35b139e27f06612bf19eb59e5a4_1440w.jpg)

使用Linux VPS跑Moltbot，除了省钱，还有额外的好处：

- 永久在线、网络环境比较好
- 稳定性强,无故障
- 虚拟机，安全，不怕搞坏
- 不需要科学上网，因为本来就是海外的VPS

我是选择新加坡的地址CPU 2核 内存2GB 系统盘40GB，在那个登录旁边选择：“重装系统”

![](https://pic2.zhimg.com/v2-d3fd4d9574e92e5e61b0111895224649_1440w.jpg)![](https://pic2.zhimg.com/v2-0e3b501ab0fac84e778c2589b4eaaf23_1440w.jpg)

点击登录-免密链接TAT

![](https://picx.zhimg.com/v2-e686e50e845517a6afb6443e0a1493fd_1440w.jpg)

登录进去的页面是显示root@VM-015-ubuntu:~# (远程终端OrcaTerm)

![](https://pic2.zhimg.com/v2-689d54c9a3abe8a4516e9217898c657d_1440w.jpg)

后续配置（按自己实际需求）

![](https://pic4.zhimg.com/v2-971848399c334f9da5f3c930ef3d082d_1440w.jpg)

moltbot onboard

输入指令，需要注意一点：在终端内运行需要通过键盘来完成（方向健 上下-选择，回车- 确认）

![](https://pic1.zhimg.com/v2-564f13690a4f7fa8122a3869bd4a4a66_1440w.jpg)![](https://pic4.zhimg.com/v2-03926b84480b83a14ad390db71b42bf7_1440w.jpg)

同意免责申明 “我明白它功能强大，但也存在固有风险。是否继续？”

(I understand this is powerful and inherently risky. Continue?) 选择 Yes

### 配置模式选择：快速入门 快速启动（QuickStart）模式

接下来需要选择Onboarding的模式，我们选择`QuickStart`。

![](https://pic2.zhimg.com/v2-69c707053ffbfc9b3946f9ed27ca99f9_1440w.jpg)![](https://pic1.zhimg.com/v2-a8b551d19ce9b9afa3cbb4dbbf154ed0_1440w.jpg)

我目前用的是Gemini Pro学生版 （配置的是Gemini API Key）,比较稳定，有三百美金免费额度

![](https://picx.zhimg.com/v2-cbda72f6944f4ae557862cbc3d97f367_1440w.jpg)![](https://picx.zhimg.com/v2-101c8346b670e974239dce6af99e8c61_1440w.jpg)

目前可以接入国内主要聊天平台，推荐使用飞书 和钉钉

![](https://pic4.zhimg.com/v2-8393b05c7bc55c904fa75eb91a17dd69_1440w.jpg)

**在onboard面板中选择对应的软件后，即可正式开始接入飞书、钉钉、QQ、企业微信、Discord等各类软件，详细操作指引可参见** 云上Moltbot（原moltbot）最全实践指南合辑。

[https://cloud.tencent.com/developer/article/2625073](https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/2625073)

## OpenClaw（原 Moltbot）接入飞书保姆级教程

原创

![](https://pic4.zhimg.com/v2-73e0a3ce2a8e53cc567e13a201be662b_1440w.jpg)![](https://pic3.zhimg.com/v2-5ab9f9f9f3819bef7184427681e085dc_1440w.jpg)![](https://pic1.zhimg.com/v2-26b225bf1080a0476b12814ad19ec9ee_1440w.jpg)![](https://pic2.zhimg.com/v2-1a52b1b912a54702abb8af2d3cc5eef7_1440w.jpg)![](https://pic2.zhimg.com/v2-ded77630952af5ed9561549d200d7515_1440w.jpg)

如果你不喜欢黑乎乎的命令行，更喜欢可视化界面，那也没问题，Linux也是可以装上桌面的。安装一个XFCE

我给我的Linux安装了一个最简单的桌面XFCE，还可以通过我的Macbook/Windows，通过“远程桌面”的方式连接它

![](https://pic3.zhimg.com/v2-a466f50c03a9a00c8aaef6354b554752_1440w.jpg)

## 给OpenClaw配一台永远在线的电脑

腾讯云可以一键部署OpenClaw(moltbot)了

选择最便宜的套餐即可 国内新加坡 选择最便宜的套装， 20.7一个月，配置2核2G

执行

```
moltbot onboard --install-daemon
```

接受一些霸王条款“我理解非常有风险”。选择Yes

后面跟着指引就能配置完成，如果英文不好，自己想办法翻译一下即可。moltbot指引做得很好，就算是没有技术功底的人，也不需要看自媒体博主的二手指导。

![](https://pica.zhimg.com/v2-8a9ac01e4759cada8d5c22103bb7903c_1440w.jpg)![](https://pic2.zhimg.com/v2-ef3f8e7da44372d21269b16fe4eb5453_1440w.jpg)![](https://picx.zhimg.com/v2-f9008031e3b1e134a87848d3efbb1c11_1440w.jpg)![](https://pic1.zhimg.com/v2-44256fc8e4cfbc7c43fcacaa40646728_1440w.jpg)

PS踩坑~~

默认推荐是用Telegram进行沟通。按照moltbot的指引，很快就无痛配置好了。

![](https://pic4.zhimg.com/v2-d0ac6de4129dfee41bf95db1784fe06d_1440w.jpg)![](https://pic1.zhimg.com/v2-0b0054f91e7fb328b9bc85350a449e1e_1440w.jpg)

玩转 Lighthouse｜OpenClaw（原 moltbot/clawdbot）接入飞书保姆级教程 原创

[https://cloud.tencent.com/developer/article/2625073](https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/2625073)

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

![](https://pic4.zhimg.com/v2-746383265efe46d0b83f32e8e58c1287_1440w.jpg)

飞书APP ID要去飞书开放平台-创建一个应用，添加机器人角色

![](https://pica.zhimg.com/v2-be02d1e2dba61d52cfcce90cf5afee96_1440w.jpg)![](https://pica.zhimg.com/v2-d700efa8d0ac285a06b6e288ca572fdc_1440w.jpg)![](https://picx.zhimg.com/v2-3678cdc1cc3caf4c2bdf4034ee622763_1440w.jpg)

## 我用到OpenClaw ，moltbot的一些场景

### 

### 做导览地图

最近打算带家人游览卢浮宫，我让OpenClaw，moltbot给我生成一个卢浮宫游览地图

![](https://picx.zhimg.com/v2-c79f5dea9f6f20417fe9aa11bc6a29e3_1440w.jpg)

### 

### 做视频

生成介绍卢浮宫蒙娜丽莎的视频

![](https://pic3.zhimg.com/v2-20cdf0d5bdc41bc2d07e45efaea8d41c_1440w.jpg)

### 用飞书审核代码、部署上线 OpenClaw

接下来我们干点正事，

刚刚同事发飞书消息给说，说提交了代码，让我部署上线。OpenClaw

![](https://pic1.zhimg.com/v2-13b72f3550c9182436c09c39b232f868_1440w.jpg)

我人不在电脑前，但是可以掏出手机，先让Molt审查一下她最新提交代码…… OpenClaw

```
查看我的github这个仓库raphael-nextjs，main 分支， 最近我同事提交的两笔代码，做的啥内容，并且给出代码评审
```

![](https://pica.zhimg.com/v2-a64136dfa113476b4021b6e5bb7fa9fc_1440w.jpg)

### 快速理解社交媒体热点 可以借鉴到我们独立站 社媒 VOC 舆情控制等等场景

提示词

```
twitter搜索moltbot，为什么大家要买mac mini？用vps不行吗？到底为啥？
除了给出结论，你也列出twitter的原始链接，我要自己看
```

![](https://pic4.zhimg.com/v2-a9d4dbb62589bf7da455ef93b8cdb7ad_1440w.jpg)

### 到Github找开源项目

<https://zhuanlan.zhihu.com/p/1940183214875456279>

```
到github搜索一下，别人有没有什么和moltbot相关的仓库
```

![](https://pica.zhimg.com/v2-0510525f2872acced4ed1ce795934c60_1440w.jpg)

### 使用所有工具，做调研

我最近注意到朋友的Youmind产品起飞很厉害，好奇其中的原因。

有了moltbot加上配套工具，这件事就变得无比简单了……

```
调用你所有工具，想办法找到youmind最近三个月流量起飞的原因，写到飞书文档里发给我
```

![](https://pic4.zhimg.com/v2-97499848f03a170b905d80d7de33b397_1440w.jpg)

其实是可以变成飞书文档的，我还没来得及配置，先用md吧。

下面是调研报告的开头部分预览

![](https://pic3.zhimg.com/v2-02168491a6061e6c61ad8380f563acca_1440w.jpg)

还是不太得劲，我要求转成PDF

![](https://pic1.zhimg.com/v2-c178cf742168db7103d3c2aaf5d8edbe_1440w.jpg)

### 急事打电话喊我

我设置了一些重要的事情，让moltbot打电话提醒我。

比如：收到产品VIP用户发邮件反馈问题、网站遭受攻击、API调用失败等等。

特别好使。

![](https://picx.zhimg.com/v2-fd12bc3440699b5917508d88f1d93fa1_1440w.jpg)

大半夜的，感觉起床打开飞书看看。发现原来是产品爆单了 ……

![](https://pica.zhimg.com/v2-27f5e80a4df778b13c553695fac27850_1440w.jpg)

---

你还知道哪些好玩的玩法吗？期待你的反馈
