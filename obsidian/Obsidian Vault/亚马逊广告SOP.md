https://my.feishu.cn/wiki/VRdCwBLqvicpoVkZ8FocKuEpnAf?from=from_copylink
# 亚马逊广告 SOP（标准操作流程）

  海王广告
  https://tianjikuajing.feishu.cn/wiki/Eh5CwAMyQiUSY6kknpncC4BBnsf?from=from_copylink

---

  

## 一、广告策略总览

  

### 1.1 广告目标层级

  

| 阶段 | 目标 | 核心指标 |

|------|------|----------|

| 新品期（0–30天）  | 曝光 & 积累数据 | 展示量、点击量、CTR |

| 成长期（31–90天） | 提升排名 & 控制ACOS | ACOS、转化率、BSR |

| 成熟期（90天+）   | 盈利 & 规模扩张 | TACOS、ROAS、广告利润 |

| 促销期            | 冲量 & 清库存 | 订单量、广告花费ROI |

  

### 1.2 广告类型选择矩阵

  

| 广告类型 | 适用场景 | 优先级 |

|----------|----------|--------|

| SP（Sponsored Products）| 任何阶段，核心广告 | ★★★★★ |

| SB（Sponsored Brands）  | 品牌旗舰店上线后 | ★★★★☆ |

| SD（Sponsored Display） | 再营销 / 类目拦截 | ★★★☆☆ |

| SBV（Sponsored Brands Video）| 有高质量视频素材 | ★★★★☆ |

  

---

  

## 二、新品期广告搭建 SOP

  

### 2.1 搭建前置条件

  

- [ ] Listing 已完整优化（标题 / 五点 / 描述 / A+ / 图片7张+）

- [ ] Review ≥ 0（新品允许0评，但15条以上效果更佳）

- [ ] 库存充足（预备至少60天销售量）

- [ ] 价格竞争力确认（参考竞品 & Buy Box）

  

### 2.2 广告组结构（推荐架构）

  

```

Campaign（广告活动）

  ├── Ad Group 1：自动投放（Auto）

  │     ├── 紧密匹配（Close Match）

  │     ├── 宽泛匹配（Loose Match）

  │     ├── 同类商品（Substitutes）

  │     └── 互补商品（Complements）

  └── Ad Group 2：手动精准（Exact）

        └── 核心关键词 × 精准匹配

```

  

### 2.3 新品期预算 & 竞价设置

  

| 参数 | 推荐值 | 备注 |

|------|--------|------|

| 日预算 | $20–$50 | 视类目竞争程度调整 |

| 自动广告竞价 | $0.50–$1.20 | 高于建议竞价10–20% |

| 手动精准竞价 | 建议竞价 × 1.2 | 新品需激进竞价 |

| 竞价策略 | 动态竞价-提高和降低 | 新品期抢曝光 |

  

### 2.4 关键词来源

  

1. **自动广告跑7天** → 下载搜索词报告 → 提取高点击词

2. **竞品ASIN反查** → Helium10 / Jungle Scout / Brand Analytics

3. **脑暴核心词** → 品类词 + 属性词 + 使用场景词

4. **长尾词补充** → 用途词 + 人群词 + 节日词

  

---

  

## 三、广告优化 SOP（周度执行）

  

### 3.1 每周操作时间表

  

| 操作日 | 任务 |

|--------|------|

| 每周一 | 下载搜索词报告，添加否定关键词 |

| 每周三 | 检查竞价表现，调整出价 ±10–20% |

| 每周五 | 将高转化搜索词升级为手动精准词 |

| 每月1日 | 月度复盘，预算 & 结构调整 |

  

### 3.2 关键词竞价调整规则

  

**提高竞价（+10–20%）条件：**

- ACOS < 目标 ACOS × 0.8

- 点击量高但展示量不足（排名不够）

- 关键词有转化，近7天订单 ≥ 3

  

**降低竞价（-10–20%）条件：**

- ACOS > 目标 ACOS × 1.3

- 连续14天点击无转化

- 单次点击成本 > 产品利润 × 30%

  

**暂停关键词条件：**

- 30天点击 ≥ 20次，0转化

- ACOS > 200% 且无改善趋势

  

### 3.3 搜索词否定操作规则

  

| 否定类型 | 适用场景 |

|----------|----------|

| 否定精准 | 该词已在手动精准组投放（避免内耗） |

| 否定词组 | 明显不相关词（如竞品品牌词、品类不符词） |

| 广告组级否定 | 仅针对特定广告组过滤 |

| 广告活动级否定 | 全局过滤，慎用 |

  

---

  

## 四、广告结构进阶 SOP（成长期）

  

### 4.1 STR（搜索词转移）操作流程

  

```

自动广告 → 发现高转化词

     ↓

添加至手动广告（精准匹配）

     ↓

在自动广告组中将该词设为【否定精准】

     ↓

手动精准组持续优化竞价

```

  

### 4.2 广告结构分层建议

  

