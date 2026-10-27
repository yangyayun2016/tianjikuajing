# 06 · SIF 价值打法完整六步（最新路径）+ TF + 算法伪代码

> 来源：刘松《COSMO & Rufus 引领的亚马逊广告 3.0 时代》价值打法 + ChatGPT share 整理的 V2 路径。

## 核心信条

> **投放广告的核心不是关键词，而是具体的消费者需求。**  
> 关键词只是消费者需求的外显表达；打标的目的不是把词分好类，而是把「需求」识别出来，再用自己的产品供给去匹配需求，最后形成广告、Listing、视觉、选品的统一打法。

平台背景：

- **COSMO**：洞察并匹配消费者搜索意图
- **Rufus**：通过对话匹配消费者需求
- **PMF（Product Market Fit）** 是一切营销基础——先把产品卖给最需要它的人

注意事项（PDF）：

1. 价值打法不止适用于关键词投放，也可指导商品投放和自动投放
2. 更适用于非标品，但「以消费者需求为中心」适用于任何产品
3. **一定要做词库**——词库就是目标市场

拓展问题：标题/图片突出什么？新品打大词还是长尾？要不要自动？测款测的是供给与需求匹配程度；从关注表象到关注本质：人。

---

## 总路径

```text
关键词词库
→ 消费者需求拆解
→ 词频统计
→ 需求分类
→ 需求大小评估
→ 产品供给匹配
→ 价值点验证
→ 广告结构搭建
→ 投放词与匹配模式规划
→ 按搜索量集中度拆分广告活动
→ 数据回流
→ Listing / 视觉 / 产品 / 广告迭代
```

一句话：

> **先从关键词里还原需求，再用产品卖点匹配需求，最后围绕已验证需求放大流量。**

最终价值公式：

```text
关键词价值 =
消费者需求强度 × 产品供给匹配度 × 广告验证结果 × 可规模化程度
```

> **始于关键词，落到需求；始于投放，回到产品价值。**

---

## 第一步：搭建词库（收集消费者需求）

不是简单收集关键词，而是收集**目标市场里的需求表达**。

| 数据来源 | 作用 |
|----------|------|
| ABA 搜索词 | 市场真实搜索需求 |
| 广告 Search Term | 真实点击与转化需求 |
| 竞品标题/五点/A+ | 竞品正在表达的供给 |
| 竞品评论 | 用户真实痛点、期待和满意点 |
| 竞品 Q&A | 购买前顾虑 |
| 类目词/属性词 | 平台标准需求维度 |
| 站外热词 | 趋势、审美、情绪、流行元素 |
| 自己产品卖点 | 后续供给匹配用 |

词库基础字段见 `04`。

---

## 第二步：通过词频统计整理消费者需求分类

**不要先按广告活动分词，而是先按消费者需求分词。**

### TF / Term Frequency 说明

> **TF（Term Frequency）**：某个词汇在某个文件（或词库语料）中出现的频率，即出现次数。在信息检索和文本挖掘中用于衡量词汇对文本的重要性。

在关键词打标里：

> 某个词根、元素、属性、需求点，在整个关键词词库中出现的频率。

例（hair clips）：

```text
claw clips for thick hair
large claw clips
matte claw clips
small claw clips
flower claw clips
```

claw×5，clips×5，thick hair×1，large×1，matte×1，flower×1 → 基础词频。

### 双词频

#### A. 出现次数词频

```text
TF_count(t) = 包含标签 t 的关键词数量
```

回答：这个需求在词库里被提到了多少次？

#### B. 搜索量加权词频

```text
TF_weighted(t) = Σ 关键词搜索量 × 是否包含标签 t
```

无搜索量、仅有 ABA 排名时：

```text
ABA权重 w(rank) = 1 / ln(ABA排名 + 1)
TF_weighted(t) = Σ w(rank) × 是否包含标签 t
```

回答：这个需求背后有多大的真实搜索需求？排名越前权重越大，避免被海量长尾稀释。

