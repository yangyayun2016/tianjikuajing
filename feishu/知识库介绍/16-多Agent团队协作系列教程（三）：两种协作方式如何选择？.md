---
title: "16-多Agent团队协作系列教程（三）：两种协作方式如何选择？"
feishu_url: https://my.feishu.cn/wiki/OyxGwhFxMi1g2KkRhNfcikA8noN
obj_type: docx
obj_token: FJCbdRpyPoyoHYxFZShcETyzn3L
updated: 2026-03-11T11:07:15+08:00
---

# 16-多Agent团队协作系列教程（三）：两种协作方式如何选择？

> 🔗

[13-AI 助手的Skills系统：怎样扩展智能体额外能力](https://my.feishu.cn/docx/TZ12dlq3To9peGxvaYdcwdsCnDh)

[15-多Agent团队协作系列教程（二）：使用子智能体实现协作过程清晰可见](https://my.feishu.cn/docx/GgeUdR1fSo92OfxM1aEcqTRknyf)

> [【飞书文档】16-多Agent团队协作系列教程（三）：两种协作方式如何选择？ -可复制素材](https://lightship-rpa.feishu.cn/docx/NnFuddh67oCddIxibMIcvH2JnQg?from=from_copylink)

## 一、从"解决问题"到"理解原理"

### 1.1 回顾：我们已经解决了什么问题？

在前两篇教程中，我们经历了这样一个过程：

**教程13 （基础配置） **：

- ✅ 创建了 4 个 Bot

- ✅ 配置了各自的 IDENTITY.md 和 SOUL.md

- ✅ 使用 `sessions_send` 实现了自动协调

- ❌ 但过程"一闪而过"，不够清晰可见

**教程14 （子智能体实战） **：

- ✅ 使用 `sessions_spawn` 解决了"过程不可见"的问题

- ✅ 实现了"只需跟阿强对话"的效果

- ✅ 过程实时可见，自动汇报进度

### 1.2 新的问题：只有一种方式吗？

虽然 `sessions_spawn` 已经能解决 90% 的场景，但作为一个负责任的工程师，你应该知道：

**OpenClaw 官方提供了两种多 Agent 协调机制 **：

1. **`sessions_send`** ：向已运行的 Agent 发送消息

1. **`sessions_spawn`** ：启动子智能体

💡 **关于 ****`agentToAgent`** ：这不是独立工具，而是 `sessions_send` 的权限开关配置。启用 `tools.agentToAgent` 只是允许跨 Agent 通信，实际工具仍是 `sessions_send` 。

**为什么要了解全部两种？**

想象一下：

- 你只会用锤子（ `sessions_spawn` ），所有的任务都用锤子解决

- 但有时候，螺丝刀（ `sessions_send` ）可能更合适

学会两种方式，你就能：

- 根据场景选择最佳工具

- 理解每种方式的优缺点

- 在复杂项目中混合使用多种方式

### 1.3 本教程的学习目标

完成本教程后，你将：

- ✅ 理解两种协调方式的底层原理

- ✅ 知道每种方式的适用场景

- ✅ 能够根据需求选择最佳方案

- ✅ 掌握混合使用多种方式的技巧

---

## 二、两种方式对比概览

### 2.1 特性对比表

| 特性 | `sessions_send` | `sessions_spawn` |
|---|---|---|
| **通信方向** | 单向/双向消息 | 父→子任务派发 |
| **会话关系** | 目标 Agent 的现有会话 | **新建子会话** |
| **完成后通知** | 可选等待回复 | **自动通告** |
| **使用场景** | 向特定 Agent 发消息 | **Manager 协调团队** |
| **配置要求** | `tools.agentToAgent.enabled` （跨Agent通信权限） | `subagents.allowAgents` |
| **并发能力** | 无限制 | 受 `maxConcurrent` 限制 |
| **学习难度** | ⭐⭐ | ⭐⭐⭐ |

💡 **关于 ****`tools.agentToAgent`** ：这是 `sessions_send` 的权限开关，控制是否允许跨 Agent 通信。启用后， `sessions_send` 才能向其他 Agent 的会话发送消息。

### 2.2 生活化类比

为了帮助你理解，我们用生活中的场景来类比：

| 方式 | 类比 | 说明 |
|---|---|---|
| **`sessions_send`** | 发 **微信消息** | 可以等对方回复，也可以即发即忘 |
| **`sessions_spawn`** | **派下属 **去执行任务 | 下属做完事自动汇报，你不用一直盯着 |

### 2.3 使用场景速查

| 你的需求 | 推荐方式 | 原因 |
|---|---|---|
| Manager 统一协调团队 | **`sessions_spawn`** | 自动通告，统一收集结果 |
| 向已运行的 Bot 发消息 | **`sessions_send`** | 直接发送到目标 Agent 的会话 |
| 后台异步任务 | **`sessions_spawn`** | 独立会话，不阻塞主流程 |
| 紧急通知其他 Bot | **`sessions_send`** | 即发即忘，无需等待 |

---

## 三、sessions_send 详解

### 3.1 工作原理

`sessions_send` 是 **会话工具 **，向另一个已存在的会话发送消息。

**核心概念 **：

- 向 **特定会话 **（通过 `sessionKey` 指定）发送消息

- 需要启用 `tools.agentToAgent` 权限才能跨 Agent 通信

- `tools.agentToAgent` 是权限开关，不是独立工具

**工作流程 **：

![](assets/16-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%89%EF%BC%89%EF%BC%9A%E4%B8%A4%E7%A7%8D%E5%8D%8F%E4%BD%9C%E6%96%B9%E5%BC%8F%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%EF%BC%9F_LRmsb89WFo.jpg)

**关键特性 **：

1. **目标明确 **：可以精确指定发送到哪个会话

1. **可选等待 **：可以等待回复，也可以即发即忘

1. **超时控制 **：可以设置超时时间

### 3.2 配置方法

`sessions_send` 是 **内置工具 **，无需额外配置。

**使用步骤 **：

复制代码

```
## 使用 sessions_send 发送消息

### 步骤1：查找目标会话

使用 `sessions_list` 查找阿亮的会话：
- 筛选条件：`kind: "main"`, agentId: "researcher"

### 步骤2：发送消息

使用 `sessions_send`：
- `sessionKey`: "agent:researcher:main"
- `message`: "详细的任务描述"
- `timeoutSeconds`: 600（等待10分钟，0表示即发即忘）

### 步骤3：处理回复

- `status: "ok"`：提取 reply 内容
- `status: "timeout"`：记录日志，稍后重试
- `status: "error"`：向用户报告错误
```

### 3.3 适用场景

以我们的内容创作团队为例：

**场景1：紧急通知团队成员**

```
阿强：阿亮、阿文、阿严注意，客户要求文章明天早上就要！
（使用 sessions_send，timeoutSeconds: 0，即发即忘）
```

**场景2：向正在写作的阿文发送补充要求**

```
阿强：阿文，客户刚刚补充了一个要求，文章里要加上"多 Agent 协作"的内容。
（使用 sessions_send，等待回复确认）
```

---

## 四、sessions_spawn 详解（回顾与深化）

### 4.1 工作原理（深化理解）

我们在上篇教程已经学过 `sessions_spawn` ，现在深入理解其原理。

**完整生命周期 **：

![](assets/16-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%89%EF%BC%89%EF%BC%9A%E4%B8%A4%E7%A7%8D%E5%8D%8F%E4%BD%9C%E6%96%B9%E5%BC%8F%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%EF%BC%9F_XQBkbCwYFo.jpg)

**关键设计 **：

- **隔离性 **：子智能体在独立会话中运行，不影响 Manager

- **自动性 **：完成后自动通告，无需手动干预

### 4.2 配置方法（回顾）

复制代码

```
{
  "agents": {
    "list": [
      {
        "id": "manager",
        "subagents": {
          "allowAgents": ["researcher", "writer", "reviewer"]
        }
      }
    ]
  }
}
```

### 4.3 两种方式的核心区别

现在你已经了解了两种方式，我们来做个清晰的对比：

| 维度 | sessions_send | sessions_spawn |
|---|---|---|
| **通信模式** | 任何会话 → 任何会话 | Manager → 子智能体 |
| **会话创建** | 复用现有会话 | **创建新会话** |
| **自动通知** | ❌ 需手动回复 | ✅ **自动通告** |
| **最佳场景** | 定向通信 | 任务派发 |

💡 **关于 ****`sessions_send`** **的跨 Agent 通信 **：需要启用 `tools.agentToAgent` 权限开关，但这不改变其本质——它仍然是向特定会话发送消息的底层工具。

---

## 五、如何选择？决策指南

### 5.1 决策流程图

![](assets/16-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%89%EF%BC%89%EF%BC%9A%E4%B8%A4%E7%A7%8D%E5%8D%8F%E4%BD%9C%E6%96%B9%E5%BC%8F%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9%EF%BC%9F_KksIbMZ4fo.jpg)

### 5.2 场景决策表

| 你的场景 | 分析 | 推荐方式 |
|---|---|---|
| "只需给阿强发命令，自动写文章" | 需要 Manager 统一协调 | **sessions_spawn** |
| "向正在写作的阿文发补充要求" | 目标已在运行 | **sessions_send** |
| "阿亮正在搜集资料，等他完成后通知我" | 需要等待回复 | **sessions_send** |
| "启动资料搜集任务，我先做其他事" | 无需等待，后台执行 | **sessions_spawn** |
| "阿强询问阿亮进度，等待回复" | 双向通信 | **sessions_send** |

### 5.3 混合使用示例

在实际项目中，你可以 **混合使用 **两种方式：

复制代码

```
# 阿强的 SOUL.md - 混合方案

## 主要流程：sessions_spawn

阶段1-4：使用 sessions_spawn 启动子智能体
- 自动收集结果
- 统一向用户汇报

## 紧急通信：sessions_send

如果某个子智能体超时：
1. 使用 `sessions_list` 查找其子会话
2. 使用 `sessions_send` 发送催促消息
3. 设置 `timeoutSeconds: 60` 等待响应
```

---

## 六、常见问题

### Q1: 两种方式可以都用吗？

**A **: 可以。建议：

- 主要流程用 `sessions_spawn` （自动协调）

- 紧急通信用 `sessions_send` （即时消息）

### Q2: 子智能体能再启动子智能体吗？

**A **: 不能。这是官方限制（防止无限递归）。如果需要多层协调，让 Manager 统一调度所有子智能体。

### Q3: sessions_send 和 sessions_spawn 有什么区别？

**A **:

- **sessions_send **：向已存在的会话发送消息，支持等待回复或即发即忘

- **sessions_spawn **：创建新的子会话，独立运行，完成后自动通告

- 选择建议：需要后台独立运行选 `sessions_spawn` ，向已有会话发消息选 `sessions_send`

### Q4: 哪种方式最适合初学者？

**A **: 推荐学习顺序：

1. 先学 `sessions_spawn` （ 教程14 ）- 解决最常见的问题（Manager 协调团队）

1. 再学 `sessions_send` - 理解底层通信机制

💡 **关于 ****`tools.agentToAgent`** ：这不是需要"学习"的独立工具，而是 `sessions_send` 的权限配置。启用它只是为了允许跨 Agent 通信。

### Q5: 为什么教程主要讲 sessions_spawn？

**A **: 因为 `sessions_spawn` 能解决 90% 的场景（Manager 协调团队），且过程清晰可见。掌握它之后，再根据需求学习 `sessions_send` 作为补充。

---

## 七、总结与下一步

### 7.1 两种方式的核心特点

| 方式 | 核心特点 | 一句话总结 |
|---|---|---|
| `sessions_send` | 定向消息 | "像发微信，可以等回复" |
| `sessions_spawn` | 任务派发 | "像派下属，做完自动汇报" |

💡 **关于 ****`tools.agentToAgent`** ：这是 `sessions_send` 的权限开关，不是独立工具。启用它允许跨 Agent 通信，但实际通信机制仍是 `sessions_send` 。

### 7.2 你的成长路径

| 阶段 | 已掌握的能力 | 状态 |
|---|---|---|
| 教程13 | 多 Agent 基础配置 + sessions_send | ✅ 已完成 |
| 教程13_3 | 子智能体自动协调（sessions_spawn） | ✅ 已完成 |
| 本教程 | 两种协调方式详解 | ✅ 已完成 |

### 7.3 下一步建议

**恭喜你！ **你已经完整掌握了 OpenClaw 的多 Agent 协调机制。

**你可以 **：

- 根据场景选择最佳协调方式

- 在复杂项目中混合使用多种方式

- 设计更复杂的多 Agent 协作流程

**推荐实践 **：

1. 在实际项目中使用不同的协调方式

1. 尝试设计一个需要混合使用多种方式的项目

1. 继续学习 OpenClaw 的其他高级功能