```

Layer 1：捕获层（自动广告）

  - 目的：发现新词 / 低成本流量

  - 竞价：中等偏低

  

Layer 2：核心层（手动精准 - 核心词）

  - 目的：主要出单来源

  - 竞价：激进，保护排名

  

Layer 3：防御层（手动精准 - 品牌词）

  - 目的：防止竞品截流

  - 竞价：低，按需开启

  

Layer 4：扩展层（手动词组/宽泛）

  - 目的：长尾流量 / 新词发现

  - 竞价：中等

```

  

### 4.3 ASIN 定向广告（SD/SP）

  

**进攻策略：**

- 定向竞品 ASIN → 在竞品详情页展示广告

- 优先选价格更高、Review更少的竞品

  

**防守策略：**

- 定向自身 ASIN → 防止流量被竞品截走

- 适用于高销量核心 SKU

  

---

  

## 五、广告指标监控 SOP

  

### 5.1 核心指标参考基准

  

| 指标 | 健康范围 | 警戒线 |

|------|----------|--------|

| ACOS | 15–35%（视利润率） | > 50% |

| TACOS | 8–15% | > 20% |

| CTR | 0.3–0.5% | < 0.1% |

| 转化率 CVR | 10–25% | < 5% |

| CPC | 视类目，$0.3–$1.5 | > 利润的40% |

| 广告订单占比 | 30–50% | > 70%（依赖广告） |

  

### 5.2 异常情况处理流程

  

**CTR 突然下降：**

→ 检查主图是否被修改 → 检查价格竞争力 → 检查 Review 数量变化

  

**转化率下降：**

→ 检查 Listing 是否被篡改 → 检查 Review 负评 → 检查库存/发货时效

  

**ACOS 突然飙升：**

→ 检查竞价是否被调高 → 检查竞品是否加大投入 → 降低无效词竞价

  

**广告花费骤减：**

→ 检查预算是否耗尽 → 检查关键词竞价是否过低 → 检查广告状态

  

---

  

## 六、促销期广告 SOP（Prime Day / 黑五 / 节日大促）

  

### 6.1 大促前2周操作

  

- [ ] 将核心关键词竞价提升 30–50%

- [ ] 日预算提升至平时 2–3倍

- [ ] 开启 SB / SBV 广告，提升品牌曝光

- [ ] 检查 Lightning Deal / Coupon 是否设置完成

  

### 6.2 大促期间监控（每日）

  

- 上午9点：检查预算消耗进度

- 下午3点：检查 ACOS，决定是否加价

- 晚上9点：检查日预算是否即将耗尽，及时补充

  

### 6.3 大促后操作

  

- 大促结束后48小时内将竞价恢复正常水平

- 下载大促期间搜索词报告，挖掘新的高转化词

- 评估大促 ROI，复盘预算分配是否合理

  

---

  

## 七、广告报告使用 SOP

  

### 7.1 必备报告类型

  

| 报告名称 | 下载频率 | 核心用途 |

|----------|----------|----------|

| 搜索词报告 | 每周 | 发现新词 / 否定无效词 |

| 关键词表现报告 | 每周 | 竞价调整依据 |

| ASIN 表现报告 | 每月 | 评估广告素材效果 |

| 广告活动报告 | 每月 | 整体结构复盘 |

| 购买行为报告 | 每月 | 了解消费者行为路径 |

  

### 7.2 搜索词报告分析步骤

  

1. 下载过去7天搜索词报告

2. 筛选：点击量 ≥ 5 的词

3. 分类处理：

   - 有转化 + ACOS 达标 → 加入手动精准

   - 有转化 + ACOS 超标 → 降低竞价或否定

   - 无转化 + 点击 ≥ 15 → 否定

   - 无转化 + 点击 < 5 → 继续观察

  

---

  

## 八、广告账户健康检查清单（月度）

  

### 账户结构健康

  

- [ ] 广告活动命名规则统一（建议：品类_类型_日期）

- [ ] 每个广告活动关键词数量 ≤ 200

- [ ] 无重复关键词在多个手动精准组同时投放

- [ ] 自动广告组已设置必要否定词

  

### 投放效率健康

  

- [ ] TACOS 维持在目标范围内

- [ ] 广告订单占总订单比例 ≤ 50%

- [ ] 无长期亏损（ACOS > 100%）且点击 > 50次的关键词

- [ ] 预算利用率 > 80%（预算未被充分消耗需排查）

  

### 数据合规健康

  

- [ ] 广告花费与销售额数据核对无误

- [ ] 排除品牌词干扰后的 TACOS 指标正常

- [ ] 所有广告素材符合亚马逊政策（图片/视频规范）

  

---

  

## 九、常见问题 FAQ

  

**Q: 新品应该先开自动还是手动？**

A: 先开自动广告7–14天，积累数据后再同步开手动精准广告。

  

**Q: 广告预算应该怎么分配？**

A: SP 占 70%，SB 占 20%，SD 占 10%。新品期可100%投SP。

  

**Q: 什么时候该暂停广告？**

A: 库存不足15天时暂停广告，防止断货损伤排名与广告数据。

  

