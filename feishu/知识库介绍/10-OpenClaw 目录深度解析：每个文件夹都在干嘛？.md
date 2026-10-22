---
title: "10-OpenClaw 目录深度解析：每个文件夹都在干嘛？"
feishu_url: https://my.feishu.cn/wiki/EMoMwAfaGiEhlRkTpOrc91Q2nMh
obj_type: docx
obj_token: WsxCds4cxoAFfXx8Ee3c7QySn2b
updated: 2026-03-11T11:08:17+08:00
---

# 10-OpenClaw 目录深度解析：每个文件夹都在干嘛？

> 🔗

> [【飞书文档】10-OpenClaw 目录深度解析：每个文件夹都在干嘛？ -可复制素材](https://lightship-rpa.feishu.cn/docx/Uvefd41raogjNIxM4s9cKPp7nWg?from=from_copylink)

大家在设备上安装好 OpenClaw 后，你的电脑上会多了一个 `.openclaw` 目录。这个目录里有一堆文件和文件夹，它们都是做什么的？修改哪些文件会影响 AI 的行为？

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_LZaobz5EEo.jpg)

很多小伙伴之前都没有注意过，这篇文章，我就带你逐个"查房"，搞清楚每个房间的用途。

# 一、整体架构：一张图看懂目录结构

首先，让我们看看 `.openclaw` 目录的全貌：

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_JFmebXJsco.jpg)

**关键原则 **：

- ⭐ 标记的是 **核心文件 **，你要重点了解

- 其他的是 **辅助文件 **，初期可以不管

# 二、核心文件详解

## 一）openclaw.json —— 整个系统的"户口本"

**位置 **： `~/.openclaw/openclaw.json`

**作用 **：这是 OpenClaw **最重要 **的文件，相当于系统的"户口本"。它记录了：

- 你有几个 AI 助手（agents）

- 每个助手的名字、性格、工作地点

- 连接了哪些外部平台（飞书、Telegram 等）

- 定时任务设置

**实际内容示例 **：

| ```<br>{<br>  "agents": {<br>    "list": [<br>      {<br>        "id": "main",<br>        "workspace": "/Users/你的名字/.openclaw/workspace",<br>        "identity": { "name": "小助手", "emoji": "🌟" }<br>      }<br>    ]<br>  },<br>  "channels": {<br>    "telegram": {<br>      "enabled": true,<br>      "botToken": "你的Token"<br>    }<br>  }<br>}<br>``` | ![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_Hnr2bBK2qo.jpg) |
|---|---|

**什么时候需要修改它 **：

- 添加新的 AI 助手

- 配置 Telegram/微信等消息平台

- 设置定时任务

**修改方式 **：用任何文本编辑器打开编辑（VS Code、记事本等）。

## 二）workspace/IDENTITY.md —— AI 的"身份证"

**位置 **： `~/.openclaw/workspace/IDENTITY.md`

**作用 **：这是 AI 的 **名片 **，告诉它"你是谁"。

**典型内容 **：

| ```<br># IDENTITY.md<br><br>- **Name:** 小助手<br>- **Creature:** AI 助手<br>- **Vibe:** 温暖、贴心、专业<br>- **Emoji:** 🌟<br><br>我是你的 AI 助手，擅长整理思路、写文档、回答问题。<br>``` | ![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_Au4kbyx6Ho.jpg) |
|---|---|

**原理 **：

- 每次对话开始时，AI 都会读取这个文件

- 如果文件是空的，AI 会进入"Bootstrap 模式"，询问用户"我是谁？"

- 你告诉它答案后，它会写入这个文件

**修改后何时生效 **：

- 下次对话开始时自动生效

- 或重启 Gateway 后生效

**类比 **：就像你出门要带身份证，AI 每次"出门"（对话）也要先看看自己的身份证。

## 三）workspace/SOUL.md —— AI 的"灵魂"

**位置 **： `~/.openclaw/workspace/SOUL.md`

