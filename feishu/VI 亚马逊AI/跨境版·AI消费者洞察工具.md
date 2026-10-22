---
title: "跨境版·AI消费者洞察工具"
feishu_url: https://my.feishu.cn/wiki/AFzew4pTgiTJwGk04XLc9xWmnng
obj_type: docx
obj_token: FhtQdDBZxon4iHxLaGcc6mIYnub
updated: 2025-11-24T19:09:35+08:00
---

# 跨境版·AI消费者洞察工具

先直接给你一个结论：**这套“跨境版·AI消费者洞察工具”，完全可以做，而且最好一开始就按「亚马逊内核 + 全渠道外延」的架构来设计**——既能深度服务亚马逊运营场景，又可以自然扩展到外贸 / 独立站 / 品牌出海场景。

下面我帮你做三件事：

1. **重新定位产品角色 & 整体架构**（从“声量通思路”升级到跨境版）参考shulx  卖家精灵评论分析

1. **按功能模块重构：数据层 → AI分析层 → 产品功能层**

1. **落地路线：从 MVP 到产品化、再到生态化（你可以直接拿去做计划）**

中间我会把你文件里“消费者画像 / 决策链路 / 痛点与需求 / 总结与建议”那套框架，改造成**可复用、可自动生成的跨境通用洞察引擎**。

---

## 一、产品重新定位：从“声量监测”到“跨境消费决策引擎”

### 目标用户三层

- **第一层：亚马逊运营 / 卖家 / VC 团队**
  - 日常问题：怎么选品、怎么打评论、怎么做Listing、本类目消费者到底是谁、为什么对手能卖起来。

- **第二层：跨境品牌 & 外贸公司**
  - 关心的是：不同国家用户的**文化差异、价格带、使用场景**，以及 TikTok / Instagram / YouTube 上的内容趋势。

- **第三层：品牌营销 / 代理公司**
  - 需要把“消费者洞察”转成**活动创意、内容策略、达人选品建议**。

> 所以，这个工具本质上不是“监测声量”的工具，而是一个：
> 
> **「跨境消费决策引擎」——从全网真实讨论和亚马逊行为数据里，抽出产品决策 & 营销决策所需要的东西。**

### 从“声量通 5 大能力”到你的跨境版 5 大能力

你文件里声量通的 5 大核心能力是：监测声量、AI 报告生成、竞品对比、SOV、品牌影响力与舆情预警。

我们做跨境版，可以做如下升级映射：

1. **全球话题 & 品类雷达（Market & Topic Radar）**
  - 替代“测声量 & 听声音”，数据源换成 TikTok / Instagram / Reddit / YouTube / Amazon Review / Google Trend 等。

1. **AI 消费者洞察报告引擎（Insight Engine）**
  - 保留“自动生成营销级报告”，但模板全部对齐：
    - 亚马逊运营：选品/Listing/广告策略建议
    - 跨境品牌：品类机会 & 国家差异

1. **跨平台竞品对比（ASIN + 外网内容一体）**
  - 不仅比亚马逊评价和关键词，还比 TikTok / YouTube 上谁在被种草、什么内容形式转化强。

1. **类目 & 品牌 SOV（多平台、多国家）**
  - 支持：某品类在 TikTok / 亚马逊 / Reddit 的内容占比、互动占比、评价占比。

1. **全球口碑 & 风险预警（Reputation & Risk）**
  - 亚马逊差评暴涨 + Reddit / Twitter 上开始出现负评话题 → 触发预警。

---

## 二、功能重构：数据 → 模型 → 功能 → 报告

### 数据层：从“国内社媒”改造成“全球多源消费数据”

**（1）电商内环数据（亚马逊为主）**

- 亚马逊：Review、Q&A、标题、五点、A+、Search Term、BSR、价格、Coupon/BD 信息

- 其他平台可扩展：AliExpress、Temu、Shopee、Lazada 等（按优先级慢慢接）

**（2）外部社媒&内容平台**

- TikTok / Instagram Reels / YouTube：短视频 & 长视频、评论区

- Reddit / Quora：长评、问答、吐槽帖

- Google Trends & 相关搜索：需求趋势 & 相关词挖掘