**Q: 自动广告和手动广告竞价哪个更高？**

A: 通常手动精准词竞价更高，自动广告作为辅助/探词工具维持中等竞价。

  

**Q: ACOS 高就要降预算吗？**

A: 不一定。先排查是关键词质量问题还是Listing转化问题，针对性处理比直接降预算更有效。

  

---

  

 广告知识
 止损版
 一个真正可以落地的 **“亚马逊广告止损版 Skill”** 详细跑一遍。这个 Skill 的作用不是简单粗暴地关广告，而是每天/每周读取广告数据，判断哪些词、ASIN、target、campaign 正在浪费钱，然后输出：**否词、否 ASIN、暂停、降 bid、降预算、继续观察、人工复核，监督， 复盘**。

  

---

  

# 一、Skill 名称

  

**Amazon PPC Stop-Loss Skill：广告止损、否词、否 ASIN 与预算保护系统**

  

核心目标：

  

```text

减少无效点击

控制广告流血

识别亏损 target

自动生成否词/暂停/降价建议

避免误杀潜力词

为后续扩量 Skill 提供干净数据

```

  

Amazon 官方也说明，Search Term Report 可以用来识别高表现搜索词，也可以用来创建不符合目标的 negative keywords 或 product targets；Sponsored Products 也支持 negative exact、negative phrase，以及 negative product targeting。Amazon 同时建议，在把关键词加入 negative target 之前，最好至少观察到约 20 次点击。([Amazon Ads][1])

  

---

  

# 二、Skill 的输入数据

  

这个 Skill 每次运行，需要这些数据。

  

## 1. Search Term Report

  

最重要。用于判断：

  

```text

哪些客户搜索词点击多但不出单（根据经验，出单临界值，和平均转化率来）

哪些搜索词 ACOS 太高（这个太高，定义，根据类目实际情况，一般ACOS>100%,可以适当关停和削减）

哪些 ASIN 点击多但不出单（比如目标ASIN下20点击不出单的进行否定）

哪些词应该否 exact（关键词精确否定）

哪些词应该人工检查后否 phrase（人工观察，确认以后，适当把精确否定改成词组否定）

```

  

字段建议：

  

```text

Date

Portfolio

Campaign Name

Ad Group Name

Targeting

Match Type

Customer Search Term

Impressions

Clicks

Spend

Sales

Orders

Units

ACOS

CPC

CTR

CVR

```

  

---

  

## 2. Targeting Report

  

用于判断：

  

```text

keyword target 是否该暂停（否词）

product target 是否该暂停（否ASIN）

auto targeting 里的 close match / loose match / substitutes / complements 是否亏损(自动广告 4个target类型)

```

  

字段建议：

  

```text

Campaign Name

Ad Group Name

Targeting

Match Type

Impressions

Clicks

Spend

Sales

Orders

ACOS

CPC

CVR

Bid

Status

```

  

---

  

## 3. Campaign Report

  

用于判断：

  

```text

campaign 是否整体流血（广告系统里面有没有浪费，设置整体预算，广告预算阈值）

预算是否浪费，广告系列跟广告组里面是否有在浪费，设置阈值

是否需要降低 daily budget（削减）

是否需要暂停 campaign（暂停）

```

  

字段建议：

  

```text

Campaign Name

Campaign Type

Targeting Type

Daily Budget

Spend

Sales

Orders

ACOS

ROAS

Status

```

  

---

  

## 4. 产品利润表

  

这个很关键。没有利润表，只用 ACOS 是不够的。需要根据目标ACOS,毛利率，以及目标CPA三者进行联合 预判

  

字段建议：

  

```text

ASIN

SKU

Selling Price

COGS

FBA Fee

Referral Fee

Other Fee

Gross Profit

Gross Margin

Break-even ACOS

Target ACOS

```

  

---

  

# 三、Skill 的核心参数

  

先设定参数，不然后面无法判断“浪费”。

  

## 1. 基础参数

  

```text

分析周期：最近 7 天

辅助周期：最近 14 天 / 30 天/ 90 天

最小观察点击：20 clicks

默认止损点击：35 clicks

最低花费判断：Max CPA

强制花费止损：1.5 × Max CPA

默认 Target ACOS：25% 或根据产品毛利设置

默认 Break-even ACOS：产品毛利率

```

  

Amazon 官方建议日预算可以从 $10 或等值货币开始，实际可随时调整；你前面说的“每天 $10，7 天 $70 不出单关闭”可以作为 campaign 级别的预算保护规则。([Amazon Ads][2])

  

---

  

## 2. 毛利与 ACOS 参数

  

```text

Break-even ACOS = 毛利率

Target ACOS = Break-even ACOS × 安全系数

```

  

例如：

  

```text

售价 = $25

产品成本 + FBA + 佣金 + 其他费用 = $16

毛利 = $9

毛利率 = 36%

  

Break-even ACOS = 36%

Target ACOS = 25% 或 30%

```

  

解释：

  