### 消费者需求词频表字段

| 字段 | 说明 |
|------|------|
| 词根/元素 | thick hair / claw / flower / black |
| 中文翻译 | 厚发 / 抓夹 / 花朵 / 黑色 |
| 搜索需求分类 | 目标受众 / 功能特征 / 风格款式 / 颜色 … |
| 出现次数词频 | TF_count |
| 出现次数占比 | 出现次数 / 总关键词数 |
| 搜索量加权词频 | TF_weighted |
| 搜索需求占比 | 该词加权 / 总加权 |
| 代表关键词 | 典型关键词 |
| 相关产品卖点 | 自己产品是否能承接 |
| 是否适合投放 | 是 / 否 / 待验证 |
| 备注 | 侵权、低相关、季节性等 |

### 18 类搜索需求分类（固定一级类）

| 一级分类 | 解释 | 示例 |
|----------|------|------|
| 品类名称 | 产品本体词 | hair clips, claw clips, barrettes |
| 目标受众 | 谁用 / 谁买 | women, girls, baby, toddler |
| 使用场景 | 在哪里用 / 什么时候用 | wedding, school, work, party |
| 功能特征 | 解决什么功能问题 | no slip, strong hold, sectioning |
| 风格款式 | 审美和造型 | y2k, vintage, cute, minimalist |
| 颜色 | 颜色需求 | black, brown, gold, pink |
| 材质材料 | 材质需求 | metal, acrylic, plastic, velvet |
| 尺寸大小 | 大小规格 | large, small, mini, jumbo |
| 容量 | 容量型产品适用 | 32oz, large capacity |
| 参数 | 技术/规格参数 | voltage, size, count, length |
| 主题元素 | 图案、造型、元素 | flower, butterfly, star, bow |
| 品牌 | 品牌或竞品词 | scunci, goody, kitsch |
| 季节 | 季节性需求 | summer, winter |
| 节日 | 节日礼品需求 | Christmas, Halloween, Valentine |
| 兼容搭配 | 和什么搭配 | for thick hair, for curls |
| 配件 | 附属件/耗材 | replacement, organizer, case |
| 其他需求 | 无法归入主类 | bulk, wholesale, aesthetic |
| 风险词 | IP、低相关、侵权等 | Disney, Barbie, trademark terms |

（与 12 维对齐时，痛点/情绪可扩展并入痛点维/情绪维。）

---

## 第三步：用自己产品的卖点（供给）反向匹配市场需求

> 不是市场有什么词就全部打，而是先判断：这个需求我能不能满足？强不强？大不大？竞争强不强？值不值得投？

### 供给卖点表（例：hair clips）

| 自己产品卖点 | 对应需求分类 | 可承接关键词 |
|--------------|--------------|--------------|
| 大号抓夹 | 尺寸大小 | large claw clips |
| 强抓力 | 功能特征 | strong hold hair clips |
| 适合厚发 | 目标受众/发质 | claw clips for thick hair |
| 哑光质感 | 风格款式/外观 | matte claw clips |
| 花朵造型 | 主题元素 | flower hair clips |
| 多件套 | 参数/套装 | hair clips pack |
| 女孩可用 | 目标受众 | hair clips for girls |
| 婚礼造型 | 使用场景 | wedding hair clips |

### 供给匹配 0/1/3

| 分值 | 含义 | 示例 |
|------|------|------|
| 0 | 无法满足 | 搜 metal clip，产品是塑料 |
| 1 | 弱满足/间接满足 | 搜 thick hair，产品可用但无强抓力设计 |
| 3 | 强满足/核心卖点 | 产品主打 strong hold for thick hair |

### 需求价值评分

```text
需求分 Demand =
搜索量加权词频 × 0.7
+ 出现次数词频 × 0.3

Value Score =
需求分 × 0.4
+ 供给匹配分 × 0.3
+ 评论痛点强度 × 0.15
+ 转化信号 × 0.1
+ 利润/可做性 × 0.05
```