**（3）基础信息**

- 国家/语言/币种/品类树/品牌

- 你自己加的一些**类目属性标签**：如“户外工具 / 清洗机 / 汽车用品 / 家用电器”。

> 目标：让系统能“看见”的不只是亚马逊，而是**用户完整的讨论和决策路径**。

---

### AI 分析模型层：把文件里的洞察方法论结构化成模型

你文件里对“真正洞察”的定义，其实已经是一套模型原型：

- 用户是谁（画像）

- 如何决策（链路）

- 在讨论什么（需求 & 情感）

我们要做的，是把这三块拆成**一组可训练 / 可配置的任务：**

#### （1）多语言理解与归一化

- 使用多语言 Embedding + 机器翻译，把**德语 / 法语 / 意大利语 / 西语 / 英语 / 日语**等文本统一到一个“语义空间”里。

- 保留“原文 + 目标语言摘要”，避免只剩翻译后的味道。

#### （2）文本标签体系（核心）

给所有文本打上以下标签（可半监督 + 规则 + 人工标注迭代）：

1. **阶段标签：**
  - 种草 / 比较 / 下单决策 / 使用反馈 / 售后投诉 / 推荐分享

1. **场景标签：**
  - 户外露营、家庭清洁、汽车保养、宠物清洗、办公场景、礼品送人……

1. **需求 & 痛点标签：**
  - 功能（性能不够、吸力弱、压力不稳定）
  - 品质（寿命、稳定性）
  - 价格（太贵，性价比低）
  - 外观（设计老气、颜色难看）
  - 服务（客服差、退换麻烦、物流慢）

1. **人群画像标签：**
  - 职业、年龄段、家庭结构、兴趣（户外爱好者、宝妈、手作玩家…）

1. **情感与态度：**
  - 正向 / 负向 / 中性
  - 进一步细分：惊喜、失望、愤怒、理性建议、推荐给朋友等。

> 这就是“AI+数据穿透用户碎片言行，挖掘真实需求、情感动机、价值认同”的机器版实现。

#### （3）消费者画像模型（Who）

- 利用聚类 + 规则，将拥有相似：
  - 使用场景 + 关注点 + 价格带 + 品牌偏好
 的用户聚成“细分人群簇”（如“德国家庭园艺用户”、“美国房车露营用户”、“意大利城市公寓租客”等）。

#### （4）决策链路模型（How）

- 把“种草→搜索→浏览→比较→下单→使用→复购/推荐”映射到：
  - 外部平台：TikTok/YouTube/Instagram 的种草内容、评论
  - 亚马逊：搜索关键词、点击、加入购物车、评价节奏、Review 内容

- 形成类别级的**标准决策路径**：
  - 例如：**清洗机美国市场典型路径**：
    - TikTok 看到户外清洗短视频 → Google 搜型号 → 进入亚马逊 → 比较 3–5 个品牌 → 看图片/视频 → 看 Q&A & 差评 → 下单 → 使用一段时间后发视频/图文晒图。

#### （5）Pain Point & Need 模型（What & Why）

- 建立“**场景 × 需求 × 痛点**”矩阵：
  - 行：使用场景（洗车 / 阳台家具 / 房车 / 农场设备…）
  - 列：需求（压力、续航、便携、噪音、价格…）
  - 单元格：高频抱怨/表扬点数 + 代表性原话。

---

### 产品功能层：面向亚马逊 & 跨境的核心模块

建议你把产品拆成**8 大模块**，其中前 4 个是核心 MVP：

#### 模块 1：类目 & 品牌雷达（Category & Brand Radar）

- 看什么：
  - 某品类 / 某品牌在各个国家 & 各平台的：
    - 搜索趋势、内容量、互动量、Review 数量、评分走势。

- 给亚马逊运营的价值：
  - 告诉你：**这个类目在哪个国家还在上升、哪个国家已经卷烂了**。

- 给跨境品牌的价值：
  - 做“品类出海地图”：哪国适合上清洗机、哪国适合上吸尘器、哪国对价格更敏感。

#### 模块 2：消费者画像工作台（Consumer Portrait Studio）