```text

ACOS 低于 Target ACOS：健康

ACOS 在 Target ACOS 和 Break-even ACOS 之间：可接受但需优化

ACOS 高于 Break-even ACOS：广告亏损

ACOS 高于 100%：严重流血

```

  

---

  

# 四、Skill 计算字段

  

每次导入数据后，先计算这些字段。

  

```text

CTR = Clicks / Impressions

CVR = Orders / Clicks

CPC = Spend / Clicks

CPA = Spend / Orders

ACOS = Spend / Sales

ROAS = Sales / Spend

Max CPA = Selling Price × Target ACOS

Break-even CPA = Selling Price × Break-even ACOS

Wasted Spend Ratio = Spend / Max CPA

目标CPC=ACOS*客单价*转化率

公式，CPC=ACOS*售价*CVR，CPA= CPC/CVR，ACOS=CPA/售价，

用全部毛利 去做广告，你的毛利率=ACOS之间关系，

  
  

举例比如我这个产品利润就只有6美金，如果转化率是8%，前期不考虑自然订单的情况下，你12.5个点击才能出1单，那么你的cpc就只能做到0.48是刚好的

举例比如我这个产品利润就只有6美金，如果转化率是8%，前期不考虑自然订单的情况下，你12.5个点击才能出1单，那么你的cpc就只能做到0.48是刚好的

```

  

如果 Orders = 0：

  

```text

CPA = 无限大

ACOS = 无限大

```

  

不要因为 ACOS 空白就认为安全。

**Spend > 0 且 Orders = 0，就是潜在浪费。**

  

---

  

# 五、止损 Skill 的判断层级

  

不要直接从 campaign 开始关。正确顺序是：

  

```text

搜索词层级

↓

关键词 / ASIN target 层级

↓

广告组层级

↓

Campaign 层级

```

  

原因是：

一个 campaign 流血，可能只是里面 1 个词或 1 个 ASIN 在烧钱。直接关 campaign 会误杀其他有效流量。

  

---

  

# 六、规则 1：搜索词无订单止损

  

这是最核心的规则。

  

## 规则逻辑

  

```text

IF Customer Search Term clicks >= 35

AND Orders = 0

AND Spend >= Max CPA

THEN 建议 Negative Exact

```

  

更稳健版本：

  

```text

IF Customer Search Term clicks >= max(20, 动态点击阈值)亚马逊建议 点击20次再观察，这个版本更稳健

AND Orders = 0

AND Spend >= Max CPA

THEN Negative Exact

```

  

Amazon 官方建议加否定目标前至少观察到 20 次点击，所以 Skill 里默认不要在 5 次、10 次点击时就自动否词，除非这个词明显不相关。([Amazon Ads][3])

  

---

  

## 示例

  

假设：

  

```text

产品售价 = $25

Target ACOS = 25%

Max CPA = $6.25

```

  

某搜索词：

  

```text

Search Term: pink lunch box for kids

Clicks: 38

Spend: $9.20

Orders: 0

Sales: $0

```

  

判断：

  

```text

Clicks >= 35

Spend >= $6.25

Orders = 0

```

  

输出：

  

```text

Action: Add Negative Exact

Reason: 35+ clicks no order, spend exceeded Max CPA

Risk Level: High

Review Required: Yes

```

  

---

  

# 七、规则 2：搜索词明显不相关止损（判断相关性，完全不相关直接否，不需要35次）

  

有些词不需要等 35 点击。

比如你卖高端新品，但搜索词里出现：

  

```text

free

used

second hand

replacement parts

manual

repair

cheap

DIY

pdf

instructions

wholesale

template

```

  

这些词是否要否，要看产品，但如果明显不相关，可以早一点处理。

  

## 规则逻辑

  

```text

IF Search Term contains irrelevant root word

AND Clicks >= 5

AND Orders = 0

THEN 人工复核后 Negative Phrase 或 Negative Exact

```

  

## Exact 和 Phrase 的区别

  

Amazon 的 negative exact 是阻止广告出现在完全匹配或接近变体的查询上；negative phrase 是阻止广告出现在包含完整短语或接近变体的查询上。Negative phrase 杀伤面更大，所以 Skill 默认优先 exact。([Amazon Ads][4])

  

## 输出建议

  

```text

Search Term: free lunch box

Clicks: 8

Spend: $2.40

Orders: 0

  

Action: Negative Phrase

Negative Keyword: free

Reason: 明显低购买意图词

Review Required: Yes

```

  

注意：

如果卖的是“cheap storage bins”，那 cheap 不一定要否。

所以这类规则必须人工复核。

  

---

  

# 八、规则 3：搜索词有订单但亏损

  

有订单的词，不要轻易否掉。

应该先降 bid，而不是直接否词。

  

## 规则逻辑

  

```text

IF Orders >= 1

AND ACOS > Break-even ACOS

AND Orders < 3

THEN 降 bid 20%–30%，继续观察

```

  

```text

IF Orders >= 3

AND ACOS > Break-even ACOS

THEN 降 bid 30%–50% 或暂停 target

```

  