（算法伪代码节另有 Demand Score 0.6/0.25/0.15 变体，落地时选定一版写进规则说明。）

### 评论分析并入需求

| 评论内容 | 标签类型 | 作用 |
|----------|----------|------|
| doesn’t hold thick hair | 痛点 | 厚发抓力不足 |
| too small | 尺寸痛点 | 需要 large/jumbo |
| cute design | 情绪/风格 | 可爱外观被认可 |
| breaks easily | 质量痛点 | 耐用性机会 |
| great for wedding | 场景 | 婚礼使用场景 |
| my daughter loves it | 人群/情感 | 女孩/亲子购买 |

评论输出三类：

1. **已验证价值**：用户明确满意的点  
2. **未满足需求**：用户抱怨但竞品没解决的点  
3. **情绪需求**：用户为什么喜欢或讨厌  

例：关键词 `claw clips for thick hair` + 评论痛点 + 自家 strong hold → **高价值需求词，适合主推**。

需求概览矩阵维度：品类名称、目标受众、使用场景、功能、特性、风格、款式、颜色、尺寸/大小、容量、参数、主题元素、品牌、材质、季节、节日、兼容、搭配、配件、其他需求。

---

## 第四步：以消费者需求为中心搭建广告框架

从「关键词 → 广告活动」升级为：

```text
需求点 → Campaign → Ad Group → Keyword → Match Type
```

结构模板：

```text
产品组合 / Portfolio
  └── 需求大类 Campaign
        └── 需求细分 Ad Group
              └── 关键词 Keyword
                    └── 匹配模式 Match Type
```

hair clips 例：

```text
Campaign 1：厚发强抓力需求
  Ad Group：claw clips for thick hair / large claw clips / strong hold …

Campaign 2：造型风格需求
  Ad Group：flower / butterfly / y2k …

Campaign 3：人群需求
  Ad Group：girls / baby / toddler …

Campaign 4：场景需求
  Ad Group：wedding / party / school …
```

---

## 第五步：整理需求点对应关键词，规划投放词和匹配模式

| 需求状态 | 关键词类型 | 匹配模式 | 目的 |
|----------|------------|----------|------|
| 高需求 + 高匹配 | 核心转化词 | Exact | 价值验证/控转化 |
| 中高需求 + 长尾 | 场景/人群/功能词 | Phrase | 拓展精准流量 |
| 需求不确定 | 宽泛需求词 | Broad | 探索新搜索词 |
| 已验证价值点 | 大词/核心词 | Exact + Phrase | 放量 |
| 竞品强相关 | 竞品 ASIN / 品牌词 | 商品投放 | 抢竞品流量 |
| 未知需求 | 自动广告 | Close/Substitutes | 挖词和语义扩展 |

投放分层：

| 层级 | 类型 | 示例 | 动作 |
|------|------|------|------|
| S | 高需求高匹配 | claw clips for thick hair | 精准，单独预算 |
| A | 高机会长尾 | matte large claw clips | Phrase/Exact 测试 |
| B | 中机会探索 | cute hair clips | Phrase/Broad |
| C | 低相关不确定 | salon tools | 小预算探索 |
| R | 风险词 | IP/授权/竞品商标 | 谨慎或否定 |

标签组合 → 匹配建议（对齐 Canvas）：

| 标签组合 | 匹配建议 | 广告动作 |
|----------|----------|----------|
| 核心产品词 + 高转化 | Exact | Exact Campaign / SKAG |
| 场景词 + 人群词 | Phrase | Phrase Campaign |
| 情绪 / 需求词 | Broad | Broad 探索 |
| 痛点词 | Phrase / Exact | 对比/竞品广告组 |
| 节日礼品词 | Phrase / Exact | 季节广告组 |

---

## 第六步：根据关键词的搜索量集中度拆分广告活动

