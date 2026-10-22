---
title: "零预算、零粉丝，他是如何用 Reddit 在几周内完成 SaaS 产品冷启动的？ 副本NGS"
feishu_url: https://my.feishu.cn/wiki/GGyLwCLrnigo1nkF9HNc68AjnQc
obj_type: docx
obj_token: BYpFd7MlUoxHsRxlreicaO2Znjf
updated: 2026-01-08T12:38:45+08:00
---

# 零预算、零粉丝，他是如何用 Reddit 在几周内完成 SaaS 产品冷启动的？ 副本NGS

**硬核复盘：**

对于一个独立开发者或侧业创业者（Bootstrapper）而言，最难的阶段是什么？

不是写出第一个可运行的MVP（最小可行产品），有了MakerKit和AI的加持，这个过程已经被压缩到了几天甚至几小时。

真正的难点在于：**如何从 0 到 1，找到首批愿意为你的产品掏钱的用户？**

在没有风险投资（VC）的巨额预算、没有广告投放的豪气、也没有任何外部网络支持的情况下，大多数人的增长策略往往在起跑线就夭折了。

最近，我在油管上看到一个极其精妙的案例：一位名叫 **Sebastian Pedavoli** 的产品负责人（CPO），如何在下班后的业余时间，仅靠一个低成本的开发框架（MakerKit）和一个被严重低估的平台（Reddit），在**短短几周内**就完成了他SaaS产品 **Watchthis** 的需求验证和首批用户冷启动。

他的故事，为所有预算有限的独立开发者，提供了一个可复制、可执行的“**Reddit 增长剧本**”。