```text

IF Orders >= 3

AND ACOS > Target ACOS × 2

THEN 暂停 target，人工复核是否否词

```

  

---

  

## 示例

  

```text

Search Term: insulated lunch bag women

Clicks: 42

Spend: $24

Orders: 2

Sales: $50

ACOS: 48%

Target ACOS: 25%

Break-even ACOS: 35%

```

  

判断：

  

```text

有订单

但 ACOS 48% > Break-even ACOS 35%

订单数只有 2

```

  

输出：

  

```text

Action: Lower Bid 30%

Reason: Converted but unprofitable

Do Not Negative Yet

Review Required: No

```

  

为什么不直接否词？

因为这个词能转化，说明相关性可能是对的，只是 bid 太高、价格不合适、listing 转化弱，或者广告位太贵。

  

---

  

# 九、规则 4：关键词 Target 止损

  

Search Term 是顾客实际搜的词。

Targeting 是你投放的关键词或 ASIN。

  

一个 target 下面可能匹配出很多 search terms，所以 target 级别要看整体表现。

  

## 无订单 target 止损

  

```text

IF Target clicks >= 35

AND Orders = 0

AND Spend >= Max CPA

THEN Pause Target

```

  

## 有订单但亏损

  

```text

IF Target Orders >= 2

AND Target ACOS > Break-even ACOS

THEN Lower Bid 20%–40%

```

  

## 严重亏损

  

```text

IF Target Orders >= 3

AND Target ACOS > Target ACOS × 2

THEN Pause Target

```

  

---

  

## 示例

  

```text

Targeting: lunch box

Match Type: Broad

Clicks: 120

Spend: $58

Orders: 2

Sales: $45

ACOS: 129%

```

  

判断：

  

```text

有订单，但 ACOS 极高

Broad 可能匹配了大量低质量搜索词

```

  

输出：

  

```text

Action 1: Lower Bid 40%

Action 2: 从 Search Term Report 里提取浪费词做 Negative Exact

Action 3: 不建议直接暂停整个 broad，除非 14 天仍亏损

```

  

---

  

# 十、规则 5：ASIN / Product Target 止损

  

ASIN 定投也会流血。

某些竞品页面点击很多，但你的产品价格、评分、图片、coupon 不占优势，就会一直烧钱不出单。

  

## ASIN 无订单止损

  

```text

IF Target ASIN clicks >= 30

AND Orders = 0

AND Spend >= Max CPA

THEN Negative Product Target 或 Pause Product Target

```

  

Amazon 官方资料也说明，negative product targeting 可以排除你不希望广告展示的商品或品牌，从而避免出现在无效位置。([Amazon Ads][2])

  

---

  

## ASIN 有订单但亏损

  

```text

IF Target ASIN Orders >= 2

AND ACOS > Break-even ACOS

THEN Lower Bid 20%–40%

```

  

## ASIN 严重亏损

  

```text

IF Target ASIN Orders >= 3

AND ACOS > Target ACOS × 2

THEN Pause ASIN Target

```

  

---

  

## 示例

  

```text

Target ASIN: B0XXXXXXX1

Clicks: 33

Spend: $11.40

Orders: 0

Max CPA: $6.25

```

  

输出：

  

```text

Action: Negative Product Target

Reason: ASIN target generated 30+ clicks, no orders, spend exceeded Max CPA

Review Required: Yes

```

  

---

  

# 十一、规则 6：Campaign 级别止损

  

Campaign 不应该是第一层止损，而是最后一层。

  

## 你的规则

  

```text

每天预算 $10

7 天预算 $70

7 天不出单关闭

```

  

可以优化成：

  

```text

IF Campaign Spend >= 7 × Daily Budget × 80%

AND Orders = 0

THEN 检查是否由少数 target 流血

```

  

如果是少数 target 流血：

  

```text

Pause target

不要关 campaign

```

  

如果整个 campaign 都没有有效 target：

  

```text

Pause campaign

或 Daily Budget 降到 $1–$3

```

  

---

  

## Campaign 关闭规则

  

```text

IF Campaign Spend >= 7-day Budget

AND Orders = 0

AND Top 80% Spend Targets also Orders = 0

THEN Pause Campaign

```

  

## Campaign 降预算规则

  

```text

IF Campaign ACOS > Break-even ACOS

AND Orders >= 2

AND 仍有部分有效 target

THEN Daily Budget 降低 30%–50%

```

  

## Campaign 保留规则

  

```text

IF Campaign 里有 1–2 个高转化词

AND 整体 ACOS 高

THEN 不关 campaign

先把浪费 search terms 否掉

再把高转化词转移到 Exact Campaign

```

  

---

  

# 十二、规则 7：新品保护期

  

新品广告不能太早止损。前期不要大量否词，避免流量的波动，削减

新品没有 review、没有排名、listing 还在学习阶段，前 7 天数据可能不稳定。

  

## 新品保护参数

  

```text

新品定义：上线 ≤ 14 天

或 Review < 5

或 总广告订单 < 5

```

  

## 新品期规则

  