- 输出：
  - 各国家 / 平台的细分人群画像：
    - “美国 · 户外露营青年”：年龄 25–35、喜欢 TikTok、重点看便携和电池
    - “德国 · 家庭园艺爸爸”：40+、看重耐用和水压稳定等等。

- 可直接挂在报告 Part 01 “消费者画像”模块。

#### 模块 3：决策链路分析（Decision Journey）

- 可视化：
  - 用户从 **看到内容 → 搜索 → 进站 → 成单 → 留评** 的典型路径；
  - 不同国家、不同人群路径的差异。

- 连到运营动作：
  - 在“种草段”适合投什么平台、什么类型内容；
  - 在“决策段”Listing 需要突出什么卖点；
  - 在“使用段”需要布什么 After-Sales 知识内容来减少差评。

#### 模块 4：场景 & 痛点洞察（Scenario & Pain Insight）

- 用“场景 × 需求 × 痛点”矩阵展示：
  - 哪些场景提得最多（Top5 使用场景）；
  - 每个场景下的 TOP 正向卖点 & TOP 痛点；
  - 每个场景对应的**价格带 & 主流规格**。

- 对应报告里的 Part 03“痛点与需求”，能直接支撑：
  - 产品迭代：加长电池？提高压力？减重？加配件？
  - 差异化文案：在哪个国家要把某个场景写进标题 / 五点 / A+。

#### 模块 5：竞品 & ASIN 对比（Competitor & ASIN Battle）

- 输入：
  - N 个竞品 ASIN + 自家 ASIN + 若干关键词。

- 输出对比：
  - 各自的人群画像差异；
  - 差评集中点对比；
  - 平台外种草内容数量 & 类型对比；
  - 卖点雷达图：谁更占“高压力 / 轻量 / 高颜值 / 性价比 / 耐用”等标签。

#### 模块 6：选品 & 产品创新助手（Product Innovation Lab）

- 用所有上面分析，输出：
  - 类目机会区间（小众但增长快的场景 / 人群组合）；
  - “下一个版本”的功能组合建议；
  - 可直接变成“PRD 要点”的结构化输出。

#### 模块 7：Listing & 内容共创助手（Content Co-pilot）

- 从洞察直接生成：
  - 多语言 Listing 标题 / 五点 / A+ 场景文案；
  - TikTok / Reels / YouTube 视频脚本大纲；
  - 邮件营销 / 独立站 landing 重点卖点建议。

- 本质上是把你「消费者洞察报告 → 输出策略建议」这块自动化。

#### 模块 8：口碑 & 风险预警中心（Reputation & Risk Center）

- 监控：
  - 某类痛点（如“漏水”、“爆炸”、“电池起火”）在各平台的提及量；
  - 深度负评（1–2 星长文） & Reddit 爆帖等。

- 用于：
  - 质量问题预警；
  - 法规/安全风险提示；
  - 广告投放避坑（避免继续放大有硬伤的 SKU）。

---

### 报告层：标准模板 + 自定义模块

沿用你文档里那套四段式结构：

1. **Part 01：消费者画像** → 来自“画像工作台”

1. **Part 02：决策链路** → 来自“决策 Journey 模型”

1. **Part 03：痛点与需求** → 来自“场景 × 需求 × 痛点”矩阵

1. **Part 04：总结与建议** → 基于规则 + LLM 自动生成策略建议

可按不同角色有不同“报告模板”：

- 亚马逊运营报告 / 类目立项报告 / 品牌出海策略报告 / 选品验证报告……

---

## 三、怎么落地：从 MVP 到完整产品的路线

你真正关心的是：**如果现在开始做，第一步到底做什么？**

我按“先打穿一个细分场景 → 再扩品类 → 再扩渠道”的逻辑来拆。

### 阶段 1：MVP——“亚马逊类目 + 全球内容的一体化洞察”

**切入点建议：**

- 先选你最熟的类目（例如：清洗机 / 全屋水过滤 / 便携吸尘器）。

- 先锁定 1–2 个国家（如：美国 + 德国）。

**MVP 必须具备的能力：**

1. **接亚马逊数据：**
  - 某类目下 N 个 ASIN 的评论 / Q&A / 标题 / 五点 / A+。

