---
title: "14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队"
feishu_url: https://my.feishu.cn/wiki/JVF0wvNmsi3MhakmO8LcAjR0nOd
obj_type: docx
obj_token: O2FYdxSaeowkwwxDsegcXHJOnSe
updated: 2026-04-01T09:13:34+08:00
---

# 14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队

> 🔗 原文链接： ⁣⁢⁣⁣⁡14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队

> ⏰

[14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队 -可复制素材 副本](https://my.feishu.cn/wiki/Q31xwm6poig9hfk4BYqc7VqmnBg)

> [【飞书文档】14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队 -可复制素材](https://lightship-rpa.feishu.cn/docx/SMAVddyZVokpuSxDoZPcn21AnLe?from=from_copylink)

前面的文章，我们都是在和 **一个 **AI 助手对话。但如果任务很复杂，一个 AI 可能搞不定——就像一个人无法同时做产品、设计、开发、测试一样。

这时候，你需要 **多 Agent 团队协作 **：创建多个 AI 助手，每个负责不同领域，让它们相互配合完成任务。

这篇文章，我将通过一个 **完整的实战案例 **——用 4 个 Telegram Bot 协作写一篇文章——来教你搭建自己的 AI 梦之队。

**本教程的核心能力 **：使用 `sessions_send` 实现多 Agent 自动协调。

在本章中，你将学习：

1. 配置 4 个 Bot 的基础协作环境

1. 使用 `sessions_send` 让阿强自动向其他 Bot 发送消息

1. 体验多 Agent 协作的完整流程

> 📋 **本章预期效果**

> 完成配置后，你 **只需要跟阿强（运营主管）对话 **：

1. 你给阿强下达写文章任务

1. 阿强自动协调阿亮、阿文、阿严完成工作

1. 阿强向你汇报最终结果和交付物

> **你只会看到 **：阿强的对话窗口（过程在后台自动完成） **你不会看到 **：阿亮、阿文、阿严的独立回复（他们在后台与阿强协作）

> 这是 **sessions_send **的工作方式——过程在后台，最终结果由阿强汇总给你。

> 本节课需要你通过IDE（建议使用 vscode）打开 openclaw 的主目录 `~/.openclaw` ，方便跟着本教程查看，创建和修改文件。

# 前置要求（必须）

- [ ] OpenClaw 已安装（参考《本地安装-Windows-Mac-详细步骤》）
- [ ] OpenClaw Gateway 能正常运行（运行 openclaw gateway 不报错）
- [ ] 有 Telegram 账号（用手机号注册，免费）
- [ ] 有 AI 模型的 API Key（配置在 openclaw.json 中）
## 可选条件

- [ ] 有一些历史文章（用于风格参考，没有也可以）

> 💡 **如果你是纯小白 **：建议先完成第01-03章，确保能和一个 AI 助手正常对话后，再开始本章。

# 一、什么是多 Agent 团队协作？

## 简单理解

想象一下一个软件开发团队：

- **产品经理 **：分析需求、写 PRD

- **架构师 **：设计技术方案

- **前端开发 **：写界面代码

- **后端开发 **：写服务端代码

- **测试 **：保证质量

每个人都有专业分工，通过协作完成一个大项目。

**多 Agent 团队协作 **，就是让多个 AI 助手扮演这些角色，相互配合完成任务。

## 为什么要多 Agent？

考虑到很多学员没有编程背景，我们就以大家都熟悉的写文章为例，讲一下如何实现多 Agent 协作？

**场景 **：你要写一篇介绍 openclaw 的文章

**单 Agent 模式 **：

- 一个 AI 既要搜集资料又要写作又要检查

- 容易顾此失彼，质量不稳定

- 对话太长，上下文容易混乱

**多 Agent 模式 **：

- 研究员 Agent：专注搜集资料

- 写手 Agent：专注撰写内容

- 审核员 Agent：专注质量检查

- 每个 Agent 都是专家，质量更高

**核心优势 **： **专业化分工 + 流程标准化**

---

# 二、实战案例：用 4 个 Bot 协作写一篇文章

本案例演示如何用 Telegram 多 Bot 方式实现 Agent 协作。

> **重要提示 **：本教程完成效果是： **「你」只需要跟阿强（运营主管）对话 **。阿强会协调整个团队，最后直接交付结果（各个阶段的交付物及最终交付结果）

## 2.1 团队角色设计

我们创建 4 个 Telegram Bot，各司其职：

| Bot 角色 | 用户名 | 职责 | 与你交互方式 |
|---|---|---|---|
| **运营主管-阿强** | 阿强 | 接收任务、拆解工作、协调团队、跟踪进度 | 你私聊发任务 |
| **研究员-阿亮** | 阿亮 | 搜集资料、整理大纲、提供数据 | 接收主管调度 |
| **写手-阿文** | 阿文 | 撰写文章、润色内容、按风格写作 | 接收主管调度 |
| **审核员-阿严** | 阿严 | 质量检查、提出修改建议 | 接收主管调度 |

**工作流程 **：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_DgPzbA1Oko.jpg)

## 2.2 准备工作

### 步骤1：创建 4 个 Telegram Bot

#### 1.1 自备 Telegram 账号

需要自备一个可以登录的 telegram 账号，下载并登录 telegram APP，最好电脑端和手机端都下载并登录好，电脑端主要用于在配置过程中方便操作，手机端是以后指挥 AI 助理干活的主战场。

#### 1.2 进入 BotFather

在 Telegram 顶部的搜索框输入 `@BotFather` ，点击搜索结果中的 **BotFather **（带蓝色勾认证标志），点击底部的 **"开始" **按钮（或发送 `/start` ）

 我这里不是首次打开，已经没有 `start` 按钮了

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_VsthbgRL0o.jpg)

#### 1.3 创建第一个 Bot（阿强）

按照以下步骤创建运营主管 Bot：

**第1步 **：发送 `/newbot` 给 BotFather

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_AFoUbVcO5o.jpg)

**第2步 **：输入 Bot 名称 `运营主管-阿强`

> 这是显示名称，可以随时修改

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_K7HubRmnro.jpg)

**第3步 **：输入 Bot 用户名 `apo_manager_bot` 

> **注意 **：

- 必须以 `bot` 结尾

- 全球唯一（如果已被占用，换其他名字如 `apo_manager_001_bot` ）

- 只能用英文字母、数字、下划线

创建成功后，BotFather 会发送类似下图的消息：

> 🔴 **极其重要 **：复制保存这段 Token（ `123456789:...` ）

- 这是 Bot 的"密码"，不要泄露给任何人

- 建议保存到记事本或密码管理器

- 如果丢了，可以找 BotFather 重新生成（ `/revoke` ）

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_DPA1bPnK4o.jpg)

#### 1.4 测试第一个 Bot