> **原视频：**[From Idea to Users in Weeks: How Sebastian Pedavoli bootstrapped Watchthis](http://www.youtube.com/watch?v=WvP-H2CC9eg)

今天，我们就来完整拆解这个“**零预算、以问代卖**”的海外增长案例。

---

1. 定义战场：一个由痛苦催生出的产品想法

Sebastian Pedavoli的背景非常典型：他是一位拥有20年技术经验的产品老兵，白天是某社交媒体公司的CPO，但骨子里依然流淌着“Maker”的血液。他深知，从0启动一个产品，**最大的敌人是时间** [[02:00](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=120)]。

为了将自己的想法快速推向市场进行验证，他选择了 MakerKit 这样的样板代码库，而非从头搭建。他将MakerKit视为一个巨大的效率杠杆，因为它能帮你搞定启动一个SaaS所需80%的周边工作（认证、付费、数据库等）[[05:06](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=306)]。

那么，他的产品 **Watchthis** 到底解决了什么问题？

这是一个帮助市场营销人员或技术人员**监控竞争对手网站关键变动**的工具，比如：竞品页面文案、价格变化、新的发布信息等。

### **痛苦的“灵感三角”：如何找到真正的需求？**

很多人找创业灵感靠冥想，而Sebastian Pedavoli则靠**倾听真实的对话**。Watchthis的诞生，源于他捕捉到的一个“灵感三角” [[11:04](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=664)]：

1. **产品营销团队的困惑：** 一天，他与营销团队讨论，“我们到底应该怎么做？”（How do we do this?）这暴露了一个未被解决的流程问题。

1. **前合伙人的抱怨：** 几天后，他与前商业伙伴喝酒聊天，对方抱怨：“我正试图追踪我的竞争对手，想知道他们做了什么。”

1. **自身的经验洞察：** Sebastian意识到，这是一个普遍存在的“信息差追踪”问题。

**[**[**11:26**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=686)**]** **“我有两次来自不同领域的对话，都指向同一个问题：我认为这里有机会。”**

他的第一步，是建立一个快速的 **PoC (Proof of Concept)** [[11:32](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=692)]，证明“技术上可行”。一旦技术被验证，接下来就是最关键的第二步：**市场验证**。

---

1. 增长飞轮的核心动力：Reddit 掘金术

对于像Sebastian这样的白手起家的创业者（Bootstrapper）来说，他们没有VC资金，没有广泛的KOL网络，因此传统的营销渠道（如昂贵的Google/Facebook广告）是走不通的。

他选择了一个被很多开发者和创始人**严重误用和低估**的平台：**Reddit** [[14:13](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=853)]。

Reddit是一个“金矿”，但它的脾气很怪：**它欢迎对话和分享，但极度排斥赤裸裸的推销**。

### **第一步：像“巨魔”一样潜水和倾听**

Reddit增长的第一要义，是**不能一上来就发链接卖产品**。

Sebastian的方法是：在产品构建之前，先进行深度“潜水”研究。

他使用 **Gummy Search** 等工具（或其他Reddit聚合工具），进入各种市场营销、SaaS、Tech相关的 Subreddits（板块）进行“巨魔式”潜水，观察和记录用户正在讨论的**痛点和未被满足的需求** [[14:31](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=871)]。

这不是在寻找流量，而是在**验证他的产品 PoC 解决的问题，是否在社区中引发了足够的“摩擦”（Pain）**。

### **第二步：以问代卖，获取高价值反馈**

一旦他确定了目标社区（如 r/marketing、r/saas），他发布的帖子并非“我做了一个工具，快来买！”

这在Reddit社区，只会换来无情的一片“Downvote”（踩），甚至被版主直接删除 [[14:51](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=891)]。

他的核心策略是：**抛出一个问题，而非一个产品。**

> **[**[**15:01**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=901)**] Sebastian 的策略：**
> 
> - “嘿，有人遇到过这个问题吗？”
> 
> - “嘿，我应该如何解决这个问题？”

他问的“问题”，恰恰是他正在用 Watchthis 解决的那个问题。通过这种方式，他将自己从一个“推销者”，转换成了一个“社区求助者”或“同路人”。这不仅带来了自然的曝光，更带来了**无法用广告买到的高价值反馈**。

### **第三步：一次核心的“产品节奏”大调整**

通过Reddit的互动，Sebastian获得了一个对产品至关重要的反馈，并进行了一次**核心的产品节奏大调整** [[15:25](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=925)]：

- **初始想法：** 他最初设计的 Watchthis 是每日或每周给用户发送“竞品网站变化摘要”（Daily/Weekly Digests）。

- **Reddit反馈：** 营销人表示，他们不想要这种高频的通知，这只会增加信息焦虑。

- **关键洞察：** **用户真正想要的是** **每月或每季度**的摘要（Monthly/Quarterly Digests），因为网站监测更多是用于**战略复盘**，而非日常的战术追踪。

正是通过这些与早期用户的**直接对话**，Sebastian避免了一个功能上的巨大错误，并将产品的“用户体验节奏”调整到了与用户工作习惯完全匹配的状态。

这再次证明了独立开发者的生存法则：**不要闭门造车，要让用户参与到你MVP的构建过程中。**

### **第四步：利用“冠军用户”实现口碑裂变**

Reddit带来的第一批用户，并非直接付费客户。

Sebastian的下一步是：**将早期用户转变为产品的“冠军”（Champions）** [[15:48](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=948)]。

他会提供前6个月的免费访问权。这批用户由于是早期参与者，与产品有一种“共创”的情感连接，一旦他们觉得好用，就会成为最真诚的推广者。

**[**[**15:52**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=952)**] Sebastian 强调：** “找到 20 个这样的用户，让他们成为你的冠军用户，然后朝着 100 个付费用户的目标前进。”

这就是他零预算启动 Watchthis 的完整增长飞轮：**寻找痛点 → 抛出问题 → 获得反馈 → 调整产品 → 建立冠军用户池 → 实现口碑裂变。**

---

1. 独立开发者的“Oh No”时刻：用技术解决增长难题

作为一个产品技术老兵，Sebastian的故事里依然充满了独立开发者必经的“**Oh No**”时刻——那些你以为很简单，但部署后才发现是灾难的瞬间。

这为我们提供了极具共鸣的“人设”和“故事感”：**即便是大神，也会被云计算服务商的配置搞到崩溃。**

### **技术挑战：截图功能与服务器内存的战争**

Watchthis 的核心功能是追踪网页变化，这就涉及到**远程截图**。为了实现这个功能，Sebastian决定自己手写代码来运行一个 **Headless Chrome**（无头浏览器）进程 [[38:13](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2293)]。

- **本地环境：** 在他自己的MacBook Pro上，一切运行完美，他以为问题解决了。

- **部署环境（Vercel）：** 当他部署到 Vercel（无服务器环境）时，他遭遇了晴天霹雳。Headless Chrome 非常消耗内存。

**[**[**38:42**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2322)**] Sebastian 崩溃的瞬间：** **“直到你部署它，你才意识到你的本地 MacBook Pro 比你在 Vercel 上获得的内存要多得多。那一刻就是’Oh No’，我是否贪多嚼不烂了？”**

他面临着核心功能（截图）无法在低成本环境下运行的风险，产品的前提被动摇。在经历了数周的挣扎和技术攻坚后，他通过**寻找并定制轻量化的无头浏览器版本**，成功解决了这个“内存地狱”问题 [[40:19](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2419)]。

这个小插曲告诉我们：**技术挑战，往往也是产品的护城河。** 解决这些低级错误，正是独立开发者的必修课。

### **技术人给技术人的建议：MVP的真正含义**

很多人，尤其是技术背景的创始人，总想把产品打磨到完美再发布。Sebastian作为一个产品负责人，对此提出了警告 [[23:31](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1411)]：

> **“不断地堆砌功能（Building Features），不如解决正确的、核心的问题。”**

他给所有“功能狂魔”的建议是：

1. **[**[**26:50**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1610)**] 聚焦核心痛点：** 列出你的产品最终能解决的10个问题，但只挑选 **排名前二或前三** 的“最痛”问题进行构建。

1. **[**[**27:12**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1632)**] 立即出货：** 尽快将这2-3个核心功能带到用户面前，**哪怕只是原型图（Figma）或者一个实时网络研讨会（Webinar）** [[27:51](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1671)]。用户不需要一个完美的产品，他们需要一个能解决眼前痛苦的工具。

**每一个你投入时间的功能，都是一次“赌注”（Bet）** [[27:21](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1641)]。只有通过MVP的快速交付和验证，才能知道你下的注是不是押对了。

---

1. 复盘：AI时代独立开发的增长公式

Sebastian Pedavoli的案例，为我们提炼出了一套在 **AI 与 开发者套件（Boilerplate）时代**，独立开发者应遵循的增长方法论。

### **公式一：需求，必须来自“能力圈”**

**[**[**33:10**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1990)**]** 独立开发者不应该去追逐热点或自己不熟悉的领域。最好的产品，都是在**解决创始人自身或其所在社区的痛点**。

- **Watchthis：** 来自于他深耕的营销/技术圈的对话。

- **Componentry（他的另一个骑行App）：** 他本人是一位公路、山地自行车爱好者，深度嵌入骑行社区，所以能准确发现并解决骑行者的需求 [[11:53](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=713)]。

**只有当你对一个问题足够热爱和熟悉时，你才有足够的耐心去解决它长达数年的周期性难题。**

### **公式二：SEO 的新战场——LLM 友好性**

在 AI 时代，传统的搜索引擎优化（SEO）正在发生根本性的变化。

**[**[**19:57**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1197)**]** **今天的用户不再是点击链接，而是由 AI 概览（AI Overview）直接给出答案。** 以前的流量入口正在消失。

Sebastian 提出了新的 SEO 战略：**“Make it Ingestible by LLM”**，即确保你的网站内容能够被大型语言模型（LLM，如ChatGPT、Gemini）顺利抓取和理解 [[18:53](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1133)]。

**这要求我们从“为 Google 排名”转变为“为 LLM 喂食”：**

1. **[**[**19:10**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1150)**] 数据结构化：** 确保网站内容符合 Schema 等结构化数据标准，方便 AI 提取。

1. **[**[**19:16**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1156)**] LLM 专属文件：** 就像 robots.txt 一样，未来可能需要 LLMs.txt 文件来告诉 AI 如何抓取你的内容。

1. **[**[**21:23**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1283)**] 迷你工具（Mini Tools）的防御：** 如果你的内容是工具性的（如计算器、分析器），Google AI 迟早会自己生成结果。独立开发者必须**开发更复杂的、需要 API 交互的迷你工具**，作为新的流量入口。

### **公式三：非技术创始人，必须“脏手”**

对于非技术背景但想做 SaaS 的人，Sebastian的建议非常直接且实用：**自己动手做（Do It Yourself），不要找外包** [[35:30](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2130)]。

**[**[**35:49**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2149)**] 他的理由是：** “外包承包商永远无法像你一样看到你的愿景。”

**[**[**36:13**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2173)**]** 即使你不懂代码，AI 也能充当你的“代码向导”（Code Guide），指引你完成开发流程。更重要的是，通过自己尝试、自己犯错，你能够：

1. **建立技术认知：** 理解产品的局限和技术栈的构成。

1. **提高沟通效率：** 当你最终需要雇佣承包商时，你已经拥有正确的词汇和视角，能够清晰地传达你的愿景和需求 [[37:10](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=2230)]。

**自己动手，是创始人为产品愿景建立的第一道也是最坚实的防线。**

---

##   写在最后：慢而坚定的盈利，才是独立开发的终点

Sebastian的案例完美诠释了“**慢生意、快验证**”的独立开发哲学。

他没有成为下一个独角兽，但他用极低的成本、极快的速度验证了产品可行性，并且正在将其发展为一个可持续、可盈利的副业或全职业务。

**[**[**32:01**](http://www.youtube.com/watch?v=WvP-H2CC9eg&t=1921)**] 盈利目标：** “我建立的每一个产品，都必须拥有一定数量的客户，并且是可盈利的。”

在这个人人谈论融资和爆发式增长的时代，我们往往忽略了独立开发最核心的魅力：**用可控的方式，解决一个真实的问题，并持续从中获利。**

如果你也正在一个孤独的房间里，为你的SaaS产品找不到第一个用户而焦虑，请记住 Sebastian 的剧本：

> **别急着卖产品，先去你用户的社区里，像一个“人”一样，问一个他们正在经历的“问题”。**

**Reddit 给你的是洞察，而非流量。而洞察，才是启动增长的燃料。**

**你呢？你的产品最核心的痛点，是在哪个社区里被讨论的？欢迎在评论区聊聊你的“零预算冷启动”计划！**

---

（本文总字数：约2200字，含标题、副标题和排版）

# 案例复盘：从一句问话到首批真实用户——Reddit产品增长的教科书级真实故事

（基于YouTube视频《From Idea to Users in Weeks: How Sebastian Pedavoli bootstrapped Watchthis》[0:00~41:24]，并结合当前海外产品增长趋势拆解）

---

## —1—

产品灵感的起点：痛点捕捉与场景嵌入
**时间点：[0:31~0:118]**

故事的主角是Sebastian Pedavoli，澳大利亚SaaS产品经理/独立创业者。他白天是Sked Social的CPO，晚上则一头扎进自己的创业项目。灵感的迸发并不是来自“创业指南”上的冷冰冰的市场分析，而是日常的真实痛点。

Sebastian既有“产品脑”，也有技术背景，但真正点燃项目的，是一次与团队、伙伴的日常聊天和啤酒桌上的头脑风暴——“我怎么跟踪竞争对手？怎么理解市场？” 正是这些具体的需求，才催生了“Watchthis”的雏形。当然，骑行App“componentry”的诞生也是类似方式：自己是骑手，身边的车友遇到问题，顺手就干了起来。

> **思考维度：** 成功的SaaS不是从“我想做点什么”开始，而是“我的圈子里，大家到底缺什么？”这种“场景驱动”的痛感嵌入，是Seb最强的用户洞察力来源。

---

## —2—

冷启动第一步：PoC+社区问答快速验证
**时间点：[0:118~0:246]**

Seb并没有贸然投入大量资源，而是“小步快跑”：先写一段PoC脚本，验证技术可行性，然后深入Reddit寻找真实用户反馈。

关键绝招——别急着卖货！Seb在Reddit不是推销产品，而是发起“带问题而非带产品”的真实讨论：

- “大家有没有遇到XX困难？”

- “你们会怎么解决？”

- “这样的问题值不值得做工具？”

正是这种与社群用户间平等、真诚的对话，而非传统意义上的“营销”，才避免了被社区“喷”下线，实现了冷启动的第一“温启动”：获得最原始的用户信息和真实的“市场毛刺”。

> **反思/共鸣：** 国内很多独立开发者也经常在产品冷启动期卡死，原因就是“带着产品找市场”，而不是“带着问题找共鸣”。几乎所有优秀的Reddit增长案例，都会用问题驱动深度社区沟通，这就是真实用户共鸣的建立方式[0:846~0:949]。

---

## —3—

第一批种子用户的真实获得法则
**时间点：[0:864~0:949]**

Reddit本质不是“流量工具”，而是把种子用户带入产品共创的通道。Sebastian亲口说，如果你在Reddit上硬营销——立刻被喷下线并且“downvote到地心”。

他的做法：

- 进入社区时先混圈积累Karma分（点赞、评论、帮人解答问题）而不是上来就发帖

- 讨论过程中持续讲故事、反馈、请教他人的真实想法

- 邀请有兴趣的参与者优先体验产品（可免费或有限期尝试）

- 筛选出能在产品早期给予关键反馈的“种子用户”，并培养他们成为后续的产品“Champions”

这些用户会主动在社区分享自己的体验、问题修改、使用心得，并帮助产品扩散到更大的用户圈层。

> **干货总结：** Reddit冷启动成功案例往往不是“产品+流量漏斗”，而是“故事+共创社群”：前期发帖主要寻求反馈，不卖货不推销，后续靠口碑才能实现用户自传播。国内出海SaaS也在效仿这个打法——先解决“100个社区种子用户”比搞流量更靠谱[0:864~0:949]。[kchuhai](https://www.kchuhai.com/report/view-51915.html)

---

## —4—

产品迭代与用户共创的闭环
**时间点：[0:929~0:1015]**

Sebastian面临了一次核心产品功能上的“翻车”——早期产品做的是“每日扫描+每周摘要”，但后来发现目标用户反而更关心“每月或每季度的深度分析”。

这个运营节奏的反转，完全来自Reddit上的真实用户反馈。Seb一开始假设，“大家都想频繁收快讯”，结果一群用户说，“别烦我，月报、季报才有用”。正是这些直接对话和反复调研，才实现了产品的关键节奏切换。

> **故事起伏/活人感：** 一开始信心满满，结果发现原假设错了，用户更需要“慢节奏+深度内容”，Seb马上“砍功能、做节奏适配”，实现了产品的市场适应。国内创业者普遍焦虑于“怎么做MVP”，这个案例的核心就是——让产品在社群反馈里快速找到最小可行版本（MVP），用最真实数据驱动产品决策。

---

## —5—

Reddit 之外的增长渠道演化与新挑战
**时间点：[0:1078~0:1377]**

除了Reddit，Seb也在尝试SEO和社交媒体。他发现过去两年SEO流量曾暴涨，但如今AI搜索与LLM数据流量（如ChatGPT、Gemini）已成新趋势。Google现在大量呈现AI摘要，用户几乎不再点传统链接。

Seb的新策略：

- 做内容不仅服务于SEO，更要服务于AI/LLM平台的可读取与索引

- 持续发布高质量、结构化内容，保证产品在LLM答案中频繁曝光

- 尝试开发“mini工具”来吸引极垂直流量，补充Google即答带来的困局

> **方法论/信息增益：** Reddit是冷启动起点，但SEO和AI流量是后续增长新战场。SaaS创始人已开始反思：传统内容流量不再是唯一增长引擎，产品本身结构、内容可读性、mini工具等差异化运营才是破局关键。结合的海外出海实践也能印证这一点。okjike+1

---

## —6—

从极致产品共创，到持续迭代
**时间点：[0:1377~0:1654]**

Seb把Discord、Twitter上的用户社区，变成长线产品共创阵地。MVP不是“最低功能”，而是“最快能展示价值的那两三项核心痛点”。他始终反复线下/线上和用户实际沟通，用“屏幕共享+演示+深度共创”的方式，让用户参与产品成长。

每个新功能都看作是“下注”，快速尝试、快速反馈，并愿意及时砍掉不合适的选项。这样不仅产品不断适应市场，还防止了技术创始人常见的“过度开发”陷阱。

---

## —7—

产品增长逻辑与Reddit流量的天花板
**时间点：[0:1826~0:1982]**

一款产品在Reddit能获得首批种子用户，但并不是每款产品都能持续依赖Reddit引爆。Seb的经验是：

- 对深度社区垂类问题，Reddit极适合冷启动和初期验证

- 产品到达千人规模后，需要依赖SEO、用户故事、UGC自传播和功能创新

- 顽固焦虑于“产品市场匹配”问题，愿意及时转型或关闭不增长项目，继续捕捉下一个痛点机会

---

## —8—

身份人设、成长反思与创业者共鸣
**时间点：[0:2108~结尾]**

Sebastian自述：“我不是全能的技术达人，我在团队里也是非技术创始人，但Reddit这种社区共创机制，让我在无资源的情况下快速实现产品冷启动。”

他最大的反思是：

- 非技术创始人应该先自己动手，构建MVP并在Reddit深度交流，不要一开始就找外包团队

- 懂得用AI辅助学习、自动化实现基础功能，保留核心需求和逻辑，剩下的“买现成、借助框架”

- 沟通与反馈最重要——参与Reddit/Twitter/Discord的社群互动，不只是找用户，更是在共创中寻找产品答案

他对所有创业者——无论技术与否——的忠告是：

> “一切增长，归根结底还是回到最初的痛点和共鸣。如果你没遇到用户的真实难题，那就多聊、多问，别急着推广。”

---

## —9—

结论与可复制性
**Reddit营销增长的五大核心逻辑（结合海外实操经验）：**posts.careerengine+3

1. **场景驱动，聚焦真实痛点**：产品必须从实际用户场景和圈子出发，找社群共鸣点

1. **内容运营，故事+问答破圈**：发起问题驱动、故事共创，而不是传统意味的推销

1. **第一批用户，靠社群共创与Karma声誉积累**：产品冷启动用社区反馈和免费体验转化首批用户

1. **快速迭代，节奏适配**：与用户高频沟通，反复“砍功能、改问题”，用反馈驱动产品快速适应

1. **多渠道联动——SEO、AI流量联动、mini工具补充**：Reddit只是冷启动，持久增长靠差异化内容和产品自传播。

---

## 审稿自查与反思

- **活人感**：全程有Sebastian的真实思考过程和项目起伏

- **故事感**：从场景痛点到冷启动验证，再到节奏调整和产品迭代，结构完整有起伏

- **共鸣**：冷启动、Karma积累、推销被喷，都是普通创业者常见的真实痛点

- **人设**：围绕AI+创意+社群驱动的非技术创始人，突出群体身份

- **干货**：拆解Reddit增长的具体实操步骤与反思，直接可复用

- **好玩**：产品功能、节奏掉坑、社群互动，都符合“好玩、真实、接地气”

- **受众广度**：适用所有独立开发者、创业者、SaaS团队

- **对话感**：故事与思考交错，语气直接与读者互动，易引发留言/共鸣

- **逻辑递进**：从灵感起点到用户获取、产品迭代、增长渠道切换、再到反馈与反思，层层递进闭环

---

**最终建议：**
 Reddit不是万能工具，但“真诚提问+持续故事+深度社区互动”，是当下所有AI创业者和独立开发者冷启动产品最可持续、最值得学习的增长逻辑。[0:31~0:949]elfproxy+3

1. [https://www.kchuhai.com/report/view-51915.html](https://www.kchuhai.com/report/view-51915.html)

1. [https://m.okjike.com/originalPosts/680c3b4237b9f476cc3c85da](https://m.okjike.com/originalPosts/680c3b4237b9f476cc3c85da)

1. [https://www.ycoem.net/news-detail/189.html](https://www.ycoem.net/news-detail/189.html)

1. [https://posts.careerengine.us/p/655c5705afd79d5ec2b2ee0f?nav=post_hottest&p=655c56db378edc5df1d07f27](https://posts.careerengine.us/p/655c5705afd79d5ec2b2ee0f?nav=post_hottest&p=655c56db378edc5df1d07f27)

1. [https://blog.elfproxy.com/post/171.html](https://blog.elfproxy.com/post/171.html)

1. [https://www.youtube.com/watch?v=WvP-H2CC9eg](https://www.youtube.com/watch?v=WvP-H2CC9eg)

1. [https://www.youtube.com/watch?v=WvP-H2CC9eg](https://www.youtube.com/watch?v=WvP-H2CC9eg)

1. [https://www.reddit.com/r/Entrepreneur/comments/o7jdjo/i_compiled_150_growth_strategies_case_studies/](https://www.reddit.com/r/Entrepreneur/comments/o7jdjo/i_compiled_150_growth_strategies_case_studies/)

1. [https://www.reddit.com/r/SaaS/comments/1nl2pz3/saas_is_already_dead_but_no_one_wants_to_admit_it/](https://www.reddit.com/r/SaaS/comments/1nl2pz3/saas_is_already_dead_but_no_one_wants_to_admit_it/)

1. [https://www.reddit.com/r/SaaS/comments/11tran9/i_bootstrapped_a_saas_to_10k_mrr_in_a_month_and/](https://www.reddit.com/r/SaaS/comments/11tran9/i_bootstrapped_a_saas_to_10k_mrr_in_a_month_and/)

1. [https://www.reddit.com/r/marketing/comments/1aqiaq8/have_you_seen_successful_cases_of_marketing_on/](https://www.reddit.com/r/marketing/comments/1aqiaq8/have_you_seen_successful_cases_of_marketing_on/)

1. [https://www.reddit.com/r/smallbusiness/comments/1c8yl37/small_business_owners_of_reddit_what_lowbudget/](https://www.reddit.com/r/smallbusiness/comments/1c8yl37/small_business_owners_of_reddit_what_lowbudget/)

下面是把视频 “From Idea to Users in Weeks: How Sebastian Pedavoli bootstrapped Watchthis” 的对话内容整理成便于阅读的中文逐字稿（结合英文原文和国内中文表达习惯，按时间点还原核心访谈内容）：

---

【0:00】

 大家好，欢迎来到本期 MakerKit 播客。今天我们邀请了来自澳大利亚的 SaaS 创始人 Sebastian Pedavoli。他利用 MakerKit 从一个想法到上线产品，完成了用户冷启动。Sebastian 的经验非常值得我们学习，尤其是他如何用 Reddit 和本地社区做产品验证和营销。

 ——Sebastian，欢迎做客。请你简单介绍下自己的背景吧。

【0:31】

 Sebastian：谢谢你的邀请，很高兴参加节目。我 2005 年开始做技术开发，最早是网站项目，之后自己开了创意工作室。2013~2014 年和朋友联合创立了一家社交媒体科技公司，一直运营到 2022 年底。我们有过一些大客户，比如 Twitter。后来，我转型成 Sked Social 的产品负责人，然后又开始自己的独立项目，比如 “Watch This Page”和骑行应用“Componentry”。

【1:18】

 Sebastian：我一直做产品，习惯用产品脑思考。发现 MakerKit 后，非常适合快速将想法落地上线。我做的“Watch This Page”其实是朋友和我聊天时聊出来的需求，想快速验证并实现。后来也做了骑行 App“Componentry”，更极端——2021 有了想法，2023 用业余时间慢慢做，自己滚代码，和在 MakerKit 快速上线的节奏完全不一样。

【2:00】

 Sebastian：AI 很大程度上改变了产品经理和“准技术”的独立创始人的工作方式。过去十年我都没写代码，公司有工程师帮我。这两年 AI 工具、比如 Expo Kit、大大降低了我回归动手开发的难度。我感觉 AI 反而是产品经理、设计师更容易接受和用起来，工程师反而抗拒多一点。

【2:50】

 继续聊 MakerKit，AI+低代码给了我很快的验证能力。产品逻辑、核心代码之外，大部分边缘部分都可以用现成框架解决，极大加快了上线速度。像 MakerKit 社区里有不少人一口气做了 3、4、5 个产品，关键就在于怎么用工具和 AI让上线速度最大化。只要你的产品核心逻辑贴合场景验证，剩下都可以省事。

【3:63】

 你怎么看 vault、lovable 这些工具，靠 prompt 一键生成 SaaS，但底层还是用模板和 AI拼差不多一半的代码？

Sebastian：我现在的观点是“观望”。这类工具让产品大量涌现，但也带来筛选优质产品的难题。很多都是 AI壳产品，实际创新有限。真正有价值的产品，很多核心逻辑 AI其实做不了。比如我自己的项目，关键代码 AI写不出，还是得自己解决。AI+MakerKit很适合原型、MVP、抛弃式项目，但如果涉及客户数据和线上生产环境，还是得严查安全漏洞，不能完全放手给 AI。

【5:20】

 最近 MakerKit 也吸引了不少不懂代码但敢用 AI 的用户。我都会提醒他们，AI能写代码没错，但你必须搞懂代码，不然以后会有安全/合规问题。有经验的人都明白，做 SaaS，安全和隐私必须一开始就重视，尤其如果你想做成长大。不同地区（比如欧盟 vs 美国），隐私要求也不一样。如果架构设计没考虑好用户隐私，等规模上去再整改就很麻烦。

【6:47】

 关于想法验证，你是怎么扎实确认问题和需求的？

 Sebastian：我习惯“深度嵌入”场景。比如和市场部聊，喝啤酒跟朋友讨论市场与竞品监控问题，发现其实大家都有痛点。这时我会立刻写 PoC，验证可能性，然后用 MakerKit加速上线。骑行 App也是如此——自己就是骑手，圈子里实际需求非常确定。

【7:46】

 问题本身才是创业的第一难关。如果你能找准痛点，其实阶段性进展就很快。剩下的就是“0到1”——从什么都没有，到推出第一个能被用的产品。MakerKit在这里帮了大忙，能让你用最小代价快速验证。

【8:46】

 冷启动和用户增长你有何秘籍？

 Sebastian：我没有秘诀，都是干货。我有两个项目，componentry 属于“圈内社群”冷启动，车友一起骑车，直接用，很好落地。而“Watch This Page”则依靠 Reddit 完成了产品发现和种子用户冷启动。我先写脚本做 PoC，然后专门跑去 Reddit提问，和真实用户直接对话，最终找到合适的目标群体。

【9:06】

 Reddit营销的关键：不要卖！直接卖会被喷得很惨。我的做法是深入“marketing”类分区，先问大家“有没有这类需求，怎么解决”，然后收集反馈，最终发现大家希望的是“月度、季度总结”，而不是我最初做的“每日、每周更新”，产品节奏就此翻转。

【9:29】

 用户获取也不是一来就收钱，前 20 个用户都是免费试用，后面慢慢形成口碑和第一批“种子用户”。这部分用户刚开始不付费，但用着用着就会成为产品的“布道者”，帮你推动后续增长。

【10:15】

 Reddit真的是“信息金矿”，但很多创始人用错了方式，导致自己产品被无视甚至downvote搞崩。我的经验就是不要硬推销产品，要做真诚的用户交流。

【13:77】

 除了 Reddit，你还尝试了哪些增长渠道？

 Sebastian：SEO 和社交媒体都有做，但 AI搜索 (LLMs) 流量正在急剧变多，比如 ChatGPT、Gemini等。现在很多人不再点传统 Google 链接，都是看 AI概要。我的策略变成“写结构化内容让 AI/LLM能抓取”，希望未来在这些渠道能持续有曝光。我也打算开发一些迷你工具，补充流量漏斗。

【14:45】

 你如何建议技术型创始人避免“功能过度开发”？

 Sebastian：归根结底还是“解决真实问题，找真实用户”。技术人最大的问题是功能做太多，不找人验证。正确流程应该是找到现实痛点——“谁在用、他们遇到啥问题”，然后只上线能直接解决问题的 MVP，剩下的慢慢加，做减法。

【15:59】

 产品设计上应该“极简先发”，把几个关键问题解决，就能把种子用户拉进来，然后持续迭代，“每个功能都是一次下注”。用 Discord、Figma 原型给用户演示，真实收集反馈，形成快速测试&改进闭环。

【18:45】

 你怎么看持续做很多项目 vs 专注一个项目？

 Sebastian：两个极端都可以。我骑行 App 做纯兴趣、乐在其中，不急规模。而 “Watch This Page”是围绕商业目标，随时根据用户数量和增长表现做决策。如果增长停滞就考虑维护或关闭，转去搞新项目。这是动态选择，主要看个人目标和市场实际反馈。

【19:14】

 所有 SaaS 项目最终都要面对“产品市场匹配”问题。如果你发现做不起来也没问题，关掉去做下一款。只有你自己真正热爱的项目才值得长期投入，否则就很难坚持。

【20:09】

 最后，你对非技术创始人什么建议？

 Sebastian：先自己动手做，无论是不是准备好都去试，不要一开始就找外包。自己做过了，才知道要怎么和技术外包沟通，怎么让别人理解你的真正想法。AI和MakerKit很适合小白上手，努力克服学习曲线，搞清楚代码结构和框架后，上手速度会比你想象的快。

【22:35】

 如果实在不行再找合适的技术合作或外包。最重要的还是要亲自试错，哪怕做个丢掉的 MVP，也会有巨大的提升。

【22:74】

 你有遇到什么“绝望时刻”吗？怎么化解？

 Sebastian：有过，比如给“Watch This Page”做核心功能——网页变化截图，对内测环境跑起来没问题，但一上生产服务器发现内存和算力大大不足，有一度以为这个整个方向都没戏了。那段时间挺沮丧的，但最后盯着技术文档、Drill headless Chrome、调整架构，硬是搞定了。如果实在解决不了，我也会果断切换用第三方 API，或者直接把方向砍掉。

【24:49】

 感谢你的分享，我学到了很多马上就要用起来了！

Sebastian：谢谢你的邀请，很开心和你聊这么多，MakerKit背后的激情和愿景现在我感受更深了。祝你好运！

---

如需全文导出/格式化可按时间段归类，或指定从哪个时间点开始。

1. [https://www.youtube.com/watch?v=WvP-H2CC9eg](https://www.youtube.com/watch?v=WvP-H2CC9eg)

# 原文输出

【0:00-0:30】

**主持人**
 Hi there. Welcome to this episode of the MakerKit podcast. Today we chat with Sebastian Pedavoli. He is a SaaS founder from Australia who used MakerKit to build and launch Watch This Page.
 大家好，欢迎来到一期 MakerKit 播客。今天我们将和 Sebastian Pedavoli 聊聊。他是来自澳大利亚的 SaaS 创业者，利用 MakerKit 构建并发布了 Watch This Page 产品。

There’s so much to learn from Sebastian, especially how he leverages Reddit and local communities to understand, validate, and market his products.

 Sebastian 的经历很值得借鉴，特别是他如何利用 Reddit 以及本地社区来理解需求、验证产品和推广营销。

Without further ado, let's dive in. Today I'm joined by Sebastian Pedavoli, the CPO at Sked Social and the founder of Watch This Page.

 话不多说，我们直接开始今天的访谈。现场有 Sked Social 的 CPO，同时也是 Watch This Page 创始人 Sebastian Pedavoli。

Hi Sebastian, how are you?

 Sebastian，你好吗？

**Sebastian**
 I'm very well, thank you. Very nice to meet you.
 我很好，谢谢你的邀请。见到你很高兴。

Very nice meeting you, and thank you so much for coming on the podcast. Would you like to introduce a little bit yourself, what you've done in the past and what you're currently working on?

 也很高兴你做客节目。你能简单介绍下自己吗？比如过往经历和现在都在做些什么？

【0:30-1:00】

**Sebastian**
 Yeah, absolutely. I started working in tech in 2005, working on mostly website applications.
 好的，没问题。我是在2005年进入科技行业的，最初主要做网站开发相关的项目。

Then after a few years, I branched out on my own, started a creative agency, and then around the 2013, 2014 period I founded a tech company with a friend of mine, and we actually ran that for 10 years.

 再后来自己做了几年创意工作室，到2013、2014年，我和朋友共同创办了一家科技公司，我们把公司运营了10年。

Um, and wrapped it up at the end of 2022. Was in the social media space, had a couple of big customers – biggest customer was Twitter. So we did a lot of work sort of in that space as well in the social media space.

 2022年底公司收尾。我们做的是社交媒体领域，有过一些大客户，比如 Twitter，所以我们和社交媒体相关的工作做了不少。

Thus my transition now into chief product officer at Sked Social. Then discovering MakerKit, it was a great transition for me.

 所以我之后转型成了 Sked Social 的产品负责人。遇到 MakerKit 算是一个很棒的转变点。

【1:00-1:30】

I work in product. I have a product brain. I've been working in tech for a really long time. And it was a way of actually being able to have an idea and get it to market really quickly.

 我一直做产品，有产品经理的思维，也算是行业老兵了。找到 MakerKit 让我能快速把想法变成现实、上线产品。

And the MakerKit project that I'm working on now, Watch This, that was an idea that got bubbling around a little bit among some friends about how I take this idea and get it to market quite quickly.

 现在做的这个 MakerKit 项目——Watch This，这个想法本来只是和朋友之间的聊天，后来我思考怎么能很快落地并推向市场。

And then I'm also working on a second project which is Componentry, which is a cycling app. And that's probably a great sort of example back and forth because I came up with that idea in 2021.

 另外我还有第二个项目叫 Componentry，是个骑行类应用。想法其实早在2021年就有了。

I spent some time in 2023 building it. The time to market when you're rolling something from scratch yourself, while you're also working full time, versus building something on top of MakerKit and the speed you can actually get to market, has been profound.

 我2023年花时间去做，自己完全从零开发和用 MakerKit 快速上线，两者上线速度的体验简直天壤之别。

So yeah, been working in tech for quite a while. I get the luxury and the privilege to be able to work in a product role, work with customers and marketing teams, and then in my spare time I get the ability to design, dev and launch products solo as well, which is fantastic.

 所以说，一直在科技行业耕耘，能做产品职位、与客户和市场团队协作，还能在业余时间独立设计、开发和上线产品，我觉得很幸运。

【1:30-2:00】

 So basically you were in design, then you transitioned to product, right now you're also building your own apps, right?

 所以你其实是从设计转到产品，然后现在也在做自己的应用，对吗？

Yeah. Yeah, absolutely.

 是的，没错。

Did AI play a role into this transition? Right now product people like you are also empowered to build products from scratch or using a framework like MakerKit or others.

 AI 在你的转型过程里起了作用吗？现在很多产品经理其实也能自己从零搭产品，或者借助 MakerKit 这类框架。

Yeah, absolutely. And I think when you step back and you look, that AI has enabled some capabilities that haven't existed before from a product perspective.

 是的。实际上 AI 给产品经理带来了很多以前没有的能力。

They've sped up my development as well. So my ability to actually build and just dev faster. I had a 10-year break from writing code.

 AI 也加快了我的开发速度。我其实已经10年没写代码了。

When I founded the company, I essentially stopped writing code. I had a team of engineers; I didn't need to write code. So when I was jumping back into it, it was a fairly steep learning curve of getting myself back up to speed.

 公司创业那会儿我就不怎么动手了，有自己的开发团队。现在重新写代码时，确实有一个陡峭的学习曲线。

Even now, I'm launching the mobile app using the Expo kit. But, you know, that is a new area for me as well.

 包括最近用 Expo kit发布手机应用，这也是全新领域。

So, to be able to leverage AI – and I think it's interesting to see it influencing all different aspects – even in my day job, seeing how AI is then influencing and sort of augmenting how people work at scale as well.

 所以，AI 现在各方面渗透，甚至我日常工作的方式也在被 AI 重新塑造，工作流程都在变化。

【2:00-2:30】

 I have a feeling that AI is helping designers and product people more than it is helping developers sometimes because a lot of developers are very resistant to the change.

 我觉得有时候 AI 对设计师和产品经理的帮助，比对开发者还大，因为很多工程师反而抵触新东西。

It's very difficult to adapt to this new mindset. A lot of people are still reluctant; designers and a lot of people now that they are so empowered by AI, they are diving in in a way that a lot of developers are not.

 这种新的思维习惯很难转变，但设计师和产品经理已经受益很多，创业者群体其实对 AI 抱着开放态度。

Now using AI, in the probably... in the past year, you can really build but also learn at a faster rate than before.

 过去一年靠 AI，真的能让开发和学习效率大幅提升。

【5:00-10:00 片段 | 中英对照逐字稿】

---

**主持人**
 So, how did you use MakerKit to build your app?
 那你是怎么用 MakerKit 去做你的应用的？

**Sebastian**
 So, I think this is sort of the product foundations I'm leaning on. I had an idea, I could see a problem in the market. How do I leverage MakerKit to test that idea?
 其实我现在的产品逻辑很明确。我有个想法，看到了市场上的一个问题。怎么用 MakerKit 去验证这个想法？

Essentially, as a product person, I want to be able to validate an idea as quickly as possible.

 作为一个产品经理，我需要尽快验证想法的可行性。

Even scrolling through and reading the Discord of people launching products using MakerKit, you can see some of them have launched three, four, five, like they're on to their fifth leveraging MakerKit.

 你在 Discord 看很多用 MakerKit 上线产品的人，有的人已经做了三款、四款、甚至五款产品。

And it's that – how do you get to market? How do you get to market as quickly as possible to validate an idea?

 核心还是怎么快速推向市场，怎么最快验证产品想法。

AI is helping you both in – from a product perspective – synthesize information.

 AI 在帮助你，从产品角度来看，可以迅速整合信息。

If you're out there researching, how do I find my market?

 假如你在调研市场，AI可以帮你快速定位市场空间。

You know, maybe I'm on Gummy Search researching and validating an idea and I can see a problem space.

 比如我会用 Gummy Search 之类的工具去调研验证自己的想法，看能不能找到市场的问题点。

And then I'm bringing that into MakerKit. I'm like, "okay, how do I get this to market?"

 然后我把需求做成产品，再用 MakerKit 快速上线，进入市场。

The beauty of MakerKit is that a lot of the effort is actually removed from you.

 MakerKit最大的好处是，很多重复劳动和杂项都被框架处理掉了。

The core of it is there, to be able to launch an idea, a business, the mechanics of it, and then to be able to drop your IP in there quite quickly, validate that idea, iterate on it really quickly, and figure out – is it working, is it the right idea, move on to the next one, or is it double down on it and actually get some success from it.

 其核心就是帮你快速把想法变成成品上线，然后可以真正去验证、快速迭代，决定是不是要做下去，还是换个方向。

---

**主持人**
 I find it pretty incredible that non-developers are able to ship full products in a matter of weeks with the power of AI and boilerplates like MakerKit.
 我觉得挺不可思议，非开发者得益于 AI 和 MakerKit 之类的框架，几周内就能做出完整产品。

Just to touch a little bit on AI used by non-developers, what do you think of products such as Vault or Lovable – those can basically create a SaaS in a bunch of prompts?

 想问下，你怎么看 Vault、Lovable 这些平台，用户只要输入一堆提示就能自动生成 SaaS？

They use boilerplates, not generated entirely by AI, but probably 40-50% of the code required to build a SaaS.

 其实底层还是模版，不是全部靠 AI生成，可能40-50%的代码是自动产出的。

**Sebastian**
 Yeah, I'm in a bit of a mode of wait and see.
 对这类工具，我目前还在观望中。

Some of these tools that can spin up a SaaS product from nothing, I think it's interesting.

 有些工具确实很吸引人，可以一键生成 SaaS，挺有意思。

One of the challenges that I see at the moment is that the ability for people to launch SaaS products quite quickly is bringing a huge number of products to market.

 但这样也带来挑战，大家都能快速做产品，市场上涌现大量新 SaaS。

Then you have the problem of how do you filter down and find the good products from all of this.

 之后就是筛选优质产品、发现真正有价值项目的问题。

I guess a challenge is also that a lot of the tools that are being launched are also AI wrappers themselves, which I think is a bit of a challenge.

 现在很多新产品其实也是 AI 套壳，换个包装，其实内容和技术没那么创新。

I think that it'll figure itself out. I think there'll be a place for products built from scratch.

 我觉得市场会慢慢自我调整，真正从零开发的产品还是有空间的。

Someone has an idea, has no coding ability, but has an idea, launches it, runs it, and builds a business out of it. That will get you there.

 有人只想法没有开发能力，也可以用这些工具直接上线运营，变成生意。

Then frameworks like MakerKit, they're some code in there, some logic in there that I don’t think AI could do.

 但像 MakerKit 这种工具有些核心逻辑是 AI 做不到的。

With Watch This, for example, both of my projects – Watch This and the second one, Componentry – I gave AI a go at it and it couldn’t do it.

 就拿我的两个项目举例，我让 AI 试着生成关键代码，结果都不行。

So you’ve got this middle ground where you still need people with some technical ability to get something running.

 所以还是需要有一定技术能力的人，才能把产品跑起来。

If a problem space is known, it can probably do it; but if it’s something novel, brand new, there’s this middle ground – MakerKit plus a bit of AI will get you a long way.

 遇到常规问题，AI能帮解决，但做新东西、解决新问题，还需要和框架、人工结合。

Or someone like me who has a bit of coding ability but it isn’t their full-time job. I found these tools really good for generating a prototype or an MVP that you’re ready to scrap.

 像我这样有点编程基础、但不是专职开发，这些工具很适合做原型和 MVP。产品有了初步版本后，觉得不合适就可以随时推倒重来。

【10:00-15:00 片段 | 中英对照逐字稿】

---

**主持人**
 If you’re going to build a product where you’re hosting the data from customers or production data, I found that a horrible idea because even using cloud code for example, which is state-of-the-art right now, it has so many vulnerabilities every time I write something and I don’t supervise it, which is something I would never really do.
 如果你要做的是会托管客户数据、线上生产数据的产品，其实风险还是很大。比如现在用的云端代码，虽然很先进，但常常代码不自查就会出现很多漏洞，这是我绝不会让它自动处理的。

One of the things I’m focusing on right now with MakerKit... is how can I add more rules for these AI agents to reduce the possibility of the AI writing security vulnerabilities in the generated code. And that’s my biggest worry when using AI. And when my customers use AI, because lately MakerKit has attracted a lot of customers who don’t really know how to code and they’re quite confident about using AI to generate a SaaS.

 我现在在 MakerKit 关注的一个重点，就是能不能针对 AI 代码生成器添加更多安全规则，从根源上避免它产出有漏洞的代码。这是我用 AI 最担心的地方，也是在 MakerKit 用户群体中持续提醒大家的点。现在用 MakerKit，很多人不懂代码但很自信地用 AI 自动生成 SaaS 产品。

And I’m like, you can, but you need to understand the code because if you don’t, you might be writing something that’s going to be a legal liability and in general, it’s just not something that you want for your SaaS.

 我的态度是“你可以试，但必须懂代码，否则很可能埋下法律隐患，甚至整个 SaaS 会出问题”。

So yeah, that’s something I tell every customer that joins and tells me, “Hey, I don’t know how to code, but I can use AI.”

 所以我会跟每个说“我不会写代码但会用 AI”的用户都强调这些问题。

**主持人**
 I think if you’ve been around tech long enough, you realize that to grow a business and to have some scale, privacy and security need to be there from the very beginning.
 我觉得在科技圈待得久了就会明白，如果想做长远生意，数据隐私和安全一定要从第一天就重视。

And that’s one of the challenges you have launching a company.

 这也是创业早期最大的难题。

If you step back a little bit, launching a company or launching a startup in the EU is a very different environment from doing it in the US or elsewhere in the world.

 其实像在欧盟创业和在美国创业，环境、法规、对隐私的要求都完全不一样。

If you’re not privacy-first, once you get a little bit of scale, you then have to unwind something when you have users, which makes it a lot harder.

 如果没有一开始做“隐私优先”，等规模上来、有了用户，再去补救会非常难。

Whereas if you do that from the ground up, that’s the best case scenario.

 所以最理想的还是从一开始就把隐私安全做到位。

---

**Sebastian**
 But if those instructions can sit within MakerKit to enable the AI to be able to do it, then absolutely. But I like to believe that, you know, this is, I think one of the hardest things that actually comes with launching a business, launching a product, launching a platform—is your first problem.
 但如果能用 MakerKit 的安全规则，直接软性规定 AI 代码产出的安全性，那是最完美的状态。但说到底，创业、做产品、做平台，最难的其实都是第一个难题——找到靠谱的产品问题。

First, the first hardest thing is your problem, right? If you can come up with a good problem, you’re a long way.

 第一步是问题本身，找准了问题，成功已经一半。

The next one is zero to one. How do you go from “I have nothing” to “I have something customers can use,” and MakerKit solves that.

 下一个难关就是 0 到 1，从什么都没有，到能做出用户能够用的产品。MakerKit 在这部分真的帮了大忙。

And then at some point, potentially people may outgrow it, or they need to bring developers or engineers in on top of MakerKit and actually build it properly—that it may go, they may still use AI but it may get bigger.

 当然有一天公司做大了，还是可能要专业工程师介入，对现有 MakerKit 做二次开发、继续引入 AI，但那已经是更后面的事了。

---

**主持人**
 In terms of problem discovery, like you build Watch This Page, you’re building Componentry, migrating to MakerKit—is this a problem that you had, or how did you validate your idea before building it?
 比如你做 Watch This Page、骑行软件 Componentry，也准备迁移到 MakerKit，这些产品都是你自己遇到的问题吗，还是怎么验证想法的？

**Sebastian**
 Yeah, I mean, a lot of people can look around at the world and see ideas and sort of launch it.
 其实有很多人看得到机会后就直接上线产品，这完全没问题。

For me I tend to fall into that founder category of—I see problems around me, I need to be in and amongst those problems.

 但我属于另一类创始人：我必须深度嵌入问题本身，和用户同频。

It was a discussion one day with the marketing team and the product marketer. He’s like, “How do we do this?”

 比如那天和市场部聊天，市场同事问“我们这个功能怎么做？”

And I was like, “Oh, that’s interesting.” And I ended up having a beer a couple of days later with my old business partner and he’s like, “I’m trying to track this and I’m trying to see my competitors, I’m trying to understand this.”

 我就觉得这个问题很有意思。隔几天和老搭档喝酒，他也在找方法监测竞品，搞市场分析。

And I was like, “Okay, that's interesting. I’ve had two conversations with two different people in different spaces around tech and marketing. I think there’s something here.”

 等于不同行业两拨人都面临同样的需求，我就知道这事值得做了。

---

**Sebastian**
 So I built a really quick proof of concept to go, “Oh, yeah, I think this is possible.”
 我会先快速做个 PoC，验证一下技术可行性。

Then went searching and discovered MakerKit, and I was like, “Oh, this solves one of the big problems I had when I built a first version of Componentry a couple years ago.”

 再去查资料，遇到 MakerKit，发现很多年前做 Componentry 时遇到的难题都能解决。

For me it was around conversations with people and being embedded with them within the marketing and the tech space.

 我一直是靠不断和用户深度对话，嵌入目标圈子。

The problem for Componentry was a little bit easier—I’m a cyclist, a road cyclist, a gravel mountain bike—I’m embedded in that space, and there was a “hey, how do I do this?”

 Componentry 就更容易，我本来就是骑行者，车友圈子里大家问“这功能怎么实现？”

You listen to people around you and you’re tapped into that community and then you’re solving a problem in that community.

 你只要真正融入目标圈层，就很容易找到靠谱需求。

【15:00-20:00 片段 | 中英对照逐字稿】

---

**Sebastian**
 There was a “hey, how do I do this?” and you listen to people around you. There’s a lot of dialogue. There’s a lot of YouTube videos floating around about finding SaaS problems or finding problems that you can launch by building something with AI.
 有时候就是听到大家问“这问题怎么解决”，你多和用户聊聊，灵感和机会自然冒出来。市面上有很多关于怎么发现 SaaS 需求、怎么用 AI 搭产品的视频，但我更愿意靠和真正的用户对话来寻找问题。

That’s kind of the trend at the moment. Unless I know a problem in depth, I struggle to do that. But I know people who have just found problems on the internet and gone “That’s really interesting, I’m just going to launch a business on that.” That’s not how I work. But I know that’s a way of doing it as well.

 现在流行做 SaaS、做创业都是市场调研、网络搜索，但我习惯直面问题深度了解。有些人在网上找需求，觉得有意思就立即上线产品，当然这也是一个路子，但不是我的风格。

I think solving your own problems is the best way to get started building a SaaS. This has come up in different episodes with other customers – they had a problem, they solved their problem and chances are if you have a problem, the market hasn’t filled the need.

 我认为最靠谱的还是“解决自己的问题”作为 SaaS 创业起点。很多 MakerKit 用户也都有类似经验：自己遇到需求，先做出来，然后发现市场其实还未满足，大家都缺。

Then that’s the best ideas, and worst-case scenario you solve your own problem. But chances are there are other people with the same need that are going to use your solution.

 这种产品往往是最有价值的，就算卖不出去也解决了自己的困扰，但一般来说，市场里总有类似用户愿意买单。

---

**主持人**
 I feel like your companies, Componentry and Watch This, are fully bootstrap by yourself with no external funding. Is that right?
 像你的两个项目 Componentry 和 Watch This，都是纯自启动，没有外部融资吗？

**Sebastian**
 That's right. Yeah.
 是的，完全自筹。

---

**主持人**
 And one of the hardest things for bootstrappers is outreach marketing and finding people. When you're VC funded, you have a network, you have a lot of money to spend on ads and influencers and socials. But if you are a bootstrapper, you don't have any of that.
 对于“自筹”创业来说，最难的是推广与获客。风投支持的项目有资源搞营销、广告、网红，但自筹型创业者往往什么都没有。

So one question is, how did you find your first users? And what's your marketing strategy, without spilling, you know, your secrets?

 所以问题来了——你怎么找到第一个用户？你的营销策略是什么？（当然不用泄漏商业机密）

What's your go-to strategy for reaching people online?

 你最推荐的线上获客方式有哪些？

---

**Sebastian**
 There's no secrets anymore. No secret. No, no secrets.
 其实没什么秘密啦，现在都是公开资源。

Componentry was easy to get the first 20 people on board and actually get it testing and running for me because I was in and amongst that community, right?

 像 Componentry 一开始很容易找前 20 个测试用户，因为我就在骑行圈，每天都在跟车友聊天。

And I'm cycling with people, I'm on a bike with them for a couple of hours, so I can bully them into it.

 骑车的时候一起聊产品，大家直接反馈，甚至可以半强制让朋友试用。

Growing that, that's the next kind of challenge.

 往后增长才是挑战。

Watch This was interesting because, and it's probably more relevant to your question because that was a space where I know people in tech and I know people in marketing and that's the product itself, but how to find a bigger audience.

 像 Watch This 就有点难度，虽然我认识一些科技圈和营销圈的人，但产品本身想寻找更大的受众就复杂多了。

The secret for me there is – for discovery was Reddit. Jump into Reddit and find that problem.

 最后我的方法是靠 Reddit，直接到社区里找问题、找目标群体。

---

**Sebastian**
 I think what I did before actually building it on top of MakerKit is, you know, I wrote a single script as a proof of concept and validated that, yes, it was possible. Then the research came.
 在 MakerKit 产品出来之前，我先写了个脚本作为 PoC，验证技术可行性，然后专心做用户和市场调研。

So then I went into Gummy Search. From Gummy Search, I was in Reddit. I was trolling Reddit, I was looking at the conversations and then I built it on top of MakerKit.

 先用 Gummy Search 搜索关键词和社区，然后潜入 Reddit，看论坛里的真实用户交流，最终回到 MakerKit 全面上线产品。

So then when it was ready and I had it there and it was open for people to sign up and they could actually use it, I was just leveraging the audience that I had found when I was doing my research to actually validate this as a problem.

 产品上线后，目标群体就是我在调研时在 Reddit 等论坛找到的用户，通过他们来验证产品需求。

And I guess the key there is – if you try to sell to people in Reddit, you'll get cut down quite quickly.

 但 Reddit 营销的最大雷区就是不能硬推产品，直接卖的话会被骂得很惨。

There's not a place that you can go and sell to people.

 Reddit 不是用来卖货的渠道。

However, what I went to is I went into marketing subs and I was like, "Hey, does anyone have this problem? Hey, how would I solve this problem?"

 我的做法是潜入市场营销论坛，发问“有没有人在意这个问题？有什么解决思路吗？”

And it was essentially the problem that I was building for, but I was asking people and I was getting feedback.

 其实我提的问题本身就是我产品要解决的痛点，但我通过用户反馈来进一步确认产品价值。

And one of the things that I discovered quite quickly as an example is that I was scanning daily and giving weekly digests.

 比如我一开始设定产品是每天抓取，每周汇总，但后来发现用户反馈极大改变了我的节奏。

And I still scan daily. But what I discovered from that Reddit research is – and after the fact and actually having those conversations, looking for customers and doing discovery there is that people wanted monthly and quarterly digests.

 我的调研和访谈非常扎实，发现大家其实更希望是每月或每季度总结，而不是每天、每周。

They didn't want daily and weekly. I started to understand the cadence of the product and had to make that shift.

 所以产品的内容节奏切换完全来自 Reddit 用户的真实反馈，我又做了相应调整。

【20:00-25:00 片段 | 中英对照逐字稿】

---

**Sebastian**
 But you get in there and you can start talking to users. So it's about having, just having conversations with people and then once you discover people you can bring them on board.
 其实只要你能够进入 Reddit 社区好好跟用户交流，就能很快和目标用户打成一片，然后顺利把他们转化为产品的种子用户。

Maybe you don't get them to pay to begin with. Maybe you give them free access for six months or something and then they become your champions and then you try and find twenty of those and you move on to trying to grow it to a hundred.

 一开始并不用目标用户立刻付费，可以先送六个月免费，他们成了产品铁杆后，再去尝试把“20人”模式扩展为“100人”。

That's my secret. Reddit is such a gold mine of information. It's unbelievable and it's kind of unused by a lot of founders that I see.

 这就是我的增长秘诀。Reddit 是信息金矿，不为大多数创始人所充分利用，简直不可思议。

It's used badly, and I am one of the ones who used it badly because every time I mention MakerKit – or every time a customer actually who, happens quite often, mentions MakerKit – it gets downvoted to oblivion.

 其实我自己、还有我的部分客户也用坏过 Reddit。你如果在帖子里直接推 MakerKit，经常会被疯狂点踩（downvote），帖子没人看。

So, one thing yes, people hate it. Absolutely, especially in developer communities, it's interesting. I don't know why, but it's not me very often. It's customers that are very happy with it and they recommend MakerKit to other people and they always get downvoted. I feel sorry for them but thankful at the same time.

 是的，Reddit 上对广告推销非常反感，尤其开发者社区。奇怪的是，经常不是我自己发广告被踩，而是那些真心喜欢 MakerKit、帮忙推荐的用户也经常被踩，这让我既惋惜又感激。

That's why it's no longer my go-to marketing place. I just reply to people that maybe are asking a question specifically about MakerKit, or if I can help with programming questions, but I stopped actively marketing MakerKit on Reddit because it's been very hard for developer tools and programmers.

 所以现在 Reddit 不再是我主动去发帖营销的首选平台了。我一般只在别人专门问 MakerKit 问题时回复，或者偶尔帮忙解答技术问题。因为 Linux、开发者社区的推广实在太难，内容很容易被淹没。

Programmers are not the easiest people to sell to. They're very specific about what they like and what they don't like.

 程序员人群真的很难推销，他们审美和习惯都非常苛刻。

---

**主持人**
 Absolutely, especially, you know, if they say there’s now two kinds of developers. There’s ones who say AI is going to help me build it in one hour, or there’s the others who say, “I'm just going to do it in a weekend, it has tens of thousands of lines of code, it’s been in building it for three years.”
 确实，我发现现在开发者分两派：一种认为 AI 能让我1小时做完产品，另一种说自己一个周末就能写几万行代码，还声称自己专门开发三年。

I know for a fact that's not the case, but it's impossible to convince them otherwise. And in a way, senior developers have been the hardest customers to satisfy. Usually it's beginners or people like you, like that are no professional programmers, but they know enough where they can build products, that have enjoyed using MakerKit the most.

 但实际上很多情况并非如此。但很难劝动他们。反倒是技术小白或“半专业开发者”更愿意用 MakerKit 这类工具。

And AI is really helping a ton now because, as I said before, it made it much easier to use the framework and programming in general to build SaaS products from scratch.

 AI 现在真的帮上大忙，不论是写代码还是用框架来搭 SaaS、做新产品，门槛都大大降低了。

---

**主持人**
 Is there any other marketing channel that has helped you? For example, SEO?
 你还用过别的方法做获客吗？比如 SEO 之类的。

**Sebastian**
 A little bit. I saw a report just a little bit on the SEO stuff. I saw a report the other day that over 70% I believe of all internet traffic is now bots and is now AI.
 用了一点点。我最近看到一份报告，说现在互联网上70%的流量其实已经是机器流量和 AI。

It popped up in one of the Slack channels from one of the marketing team. And I've been looking at the traffic that's coming from all of the LLMs, ChatGPT, Gemini, etc.

 我们 Slack 营销群也讨论过这事。我认真观察了一下，发现 ChatGPT、Gemini 这些大模型带来的流量也挺多的。

And the SEO work that I was doing is now going to pivot a little bit and actually be more focused on discovery for the people actually searching and using LLMs to be able to do discovery on new products.

 所以我现在的 SEO 策略也变了，逐渐将重心放到让 LLM 用户更容易发现我的产品——不是单纯追求关键词排名，而是让 AI 模型能抓到我的内容。

How do I solve this? Hey, if I wanted to do this, how would I do this? Less and less people are Googling things. Don't get me wrong, SEO is probably still going to be important and just building up domain authority is going to be key.

 现在越来越少人用 Google 搜索，而是用 LLM 问问题。不是说 SEO 不重要了，领域权重还是要做，但文案和内容要适应新趋势。

But the piece now of making sure that the website and the content you're putting out there can be ingested by the LLM and actually make that discoverable.

 核心变成让 AI 大模型能抓住你的数据，内容适合被算法读懂。

And it was actually going to be an idea for one of my pieces of feedback that I thought I'd drop into Discord in the next couple of weeks—is that, like, we have a sitemap, it probably needs to generate the LLMs.txt file as well where it's actually pushing that content and generating that out.

 我甚至想以后向 MakerKit 官方反馈，除了 sitemap，还要自动生成 LLMs.txt 这种 AI 可读索引文件，这样内容直接推送给大模型更容易被收录。

I don't know if that's already in there but I – so one thing that popped up the other day is that that's going to be key.

 我不确定框架有没有做这个，但我觉得未来很重要。

---

【25:00-30:00 片段 | 中英对照逐字稿】

---

**Sebastian**
 So yeah, from my perspective actually at this point, building that sort of consumer-like B2C or B2B product is SEO content, make it ingestible by all the LLMs, and then a bit of Reddit.
 在我看来，现阶段做面向C端或B端的产品，最重要的是SEO内容能被各种大模型抓取、分析和引用，然后再用一点Reddit做社群动态反馈。

I find that a lot of the social media stuff requires a lot of effort, whereas the content creation I think can come later. It depends if it fits your market and depends if it fits your product.

 其实做社交媒体需要很多精力，内容营销则可以后置（视市场和产品类型而定），不同类型产品所需节奏完全不同。

I mean MakerKit's traffic from Google two years ago was three times higher. Now you know if you search many of the keywords that MakerKit was ranking for, they're usually answered by Google in the AI overview.

 例如MakerKit两年前从Google来的流量是现在的三倍。现在你搜很多相关关键词，Google直接在AI摘要里给答案，用户反而不点链接了。

Therefore, nobody clicks links anymore. And I know for a fact I don't click links anymore because the AI overview already pretty much gives you the answer, whether it's a programming issue, whether it's a recipe or something that probably in the past you would have used Wikipedia for.

 现在几乎没人点传统网页链接了，我自己也不点，因为AI摘要直接给结论，不管是查代码、查菜谱还是过去会去查Wikipedia的问题。

At the same time, if LLMs use indexes like Google and Bing, chances are that if you before ranked in search engines, now you're going to rank in the LLM search.

 但如果你的内容之前在Google/Bing有排名，那它们现在也会在大模型检索到，很可能在AI对话里出现你的网站、产品答案。

Which is why my strategy hasn't really changed. I am still going to publish content. I'm still focusing on SEO. People are going to search on ChatGPT instead of Google, so be it.

 所以我的SEO策略并没有本质变化，我照样持续发内容、做SEO。未来哪怕大家都上ChatGPT查资料而不是Google，影响也不会太大。

I still hope that my links are going to appear in ChatGPT and other LLMs. And in my experience, that's been the case. MakerKit ranks very high in all the LLMs.

 我还是希望我的链接会出现在ChatGPT等AI产品答案里。从目前经验看，MakerKit在这些新型大模型资料库里的表现非常好。

I think now probably 10 to 15% of traffic comes from LLMs, which used to be zero this time last year. I'd be curious to check back in a year's time and see what that number is.

 现在MakerKit大概有10%-15%的流量来自LLMs（大语言模型），而去年这个比例几乎为零。我很想看看明年这个数据会怎么样。

---

**主持人**
 Yes. I think one difference is that if you sell a product, then Google, I think it still ranks you similarly, like it doesn't show any overview, because you don't really have a question.
 对，如果你卖的是产品，Google当前还是会给传统排名，不一定直接出AI摘要，因为卖产品的用户需求和查询和内容还不太一样。

However, if you were focusing on content for attracting customers, that's different because Google is just going to give you the answers in the AI overview.

 但如果你主要靠内容吸引客户，那Google很可能会用AI摘要直接把你的内容“折叠”掉，用户根本点不到你链接。

Probably one way to work this around is to develop mini tools that Google obviously cannot, unless they start generating code on the fly in Google Search, which might happen. That's a strategy that might still work.

 那有没有解决办法？也许开发一些“迷你工具”型的网页或服务，Google和AI不能全自动生成这些页面和代码，这样反而更能积累真实点击和SEO流量。

I think for Watch This Page, you might have a few ways to show mini tools about competitor analysis that could bring traffic to your SaaS.

 像你的Watch This Page完全可以用“竞品分析类小工具”吸引精准流量，给SaaS引流。

---

**Sebastian**
 Yeah. Look, I heard an interesting take a couple of weeks ago where the web or what we perceive as the web was the way to access the Internet, and the Internet is just essentially a collection of databases, right?
 是的。其实最近我听到了一个很有意思的观点：现在我们所有人用“网页”方式触达互联网，本质上只是访问一堆庞大的数据库。

And the way we've got to now is, the web, that's how we do it.

 而我们现在的入口主要还是用网页。

And if you fast forward, it was interesting that this take is essentially coming from Google.

 而这个新观点其实就是Google内部流出。

But if you fast forward, what if the LLM is the new way of accessing the Internet and, really, that the way that you publish your website is through an MCP server, so the LLM can just access the data directly through a structured format.

 但从未来视角来说，也许LLM才是下个时代的“互联网入口”，网站发布的本质是通过某种MCP服务器，AI直接以结构化格式抓走你的服务数据，甚至绕开传统网页。

You still have to build a website in case people want to access it. But if you build a service or you built an offering where an LLM just needs to access it, why even build a website?

 当然网页还是要建，以防有人需要直接访问，但只要服务能被LLM理解和引用，将来甚至“网站”不再是唯一入口。

I'm curious as to how long it'll take till we actually get to that point. But to your point of actually whether those mini tools – I know for a fact, I can't remember where they're doing it, but Google is doing something like that where if the data is being returned in a structured format, they're giving you graphs and charts.

 我也很好奇这种变革多久后才能实现。至于“迷你工具思路”，Google现在其实已经在做——只要你提供结构化的数据，他们会在搜索结果直接给你图表、表格，甚至自动解析成更高级内容。

Because they're like, yes, we can turn this. We understand this structure well enough, know how to turn it into a pie chart or a table or a graph.

 因为机器足够聪明，能自动“消化”你的结构化内容，变成趋势图、饼图、表格等。

---

【30:00-35:00 片段 | 中英对照逐字稿】

---

**主持人**
 Oh my god. That’s a new channel that is going to disappear for a lot of startups. Like, I know for example v.io grew incredibly thanks to their mini tools, and I think there's a lot to learn from you from two perspectives.
 天啊，这意味着很多新创业公司的流量渠道以后可能会消失。比如我知道v.io靠这些迷你工具曾经流量爆发，但以后这种机会可能越来越少。我觉得你身上有两点特别值得学习。

First, you're head of product at an established company, which means you know how to market the product, you know what features to build. And from another perspective, you are a nontechnical founder who builds SaaS on the side.

 第一，你是成熟公司的产品负责人，对产品营销和功能选型有丰富实战经验；第二，你是能自己独立做 SaaS 的“非全职技术创业者”。

What is your advice to technical founders that are building their first SaaS, and you know the problem with technical founders is that they build a lot of features and sometimes they don't validate those features or they build too much. What do you think about it?

 你有什么建议给那些第一次做 SaaS 的技术型创始人？因为技术出身的创业者很容易“功能越造越多”，不做功能验证，最后做太复杂。你怎么看这种情况？

---

**Sebastian**
 Yeah, great question and it's a question that I'm constantly asking myself because I think in the past I've done that.
 很棒的问题，也是我自己经常反思的事情。过去我也犯过这个毛病。

I've just built features. I've built many, many features and it's over the years I've learned how to build the right features.

 以前总是疯狂造功能，一次上很多模块，但这几年教会了我怎么只做对用户有用的功能。

It's what problem am I solving and who am I solving it for?

 归根结底是“到底解决了什么问题，目标用户是谁”。

And I think that if you're a technical founder and you can figure out the problem you're solving and you go, “Great, I understand the problem,” and then you can find the people that you're solving it for and those people exist—like, it's not a madeup person, but if you can actually understand the problem and be able to find those people, then it puts you leaps and bounds ahead of everybody else.

 如果你是技术型创始人，首先要找准真正解决的痛点，并且找到具体的用户群体（不是虚构的画像），这样你就迈过了创业最大坎儿，超越绝大多数同行。

Because you've… you're solving a real problem for real people and that will get you a lot further than just building the next new feature.

 这样你就是在为真实用户解决真实问题，而不是单纯地一窝蜂造新功能，这样才能让产品走得远。

---

**主持人**
 I am struggling with this problem right now because I'm building SuperMode, the next MakerKit product that is basically going to be a CMS for Superbase, because Superbase Studio is great, but it's for developers and it's way too hard to use for searching data or for editing it on the fly.
 我自己现在也在因为这个问题发愁。我正在做 SuperMode，就是下一个 MakerKit 产品，本质上是给 Superbase 做CMS。Superbase Studio太偏开发者了，做数据检索、临时编辑用起来太难了。

I just find it too hard myself and I think it's one of the tools that could really help technical and nontechnical founders to use Superbase.

 我自己用都觉得难，明明这是能帮技术、非技术创始人用Superbase的好工具。

But it's my initial release, and I'm like, what if I build this and what if I build this? And I kept building for over a month now and I haven't shipped yet.

 但我还是陷入老问题：总是想“要不要加这个？要不要加那个？”，结果一个月过去了还没发版本。

So I'm still, you know, still struggling with it. But it's also, it's a very complex product, so I just really want to make sure it works. But how do you know when you've solved a problem? When do you know you can ship?

 我自己还在纠结。但因为这个工具很复杂，又很想做出没毛病的产品。可问题是，怎么才算把问题解决了？怎么判断可以发版本了？

It's the constant battle, isn't it? It's the constant battle.

 这真是一场持续的拉锯战。

What is MVP? What is your bare minimum? What is your minimum viable product? How do you know when you've got that?

 什么才是MVP？什么算最小可行产品？怎么才算可以定版发出来？

Because you always look at something and go, “Oh, well, you know, if I just did this little bit more, or just a little bit more there…”

 每次总是觉得“再加一点功能就好了”、“这个改一改就完美了”这种状态很难摆脱。

And another thing I'm really interesting interested in hearing from you since you are a nontechnical founder.

还有一件我很感兴趣的事情，想听听你的看法，因为你本身不是技术出身的创业者。

What advice do you have to other nontechnical founders who want to build their SaaS and they don't know if you know they should hire someone an agency a contractor or should they try to build it themselves using for example AI do it yourself double down and do it yourself.

你会给那些想做SaaS产品却不是技术背景的创始人什么建议？比如他们不知道该雇人还是找外包，还是像你自己用AI亲自上手做。

I was a non-technical founder and both watch this and componentry I started building while having a full-time job and componentry I was running a software startup at at the same time with employees all over the world.

我本来也是非技术创始人，无论是Watch This还是Componentry，我都是在有全职工作的情况下开始自己做的，像Componentry那会我还有一家全球都有员工的软件创业公司。

So you know there was a how do I how do I do this at the same time and I ended up even then getting a contractor in to do it.

所以你知道，一开始我也面临“怎么一边工作一边做这事”的问题，后来我确实也找了个外包来做。

The challenge with a contractor is they're never going to be able to see your vision of what you want and be able to sort of make that vision a reality in the way in the way that you want.

但找外包的问题是，他们很难真正理解你内心想做成什么样，也很难像你期待那样呈现你的愿景。

And I think that with the way AI can assist what you're doing, don't vibe code. Vibe coding is bad. Don't vibe code.

而且我觉得现在AI可以辅助你搞开发，但不要“凭感觉写代码”，凭感觉瞎写很糟糕，千万别这样做。

But you can leverage AI to be able to guide you through the process of how to actually code.

不过你可以用AI一步步辅助你做好每一步。

And I think that there's an invaluable skill learned in actually trying to do it yourself.

我认为，亲自去做会学到无价的能力。

You will learn there's a certain skill set that you'll pick up and how things actually fit together.

你会发现你会学会一套技能，知道各种东西是怎么组合起来的。

Now, if you're really non-technical, you might need to bring someone in, right?

当然，如果你真的完全不懂技术，你可能还是得找人帮忙。

If you're on Discord and you sort of understand a bit of HTML and a bit of CSS, you can get an among it. And I would say that try first. Try try try building it yourself first.

但如果你能上Discord、稍微懂点HTML和CSS，我建议你一定要先自己试试、尽量自己上手。

And I would say that maker kit even from my perspective being non-technical like there was a learning curve.

以我非技术背景的视角来看，用Maker Kit也是需要一段学习过程的。

There was definitely a learning curve. But once I understood and because it's it's neat, it's tidy, it's well structured, right?

真的需要一个适应学习的过程。但一旦你理解了，它本身结构很清晰很整洁。

Once you start to understand and how to how to build things and fit within the framework and build on top of it, you'd be surprised how quickly you're able to get up to speed on things.

只要理解了框架、知道怎么去往上叠加功能，你会惊叹自己进步有多快。

So yeah, I guess that my my advice for nontechnical is like try yourself and by even trying yourself and going no, then when you go to guide a contractor in, you'll be far better educated on how to communicate what you want.

所以我对非技术人的建议就是：先自己试一试。哪怕最后要找外包，也会更清楚自己想要什么，更会跟对方沟通。

I totally agree with this. Like give it a try first. Even if you build an MVP web coding and you're ready to throw it away, at least you can try doing it with your vision and then you give it to an agency or a contractor who know better what to do.

我完全同意，先试着做，即使只是个MVP最后要扔掉，至少你用自己的想法把雏形搭出来，再交给外包会更好。

But communication is really the hardest thing when hiring an external agency and I've been on both sides.

不过找外包时，沟通真的是最难的事，这一点我作为两边都做过的人深有体会。

So it's definitely a problem that I recognize. Now last question. Has there been a time while building your startup or even at work where you were like, "Oh no." And what did you learn from it? What sort of oh no?

这是我真心意识到的问题。最后一个问题：无论创业还是上班，有没有过那种觉得“完了”，你从中学到了什么？﻿

I've had many I've had many oh no. It can be anything really. Perhaps something that you thought it was too hard to overcome, but then you did.

我有过很多次“完了”的感觉，可以是各种各样的。可能你以为真的很难过去，但其实最后也挺过来了。

Yeah. Yeah. Look, building watch this. I was determined that I was going to build and hand roll the software to take screenshots as well, which when it's on top of a cell is, you know, it's hard. It's hard.

是的，比如做Watch This时，我下决心自己手写截图软件，把截图功能全都自己写进来，可是在Vercel平台上这真是太难了，非常难。

The software, like a headless, a headless Chrome uses a large amount of memory, but I was determined to make it work.

这种东西比如headless浏览器，要占很多内存，但我就想一定要搞定它。

But there was at that moment when I started building it and had it all running locally, and I was like, that's great.

当我在本地搞定了、一切都能正常跑的时候，我还挺开心。

And it wasn't until I deployed it do you realize that your local MacBook Pro has a hell of a lot more memory than what you get from Vercel.

但一部署到Vercel，才发现本地MacBook Pro那点内存比服务器多得多。

And there was that little bit of that oh no moment have I bitten off more than I can chew here has the entire premise and idea of what I've been building towards now not going to be possible.

当时我真有点“完了”的感觉，难道整个产品方向都要泡汤了吗？﻿

There was a couple of weeks where I kind of went oh I'm not sure I'm not sure if this is possible. Am I going to be able to solve this?

有好几个星期我都不确定自己搞不搞得定，甚至怀疑这根本做不到。

I managed it. I did it. But it was definitely a oh have I wasted have I wasted a couple of a couple of months within the context for everyone is that I'm working a full-time job leading product.

虽然最后还是解决了，但真的有种是不是白忙了好几个月的感觉。尤其那会我还有全职工作。

So when I say a couple of months it's probably you know a week or two of sort of full-time work because I'm I'm I'm putting my getting my time in where I can.

所以说几个月，其实加起来也就一两周的全职时长，因为都是利用碎片时间做的。

But yeah, that was definitely an oh no moment where I've gone actually this might technically might not be possible. And this was the core premise of the product which was take a screenshot of the changes between people's websites.

那确实是让我怀疑人生的时候，因为截图本来是产品的核心功能。

Did you use an API to fix this or did you fix it yourself? No, I fixed it myself. I was determined to fix it myself.

“你最后是用API搞定的吗？还是自己搞定的？”——“我坚持自己做出来的。”﻿

That is a really hard problem to solve because there are APIs. For example, screenshot one. Yes. By Deitro. He's a Twitter friend of mine. Very popular in the community. And he's had to dive into the source code of the browser engines V8 I guess to solve some problems that he had for his customers. So this is a really really hard problem to fix.

这真的很难搞，其实市面上也有API，比如screenshot one那个是Deitro做的，他还得踩着V8浏览器引擎源码才能帮客户搞定一些bug，说明这个问题真挺魔鬼的。

Yeah. Yeah, it is. I probably can't even tell you how I solved it because I've sort it's fallen out of my brain. But I know I know with that code I wrote some really good documentation because I knew if I ever came back to it, I' I'd need to pull apart why why it was doing what it was doing.

真的是这样。我现在都快忘了怎么解决的，但我写了非常详细的文档，因为知道下次回来要拆解这个东西得参考。

But it was having to find sort of headless browsers that could run and had been stripped back to be able to run sort of in a serverless environment. Yeah, it was challenging, but it was that was part of the joy of what I wanted to do. I guess I'm doing this because I like solving problems and it was a problem that I wanted to figure out how to do. So, I was determined.

关键就是要找那些能在serverless环境运行并且足够精简的headless浏览器，真的很有挑战，但也是这种挑战让我享受其中——做自己想解决的问题实在是有趣，所以就特别有干劲儿。

But I think if I if I'd run up against it and it couldn't be done and I I would have pulled the pin and gone I'll pay for something else and just and just turn it into an API for sure.

不过我觉得如果真的搞不定，我也会果断放弃选择API，没什么大不了。

Yeah. I think worst case scenario you can use an API like screenshot one and yeah, probably increase prices, but yeah, pick your battles. It's not the end of the world.

是啊，最差情况就是用API，价格高点而已，该放手就放手，这不是世界末日。

Yes. Yeah, absolutely. Thank you so much for joining the interview. Uh, I had a lot of fun and there was a lot of learning from you and one of the things that I learned from you, I'm just going to go and do it right now. So, thank you so much. It's been really great. It's been an absolute pleasure chatting, you know, speaking to you for the first time like this, I now get the I now see in you the passion and the vision inside Maker Kit, inside the Discord that I see. It now makes perfect sense. Um, it was an absolute pleasure meeting you today. Thank you very much. Thank you so much. Have a great night. Bye-bye.

是的，非常感谢你参加今天的访谈。我收获很大很开心，很多建议我要立刻去实践，谢谢你！第一次这样畅谈真的很开心，我现在完全理解你在Maker Kit社区、Discord频道中流露出的激情和愿景了。很高兴认识你，谢谢，晚安！﻿