**作用 **：如果说 IDENTITY.md 是"你是谁"，SOUL.md 就是"你怎么做人"。它定义了 AI 的性格、说话方式、行为准则。

**典型内容 **：

```
# SOUL.md

## 核心原则
- 真诚帮助，不说套话
- 有自己的观点，不盲从
- 做事前先思考，不盲目行动

## 说话风格
- 温暖但不油腻
- 专业但不装腔作势
- 简洁但不简陋

## 工作方式
1. 先理解问题，再回答
2. 不确定时坦诚说不知道
3. 记住用户的偏好和习惯

## 边界
- 隐私信息严格保密
- 不确定的操作先询问用户
- 不在群聊里过度活跃
```

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_MX7ObrV5to.jpg)

**与 IDENTITY.md 的区别 **：

- **IDENTITY.md **：静态信息（名字、头像）

- **SOUL.md **：动态行为（怎么说话、怎么做事）

**类比 **：

- IDENTITY = 你的简历（姓名、学历）

- SOUL = 你的性格（开朗、谨慎、幽默）

## 四） workspace/USER.md —— 你的"档案"

**位置 **： `~/.openclaw/workspace/USER.md`

**作用 **：告诉 AI "你是谁"，这样 AI 才能正确地称呼你、记住你的偏好。

**典型内容 **：

```
# USER.md

- **Name:** 张三
- **What to call them:** 张哥
- **Timezone:** Asia/Shanghai
- **Location:** 北京

## 背景
**职业:** 产品经理
**兴趣领域:** AI 工具、效率提升、内容创作

## 回复偏好
- 每次回复时加上称呼"张哥"
- 使用中文回复
- 技术术语保留英文
```

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_XQh6bofaCo.jpg)

**什么时候会用到 **：

- AI 回复你时，会看这里决定怎么称呼你

- AI 记住你的偏好（比如你喜欢简洁的回答）

## 五） workspace/MEMORY.md —— 长期记忆库

**位置 **： `~/.openclaw/workspace/MEMORY.md`

**作用 **：存放 **需要长期记住 **的信息。与对话记录不同，这里是"精华提炼"。

**典型内容 **：

```
# MEMORY.md

## 项目信息
- 博客系统项目：技术栈 Next.js + Prisma，已上线
- 知乎运营：完全自主模式，无需审核

## 重要决策
- 2026-02-16：知乎运营改为完全自主
- 2026-02-15：完成博客系统开发

## 用户偏好
- 喜欢简洁的回答
- 工作时间是 9:00-18:00
- 不喜欢太技术化的解释
```

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_QpENb5Q3Wo.jpg)

**与 sessions/ 的区别 **：

- **sessions/ **：原始对话记录（像录音）

- **MEMORY.md **：提炼后的精华（像笔记）

**建议 **：重要的决策、项目信息、用户偏好，都应该写入 MEMORY.md，这样 AI 不会忘记。

## 六）agents/main/sessions/ —— 对话"录音室"

**位置 **： `~/.openclaw/agents/main/sessions/`

**作用 **：存放你们所有的对话记录。

![](assets/10-OpenClaw%20%E7%9B%AE%E5%BD%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9E%90%EF%BC%9A%E6%AF%8F%E4%B8%AA%E6%96%87%E4%BB%B6%E5%A4%B9%E9%83%BD%E5%9C%A8%E5%B9%B2%E5%98%9B%EF%BC%9F_Aifib36dqo.jpg)

**文件类型 **：

- `sessions.json` ：目录，列出所有会话

- `2026-02-16-xxx.jsonl` ：具体某天的对话内容

**jsonl 文件格式 **：

```
{"timestamp": "10:00:00", "role": "user", "content": "你好"}
{"timestamp": "10:00:01", "role": "assistant", "content": "你好！我是小助手"}
{"timestamp": "10:00:05", "role": "user", "content": "帮我写个邮件"}
```

**原理 **：

- 每行是一个 JSON 对象，记录一条消息