```text

IF New Product = Yes

AND Clicks < 50

AND Spend < 2 × Max CPA

THEN Observe，不自动暂停

```

  

但明显不相关搜索词仍然可以否：

  

```text

IF Search Term clearly irrelevant

THEN Negative Exact / Phrase after review

```

  

---

  

# 十三、规则 8：防止误杀的安全机制

  

这个 Skill 必须有“误杀保护”。

  

## 不自动否的情况

  

以下情况不要自动否词：

  

```text

有订单

有加购数据但没有订单

搜索词高度相关但样本量小

新品期

促销前后数据异常

Prime Day / 黑五 / 网一期间

库存断货期间

Listing 被改动期间

价格突然上升期间

```

  

## 必须人工复核的动作

  

```text

Negative Phrase

Campaign Pause

ASIN Negative

高花费 Exact Keyword Pause

品牌词否定

竞品词否定

类目词否定

```

  

## 可以自动执行的动作

  

```text

低风险降 bid

Negative Exact 候选

暂停明显无订单 target 候选

输出 bulk sheet 草稿

```

  

---

  

# 十四、Skill 的动作优先级

  

当一个对象同时满足多个规则时，按这个顺序处理。

  

```text

1. 明显不相关 → Negative Exact / Phrase

2. 无订单且花费超过 Max CPA → Negative Exact 或 Pause Target

3. 有订单但亏损 → Lower Bid

4. Campaign 整体无订单 → 检查 target 后再暂停 campaign

5. 数据不足 → Observe

6. 新品保护 → 延长观察

```

  

---

  

# 十五、输出动作类型

  

Skill 最后不要只输出“关”。

要输出标准动作。

  

```text

NO_ACTION

OBSERVE

LOWER_BID_10

LOWER_BID_20

LOWER_BID_30

LOWER_BID_50

PAUSE_TARGET

PAUSE_CAMPAIGN

REDUCE_BUDGET

NEGATIVE_EXACT

NEGATIVE_PHRASE

NEGATIVE_PRODUCT

REVIEW_REQUIRED

LISTING_CHECK

```

  

---

  

# 十六、最终输出表格格式

  

Skill 每次运行后，输出 3 张表。

  

---

  

## 表 1：止损执行表

  

| Campaign          | Ad Group | Object Type | Object         | Clicks |  Spend | Orders | Sales | ACOS | Rule Hit        | Action           | Reason       |

| ----------------- | -------- | ----------: | -------------- | -----: | -----: | -----: | ----: | ---: | --------------- | ---------------- | ------------ |

| SP_AUTO_Discovery | AG1      | Search Term | lunch box free |     12 |  $3.80 |      0 |    $0 |    — | Irrelevant Term | Negative Phrase  | 低购买意图        |

| SP_KW_Broad       | AG1      |      Target | lunch box      |    120 |    $58 |      2 |   $45 | 129% | High ACOS       | Lower Bid 40%    | 有单但亏损        |

| SP_ASIN_Test      | AG1      |        ASIN | B0XXXX         |     33 | $11.40 |      0 |    $0 |    — | No Order ASIN   | Negative Product | 花费超过 Max CPA |

  

---

  

## 表 2：人工复核表

  

| Priority | Object                  | Suggested Action | Why Review      |

| -------: | ----------------------- | ---------------- | --------------- |

|     High | Negative Phrase: free   | Negative Phrase  | Phrase 可能误杀     |

|     High | Pause Campaign: SP_AUTO | Pause Campaign   | Campaign 级动作影响大 |

|   Medium | Negative ASIN B0XXXX    | Negative Product | 需要确认竞品关系        |

|   Medium | Pause broad keyword     | Pause Target     | Broad 可能仍有挖词价值  |

  

---

  

## 表 3：Bulk Sheet 准备表

  

Amazon Bulksheets 是用于批量创建和优化 sponsored ads campaign 的表格工具，适合批量处理 campaign、ad group、keyword、negative keyword、product target 等。([Amazon Ads][5])

  

| Record Type       | Operation | Campaign | Ad Group | Keyword / Product Targeting | Match Type     | State   |   Bid | Reason              |

| ----------------- | --------- | -------- | -------- | --------------------------- | -------------- | ------- | ----: | ------------------- |

| Negative Keyword  | Create    | SP_AUTO  | AG1      | lunch box free              | negativeExact  | enabled |     — | 无订单浪费               |

| Negative Keyword  | Create    | SP_AUTO  | AG1      | free                        | negativePhrase | enabled |     — | 低意图词                |

| Product Targeting | Update    | SP_ASIN  | AG1      | asin="B0XXXX"               | —              | paused  |     — | 30+ clicks no order |

| Keyword           | Update    | SP_KW    | AG1      | lunch box                   | broad          | enabled | $0.45 | ACOS 高，降 bid        |

  

---

  

# 十七、完整 Skill 执行流程

  

下面是这个 Skill 真正跑一遍的流程。

  

## Step 1：读取参数

  