PDF 备注：同一价值点下搜索量很大的关键词，可单独拆 SKAG，防流量过度集中；**最终评估要把同一价值点数据合并综合评估**。

```text
单词搜索占比 = 某关键词搜索量 / 该需求点总搜索量
Top3 搜索集中度 = Top3 搜索量 / 该需求点总搜索量
```

| 条件 | 动作 | 评估注意 |
|------|------|----------|
| 单关键词占比 ≥ 30% | 单独 Campaign / SKAG | 同价值点最终合并评估 |
| Top3 合计 ≥ 60% | Top3 单独拆组 | 防流量过度集中 |
| 搜索量分散 | 按需求主题合并广告组 | — |
| 词量少但转化强 | Exact 小预算验证 | — |
| 搜索量大但供给弱 | 谨慎测试，不主推 | — |
| 搜索量小但评论痛点强 | 长尾精准测试 | — |

厚发强抓力示例：`claw clips for thick hair` 42% → 单独 Campaign；其余合并测试；整体合并看「厚发强抓力需求」表现。

---

## 价值验证三阶段

### 阶段 1：价值验证

目标：验证需求点是否真能为产品带来点击和转化。

操作：Exact + Phrase；小预算；按需求点分组；控制变量。

指标：CTR、CVR、CPC、ACOS、Search Term 是否拓展出相似需求。

### 阶段 2：基于已验证价值的流量拓展

搜索页：精准 + 词组；商品详情页：目标 ASIN、高度相似竞品、已验证流量来源 ASIN。

### 阶段 3：流量泛化

Broad、自动、商品投放扩展、类目投放、Listing/主图/A+ 强化需求表达。

记住：`CPC = ACOS × 售价 × CVR`（详见 `07`）。

---

## 完整算法伪代码

### 输入

```text
Keyword_i:
- keyword
- search_volume 或 ABA_rank
- click_share
- conversion_share
- source
- category
- related_asin
```

### Step 1–3：清洗与抽取

见上文 `normalize` / `extract_elements` / `match tag_dictionary`。

### Step 4：词频

```text
TF_count(tag) = Σ 是否出现 tag
TF_weighted(tag) = Σ keyword_weight_i × 是否出现 tag
keyword_weight_i = search_volume_i
# 或
keyword_weight_i = 1 / ln(ABA_rank_i + 1)
```

### Step 5：需求强度

```text
Demand Score =
标准化搜索量加权词频 × 0.6
+ 标准化出现次数词频 × 0.25
+ 转化信号 × 0.15
```

转化信号：ABA 购买份额、广告 CVR、订单数、评论正向提及。

### Step 6：供给匹配

```text
Supply Fit = 3 | 1 | 0
```

### Step 7：价值机会

```text
Value Opportunity Score =
Demand Score × 0.4
+ Supply Fit × 0.3
+ Review Pain Gap × 0.15
+ Competition Advantage × 0.1
+ Profit Feasibility × 0.05
```

### Step 8：广告动作判断

```text
if Demand高 and SupplyFit=3: S级，Exact+Phrase，独立预算
if Demand中高 and SupplyFit=3: A级，Phrase+Exact测试
if Demand高 and SupplyFit=1: B级，小预算验证
if Demand低 and SupplyFit=3: C级，Listing收录/低预算
if SupplyFit=0: 不主推，可否定或观察
if IP/品牌风险: 风险词，谨慎或剔除
```

### 最终输出表字段（SIF 打标结果）

原始关键词、清洗关键词、中文翻译、搜索需求分类、品类名称、目标受众、使用场景、功能特征、风格款式、颜色、材质材料、尺寸大小、容量、参数、主题元素、品牌、季节、节日、兼容搭配、配件、其他需求、出现次数词频、搜索量加权词频、需求强度、自身卖点匹配、评论痛点匹配、价值机会分、机会等级、推荐广告结构、推荐匹配模式、Listing用途、视觉用途、选品用途、备注。