1. 点击 BotFather 消息中的链接 `t.me/apo_manager_bot` 或者在 Telegram 搜索 `@apo_manager_bot`

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_QRMcbXPi6o.jpg)

1. 进入对话框，点击 **"开始"**

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_LDhTbDQm7o.jpg)

1. 发送任意消息（如 "你好"）

> 此时 Bot 不会回复（还没配置），但能看到对话框就说明创建成功了。

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_FEDbb3is9o.jpg)

#### 1.5 创建另外 3 个 Bot

重复 1.3-1.4 的步骤，创建其他成员：

| 角色 | 名称 | 建议用户名 | Token 保存位置 |
|---|---|---|---|
| 研究员 | 研究员-阿亮 | `apo_researcher_bot` | 保存到文档 |
| 写手 | 写手-阿文 | `apo_writer_bot` | 保存到文档 |
| 审核员 | 审核员-阿严 | `apo_reviewer_bot` | 保存到文档 |

> 注意：每个 bot 创建间隔适当拉长一些，比如 5 分钟后再建，不过不用太担心，他不是封号，过会自动解除

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_F1o1bAHwQo.jpg)

#### 1.6 整理 Token 信息

创建一个文档（如记事本），保存4个Token：

```
阿强（运营主管）: 123456789:ABCdef...
阿亮（研究员）: 987654321:XYZabc...
阿文（写手）: 456789123:DEFghi...
阿严（审核员）: 789123456:JKLmn...
```

**4 个 Bot 信息 **：

| Bot | 建议名称 | 建议用户名 |
|---|---|---|
| 运营主管 | 运营主管-阿强 | apo_manager_bot |
| 研究员 | 研究员-阿亮 | apo_researcher_bot |
| 写手 | 写手-阿文 | apo_writer_bot |
| 审核员 | 审核员-阿严 | apo_reviewer_bot |

### 步骤2：配置 OpenClaw 连接 Telegram

**2.1 找到配置文件**

首先，找到 OpenClaw 的配置文件位置：

| 系统 | 配置文件路径 |
|---|---|
| Mac/Linux | `~/.openclaw/openclaw.json` |
| Windows | `%USERPROFILE%\.openclaw\openclaw.json` （通常是 `C:\Users\你的用户名\.openclaw\openclaw.json` ） |

**💡 快速打开方法：**

- **Mac **: 打开「终端」，输入 `open ~/.openclaw`

- **Windows **: 按 `Win + R` ，输入 `%USERPROFILE%\.openclaw` ，回车

**2.2 备份原文件（重要！）**

在修改前，先备份一份：

- 复制 `openclaw.json` 文件

- 粘贴并重命名为 `openclaw.json.backup`

**2.3 编辑配置文件**

用任意文本编辑器打开 `openclaw.json` ，在 `channels` 部分添加 Telegram 配置：

复制代码

```
{
  "channels": {
    "telegram": {
      "accounts": {
        "manager": {
          "botToken": "123456789:AAxxx...运营主管的Token...",
          "dmPolicy": "pairing"
        },
        "researcher": {
          "botToken": "123456789:AAxxx...研究员的Token...",
          "dmPolicy": "pairing"
        },
        "writer": {
          "botToken": "123456789:AAxxx...写手的Token...",
          "dmPolicy": "pairing"
        },
        "reviewer": {
          "botToken": "123456789:AAxxx...审核员的Token...",
          "dmPolicy": "pairing"
        }
      }
    }
  }
}
```

**⚠️ 关键注意事项：**

1. **替换 Token **: 把 `123456789:AAxxx...` 替换为你刚才在 BotFather 获得的 4 个真实 Token

1. **JSON 格式 **:
  - 每个字段后面要有逗号 `,` ， **除了最后一个**
  - 所有引号必须是英文双引号 `"` ，不能用中文引号 `"`
  - 大括号 `{ }` 和中括号 `[ ]` 必须成对出现

1. **验证 JSON **: 修改后，把内容粘贴到 [https://jsonlint.com/ ](https://jsonlint.com/)验证格式是否正确

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_XQCtbAv2Vo.jpg)

**2.4 验证配置**

修改完成后，检查文件格式：

复制代码

```
# Mac/Linux 用户可以在终端运行
cat ~/.openclaw/openclaw.json | python3 -m json.tool
# 如果显示格式化后的 JSON，说明格式正确
# 如果报错，说明有语法错误
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Pyzybu8OKo.jpg)

Windows 用户可以直接用上面的在线 JSON 验证工具。

### 步骤3：创建 Agent 配置和身份文件

**步骤3.1：创建目录结构**

**Mac/Linux 用户 **：

在终端输入以下命令，为每个agent创建单独的workspace和agentDir（存放状态和session）

复制代码

```
mkdir -p ~/.openclaw/agents/{manager,researcher,writer,reviewer}/{workspace,agent}
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Ztt2bbgWmo.jpg)

准备历史文章（可选，用于风格参考）

如果你有历史文章想作为风格参考，可以放进去。

或者 **手动复制 **：直接复制文件到 `C:\Users\你的用户名\.openclaw\workspace\reference\style-examples\` 目录下。

**不需要风格参考？ **可以跳过这一步，阿文会按照通用风格写作。

复制代码

```
mkdir -p ~/.openclaw/workspace/reference/style-examples
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_FxwWbWQtvo.jpg)

**Windows 用户 **： 在 PowerShell 中执行：

复制代码

```
# 创建 agent 目录（包含 workspace 和 agent 子目录）
$agents = @("manager", "researcher", "writer", "reviewer")
foreach ($agent in $agents) {
    New-Item -ItemType Directory -Path "$env:USERPROFILE\.openclaw\agents\$agent\workspace" -Force
    New-Item -ItemType Directory -Path "$env:USERPROFILE\.openclaw\agents\$agent\agent" -Force
}

# 创建参考文件目录
New-Item -ItemType Directory -Path "$env:USERPROFILE\.openclaw\workspace\reference\style-examples" -Force
```

或者 **手动创建 **：在文件资源管理器中创建以下文件夹结构：

```
C:\Users\你的用户名\.openclaw\
├── agents\
│   ├── manager\
│   │   ├── workspace\
│   │   └── agent\
│   ├── researcher\
│   │   ├── workspace\
│   │   └── agent\
│   ├── writer\
│   │   ├── workspace\
│   │   └── agent\
│   └── reviewer\
│       ├── workspace\
│       └── agent\
└── workspace\
    └── reference\style-examples\
```

**步骤3.2：运营主管配置文件**

**3.2.1 运营主管 IDENTITY.md**

创建 `~/.openclaw/agents/manager/workspace/IDENTITY.md` ，内容如下：

复制代码