1. **接至少 1–2 个外部平台：**
  - TikTok + YouTube（种草内容和评论）。

1. **搭一版“标签系统”：**
  - 场景 / 需求 / 痛点 / 人群 / 情感。

1. **给出一份自动化洞察报告：**
  - 输出结构用你现在这份文档的 4 大模块；
  - 结尾加一页“运营建议清单”：
    - Listing 要补什么场景
    - 产品下代要优化什么
    - 广告要重点投哪些关键词 & 人群。

> 这个阶段的目标：
> **证明：对于一个类目，一个国家，你的系统能比人手工看评价快 10 倍，并且给出可执行的运营建议。**

---

### 阶段 2：产品化——“多类目、多国家、多角色”

在 MVP 跑通后，再做：

1. **扩类目：从 1 个扩到 3–5 个（清洗机 → 吸尘器 → 水过滤 → 汽车配件…）**

1. **扩国家：从 US / DE 扩到 UK / FR / IT / ES 等**

1. **做成 SaaS 化产品：**
  - 登录账号 → 连接店铺 / 输入 ASIN → 选择国家 → 一键跑分析。

1. **为不同角色做预置场景：**
  - “我要开新品，帮我做一份选品验证报告”
  - “我要优化现有 Listing，帮我找出痛点 & 机会点”
  - “我要做 Black Friday 营销，帮我看一下各平台用户最近在聊什么”

---

### 阶段 3：生态化 & 与你其它工具联动

后面可以做：

1. **和“亚马逊广告 AI 助手”打通**
  - 洞察工具给出：
    - 人群标签 + 场景 + 关键词结构
  - 广告助手自动：
    - 建 Campaign / 调竞价 / 做素材建议。

1. **开放 API & 插件**
  - Chrome 插件：在亚马逊 Listing 页面直接弹出“洞察侧边栏”：告诉你这类产品的全球痛点 & 机会。
  - 给 Agency / 品牌提供白标接口，用你的洞察引擎做他们的咨询服务底座。

1. **跨平台扩展**
  - 加独立站（Shopify）、AliExpress、Shopee、Lazada 等，形成**全球电商洞察超级中台**。

---

## 四、你接下来可以立刻做的 3 个动作

不讲虚的，直接给你“下一步 To-do”：

1. **先选定 MVP 范围：**
  - 类目：建议就用你现在最熟的“清洗机”；
  - 国家：美国 + 德国；
  - 平台：亚马逊 + TikTok + YouTube。

1. **整理一版“标签字典 & 分类规则”：**
  - 把你脑袋里的场景 / 需求 / 痛点 / 人群 / 情绪，用表格列出来（我可以帮你做成 Excel 模板）。

1. **用一批真实数据做一份“清洗机跨境消费者洞察 Demo 报告”**
  - 报告结构就用你那套 4 大模块；
  - 边出报告，边校验：哪些地方需要再细化标签、哪些指标对运营最有用。

如果你愿意，下一步我可以帮你：

- 把**“标签体系 + 指标体系”整理成一张完整的 Excel 设计稿**（可以直接给技术做数据标注 & 模型训练依据），

- 再把“清洗机”这条线的 MVP 方案写成 **更工程化的 PRD（数据流程 + 页面结构 + API 大纲）**。

好，我们直接把「清洗机」这条线的 MVP，写成一份**工程向 PRD**，方便你给技术 / 外包团队看。

---

## 概述 & MVP 范围

**产品名（暂定）：** CrossBorder Insight · Washer MVP
**目标：**
 在「清洗机」品类上，实现一个可用的跨境 AI 消费者洞察 MVP，能从 **亚马逊 + TikTok + YouTube** 的数据里，自动生成一份结构化洞察报告，用于：

- 选品/立项评估（是否值得做？做什么版本？）

- 现有 ASIN 优化（Listing 文案、卖点、场景）

- 广告 & 内容策略（人群/场景/痛点关键词）

**MVP 场景限制：**

- 品类：便携式清洗机 / 车载清洗机 / 家用高压清洗机（统一归为“Cleaning Washer”）

