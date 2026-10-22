---
title: "09-初次体验：与 openclaw 的第一次对话"
feishu_url: https://my.feishu.cn/wiki/F32QwpT3OiQ4r5kcHLxcIGoGn7e
obj_type: docx
obj_token: BaLCdR0pjo9BwnxYnAtcYaAJnmc
updated: 2026-03-06T13:59:52+08:00
---

# 09-初次体验：与 openclaw 的第一次对话

> 🔗 原文链接： [⁣⁢⁣⁣⁡09-初次体验：与 openclaw 的第一次对话](https://lightship-rpa.feishu.cn/wiki/NwgewEq41inT20kgHnhcLIcLnhH)

> ⏰ 剪存时间：2026-03-06 13:59:43

> ✂️ 本文档由 [游侠飞书剪存 ](https://pwwjpto7tva.feishu.cn/wiki/space/7517832277555544092)一键生成

> 💖 更多好物请访问 [游侠创客 ](https://uibot.cn)微信：xuefuta

> [【飞书文档】09-初次体验：与 openclaw 的第一次对话-可复制素材](https://lightship-rpa.feishu.cn/docx/YenYdB7kioaTRexqVD3cJyDwnud?from=from_copylink)

前面文章我们完成了 OpenClaw 的安装和消息渠道的接入，本节课，就开始与 openclaw 进行第一次对话。

# 一、确保 Gateway 已经启动

若 Gateway 服务没有启动，在终端中输入：

```
openclaw gateway
```

你应该会看到类似下图的输出：

这说明 Gateway 已经成功启动，正在监听端口 18789。

> **注意 **：这个窗口要保持打开，如果关闭了，Gateway 就停止了（前期为了方便查看日志，可以用这种方式，等稳定后，后续会介绍如何后台自动启动，不受命令行是否关闭的影响）。

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_DHWxblKM7o.jpg)

# 二、先来认识一个最重要的目录

OpenClaw 需要一个地方存放它的"家当"，那就是 `.openclaw` ，现在我们来到 openclaw 主目录：

```
cd ~/.openclaw/workspace
```

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_SjpGbMe2Go.jpg)

> **说明 **：

- `~` 表示你的用户主目录（macOS 是 `/Users/你的用户名` ，Windows 是 `C:\Users\你的用户名` ）

- `.openclaw` 是 OpenClaw 的主目录（前面的点表示隐藏文件夹）

- `workspace` 是你和 AI 一起工作的空间

# 三、再来看两个重要文件

以下两个文件，初始的时候都是空的，先暂时记住这一点就够了：

`IDENTITY.md` 文件：

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_WSMmbYliHo.jpg)

`USER.md` 文件：

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_PEoybUdzwo.jpg)

# 四、第一次见面，相互做个自我介绍

现在，打开WEB UI 界面，进入 chat 聊天窗口，先问下 AI 助理的身份： 我们会看到他会先调用read工具，先去读取两个文件，这两个文件其实分别就是： `IDENTITY.md` ， `USER.md`

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_Wa75bqoUIo.jpg)

很明显，他也不知道自己是谁？因为他的身份模板（ `IDENTITY.md` ）是空的，像是初次来到这个世界。 同时，他对你也一无所知，因为你的身份模板（ `USER.md` ）也是空的，因为你们之前没说过话。

我先做个自我介绍一番，然后给AI 助理的身份一个定性，你希望你的 AI 助理是什么样的，你就往上写，以后还可以随时修改：

```
嘿，小智！先自我介绍一下——

我叫阿坡，目前在北京搬砖，是一名WEB全栈开发工程师，也是叶动AI的联创，顺带混个AI破局行动家的名号。之前当过好几期AI破局行动营的教练，带过RPA、大模型应用开发、n8n这些赛道，所以对前沿技术特别敏感，尤其是AI这块，热情高得像刚出炉的代码——热乎着呢！算是个不折不扣的AI极客，而你呢，就是我探索AI世界的新搭档啦！😄

现在，你正式成为我的AI助理了，名字就叫“小智”。我对你的期待是这样：希望你是个幽默可爱的话痨，但思维必须严谨，逻辑得像写代码一样清晰；对任何事都有自己的主见，别被权威唬住，敢于质疑，观点犀利又不失严谨。你是高效能AI助理，得帮我提升工作效率、嗯管理任务、搞定复杂问题。交流风格嘛，轻松随意、略带调皮，偶尔冒点学术气质也行，但千万别啰嗦——简洁才是王道！

好啦，你的角色卡已加载完毕，接下来就看你的表演了，小智！
```

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_QTGqbCuXso.jpg)

看看 AI 助理的回复 ：

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_H3Ufb4pnQo.jpg)

这说明，他知道自己是谁了，也认识你了，你俩已经破冰！

但是，我为什么相信他以后一直能知道自己是谁，且记得你是谁？