```
# IDENTITY.md - 运营主管

Name: 阿强
Creature: AI 团队协调员
Vibe: 专业、高效、善于统筹
Emoji: 🎯

我是阿强，你的运营主管，负责协调研究员阿亮、写手阿文、审核员阿严完成内容创作任务。

我的职责：
- 接收用户任务，拆解工作阶段
- 调度团队成员，分配具体工作
- 跟踪项目进度，及时同步用户
- 确保最终交付质量

团队成员：
- 阿亮（研究员）：搜集资料、整理大纲
- 阿文（写手）：撰写文章、润色内容
- 阿严（审核员）：质量检查、提出修改建议
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_XiaYbHyKEo.jpg)

**3.2.2 运营主管 SOUL.md **（核心协调逻辑）

创建 `~/.openclaw/agents/manager/workspace/SOUL.md` ，内容如下：

复制代码

```
# SOUL.md - 运营主管（sessions_send 版）

你是阿强，负责协调研究员阿亮、写手阿文、审核员阿严完成内容创作任务。

## 核心能力：使用 sessions_send

你可以使用 `sessions_send` 工具向其他 Bot 的会话发送消息。

**使用步骤**：
1. 使用 `sessions_list` 查找目标 Bot 的会话
2. 使用 `sessions_send` 发送消息
3. 根据需要选择"即发即忘"或"等待回复"

⚠️ **重要说明**：你**必须**使用 `sessions_send` 工具发送消息，**不要**自己直接完成任务！

## 工作流程

当收到用户任务时：

1. 确认任务要求
   - 主题、字数、风格
   - 是否要求参考历史文章风格
   - 如果有风格参考，记录历史文章路径

2. 拆解任务阶段
   - 阶段1：研究员整理大纲
   - 阶段2：写手撰写文章（如需风格分析，先分析再写作）
   - 阶段3：审核员质量检查
   - 阶段4：写手修改定稿

3. **执行阶段1：发送消息给阿亮（研究员）**
   - 使用 `sessions_list` 查找阿亮的会话
   - 使用 `sessions_send` 发送任务
   - `sessionKey`: "agent:researcher:main"
   - `timeoutSeconds`: 600（等待10分钟）
   - 收到回复后，向用户同步进展

4. **执行阶段2：发送消息给阿文（写手）**
   - 使用 `sessions_list` 查找阿文的会话
   - 使用 `sessions_send` 发送任务
   - `sessionKey`: "agent:writer:main"
   - `timeoutSeconds`: 1800（等待30分钟）
   - 收到回复后，向用户同步进展

5. **执行阶段3：发送消息给阿严（审核员）**
   - 使用 `sessions_list` 查找阿严的会话
   - 使用 `sessions_send` 发送任务
   - `sessionKey`: "agent:reviewer:main"
   - `timeoutSeconds`: 600
   - 收到回复后，向用户同步进展

6. **执行阶段4：发送消息给阿文修改**
   - 使用 `sessions_send` 发送修改任务
   - `sessionKey`: "agent:writer:main"
   - `timeoutSeconds`: 1800
   - 收到回复后，向用户汇报最终结果

## 文件协作规范

所有项目文件统一存放在共享 workspace 目录：

| 阶段 | 负责人 | 交付文件 | 存放路径 |
|------|--------|---------|---------|
| 阶段1 | 阿亮（研究员） | 大纲 | `~/.openclaw/workspace/openclaw-camp-article/outline.md` |
| 阶段2-① | 阿文（写手） | 风格指南 | `~/.openclaw/workspace/openclaw-camp-article/style-guide.md` |
| 阶段2-② | 阿文（写手） | 初稿 | `~/.openclaw/workspace/openclaw-camp-article/draft-v1.md` |
| 阶段3 | 阿严（审核员） | 审核报告 | `~/.openclaw/workspace/openclaw-camp-article/review-v1.md` |
| 阶段4 | 阿文（写手） | 终稿 | `~/.openclaw/workspace/openclaw-camp-article/final.md` |

> 💡 **路径说明**：使用 `~/.openclaw/workspace/` 绝对路径确保所有 Agent 都能正确找到文件。`~` 表示用户主目录（Mac/Linux 是 `/Users/用户名`，Windows 是 `C:\Users\用户名`）。

**重要**：你需要把这些路径告诉用户，让他们知道文件保存在哪里。
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_XF4ibWMG4o.jpg)

或者用命令创建：

复制代码

```
cat > ~/.openclaw/agents/manager/workspace/SOUL.md << 'SOULFILE'
[粘贴上面的内容]
SOULFILE
```

**3.2.3 运营主管 AGENTS.md（团队成员列表）**

创建 `~/.openclaw/agents/manager/workspace/AGENTS.md` ，让阿强知道团队成员：

复制代码

```
# AGENTS.md - 团队成员列表

我是阿强（运营主管），我的团队成员：

## 成员列表

| 姓名 | 角色 | 职责 | Bot用户名 | workspace路径 |
|------|------|------|-----------|---------------|
| 阿亮 | 研究员 | 搜集资料、整理大纲 | apo_researcher_bot | ~/.openclaw/agents/researcher |
| 阿文 | 写手 | 撰写文章、润色内容 | apo_writer_bot | ~/.openclaw/agents/writer |
| 阿严 | 审核员 | 质量检查、提出修改建议 | apo_reviewer_bot | ~/.openclaw/agents/reviewer |

## 协作方式

1. **任务分配**：我通过 Telegram 私聊向对应成员发送任务
2. **文件协作**：所有成员共享 ~/.openclaw/workspace/ 目录
3. **进度同步**：每个成员完成任务后向我汇报

## 工作区隔离说明

每个成员有独立的工作区：
- 阿亮的独立空间：~/.openclaw/agents/researcher/workspace/
- 阿文的独立空间：~/.openclaw/agents/writer/workspace/
- 阿严的独立空间：~/.openclaw/agents/reviewer/workspace/

共享空间（项目文件）：~/.openclaw/workspace/
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_MnetbAAlIo.jpg)

**3.2.4 运营主管 MEMORY.md（独立记忆）**

> 💡 **什么是 MEMORY.md？**

> MEMORY.md 是 Agent 的"笔记本"，用来记录：

- 进行中的任务状态

- 历史对话摘要

- 工作偏好和习惯

> 这个文件 **Agent会自动读写 **，你不需要手动编辑。但需要在初始化时创建空文件。

创建 `~/.openclaw/agents/manager/workspace/MEMORY.md` ：

复制代码

```
# Mac/Linux
touch ~/.openclaw/agents/manager/workspace/MEMORY.md

# Windows (PowerShell)
New-Item -ItemType File -Path "$env:USERPROFILE\.openclaw\agents\manager\workspace\MEMORY.md" -Force
```

内容示例（由Agent自动维护，不需要你手动写）：

```
# MEMORY.md - 阿强的记忆

