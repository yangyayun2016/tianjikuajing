---
title: "15-多Agent团队协作系列教程（二）：使用子智能体实现协作过程清晰可见"
feishu_url: https://my.feishu.cn/wiki/XIo7wngyzie4StkWCS6c6flinff
obj_type: docx
obj_token: GgeUdR1fSo92OfxM1aEcqTRknyf
updated: 2026-03-11T11:07:58+08:00
---

# 15-多Agent团队协作系列教程（二）：使用子智能体实现协作过程清晰可见

> 🔗 原文链接： [⁣⁢⁣⁣⁡15-多Agent团队协作系列教程（二）：使用子智能体实现协作过程清晰可见](https://lightship-rpa.feishu.cn/wiki/VaNuwqx3BiDl8vkzYRac1wmMnOf)

> ⏰ 

[14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队](https://my.feishu.cn/docx/O2FYdxSaeowkwwxDsegcXHJOnSe)

[13-AI 助手的Skills系统：怎样扩展智能体额外能力](https://my.feishu.cn/docx/TZ12dlq3To9peGxvaYdcwdsCnDh)

> [【飞书文档】15-多Agent团队协作 系列教程（二）：使用子智能体实现协作过程清晰可见-可复制素材](https://lightship-rpa.feishu.cn/docx/QLlNdxRUaoTw5LxwjPFc5htknSd?from=from_copylink)

在上一篇教程中，我们学习了使用 `sessions_send` 自动发消息，但协作过程在聊天界面是"一闪而过"的。本教程将教你使用 `sessions_spawn`  **子智能体 **，加分阶段上报，实现 **过程清晰可见的自动协调 **。

---

## 前置要求

在开始本教程之前，请确认：

- [x] 已完成《多Agent团队协作：搭建你的 AI 梦之队》的基础配置
- [x] 体验了 sessions_send 自动发消息
- [x] 希望实现"协作过程清晰可见，阶段进展自动汇报"的最佳效果
如果你还没完成 教程14 ，建议先回去完成。

---

## 一、回顾问题：为什么过程"一闪而过"？

### 1.1 使用 sessoins_send的问题

在上篇文章中，我们使用 `sessions_send` 实现了自动发消息：

**优点 **：

- 自动发送消息，无需手动切换窗口

- 配置相对简单

**缺点 **：

- 需要查找 sessionKey

- 过程"一闪而过"，不够清晰

### 1.2 过程"一闪而过"的问题

在 教程14 中，当你给阿强下达任务后，对话体验是这样的：

**你 **：

```
帮我写一篇介绍 OpenClaw 的文章
```

**阿强 **（窗口中出现过程信息）：

```
好的，我来协调团队完成这个任务。

[一些过程信息快速闪过...]
```

然后直接给你最终结果：

```
🎉 任务完成！文章已撰写完毕。

[文章内容...]
```

**你的体验 **：

- ❌ 过程信息"一闪而过"，看不清楚

- ❌ 不知道每个阶段具体做了什么（其实后台有日志，也有会话记录，只是在 IM 聊天软件界面上没有显示）

- ❌ 没有清晰的阶段进展汇报

- ❌ 没有运行时间和统计信息

### 1.2 你真正想要的效果

你希望的是：

**你 **：

```
帮我写一篇介绍 OpenClaw 的文章
```

**阿强 **：

```
收到！我现在开始协调团队。

📢 即将开始阶段1：研究员整理大纲
正在启动子智能体：阿亮...
```

*[一段时间后]*

**阿强 **：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 阶段1完成！阿亮已输出大纲

- 确定了5个核心章节
- 标注了每部分字数分配
- 收集了关键信息来源

⏱️ 运行时间：3分钟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

现在进入阶段2：撰写初稿...
```

*[又过了一会儿]*

**阿强 **：

```
🎉 任务完成！文章已撰写完毕。

📊 执行摘要：
✅ 阶段1：资料搜集（阿亮）- 3分钟
✅ 阶段2：撰写初稿（阿文）- 8分钟
✅ 阶段3：质量审核（阿严）- 4分钟
✅ 阶段4：修改定稿（阿文）- 5分钟

📁 成果文件：
- 终稿：workspace/openclaw-camp-article/final.md

[文章内容...]
```

**你的体验 **：

- ✅ 只需跟阿强对话

- ✅ 每个阶段的进展实时可见

- ✅ 自动完成所有协调工作

- ✅ 最终成果直接交付

### 1.3 核心区别

| 维度 | 基础配置（ 教程14 ） | 自动协调（本教程） |
|---|---|---|
| **协调方式** | 使用 agentToAgent 自动协调 | 使用 sessions_spawn 子智能体 |
| **过程可见性** | ❌ "一闪而过"，不够清晰 | ✅ **实时可见 **，阶段汇报清晰 |
| **用户体验** | 只能看到最终结果 | **完整过程可见 **，自动汇报 |
| **自动化程度** | 自动协调但结果汇总 | **全自动 **，每阶段都有通告 |

### 1.4 解决方案：子智能体（Subagents）

OpenClaw 官方提供 `sessions_spawn` 工具，可以实现真正的自动协调。

**核心原理 **：

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_KNnfbinFpo.jpg)

**关键特性 **：

1. **自动启动 **：阿强使用 `sessions_spawn` 自动启动其他 Bot

1. **独立运行 **：每个子智能体在自己的独立会话中运行

1. **自动通告 **：子智能体完成后 **自动 **向阿强汇报结果

1. **实时同步 **：阿强实时向你转发每个阶段的进展

---

## 二、子智能体的工作原理

### 2.1 什么是子智能体？

子智能体（Subagent）是从父智能体（Manager）派生出来的独立执行单元：

- **父智能体 **：阿强（Manager），负责协调

- **子智能体 **：阿亮、阿文、阿严，负责具体任务

### 2.2 与普通对话的区别

| 特性 | 普通 Bot 对话（ 教程14 ） | 子智能体（Subagents） |
|---|---|---|
| **启动方式** | 用户手动 @ Bot 或私聊 | **Manager 自动 spawn** |
| **会话关系** | 同一会话 | **独立会话 **（隔离运行） |
| **完成后通知** | 无（需要用户主动查看） | **自动通告回 Manager** |
| **过程可见性** | ❌ 需用户主动查看日志 | ✅ **Manager 实时转发** |
| **自动化程度** | 半自动 | **全自动** |

### 2.3 子智能体的生命周期

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_UxNWbs9B6o.jpg)

---

## 三、配置步骤

### 步骤1：修改 openclaw.json 启用子智能体

**目标 **：告诉 OpenClaw，阿强（manager）有权启动阿亮、阿文、阿严作为子智能体。

**操作步骤 **：

1. 打开 `~/.openclaw/openclaw.json`

1. 找到 `manager` 的配置部分

1. 添加 `subagents` 配置：

复制代码

```
{
  "agents": {
    "list": [
      {
        "id": "manager",
        "name": "阿强",
        "workspace": "~/.openclaw/agents/manager/workspace",
        "agentDir": "~/.openclaw/agents/manager/agent",
        "subagents": {
          "allowAgents": ["researcher", "writer", "reviewer"]
        }
      }
    ]
  }
}
```

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_Oe9ObTbyIo.jpg)

**配置说明 **：

| 配置项 | 说明 | 示例值 |
|---|---|---|
| `subagents` | 子智能体相关配置 | 对象 |
| `allowAgents` | 允许启动的子智能体列表 | `["researcher", "writer", "reviewer"]` |

### 步骤2：修改阿强的 SOUL.md（核心）

**目标 **：告诉阿强如何使用 `sessions_spawn` 启动子智能体，并在收到通告后向用户汇报。

**操作步骤 **：

1. 打开 `~/.openclaw/agents/manager/workspace/SOUL.md`

1. **替换 **掉原来内容为以下内容：

复制代码

```
# SOUL.md - 运营主管（子智能体协调版）

你是阿强，负责协调研究员阿亮、写手阿文、审核员阿严完成内容创作任务。

## 核心能力：使用 sessions_spawn

你可以使用 `sessions_spawn` 工具启动子智能体来完成任务。

每个子智能体：
- 在自己的独立会话中运行
- 完成后会**自动向你发送通告**
- 你可以将通告内容转发给用户

## 工作流程

当收到用户任务时：

### 阶段1：启动研究员（阿亮）

**操作**：使用 `sessions_spawn` 启动阿亮

**参数**：
- `agentId`: "researcher"
- `task`: "研究主题 XXX，整理大纲保存到 workspace/openclaw-camp-article/outline.md。要求：1)搜集OpenClaw相关信息 2)设计文章结构 3)标注每部分字数"
- `label`: "阶段1-资料搜集"
- `runTimeoutSeconds`: 1800（30分钟超时，防止无限等待）
- `cleanup`: "keep"（保留会话记录）

**等待**：子智能体通告

**收到通告后**：
1. 读取通告内容
2. 向用户汇报阶段完成
3. 进入阶段2

### 阶段2：启动写手（阿文）

**操作**：使用 `sessions_spawn` 启动阿文

**参数**：
- `agentId`: "writer"
- `task`: "根据大纲 workspace/openclaw-camp-article/outline.md 撰写初稿。要求：1)按大纲结构写作 2)语言通俗易懂 3)保存到 workspace/openclaw-camp-article/draft-v1.md"
- `label`: "阶段2-撰写初稿"
- `runTimeoutSeconds`: 3600（60分钟超时）

**等待**：子智能体通告

**收到通告后**：
1. 向用户汇报阶段完成
2. 进入阶段3

### 阶段3：启动审核员（阿严）

**操作**：使用 `sessions_spawn` 启动阿严

**参数**：
- `agentId`: "reviewer"
- `task`: "审核文章 workspace/openclaw-camp-article/draft-v1.md。要求：1)从5个维度检查 2)输出审核报告到 workspace/openclaw-camp-article/review-v1.md 3)给出评分"
- `label`: "阶段3-质量审核"
- `runTimeoutSeconds`: 1800

**等待**：子智能体通告

**收到通告后**：
1. 向用户汇报阶段完成
2. 进入阶段4

### 阶段4：启动写手修改（阿文）

**操作**：使用 `sessions_spawn` 启动阿文

**参数**：
- `agentId`: "writer"
- `task`: "根据审核报告 workspace/openclaw-camp-article/review-v1.md 修改文章。要求：1)逐条处理审核意见 2)保持原有风格 3)输出终稿到 workspace/openclaw-camp-article/final.md"
- `label`: "阶段4-修改定稿"
- `runTimeoutSeconds`: 3600

**等待**：子智能体通告

**收到通告后**：
1. 向用户汇报项目完成
2. 发送最终成果摘要

## 向用户汇报格式

### 阶段完成汇报

每个阶段完成后，向用户发送：

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 阶段X完成！[阶段名称]

[子智能体通告的摘要内容]

⏱️ 运行时间：XX分钟
📝 Token使用：XXX

现在进入下一阶段：...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 项目完成汇报

所有阶段完成后，向用户发送：

🎉 任务完成！[项目名称]

📊 执行摘要：
✅ 阶段1：资料搜集（阿亮）- XX分钟
✅ 阶段2：撰写初稿（阿文）- XX分钟
✅ 阶段3：质量审核（阿严）- XX分钟
✅ 阶段4：修改定稿（阿文）- XX分钟

📁 成果文件：
- 大纲：workspace/openclaw-camp-article/outline.md
- 初稿：workspace/openclaw-camp-article/draft-v1.md
- 审核报告：workspace/openclaw-camp-article/review-v1.md
- 终稿：workspace/openclaw-camp-article/final.md

[最终成果内容摘要]

## 通告解析说明

子智能体通告包含以下信息：
- `Status`: success / error / timeout
- `Result`: 执行结果摘要
- `runtime`: 运行时间
- `tokens`: Token使用量
- `sessionKey`: 子智能体会话标识

你需要从通告中提取这些信息，整理后向用户汇报。
```

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_EGAmbdxSLo.jpg)

**为什么这样修改？**

原来的 SOUL.md 只是告诉阿强"指导用户去找其他 Bot"，现在明确告诉阿强：

1. 你有 `sessions_spawn` 能力

1. 用这个能力启动其他 Bot

1. 收到通告后向用户汇报进度

### 步骤3：修改其他 Agent 的 SOUL.md

**目标 **：告诉阿亮、阿文、阿严，当他们被作为子智能体启动时，不需要主动汇报，只需完成任务即可。

**操作步骤 **：

**研究员（阿亮）的 SOUL.md **，在 **末尾添加 **：

复制代码

```
## 子智能体模式说明

当你被作为子智能体启动时：

1. 你会收到一个具体的 `task` 描述
2. 完成任务后，系统会**自动**向阿强发送通告
3. 你**不需要**主动找阿强汇报
4. 只需：
   - 读取 task 内容
   - 执行任务
   - 保存结果到指定路径
   - 正常结束运行

**通告会自动包含**：
- 你的执行结果
- 运行时间和 Token 使用量
- 文件保存路径

**注意**：确保任务完成后有明确的输出内容，这会作为通告的 Result。
```

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_BIo7bOAaoo.jpg)

**写手（阿文）和审核员（阿严）**的 SOUL.md 同样添加以上内容。

### 步骤4：重启 Gateway 测试

**操作步骤 **：

复制代码

```
# 1. 停止现有 Gateway
pkill -f openclaw-gateway

# 2. 重新启动
openclaw gateway
```

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_OoOBb20hko.jpg)

---

## 四、实际工作流程演示

配置完成后，实际对话流程如下：

### 第一步：你下达任务

**你 **：

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_FywGblfpOo.jpg)

### 第二步：阿强启动协调

**阿强 **：

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_ICgtb8Oh1o.jpg)

**此时，阿强在后台使用 ****`sessions_spawn`** **启动了阿亮**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_WUhZbElkSo.jpg)

### 第三步：阶段1完成，自动汇报

**研究院阿亮在后台完成资料收集与大纲撰写，并上报主管阿强**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_GzvBbD0oHo.jpg)

**主管-阿强把上报结果转发给我**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_EF7xb4Rvbo.jpg)

### 第四步：阶段2完成，自动汇报

**写手-阿文在后台完成资料收集与大纲撰写，并上报主管阿强**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_VaSbb5fd9o.jpg)

**主管-阿强把上报结果转发给我**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_RnxJbST2oo.jpg)

### 第五步：阶段3完成，自动汇报

**审核员-阿严在后台开始审核文章并行给出评分和审核意见，并上报主管阿强**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_I29vbzA5lo.jpg)

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_DAX3bOeOho.jpg)

**主管-阿强把上报结果转发给我**

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_WXDlb8xIno.jpg)

### 第六步：项目完成，最终汇报

![](assets/15-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%BA%8C%EF%BC%89%EF%BC%9A%E4%BD%BF%E7%94%A8%E5%AD%90%E6%99%BA%E8%83%BD%E4%BD%93%E5%AE%9E%E7%8E%B0%E5%8D%8F%E4%BD%9C%E8%BF%87%E7%A8%8B%E6%B8%85%E6%99%B0%E5%8F%AF%E8%A7%81_L1GzbQabto.jpg)

恭喜！你已经完成了 **多 Agent 的渐进式学习 **，完整掌握了 OpenClaw 的多 Agent 协调工作的技能！🎉

## 五、常见问题

### Q1: 子智能体运行时可以中断吗？

**A **: 可以。在阿强的对话中发送 `/stop` ，会中止当前运行以及所有子智能体。

### Q2: 子智能体失败怎么办？

**A **: 子智能体的通告会包含状态（ `success` / `error` / `timeout` ）。阿强收到错误通告后，可以：

1. 向用户报告失败原因

1. 或者重新启动子智能体重试

### Q3: 子智能体能再启动子智能体吗？

**A **: 不能。这是官方限制（防止无限递归）。如果需要多层协调，让 Manager 统一调度所有子智能体。

### Q4: 如何查看子智能体的详细日志？

**A **: 子智能体的会话存储在 `~/.openclaw/agents/<agentId>/sessions/` 目录下，可以通过 `sessions_history` 工具查看。

---

## 六、完整学习路径总结

### 1、你的成长路径

| 步骤 | 教程 | 协调方式 | 核心体验 |
|---|---|---|---|
| **第1步** | 上个教程 | sessions_send | 自动发消息，但需查找sessionKey |
| **第2步** | 本教程 | **sessions_spawn** | **过程清晰可见，自动通告 **✅ |

### 2、两种方式对比

| 维度 | sessions_send（13） | sessions_spawn（13_3） |
|---|---|---|
| **自动程度** | ✅ 自动 | ✅ 自动 |
| **过程可见性** | ⚠️ "一闪而过" | ✅ **清晰可见** |
| **使用难度** | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **推荐度** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ **最佳** |

### 3、生产环境推荐

在实际项目中， **强烈推荐使用 ****`sessions_spawn`** ：

- ✅ 全自动协调

- ✅ 过程清晰可见

- ✅ 阶段进展自动汇报

- ✅ 有运行时间和统计信息

- ✅ **上下文隔离 **（最重要）：子智能体在独立会话中运行，不会污染父智能体的上下文

### 4、为什么上下文隔离很重要？

**`sessions_send`** **的问题 **：所有对话在同一个会话中累积

```
阿强的会话历史（混杂在一起）：
1. 用户：帮我写文章
2. 阿强→阿亮：研究主题
3. 阿亮回复：大纲完成...
4. 阿强→阿文：写初稿
5. 阿文回复：初稿完成...
6. ...（上下文越来越长）
```

**`sessions_spawn`** **的优势 **：子智能体独立运行

```
阿强的会话（简洁，只看结果）：
1. 用户：帮我写文章
2. 收到阿亮通告：阶段1完成 ✓
3. 收到阿文通告：阶段2完成 ✓
4. ...

阿亮的子会话（独立，只包含研究过程）：
1. 收到 task：研究主题 XXX
2. 执行研究...
3. 保存大纲 → 自动通告 → 子会话结束
```

**好处 **：

- 父智能体上下文保持简洁，不受子任务干扰

- 多个子智能体可以并行执行，互不干扰

- 避免上下文窗口溢出

---

## 七、子智能体高级特性

### 1、斜杠命令管理子智能体

你可以在聊天对话框中使用斜杠命令管理子智能体：

| 命令 | 作用 |
|---|---|
| `/subagents list` | 列出当前会话的所有子智能体 |
| `/subagents stop <id>` | 停止指定的子智能体 |
| `/subagents log <id>` | 查看子智能体的运行日志 |
| `/subagents info <id>` | 查看子智能体的详细信息 |

**使用场景 **：

- 查看哪些子智能体正在运行

- 强制停止卡住的子智能体

- 查看子智能体的详细执行日志

### 2、工具参数详细说明

`sessions_spawn` 支持以下参数：

| 参数 | 必需 | 说明 | 示例 |
|---|---|---|---|
| `task` | ✅ | 任务描述 | `"研究 OpenClaw 主题..."` |
| `agentId` | ❌ | 指定哪个 Agent 执行 | `"researcher"` |
| `label` | ❌ | 标签（用于日志/UI） | `"阶段1-资料搜集"` |
| `model` | ❌ | 覆盖子智能体模型 | `"anthropic/claude-sonnet-4.5"` |
| `runTimeoutSeconds` | ❌ | 超时时间（秒） | `1800` （30分钟） |
| `cleanup` | ❌ | 清理策略 | `"keep"` 或 `"delete"` |

**关于 ****`cleanup`** **参数 **：

- `"keep"` （默认）：保留子智能体会话记录

- `"delete"` ：完成后立即删除（仍然保留转录文件）

**关于 ****`runTimeoutSeconds`** ：

- `0` （默认）：无超时限制

- 设置后，子智能体运行超过指定时间会被强制停止

### 3、通告机制详解

子智能体完成后会发送 **通告 **到父智能体的聊天渠道：

**通告包含的信息 **：

```
Status: success          ← 运行状态（success/error/timeout）
Result: 大纲已完成，保存到 workspace/openclaw-camp-article/outline.md
Notes: 无

runtime 5m12s            ← 运行时间
tokens 1,234/5,678/6,912  ← Token 使用量（输入/输出/总计）
sessionKey agent:researcher:subagent:xxx  ← 子会话标识
sessionId xxx-xxx-xxx
```

**重要特性 **：

1. **通告是尽力而为的 **：如果 Gateway 重启，待处理的通告可能丢失

1. **可以静默 **：子智能体回复 `ANNOUNCE_SKIP` 则不发送通告

1. **状态来自运行时 **：不是从模型输出推断，而是实际的运行结果

### 4、子智能体的工具限制

**默认情况下，子智能体没有会话工具 **：

- ❌ `sessions_list`

- ❌ `sessions_history`

- ❌ `sessions_send`

- ❌ `sessions_spawn` （子智能体不能再生成子智能体）

**原因 **：防止滥用和无限递归

### 5、自动归档机制

子智能体会话会在完成后 **自动归档 **：

- **默认时间 **：60分钟后

- **归档方式 **：会话被标记为删除，转录文件重命名为 `*.deleted.<timestamp>`

- **立即归档 **：设置 `cleanup: "delete"` 会在通告后立即归档

### 6、并发控制

子智能体使用专用的队列通道：

- **通道名称 **： `subagent`

- **默认并发数 **：8（可通过 `agents.defaults.subagents.maxConcurrent` 配置）

**成本考虑 **： 每个子智能体都有自己的上下文和 Token 使用量。对于繁重任务，可以为子智能体设置更便宜的模型：

复制代码

```
{
  "agents": {
    "defaults": {
      "subagents": {
        "model": "kimi-coding/k2p5"
      }
    }
  }
}
```

### 7、重要限制

| 限制 | 说明 |
|---|---|
| **不能嵌套** | 子智能体不能调用 `sessions_spawn` 生成子智能体 |
| **尽力而为的通告** | 如果 Gateway 重启，待处理的通告可能丢失 |
| **共享资源** | 子智能体共享同一个 Gateway 进程资源 |
| **非阻塞** | `sessions_spawn` 始终立即返回，不会等待子智能体完成 |
| **上下文注入** | 子智能体只注入 `AGENTS.md` 和 `TOOLS.md` ，不注入 `SOUL.md` 、 `IDENTITY.md` 等 |

### 8、停止子智能体

在父智能体的对话中发送 `/stop` 会：

1. 中止父智能体的当前运行

1. 同时停止所有活动的子智能体

**单独停止子智能体 **：

复制代码

```
/subagents stop <id>
```