- 市场：US、DE（两个站点）

- 平台数据：
  - 亚马逊：Review + Q&A + Listing 信息（标题/五点/A+）
  - TikTok：相关视频 + 评论
  - YouTube：相关视频 + 评论

---

## 核心用户故事（User Stories）

1. **运营 / PM：项目级洞察**

> 1. “我输入几个竞品 ASIN + 国家，系统帮我汇总这个品类的核心人群、使用场景、主要痛点，然后生成一份 PPT/Word 结构的洞察报告。”

1. **选品/老板：决策级结论**

> 1. “我只想看到结论：什么人用？用在哪？最在意什么？这个品类在美国 / 德国未来半年大概什么趋势？”

1. **文案 / 广告运营：执行级建议**

> 1. “我需要直接从洞察里抠出：标题/五点要写哪些场景和卖点，广告应该抓哪些关键词和人群兴趣。”

---

## 系统总体架构（MVP 版）

### 2.1 模块拆分

1. **数据采集层（Ingestion Layer）**
  - Amazon Review & Q&A 抓取
  - TikTok 视频/评论抓取
  - YouTube 视频/评论抓取

1. **数据处理 & 特征层（Processing & Feature Layer）**
  - 清洗 & 去重
  - 语言识别 & 翻译（统一到英文）
  - 文本向量化（Embedding）
  - 标签打标（场景/需求/痛点/人群/情感）
  - 聚类 & 统计

1. **分析 & 洞察层（Insight Engine）**
  - 消费者画像聚合
  - 决策路径推断
  - 场景 × 痛点矩阵
  - 国家对比 & 平台对比

1. **API 服务层（API Layer）**
  - 项目管理 API
  - 数据查询 API（列表、聚合统计）
  - 洞察摘要 API（画像/场景/痛点/结论）
  - 报告生成 API

1. **前端展示层（Web App）**
  - 项目配置页
  - 洞察 Dashboard
  - 内容/评价探索页
  - 报告生成 & 导出页

---

## 数据流程（Data Flow）

### 3.1 数据源 & 采集

**输入对象：**

- 用户在前端创建「清洗机洞察项目」时输入：
  - 国家：US / DE
  - 目标平台：Amazon（必选），TikTok、YouTube（可选）
  - ASIN 列表：1–10 个竞品 ASIN（含自家）

**采集流程：**

1. **Amazon**
  - 输入：ASIN + 国家
  - 输出：
    - 基础信息：标题、品牌、价格、类目、主图 URL
    - Review：星级、时间、标题、正文、是否 Vine、是否带图
    - Q&A：问题、答案、时间
  - 存储表：
    - `asin_basic`
    - `asin_reviews`
    - `asin_qa`

1. **TikTok**
  - 关键词构造：
    - 品类词：`portable pressure washer`, `cordless washer`
    - 品牌词：指定品牌名
  - 通过搜索接口/爬虫采集：
    - 视频元信息：id、作者、发布时间、点赞/评论
    - 视频文本：标题、描述、提取的字幕（如可用）
    - 评论列表：评论内容、时间、互动指标

1. **YouTube**
  - 类似 TikTok：
    - 搜索关键词 / 指定视频链接（可选）
    - 视频标题、描述、字幕（如有）
    - 评论内容

> **MVP 简化：**
>  TikTok/YouTube 暂不要求覆盖“所有”内容，先固定拉取前 N（如 200–500 条）条与关键词相关的内容即可。

---

### 3.2 文本预处理（Preprocessing）

对所有文本（Review / Q&A / 评论 / 标题 / 描述）统一做：

1. **基础清洗**
  - 去 HTML / Emoji / URL
  - 去除过短内容（如长度 < 10 字符）

1. **语言识别**
  - 检测语言（en / de / 等）

1. **翻译（统一语种）**
  - 翻译至英文（保留原文字段）
  - 字段示例：
    - `text_original`
    - `text_lang`
    - `text_en`

1. **分句 & 分词**
  - 对英文文本进行句子拆分，用于精细标签。

---

### 3.3 标签打标（Labeling）

**目标：** 每条“内容单元”都打上统一标签，方便统计。

**内容单元定义：**