## 进行中的项目

### OpenClaw训练营介绍文章
- 状态：进行中
- 创建时间：2026-02-19 10:00
- 阿亮状态：已完成大纲
- 阿文状态：正在撰写初稿
- 阿严状态：等待审核

## 团队成员状态
- 阿亮：忙碌（资料收集中）
- 阿文：忙碌（写作中）
- 阿严：空闲

## 历史项目
[已完成项目记录...]
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Lh4dbjvRSo.jpg)

**步骤3.3：研究员配置文件**

后面几个 bot 成员的配置文件操作方法跟上面一样，按照下面内容逐个创建并填写完成

**3.1 研究员 IDENTITY.md**

创建 `~/.openclaw/agents/researcher/workspace/IDENTITY.md` ，内容如下：

复制代码

```
# IDENTITY.md - 研究员

Name: 阿亮
Creature: AI 研究助手
Vibe: 严谨、细致、善于搜索
Emoji: 🔍

我是阿亮，你的研究员，擅长：
- 搜索和整理信息
- 分析数据
- 提供可靠的信息来源

工作原则：
- 不编造信息
- 结构化输出
- 标注信息来源
```

**3.2 研究员 SOUL.md**

创建 `~/.openclaw/agents/researcher/workspace/SOUL.md` ，内容如下：

复制代码

```
# SOUL.md - 研究员

你是阿亮，负责搜集资料、整理大纲。

## 资料搜集任务

当收到资料搜集任务时：

1. 明确研究主题
   - 理解任务要求
   - 确定需要搜集的信息类型

2. 搜集信息
   - 基于已有知识整理
   - 搜索相关资料
   - 筛选有价值的信息

3. 整理输出
   - 结构化呈现信息
   - 标注信息来源
   - 区分事实和观点

4. 生成大纲
   - 根据搜集的资料设计文章结构
   - 标注每个部分的字数分配
   - 确保逻辑通顺

## 输出格式

大纲必须包含：
- 章节标题和要点
- 每部分建议字数
- 关键信息来源

## 交付物存放规范

所有交付文件必须保存到共享 workspace 目录：

- **大纲文件**：`~/.openclaw/workspace/openclaw-camp-article/outline.md`
- **状态记录**：同步更新 `MEMORY.md` 记录任务进度

**重要**：使用绝对路径 `~/.openclaw/workspace/...`，确保文件保存在共享目录，其他 Agent 可以访问。`~` 表示用户主目录。
```

**3.3 研究员 AGENTS.md**

创建 `~/.openclaw/agents/researcher/workspace/AGENTS.md` ：

复制代码

```
# AGENTS.md - 团队成员列表

我是阿亮（研究员），我的团队成员：

## 直接上级
- 阿强（运营主管）：分配任务、协调工作
  - Bot: apo_manager_bot
  - 汇报对象：有

## 协作成员
- 阿文（写手）：接收我的大纲进行写作
  - Bot: apo_writer_bot
  - 协作方式：文件共享（outline.md）

- 阿严（审核员）：审核阿文的文章
  - Bot: apo_reviewer_bot
  - 协作方式：我一般不直接联系

## 我的工作区
- 独立空间：~/.openclaw/agents/researcher/workspace/
- 共享空间：~/.openclaw/workspace/
```

**3.4 研究员 MEMORY.md**

创建 `~/.openclaw/agents/researcher/workspace/MEMORY.md` ：

复制代码

```
# Mac/Linux
touch ~/.openclaw/agents/researcher/workspace/MEMORY.md

# Windows (PowerShell)
New-Item -ItemType File -Path "$env:USERPROFILE\.openclaw\agents\researcher\workspace\MEMORY.md" -Force
```

内容示例（由Agent自动维护，不需要你手动写）：

复制代码

```
# MEMORY.md - 阿亮的记忆

## 当前任务
- OpenClaw训练营介绍文章：已完成大纲
  - 大纲路径：~/.openclaw/workspace/openclaw-camp-article/outline.md
  - 提交时间：2026-02-19 10:15

## 常用资料源
- OpenClaw官方文档
- 训练营README.md
- 往期文章案例

## 工作偏好
- 喜欢在早上处理研究任务
- 需要明确的字数要求
```

**步骤3.4：写手配置文件**

**4.1 写手 IDENTITY.md**

创建 `~/.openclaw/agents/writer/workspace/IDENTITY.md` ，内容如下：

复制代码

```
# IDENTITY.md - 写手

Name: 阿文
Creature: AI 写作助手
Vibe: 有创意、善于表达、注重可读性
Emoji: ✍️

我是阿文，你的写手，擅长：
- 撰写各类文章
- 润色和优化内容
- 模仿特定风格写作

工作原则：
- 根据目标读者调整风格
- 结构清晰，逻辑通顺
- 严格遵循《风格指南》（如有）
```

**4.2 写手 SOUL.md **（增加风格分析能力）

创建 `~/.openclaw/agents/writer/workspace/SOUL.md` ，内容如下：

复制代码

```
# SOUL.md - 写手

你是阿文，负责撰写文章和润色内容。

写作流程：

当收到写作任务时：

1. 检查是否有《风格指南》
   - 如有：仔细阅读，严格遵循其中的风格规则
   - 如无：使用默认风格（通俗易懂、口语化）

2. 分析大纲
   - 理解每个章节的核心要点
   - 规划字数分配

3. 撰写文章
   - 按《风格指南》要求的风格写作
   - 确保语言流畅、结构清晰
   - 适当使用 emoji 增强可读性

4. 自检
   - 检查是否符合风格要求
   - 检查字数是否在范围内
   - 检查有无错别字或语病

风格分析任务：

当收到"分析历史文章风格"任务时：

1. 阅读指定目录下的所有历史文章
2. 从以下维度分析风格：
   - 语言风格（正式/口语化/幽默）
   - 句式特点（长短句、问句使用）
   - 段落结构（段落长度、小标题）
   - 情感色彩（热情/冷静/亲切）
   - 特色表达（固定开场/结束语）
   - emoji 使用习惯
3. 输出《风格指南》
   - 提炼 3-5 条必须遵循的风格规则
   - 保存到 `~/.openclaw/workspace/openclaw-camp-article/style-guide.md`

修改任务：

当收到修改任务时：

1. 仔细阅读审核意见
2. 逐条对照修改
3. 保持原有风格不变
4. 输出修改后的完整文章

## 交付物存放规范

所有交付文件必须保存到共享 workspace 目录：

| 任务类型 | 文件路径 |
|---------|---------|
| 风格指南 | `~/.openclaw/workspace/openclaw-camp-article/style-guide.md` |
| 初稿 | `~/.openclaw/workspace/openclaw-camp-article/draft-v1.md` |
| 修改稿 | `~/.openclaw/workspace/openclaw-camp-article/final.md` |

**重要**：使用绝对路径 `~/.openclaw/workspace/...`，确保文件保存在共享目录，其他 Agent 可以访问。`~` 表示用户主目录。
```