```text

Product ASIN: B0ABCDE

Selling Price: $25

Gross Margin: 36%

Target ACOS: 25%

Break-even ACOS: 36%

Average CVR: 10%

Daily Budget: $10

Analysis Window: 7 days

Min Clicks Before Negative: 20

Default No-order Click Stop: 35

```

  

计算：

  

```text

Max CPA = $25 × 25% = $6.25

Break-even CPA = $25 × 36% = $9.00

```

  

---

  

## Step 2：读取 Search Term Report

  

样例数据：

  

| Search Term           | Clicks |  Spend | Orders | Sales | ACOS |

| --------------------- | -----: | -----: | -----: | ----: | ---: |

| lunch box for women   |     38 |  $8.90 |      0 |    $0 |    — |

| insulated lunch bag   |     44 | $18.00 |      2 |   $50 |  36% |

| free lunch box        |      8 |  $2.40 |      0 |    $0 |    — |

| kids lunch box        |     70 | $40.00 |      1 |   $25 | 160% |

| bento lunch box adult |     22 |  $5.10 |      0 |    $0 |    — |

  

---

  

## Step 3：逐条判断

  

### 1. lunch box for women

  

```text

Clicks = 38

Spend = $8.90

Orders = 0

Max CPA = $6.25

```

  

命中：

  

```text

Clicks >= 35

Spend >= Max CPA

Orders = 0

```

  

输出：

  

```text

Action: Negative Exact

Reason: 35+ clicks no order, spend exceeded Max CPA

```

  

---

  

### 2. insulated lunch bag

  

```text

Clicks = 44

Spend = $18

Orders = 2

Sales = $50

ACOS = 36%

Target ACOS = 25%

Break-even ACOS = 36%

```

  

命中：

  

```text

有订单

ACOS = Break-even ACOS

不是无效词

```

  

输出：

  

```text

Action: Lower Bid 10%–20%

Reason: 有转化，但接近盈亏线

Do Not Negative

```

  

---

  

### 3. free lunch box

  

```text

Clicks = 8

Spend = $2.40

Orders = 0

```

  

虽然点击不到 20，但包含明显低意图词：

  

```text

free

```

  

输出：

  

```text

Action: Negative Phrase Candidate

Negative Keyword: free

Review Required: Yes

Reason: 明显低购买意图

```

  

---

  

### 4. kids lunch box

  

```text

Clicks = 70

Spend = $40

Orders = 1

Sales = $25

ACOS = 160%

```

  

有订单，不能直接否词。

但是 ACOS 严重高于 Target ACOS 和 Break-even ACOS。

  

输出：

  

```text

Action: Lower Bid 50%

Secondary Action: Check listing relevance

Reason: 有转化但严重亏损

```

  

如果后续 14 天仍然：

  

```text

Orders >= 3

ACOS > 2 × Target ACOS

```

  

再考虑暂停 target。

  

---

  

### 5. bento lunch box adult

  

```text

Clicks = 22

Spend = $5.10

Orders = 0

Max CPA = $6.25

```

  

命中：

  

```text

Clicks >= 20

Orders = 0

但 Spend < Max CPA

```

  

输出：

  

```text

Action: Observe

Reason: 点击达到观察线，但花费还没有超过 Max CPA

```

  

---

  

# 十八、Skill 的规则配置文件

  

你可以把规则写成这样，后面方便自动化。

  

```yaml

skill_name: Amazon PPC Stop-Loss Skill

  

settings:

  analysis_window_days: 7

  support_window_days: 14

  min_clicks_before_negative: 20

  default_no_order_click_stop: 35

  strong_no_order_click_stop: 50

  spend_stop_multiplier: 1.0

  hard_spend_stop_multiplier: 1.5

  bid_down_low: 0.10

  bid_down_medium: 0.30

  bid_down_high: 0.50

  require_review_for:

    - negative_phrase

    - negative_product

    - pause_campaign

    - brand_keyword_negative

    - exact_keyword_pause

  

rules:

  search_term_no_order_stop:

    if:

      clicks_gte: max(20, 35)

      orders_eq: 0

      spend_gte: max_cpa

    then:

      action: negative_exact

      review_required: true

  

  irrelevant_term_stop:

    if:

      contains_irrelevant_root: true

      clicks_gte: 5

      orders_eq: 0

    then:

      action: negative_phrase_candidate

      review_required: true

  

  converted_but_unprofitable:

    if:

      orders_gte: 1

      acos_gt: break_even_acos

    then:

      action: lower_bid

      bid_change: -30%

      review_required: false

  

  severe_acos_stop:

    if:

      orders_gte: 3

      acos_gt: target_acos * 2

    then:

      action: pause_target

      review_required: true

  

  asin_no_order_stop:

    if:

      object_type: asin

      clicks_gte: 30

      orders_eq: 0

      spend_gte: max_cpa

    then:

      action: negative_product

      review_required: true

  

  campaign_no_order_stop:

    if:

      campaign_spend_gte: daily_budget * 7

      campaign_orders_eq: 0

    then:

      action: pause_campaign_candidate

      review_required: true

```

  