- 一条评价（Review）

- 一条 Q&A 问题或回答

- 一条评论（TikTok / YouTube）

- 一段视频文案（标题+描述+重要字幕）

**标签体系（MVP 版）：**

1. **平台 & 来源**
  - `platform`: amazon_review / amazon_qa / tiktok_comment / youtube_comment / …

1. **国家 & 站点**
  - `market`: US / DE

1. **场景标签（Scenario）**
  - `car_wash`, `garden_furniture`, `balcony`, `RV_camping`, `garbage_bin`, `pet_wash`, `fruit_veg_wash`, `hand_foot_wash`, ...

1. **需求标签（Need）**
  - `high_pressure`, `portability`, `battery_life`, `easy_install`, `noise_low`, `multi_function`, `water_saving`, ...

1. **痛点标签（Pain Point）**
  - `low_pressure`, `battery_bad`, `leak_water`, `poor_material`, `too_heavy`, `too_expensive`, `noisy`, ...

1. **人群标签（Persona）**
  - `young_outdoor`, `family_house`, `RV_owner`, `pet_owner`, `elderly`, `DIY_user`, ...

1. **情感标签（Sentiment）**
  - `positive`, `neutral`, `negative`
  - 可细分：`delight`, `disappointed`, `angry`, `rational_suggestion`

**实现方式（MVP）：**

- 优先使用 **规则 + 关键词词典 + 简单分类模型** 的混合：
  - 维护一张 `label_dict` 表：
    - 包含【关键词 → 标签】映射（支持多语言）
  - 辅助用文本分类模型：
    - `sentiment_model`：正负面
    - `scenario_model`：多标签分类（可先简单）

---

### 3.4 特征聚合 & 指标计算

**按以下维度聚合：**

1. **场景维度（Scenario）**
  - 每个场景：
    - 出现次数
    - 占比（占所有内容的百分比）
    - 正/负面比例
    - 代表性原话（Top N）

1. **痛点维度（Pain Point）**
  - 每个痛点：
    - 被提及次数
    - 与场景关联（在哪些场景下特别高发）
    - 与品牌 / ASIN 的关系（某竞品高发）

1. **人群维度（Persona）**
  - 各人群：
    - 对应的场景偏好
    - 价格敏感度（结合价格相关评论）
    - 主要痛点 / 主要赞美点

1. **国家 & 平台对比**
  - US vs DE：
    - 高频场景对比
    - 高频痛点对比
  - Amazon vs TikTok vs YouTube：
    - 平台用户讨论重心差异

---

### 3.5 洞察生成 & 报告

**洞察生成逻辑：**

- 调用 LLM，对【聚合指标 + 代表性原话 + 配置信息】进行总结。

- 输出结构化 JSON：
  - `consumer_portraits`（消费者画像）
  - `decision_journey`（决策链路）
  - `scenario_pain_insights`（场景 & 痛点）
  - `summary_recommendations`（总结 & 建议）

**报告导出：**

- 前端调用报告 API，得到结构化 JSON

- 渲染成：
  - 在线报告（前端拼页面）
  - 导出 Word/Markdown（MVP 可先导出 Markdown）

---

## 页面结构（前端）

### 4.1 页面 1：项目配置 / 新建洞察

**入口：** 「新建清洗机洞察项目」

**字段：**

- 项目名称（必填）

- 品类固定：Cleaning Washer（MVP 写死）

- 国家选择：US / DE（多选）

- 平台选择：Amazon（必选）、TikTok、YouTube（勾选）

- ASIN 列表：输入框 + 批量粘贴（1–10 个）

- 时间范围（可选 / MVP 默认近 6 个月）

**交互：**

- 点击「创建并开始分析」
  - 调用 `POST /projects` 创建项目
  - 触发后台数据采集任务 `POST /projects/{id}/crawl`

- 项目卡片：
  - 状态：待采集 / 采集中 / 分析中 / 已完成 / 失败
  - 点击进入项目详情。

---

### 4.2 页面 2：洞察总览 Dashboard（项目详情首页）

**模块布局：**

1. 顶部：项目概要
  - 国家、平台、ASIN 数量
  - 数据量：总内容条数、Review 条数、视频条数