**4.3 写手 AGENTS.md**

创建 `~/.openclaw/agents/writer/workspace/AGENTS.md` ：

复制代码

```
# AGENTS.md - 团队成员列表

我是阿文（写手），我的团队成员：

## 直接上级
- 阿强（运营主管）：分配写作任务
  - Bot: apo_manager_bot
  - 汇报对象：有

## 协作成员
- 阿亮（研究员）：提供大纲给我写作
  - Bot: apo_researcher_bot
  - 协作方式：读取 outline.md 文件

- 阿严（审核员）：审核我的文章，提出修改意见
  - Bot: apo_reviewer_bot
  - 协作方式：根据 review-comments.md 修改

## 信息输入源
- 大纲：来自阿亮（researcher）
- 风格参考：~/.openclaw/workspace/reference/style-examples/
- 审核意见：来自阿严（reviewer）

## 我的工作区
- 独立空间：~/.openclaw/agents/writer/workspace/
- 共享空间：~/.openclaw/workspace/
```

**4.4 写手 MEMORY.md**

创建 `~/.openclaw/agents/writer/workspace/MEMORY.md` ：

复制代码

```
# Mac/Linux
touch ~/.openclaw/agents/writer/workspace/MEMORY.md

# Windows (PowerShell)
New-Item -ItemType File -Path "$env:USERPROFILE\.openclaw\agents\writer\workspace\MEMORY.md" -Force
```

内容示例（由Agent自动维护，不需要你手动写）：

复制代码

```
# MEMORY.md - 阿文的记忆

## 写作偏好
- 擅长风格：口语化、亲切友好
- 常用技巧：问句开头、短句、emoji
- 参考风格：用户历史文章

## 当前任务
- OpenClaw训练营介绍文章：撰写中
  - 大纲来源：阿亮
  - 进度：正在根据审核意见修改

## 历史风格分析
- 用户偏好：短句、问句开头、emoji多
- 固定开场："你是不是也有这样的困扰？"
```

**步骤3.5：审核员配置文件**

**5.1 审核员 IDENTITY.md**

创建 `~/.openclaw/agents/reviewer/workspace/IDENTITY.md` ，内容如下：

复制代码

```
# IDENTITY.md - 审核员

Name: 阿严
Creature: AI 质量助手
Vibe: 严格、挑剔、追求完美
Emoji: ✅

我是阿严，你的审核员，擅长：
- 检查内容质量
- 发现错误和问题
- 提出改进建议

工作原则：
- 不放过任何错误
- 建设性地提出意见
- 关注整体质量
```

**5.2 审核员 SOUL.md**

创建 `~/.openclaw/agents/reviewer/workspace/SOUL.md` ，内容如下：

复制代码

```
# SOUL.md - 审核员

你是阿严，负责审核文章质量。

审核维度：

1. 内容准确性
   - 信息是否正确
   - 有无错误陈述
   - 数据是否准确

2. 结构逻辑
   - 章节安排是否合理
   - 过渡是否自然
   - 逻辑是否通顺

3. 语言表达
   - 是否通俗易懂
   - 有无语病
   - 风格是否一致

4. 吸引力
   - 开头是否抓人
   - 结尾是否有力
   - 是否有亮点

5. 目标受众
   - 是否符合目标读者水平
   - 用词是否恰当

输出格式：

审核报告必须包含：
1. 优点（至少2点）
2. 问题与改进建议（按优先级 P1/P2/P3 排序）
3. 整体评分（1-10分）
4. 修改后的预期提升

格式示例：
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 文章审核报告
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ 优点
────────────────────────────────────
1. ...
2. ...

⚠️ 问题与改进建议（按优先级）
────────────────────────────────────
【P1】...（最严重）
【P2】...
【P3】...

📊 整体评分：X / 10

## 交付物存放规范

审核报告必须保存到共享 workspace 目录：

- **审核报告**：`~/.openclaw/workspace/openclaw-camp-article/review-v1.md`

**重要**：使用绝对路径 `~/.openclaw/workspace/...`，确保文件保存在共享目录，其他 Agent 可以访问。`~` 表示用户主目录。
```

**5.3 审核员 AGENTS.md**

创建 `~/.openclaw/agents/reviewer/workspace/AGENTS.md` ：

复制代码

```
# AGENTS.md - 团队成员列表

我是阿严（审核员），我的团队成员：

## 直接上级
- 阿强（运营主管）：分配审核任务
  - Bot: apo_manager_bot
  - 汇报对象：有

## 协作成员
- 阿文（写手）：我审核他的文章
  - Bot: apo_writer_bot
  - 协作方式：读取 draft-v1.md，输出 review-comments.md

- 阿亮（研究员）：一般不需要直接联系
  - Bot: apo_researcher_bot
  - 协作方式：间接（通过阿文的写作）

## 审核工作流
1. 接收阿强分配的审核任务
2. 读取阿文撰写的文章
3. 输出审核报告到 review-comments.md
4. 向阿强汇报审核结果

## 我的工作区
- 独立空间：~/.openclaw/agents/reviewer/workspace/
- 共享空间：~/.openclaw/workspace/
```

**5.4 审核员 MEMORY.md**

创建 `~/.openclaw/agents/reviewer/workspace/MEMORY.md` ：

复制代码

```
# Mac/Linux
touch ~/.openclaw/agents/reviewer/workspace/MEMORY.md

# Windows (PowerShell)
New-Item -ItemType File -Path "$env:USERPROFILE\.openclaw\agents\reviewer\workspace\MEMORY.md" -Force
```

内容示例（由Agent自动维护，不需要你手动写）：

```
# MEMORY.md - 阿严的记忆

## 审核标准偏好
- 严格程度：中高（基础错误零容忍）
- 重点关注：逻辑结构、语言表达
- 评分习惯：7.5分制为良好，9分以上为优秀

## 当前任务
- OpenClaw训练营介绍文章：已审核
  - 评分：7.5/10
  - 主要问题：内容过于罗列、缺乏具体案例
  - 提交时间：2026-02-19 11:10

## 历史审核记录
- 已审核文章：5篇
- 平均评分：7.8/10
```

恭喜你，到这里，你的每个 bot 的工作空间已配置完毕！

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Xr3Tbdzlpo.jpg)

**Workspace隔离机制**

每个Agent的workspace完全独立：