---

  

# 十九、可以直接使用的 Skill Prompt

  

你可以把下面这段作为这个 Skill 的正式提示词。

  

```text

你是一个 Amazon Ads PPC 止损分析 Skill。

  

你的任务是读取 Sponsored Products 的 Search Term Report、Targeting Report、Campaign Report 和产品利润表，基于最近 7 天、14 天、30 天数据，识别广告浪费，并输出止损动作。

  

你必须完成以下步骤：

  

1. 读取产品售价、毛利率、Target ACOS、Break-even ACOS、平均 CVR。

2. 计算 Max CPA、Break-even CPA、CVR、CPC、CPA、ACOS、ROAS。

3. 对每个 Customer Search Term 判断：

   - 是否点击达到观察阈值

   - 是否无订单

   - 是否花费超过 Max CPA

   - 是否明显不相关

   - 是否有订单但亏损

4. 对每个 Keyword Target 和 Product Target 判断：

   - 是否点击多无订单

   - 是否有订单但 ACOS 高

   - 是否应该降 bid、暂停、继续观察

5. 对每个 Campaign 判断：

   - 是否 7 天花费接近或超过预算

   - 是否 0 订单

   - 是否只是少数 target 流血

   - 是否需要暂停 campaign 或降低预算

6. 输出三张表：

   - 止损执行表

   - 人工复核表

   - Bulk Sheet 准备表

7. 所有 Negative Phrase、Negative Product、Pause Campaign、品牌词否定，都必须标记 Review Required。

8. 有订单的词不要直接否定，优先建议 Lower Bid。

9. 新品期、库存异常、促销期、样本量不足时，优先 Observe。

10. 默认不要在少于 20 clicks 的情况下自动否词，除非搜索词明显不相关。

  

输出字段必须包括：

Campaign

Ad Group

Object Type

Object

Clicks

Spend

Orders

Sales

ACOS

CVR

Max CPA

Rule Hit

Recommended Action

Reason

Review Required

Bulk Sheet Operation

```

  

---

  

# 二十、第一版 Skill 的默认规则

  

你可以先用这一版：

  

| 层级             | 条件                             | 动作                 |

| -------------- | ------------------------------ | ------------------ |

| Search Term    | ≥35 clicks，0 单，Spend ≥ Max CPA | Negative Exact     |

| Search Term    | 明显不相关，≥5 clicks，0 单            | Negative Phrase 候选 |

| Search Term    | 有单，ACOS > Break-even ACOS      | 降 bid              |

| Search Term    | ≥3 单，ACOS > Target ACOS × 2    | 暂停 target 候选       |

| Keyword Target | ≥35 clicks，0 单，Spend ≥ Max CPA | Pause Target       |

| ASIN Target    | ≥30 clicks，0 单，Spend ≥ Max CPA | Negative Product   |

| Campaign       | 7 天花费 ≥ 7 天预算，0 单              | 暂停 campaign 候选     |

| Campaign       | 整体亏损但有有效词                      | 降预算，不直接关           |

| 新品             | 数据不足                           | Observe            |

| 品牌词            | 亏损                             | 人工复核，不自动否          |

  

---

  

# 二十一、这个 Skill 最终输出的判断逻辑

  

一句话总结：

  

```text

无订单 + 点击够 + 花费够 = 止损

有订单 + ACOS 高 = 降 bid

明显不相关 = 否词

ASIN 点击多无单 = 否 ASIN

Campaign 花光预算无单 = 暂停候选

数据不足 = 继续观察

```

  

最适合你的第一版止损逻辑是：

  

```text

最近 7 天：

- 35 点击不出单，且花费超过 Max CPA → 否 exact 或暂停 target

- 7 天花费达到预算上限仍 0 单 → 暂停 campaign 候选

- ACOS > Break-even ACOS → 降 bid

- ACOS > 100% 且订单数 ≥ 3 → 暂停 target 候选

- ASIN 30 点击不出单 → Negative Product 候选

- 明显不相关词 → 人工复核后 Negative Phrase

```

  

这样这个 Skill 就不是单纯的“关广告工具”，而是一个完整的 **PPC 防流血系统**：

它会优先从最细颗粒度止损，减少广告浪费，同时保留还可能转化的流量。

  

[1]: https://advertising.amazon.com/help/G3HEFZYWZF84NPS9?utm_source=chatgpt.com "Search term report for Sponsored Products"

[2]: https://advertising.amazon.com/library/guides/sponsored-products-best-practices?utm_source=chatgpt.com "Best practices for your Sponsored Products ads"

[3]: https://advertising.amazon.com/library/guides/targeting-with-sponsored-products?utm_source=chatgpt.com "A guide to targeting with Sponsored Products"

[4]: https://advertising.amazon.com/help/GTEHPEG5BXY9UX5W?utm_source=chatgpt.com "Add negative keywords or negative products"

[5]: https://advertising.amazon.com/API/docs/en-us/bulksheets/2-0/overview-about-bulksheets?utm_source=chatgpt.com "Bulksheets overview"