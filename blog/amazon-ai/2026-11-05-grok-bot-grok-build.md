---
title: "Grok Bot构建中的工作流 Grok Build 如何编写的和运行工作流：编排脚本，将任务分发到数百个并行代理，验证结果，并在一次后台运行中报告结果。"
category: "亚马逊AI"
tags: []
created_at: 2026-11-05T02:08:47.769Z
original_url: https://tianjikuajing.com/t/grok-bot-grok-build/133
---

![image|591x473](upload://qr6QMqXmAhNLNEenIS6yPNuu5cs.png)
![image|690x489](upload://wifPmQXYQykZkYyz0VrPapvSG8O.png)
![image|442x293](upload://qbCNQvNMb0wJI8BzVjRQLTmCsUM.png)
# **Grok 构建中的工作流**https://x.ai/news/workflows
![image|581x500](upload://44GzlN0XFHTZPX18bDokLQD8TfA.jpeg)
![image|564x500](upload://aGWoa1Miz0whH1WnP2Fh72d17Fu.jpeg)
![image|563x500](upload://rfINyltLs1l3v8TZyxYhJUnOAsb.jpeg)


Grok Build 现在可以编写和运行工作流：编排脚本，将任务分发到数百个并行代理，验证结果，并在一次后台运行中报告结果。

Grok Build 现在可以运行**工作流**：只需用简单的语言描述一个大型任务，Grok 就会进行规划，在后台将其分发到数百个并行代理上，并在所有任务完成后报告结果。您的会话始终保持空闲状态。
![image|567x500](upload://erQ3X8c91plOTBRf9ML7YZ4laiY.jpeg)
## **[何时使用工作流程](https://x.ai/news/workflows#when-to-use-a-workflow)**

工作流程是为处理复杂、多方面的任务而设计的，这些任务无法通过一次对话完成：例如，审查大型 PR 中的每个功能、对最近的 100 个问题进行分类、审核代码库以查找某一类错误。如果工作被拆分成许多独立的部分，最终需要生成一份清晰的报告，那么就应该申请工作流程。

## **[工作原理](https://x.ai/news/workflows#how-it-works)**

Grok 将任务规划成一个小型脚本：工作的各个阶段、每个阶段的执行人员以及最终结果的汇总方式。每个执行人员都从一个清晰、聚焦的背景出发，而且该计划可以构建单次迭代无法实现的检查机制，例如由独立的怀疑论者对每一项发现进行验证，然后再提交最终报告。

每次运行的预算为 128 个代理，大型任务最多可达 1024 个代理。运行过程中进度会实时保存，因此暂停和恢复不会重做已完成的工作。运行`/workflows`即可实时查看每个代理的阶段性任务进度和令牌计数。

## **[保存和重用工作流程](https://x.ai/news/workflows#saving-and-reusing-workflows)**

Grok 会根据您的请求创建工作流，在启动前进行冒烟测试，并在每次运行后进行改进；您无需自己编写脚本。如果某个工作流运行良好，请保留它：工作流`.grok/workflows/`会与您的团队共享，并且会`~/.grok/workflows/`随您一起运行。每个已保存的工作流都会成为一个带有参数的斜杠命令，因此，如果您保留了上面示例中的 PR 审查，则下一次审查只需执行 \`.\` 即可`/pr-review 5137`。

`/deep-research`内置功能：它将研究问题分发给平行调查员，核实每一项说法及其来源，并返回一份引用报告。

## **[今天就试试吧](https://x.ai/news/workflows#try-it-today)**

以下是一些可以尝试的例子：

* “使用工作流程来审查此 PR 中的每个功能”
* “请对最近 100 个 Linear 问题进行分类，并给我列出最重要的 10 项行动清单。”
* “审核每个路由处理程序，检查是否存在缺失的身份验证检查，并验证每一项发现。”
![image|690x249](upload://kqvq5HEBNdoMHjPxvkeDwa4u041.png)

irm https://x.ai/cli/install.ps1 | iex
![image|570x500](upload://uqjK9gci2HKngEDyUTPVCJcX79k.jpeg)

![image|567x500](upload://xNhZAGt24rIl1ca63IftZTJDpgw.jpeg)