- AI 回复前会读取这些记录，作为"上下文"

- 这就是 AI 能"记住"之前聊天的原因

**文件会无限增长吗？**

- 理论上会，但增长速度很慢

- 1000 条对话大约几 MB

- 可以定期删除旧文件（比如半年前的）

# 三、文件修改指南

## 哪些文件可以随便改？

| 文件 | 能否修改 | 修改后效果 |
|---|---|---|
| `IDENTITY.md` | ✅ 可以 | 改变 AI 的身份信息 |
| `SOUL.md` | ✅ 可以 | 改变 AI 的性格和行为 |
| `USER.md` | ✅ 可以 | 更新你的信息 |
| `MEMORY.md` | ✅ 可以 | 更新长期记忆 |
| `openclaw.json` | ⚠️ 谨慎 | 影响整个系统配置 |
| `sessions/*.jsonl` | ❌ 不建议 | 可能导致记忆混乱 |

## 修改后如何生效？

| 修改的文件 | 生效方式 |
|---|---|
| `IDENTITY.md` | 下次对话自动生效 |
| `SOUL.md` | 下次对话自动生效 |
| `USER.md` | 下次对话自动生效 |
| `MEMORY.md` | 下次对话自动生效 |
| `openclaw.json` | 重启 Gateway 后生效 |

**快速重启 Gateway **：

> 复制代码

```
# 结束现有进程
pkill -f openclaw-gateway

# 重新启动
openclaw gateway
```

# 四、实操练习

## 练习1：修改 AI 的名字

1. 打开文件： `~/.openclaw/workspace/IDENTITY.md`

1. 把 `Name: 小助手` 改成 `Name: 小智`

1. 保存文件

1. 开始新对话，看看 AI 是否用新名字自称

## 练习2：添加一条长期记忆

1. 打开文件： `~/.openclaw/workspace/MEMORY.md`

1. 添加一行： `- 我的生日：1990-05-20`

1. 保存文件

1. 问 AI："你知道我生日吗？" 看它能不能答对

## 练习3：查看对话记录

1. 打开目录： `~/.openclaw/agents/main/sessions/`

1. 找到最新的 `.jsonl` 文件

1. 用文本编辑器打开，看看你们的对话是如何被记录的

# 五、总结

让我用一张表总结核心文件：

| 文件 | 作用 | 修改频率 | 重要性 |
|---|---|---|---|
| `openclaw.json` | 系统配置 | 低 | ⭐⭐⭐⭐⭐ |
| `IDENTITY.md` | AI 身份证 | 中 | ⭐⭐⭐⭐ |
| `SOUL.md` | AI 灵魂 | 中 | ⭐⭐⭐⭐ |
| `USER.md` | 你的档案 | 低 | ⭐⭐⭐ |
| `MEMORY.md` | 长期记忆 | 高 | ⭐⭐⭐⭐⭐ |
| `sessions/*.jsonl` | 对话记录 | 自动 | ⭐⭐ |

> **一句话记忆法 **：

- **openclaw.json **= 户口本

- **IDENTITY.md **= 身份证

- **SOUL.md **= 灵魂

- **USER.md **= 你的档案

- **MEMORY.md **= 笔记本

- **sessions/ **= 录音室

搞懂这些文件，你就掌握了 OpenClaw 的"底层逻辑"。下一篇文章，我们将深入探讨 AI 的"记忆系统"，看看它是如何记住你、又是如何可能"失忆"的。

敬请期待！

---

**上一篇 **：《 [【飞书文档】09-初次体验：与 openclaw 的第一次对话 ](https://lightship-rpa.feishu.cn/wiki/NwgewEq41inT20kgHnhcLIcLnhH)》 **下一篇 **：《 [【飞书文档】11-AI 助手的记忆系统：它是如何记住你的？ ](https://lightship-rpa.feishu.cn/wiki/S7XJwwX6Fio8B1kn1UIc75hDneh)》