1. 模块 1：**核心结论卡片**
  - Top 3 核心人群画像（简要）
  - Top 5 使用场景
  - Top 5 高发痛点
  - 一句话总结（LLM 生成）

1. 模块 2：**场景雷达 & 占比图**
  - 饼图/条形图：各场景出现占比
  - 切换 US / DE / 全部

1. 模块 3：**痛点列表**
  - 表格：
    - 痛点名称
    - 提及次数
    - 负面占比
    - 代表原话入口（查看详情）

1. 模块 4：**国家 / 平台对比**
  - US vs DE：
    - 场景占比对比条形图
  - Amazon vs TikTok vs YouTube：
    - 讨论焦点对比

**接口调用：**

- `GET /projects/{id}/overview`

- `GET /projects/{id}/scene-stats`

- `GET /projects/{id}/pain-stats`

- `GET /projects/{id}/market-compare`

---

### 4.3 页面 3：消费者画像 & 场景详情

**模块：**

1. 人群画像卡片列表
  - 如：
 -「US · Outdoor Camping Young」
 -「DE · Family Garden User」
  - 每个卡片显示：
    - 描述（LLM 总结）
    - 代表场景 top3
    - 价格敏感度（用简单标签：高/中/低）
    - 主要痛点 / 主要诉求

1. 场景详情列表
  - 左侧：场景列表（car wash / balcony / RV / pet wash 等）
  - 右侧：场景详情：
    - 场景描述（LLM 文本）
    - 关联人群
    - 正负面卖点 TOP
    - 代表原话列表（可展开查看原文）

**接口：**

- `GET /projects/{id}/personas`

- `GET /projects/{id}/scenarios`

- `GET /projects/{id}/scenario/{scenario_id}`

---

### 4.4 页面 4：内容 & 评价探索（Explorer）

**目的：** 方便运营同学 drill-down 看原始内容。

**功能：**

- 筛选条件：
  - 平台：Amazon / TikTok / YouTube
  - 国家：US / DE
  - 标签：场景 / 痛点 / 人群 / 情绪（多选）
  - ASIN（仅 Amazon）

- 列表展示：
  - 内容摘要 + 标签
  - 来源（Amazon Review / TikTok 评论等）
  - 时间
  - 情绪（小图标）

- 详情弹窗：
  - 原文 + 翻译
  - 标签列表
  - 可复制原文到剪贴板（用于写文案/报告）

**接口：**

- `GET /projects/{id}/contents`（支持分页 & 筛选参数）

- `GET /contents/{content_id}`

---

### 4.5 页面 5：报告生成 & 导出

**模块：**

- 报告预览区域：
  - 4 个部分：
    1. 消费者画像
    1. 决策链路
    1. 痛点 & 需求洞察
    1. 总结 & 建议（运营建议 / 选品建议）

- 支持选项：
  - 勾选要包含的模块
  - 选择语言：中文 / 英文（MVP：至少中文）

- 操作：
  - 「重新生成报告」 → 调用 Report API（会重新调用 LLM）
  - 「导出为 Markdown」 / 「复制到剪贴板」

**接口：**

- `POST /projects/{id}/report/generate`

- `GET /projects/{id}/report`（获取最新版本）

---

## API 大纲（REST 风格草案）

下面只列出关键接口和字段结构，方便技术做进一步 OpenAPI 设计。

---

### 5.1 项目 & 任务相关

#### 1）创建项目

`POST /projects`

```
{
  "name": "清洗机-US-DE-竞品洞察",
  "category": "cleaning_washer",
  "markets": ["US", "DE"],
  "platforms": ["amazon", "tiktok", "youtube"],
  "asins": ["B0XXXX", "B0YYYY", "B0ZZZZ"]
}
```

**Response**

```
{
  "project_id": "pj_123",
  "status": "pending"
}
```

#### 2）触发采集（如需要单独）

`POST /projects/{id}/crawl`

```
{
  "rebuild": false
}
```

#### 3）查询项目状态

`GET /projects/{id}`

