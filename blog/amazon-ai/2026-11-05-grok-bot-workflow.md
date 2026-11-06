---
title: "Grok+bot+workflow怎么实现? 思路"
category: "亚马逊AI"
tags: []
created_at: 2026-11-05T01:46:42.651Z
original_url: https://tianjikuajing.com/t/grok-bot-workflow/131
---

grok+bot+workflow怎么实现？ 实现 **Grok Bot 工作流（Workflow）**，核心逻辑是**<mark>通过创建专用的 AI 助手（Bot）、定义其职责与边界、连接外部工具和数据源，并将其沉淀为可复用的技能（Skills）或定时/事件驱动的例行任务（Routines）</mark>**。 根据 x.ai 官方与社区实践，实现 Grok Bot 工作流的完整步骤如下： \[[1](https://x.ai/news/workflows), [2](https://yindongliang.com/docs/AI/Agents/grok-bot-best-practices-and-use-cases/), [3](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]


**第一步：明确 Bot 定位与创建（设定 Roster 与描述）**

不要做一个“万能助手”（容易上下文混乱），应当针对**独立的目标、工具集、风格、周期或审批边界**来单独创建一个 Bot： \[[1](https://github.com/xianyu110/grokbot)\]

1. **登录与初始化**：前往 **[x.ai/bot](https://x.ai/bot)** 下载并登录客户端 或在 Grok Build 中操作。 \[[1](https://www.jxxy.net/ai/articles/grokbot-first-task-full-workflow/)\]
2. **编写 Profile（角色与边界）**：
   * **长期描述（Description）**：定义该 Bot 的角色、长期任务、数据源访问权限以及“四条硬限制”（如：不可擅自发送外部邮件、涉及金额需人工审批等）。
   * **单次对话**：用于下达具体的、临时的单次指令。 \[[1](https://www.techritual.com/2026/09/09/580865/), [2](https://www.jxxy.net/ai/articles/grokbot-first-task-full-workflow/), [3](https://github.com/xianyu110/grokbot)\]

---

**第二步：演示与教导工作流（Teach via Demonstration）**

Grok Bot 支持通过**录制/演示**来教它干活： \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]

1. **演示交互**：在 Bot 中进入演示模式，亲自操作浏览器交互、跨平台检索或工具调用（时长通常支持最多 10 分钟）。
2. **添加决策规则**：在演示步骤中加入条件判断、数据校验要求与审批节点。
3. **保存为草稿与技能**：将验证通过的方法保存为 **Skill（技能）**。技能会封装步骤、输入、执行序列、验证规则及输出格式。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]

---

**第三步：连接工具与多 Bot 协同（Workflows & Multi-Bot Chains）**

让 Grok Bot 打通你的日常软件与数据生态： \[[1](https://x.ai/bot/guides/grok-bot-101)\]

* **集成应用**：连接 Slack、Notion、GitHub、Wiki、Google Drive 或通过云端终端、文件系统和 API 接口。 \[[1](https://x.ai/bot/guides/grok-bot-101)\]
* **多 Bot 链式调用（Multi-Bot Chains）**：
  * 例如：*竞品情报 Bot* 抓取页面变化 → 传递给 *分析总结 Bot* 提炼简报 → 交付给 *X/社媒同步 Bot* 或对接本地的编码 Agent（如 Cursor / Grok CLI）。 \[[1](https://www.woshipm.com/ai/6474350.html), [2](https://x.ai/bot/guides/grok-bot-101), [3](https://yindongliang.com/docs/AI/Agents/grok-bot-best-practices-and-use-cases/)\]
* **团队共享工作流**：保存在 `.grok/workflows/`（团队共享）或 `~/.grok/workflows/`（全局）中，可变成带参数的自定义斜杠命令，例如内置的 `/deep-research`。 \[[1](https://x.ai/news/workflows)\]

---

**第四步：设置自动化与例行任务（Routines）**

把已经跑顺的单次任务变成**全自动的云端定时任务**： \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]

1. **配置 Routines（例行任务）**：在 Bot 详情页中开启 Routines。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]
2. **触发方式**：
   * **时间调度**：设定固定周期执行（如每天早晨抓取竞品、每周提取会议跟进事项）。
   * **外部触发**：支持 Slack 触发器或 Webhook（POST URL、Key、Header）。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]
3. **管理与审查**：支持在后台对 Routines 进行测试、暂停、编辑、删除。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]

---

**参考资源与深度实践**

* 深入了解团队分工与实操拆解，可以参考 **[Grok Bot 團隊Workflow：實際在跑的11 步拆解](https://www.techritual.com/2026/09/09/580865/)** 以及个人多项目管理经验 Grok Bot 实践指南。
* 针对跨境电商或特定业务流，可参考 用Grok Bot搭建5个跨境电商数字员工
实现 **Grok Bot 工作流（Workflow）**，核心逻辑是**<mark>通过创建专用的 AI 助手（Bot）、定义其职责与边界、连接外部工具和数据源，并将其沉淀为可复用的技能（Skills）或定时/事件驱动的例行任务（Routines）</mark>**。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]

根据 x.ai 官方与社区实践，实现 Grok Bot 工作流的完整步骤如下： \[[1](https://x.ai/news/workflows), [2](https://yindongliang.com/docs/AI/Agents/grok-bot-best-practices-and-use-cases/), [3](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]

---

**第一步：明确 Bot 定位与创建（设定 Roster 与描述）**

不要做一个“万能助手”（容易上下文混乱），应当针对**独立的目标、工具集、风格、周期或审批边界**来单独创建一个 Bot： \[[1](https://github.com/xianyu110/grokbot)\]

1. **登录与初始化**：前往 **[x.ai/bot](https://x.ai/bot)** 下载并登录客户端 或在 Grok Build 中操作。 \[[1](https://www.jxxy.net/ai/articles/grokbot-first-task-full-workflow/)\]
2. **编写 Profile（角色与边界）**：
   * **长期描述（Description）**：定义该 Bot 的角色、长期任务、数据源访问权限以及“四条硬限制”（如：不可擅自发送外部邮件、涉及金额需人工审批等）。
   * **单次对话**：用于下达具体的、临时的单次指令。 \[[1](https://www.techritual.com/2026/09/09/580865/), [2](https://www.jxxy.net/ai/articles/grokbot-first-task-full-workflow/), [3](https://github.com/xianyu110/grokbot)\]

---

**第二步：演示与教导工作流（Teach via Demonstration）**

Grok Bot 支持通过**录制/演示**来教它干活： \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]

1. **演示交互**：在 Bot 中进入演示模式，亲自操作浏览器交互、跨平台检索或工具调用（时长通常支持最多 10 分钟）。
2. **添加决策规则**：在演示步骤中加入条件判断、数据校验要求与审批节点。
3. **保存为草稿与技能**：将验证通过的方法保存为 **Skill（技能）**。技能会封装步骤、输入、执行序列、验证规则及输出格式。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]

---

**第三步：连接工具与多 Bot 协同（Workflows & Multi-Bot Chains）**

让 Grok Bot 打通你的日常软件与数据生态： \[[1](https://x.ai/bot/guides/grok-bot-101)\]

* **集成应用**：连接 Slack、Notion、GitHub、Wiki、Google Drive 或通过云端终端、文件系统和 API 接口。 \[[1](https://x.ai/bot/guides/grok-bot-101)\]
* **多 Bot 链式调用（Multi-Bot Chains）**：
  * 例如：*竞品情报 Bot* 抓取页面变化 → 传递给 *分析总结 Bot* 提炼简报 → 交付给 *X/社媒同步 Bot* 或对接本地的编码 Agent（如 Cursor / Grok CLI）。 \[[1](https://www.woshipm.com/ai/6474350.html), [2](https://x.ai/bot/guides/grok-bot-101), [3](https://yindongliang.com/docs/AI/Agents/grok-bot-best-practices-and-use-cases/)\]
* **团队共享工作流**：保存在 `.grok/workflows/`（团队共享）或 `~/.grok/workflows/`（全局）中，可变成带参数的自定义斜杠命令，例如内置的 `/deep-research`。 \[[1](https://x.ai/news/workflows)\]

---

**第四步：设置自动化与例行任务（Routines）**

把已经跑顺的单次任务变成**全自动的云端定时任务**： \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]

1. **配置 Routines（例行任务）**：在 Bot 详情页中开启 Routines。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]
2. **触发方式**：
   * **时间调度**：设定固定周期执行（如每天早晨抓取竞品、每周提取会议跟进事项）。
   * **外部触发**：支持 Slack 触发器或 Webhook（POST URL、Key、Header）。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]
3. **管理与审查**：支持在后台对 Routines 进行测试、暂停、编辑、删除。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations)\]

---
，核心逻辑是**<mark>通过创建专用的 AI 助手（Bot）、定义其职责与边界、连接外部工具和数据源，并将其沉淀为可复用的技能（Skills）或定时/事件驱动的例行任务（Routines）</mark>**。 \[[1](https://docs.x.ai/grok-bot/skills-routines-and-automations), [2](https://www.99aicreator.com/blog/grok-bot-tutorial-work-use-cases)\]
**参考资源与深度实践**https://docs.x.ai/grok-bot/skills-routines-and-automations

* 深入了解团队分工与实操拆解，可以参考 **[Grok Bot 團隊Workflow：實際在跑的11 步拆解](https://www.techritual.com/2026/09/09/580865/)** 以及个人多项目管理经验 Grok Bot 实践指南。
* 针对跨境电商或特定业务流，可参考 用Grok Bot搭建5个跨境电商数字员工。 \[[1](https://www.woshipm.com/ai/6474350.html), [2](https://www.techritual.com/2026/09/09/580865/), [3](https://yindongliang.com/docs/AI/Agents/grok-bot-best-practices-and-use-cases/)\]

如果你想搭建具体场景的工作流，可以告诉我：

* 你希望它**自动处理什么任务**（例如：竞品监控、周报汇总、多平台发帖、代码审查等）？
* 需要**连接哪些外部工具**（如 Notion、Slack、GitHub 等）？

我可以为你梳理定制的 Bot 职责与步骤拆解。 自动处理什么任务：竞品监控、周报汇总、多平台发帖、代码审查等 ，一个个实现
https://docs.x.ai/grok-bot/skills-routines-and-automations

skill 创建技巧和日常活动： [Grok Bot 合作](https://docs.x.ai/grok-bot/skills-routines-and-automations#work-with-grok-bot)

# [技能和日常活动](https://docs.x.ai/grok-bot/skills-routines-and-automations#skills-and-routines) 将成功的任务转化为可重复的流程。Grok Bot 使用两个基本构建模块：

* 技能是一套可重复使用的指令，用于指导如何完成某项任务。
* 例程告诉机器人何时运行工作流：按计划运行，或者在发生某些事情时**运行**，例如 Slack 消息、GitHub、Linear、Sentry 或 PagerDuty 事件、电子邮件或 webhook 调用。

先从一次性任务入手。确保其可靠性，将方法保存为技能，然后再将其自动化。
![image|256x488](upload://x4tI5sniT7cgEdj0HTl6lO740ib.png)
保存skill技巧：
## **[保存技能](https://docs.x.ai/grok-bot/skills-routines-and-automations#save-a-skill)**

技能包含步骤、决策规则、预期输出和安全边界。所有机器人均可使用技能，但机器人可能需要相关的应用程序或登录才能使用。

问：

> *将我们刚才使用的流程保存为一个名为“每周账户健康状况”的技能。包括源系统、风险定义、输出格式，以及客户联系始终需要获得批准的规则。*

一项有用的技能包括：

1. 何时使用它
2. 所需输入和访问权限有哪些
3. 工作顺序 是什么
4. 如何验证结果
5. 需要归还什么
6. 哪些需要审批
7. 输出格式 是什么
8. 报错了怎么办
9. 人工检查
10. 结果
使用侧边栏中的“**连接应用”功能**，即可发现并安装受支持的应用和已打包的技能。要使用某个技能，请通过名称向机器人发出请求；此功能适用`@`于机器人、群组、例程和应用。

私有技能是所有机器人共享的一个技能库。如果机器人找不到某个私有技能，请打开侧边栏中的“**连接应用”**，选择标题旁边的已连接数量，然后在“**私有技能**”下为当前机器人启用该技能。

### **[与你的团队分享一项技能](https://docs.x.ai/grok-bot/skills-routines-and-automations#share-a-skill-with-your-team)**

如果您属于某个团队，您可以发布私有技能，以便您的队友可以使用。在桌面端，打开“**连接应用”**，选择标题旁边的连接数，然后打开该技能。在其标题栏中选择“**发布”**。如果您属于多个团队，请在“**发布到**”下选择相应的团队。

技能发布前需要添加描述，因为队友和他们的机器人会根据描述来判断技能的适用场景。发布后，按钮会显示“**已发布”**。其菜单提供“**同步”**（可将后续编辑同步到团队副本）、**“复制链接**”和“**取消发布”选项**。

如果发布被拒绝，消息会说明原因：您需要先加入团队，或者您的团队管理员已关闭成员的发布功能，在这种情况下，请联系管理员发布该技能。应用自带的技能或使用机器人模板创建的技能无法发布。

## **[通过演示教授工作流程](https://docs.x.ai/grok-bot/skills-routines-and-automations#teach-a-workflow-by-demonstration)**

当“**教授任务**”功能可用时，您可以演示浏览器工作流程，而无需描述每个步骤。

1. 打开一对一机器人对话及其电脑视图。
2. 选择“**教授一项任务”**。
3. 描述一下你即将展示的结果。
4. 执行一次该工作流程。
5. 停止录制并查看机器人创建的技能。
6. 先用安全的例子进行测试，然后再安排实施。

教学演示会记录最多十分钟的可见计算机交互过程，但不会录制麦克风音频。演示过程中请避免泄露机密信息；请使用安全的凭证交接流程。

所学技能只是一个草稿。需要添加决策规则、故障处理机制和审批范围，这些内容可能无法从单个示例中清晰体现。

演示教学功能可以逐步启用。如果控件不可见，请让机器人根据书面说明和已完成的任务创建技能。

## **[养成习惯](https://docs.x.ai/grok-bot/skills-routines-and-automations#create-a-routine)**

询问应该负责这项重复性任务的机器人：

> *每个工作日上午 8:00，对当前账户列表运行“每日客户风险”技能。在此对话中发布关联的监控列表。请勿联系客户。如果源数据不可用，请报告故障，而不是使用旧数据。*

确认：

* 拥有机器人
* 日程安排和时区
* 输入源
* 预期结果
* 审批边界
* 当资源缺失时应该怎么办？

机器人创建例程，该例程会出现在机器人的例程列表中。例程会在您的笔记本电脑合上时在云端运行。

在手机上，您还可以打开机器人的个人资料，然后点击“**例程**”下的 **“添加例程**”。Grok Bot 会开始发送一条以“设置例程”开头的消息；请完成这句话并发送。

### **[日程安排和时区](https://docs.x.ai/grok-bot/skills-routines-and-automations#schedules-and-time-zones)**

日程安排使用“**设置”中“机器人**”下的“时区”选项中 的时区设置。**自动检测功能**会跟随这台电脑。如果需要根据不同的时区（例如工作所在办公室的时区）来设置日程安排，请选择一个时区。

用简单的语言描述日程安排，例如“每个工作日早上 8:00”或“每隔 2 小时”。然后打开该日程，查看“**何时运行**” ，即可看到已保存的文字日程安排。如果与你的预期不符，请选择“**编辑**”并告诉机器人需要修改的地方。

新的例程会等待下一个预定时间运行；它不会在创建时立即运行。如果您在 8:05 设置了“每天上午 8:00”，则第一次运行将在明天上午 8:00 进行。要立即尝试，请使用“**测试”功能**。

## **[由事件触发的工作](https://docs.x.ai/grok-bot/skills-routines-and-automations#trigger-work-from-an-event)**

例程可以由特定事件触发，而非按计划启动：例如 Slack 消息、GitHub、Linear、Sentry 或 PagerDuty 事件、发送到机器人邮箱 **[地址的](https://docs.x.ai/grok-bot/computer-and-apps#give-your-bots-an-email-address)**电子邮件，或 Webhook 调用。Cursor 账户集成会启动这些例程；它们独立于 Slack 或 GitHub 应用，可能需要单独的连接。您可以向机器人询问所需的触发条件；例程的“**运行时间**”会以文字形式显示，例如“当 Linear 问题创建时”。只有新发生的事件才会触发例程：触发条件出现之前的事件不会启动例程。

制定明确的匹配规则和清晰的响应：

> *当消息中`#customer-escalations`包含支持工单链接和“需要重现”字样时，请打开工单，在测试环境中重现问题，并将重现步骤文件包发布到此对话中。未经批准，切勿在 Slack 上发布任何内容。*

避免使用“每条新消息”之类的宽泛受众群体。它们会造成噪音，消耗资源，并增加对无关信息采取行动的可能性。

### **[Slack触发器](https://docs.x.ai/grok-bot/skills-routines-and-automations#slack-triggers)**

Slack 触发器是例程的一部分，而非 Slack 应用本身。应用允许机器人以您连接的 Slack 用户身份发布和阅读消息；触发器会在 Slack 中发生特定事件时启动该例程。在使用 Slack 之前，请确保已将拥有该机器人的 Cursor 帐户连接到 Slack。

例程可以在提及机器人、提及某个词或短语、对消息做出反应或任何消息时启动。它可以监控单个频道或整个 Slack 频道，“**运行时间**”会以词语（例如短语和频道）的形式显示触发条件。请尽量缩小频道和短语的范围：在繁忙频道中，如果触发条件是任何消息，则会频繁运行，并将资源浪费在不需要机器人处理的消息上。

### **[网络钩子](https://docs.x.ai/grok-bot/skills-routines-and-automations#webhooks)**

让机器人向例程添加 Webhook 触发器，然后在电脑上打开该例程。Webhook**部分**显示三个字段：

* **POST 请求的**URL 是该 URL。
* **密钥**是秘密。发送者将其包含在内`Authorization: Bearer <key>`。
* **header**是完整的头部信息，可以直接复制。

点击字段即可复制。向该 URL 发送一个带有请求头（可选）和 JSON 请求体的 HTTP POST 请求；机器人会收到包含例程指令的请求体。收到响应`200`表示 Grok 机器人已接受请求并开始运行，但并不表示机器人已完成运行；请查看机器人的聊天记录以获取结果。任何其他响应都表示运行未开始，因此请确认例程未暂停，并且请求使用了当前密钥。

## **[启用前请先进行测试](https://docs.x.ai/grok-bot/skills-routines-and-automations#test-before-enabling)**

如果例程显示“**测试”**，请在创建或编辑例程后使用它：在桌面上打开例程并选择“**测试”**。按钮会显示“**正在运行…”** 直到运行完成，结果将显示在机器人的聊天窗口中。如果测试无法启动，您会看到“**无法启动测试运行**”或解释原因的消息。

有些例程不会显示“**测试”字样**；它们仍然会按照预定的计划或触发器运行。对于这些例程，请在依赖其运行之前，先通过聊天窗口使用安全输入让机器人执行一次相同的操作，然后检查第一次预定的运行情况。

> *测试运行会执行实际操作。它可以浏览网站、修改文件并调用已连接的工具。请使用安全输入方式，并将写入操作置于审批之后。*

审查：

* 是否选择了当前输入
* 输出是否符合所需格式
* 是否每个操作都有来源或审计跟踪
* 它是否止步于预期的审批点
* 故障状态是否明确

## **[管理日常事务](https://docs.x.ai/grok-bot/skills-routines-and-automations#manage-routines)**

您可以通过聊天窗口询问机器人来创建和更改例程。要在电脑上查看例程，请点击聊天窗口顶部机器人的名称以打开其详细信息。例程位于“**详细信息**”选项卡中。每一行显示例程的名称以及运行状态（或**已暂停）**；使用行上的开关可以暂停或恢复例程。如果机器人没有例程，您会看到“**在聊天窗口中询问以设置例程”的提示**。

打开例程即可查看其**指令**（机器人每次运行的操作）和 **运行时间**（运行计划和触发事件）。由 Webhook 调用启动的例程还会显示**Webhook 信息**。底部的按钮包括：

* **暂停**或**恢复**
* 当例行程序提供**测试时**
* **编辑**，它会向机器人发送一条以“编辑您的例程：”开头的消息，其中“编辑您的例程：”加上例程名称；添加需要更改的内容并发送。
* **删除例程**（垃圾桶图标），它会要求您确认

您还可以右键单击例程来**暂停**或**恢复**它、**测试**它、 在聊天中**编辑**它或**删除**它。

在手机上，打开机器人的个人资料，找到“**例程”**。点击某个例程，即可查看 **“运行中”**、**“计划”**、**“下次运行”**、**“指令**”和“**运行历史记录**”。关闭“**运行中**”即可暂停该例程，滑动例程所在行即可将其删除。**“运行历史记录**”会显示每次最近的运行状态，包括“**运行中”**、**“成功**”和 **“失败”**，并会显示失败原因；**“尚未运行**”表示该例程尚未启动。

一个机器人最多可以拥有 50 个例程，应用程序会保留每个例程最近的 20 次运行记录。例程之间的运行间隔必须至少为五分钟。删除例程会停止其后续运行，且无法撤销。删除机器人也会删除该机器人拥有的所有例程。

### **[如果例程尚未运行](https://docs.x.ai/grok-bot/skills-routines-and-automations#if-a-routine-hasnt-run)**

* 该程序未**暂停**。手机上，**“活动”状态**已开启。
* **运行时间**显示您期望的计划或触发条件，以及正确的时区。
* 新的计划任务已准备就绪，等待下次执行。使用“**测试**”功能立即运行它。
* 对于 Slack 来说，消息是新的，在触发器关注的频道中，并且与触发器的短语匹配。
* 对于 webhook，调用返回`200`并使用了当前密钥。

### **[速率限制](https://docs.x.ai/grok-bot/skills-routines-and-automations#rate-limits)**

例程有每小时运行次数限制：所有例程加起来每小时最多运行 300 次，每个例程每小时最多运行 200 次。超过任一限制的运行都会失败`Automation run rate limit exceeded`。如果某个例程持续达到其限制，请让机器人缩小其触发范围或扩大其运行时间。

由于 Grok Bot 例程共享的运行次数限制，即使您自己的例程运行次数少于此限制，某些运行也可能失败并出现此错误。这是一个已知问题，目前正在修复中。出现此错误的运行不会自动重试，因此请手动重新运行该例程：使用“立即运行**测试**”命令，或者对于 Webhook，请再次发送调用。

### **[日常习惯和使用](https://docs.x.ai/grok-bot/skills-routines-and-automations#routines-and-usage)**

每次运行都会消耗流量，因此频繁运行的例程消耗的流量比不常运行的例程更多。例如，每小时一次的计划、较短的间隔或在繁忙频道触发的 Slack 事件，一天就可能消耗掉一周的流量。如果您的**每周流量限额**消耗速度超出预期，请暂停不需要的例程，然后让机器人放宽计划范围并缩小 Slack 触发范围，之后再考虑提高套餐或按需流量限额。从未运行的例程不会消耗流量；**测试**会消耗流量，因为它会执行实际工作。有关每周流量限额和按需流量月度限额，请参阅[“**套餐和计费”部分。**](https://cursor.com/help/grok-bot/plans)

为了控制无人值守使用，Grok Bot 会在长时间离开后询问是否要继续运行某些程序，如果没有收到回复，则会暂停这些程序。返回后，您可以查看已暂停的程序。

## **[建立信任的常规流程](https://docs.x.ai/grok-bot/skills-routines-and-automations#design-routines-for-trust)**

* 执行前自动进行准备工作。
* 先让机器人起草、协调或提出建议。
* 发送、购买、删除、发布或更改生产系统均需获得批准。
* 制定无数据和过期数据策略。
* 尽可能使重试过程幂等。
* 告诉机器人应该在哪里报告部分完成情况。
* 网站、应用程序或源代码格式更改后，请重新测试。

有关日程安排、Slack 触发器和 Webhook 的更多信息，请参阅 **[“例程”部分](https://cursor.com/help/grok-bot/routines)**。有关时区和使用控制，请参阅[“**设置和通知”部分**](https://docs.x.ai/grok-bot/settings-and-notifications)；有关自动化边界，请**[参阅“审批、安全和隐私”部分。](https://docs.x.ai/grok-bot/approvals-security-and-privacy)**