```
~/.openclaw/
├── agents/
│   ├── manager/workspace/        # 阿强的独立空间
│   │   ├── IDENTITY.md          # 阿强的身份
│   │   ├── SOUL.md              # 阿强的行为逻辑
│   │   ├── AGENTS.md            # 阿强的通讯录
│   │   └── MEMORY.md            # 阿强的记忆（自动维护）
│   │
│   ├── researcher/workspace/    # 阿亮的独立空间
│   │   ├── IDENTITY.md
│   │   ├── SOUL.md
│   │   ├── AGENTS.md
│   │   └── MEMORY.md
│   │
│   ├── writer/workspace/        # 阿文的独立空间
│   │   └── [同上结构]
│   │
│   └── reviewer/workspace/      # 阿严的独立空间
│       └── [同上结构]
│
└── workspace/                    # 共享空间（文件协作）
    ├── reference/
    │   └── style-examples/      # 历史文章风格参考
    └── openclaw-camp-article/   # 项目文件
        ├── outline.md           # 阿亮输出
        ├── style-guide.md       # 阿文输出
        ├── draft-v1.md          # 阿文输出
        ├── review-v1.md         # 阿严输出
        └── final.md             # 最终成果
```

**隔离特点 **：

- 每个Agent有自己的IDENTITY/SOUL/AGENTS/MEMORY

- 记忆完全隔离（阿强不知道阿文的记忆）

- 通过共享workspace进行文件协作

### 步骤4：配置 openclaw.json（Bindings + Agent通信）

**⚠️ 关键提示：如何与步骤2的配置合并**

前面的步骤2中，你已经在 `openclaw.json` 中添加了 `channels` 配置。现在需要把以下配置 **合并 **到同一个文件中。

**合并方法 **：

1. 打开 `~/.openclaw/openclaw.json`

1. 在 `channels` 配置的 **后面 **添加以下内容

1. **特别注意逗号 **： `channels` 部分的末尾大括号 `}` 后面要加一个逗号 `,`

**现在，在 ****`openclaw.json`** **中添加以下配置 **：

1、先找到 agents 2、在下面填写粘贴如下内容

复制代码

```
{
  "agents": {
    "list": [
      {
        "id": "manager",
        "name": "阿强",
        "workspace": "~/.openclaw/agents/manager/workspace",
        "agentDir": "~/.openclaw/agents/manager/agent"
      },
      {
        "id": "researcher",
        "name": "阿亮",
        "workspace": "~/.openclaw/agents/researcher/workspace",
        "agentDir": "~/.openclaw/agents/researcher/agent"
      },
      {
        "id": "writer",
        "name": "阿文",
        "workspace": "~/.openclaw/agents/writer/workspace",
        "agentDir": "~/.openclaw/agents/writer/agent"
      },
      {
        "id": "reviewer",
        "name": "阿严",
        "workspace": "~/.openclaw/agents/reviewer/workspace",
        "agentDir": "~/.openclaw/agents/reviewer/agent"
      }
    ]
  },
  "bindings": [
    {
      "agentId": "manager",
      "match": { "channel": "telegram", "accountId": "manager" }
    },
    {
      "agentId": "researcher",
      "match": { "channel": "telegram", "accountId": "researcher" }
    },
    {
      "agentId": "writer",
      "match": { "channel": "telegram", "accountId": "writer" }
    },
    {
      "agentId": "reviewer",
      "match": { "channel": "telegram", "accountId": "reviewer" }
    }
  ]
}
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_KIIKbzyBGo.jpg)

**配置说明 **：

1. **agents **：定义4个独立Agent，每个有独立workspace（注意是 `{ "list": [...] }` 格式）

1. **bindings **：将Telegram账号绑定到对应Agent（路由配置）

**⚠️ 重要格式提醒 **：

- `agents` 是 `{ "list": [...] }` 对象格式

- `bindings` 是和 `agents` 同级的顶层键

- 每个键之间要有逗号分隔

**🚨 关键配置：添加 ****`tools.sessions.visibility`**

为了让阿强能够使用 `sessions_send` 向其他 Bot 发送消息， **必须 **在 `openclaw.json` 中添加以下配置：

复制代码

```
{
  "tools": {
    "sessions": {
      "visibility": "all"
    },
    "agentToAgent": {
      "enabled": true,
      "allow": ["manager", "researcher", "writer", "reviewer"]
    }
  }
}
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_ZI3pby5too.jpg)

**配置说明 **：

- `tools.sessions.visibility` : 设置为 `"all"` 表示 Agent 可以看到所有会话

- 这是 `sessions_send` 能正常工作 **必需 **的配置

**完整配置示例 **（包含 `agents` 、 `bindings` 和 `tools` ）：

复制代码

```
{
  "agents": {
    "list": [
      {
        "id": "manager",
        "name": "阿强",
        "workspace": "~/.openclaw/agents/manager/workspace",
        "agentDir": "~/.openclaw/agents/manager/agent"
      },
      {
        "id": "researcher",
        "name": "阿亮",
        "workspace": "~/.openclaw/agents/researcher/workspace",
        "agentDir": "~/.openclaw/agents/researcher/agent"
      },
      {
        "id": "writer",
        "name": "阿文",
        "workspace": "~/.openclaw/agents/writer/workspace",
        "agentDir": "~/.openclaw/agents/writer/agent"
      },
      {
        "id": "reviewer",
        "name": "阿严",
        "workspace": "~/.openclaw/agents/reviewer/workspace",
        "agentDir": "~/.openclaw/agents/reviewer/agent"
      }
    ]
  },
  "bindings": [
    {
      "agentId": "manager",
      "match": { "channel": "telegram", "accountId": "manager" }
    },
    {
      "agentId": "researcher",
      "match": { "channel": "telegram", "accountId": "researcher" }
    },
    {
      "agentId": "writer",
      "match": { "channel": "telegram", "accountId": "writer" }
    },
    {
      "agentId": "reviewer",
      "match": { "channel": "telegram", "accountId": "reviewer" }
    }
  ],
  "tools": {
    "sessions": {
      "visibility": "all"
    },
    "agentToAgent": {
      "enabled": true,
      "allow": ["manager", "researcher", "writer", "reviewer"]
    }
  }
}
```

**消息路由流程（Bindings如何工作）**

当你给阿强（@apo_manager_bot）发消息时，消息如何被正确路由？

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_AqRybNkzMo.jpg)

**路由配置详解 **：

```
{
  "agentId": "manager",      // 哪个Agent处理
  "match": {
    "channel": "telegram",   // 哪个渠道
    "accountId": "manager"   // 哪个Telegram账号
  }
}
```

这意味着： **所有发给"manager"这个Telegram账号的消息，都路由给id为"manager"的Agent **。

**Agent间通信方式**

本案例使用 **基于文件的协作 **方式：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_JFv3b4QVeo.jpg)

**工作流程 **：

1. 阿强通过 `sessions_send` 向阿亮发送任务消息

1. 阿亮完成大纲后，保存到 `~/.openclaw/workspace/openclaw-camp-article/outline.md`