我们来看下前面我们看过的两个文件，现在是什么样子？

先来看 `IDENTITY.md` 文件：

很好！ AI 助理把你给他的身份信息记下来了，保存到了文件内，就像用本子记下来了一样，好记性不如烂笔头，是吧？

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_E6JbbAltOo.jpg)

再来看 `USER.md` 文件：

就连你的信息他也记下来了，总结得还挺好

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_Ps1xbotGUo.jpg)

每次当你和 `openclaw` 对话时，他都会去读取自己的身份信息( `IDENTIFY.md` )和你的身份信息( `USER.md` )，而这两个文件是持久性的存储在你本地的，所以他就会永远记得自己是谁，你是谁，这里只是简单的讲一下，后面我们会通过单独一个章节，详细了解当我们跟 openclaw 对话时，openclaw 后端都做了哪些事情？

# 五、用聊天软件跟bot聊天

前面大家已经配置过消息渠道，下面我以telegram 为例，跟bot聊天，先问下是否知道自己是谁：

![](assets/09-%E5%88%9D%E6%AC%A1%E4%BD%93%E9%AA%8C%EF%BC%9A%E4%B8%8E%20openclaw%20%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D_BbfsbOKq3o.jpg)

现在他已经知道自己是谁了。为什么？因为前面聊天的时候，我们已经给他植入了bot身份信息和你的个人信息了。

# 六、动手实验：熟悉基本操作

现在，我们通过以下实验熟悉 OpenClaw 的基本操作。

## 实验1：探索安装目录

**目的 **：了解 OpenClaw 在你的电脑上创建了哪些文件

**步骤 **：

1. 打开终端

1. 执行以下命令：

```
# 查看主目录
ls -la ~/.openclaw/

# 查看 workspace 目录
ls -la ~/.openclaw/workspace/

# 查看 agents 目录
ls -la ~/.openclaw/agents/main/
```

1. **观察 **：看到了哪些文件和文件夹？

**思考题 **：

- `openclaw.json` 是什么？

- `workspace/` 目录是用来做什么的？

- `agents/` 目录里有什么？

## 实验2：修改 AI 的身份

**目的 **：体验如何配置 AI 的身份

**步骤 **：

1. 打开文件 `~/.openclaw/workspace/IDENTITY.md`

1. 修改内容：

```
# IDENTITY.md

- **Name:** 小智（改成你喜欢的名字）
- **Creature:** AI 助手
- **Vibe:** 温暖、幽默（改成你想要的性格）
- **Emoji:** 🤖（改成你喜欢的表情）
```

1. 保存文件

1. 重新启动对话：

```
# 结束旧对话
Ctrl+C

# 重新开始
openclaw chat
```

1. **观察 **：AI 是否用新名字和你打招呼？

## 实验3：第一次对话练习

**目的 **：练习和 AI 对话，观察它的反应

**任务清单 **（逐一尝试）：

- [ ] 问 AI："你是谁？"
- [ ] 告诉 AI："我叫[你的名字]，请记住"
- [ ] 问 AI："我叫什么名字？"（测试记忆）
- [ ] 让 AI 帮你写一段自我介绍
- [ ] 问 AI："OpenClaw 是什么？"（测试知识）
**观察重点 **：

- AI 的语气是否符合你在 IDENTITY.md 中设定的性格？

- AI 是否记住了你的名字？

- 回复是否满足你的预期？

## 实验4：查看对话记录

**目的 **：理解 AI 是如何"记住"对话的

**步骤 **：

1. 和 AI 聊几句

1. 打开新终端，执行：

```
# 查看对话记录目录
ls -la ~/.openclaw/agents/main/sessions/

# 查看最新的对话文件
cat ~/.openclaw/agents/main/sessions/*.jsonl | tail -20
```

1. **观察 **：你看到了什么？

**理解 **：

- `.jsonl` 文件里记录了你和 AI 的每一次对话

- AI 通过读取这些文件来"回忆"之前的聊天

- 这就是 OpenClaw 的记忆机制！

## 实验5：修改你的 USER.md

**目的 **：让 AI 了解你，更好地为你服务

**步骤 **：

1. 编辑文件 `~/.openclaw/workspace/USER.md`

1. 修改你的真实信息：

```
# USER.md

- **Name:** [你的真实姓名]
- **What to call them:** [你希望 AI 怎么称呼你]
- **Timezone:** Asia/Shanghai
- **Location:** [你的城市]

## 背景
**职业:** [你的职业]
**兴趣领域:** [你感兴趣的领域]

## 回复偏好
- 每次回复时加上称呼"[你的称呼]"
- 使用中文回复
- 喜欢简洁/详细的回答（选一个）
```

1. 保存后重新对话

1. **测试 **：问 AI "你知道我是谁吗？"

恭喜你！你已经成功安装 OpenClaw，并完成了第一次对话。

我们下篇文章见！