```
{
  "project_id": "pj_123",
  "name": "清洗机-US-DE-竞品洞察",
  "status": "analyzing",
  "progress": 0.65,
  "stats": {
    "contents_total": 2560,
    "amazon_reviews": 1800,
    "tiktok_comments": 400,
    "youtube_comments": 360
  }
}
```

---

### 5.2 聚合数据 & 洞察

#### 1）概览

`GET /projects/{id}/overview`

```
{
  "core_summary": {
    "key_personas": [
      {"name": "US - Outdoor Camping Young", "weight": 0.32},
      {"name": "DE - Family Garden User", "weight": 0.27}
    ],
    "top_scenarios": [
      {"scenario": "car_wash", "ratio": 0.28},
      {"scenario": "garden_furniture", "ratio": 0.19}
    ],
    "top_pains": [
      {"pain": "battery_bad", "count": 120},
      {"pain": "low_pressure", "count": 95}
    ],
    "one_line_insight": "便携清洗机在 US 主要服务于年轻户外和车主，对电池续航和压力稳定极其敏感；DE 用户更注重耐用性与水压均衡。"
  },
  "stats": {
    "contents_total": 2560,
    "markets": ["US", "DE"],
    "platforms": ["amazon", "tiktok", "youtube"]
  }
}
```

#### 2）场景统计

`GET /projects/{id}/scene-stats?market=US`

```
[
  {
    "scenario": "car_wash",
    "display_name": "洗车",
    "count": 320,
    "ratio": 0.28,
    "positive_ratio": 0.71,
    "negative_ratio": 0.12
  },
  ...
]
```

#### 3）痛点统计

`GET /projects/{id}/pain-stats?market=DE`

```
[
  {
    "pain": "battery_bad",
    "display_name": "电池续航差",
    "count": 85,
    "scenario_top": ["car_wash", "RV_camping"]
  }
]
```

#### 4）人群画像列表

`GET /projects/{id}/personas`

```
[
  {
    "persona_id": "pe_1",
    "name": "US - Outdoor Camping Young",
    "markets": ["US"],
    "description": "25-35 岁的户外露营/自驾人群...",
    "scene_top": ["RV_camping", "car_wash"],
    "price_sensitivity": "high",
    "key_needs": ["portability", "battery_life"],
    "key_pains": ["battery_bad"]
  }
]
```

---

### 5.3 内容探索 API

`GET /projects/{id}/contents`

**Query 参数：**

- `platform`（可选）

- `market`（可选）

- `scenario`（可选）

- `pain`（可选）

- `sentiment`（可选）

- `page`, `page_size`

**Response 示例：**

```
{
  "page": 1,
  "page_size": 20,
  "total": 240,
  "items": [
    {
      "content_id": "ct_001",
      "platform": "amazon_review",
      "market": "US",
      "asin": "B0XXXX",
      "text_preview": "The battery only lasted for one car wash...",
      "sentiment": "negative",
      "scenarios": ["car_wash"],
      "pains": ["battery_bad"],
      "personas": ["US - Outdoor Camping Young"],
      "created_at": "2025-10-12T08:20:00Z"
    }
  ]
}
```

`GET /contents/{id}` 返回完整原文 + 标签。

---

### 5.4 报告 API

#### 1）生成报告

`POST /projects/{id}/report/generate`

```
{
  "language": "zh-CN",
  "sections": ["portrait", "journey", "scenario_pain", "summary"]
}
```

**Response**

```
{
  "report_id": "rp_001",
  "status": "generating"
}
```

#### 2）获取最新报告

`GET /projects/{id}/report`

```
{
  "report_id": "rp_001",
  "language": "zh-CN",
  "generated_at": "2025-11-24T10:12:00Z",
  "sections": {
    "portrait": "...markdown/HTML 内容...",
    "journey": "...",
    "scenario_pain": "...",
    "summary": "..."
  }
}
```

---

如果你愿意，下一步我可以帮你把：

- 「标签字典 & 规则」整理成一张 **Excel 设计表**（场景/需求/痛点/人群/情绪 → 关键词），

- 再单独给你写一份 **“清洗机 MVP 数据表结构设计（表名 + 字段 + 索引建议）”**，方便你直接交给开发/外包。