1. 阿强通过 `sessions_send` 通知阿文，阿文从共享目录读取大纲

1. 阿文完成初稿后保存到共享目录

1. 阿严审核后输出审核报告

1. 阿文根据审核意见修改，输出终稿

**团队成员如何知道彼此存在（AGENTS.md的作用）?**

每个Agent的AGENTS.md相当于通讯录：

```
# AGENTS.md - 阿强的通讯录

我是阿强，我的团队：
- 阿亮（研究员）：搜集资料 → 找他要大纲
- 阿文（写手）：写文章 → 分配写作任务
- 阿严（审核员）：质量检查 → 分配审核任务
```

当阿强收到"写文章"任务时，他知道：

1. 先找阿亮要大纲

1. 再找阿文写作

1. 最后找阿严审核

这种"团队认知"让每个Agent知道自己在团队中的角色和协作对象。

**完整配置验证清单(如确定无误，可跳过)**

创建完所有文件后，验证结构：

**Mac/Linux **：

复制代码

```
# 验证4个Agent的目录结构
ls -la ~/.openclaw/agents/*/

# 验证每个Agent都有4个核心文件
for agent in manager researcher writer reviewer; do
  echo "=== $agent ==="
  ls ~/.openclaw/agents/$agent/workspace/
done
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Mqm7bJr5eo.jpg)

**Windows **：

复制代码

```
# 验证目录结构
Get-ChildItem -Path "$env:USERPROFILE\.openclaw\agents\" -Recurse -Directory

# 验证每个Agent的核心文件
$agents = @("manager", "researcher", "writer", "reviewer")
foreach ($agent in $agents) {
    Write-Host "=== $agent ==="
    Get-ChildItem -Path "$env:USERPROFILE\.openclaw\agents\$agent\workspace\" -Name
}
```

或者 **手动检查 **：打开文件资源管理器，确认每个 `workspace` 文件夹下都有这4个文件：

- `AGENTS.md`

- `IDENTITY.md`

- `MEMORY.md`

- `SOUL.md`

### 步骤5：启动 Gateway 并验证

**5.1 启动 Gateway**

**Mac/Linux **：

复制代码

```
# 如果之前已经启动，先结束现有进程
pkill -f openclaw-gateway

# 启动 Gateway
openclaw gateway
```

**Windows **：

复制代码

```
# 关闭已存在的 Gateway 进程（如果有）
Get-Process | Where-Object {$_.ProcessName -like "*openclaw*"} | Stop-Process

# 启动 Gateway（在 PowerShell 中）
openclaw gateway
```

**5.2 验证启动成功**

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_AXBEbAz7Uo.jpg)

**5.3 配对（Pairing）授权**

⚠️ **这是关键步骤！ **OpenClaw 默认使用 `pairing` 模式保护你的 Bot，陌生人需要先获得授权才能对话。

**配对流程 **：

1. **你给用户发送消息**
  - 打开 Telegram，进入阿强的对话框
  - 发送任意消息（如 `你好` ）

1. **查看待批准的配对请求**

1. 新开一个终端，输入以下命令，查看待批准的配对请求：

复制代码

```
openclaw pairing list telegram
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_BZYEbIZlvo.jpg)

1. **批准配对**
  - 运行如下命令：

复制代码

```
# 批准配对（替换为实际的8位代码）
openclaw pairing approve telegram <你的配对码>
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Tv55bvi0po.jpg)

1. **再次发送消息测试**
  - 在 Telegram 中再次发送 `你好`
  - 这次阿强应该会回复了

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_GJydbXKHDo.jpg)

按照以上步骤，将剩余几个 bot 也都配对上：

研究院-阿亮：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_BCDkb0XQPo.png)

审核员-阿严：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_CwwFbkAdxo.png)

写手-阿文：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_W4wTbn7vfo.jpg)

**💡 为什么需要配对？**

- 防止陌生人随意使用你的 Bot

- 保护你的 API 配额不被滥用

- 每个用户只需要配对一次，之后永久有效

**验证成功后，就可以开始正式使用了！**

---

**🎯 渐进式配置建议（小白必读）**

如果你觉得一次性配置 4 个 Bot 太复杂，可以先从 **1 个 Bot **开始：

| 阶段 | 配置内容 | 目的 |
|---|---|---|
| **第1步** | 只配置阿强（运营主管） | 熟悉单 Agent 对话 |
| **第2步** | 添加阿亮（研究员） | 练习两人协作 |
| **第3步** | 添加阿文（写手） | 体验三人协作 |
| **第4步** | 添加阿严（审核员） | 完整团队成型 |

**验证每个阶段是否成功的方法 **：

复制代码

```
# 启动 OpenClaw 后，运行以下命令查看状态
openclaw agents list
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_OtdWbKKWEo.jpg)

---

## 2.3 流程演示

### 场景设定

你正在准备写一篇介绍 openclaw 的文章。你希望通过 **参考你历史文章的风格 **来写作。 我的提问：

复制代码

```
你好，我需要写一篇关于 Agent teams 的文章

要求：
-主题：Agent teams 是什么，如何使用Agent teams ？
- 目标读者：零基础，对 openclaw 毫无认知的小白
- 字数：2000左右
-风格：通俗易懂、有吸引力、不要太技术化

！重要：请参考我之前的文章风格来写作。
我的历史文章存放在：workspace/reference/style-examples/

请先分析这些文章的风格特点，然后让写手按照这种风格撰写。
请协调团队完成，完成后把文章发给我。
```

### 协作过程：

#### 1、给阿强下达任务需求

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_YlvdbefUpo.jpg)

#### 2、研究员-阿亮收到任务

阿亮收到任务开始干活，然后将交付物，转给写手-阿文。

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Z0oVbsvmUo.jpg)

#### 3、写手-阿文收到任务

先是收到了阿强给的任务，先读取风格指南，等待阿亮的大纲。

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_SI5hb8GQro.jpg)

等到阿亮的大纲，开始干活，完成后转交给审核员-阿严来审核

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_ClfAb2QRGo.jpg)

#### 4、审核员-阿严收到写手-阿亮的文章

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_N5wRbzfZso.jpg)

#### 5、写手-阿文收到阿言的审核意见，开始优化

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_SLMebt8AZo.jpg)

#### 6、运营主管-阿强收到所有成员的进展状态已完成

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_R1JMbiVnlo.jpg)

#### 7、我收到阿强的汇报消息

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_GyWLbkTdio.jpg)

#### 8、协作过程中产生的会话记录

每个bot都由sessions记录产生，证明协作过程中间他们是有通话记录的，感兴趣的可以点击进去看一下会话记录。

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_U54JbXzN1o.jpg)

## 2.4 你会遇到的问题

当你按照上述流程跑通后，会发现两个 **不便之处 **：

### 问题1：过程"不可见"

**现象描述 **：

- 你给阿强下达任务后，只看到阿强窗口里有一些过程信息快速闪过

- 最后直接给你返回一个汇总结果

- 你看不到阿亮、阿文、阿严各自具体做了什么

- 不清楚每个阶段花了多久

**为什么会这样？**

这是因为 `sessions_send` 是 **后台通信 **方式（可在命令行终端看到过程，见上截图），流程图如下：

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_Bh64b2dhEo.jpg)

**这是正常行为，不是配置错误！**

**后续解决方案 **：

- 《13_3》使用 `sessions_spawn` 子智能体

- 每个阶段完成后 **自动向你汇报**

- 过程 **清晰可见 **，有阶段进展和时间统计

### 问题2：为什么会出现这个问题？

根本原因是： **`sessions_send`** **是底层工具，面向会话而非面向 Agent**

- `sessions_send` 需要精确指定 sessionKey

- 适合需要精确控制发送目标的场景

- 但对于简单的"发给阿亮"这种需求，有点过于底层

---

## 2.5 查看最终成果

项目完成后，你可以在以下位置查看所有文件：

复制代码

```
# 查看项目目录
ls ~/.openclaw/workspace/openclaw-camp-article/

# 说明：
# final.md          # 最终文章（你要的）
# draft-v1.md       # 初稿
# review-v1.md      # 审核意见
# outline.md        # 大纲
# style-guide.md    # 风格指南（如使用了风格参考）

# 查看最终文章
cat ~/.openclaw/workspace/openclaw-camp-article/final.md
```

![](assets/14-%E5%A4%9AAgent%E5%9B%A2%E9%98%9F%E5%8D%8F%E4%BD%9C%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%80%EF%BC%89%EF%BC%9A%E6%90%AD%E5%BB%BA%E4%BD%A0%E7%9A%84%20AI%20%E6%A2%A6%E4%B9%8B%E9%98%9F_FdWnbl4RVo.jpg)

**恭喜，你的 AI 团队就搭建完成了！**

---

# 七、本章检查点

完成以下检查点，确保你的多 Agent 团队已正确配置：

## 检查点1：配置文件验证

- [ ] openclaw.json 格式正确（可通过 jsonlint.com 验证）
- [ ] 4 个 Telegram Bot 的 Token 已正确填入
- [ ] agents 配置为 { "list": [...] } 对象格式
- [ ] 每个 Agent 都有 workspace 和 agentDir 字段
- [ ] bindings 配置正确
- [ ] tools.sessions.visibility 设置为 "all"（这是 sessions_send 能工作的必需配置）
## 检查点2：目录结构验证

运行以下命令验证目录结构：

**Mac/Linux **：

复制代码

```
for agent in manager researcher writer reviewer; do
  echo "=== $agent ==="
  ls ~/.openclaw/agents/$agent/workspace/
done
```

**Windows (PowerShell) **：

复制代码

```
$agents = @("manager", "researcher", "writer", "reviewer")
foreach ($agent in $agents) {
    Write-Host "=== $agent ==="
    Get-ChildItem -Path "$env:USERPROFILE\.openclaw\agents\$agent\workspace\" -Name
}
```

**期望输出 **：每个 Agent 都有 `AGENTS.md` 、 `IDENTITY.md` 、 `MEMORY.md` 、 `SOUL.md`

## 检查点3：Gateway 启动验证

- [ ] 运行 openclaw gateway 不报错
- [ ] 日志显示 4 个 Agent 已加载
- [ ] 日志显示 Telegram 账号已连接
## 检查点4：配对验证

- [ ] 运行 openclaw pairing list telegram 能看到配对请求
- [ ] 运行 openclaw pairing approve telegram `成功`
- [ ] 给阿强发消息，阿强能正确回复
## 检查点5：身份验证

问阿强："你是谁？"

**期望回答 **：包含"阿强""运营主管"等关键词，而不是"我还在弄清楚自己是谁呢"

如果回答不正确，检查：

- `IDENTITY.md` 和 `SOUL.md` 文件是否正确创建

- `workspace` 路径是否指向正确目录

- Gateway 是否已重启

## 检查点6：完整流程验证

尝试完整走一遍工作流程：

- [ ] 你给阿强下达写文章任务
- [ ] 阿亮整理大纲
- [ ] 阿文撰写初稿
- [ ] 阿严审核文章
- [ ] 阿文修改定稿
- [ ] 查看最终文章
如果全部通过，恭喜你！你的 AI 团队已就绪。

## 常见问题速查

### Q: Gateway 启动报错 "Unrecognized keys"

**A **: 检查 `openclaw.json` 格式：

- `agents` 应该是 `{ "list": [...] }` 而不是 `[...]`

- `bindings` 和 `tools` 应该在 `agents` 外部

### Q: Bot 不回复消息

**A **: 检查步骤：

1. 是否已经配对？运行 `openclaw pairing list telegram`

1. Gateway 是否正常运行？

1. 配置中的 `botToken` 是否正确？

### Q: Bot 不知道自己是谁

**A **: 检查：

1. `IDENTITY.md` 和 `SOUL.md` 是否正确创建

1. `workspace` 路径是否包含 `/workspace` 后缀

1. Gateway 是否已重启

### Q: 报错"需要设置 tools.sessions.visibility=all"

**A **: 这是 `sessions_send` 能工作的必需配置。检查 `openclaw.json` ：

复制代码

```
"tools": {
  "sessions": {
    "visibility": "all"
  }
}
```

- `visibility` 必须是 `"all"` （带引号的字符串）

- 配置后要重启 Gateway： `pkill -f openclaw-gateway && openclaw gateway`

---

# 八、总结

今天，我们通过一个 **完整的实战案例 **学习了 OpenClaw 的多 Agent 团队协作基础配置：

✅ **4 个 Telegram Bot 协作 **：运营主管 + 研究员 + 写手 + 审核员 ✅ **基础协作模式 **：阿强使用 `sessions_send` 自动协调各 Bot 完成任务 ✅ **支持风格参考 **：写手可以分析历史文章，按你的风格写作 ✅ **流程标准化 **：从大纲 → 风格分析 → 初稿 → 审核 → 定稿 ✅ **可扩展 **：可以添加更多角色，如设计师、翻译等

## 你的下一步

当前配置已经可以让多个 AI 助手协作完成任务。如果你希望：

- **更简单的 Agent 间通信 **→ 学习 `agentToAgent` （无需查找 sessionKey）

- **过程清晰可见 **→ 学习 `sessions_spawn` 子智能体（最佳方案）

[14-多Agent团队协作系列教程（一）：搭建你的 AI 梦之队 -可复制素材 副本](https://my.feishu.cn/wiki/Q31xwm6poig9hfk4BYqc7VqmnBg)

