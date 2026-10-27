# ChatGPT 分享全文镜像

> 源链接：https://chatgpt.com/share/6ae0608d-97f0-83ea-99c6-b2f8bef41897
> 标题：亚马逊关键词打标系统
> 抓取时间：2026-10-27 Asia/Shanghai；由分享页 loader 数据还原，UTF-8。

---

## 轮次 1 · 用户 · 2026-04-28 14:11 Asia/Shanghai

现在需要做一个亚马逊关键词打标系统，主要是针对亚马逊关键词，标签，拆解和分类，需要把多个标签进行分类，然后结合实际关键词词库数据进行打标，我举例说明，场景，人群，情感，特征，属性，材质，外观，尺寸，容量，数据层，  类目数据关键词数据，就【竞品】前台页面数据，后台属性数据，评论数据，， 清洗 ，打标， 颗粒度，0-1-3，法则，标签/元素迁移重组，标签的构成 材质外观，特征属性容量，参数，个人喜好，人群，场景，技术，情感/情绪，亲子陪伴，孩子教育，老人关照，品牌关注，价值认同，身份地位认同，自尊要面子，情感互动氛围，亲子陪伴爱呵护，注意力，关注力学习，购买意图，消费路径购买旅途，心理学社会学，金字塔马斯洛的需求层次理论——金字塔 分為五層：生理、安全、愛與歸屬、尊重與自我實現
消费人群画像分析，购买路径 消费历程，心理学，心智 情感需求 情绪，意图  价格 性价比， 情感 消费行为分析 心理分析
流量抓手，关键词抓手，核心卖点，视觉营销，深究 重合，市场需求 广告，运营，视觉，评论，比重颗粒 亚马逊站内70%, 站外20%,  品牌 线下 趋势10%
原子级数据颗粒，

外观，功能，技术，尺寸，颜色，材质，参数，属性，人群，场景，情感，情绪，价值主张，价值认同，产品标签
产品配件，产品个数（X套装），包装属性（外包装）里【礼品属性】， 节假日，特定场景节日，特定人群
需求端， 供给端，各个因素
情感，期待，痛点吐槽， 站外的呼声，创新的声音，流行趋势，需求 角色 待办事项，  
匹配 自己的画像-盘子优势，前置条件， 然后看数据盘 符合自己不，各个维度看 in the end综合下，
进入难易程度，机会指数（竞争程度）需求/供给， 市场趋势

---

## 轮次 2 · 助手 · 2026-04-28 14:11 Asia/Shanghai

我先把你这段需求整理成可落地的“标签体系 + 数据流 + 打标规则 + 机会指数”方案；其中亚马逊站内字段我会按可执行的数据层来拆，不只停留在概念分类。

---

## 轮次 3 · 助手 · 2026-04-28 14:12 Asia/Shanghai

我会把它拆成两层：一层是“标签本体/词典”，一层是“数据打标流水线”。核心不是标签越多越好，而是每个关键词能被拆成可计算的原子标签，再组合成运营、广告、视觉、选品能用的策略标签。

---

## 轮次 4 · 助手 · 2026-04-28 14:12 Asia/Shanghai

你现在要做的不是简单的“关键词分类表”，而是一个 **Amazon Keyword-to-Tag Intelligence System：亚马逊关键词原子级打标系统**。

它的核心目标是：

> 把关键词、竞品页面、后台属性、评论、广告搜索词、站外趋势等数据，拆成“原子标签”，再组合成“人群-场景-需求-情绪-卖点-广告-视觉-机会”的可执行决策。

亚马逊前台详情页本身就包含标题、图片、五点、描述、变体、评论等可采集信号；后台/接口层也可以通过商品类型定义、Catalog/Listings 等方式理解类目属性要求；广告侧关键词还存在 broad、phrase、exact 等不同匹配逻辑，所以这个系统要同时服务 **SEO、广告、视觉、评论洞察、选品和机会判断**。citeturn361445search16turn361445search10turn361445search0

---

# 一、系统总框架

建议把系统分成 5 层：

## 1. 数据层

来源可以分为：

| 数据层 | 数据来源 | 主要用途 |
|---|---|---|
| 类目层 | 类目树、类目属性、后台属性字段 | 建立基础标签边界 |
| 竞品前台层 | 标题、五点、A+、图片文案、变体、价格、评分、Review 数 | 抽取卖点、属性、场景、人群 |
| 后台属性层 | 材质、尺寸、容量、颜色、兼容性、适用人群等 | 标准化产品属性标签 |
| 评论层 | 好评、差评、Q&A、痛点、吐槽、期待 | 抽取情绪、痛点、真实需求 |
| 广告层 | Search Term、点击、转化、ACOS、CPC、曝光 | 判断购买意图和关键词价值 |
| 站外层 | TikTok、Google Trends、Pinterest、Reddit、社媒评论 | 捕捉趋势、创新声音、情绪需求 |
| 品牌/线下层 | 品牌定位、线下反馈、展会趋势 | 判断长期价值认同 |

你提到的比例可以先作为第一版权重：

> **站内 70% + 站外 20% + 品牌/线下/趋势 10%**

站内 70% 里面再细分：关键词/广告 30%，竞品页面 20%，评论 20%。

---

# 二、标签体系：不要平铺，要做“标签本体”

建议主标签分成 12 个一级维度。

## 1. 产品基础标签

用于定义“这是什么”。

包括：

产品类目、产品部件、产品配件、套装数量、包装方式、礼盒属性、替换件、兼容件。

例子：

- water bottle
- lunch box
- replacement lid
- 3 pack
- gift box
- travel set

---

## 2. 物理属性标签

用于定义“长什么样、什么材料、什么规格”。

包括：

材质、颜色、外观、形状、尺寸、容量、重量、参数、工艺。

例子：

- stainless steel
- silicone
- clear
- pink
- 32 oz
- large capacity
- foldable
- matte finish

---

## 3. 功能标签

用于定义“能解决什么功能问题”。

包括：

防水、防漏、保温、便携、收纳、快充、耐摔、防滑、抗菌、可调节。

例子：

- leakproof
- insulated
- portable
- easy clean
- non slip
- rechargeable

---

## 4. 技术标签

用于定义“靠什么技术实现”。

包括：

芯片、传感器、算法、过滤技术、材料技术、兼容协议、结构专利。

例子：

- Bluetooth 5.3
- HEPA filter
- noise cancelling
- USB-C fast charging
- BPA free
- vacuum insulated

---

## 5. 人群标签

用于定义“谁买、谁用、谁送”。

包括：

儿童、学生、父母、老人、宠物主人、上班族、户外人群、新手妈妈、专业人士、礼品购买者。

例子：

- for kids
- for toddler
- for elderly
- for mom
- for dad
- for students
- for office workers

---

## 6. 场景标签

用于定义“在哪里用、什么时候用”。

包括：

家庭、学校、办公室、旅行、露营、健身、节日、生日、婚礼、开学季、圣诞节、母亲节。

例子：

- for school
- for camping
- for travel
- birthday gift
- Christmas gift
- back to school
- office desk

---

## 7. 需求标签

用于定义“用户真正想解决什么”。

包括：

安全、便利、省时、陪伴、教育、舒适、效率、秩序、健康、保护、仪式感。

例子：

- safe for kids
- save space
- easy to carry
- reduce mess
- help focus
- protect family

---

## 8. 痛点标签

用于定义“用户为什么不满意”。

来自差评、Q&A、退货理由、竞品缺陷。

包括：

容易坏、太小、漏水、异味、难清洗、不兼容、说明不清楚、包装差、价格高。

例子：

- too small
- leaks
- hard to clean
- poor packaging
- not durable
- missing parts

---

## 9. 情绪/情感标签

用于定义“用户买它时的心理感受”。

包括：

安心、爱、呵护、陪伴、惊喜、焦虑、担心、愤怒、失望、自豪、体面、愉悦。

例子：

- peace of mind
- love and care
- proud parent
- worry free
- thoughtful gift
- premium feeling

马斯洛需求层次可以作为心理标签的上层映射：生理、安全、爱与归属、尊重、自我实现五层模型常被用于解释人类动机。你这里可以把它转成消费需求，而不是机械套理论。citeturn654461search1

---

## 10. 价值认同标签

用于定义“用户为什么愿意为它多付钱”。

包括：

环保、健康、品牌信任、身份地位、自尊体面、家庭责任、教育理念、审美认同、生活方式认同。

例子：

- eco friendly
- premium lifestyle
- minimalist design
- Montessori inspired
- family care
- self care

---

## 11. 购买意图标签

用于定义“用户处在购买路径的哪一步”。

建议分为：

| 意图层级 | 用户状态 | 关键词特征 |
|---|---|---|
| 认知型 | 还在了解 | what is, how to, benefits |
| 比较型 | 在比较方案 | best, vs, reviews, top rated |
| 参数型 | 已有明确要求 | 32 oz, stainless steel, large |
| 场景型 | 有使用场景 | for school, for travel |
| 人群型 | 给特定人用 | for kids, for mom |
| 礼品型 | 送礼购买 | gift for dad, Christmas gift |
| 交易型 | 准备购买 | coupon, deal, bulk, pack |

---

## 12. 商业策略标签

用于最终决策。

包括：

流量抓手、关键词抓手、核心卖点、视觉营销、广告分组、Listing 优化点、创新机会、进入难度、机会指数。

例子：

- SEO core keyword
- PPC exact keyword
- visual hook
- review pain point
- product innovation
- high competition
- low supply gap

---

# 三、0-1-3 颗粒度法则

你提到“颗粒度 0-1-3”，我建议把它定义成系统规则：

## 0：原始数据层

还没有可执行意义，只是原词、原句、原始评论。

例子：

> “leakproof kids water bottle for school”

这只是 raw keyword。

---

## 1：原子标签层

把关键词拆成单个可计算标签。

例子：

| 原词片段 | 原子标签 | 维度 |
|---|---|---|
| leakproof | 防漏 | 功能 |
| kids | 儿童 | 人群 |
| water bottle | 水杯 | 产品 |
| school | 学校 | 场景 |

---

## 3：组合意图层

把 3 个以上原子标签组合成“可执行判断”。

例子：

> 儿童 + 学校 + 防漏  
> = 开学季儿童水杯的核心购买意图

再转成运营动作：

| 组合标签 | 可执行方向 |
|---|---|
| 儿童 + 学校 + 防漏 | 标题关键词、主图场景、广告长尾词 |
| 妈妈 + 安全 + BPA free | 五点卖点、A+安全模块 |
| 老人 + 易用 + 大按键 | 产品设计、视觉放大参数 |
| 礼品 + 节日 + 高级感 | 礼盒包装、节日广告词 |

所以你的系统不应该只输出：

> 材质：硅胶  
> 人群：儿童  
> 场景：学校

而应该输出：

> **儿童学校场景下，家长对安全、防漏、易清洗的复合需求。**

这才有商业价值。

---

# 四、标签构成公式

每个关键词可以按这个公式拆：

> **产品对象 + 属性参数 + 功能特征 + 人群 + 场景 + 痛点/需求 + 情绪/价值 + 购买意图**

例如：

> “premium stainless steel lunch box for kids school”

拆解为：

| 结构 | 内容 |
|---|---|
| 产品对象 | lunch box |
| 材质 | stainless steel |
| 价值感 | premium |
| 人群 | kids |
| 场景 | school |
| 潜在需求 | 安全、耐用、健康 |
| 购买意图 | 场景型 + 人群型 + 参数型 |

再生成组合标签：

> 儿童学校餐盒 / 不锈钢健康材质 / 高端安全感 / 家长购买意图

---

# 五、标签词典字段设计

第一版建议建一个 `tag_dictionary` 表。

| 字段 | 说明 |
|---|---|
| tag_id | 标签 ID |
| tag_name_cn | 中文标签 |
| tag_name_en | 英文标签 |
| dimension | 一级维度 |
| parent_tag | 父级标签 |
| tag_level | L1 原子 / L2 组合 / L3 策略 |
| synonyms | 同义词 |
| include_patterns | 命中规则 |
| exclude_patterns | 排除规则 |
| example_keywords | 示例关键词 |
| source_priority | 来源优先级 |
| confidence_rule | 置信度规则 |
| business_use | SEO / PPC / 视觉 / 选品 / 评论 |
| status | 启用 / 待审核 / 废弃 |

例子：

| tag_name_en | dimension | synonyms | business_use |
|---|---|---|---|
| leakproof | 功能 | leak proof, no leak, spill proof | SEO/PPC/卖点 |
| toddler | 人群 | baby, infant, little kid | 人群定位 |
| gift | 购买意图 | present, giftable, gift for | 节日营销 |
| premium | 价值认同 | luxury, high end, elegant | 视觉/定价 |
| easy clean | 痛点解决 | dishwasher safe, washable | 五点/评论优化 |

---

# 六、打标流水线

建议用“规则 + 模型 + 人工校验”的混合方式。

## Step 1：数据采集

采集：

- 关键词词库
- 竞品标题
- 五点描述
- A+ 文案
- 图片文案
- 后台属性
- 评论/Q&A
- 广告 Search Term
- 站外趋势词

---

## Step 2：清洗标准化

处理：

- 去重
- 大小写统一
- 单复数归一
- 同义词归一
- 单位标准化
- 无效词过滤
- 品牌词识别
- 竞品 ASIN 关联
- 类目归属

例如：

| 原始词 | 标准化 |
|---|---|
| leak proof | leakproof |
| kids / kid / children | kids |
| 32oz / 32 oz | 32 oz |
| BPA-Free / bpa free | BPA free |

---

## Step 3：原子拆解

把关键词拆成：

- 产品词
- 修饰词
- 属性词
- 参数词
- 人群词
- 场景词
- 情绪词
- 意图词

---

## Step 4：标签匹配

打标方式建议分三类：

| 方法 | 适用标签 |
|---|---|
| 规则匹配 | 尺寸、颜色、材质、容量、数字参数 |
| 词典匹配 | 人群、场景、节日、功能、属性 |
| 语义模型/LLM | 情绪、价值认同、隐性痛点、心理需求 |

比如 “peace of mind” 不能只靠硬规则，它更接近：

> 安心、安全感、父母关照、风险规避

---

## Step 5：置信度评分

每个标签都应该有 confidence。

建议用 0/1/3 分：

| 分数 | 含义 |
|---|---|
| 0 | 不命中或无证据 |
| 1 | 弱命中，只有单一关键词证据 |
| 3 | 强命中，多来源重复出现 |

例子：

如果 “leakproof” 同时出现在：

- 关键词
- 竞品标题
- 五点
- 评论好评
- 广告转化词

那它就是强标签，分数 3。

---

# 七、关键词打标输出格式

最终每条关键词最好输出成这种结构：

| raw_keyword | normalized_keyword | 原子标签 | 组合标签 | 购买意图 | 数据来源 | 置信度 | 策略建议 |
|---|---|---|---|---|---|---|---|
| leakproof kids water bottle for school | leakproof kids water bottle school | 防漏/儿童/水杯/学校 | 儿童学校防漏水杯 | 场景型+人群型 | 搜索词+竞品标题+评论 | 3 | 标题/PPC/主图 |
| gift for mom birthday | gift for mom birthday | 礼品/妈妈/生日 | 母亲生日礼品 | 礼品型 | 关键词+站外 | 2 | 节日广告/A+ |
| easy clean lunch box | easy clean lunch box | 易清洗/餐盒 | 清洁痛点解决 | 痛点型 | 评论+关键词 | 3 | 五点/评论反击 |
| premium desk organizer | premium desk organizer | 高级感/桌面收纳 | 办公身份审美 | 价值认同型 | 竞品+A+ | 2 | 视觉/定价 |
| large capacity travel bag | large capacity travel bag | 大容量/旅行/包 | 旅行收纳需求 | 参数型+场景型 | 搜索词 | 2 | 标题/尺寸图 |

---

# 八、标签迁移重组机制

这是你提到的“标签/元素迁移重组”。

意思是：一个标签不只停留在关键词层，而要迁移到运营动作。

| 标签类型 | 可迁移到哪里 |
|---|---|
| 材质标签 | 标题、五点、后台属性、图片参数图 |
| 外观标签 | 主图、A+、视频、品牌风格 |
| 功能标签 | 标题、五点、广告关键词 |
| 痛点标签 | 五点、FAQ、评论反击、产品改良 |
| 人群标签 | 广告分组、图片模特、A+场景 |
| 场景标签 | 主图场景、节日活动、站外内容 |
| 情感标签 | A+品牌故事、视频脚本、礼品包装 |
| 价值认同标签 | 品牌定位、溢价、视觉调性 |
| 价格/性价比标签 | Coupon、Deal、广告转化词 |
| 技术标签 | 参数图、对比图、专业背书 |

例如：

> 评论里大量出现 “hard to clean”  
> 不是只打一个“难清洗”标签。  
> 应该迁移成：  
> **产品改良：可拆洗结构**  
> **Listing 卖点：easy to clean**  
> **图片表达：dishwasher safe 图标**  
> **广告词：easy clean lunch box**

---

# 九、机会指数模型

你最后提到“进入难易程度、机会指数、竞争程度、需求/供给、市场趋势”，这个可以单独建评分模型。

建议：

> **Opportunity Score = 需求强度 × 供给缺口 × 自身匹配度 × 趋势加权 × 利润可行性**

可以拆成：

## 1. Demand Score 需求强度

来源：

- 搜索量
- 广告曝光
- 点击率
- 转化率
- 评论提及频次
- 站外讨论热度
- 节日/季节需求

## 2. Supply Score 供给强度

来源：

- 竞品数量
- 头部 Review 数
- 评分壁垒
- 广告竞争
- 价格内卷
- 卖点同质化
- 图片同质化

## 3. Gap Score 缺口分

重点看：

- 高频痛点但低解决率
- 评论吐槽多但竞品没解决
- 搜索词有需求但 Listing 覆盖少
- 站外有趋势但站内供给弱
- 人群/场景词增长但产品表达不足

## 4. Fit Score 自身匹配度

判断：

- 供应链能不能做
- 成本能不能控
- 是否有材质/技术/外观优势
- 是否能做差异化包装
- 是否符合品牌定位
- 是否有合规风险

## 5. Trend Score 趋势分

来源：

- 站外内容增长
- 社媒热词
- 节日周期
- 类目上新趋势
- 宏观消费趋势

第一版公式可以这样：

```text
机会指数 =
需求分 × 0.35
+ 供给缺口分 × 0.25
+ 自身匹配度 × 0.20
+ 趋势分 × 0.10
+ 利润/进入难度分 × 0.10
```

如果按你说的站内/站外/品牌比例，也可以这样：

```text
综合机会指数 =
站内信号 × 70%
+ 站外趋势 × 20%
+ 品牌/线下/长期趋势 × 10%
```

---

# 十、广告、运营、视觉三端应用

亚马逊广告关键词匹配有 broad、phrase、exact 等类型，broad 更适合探索，exact 更适合高意图精准转化；所以打标结果应该直接支持广告结构。citeturn361445search18turn361445search0

## 广告端

| 标签组合 | 广告动作 |
|---|---|
| 核心产品词 + 高转化 | Exact Campaign |
| 场景词 + 人群词 | Phrase Campaign |
| 情绪/需求词 | Broad 探索 |
| 痛点词 | 对比广告/竞品广告 |
| 节日礼品词 | 季节广告组 |

## 运营端

| 标签 | Listing 动作 |
|---|---|
| 高频功能词 | 标题/五点前置 |
| 高频材质词 | 标题/后台属性 |
| 高频痛点词 | FAQ/五点解释 |
| 高频人群词 | 图片/A+人群场景 |
| 高频情绪词 | 品牌故事/A+ |

## 视觉端

| 标签类型 | 视觉表达 |
|---|---|
| 安全 | 认证、材质、儿童使用图 |
| 高级感 | 质感、暗色背景、礼盒 |
| 亲子陪伴 | 家庭互动图 |
| 老人关照 | 大字、易用、安心 |
| 学习专注 | 桌面、孩子、安静环境 |
| 礼品属性 | 包装、节日、开箱感 |

---

# 十一、第一版 MVP 建议

不要一开始就做超大系统。第一版可以只做 5 张核心表：

## 1. keyword_raw

存原始关键词。

```text
keyword_id
raw_keyword
source
asin
category
marketplace
date
metrics
```

## 2. keyword_clean

存清洗后的关键词。

```text
keyword_id
normalized_keyword
language
token_list
brand_flag
product_flag
valid_flag
```

## 3. tag_dictionary

存标签词典。

```text
tag_id
tag_name
dimension
parent_tag
synonyms
patterns
business_use
```

## 4. keyword_tag_result

存打标结果。

```text
keyword_id
tag_id
dimension
confidence
evidence_source
evidence_text
tag_level
```

## 5. opportunity_score

存机会评分。

```text
keyword_id
demand_score
supply_score
gap_score
fit_score
trend_score
opportunity_score
recommended_action
```

---

# 十二、最终你要得到的不是“标签”，而是“决策”

一个成熟的关键词打标系统，最终应该回答这 8 个问题：

1. 这个关键词属于什么产品、属性、功能、人群、场景？
2. 它是流量词、转化词、痛点词、礼品词，还是品牌价值词？
3. 它对应用户的哪种心理需求？
4. 它在购买路径的哪个阶段？
5. 它适合放标题、五点、A+、图片，还是广告？
6. 它是现有竞品都在打的红海词，还是有缺口的机会词？
7. 它能不能迁移成产品创新、视觉卖点或广告抓手？
8. 它和你自己的供应链、品牌定位、价格带是否匹配？

一句话总结：

> **原子标签解决“看懂关键词”，组合标签解决“看懂需求”，机会指数解决“该不该做”。**

---

## 轮次 5 · 用户 · 2026-04-28 14:30 Asia/Shanghai

亚马逊美国站空气净化器的关键词词库，汇总，里面有一个sheet 主要ABA数据，进行打标

---

## 轮次 6 · 助手 · 2026-04-28 14:30 Asia/Shanghai

我会直接基于你上传的 Excel 处理：先识别 ABA 数据 sheet 和字段结构，再建立空气净化器标签体系，最后输出一个带“原子标签/组合标签/购买意图/运营建议/机会判断”的新工作簿。

---

## 轮次 7 · 助手 · 2026-04-28 14:30 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/SKILL.md

---

## 轮次 8 · 助手 · 2026-04-28 14:30 Asia/Shanghai

bash -lc python - <<'PY'
from artifact_tool import Blob, SpreadsheetFile
path='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb = SpreadsheetFile.import_xlsx(Blob.load(path))
print(type(wb))
print(dir(wb)[:50])
try:
    print('worksheets', wb.worksheets)
    print(dir(wb.worksheets)[:50])
except Exception as e: print(e)
PY

---

## 轮次 9 · 助手 · 2026-04-28 14:30 Asia/Shanghai

from artifact_tool import Blob, SpreadsheetFile
path='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb = SpreadsheetFile.import_xlsx(Blob.load(path))
print(type(wb))
print(wb)

---

## 轮次 10 · 助手 · 2026-04-28 14:31 Asia/Shanghai

bash -lc ls -lh /mnt/data/关键词搭建\ 汇总工作簿1.xlsx && python - <<'PY'
import zipfile, os
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
with zipfile.ZipFile(p) as z:
    print('files', len(z.namelist()))
    for n in z.namelist()[:20]: print(n)
    print('workbook', z.read('xl/workbook.xml')[:500])
PY

---

## 轮次 11 · 助手 · 2026-04-28 14:32 Asia/Shanghai

bash -lc python - <<'PY'
import zipfile, xml.etree.ElementTree as ET
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
ns={'main':'http://schemas.openxmlformats.org/spreadsheetml/2006/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}
with zipfile.ZipFile(p) as z:
    wb=ET.fromstring(z.read('xl/workbook.xml'))
    rels=ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    relmap={rel.attrib['Id']: rel.attrib['Target'] for rel in rels}
    for s in wb.find('main:sheets',ns):
        name=s.attrib['name']; rid=s.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']; target=relmap[rid]
        print(name, s.attrib.get('sheetId'), target)
PY

---

## 轮次 12 · 助手 · 2026-04-28 14:32 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb=load_workbook(p, read_only=True, data_only=True)
print(wb.sheetnames)
for ws in wb.worksheets:
    print(ws.title, ws.max_row, ws.max_column)
    rows=list(ws.iter_rows(min_row=1, max_row=5, values_only=True))
    for r in rows: print(r[:10])
    print('---')
PY

---

## 轮次 13 · 助手 · 2026-04-28 14:32 Asia/Shanghai

我已经识别到工作簿里有 6 个 sheet，其中“主要的 ABA数据”有 623 行、10 列，是这次打标的主表。该表现有字段包括 ABA排名、关键词、相关性、打标、流量分级、广告用法、链接用途、选品用途。

---

## 轮次 14 · 助手 · 2026-04-28 14:32 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb=load_workbook(p, read_only=True, data_only=True)
ws=wb['主要的 ABA数据']
for i,row in enumerate(ws.iter_rows(min_row=2, values_only=True), start=2):
    if i<=80:
        print(i,row)
PY

---

## 轮次 15 · 助手 · 2026-04-28 14:32 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
from collections import Counter
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb=load_workbook(p, read_only=True, data_only=True)
ws=wb['主要的 ABA数据']
rows=list(ws.iter_rows(min_row=2, values_only=True))
print('count',len(rows))
for r in rows[-30:]: print(r)
print('\nexisting tags')
print(Counter([r[5] for r in rows]).most_common(50))
print('\n流量分级')
print(Counter([r[6] for r in rows]).most_common())
PY

---

## 轮次 16 · 助手 · 2026-04-28 14:32 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
import re
p='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
wb=load_workbook(p, read_only=True, data_only=True)
ws=wb['主要的 ABA数据']
keywords=[r[1] for r in ws.iter_rows(min_row=2, values_only=True) if r[1]]
# print keywords containing brand original
for r in ws.iter_rows(min_row=2, values_only=True):
    if r[1] and (r[5]=='品牌' or r[7]=='品牌词'):
        print(r[1])
PY

---

## 轮次 17 · 助手 · 2026-04-28 14:33 Asia/Shanghai

bash -lc cat > /mnt/data/tag_air_purifier.py <<'PY'
from openpyxl import load_workbook, Workbook
from openpyxl.styles import Font, PatternFill, Border, Side, Alignment
from openpyxl.utils import get_column_letter
from openpyxl.chart import BarChart, PieChart, Reference
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl.worksheet.datavalidation import DataValidation
from collections import Counter, defaultdict
import re, math, os

src='/mnt/data/关键词搭建 汇总工作簿1.xlsx'
out='/mnt/data/亚马逊美国站空气净化器_ABA关键词打标结果.xlsx'

wb_in=load_workbook(src, read_only=True, data_only=True)
ws_in=wb_in['主要的 ABA数据']
source_headers=[c for c in next(ws_in.iter_rows(min_row=1, max_row=1, values_only=True))]
source_rows=[]
for row in ws_in.iter_rows(min_row=2, values_only=True):
    if row[1] is None:
        continue
    source_rows.append(dict(zip(source_headers, row)))

brand_patterns = {
    'Levoit': [r'\blevoit\b', r'\bcore\s?(mini|200s|300s?|400s|600s)\b', r'\bvital\s?200s\b', r'\bplasmapro\b'],
    'Shark': [r'\bshark\b', r'\bnever\s?change\b', r'\bneverchange\b', r'\bclean\s?sense\b', r'\bhp102\b'],
    'Winix': [r'\bwinix\b', r'\bc545\b', r'\bc610\b', r'\b5510\b'],
    'Dyson': [r'\bdyson\b', r'\bhushjet\b'],
    'Honeywell': [r'\bhoneywell\b'],
    'GermGuardian': [r'\bgerm\s?guardian\b', r'\bgermguardian\b'],
    'Blueair': [r'\bblueair\b', r'\bblue air\b'],
    'AirDoctor': [r'\bair\s?doctor\b'],
    'Govee': [r'\bgovee\b', r'\bgoveelife\b', r'\bgovee life\b'],
    'Sans': [r'\bsans\b'],
    'Medify': [r'\bmedify\b'],
    'PuroAir': [r'\bpuroair\b'],
    'Aroeve': [r'\baroeve\b'],
    'Afloia': [r'\bafloia\b'],
    'ToLife': [r'\btolife\b', r'\bto life\b'],
    'Coway': [r'\bcoway\b'],
    'Oneisall': [r'\boneisall\b'],
    'Clarifion': [r'\bclarifion\b'],
    'Holmes': [r'\bholmes\b'],
    'Bissell': [r'\bbissell\b'],
    'Xiaomi': [r'\bxiaomi\b'],
    'AirTok': [r'\bairtok\b'],
    'Renpho': [r'\brenpho\b'],
    'LG': [r'\blg\b'],
    'Lenovo': [r'\blenovo\b'],
    'Homedics': [r'\bhomedics\b'],
    'NatureFresh': [r'\bnature fresh\b'],
    'Therapure': [r'\btherapure\b'],
    'Vremi': [r'\bvremi\b'],
    'Febreze': [r'\bfebreze\b'],
    'Xall': [r'\bx\s?all\b', r'\bxall\b'],
    'Heapets': [r'\bheapets\b'],
    'KNKA': [r'\bknka\b'],
    'Miko': [r'\bmiko\b'],
    'Rainbow': [r'\brainbow\b'],
    'Whisko': [r'\bwhisko\b'],
    'Jasper': [r'\bjasper\b'],
    'Ionclear': [r'\bionclear\b'],
    'SereniByBaby': [r'\bsereni\s?by\s?baby\b', r'\bserenibybaby\b'],
}

pattern_groups = {
    'product': [
        ('空气净化器', [r'air\s?purifier', r'air\s?purifiers', r'purificador de aire', r'purifier\b', r'purifiers\b']),
        ('空气清洁器', [r'air cleaner', r'air cleaners']),
        ('空气过滤器/滤芯', [r'air filter\b', r'air filters\b', r'filter purifier']),
    ],
    'scene': [
        ('家用', [r'for home', r'home\b', r'para casa']),
        ('卧室', [r'bedroom', r'cuarto']),
        ('大房间', [r'large room', r'big room']),
        ('小房间', [r'small room']),
        ('房间', [r'room\b']),
        ('宿舍/大学', [r'dorm', r'dorm room', r'college']),
        ('办公室', [r'office', r'desk top', r'desktop', r'tabletop']),
        ('车载', [r'\bcar\b', r'auto']),
        ('婴儿房/母婴', [r'baby room', r'nursery']),
        ('公寓', [r'apartment']),
        ('地下室', [r'basement']),
        ('厨房', [r'kitchen']),
        ('浴室', [r'bathroom']),
        ('客厅', [r'living room']),
        ('全屋', [r'whole house']),
    ],
    'audience': [
        ('宠物家庭', [r'pet', r'pets']),
        ('猫家庭', [r'cat', r'cat litter']),
        ('狗家庭', [r'dog']),
        ('婴儿/新生儿', [r'\bbaby\b', r'nursery']),
        ('儿童', [r'kid', r'kids', r'children']),
        ('过敏人群', [r'allerg', r'asthma']),
        ('吸烟/烟雾敏感人群', [r'smoker', r'smokers', r'cigarette']),
    ],
    'pain': [
        ('宠物毛发', [r'pet hair', r'hair']),
        ('宠物皮屑', [r'dander']),
        ('异味/臭味', [r'odor', r'odour', r'smell', r'scent', r'neutralizer', r'cat litter']),
        ('烟雾/二手烟', [r'smoke', r'cigarette', r'wildfire']),
        ('灰尘', [r'dust']),
        ('霉菌/霉味', [r'mold', r'mildew', r'musty']),
        ('过敏原', [r'allergen', r'allergy', r'allergies', r'pollen']),
        ('细菌/病菌', [r'germ', r'bacteria', r'virus']),
        ('空气质量焦虑', [r'air quality']),
    ],
    'feature': [
        ('HEPA过滤', [r'\bhepa\b', r'true hepa', r'h13']),
        ('活性炭/除味', [r'carbon', r'charcoal', r'activated carbon']),
        ('可水洗滤网', [r'washable filter', r'washable filters']),
        ('负离子/离子技术', [r'ionic', r'ionizer', r'ioniser', r'ion\b']),
        ('无臭氧', [r'ozone free', r'no ozone']),
        ('UV/紫外杀菌', [r'\buv\b', r'uv-c', r'ultraviolet']),
        ('加湿组合', [r'humidifier', r'humidifer']),
        ('除湿组合', [r'dehumidifier']),
        ('风扇组合', [r'\bfan\b', r'hot and cool']),
        ('智能/WiFi/App', [r'smart', r'wifi', r'\bapp\b']),
        ('空气质量监测', [r'air quality monitor', r'sensor']),
        ('静音/睡眠', [r'quiet', r'silent', r'sleep']),
        ('夜灯', [r'night light']),
        ('香薰/精油', [r'essential oil', r'oil for air purifier', r'aroma', r'aromatherapy']),
        ('AHAM认证', [r'aham verified', r'aham']),
    ],
    'attribute': [
        ('大尺寸/大空间', [r'large', r'max', r'heavy duty', r'whole house']),
        ('小型/迷你', [r'small', r'mini', r'compact']),
        ('便携', [r'portable']),
        ('插电式', [r'plug in', r'plug-in']),
        ('桌面式', [r'desktop', r'desk top', r'tabletop']),
        ('粉色', [r'pink']),
        ('蓝色', [r'\bblue\b']),
        ('黑色', [r'black']),
        ('白色', [r'white']),
        ('多件套', [r'\b\d+\s?pack\b', r'\b\d+\s?pk\b']),
        ('覆盖面积/平方英尺', [r'ft²', r'ft2', r'sq\s?ft', r'\d+\s?(sqft|ft²|ft2)']),
        ('高扭矩/功率', [r'high torque', r'\d+w\b']),
    ],
    'purchase': [
        ('促销/价格敏感', [r'on sale', r'deal', r'coupon', r'cheap', r'affordable']),
        ('替换/售后', [r'replacement', r'replace', r'filter for']),
        ('组合/多功能购买', [r'combo', r'and humidifier', r'and dehumidifier', r'hot and cool']),
        ('礼品/套装', [r'gift', r'present', r'\d+\s?pack']),
    ],
}

accessory_patterns = [r'filter', r'filters', r'replacement', r'cartridge', r'bag\b', r'bags\b', r'essential oil', r'oil for', r'scent cartridge', r'odor neutralizer cartridge', r'aroma pad']
spanish_patterns = [r'purificador', r'para casa', r'para el cuarto', r'para cuarto']
typo_patterns = [r'airpurifier', r'pirifier', r'aur purifier', r'purif', r'purifer']
non_core_patterns = [r'dorm room essentials$', r'dorm essentials$', r'^dorm$']

strategic_tag_notes = {
    '空气净化器': '主商品词，可承接主链接 SEO 和 Exact/Phrase 广告。',
    '空气过滤器/滤芯': '偏配件/耗材，建议单独建配件词组或滤芯链接承接。',
    '卧室': '适合主图/副图表现睡眠、安静、夜间空气场景。',
    '宠物家庭': '适合宠物毛发、异味、皮屑痛点人群包。',
    'HEPA过滤': '核心功能卖点，适合标题、五点、参数图。',
    '烟雾/二手烟': '强痛点词，适合测试 Phrase/Exact 和评论反向卖点。',
    '霉菌/霉味': '强痛点词，但需注意合规表达，避免医疗化宣称。',
    '可水洗滤网': '降低耗材焦虑，适合对比图和五点。',
    '智能/WiFi/App': '功能溢价词，适合高客单价产品。',
    '婴儿/新生儿': '安全感和低噪音诉求强，主图/文案需温和合规。',
}

def norm_kw(kw):
    kw = str(kw or '').lower().strip()
    kw = re.sub(r'[^a-z0-9ñáéíóúü\s²-]', ' ', kw)
    kw = re.sub(r'\s+', ' ', kw).strip()
    kw = kw.replace('air purifiers', 'air purifier') if kw == 'air purifiers' else kw
    return kw

def any_match(text, patterns):
    return any(re.search(p, text, flags=re.I) for p in patterns)

def collect_matches(text, groups):
    out=[]
    for name, pats in groups:
        if any_match(text, pats):
            out.append(name)
    return out

def unique(seq):
    seen=set(); out=[]
    for x in seq:
        if x and x not in seen:
            seen.add(x); out.append(x)
    return out

def first_brand(text):
    hits=[]
    for brand, pats in brand_patterns.items():
        if any_match(text, pats):
            hits.append(brand)
    return unique(hits)

def rank_score(rank):
    try:
        r=int(rank)
    except Exception:
        return 20
    if r <= 5000: return 100
    if r <= 20000: return 92
    if r <= 50000: return 84
    if r <= 100000: return 74
    if r <= 200000: return 62
    if r <= 400000: return 48
    if r <= 800000: return 34
    return 22

def traffic_tier(rank):
    try: r=int(rank)
    except Exception: return '未知'
    if r <= 5000: return 'S级核心流量'
    if r <= 50000: return 'A级高流量'
    if r <= 200000: return 'B级腰部流量'
    if r <= 800000: return 'C级长尾流量'
    return 'D级补充长尾'

def tag_keyword(row):
    raw=row.get('关键词') or ''
    text=norm_kw(raw)
    rank=row.get('ABA排名')
    existing_relevance=row.get('相关性') or ''
    existing_tag=row.get('打标') or ''
    existing_ad=row.get('广告用法') or ''
    brands=first_brand(text)
    is_brand=bool(brands)
    is_accessory=any_match(text, accessory_patterns)
    is_spanish=any_match(text, spanish_patterns)
    is_typo=any_match(text, typo_patterns)
    is_noncore=any_match(text, non_core_patterns)

    product=collect_matches(text, pattern_groups['product'])
    scene=collect_matches(text, pattern_groups['scene'])
    audience=collect_matches(text, pattern_groups['audience'])
    pain=collect_matches(text, pattern_groups['pain'])
    feature=collect_matches(text, pattern_groups['feature'])
    attribute=collect_matches(text, pattern_groups['attribute'])
    purchase=collect_matches(text, pattern_groups['purchase'])
    if not product and 'air' in text and ('pur' in text or 'filter' in text):
        product.append('空气净化器/错拼泛词')
    if is_spanish:
        attribute.append('西语搜索词')
    if is_typo:
        attribute.append('错拼词')

    dimensions=[]
    if product: dimensions.append('产品对象')
    if brands: dimensions.append('竞品品牌')
    if is_accessory: dimensions.append('配件耗材')
    if feature: dimensions.append('功能技术')
    if scene: dimensions.append('场景空间')
    if audience: dimensions.append('人群角色')
    if pain: dimensions.append('痛点污染物')
    if attribute: dimensions.append('属性参数')
    if purchase: dimensions.append('购买意图')
    if is_noncore: dimensions.append('泛场景/低相关')

    if is_brand:
        kw_class='品牌/竞品词'
    elif is_noncore:
        kw_class='泛场景/非净化器强相关词'
    elif is_accessory and not any(x in text for x in ['air purifier for', 'air purifiers for']):
        kw_class='配件/滤芯/耗材词'
    elif pain:
        kw_class='痛点/污染物解决词'
    elif audience:
        kw_class='人群/宠物需求词'
    elif scene:
        kw_class='场景/空间词'
    elif feature:
        kw_class='功能/技术词'
    elif product and len(text.split()) <= 3:
        kw_class='核心大词'
    elif is_spanish:
        kw_class='西语/多语言词'
    elif is_typo:
        kw_class='错拼/容错词'
    else:
        kw_class='长尾泛词'

    psychological=[]
    if any(x in audience for x in ['婴儿/新生儿','儿童']) or '婴儿房/母婴' in scene:
        psychological += ['安全感', '家庭关照']
    if any(x in audience for x in ['宠物家庭','猫家庭','狗家庭']):
        psychological += ['宠物陪伴', '家庭气味管理']
    if any(x in pain for x in ['烟雾/二手烟','霉菌/霉味','过敏原','细菌/病菌','空气质量焦虑']):
        psychological += ['健康防护', '风险规避']
    if any(x in scene for x in ['卧室','婴儿房/母婴']):
        psychological += ['睡眠舒适', '安心氛围']
    if any(x in feature for x in ['可水洗滤网','智能/WiFi/App','空气质量监测']):
        psychological += ['省心便利']
    if not psychological and product:
        psychological += ['洁净空气', '居家舒适']
    psychological=unique(psychological)

    intent=[]
    if is_brand: intent.append('品牌/竞品拦截')
    if is_accessory: intent.append('配件替换/复购')
    if scene: intent.append('场景型购买')
    if audience: intent.append('人群型购买')
    if pain: intent.append('痛点解决型购买')
    if feature: intent.append('功能参数型购买')
    if purchase: intent += purchase
    if not intent and product: intent.append('核心品类购买')
    if is_noncore: intent.append('泛流量/低相关探索')
    intent=unique(intent)

    combo_parts=[]
    for arr in [audience, scene, pain, feature, attribute, product]:
        for x in arr:
            if x not in combo_parts:
                combo_parts.append(x)
            if len(combo_parts)>=4:
                break
        if len(combo_parts)>=4: break
    combo=' + '.join(combo_parts) if combo_parts else '未识别组合'

    rs=rank_score(rank)
    score=rs
    if existing_relevance == '强': score += 12
    elif existing_relevance == '中': score += 4
    elif existing_relevance == '弱': score -= 8
    if pain: score += 10
    if scene: score += 8
    if audience: score += 8
    if feature: score += 6
    if is_spanish: score += 2
    if is_brand: score -= 32
    if is_accessory: score -= 18
    if is_noncore: score -= 25
    if is_typo: score -= 5
    score=max(0,min(100,int(score)))

    if is_brand:
        opportunity='D-竞品品牌/谨慎投放'
    elif is_accessory:
        opportunity='C-配件耗材/独立承接'
    elif is_noncore:
        opportunity='X-低相关/不建议主推'
    elif score >= 82:
        opportunity='S-核心必打'
    elif score >= 68:
        opportunity='A-高机会长尾'
    elif score >= 48:
        opportunity='B-中机会测试'
    else:
        opportunity='C-低量补充'

    if is_brand:
        ad='竞品品牌单独建 Campaign；低预算 Exact/Phrase；避免混入主词组'
        link='竞品拦截/品牌防守页；不建议作为主链接 SEO 主词'
    elif is_accessory:
        ad='配件/滤芯独立广告组；与主机词分开；重点 Exact 转化'
        link='滤芯/耗材/替换件链接承接；主机页仅辅助覆盖'
    elif is_noncore:
        ad='仅 Broad 探索或否定观察；不建议高预算'
        link='内容页/场景页；主链接谨慎使用'
    elif opportunity.startswith('S'):
        ad='主 Campaign 核心 Exact + Phrase；标题/五点/后台词重点覆盖'
        link='主链接 SEO 核心词；主图/五点强覆盖'
    elif opportunity.startswith('A'):
        ad='Phrase/Exact 分组测试；按场景/痛点建 Ad Group'
        link='主链接长尾 SEO；副图/A+模块承接'
    elif opportunity.startswith('B'):
        ad='低预算 Phrase/Broad 探索；观察 CTR/CVR 后提价'
        link='五点/A+/后台 Search Terms 辅助覆盖'
    else:
        ad='低优先级补充投放；可加入 Broad 探索池'
        link='后台词或内容补充'

    visual=[]
    if '卧室' in scene or '静音/睡眠' in feature:
        visual.append('卧室睡眠场景/低噪音/夜间氛围图')
    if '宠物家庭' in audience or '宠物毛发' in pain or '异味/臭味' in pain:
        visual.append('宠物毛发+异味前后对比图')
    if 'HEPA过滤' in feature:
        visual.append('HEPA滤网结构/过滤路径图')
    if '烟雾/二手烟' in pain:
        visual.append('烟雾净化对比图，注意合规措辞')
    if '婴儿/新生儿' in audience or '婴儿房/母婴' in scene:
        visual.append('婴儿房安全/安静/柔和视觉')
    if '大房间' in scene or '大尺寸/大空间' in attribute or '全屋' in scene:
        visual.append('覆盖面积/大空间参数图')
    if '智能/WiFi/App' in feature or '空气质量监测' in feature:
        visual.append('App/传感器/空气质量数值可视化')
    if not visual:
        visual.append('主商品白底图+核心卖点图')

    product_suggest=[]
    if pain: product_suggest.append('围绕高频痛点做卖点前置与评论反击')
    if '可水洗滤网' in feature: product_suggest.append('可强调低耗材成本，但需明确滤芯寿命')
    if '加湿组合' in feature or '除湿组合' in feature: product_suggest.append('跨品类组合需求，可评估供应链与合规复杂度')
    if '宠物家庭' in audience: product_suggest.append('可做宠物版：强除味/毛发/皮屑场景')
    if '卧室' in scene: product_suggest.append('可做卧室版：低噪音/夜灯/睡眠模式')
    if '大房间' in scene or '大尺寸/大空间' in attribute: product_suggest.append('可做大房间版：CADR/覆盖面积/强风量')
    if is_brand: product_suggest.append('用于竞品监控和品牌拦截，不作为产品定义主依据')
    if is_accessory: product_suggest.append('评估是否布局替换滤芯/套装复购')
    if not product_suggest: product_suggest.append('作为基础流量词覆盖')

    notes=[]
    if brands: notes.append('识别品牌：' + '/'.join(brands))
    if is_spanish: notes.append('西语流量，可单独验证转化')
    if is_typo: notes.append('错拼词，适合后台词/低价广告测试')
    if existing_tag: notes.append('原打标：' + str(existing_tag))
    if existing_ad: notes.append('原广告用法：' + str(existing_ad))

    confidence=0
    confidence += 1 if product or is_accessory else 0
    confidence += 1 if any([scene,audience,pain,feature,attribute,brands,is_spanish,is_typo]) else 0
    confidence += 1 if existing_relevance in ('强','中') or existing_tag else 0
    confidence=min(3, confidence)

    cn_summary=[]
    for item in unique(product+brands+scene+audience+pain+feature+attribute)[:8]:
        cn_summary.append(item)
    cn_summary=' / '.join(cn_summary)

    return {
        '标准化关键词': text,
        '关键词中文解读': cn_summary,
        '语言/地域': '西语搜索词' if is_spanish else '英语/美国站',
        '关键词大类': kw_class,
        '是否品牌词': '是' if is_brand else '否',
        '识别品牌': ' / '.join(brands) if brands else '',
        '是否配件/耗材': '是' if is_accessory else '否',
        '数据维度': ' / '.join(unique(dimensions)),
        '产品对象标签': ' / '.join(unique(product)),
        '功能/技术标签': ' / '.join(unique(feature)),
        '场景/空间标签': ' / '.join(unique(scene)),
        '人群/角色标签': ' / '.join(unique(audience)),
        '痛点/污染物标签': ' / '.join(unique(pain)),
        '属性/参数标签': ' / '.join(unique(attribute)),
        '情绪/心理需求': ' / '.join(psychological),
        '购买意图': ' / '.join(intent),
        '组合标签': combo,
        '标签置信度(0-3)': confidence,
        '派生流量层级': traffic_tier(rank),
        '机会等级': opportunity,
        '优先级分(0-100)': score,
        '广告打法建议': ad,
        'Listing/链接用途': link,
        '视觉/内容建议': '；'.join(unique(visual)),
        '选品/产品建议': '；'.join(unique(product_suggest)),
        '备注/证据': '；'.join(notes),
    }

results=[]
for row in source_rows:
    tagged=tag_keyword(row)
    results.append({**row, **tagged})

wb=Workbook()
ws=wb.active
ws.title='ABA关键词打标结果'

new_headers = ['ABA排名','关键词','关键词翻译','工具来源','相关性','打标','流量分级','广告用法','链接用途','选品用途',
               '标准化关键词','关键词中文解读','语言/地域','关键词大类','是否品牌词','识别品牌','是否配件/耗材','数据维度',
               '产品对象标签','功能/技术标签','场景/空间标签','人群/角色标签','痛点/污染物标签','属性/参数标签','情绪/心理需求','购买意图','组合标签','标签置信度(0-3)','派生流量层级','机会等级','优先级分(0-100)','广告打法建议','Listing/链接用途','视觉/内容建议','选品/产品建议','备注/证据']
ws.append(new_headers)
for r in results:
    ws.append([r.get(h,'') for h in new_headers])

# Styles
thin = Side(style='thin', color='D9E2EC')
header_fill = PatternFill('solid', fgColor='EAF2F8')
orig_fill = PatternFill('solid', fgColor='F6F8FA')
strategy_fill = PatternFill('solid', fgColor='EAF7EA')
warn_fill = PatternFill('solid', fgColor='FFF4E5')
low_fill = PatternFill('solid', fgColor='FDECEC')
white = PatternFill('solid', fgColor='FFFFFF')

for cell in ws[1]:
    cell.font=Font(bold=True, color='1F2937')
    cell.fill=header_fill
    cell.alignment=Alignment(horizontal='center', vertical='center', wrap_text=True)
    cell.border=Border(bottom=thin)
ws.row_dimensions[1].height=32
ws.freeze_panes='A2'
ws.auto_filter.ref=ws.dimensions

# column widths
widths = {
    'A':10,'B':34,'C':18,'D':12,'E':9,'F':12,'G':12,'H':14,'I':14,'J':14,
    'K':34,'L':34,'M':14,'N':18,'O':12,'P':16,'Q':14,'R':24,'S':20,'T':26,'U':24,'V':22,'W':26,'X':26,'Y':24,'Z':26,
    'AA':34,'AB':12,'AC':16,'AD':18,'AE':14,'AF':48,'AG':40,'AH':44,'AI':44,'AJ':42
}
for col, w in widths.items():
    ws.column_dimensions[col].width=w
for row in ws.iter_rows(min_row=2, max_row=ws.max_row):
    for c in row:
        c.alignment=Alignment(vertical='top', wrap_text=True)
        c.border=Border(bottom=Side(style='hair', color='E5E7EB'))
    row[0].number_format='0'
    row[30].number_format='0'
    # color opportunity
    opp=row[29].value or ''
    if str(opp).startswith('S'):
        fill=PatternFill('solid', fgColor='E1F5E6')
    elif str(opp).startswith('A'):
        fill=PatternFill('solid', fgColor='E8F6FF')
    elif str(opp).startswith('B'):
        fill=PatternFill('solid', fgColor='FFF9DB')
    elif str(opp).startswith('C'):
        fill=warn_fill
    elif str(opp).startswith('D') or str(opp).startswith('X'):
        fill=low_fill
    else:
        fill=white
    row[29].fill=fill
    row[30].fill=fill
for r in range(2, ws.max_row+1):
    ws.row_dimensions[r].height=48

# Table
end_col = get_column_letter(ws.max_column)
ref=f'A1:{end_col}{ws.max_row}'
tab=Table(displayName='ABAKeywordTags', ref=ref)
style=TableStyleInfo(name='TableStyleMedium2', showRowStripes=True, showFirstColumn=False, showLastColumn=False)
tab.tableStyleInfo=style
ws.add_table(tab)

# Summary sheet
sumws=wb.create_sheet('标签汇总_看板')
sumws.sheet_view.showGridLines=False
sumws['A1']='亚马逊美国站空气净化器 ABA 关键词打标看板'
sumws['A1'].font=Font(size=16, bold=True, color='1F2937')
sumws['A2']='基于“主要的 ABA数据”sheet 自动拆解：产品对象、品牌、配件、功能技术、场景、人群、痛点、心理需求、购买意图和机会等级。'
sumws['A2'].font=Font(size=10, color='4B5563')
sumws.merge_cells('A1:H1'); sumws.merge_cells('A2:H2')

# KPI
kpis=[('总关键词数',len(results)),('非品牌词',sum(1 for r in results if r['是否品牌词']=='否')),('品牌/竞品词',sum(1 for r in results if r['是否品牌词']=='是')),('配件/耗材词',sum(1 for r in results if r['是否配件/耗材']=='是')),('S/A机会词',sum(1 for r in results if str(r['机会等级']).startswith(('S','A')))),('痛点词',sum(1 for r in results if r['痛点/污染物标签'])),('场景词',sum(1 for r in results if r['场景/空间标签'])),('人群词',sum(1 for r in results if r['人群/角色标签']))]
start_row=4
for i,(k,v) in enumerate(kpis):
    c=1+i
    cell=sumws.cell(start_row,c,k); val=sumws.cell(start_row+1,c,v)
    cell.font=Font(bold=True, color='374151')
    val.font=Font(size=16,bold=True,color='111827')
    cell.fill=PatternFill('solid', fgColor='F3F7FB')
    val.fill=PatternFill('solid', fgColor='FFFFFF')
    cell.alignment=Alignment(horizontal='center'); val.alignment=Alignment(horizontal='center')
    cell.border=Border(bottom=thin); val.border=Border(bottom=thin)

opp_counts=Counter(r['机会等级'] for r in results)
class_counts=Counter(r['关键词大类'] for r in results)
intent_counts=Counter()
for r in results:
    for x in str(r['购买意图']).split(' / '):
        if x: intent_counts[x]+=1
pain_counts=Counter()
scene_counts=Counter(); feature_counts=Counter(); audience_counts=Counter()
for r in results:
    for x in str(r['痛点/污染物标签']).split(' / '):
        if x: pain_counts[x]+=1
    for x in str(r['场景/空间标签']).split(' / '):
        if x: scene_counts[x]+=1
    for x in str(r['功能/技术标签']).split(' / '):
        if x: feature_counts[x]+=1
    for x in str(r['人群/角色标签']).split(' / '):
        if x: audience_counts[x]+=1

def write_counter(ws, title, row, col, counter, max_items=15):
    ws.cell(row,col,title).font=Font(bold=True,size=12,color='1F2937')
    ws.cell(row,col).fill=PatternFill('solid', fgColor='EAF2F8')
    ws.cell(row,col+1).fill=PatternFill('solid', fgColor='EAF2F8')
    ws.cell(row+1,col,'标签/类别').font=Font(bold=True)
    ws.cell(row+1,col+1,'数量').font=Font(bold=True)
    for idx,(k,v) in enumerate(counter.most_common(max_items), start=row+2):
        ws.cell(idx,col,k)
        ws.cell(idx,col+1,v)
    return row+2+min(max_items,len(counter))

write_counter(sumws,'机会等级分布',7,1,opp_counts,10)
write_counter(sumws,'关键词大类分布',7,4,class_counts,12)
write_counter(sumws,'购买意图分布',7,7,intent_counts,12)
write_counter(sumws,'痛点/污染物 Top',23,1,pain_counts,12)
write_counter(sumws,'场景/空间 Top',23,4,scene_counts,12)
write_counter(sumws,'功能/技术 Top',23,7,feature_counts,12)
write_counter(sumws,'人群/角色 Top',40,1,audience_counts,12)

for col in range(1,9):
    sumws.column_dimensions[get_column_letter(col)].width=22
for row in sumws.iter_rows(min_row=1,max_row=55,min_col=1,max_col=8):
    for c in row:
        c.alignment=Alignment(vertical='top', wrap_text=True)
        if c.value:
            c.border=Border(bottom=Side(style='hair', color='E5E7EB'))

# Charts
chart = BarChart()
chart.title='机会等级分布'
chart.y_axis.title='关键词数'
chart.x_axis.title='机会等级'
data=Reference(sumws, min_col=2, min_row=8, max_row=8+len(opp_counts))
cats=Reference(sumws, min_col=1, min_row=9, max_row=8+len(opp_counts))
chart.add_data(data, titles_from_data=True)
chart.set_categories(cats)
chart.height=6; chart.width=12
sumws.add_chart(chart,'J4')

chart2 = BarChart()
chart2.title='关键词大类 Top'
chart2.y_axis.title='关键词数'
chart2.x_axis.title='类别'
max_class=min(12,len(class_counts))
data2=Reference(sumws, min_col=5, min_row=8, max_row=8+max_class)
cats2=Reference(sumws, min_col=4, min_row=9, max_row=8+max_class)
chart2.add_data(data2, titles_from_data=True)
chart2.set_categories(cats2)
chart2.height=7; chart2.width=14
sumws.add_chart(chart2,'J18')

# High opportunity sheet
hi=wb.create_sheet('高机会词清单')
hi_headers=['优先级分(0-100)','ABA排名','关键词','关键词大类','组合标签','购买意图','机会等级','广告打法建议','Listing/链接用途','视觉/内容建议','选品/产品建议']
hi.append(hi_headers)
hi_rows=sorted([r for r in results if str(r['机会等级']).startswith(('S','A','B')) and r['是否品牌词']=='否'], key=lambda x: (-x['优先级分(0-100)'], x.get('ABA排名') or 999999999))
for r in hi_rows:
    hi.append([r.get(h,'') for h in hi_headers])
for cell in hi[1]:
    cell.font=Font(bold=True,color='1F2937'); cell.fill=PatternFill('solid', fgColor='EAF7EA'); cell.alignment=Alignment(horizontal='center',wrap_text=True)
hi.freeze_panes='A2'; hi.auto_filter.ref=hi.dimensions
for c,w in enumerate([14,10,34,20,32,30,18,48,42,44,44],start=1):
    hi.column_dimensions[get_column_letter(c)].width=w
for r in hi.iter_rows(min_row=2,max_row=hi.max_row):
    for c in r:
        c.alignment=Alignment(vertical='top',wrap_text=True)
        c.border=Border(bottom=Side(style='hair', color='E5E7EB'))
    hi.row_dimensions[r[0].row].height=54
hi.add_table(Table(displayName='HighOpportunityKeywords', ref=f'A1:{get_column_letter(hi.max_column)}{hi.max_row}', tableStyleInfo=TableStyleInfo(name='TableStyleMedium4',showRowStripes=True)))

# Dictionary sheet
lex=wb.create_sheet('标签词典')
lex_headers=['一级维度','标签','英文识别词/规则示例','运营含义','建议用途']
lex.append(lex_headers)
lex_rows=[]
for dim, groups in pattern_groups.items():
    cn_dim={'product':'产品对象','scene':'场景空间','audience':'人群角色','pain':'痛点污染物','feature':'功能技术','attribute':'属性参数','purchase':'购买意图'}[dim]
    for label,pats in groups:
        lex_rows.append([cn_dim,label,'; '.join([p.replace('\\b','').replace('\\s?',' ') for p in pats[:5]]),strategic_tag_notes.get(label,''),'SEO / PPC / Listing / 视觉 / 选品'])
for brand in sorted(brand_patterns.keys()):
    lex_rows.append(['竞品品牌',brand,'; '.join([p.replace('\\b','').replace('\\s?',' ') for p in brand_patterns[brand][:4]]),'品牌拦截、竞品监控、否定词或单独广告组','广告/竞品分析'])
for r in lex_rows:
    lex.append(r)
for cell in lex[1]:
    cell.font=Font(bold=True,color='1F2937'); cell.fill=PatternFill('solid', fgColor='EAF2F8'); cell.alignment=Alignment(horizontal='center',wrap_text=True)
lex.freeze_panes='A2'; lex.auto_filter.ref=lex.dimensions
for c,w in enumerate([18,24,52,58,30],start=1):
    lex.column_dimensions[get_column_letter(c)].width=w
for row in lex.iter_rows(min_row=2,max_row=lex.max_row):
    for c in row:
        c.alignment=Alignment(vertical='top',wrap_text=True)
        c.border=Border(bottom=Side(style='hair', color='E5E7EB'))
lex.add_table(Table(displayName='TagDictionary', ref=f'A1:{get_column_letter(lex.max_column)}{lex.max_row}', tableStyleInfo=TableStyleInfo(name='TableStyleMedium2', showRowStripes=True)))

# Rules sheet
rules=wb.create_sheet('打标规则说明')
rules.sheet_view.showGridLines=False
rules_data=[
    ['模块','说明'],
    ['打标对象','仅处理上传工作簿中的“主要的 ABA数据”sheet，共 %s 条关键词。' % len(results)],
    ['0-1-3颗粒度','0=原始关键词；1=产品/场景/人群/痛点/功能等原子标签；3=组合标签与运营动作。'],
    ['标签置信度','0=未识别；1=单一证据；2=关键词+标签结构；3=关键词结构+原表相关性/原打标共同支持。'],
    ['机会等级','S=核心必打；A=高机会长尾；B=中机会测试；C=配件/低量补充；D=竞品品牌谨慎投放；X=低相关。'],
    ['广告逻辑','核心词走 Exact/Phrase；场景/痛点词单独建组；配件词单独承接；竞品品牌词低预算独立测试。'],
    ['Listing逻辑','主商品词进入标题/五点/后台；痛点/场景/人群词进入五点、A+、副图、视频脚本。'],
    ['注意事项','空气净化器涉及健康/过敏/烟雾/霉菌等高敏感表达，Listing文案需避免绝对化和医疗化承诺。'],
]
for r in rules_data:
    rules.append(r)
for cell in rules[1]:
    cell.font=Font(bold=True,color='1F2937'); cell.fill=PatternFill('solid', fgColor='EAF2F8')
for col,w in zip(['A','B'],[24,100]): rules.column_dimensions[col].width=w
for row in rules.iter_rows(min_row=1,max_row=rules.max_row,min_col=1,max_col=2):
    for c in row:
        c.alignment=Alignment(vertical='top',wrap_text=True)
        c.border=Border(bottom=Side(style='hair', color='E5E7EB'))
for r in range(1,rules.max_row+1): rules.row_dimensions[r].height=36

# Add validation on opportunity in tag results for manual reclassification
opp_dv=DataValidation(type='list', formula1='"S-核心必打,A-高机会长尾,B-中机会测试,C-配件耗材/独立承接,C-低量补充,D-竞品品牌/谨慎投放,X-低相关/不建议主推"', allow_blank=True)
ws.add_data_validation(opp_dv)
opp_dv.add(f'AD2:AD{ws.max_row}')

# workbook properties / print setup
for sh in wb.worksheets:
    sh.sheet_properties.pageSetUpPr.fitToPage=True
    sh.page_setup.fitToWidth=1
    sh.page_setup.fitToHeight=0

# Save
wb.save(out)
print(out)
print('rows', len(results), 'sheets', wb.sheetnames)
print('opp', opp_counts)
print('classes', class_counts.most_common(10))
PY
python /mnt/data/tag_air_purifier.py

---

## 轮次 18 · 助手 · 2026-04-28 14:35 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
p='/mnt/data/亚马逊美国站空气净化器_ABA关键词打标结果.xlsx'
wb=load_workbook(p, read_only=True, data_only=False)
print(wb.sheetnames)
for s in wb.sheetnames:
    ws=wb[s]
    print(s, ws.max_row, ws.max_column)
ws=wb['ABA关键词打标结果']
for row in ws.iter_rows(min_row=1, max_row=8, values_only=True):
    print(row[:12], '...', row[29:32])
print('High opportunity sample')
ws=wb['高机会词清单']
for row in ws.iter_rows(min_row=1, max_row=8, values_only=True): print(row[:7])
PY

---

## 轮次 19 · 助手 · 2026-04-28 14:35 Asia/Shanghai

bash -lc python - <<'PY'
p='/mnt/data/tag_air_purifier.py'
s=open(p).read()
s=s.replace("typo_patterns = [r'airpurifier', r'pirifier', r'aur purifier', r'purif', r'purifer']", "typo_patterns = [r'\\bairpurifier\\b', r'\\bair\\s+pirifier\\b', r'\\baur purifier\\b', r'\\bair\\s+purifer\\b', r'\\bair\\s+purifir\\b', r'\\bair\\s+purifire\\b']")
# cap score for noncore
s=s.replace("if is_typo: score -= 5\n    score=max(0,min(100,int(score)))", "if is_typo: score -= 5\n    if is_noncore: score = min(score, 25)\n    if is_brand: score = min(score, 70)\n    if is_accessory: score = min(score, 75)\n    score=max(0,min(100,int(score)))")
open(p,'w').write(s)
PY
python /mnt/data/tag_air_purifier.py

---

## 轮次 20 · 助手 · 2026-04-28 14:36 Asia/Shanghai

bash -lc python - <<'PY'
from openpyxl import load_workbook
p='/mnt/data/亚马逊美国站空气净化器_ABA关键词打标结果.xlsx'
wb=load_workbook(p, read_only=True, data_only=False)
ws=wb['ABA关键词打标结果']
for row in ws.iter_rows(min_row=1, max_row=10, values_only=True):
    print(row[:12], '...', row[26:32])
print('High opp')
ws=wb['高机会词清单']
for row in ws.iter_rows(min_row=1, max_row=10, values_only=True): print(row[:7])
PY

---

## 轮次 21 · 助手 · 2026-04-28 14:36 Asia/Shanghai

已完成空气净化器美国站 ABA 关键词打标，并生成新 Excel 文件：

[下载：亚马逊美国站空气净化器_ABA关键词打标结果.xlsx](sandbox:/mnt/data/亚马逊美国站空气净化器_ABA关键词打标结果.xlsx)

本次处理内容：

- 处理主表：**“主要的 ABA数据”**
- 共打标：**622 条 ABA 关键词**
- 新增标签维度：
  - 产品对象
  - 品牌/竞品词
  - 配件/滤芯/耗材
  - 功能/技术
  - 场景/空间
  - 人群/角色
  - 痛点/污染物
  - 属性/参数
  - 情绪/心理需求
  - 购买意图
  - 组合标签
  - 广告打法建议
  - Listing/链接用途
  - 视觉/内容建议
  - 选品/产品建议
  - 机会等级
  - 优先级分

文件内包含 5 个 sheet：

1. **ABA关键词打标结果**：完整关键词逐行打标结果  
2. **标签汇总_看板**：机会等级、关键词大类、痛点、场景、功能、人群统计  
3. **高机会词清单**：筛选出可重点用于广告/SEO/Listing 的机会词  
4. **标签词典**：本次使用的空气净化器标签规则  
5. **打标规则说明**：0-1-3 颗粒度、机会等级、广告/Listing 应用规则  

打标结果概览：

- **S-核心必打**：30 个  
- **A-高机会长尾**：27 个  
- **B-中机会测试**：84 个  
- **品牌/竞品词**：186 个  
- **配件/滤芯/耗材词**：83 个  
- **低相关/不建议主推**：3 个  

建议下一步可以把这版作为 **规则打标 V1**，再接入广告 Search Term 的点击、转化、ACOS、CVR 数据，进一步把“标签机会”升级成“真实成交机会”。

---

## 轮次 22 · 用户 · 2026-05-05 16:21 Asia/Shanghai

hair clips美国的发夹，进行打标

---

## 轮次 23 · 助手 · 2026-05-05 16:21 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/SKILL.md

---

## 轮次 24 · 助手 · 2026-05-05 16:21 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/API_QUICK_START.md

---

## 轮次 25 · 助手 · 2026-05-05 16:21 Asia/Shanghai

from artifact_tool import Blob, SpreadsheetFile, Workbook
input_path = "/mnt/data/US_热门ABA搜索词_简单_Month_2026_04_30.xlsx"
wb = SpreadsheetFile.import_xlsx(Blob.load(input_path))
print(wb.inspect({"kind":"sheet","include":"id,name"}).ndjson[:2000])

---

## 轮次 26 · 助手 · 2026-05-05 16:21 Asia/Shanghai

sheet_name = "US_热门ABA搜索词_简单_Month_2026_04_30"
print(wb.inspect({"kind":"table","range":f"'{sheet_name}'!A1:U15","include":"values,formulas","table_max_rows":15,"table_max_cols":21}).ndjson[:8000])

---

## 轮次 27 · 助手 · 2026-05-05 16:21 Asia/Shanghai

import json, re, math, statistics, os, textwrap, csv
res = wb.inspect({"kind":"table","range":f"'{sheet_name}'!A1:U562","include":"values,formulas","table_max_rows":600,"table_max_cols":21})
# one JSON line
txt = res.ndjson
print(txt[:500])
obj=json.loads(txt.splitlines()[0])
print(obj.keys(), obj['rows'], obj['cols'])
print(obj['values'][0])
print(len(obj['values']))

---

## 轮次 28 · 助手 · 2026-05-05 16:22 Asia/Shanghai

from artifact_tool import Blob, SpreadsheetFile
input_path = "/mnt/data/US_热门ABA搜索词_简单_Month_2026_04_30.xlsx"
wb = SpreadsheetFile.import_xlsx(Blob.load(input_path))
sh = wb.worksheets.get_item("US_热门ABA搜索词_简单_Month_2026_04_30")
rng = sh.get_range("A1:U562")
# Try to access values
try:
    vals = rng.values
    print(type(vals), len(vals), vals[0][:5], vals[1][:3])
except Exception as e:
    print("error", type(e), e)

---

## 轮次 29 · 助手 · 2026-05-05 16:22 Asia/Shanghai

vals = sh.get_range("A1:U562").values
sh2 = wb.worksheets.get_item("商机KEYWORD")
vals2 = sh2.get_range("A1:L21").values
print(vals2[:5])
print(vals[-3:])

---

## 轮次 30 · 助手 · 2026-05-05 16:22 Asia/Shanghai

文件结构我这边已经读到了：主表有 562 行、21 列，包含 ABA 搜索频率排名、搜索词、Top 3 品牌、Top 3 类目、Top 3 商品及点击/转化份额；另有“商机KEYWORD”表 21 行，用于高潜词补充。接下来我会把 hair clips 类目的产品形态、材质外观、人群场景、发质需求、功能卖点、购买意图一起打进去。

---

## 轮次 31 · 助手 · 2026-05-05 16:22 Asia/Shanghai

# Extract and display unique keywords count and sample 100
headers = vals[0]
rows = vals[1:]
keywords = [str(r[1]).strip() if r[1] else "" for r in rows]
print(len(keywords), keywords[:100])
print(keywords[-50:])

---

## 轮次 32 · 助手 · 2026-05-05 16:22 Asia/Shanghai

from artifact_tool import Workbook, SpreadsheetFile
from collections import Counter, defaultdict
from datetime import datetime, timedelta
import re, math, json, os, statistics, textwrap

# Use previously loaded vals and vals2; reload if needed
from artifact_tool import Blob, SpreadsheetFile
input_path = "/mnt/data/US_热门ABA搜索词_简单_Month_2026_04_30.xlsx"
src_wb = SpreadsheetFile.import_xlsx(Blob.load(input_path))
main_name = "US_热门ABA搜索词_简单_Month_2026_04_30"
main_sh = src_wb.worksheets.get_item(main_name)
vals = main_sh.get_range("A1:U562").values
biz_sh = src_wb.worksheets.get_item("商机KEYWORD")
vals2 = biz_sh.get_range("A1:L21").values

headers = vals[0]
data = vals[1:]
biz_headers = vals2[0]
biz_data = vals2[1:]
biz_map = {str(r[0]).strip().lower(): r for r in biz_data if r and r[0]}

# Helper functions
def excel_serial_to_date(n):
    # Excel 1900 date system; serial 46142 = 2026-04-30
    try:
        n = int(n)
        return (datetime(1899,12,30) + timedelta(days=n)).strftime("%Y-%m-%d")
    except Exception:
        return n

def pct(x):
    if x is None or x == "":
        return None
    try:
        return float(x) / 100.0 if float(x) > 1 else float(x)
    except Exception:
        return None

def clean_kw(s):
    return re.sub(r"\s+", " ", str(s or "").strip().lower())

brand_terms = [
    "kitsch","goody","scunci","conair","teleties","luseren","aimike","cellot","cél lot","cÉllot","cel lot",
    "sisiaipu","pidoudou","smksl","jasverlin","vigorpace","gqlv","usd nice","usdnice","drealoe",
    "yohama","nalodu","mandydov","bantoye","dafni","penta angel","willbond","ahoney","sec mity","secmity",
    "xiehe","bebee poo","bebeepoo","saoropeb","ygdz","mehayi","gingbiss"
]
ip_terms = ["disney","hello kitty","mickey","minnie","barbie","pokemon","stitch","sanrio"]

# Lists of tag rules (label, patterns)
product_rules = [
    ("爪夹/抓夹", [r"\bclaw\b", r"\bclaw clips?\b", r"\bhair claw\b", r"\bjaw clips?\b"]),
    ("平板/扁平抓夹", [r"\bflat\b", r"\blay flat\b", r"\bsquare\b", r"\brectangle\b"]),
    ("香蕉夹", [r"\bbanana\b", r"\bbannana\b"]),
    ("蝴蝶夹", [r"\bbutterfly\b"]),
    ("花朵夹", [r"\bflower\b", r"\bhibiscus\b", r"\bplumeria\b"]),
    ("星星夹", [r"\bstar\b", r"\bstarfish\b", r"\bstar shaped\b"]),
    ("蝴蝶结/发 bow 夹", [r"\bbow\b", r"\bhair bows?\b"]),
    ("发卡/发夹通用", [r"\bhair clips?\b", r"\bclips for hair\b", r"\bhair accessories clips?\b"]),
    ("发卡/Barrette/Snap", [r"\bbarrettes?\b", r"\bsnap\b", r"\bsnap clips?\b"]),
    ("鸭嘴/鳄鱼夹", [r"\bduck ?bill\b", r"\bduckbill\b", r"\balligator\b", r"\bduck clips?\b"]),
    ("造型/分区夹", [r"\bstyling\b", r"\bsectioning\b", r"\bsection\b", r"\bstylist\b", r"\bmakeup application\b"]),
    ("卷发/发卷夹", [r"\broller\b", r"\brollers\b", r"\bcurl\b", r"\broot\b", r"\bvolume\b", r"\broot lift\b"]),
    ("一字/发针/小发夹", [r"\bbobby\b", r"\bpins?\b", r"\btiny\b", r"\bmini\b", r"\bsmall\b", r"\b1 inch\b"]),
    ("梳夹/发梳夹", [r"\bcomb\b", r"\bcombs\b"]),
    ("接发夹", [r"\bextension\b"]),
]
hair_need_rules = [
    ("厚发/多发量", [r"\bthick\b", r"\blong thick\b"]),
    ("薄发/细软发", [r"\bthin\b", r"\bfine\b"]),
    ("卷发/卷曲发", [r"\bcurly\b", r"\bcurls?\b"]),
    ("短发/刘海", [r"\bshort\b", r"\bbangs?\b"]),
    ("长发", [r"\blong\b"]),
    ("所有发质", [r"\ball hair types?\b"]),
    ("婴幼儿细软发", [r"\binfant fine\b", r"\bbaby.*fine\b"]),
]
people_rules = [
    ("女性", [r"\bwomen\b", r"\bwomens\b", r"\blady\b"]),
    ("女孩", [r"\bgirls?\b"]),
    ("儿童/小孩", [r"\bkids?\b", r"\bchildren\b"]),
    ("幼儿", [r"\btoddler\b"]),
    ("婴儿", [r"\bbaby\b", r"\binfant\b"]),
    ("教师/老师", [r"\bteacher\b"]),
    ("发型师/专业用户", [r"\bstylist\b", r"\bsalon\b"]),
    ("新娘/婚礼人群", [r"\bbride\b", r"\bbridal\b", r"\bwedding\b"]),
]
scene_rules = [
    ("日常通勤/工作", [r"\bdaily\b", r"\bwork\b", r"\boffice\b"]),
    ("造型/沙龙/剪染", [r"\bstyling\b", r"\bsectioning\b", r"\bduck ?bill\b", r"\balligator\b", r"\broller\b", r"\broot\b", r"\bcoloring\b", r"\bcutting\b", r"\bmakeup application\b", r"\bstylist\b"]),
    ("婚礼/派对/舞会", [r"\bwedding\b", r"\bbridal\b", r"\bparty\b", r"\bprom\b"]),
    ("节日/万圣节/Cosplay", [r"\bhalloween\b", r"\bcosplay\b", r"\brave\b", r"\bfestival\b"]),
    ("海边/夏季/夏威夷", [r"\bhawaiian\b", r"\bbeach\b", r"\bsummer\b", r"\bhibiscus\b", r"\bplumeria\b"]),
    ("学校/儿童日常", [r"\bschool\b", r"\bteacher\b", r"\bkids\b", r"\btoddler\b", r"\bbaby\b"]),
    ("礼品/感谢场景", [r"\bgift\b", r"\bappreciation\b"]),
]
function_rules = [
    ("强抓力/稳固固定", [r"\bstrong hold\b", r"\bhold\b", r"\bsecure\b"]),
    ("防滑/不掉落", [r"\bno[- ]?slip\b", r"\bnon[- ]?slip\b", r"\bslideproof\b"]),
    ("不留痕/无折痕", [r"\bno crease\b", r"\bcreaseless\b", r"\bno bend\b"]),
    ("平躺舒适", [r"\bflat\b", r"\blay flat\b"]),
    ("分区造型", [r"\bstyling\b", r"\bsectioning\b", r"\bduck ?bill\b", r"\balligator\b"]),
    ("卷发/蓬松定型", [r"\bcurl\b", r"\broller\b", r"\broot\b", r"\bvolume\b", r"\bupdos?\b"]),
    ("装饰搭配", [r"\bcute\b", r"\bfashion\b", r"\bfun\b", r"\bdecorative\b", r"\bflower\b", r"\bbutterfly\b", r"\bstar\b", r"\bbow\b", r"\bpearl\b", r"\brhinestone\b", r"\bjeweled\b"]),
    ("批量/套装", [r"\bbulk\b", r"\bpack\b", r"\bpcs?\b", r"\bcount\b", r"\bset\b"]),
]
style_rules = [
    ("金属", [r"\bmetal\b", r"\bgold\b", r"\bsilver\b"]),
    ("塑料/亚克力/树脂", [r"\bplastic\b", r"\bacrylic\b", r"\bresin\b", r"\bacetate\b"]),
    ("珍珠/水钻/宝石感", [r"\bpearl\b", r"\brhinestone\b", r"\bjeweled\b"]),
    ("缎带/蕾丝/刺绣", [r"\black\b", r"\bembroidery\b", r"\bvelvet\b", r"\bbow\b"]),
    ("哑光/中性色", [r"\bmatte\b", r"\bneutral\b"]),
    ("龟甲纹", [r"\btortoise\b"]),
    ("闪粉/Y2K/90s", [r"\bglitter\b", r"\bsparkly\b", r"\by2k\b", r"\b90s\b", r"\b2000s\b"]),
    ("可爱/趣味风", [r"\bcute\b", r"\bfun\b", r"\bladybug\b", r"\bmushroom\b", r"\bcherry\b", r"\bangel\b", r"\bbone\b", r"\bwing\b"]),
    ("花朵/夏威夷风", [r"\bflower\b", r"\bhawaiian\b", r"\bhibiscus\b", r"\bplumeria\b"]),
    ("蝴蝶/星星造型", [r"\bbutterfly\b", r"\bstar\b", r"\bstarfish\b", r"\bstar shaped\b"]),
    ("IP/角色款", [r"\bdisney\b", r"\bhello kitty\b", r"\bmickey\b", r"\bminnie\b", r"\bsanrio\b"]),
    ("黑色", [r"\bblack\b"]),
    ("白色", [r"\bwhite\b"]),
    ("粉色", [r"\bpink\b"]),
    ("蓝色", [r"\bblue\b"]),
    ("红色", [r"\bred\b"]),
    ("金色", [r"\bgold\b"]),
    ("银色", [r"\bsilver\b"]),
    ("透明/彩色/霓虹", [r"\bclear\b", r"\bcolorful\b", r"\bneon\b"]),
]
param_rules = [
    ("小号/迷你", [r"\bmini\b", r"\btiny\b", r"\bsmall\b", r"\b1 inch\b"]),
    ("中号", [r"\bmedium\b"]),
    ("大号/加大", [r"\blarge\b", r"\bbig\b", r"\bextra large\b", r"\bxl\b"]),
    ("多件套/批量", [r"\bbulk\b", r"\bpack\b", r"\bpcs?\b", r"\bcount\b", r"\bset\b"]),
    ("收纳/包装", [r"\bbox\b", r"\bstorage\b", r"\borganizer\b"]),
]
emotion_rules = [
    ("好看可爱/审美愉悦", [r"\bcute\b", r"\bfashion\b", r"\bfun\b", r"\bglitter\b", r"\bsparkly\b", r"\bflower\b", r"\bbutterfly\b", r"\bstar\b"]),
    ("安心稳固/不掉发", [r"\bstrong hold\b", r"\bno[- ]?slip\b", r"\bnon[- ]?slip\b", r"\bslideproof\b", r"\bhold\b"]),
    ("舒适不压头", [r"\bflat\b", r"\bno crease\b", r"\bcreaseless\b", r"\bno bend\b"]),
    ("亲子/儿童呵护", [r"\bbaby\b", r"\btoddler\b", r"\bkids\b", r"\bgirls\b"]),
    ("专业效率", [r"\bstyling\b", r"\bsectioning\b", r"\bduck ?bill\b", r"\balligator\b", r"\bstylist\b"]),
    ("仪式感/礼品感", [r"\bgift\b", r"\bwedding\b", r"\bprom\b", r"\bparty\b", r"\bappreciation\b"]),
]
low_relevance_patterns = [
    r"\bgreat clips\b", r"\bhair products\b", r"\borganizer\b", r"\bfor hats\b", r"\bmagnetic\b"
]

def match_labels(kw, rules):
    labels = []
    for label, pats in rules:
        for p in pats:
            if re.search(p, kw):
                labels.append(label)
                break
    # de-dupe preserving order
    out=[]
    for x in labels:
        if x not in out:
            out.append(x)
    return out

def has_any(kw, pats):
    return any(re.search(p, kw) for p in pats)

def get_brand_tags(kw):
    brands=[]
    for b in brand_terms:
        if b.lower() in kw:
            brands.append(b.title())
    for ip in ip_terms:
        if ip.lower() in kw:
            brands.append("IP/授权风险:" + ip.title())
    # also if top brand column names appear? We'll handle separately
    return brands

def infer_keyword_type(kw, product, hair_need, people, scene, function, style, brands):
    if any(x.startswith("IP/") for x in brands):
        return "IP/角色授权词"
    if brands:
        return "品牌/竞品词"
    if re.fullmatch(r"(hair clips?|clips for hair|hair accessories clips?)", kw):
        return "核心大词"
    if "bulk" in kw or re.search(r"\bpack\b|\bpcs?\b|\bcount\b|\bset\b", kw):
        return "批量/套装词"
    if any("造型" in s or "沙龙" in s for s in scene) or any(x in product for x in ["造型/分区夹","鸭嘴/鳄鱼夹","卷发/发卷夹"]):
        return "专业造型/沙龙词"
    if hair_need:
        return "发质需求词"
    if people:
        return "人群词"
    if any("花朵" in x or "蝴蝶" in x or "星星" in x or "珍珠" in x or "可爱" in x or "闪粉" in x or "IP" in x for x in style + product):
        return "外观风格词"
    if product:
        return "产品形态词"
    return "泛相关词"

def infer_intent(kw_type, kw, rank):
    if kw_type == "核心大词":
        return "高流量认知/转化入口"
    if kw_type == "品牌/竞品词":
        return "竞品比较/品牌拦截"
    if kw_type == "IP/角色授权词":
        return "角色偏好/授权风险意图"
    if kw_type == "专业造型/沙龙词":
        return "工具型/专业用途购买"
    if kw_type == "发质需求词":
        return "问题解决型购买"
    if kw_type == "人群词":
        return "特定人群购买"
    if kw_type == "外观风格词":
        return "审美装饰/潮流搭配"
    if kw_type == "批量/套装词":
        return "性价比/多件套采购"
    if "gift" in kw or "appreciation" in kw:
        return "礼品购买"
    if rank and rank <= 20000:
        return "高流量产品词"
    return "长尾搜索/补充覆盖"

def demand_tier(rank):
    if not rank: return "未知"
    if rank <= 5000: return "S流量"
    if rank <= 20000: return "A流量"
    if rank <= 50000: return "B流量"
    if rank <= 150000: return "C流量"
    if rank <= 500000: return "D长尾"
    return "E低频"

def calc_priority(rank, kw_type, product, hair_need, people, scene, function, style, biz_row, click_sum, conv_sum, low_relevance):
    # Base based on ABA rank
    if rank is None: score = 40
    elif rank <= 5000: score = 92
    elif rank <= 20000: score = 84
    elif rank <= 50000: score = 74
    elif rank <= 150000: score = 63
    elif rank <= 500000: score = 52
    else: score = 42
    # Adjustment by commercial relevance
    if kw_type == "核心大词": score += 5
    if kw_type == "专业造型/沙龙词": score += 5
    if kw_type == "发质需求词": score += 7
    if kw_type == "外观风格词": score += 4
    if "平板/扁平抓夹" in product or "平躺舒适" in function: score += 6
    if "花朵夹" in product or "蝴蝶夹" in product or "星星夹" in product: score += 3
    if people: score += 2
    if biz_row:
        score += 8
        # growth adjustment from 90/180 days
        try:
            g90 = float(biz_row[2])
            g180 = float(biz_row[3])
            if g90 > 0.1: score += 4
            if g180 > 0.1: score += 3
        except Exception:
            pass
    if kw_type == "品牌/竞品词": score -= 7
    if kw_type == "IP/角色授权词": score -= 12
    if low_relevance: score -= 20
    # Top conversion share can imply strong competitor concentration. If top 3 shares too high, competition is high.
    try:
        if click_sum is not None and click_sum > 35: score -= 4
        if conv_sum is not None and conv_sum > click_sum + 5: score += 2
    except Exception:
        pass
    return max(0, min(100, round(score)))

def opportunity_level(score, kw_type, low_relevance):
    if low_relevance:
        return "低相关/谨慎"
    if kw_type == "品牌/竞品词":
        return "品牌/竞品词"
    if kw_type == "IP/角色授权词":
        return "IP/授权谨慎"
    if score >= 85:
        return "S-核心必打"
    if score >= 72:
        return "A-高机会长尾"
    if score >= 58:
        return "B-中机会测试"
    if score >= 45:
        return "C-低量补充"
    return "D-观察/不主推"

def make_combo(product, hair_need, people, scene, function, style):
    parts = []
    for arr in [product[:2], hair_need[:1], people[:1], scene[:1], function[:1], style[:1]]:
        parts.extend(arr)
    if not parts:
        return "泛发夹/发饰需求"
    return " + ".join(parts[:5])

def ad_suggestion(level, kw_type, kw, product, hair_need, people, scene, function, style):
    if kw_type == "品牌/竞品词":
        return "竞品词单独广告组；低预算测试商品投放/精确匹配，Listing 文案避免使用他人商标"
    if kw_type == "IP/角色授权词":
        return "谨慎投放；需确认授权，非授权产品不建议写入标题/图片/后台词"
    if level.startswith("S"):
        return "核心 Exact + Phrase 双结构；单独预算监控 CTR/CVR，主推链接承接"
    if kw_type == "发质需求词":
        return "按 thick/thin/fine/curly 发质分广告组；Exact 收割，Phrase 拓展"
    if kw_type == "专业造型/沙龙词":
        return "工具型词组单独 campaign；搭配 alligator/duckbill/sectioning/curl clips 长尾"
    if kw_type == "外观风格词":
        return "风格词 Broad/Phrase 探索；爆款图案可做季节/站外素材联动"
    if people:
        return "人群词 Phrase 测试；图片和标题承接 women/girls/baby/kids 场景"
    if level.startswith("A"):
        return "高意图长尾 Exact 测试；转化后扩展同义词和商品投放"
    return "长尾 SEO 覆盖；小预算自动/广泛测试，差词及时否定"

def listing_use(kw_type, product, hair_need, people, scene, function, style, level):
    uses = []
    if level.startswith("S") or level.startswith("A"):
        uses.append("标题/五点优先")
    if product: uses.append("类目核心词/后台 Search Terms")
    if hair_need: uses.append("五点发质承接")
    if function: uses.append("卖点图/功能图")
    if style: uses.append("主图/A+风格模块")
    if people or scene: uses.append("场景图/人群图")
    if kw_type == "品牌/竞品词": uses.append("仅广告分组，不写 Listing")
    if kw_type == "IP/角色授权词": uses.append("授权确认后使用")
    return "；".join(dict.fromkeys(uses)) if uses else "后台长尾补充"

def visual_suggestion(product, hair_need, people, scene, function, style, kw):
    if "平板/扁平抓夹" in product or "平躺舒适" in function:
        return "展示 lay-flat 佩戴、开车/瑜伽/躺靠不硌头场景"
    if hair_need:
        return "用 thick/thin/fine/curly 发质真人对比，突出抓力与不滑落"
    if "造型/分区夹" in product or "鸭嘴/鳄鱼夹" in product:
        return "沙龙分区、卷发定型、剪发染发步骤图"
    if any(x in " ".join(style+product) for x in ["花朵", "蝴蝶", "星星", "可爱", "闪粉"]):
        return "近景质感 + 上头效果 + 情绪化穿搭场景，可做季节/派对图"
    if "婴儿" in people or "幼儿" in people:
        return "软包边/不夹头发/小尺寸细节，亲子呵护场景"
    if "女性" in people:
        return "通勤、半扎、盘发、日常穿搭多造型图"
    return "主图突出数量、尺寸、颜色和佩戴效果"

def product_suggestion(kw_type, product, hair_need, people, scene, function, style, kw):
    if "平板/扁平抓夹" in product:
        return "重点开发 flat/lay-flat 抓夹，强调强抓力、舒适佩戴、适合开车/躺靠"
    if "厚发/多发量" in hair_need:
        return "大号/加固齿/强弹簧抓夹，做 thick hair 版本"
    if "薄发/细软发" in hair_need:
        return "轻量小中号、防滑内齿/硅胶垫，避免过重下滑"
    if "造型/分区夹" in product or "鸭嘴/鳄鱼夹" in product:
        return "金属/防锈/硅胶防痕分区夹套装，适合美发和家庭造型"
    if "花朵夹" in product or "蝴蝶夹" in product or "星星夹" in product:
        return "做颜色矩阵和季节款套装，兼顾 girls/women 派对和日常搭配"
    if "婴儿" in people or "幼儿" in people:
        return "全包边、小尺寸、轻夹力、成对套装，规避尖锐金属外露"
    if "批量/套装词" == kw_type:
        return "多色多件套 + 收纳盒，提高客单和礼品感"
    if kw_type == "品牌/竞品词":
        return "分析竞品爆款结构/颜色/尺寸，不直接复制品牌词"
    if kw_type == "IP/角色授权词":
        return "若无授权不建议进入；可用通用 cute/fun 风格替代"
    return "围绕主流发夹款式做颜色、尺寸、材质差异化"

def translate_bucket(product, hair_need, people, style):
    chunks = []
    if people: chunks.append("/".join(people[:2]))
    if hair_need: chunks.append("/".join(hair_need[:2]))
    if product: chunks.append("/".join(product[:2]))
    if style: chunks.append("/".join(style[:2]))
    return "｜".join(chunks) if chunks else "发夹/发饰"

# Build tagged rows
tag_headers = [
    "中文归类","相关性判断","关键词大类","产品形态","发质/头发需求","人群","场景","功能/卖点",
    "材质/外观/风格","参数/套装","情绪/心理需求","购买意图","组合标签","流量分层",
    "Top3点击份额合计","Top3转化份额合计","ABA商机词","90天增长","180天增长",
    "广告打法建议","Listing/链接用途","视觉内容建议","选品/产品建议","机会等级","优先级分","打标证据"
]
result_headers = headers + tag_headers
tagged_rows = []

for r in data:
    # Ensure length
    r = list(r) + [None]*(len(headers)-len(r))
    kw = clean_kw(r[1])
    rank = None
    try: rank = int(r[0])
    except Exception: pass
    # Convert report date value for readability
    row = r[:]
    row[20] = excel_serial_to_date(row[20])
    
    product = match_labels(kw, product_rules)
    hair_need = match_labels(kw, hair_need_rules)
    people = match_labels(kw, people_rules)
    scene = match_labels(kw, scene_rules)
    function = match_labels(kw, function_rules)
    style = match_labels(kw, style_rules)
    param = match_labels(kw, param_rules)
    emotion = match_labels(kw, emotion_rules)
    brands = get_brand_tags(kw)
    top_brands = [str(row[i]).strip() for i in [2,3,4] if row[i]]
    # If search query itself doesn't include brand, keep competitor brands as data evidence only, not tag.
    low_relevance = has_any(kw, low_relevance_patterns)
    
    kw_type = infer_keyword_type(kw, product, hair_need, people, scene, function, style, brands)
    intent = infer_intent(kw_type, kw, rank)
    combo = make_combo(product, hair_need, people, scene, function, style)
    tier = demand_tier(rank)
    click_vals = []
    conv_vals = []
    for idx in [10,14,18]:
        try: click_vals.append(float(row[idx]))
        except Exception: pass
    for idx in [11,15,19]:
        try: conv_vals.append(float(row[idx]))
        except Exception: pass
    click_sum = round(sum(click_vals),2) if click_vals else None
    conv_sum = round(sum(conv_vals),2) if conv_vals else None
    biz_row = biz_map.get(kw)
    score = calc_priority(rank, kw_type, product, hair_need, people, scene, function, style, biz_row, click_sum, conv_sum, low_relevance)
    level = opportunity_level(score, kw_type, low_relevance)
    relevance = "低相关/需人工确认" if low_relevance else ("品牌/IP谨慎" if kw_type in ["品牌/竞品词","IP/角色授权词"] else "相关")
    if not product and not kw_type.startswith("品牌"):
        relevance = "弱相关/泛发饰"
    
    biz_flag = "是" if biz_row else ""
    g90 = biz_row[2] if biz_row else None
    g180 = biz_row[3] if biz_row else None
    evidence = f"ABA排名:{rank}; Top品牌:{'/'.join(top_brands[:3])}; Top3点击:{click_sum}; Top3转化:{conv_sum}"
    if biz_row:
        evidence += f"; 商机搜索量360天:{biz_row[1]}"
    
    tags = [
        translate_bucket(product, hair_need, people, style),
        relevance, kw_type, "；".join(product), "；".join(hair_need), "；".join(people), "；".join(scene), "；".join(function),
        "；".join(style), "；".join(param), "；".join(emotion), intent, combo, tier,
        click_sum, conv_sum, biz_flag, g90, g180,
        ad_suggestion(level, kw_type, kw, product, hair_need, people, scene, function, style),
        listing_use(kw_type, product, hair_need, people, scene, function, style, level),
        visual_suggestion(product, hair_need, people, scene, function, style, kw),
        product_suggestion(kw_type, product, hair_need, people, scene, function, style, kw),
        level, score, evidence
    ]
    tagged_rows.append(row + tags)

len(tagged_rows), len(result_headers), tagged_rows[0][-10:]

---

## 轮次 33 · 助手 · 2026-05-05 16:24 Asia/Shanghai

from artifact_tool import Workbook, SpreadsheetFile
from collections import Counter, defaultdict
import os, re, math, statistics

# Summaries
def split_tags(s):
    return [x for x in str(s or "").split("；") if x.strip()]

# indices in result
col_index = {h:i for i,h in enumerate(result_headers)}
op_idx = col_index["机会等级"]
type_idx = col_index["关键词大类"]
prod_idx = col_index["产品形态"]
need_idx = col_index["发质/头发需求"]
people_idx = col_index["人群"]
scene_idx = col_index["场景"]
func_idx = col_index["功能/卖点"]
style_idx = col_index["材质/外观/风格"]
score_idx = col_index["优先级分"]
search_idx = col_index["搜索词"]
rank_idx = col_index["搜索频率排名"]
rel_idx = col_index["相关性判断"]

total = len(tagged_rows)
op_counter = Counter(r[op_idx] for r in tagged_rows)
type_counter = Counter(r[type_idx] for r in tagged_rows)
relevance_counter = Counter(r[rel_idx] for r in tagged_rows)
brand_counter = Counter()
for r in tagged_rows:
    for i in [2,3,4]:
        if r[i]:
            brand_counter[str(r[i]).strip()] += 1

def tag_counter(idx):
    c=Counter()
    for r in tagged_rows:
        for t in split_tags(r[idx]):
            c[t]+=1
    return c

prod_counter = tag_counter(prod_idx)
need_counter = tag_counter(need_idx)
people_counter = tag_counter(people_idx)
scene_counter = tag_counter(scene_idx)
func_counter = tag_counter(func_idx)
style_counter = tag_counter(style_idx)

# High opportunity rows: Non-brand/non-IP/low; score high
high_rows = [r for r in tagged_rows if r[score_idx] >= 72 and r[op_idx] not in ["品牌/竞品词","IP/授权谨慎","低相关/谨慎"]]
high_rows = sorted(high_rows, key=lambda r: (-r[score_idx], int(r[rank_idx]) if r[rank_idx] else 9999999))[:150]

high_headers = ["搜索频率排名","搜索词","中文归类","关键词大类","产品形态","发质/头发需求","人群","场景","功能/卖点","材质/外观/风格","购买意图","组合标签","流量分层","Top3点击份额合计","Top3转化份额合计","ABA商机词","90天增长","180天增长","机会等级","优先级分","广告打法建议","Listing/链接用途","视觉内容建议","选品/产品建议"]
high_rows_matrix = [[r[col_index[h]] if h in col_index else r[headers.index(h)] for h in high_headers] for r in high_rows]

# Business KEYWORD tagged rows
biz_tag_headers = biz_headers + [
    "中文归类","关键词大类","产品形态","发质/头发需求","人群","场景","功能/卖点","材质/外观/风格",
    "购买意图","组合标签","机会等级","优先级分","广告打法建议","视觉内容建议","选品建议"
]
# Match by keyword to tagged row if exists
tag_by_kw = {clean_kw(r[search_idx]): r for r in tagged_rows}
biz_tag_rows=[]
for br in biz_data:
    kw = clean_kw(br[0])
    tr = tag_by_kw.get(kw)
    if tr:
        biz_tag_rows.append(list(br)+[
            tr[col_index["中文归类"]], tr[type_idx], tr[prod_idx], tr[need_idx], tr[people_idx], tr[scene_idx], tr[func_idx], tr[style_idx],
            tr[col_index["购买意图"]], tr[col_index["组合标签"]], tr[op_idx], tr[score_idx], tr[col_index["广告打法建议"]], tr[col_index["视觉内容建议"]], tr[col_index["选品/产品建议"]]
        ])
    else:
        # fallback
        biz_tag_rows.append(list(br)+["未匹配主表","","","","","","","","","","","", "", "", ""])

# Dashboard rows
overview = [
    ["指标","数量/值","说明"],
    ["总关键词数", total, "主 ABA 表搜索词数量"],
    ["相关关键词", relevance_counter.get("相关",0), "非低相关/非品牌谨慎"],
    ["S-核心必打", op_counter.get("S-核心必打",0), "核心流量或强转化承接词"],
    ["A-高机会长尾", op_counter.get("A-高机会长尾",0), "建议优先广告/Listing 测试"],
    ["B-中机会测试", op_counter.get("B-中机会测试",0), "适合低预算测试或后台覆盖"],
    ["品牌/竞品词", op_counter.get("品牌/竞品词",0), "需独立广告组，Listing 不写竞品商标"],
    ["IP/授权谨慎", op_counter.get("IP/授权谨慎",0), "需确认授权后再使用"],
    ["低相关/谨慎", op_counter.get("低相关/谨慎",0), "建议人工复核或否定"],
    ["高机会清单条数", len(high_rows), "分数≥72且非品牌/IP/低相关"],
]

def counter_table(title, counter, n=15):
    rows = [[title, "数量"]]
    rows += [[k,v] for k,v in counter.most_common(n)]
    return rows

op_table = counter_table("机会等级", op_counter, 20)
type_table = counter_table("关键词大类", type_counter, 20)
prod_table = counter_table("产品形态", prod_counter, 20)
need_table = counter_table("发质/头发需求", need_counter, 20)
people_table = counter_table("人群", people_counter, 20)
scene_table = counter_table("场景", scene_counter, 20)
func_table = counter_table("功能/卖点", func_counter, 20)
style_table = counter_table("材质/外观/风格", style_counter, 20)
brand_table = counter_table("Top品牌出现次数", brand_counter, 20)

# Build tag dictionary sheet
tag_dict_rows = [["维度","标签","关键词/规则示例","业务用途"]]
for dim, rules, usage in [
    ("产品形态", product_rules, "产品结构、标题词、广告分组"),
    ("发质/需求", hair_need_rules, "痛点卖点、发质场景图、广告长尾"),
    ("人群", people_rules, "人群定位、图片模特、礼品场景"),
    ("场景", scene_rules, "场景图、A+模块、站外素材"),
    ("功能/卖点", function_rules, "五点、卖点图、广告承接"),
    ("材质/外观/风格", style_rules, "主图风格、变体、季节款"),
    ("参数/套装", param_rules, "规格、尺寸图、价格带/套装策略"),
    ("情绪/心理需求", emotion_rules, "视觉情绪、文案语气、品牌价值"),
]:
    for label, pats in rules:
        examples = ", ".join([p.replace(r"\b","").replace("\\","") for p in pats[:5]])
        tag_dict_rows.append([dim, label, examples, usage])
tag_dict_rows += [
    ["风险规则","品牌/竞品词", ", ".join(brand_terms[:15]) + "...", "广告可独立测试；Listing、图片、后台词避免使用他人商标"],
    ["风险规则","IP/授权风险", ", ".join(ip_terms), "无授权不建议使用，避免侵权风险"],
    ["风险规则","低相关/谨慎", "great clips, hair products, organizer, magnetic, for hats", "复核后否定或仅作为周边需求观察"],
]

rules_rows = [
    ["模块","规则说明"],
    ["0-1-3颗粒度","0=原始 ABA 搜索词；1=产品/人群/场景/功能/风格等原子标签；3=组合标签+广告/Listing/视觉/选品动作"],
    ["机会等级","S=核心必打；A=高机会长尾；B=中机会测试；C=低量补充；D=观察不主推；品牌/IP/低相关单独处理"],
    ["优先级分","基础分来自 ABA 搜索频率排名；叠加商机 KEYWORD、发质需求、产品形态、功能卖点、趋势风格；品牌/IP/低相关降权"],
    ["广告使用","S/A 词优先 Exact/Phrase；风格词 Broad/Phrase 探索；发质需求词单独 campaign；品牌/竞品词低预算独立测试"],
    ["Listing 使用","核心词进标题/五点；发质/功能进卖点和图片；风格词进主图/A+；竞品/IP 词不要写入 Listing"],
    ["视觉使用","发质词用真人发量对比；flat clips 展示躺靠/开车/瑜伽；styling clips 展示沙龙分区；花朵/蝴蝶/星星做穿搭情绪图"],
    ["选品使用","重点关注 flat clips、thick hair strong hold、thin/fine hair 防滑、duckbill/alligator styling、Y2K/flower/butterfly/star 风格套装、baby/toddler 安全款"],
    ["数据范围","基于上传的 US ABA Month 2026-04-30 表及商机 KEYWORD 表打标；未接入广告 ACOS/CVR，建议后续用广告 Search Term 做二次校准"],
]

# Create workbook
out_wb = Workbook.create()
result_sh = out_wb.worksheets.add("ABA关键词打标结果")
result_matrix = [result_headers] + tagged_rows
result_sh.get_range_by_indexes(0,0,len(result_matrix),len(result_headers)).values = result_matrix

# Add high sheet
high_sh = out_wb.worksheets.add("高机会词清单")
high_matrix = [high_headers] + high_rows_matrix
high_sh.get_range_by_indexes(0,0,len(high_matrix),len(high_headers)).values = high_matrix

# Dashboard
dash_sh = out_wb.worksheets.add("标签汇总_看板")
# Write overview and tables at different positions
dash_sh.get_range_by_indexes(0,0,len(overview),3).values = overview
# place tables in grid
tables = [
    (0,4,op_table), (0,7,type_table), (0,10,prod_table),
    (13,0,need_table), (13,3,people_table), (13,6,scene_table),
    (13,9,func_table), (37,0,style_table), (37,4,brand_table)
]
for sr, sc, mat in tables:
    dash_sh.get_range_by_indexes(sr,sc,len(mat),len(mat[0])).values = mat

# Biz tagged
biz_tag_sh = out_wb.worksheets.add("商机KEYWORD打标")
biz_tag_matrix = [biz_tag_headers] + biz_tag_rows
biz_tag_sh.get_range_by_indexes(0,0,len(biz_tag_matrix),len(biz_tag_headers)).values = biz_tag_matrix

# Tag dictionary
dict_sh = out_wb.worksheets.add("标签词典")
dict_sh.get_range_by_indexes(0,0,len(tag_dict_rows),len(tag_dict_rows[0])).values = tag_dict_rows

# Rules
rules_sh = out_wb.worksheets.add("打标规则说明")
rules_sh.get_range_by_indexes(0,0,len(rules_rows),2).values = rules_rows

# Original sheets
orig_sh = out_wb.worksheets.add("原始ABA数据")
orig_sh.get_range_by_indexes(0,0,len(vals),len(headers)).values = vals
orig_biz_sh = out_wb.worksheets.add("原始商机KEYWORD")
orig_biz_sh.get_range_by_indexes(0,0,len(vals2),len(biz_headers)).values = vals2

# Styling helpers
header_format = {
    "fill": "#1F4E78",
    "font": {"bold": True, "color": "#FFFFFF"},
    "horizontal_alignment": "center",
    "vertical_alignment": "center",
}
subheader_format = {
    "fill": "#D9EAF7",
    "font": {"bold": True, "color": "#0F172A"},
    "horizontal_alignment": "center",
    "vertical_alignment": "center",
}
light_fill = "#F8FAFC"

def style_table_sheet(sh, rows, cols, table_name=None, freeze_cols=0):
    # header
    sh.get_range_by_indexes(0,0,1,cols).format = header_format
    sh.get_range_by_indexes(0,0,rows,cols).format.wrap_text = True
    sh.get_range_by_indexes(0,0,rows,cols).format.vertical_alignment = "top"
    # freeze
    sh.freeze_panes.freeze_rows(1)
    if freeze_cols:
        sh.freeze_panes.freeze_columns(freeze_cols)
    # add table
    if table_name:
        try:
            sh.tables.add(sh.get_range_by_indexes(0,0,rows,cols), True, table_name)
        except Exception as e:
            print(f"table add failed {table_name}: {e}")
    # basic widths
    sh.get_range_by_indexes(0,0,rows,cols).format.autofit_columns()
    # cap/override widths
    for c in range(cols):
        # first few columns
        width = 14
        if c == 1: width = 28
        elif c in [9,13,17]: width = 42  # product title cols in original
        elif c >= 21: width = 20
        if c in [19,20,21,22,23,25,26,27,28,29,30,31,32,35,40,41,42,43,46]:
            width = 36
        if c in [0,10,11,14,15,18,19,34,35,37,38,44,45]:
            width = 12
        try:
            sh.get_range_by_indexes(0,c,rows,1).format.column_width = width
        except Exception:
            pass
    # row heights
    sh.get_range_by_indexes(0,0,1,cols).format.row_height = 34
    if rows > 1:
        sh.get_range_by_indexes(1,0,rows-1,cols).format.row_height = 48

style_table_sheet(result_sh, len(result_matrix), len(result_headers), "HairClipsTagResult", freeze_cols=2)
style_table_sheet(high_sh, len(high_matrix), len(high_headers), "HairClipsHighOpp", freeze_cols=2)
style_table_sheet(biz_tag_sh, len(biz_tag_matrix), len(biz_tag_headers), "BusinessKeywordTags", freeze_cols=1)
style_table_sheet(orig_sh, len(vals), len(headers), "OriginalABAData", freeze_cols=2)
style_table_sheet(orig_biz_sh, len(vals2), len(biz_headers), "OriginalBizKeywords", freeze_cols=1)

# Style dashboard tables
dash_sh.get_range("A1:C1").format = header_format
dash_sh.get_range("A1:M60").format.wrap_text = True
dash_sh.get_range("A1:M60").format.vertical_alignment = "top"
# subtable headers
for sr, sc, mat in tables:
    dash_sh.get_range_by_indexes(sr, sc, 1, len(mat[0])).format = header_format
    try:
        dash_sh.get_range_by_indexes(sr+1, sc+1, max(1,len(mat)-1), 1).conditional_formats.add_data_bar({"color": "#5B9BD5", "gradient": True})
    except Exception:
        pass
# overview counts data bars
try:
    dash_sh.get_range("B2:B10").conditional_formats.add_data_bar({"color":"#5B9BD5","gradient":True})
except Exception:
    pass
# widths
for c,w in enumerate([22,12,40,2,20,10,2,22,10,2,24,10,2]):
    try:
        dash_sh.get_range_by_indexes(0,c,60,1).format.column_width = w
    except Exception:
        pass
dash_sh.freeze_panes.freeze_rows(1)

# Dictionary/rules styling
for sh, matrix, cols, tname in [(dict_sh, tag_dict_rows, 4, "TagDictionary"), (rules_sh, rules_rows, 2, "TagRules")]:
    sh.get_range_by_indexes(0,0,1,cols).format = header_format
    sh.get_range_by_indexes(0,0,len(matrix),cols).format.wrap_text = True
    sh.get_range_by_indexes(0,0,len(matrix),cols).format.vertical_alignment = "top"
    sh.get_range_by_indexes(0,0,len(matrix),cols).format.autofit_columns()
    for c,w in enumerate([18,20,55,40] if cols==4 else [24,100]):
        sh.get_range_by_indexes(0,c,len(matrix),1).format.column_width = w
    sh.get_range_by_indexes(0,0,1,cols).format.row_height = 30
    if len(matrix)>1:
        sh.get_range_by_indexes(1,0,len(matrix)-1,cols).format.row_height = 48
    try:
        sh.tables.add(sh.get_range_by_indexes(0,0,len(matrix),cols), True, tname)
    except Exception as e:
        print(f"table add failed {tname}: {e}")

# Conditional formatting on result/high sheets
# column score and opportunity
try:
    # Result priority col is 46? 0-index col score_idx
    result_sh.get_range_by_indexes(1, score_idx, len(tagged_rows), 1).conditional_formats.add_data_bar({"color":"#70AD47","gradient":True})
    high_score_idx = high_headers.index("优先级分")
    high_sh.get_range_by_indexes(1, high_score_idx, max(1,len(high_rows_matrix)), 1).conditional_formats.add_data_bar({"color":"#70AD47","gradient":True})
except Exception as e:
    print("conditional data bar failed", e)

# Highlight opportunity levels
try:
    # Using custom formulas; row 2
    op_col_letter = None
    # simple helper
    def col_letter(n):
        s=""
        n+=1
        while n:
            n, rem = divmod(n-1, 26)
            s = chr(65+rem)+s
        return s
    op_col_letter = col_letter(op_idx)
    result_range = result_sh.get_range_by_indexes(1,0,len(tagged_rows),len(result_headers))
    result_range.conditional_formats.add_custom(f'=${op_col_letter}2="S-核心必打"', {"fill":"#D9EAD3"})
    result_range.conditional_formats.add_custom(f'=${op_col_letter}2="A-高机会长尾"', {"fill":"#E2F0D9"})
    result_range.conditional_formats.add_custom(f'=${op_col_letter}2="品牌/竞品词"', {"fill":"#FFF2CC"})
    result_range.conditional_formats.add_custom(f'=${op_col_letter}2="IP/授权谨慎"', {"fill":"#FCE4D6"})
except Exception as e:
    print("conditional custom failed", e)

# Add a simple chart to dashboard if possible
try:
    chart = dash_sh.charts.add("bar", dash_sh.get_range_by_indexes(0,4,len(op_table),2))
    chart.title_text = "机会等级分布"
    chart.set_position("N2", "U18")
except Exception as e:
    print("chart failed", e)

# Verify quick inspect
print(out_wb.inspect({"kind":"table","range":"ABA关键词打标结果!A1:AU6","include":"values","table_max_rows":6,"table_max_cols":47}).ndjson[:2000])
print(out_wb.inspect({"kind":"match","search_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A","options":{"use_regex":True,"max_results":50},"summary":"error scan"}).ndjson[:1000])

# Export
out_path = "/mnt/data/美国站hair_clips发夹_ABA关键词打标结果.xlsx"
SpreadsheetFile.export_xlsx(out_wb).save(out_path)
out_path

---

## 轮次 34 · 助手 · 2026-05-05 16:26 Asia/Shanghai

# Print summary stats for final
print("total", total)
print("op", op_counter)
print("types", type_counter.most_common(10))
print("products", prod_counter.most_common(10))
print("needs", need_counter.most_common(10))
print("people", people_counter.most_common(10))
print("scenes", scene_counter.most_common(10))
print("high", len(high_rows))
print("file exists", os.path.getsize(out_path))

---

## 轮次 35 · 助手 · 2026-05-05 16:26 Asia/Shanghai

已完成 **hair clips 美国站发夹 ABA 关键词打标**，新文件已生成：

[下载：美国站hair_clips发夹_ABA关键词打标结果.xlsx](sandbox:/mnt/data/美国站hair_clips发夹_ABA关键词打标结果.xlsx)

本次处理：

- 主表关键词：**561 条**
- 补充处理：**商机KEYWORD 20 条**
- 新增标签维度：
  - 产品形态
  - 发质/头发需求
  - 人群
  - 场景
  - 功能/卖点
  - 材质/外观/风格
  - 参数/套装
  - 情绪/心理需求
  - 购买意图
  - 组合标签
  - 广告打法建议
  - Listing/链接用途
  - 视觉内容建议
  - 选品/产品建议
  - 机会等级
  - 优先级分

文件包含 8 个 sheet：

1. **ABA关键词打标结果**：完整逐行打标结果  
2. **高机会词清单**：筛选出的重点词  
3. **标签汇总_看板**：各类标签统计和机会分布  
4. **商机KEYWORD打标**：商机词补充打标  
5. **标签词典**：本次发夹类目使用的规则词典  
6. **打标规则说明**：0-1-3 颗粒度与使用说明  
7. **原始ABA数据**  
8. **原始商机KEYWORD**

打标结果概览：

- **S-核心必打**：14 个  
- **A-高机会长尾**：13 个  
- **B-中机会测试**：81 个  
- **品牌/竞品词**：10 个  
- **IP/授权谨慎词**：7 个  
- **低相关/谨慎词**：7 个  
- 高机会清单：**27 个重点词**

重点机会方向包括：

- **flat hair clips / lay-flat 抓夹**
- **claw clips for thick hair**
- **hair clips for thin/fine hair**
- **duckbill / alligator / sectioning styling clips**
- **butterfly / flower / star / Y2K 风格发夹**
- **baby / toddler / girls 发夹**
- **bulk / pack / set 套装词**

---

## 轮次 36 · 用户 · 2026-05-07 10:58 Asia/Shanghai

结合SIF价值打法整理成亚马逊关键词打标最新路径 逻辑算法，第一步：搭建词库（收集消费者需求）
第二步：通过词频统计整理消费者需求的分类
词频统计，词频，中文翻译，搜索需求分类，搜索量加权词频，出现次数词频  操作

搜索需求分类 包括 品类名称，目标受众，使用场景，功能特征，风格款式，颜色，材质材料，尺寸大小，容量，参数，主题元素，品牌，季节，节日，兼容搭配，配件，其他需求



第三步:用自己产品的卖点(供给)反向匹配市场需求，并评估需求的大小
  评论分析，目标受众
  需求概览，品类名称，目标受众，使用场景，功能，特性，风格，款式，颜色，尺寸/大小，容量，参数，主题元素 品牌，材质，季节，节日，兼容，搭配，配件，其他需求
第四步：以消费者需求为中心搭建广告框架(核心指导思想)
第五步：整理需求点对应的关键词，规划投放词和匹配模式
第六步：根据关键词的搜索量集中度拆分关键词到多个广告活动

价值验证
价值打法的应用：始于关键词，但不止于关键词
 说明TF  词频统计 词频

TF / Term Frequency

TF（Term Frequency）是指在某个文件中某个词汇出现的频率，即该词汇在文件中出现的次数。TF在信息检索和文本挖掘中广泛应用，用于衡量一个词汇对于整个文本的重要性。

---

## 轮次 37 · 助手 · 2026-05-07 10:58 Asia/Shanghai

{"queries":["+(价值打法) +(消费者需求) 关键词投放 广告框架 词频统计 PMF COSMO Rufus --QDF=2","+(第一步) 搭建词库 收集消费者需求 +(第二步) 词频统计 整理消费者需求 分类 +(第三步) 卖点 供给 反向匹配 市场需求 --QDF=2","+(第四步) 消费者需求 广告框架 +(第五步) 关键词 匹配模式 +(第六步) 搜索量集中度 广告活动 --QDF=2","价值验证 关键词精准投放 调组匹配 流量拓展 泛化 商品投放 自动广告 --QDF=2"],"source_filter":["files_uploaded_in_conversation"]}

---

## 轮次 38 · 助手 · 2026-05-07 10:58 Asia/Shanghai

{"pointers":["1:0","1:1","1:2"]}

---

## 轮次 39 · 助手 · 2026-05-07 10:59 Asia/Shanghai

下面这版可以作为你后续 **亚马逊关键词打标系统 V2：SIF价值打法版** 的核心路径和逻辑算法。

核心思想先定下来：

> **关键词不是投放核心，消费者需求才是投放核心。**  
> 关键词只是消费者需求的外显表达；打标的目的不是把词分好类，而是把“需求”识别出来，再用自己的产品供给去匹配需求，最后形成广告、Listing、视觉、选品的统一打法。

这和你上传的 SIF 价值打法文件里的逻辑一致：文件中明确强调“投放广告的核心不是关键词，而是具体的消费者需求”；同时提出要先搭建词库、通过词频统计整理需求分类，再用产品卖点反向匹配需求，并以消费者需求为中心搭建广告框架。fileciteturn2file0

---

# 一、整体路径：从关键词打标到价值打法

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

---

# 二、第一步：搭建词库，收集消费者需求

这一阶段不是简单收集关键词，而是收集 **目标市场里的需求表达**。

## 1. 词库来源

建议至少包含：

| 数据来源 | 作用 |
|---|---|
| ABA 搜索词 | 市场真实搜索需求 |
| 广告 Search Term | 真实点击与转化需求 |
| 竞品标题/五点/A+ | 竞品正在表达的供给 |
| 竞品评论 | 用户真实痛点、期待和满意点 |
| 竞品 Q&A | 购买前顾虑 |
| 类目词/属性词 | 平台标准需求维度 |
| 站外热词 | 趋势、审美、情绪、流行元素 |
| 自己产品卖点 | 后续供给匹配用 |

SIF 文件里第一步就是“搭建词库（收集消费者需求）”，并强调词库本质上代表目标市场。fileciteturn2file0

---

## 2. 词库基础字段

建议原始词库表字段如下：

| 字段 | 说明 |
|---|---|
| raw_keyword | 原始关键词 |
| normalized_keyword | 清洗后关键词 |
| 中文翻译 | 方便人工理解 |
| 数据来源 | ABA / 广告 / 竞品 / 评论 / 站外 |
| ABA 排名 | ABA Search Frequency Rank |
| 搜索量 | 如果有第三方搜索量则填 |
| 搜索量权重 | 没有搜索量时，用 ABA 排名换算 |
| 点击份额 | ABA Top Clicked Product 相关数据 |
| 转化份额 | ABA Top Purchased Product 相关数据 |
| 相关 ASIN | 对应竞品 |
| 类目 | 主类目/细分类目 |
| 品牌词标记 | 是否品牌词 |
| IP/侵权风险 | 是否涉及授权/IP |
| 是否有效词 | 有效 / 低相关 / 剔除 |

---

# 三、第二步：通过词频统计整理消费者需求分类

这一步是 SIF 价值打法的关键：  
**不要先按广告活动分词，而是先按消费者需求分词。**

文件第 18 页的核心就是：通过词频统计整理消费者需求分类，例如人群、颜色、尺寸、主题元素、品牌、节日、其他需求等。fileciteturn2file0

---

## 1. TF 是什么？

你提到的 TF，完整叫：

> **TF / Term Frequency / 词频**

在关键词打标里，TF 可以理解为：

> 某个词根、元素、属性、需求点，在整个关键词词库中出现的频率。

例如 hair clips 词库里：

```text
claw clips for thick hair
large claw clips
matte claw clips
small claw clips
flower claw clips
```

其中：

- claw 出现 5 次
- clips 出现 5 次
- thick hair 出现 1 次
- large 出现 1 次
- matte 出现 1 次
- flower 出现 1 次

这就是基础词频。

---

## 2. 词频分两种

你这里建议做两套词频。

## A. 出现次数词频

公式：

```text
出现次数词频 TF_count(t) =
包含某个词 / 标签 t 的关键词数量
```

例如：

| 词 | 出现关键词数 |
|---|---|
| claw | 120 |
| thick hair | 36 |
| matte | 18 |
| flower | 12 |

它回答的是：

> 这个需求在词库里被提到了多少次？

---

## B. 搜索量加权词频

只看出现次数不够，因为有些词出现少，但搜索量很大。

公式：

```text
搜索量加权词频 TF_weighted(t) =
Σ 关键词搜索量 × 是否包含标签 t
```

如果没有搜索量，只有 ABA 排名，可以用排名权重替代：

```text
ABA权重 = 1 / ln(ABA排名 + 1)
```

然后：

```text
搜索量加权词频 =
Σ ABA权重 × 是否包含标签 t
```

它回答的是：

> 这个需求背后有多大的真实搜索需求？

---

## 3. 词频统计表字段

建议生成一张 **消费者需求词频表**：

| 字段 | 说明 |
|---|---|
| 词根/元素 | thick hair / claw / flower / black |
| 中文翻译 | 厚发 / 抓夹 / 花朵 / 黑色 |
| 搜索需求分类 | 目标受众 / 功能特征 / 风格款式 / 颜色 |
| 出现次数词频 | 出现次数 |
| 出现次数占比 | 出现次数 / 总关键词数 |
| 搜索量加权词频 | 按搜索量或 ABA 权重加权 |
| 搜索需求占比 | 该词加权搜索量 / 总加权搜索量 |
| 代表关键词 | 典型关键词 |
| 相关产品卖点 | 自己产品是否能承接 |
| 是否适合投放 | 是 / 否 / 待验证 |
| 备注 | 侵权、低相关、季节性等 |

---

# 四、搜索需求分类体系

你给的分类已经比较完整，我建议固定为这 18 个一级类。

| 一级分类 | 解释 | 示例 |
|---|---|---|
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
| 其他需求 | 无法归入主类的需求 | bulk, wholesale, aesthetic |
| 风险词 | IP、低相关、侵权、成人等 | Disney, Barbie, trademark terms |

---

# 五、第三步：用自己产品卖点反向匹配市场需求

这一步是 **价值打法的核心算法**。

SIF 文件第 19 页明确讲的是：用自己产品的卖点，也就是供给，反向匹配市场需求，并评估需求大小。fileciteturn2file0

也就是说：

> 不是市场有什么词就全部打，而是先判断：  
> 这个需求，我的产品能不能满足？  
> 满足得强不强？  
> 这个需求大不大？  
> 竞争强不强？  
> 值不值得投？

---

## 1. 建立“供给卖点表”

以 hair clips 为例：

| 自己产品卖点 | 对应需求分类 | 可承接关键词 |
|---|---|---|
| 大号抓夹 | 尺寸大小 | large claw clips |
| 强抓力 | 功能特征 | strong hold hair clips |
| 适合厚发 | 目标受众/发质需求 | claw clips for thick hair |
| 哑光质感 | 风格款式/外观 | matte claw clips |
| 花朵造型 | 主题元素 | flower hair clips |
| 多件套 | 参数/套装 | hair clips pack |
| 女孩可用 | 目标受众 | hair clips for girls |
| 婚礼造型 | 使用场景 | wedding hair clips |

---

## 2. 供给匹配评分

建议用 0-1-3 颗粒度：

| 分值 | 含义 | 示例 |
|---|---|---|
| 0 | 无法满足 | 用户搜 metal clip，但产品是塑料 |
| 1 | 弱满足/间接满足 | 用户搜 thick hair，产品可用但无强抓力设计 |
| 3 | 强满足/核心卖点 | 产品主打 strong hold for thick hair |

公式：

```text
供给匹配分 Supply Fit =
0 / 1 / 3
```

---

## 3. 需求价值评分

建议综合：

```text
需求价值分 =
搜索需求强度 × 供给匹配分 × 转化潜力 × 利润可行性 × 竞争修正
```

第一版可以简化为：

```text
Value Score =
需求分 × 0.4
+ 供给匹配分 × 0.3
+ 评论痛点强度 × 0.15
+ 转化信号 × 0.1
+ 利润/可做性 × 0.05
```

其中：

```text
需求分 =
搜索量加权词频 × 0.7
+ 出现次数词频 × 0.3
```

---

# 六、评论分析如何并入需求判断

评论不是单独看的，它要和关键词需求打通。

## 评论打标维度

| 评论内容 | 标签类型 | 作用 |
|---|---|---|
| “doesn’t hold thick hair” | 痛点 | 厚发抓力不足 |
| “too small” | 尺寸痛点 | 需要 large/jumbo |
| “cute design” | 情绪/风格 | 可爱外观被认可 |
| “breaks easily” | 质量痛点 | 耐用性机会 |
| “great for wedding” | 场景 | 婚礼使用场景 |
| “my daughter loves it” | 人群/情感 | 女孩/亲子购买 |

评论分析要输出三类结果：

```text
1. 已验证价值：用户明确满意的点
2. 未满足需求：用户抱怨但竞品没解决的点
3. 情绪需求：用户为什么喜欢或讨厌
```

然后反向补到关键词标签里。

例如：

```text
关键词：claw clips for thick hair
评论痛点：doesn’t hold thick hair
自己卖点：strong hold
最终判断：高价值需求词，适合主推
```

---

# 七、第四步：以消费者需求为中心搭建广告框架

SIF 文件第 20 页讲的是：以消费者需求为中心搭建广告框架，而不是以关键词本身为中心。fileciteturn2file0

广告结构应该从：

```text
关键词 → 广告活动
```

升级为：

```text
需求点 → 广告活动 → 广告组 → 关键词 → 匹配模式
```

---

## 广告结构模板

```text
产品组合 / Portfolio
  └── 需求大类 Campaign
        └── 需求细分 Ad Group
              └── 关键词 Keyword
                    └── 匹配模式 Match Type
```

例如 hair clips：

```text
Campaign 1：厚发强抓力需求
  Ad Group 1：claw clips for thick hair
  Ad Group 2：large claw clips
  Ad Group 3：strong hold hair clips

Campaign 2：造型风格需求
  Ad Group 1：flower hair clips
  Ad Group 2：butterfly hair clips
  Ad Group 3：y2k hair clips

Campaign 3：人群需求
  Ad Group 1：hair clips for girls
  Ad Group 2：baby hair clips
  Ad Group 3：toddler hair clips

Campaign 4：场景需求
  Ad Group 1：wedding hair clips
  Ad Group 2：party hair clips
  Ad Group 3：school hair clips
```

---

# 八、第五步：整理需求点对应关键词，规划投放词和匹配模式

SIF 文件第 21 页强调：整理需求点对应的关键词，并规划投放词和匹配模式。fileciteturn2file0

## 匹配模式建议

| 需求状态 | 关键词类型 | 匹配模式 | 目的 |
|---|---|---|---|
| 高需求 + 高匹配 | 核心转化词 | Exact 精准 | 价值验证/控转化 |
| 中高需求 + 长尾 | 场景/人群/功能词 | Phrase 词组 | 拓展精准流量 |
| 需求不确定 | 宽泛需求词 | Broad 广泛 | 探索新搜索词 |
| 已验证价值点 | 大词/核心词 | Exact + Phrase | 放量 |
| 竞品强相关 | 竞品 ASIN / 品牌词 | 商品投放 | 抢竞品流量 |
| 未知需求 | 自动广告 | Close/Substitutes | 挖词和语义扩展 |

---

## 关键词投放分层

| 层级 | 关键词类型 | 示例 | 投放动作 |
|---|---|---|---|
| S 层 | 高需求高匹配核心词 | claw clips for thick hair | 精准投放，单独预算 |
| A 层 | 高机会长尾词 | matte large claw clips | 词组/精准测试 |
| B 层 | 中机会探索词 | cute hair clips | 词组/广泛 |
| C 层 | 低相关或不确定词 | salon tools | 小预算探索 |
| R 层 | 风险词 | IP/授权/竞品商标 | 谨慎或否定 |

---

# 九、第六步：按搜索量集中度拆分广告活动

SIF 文件第 22 页提到：如果同一个价值点下某些关键词搜索量过大，为了防止流量过于集中，可以把大的卖点词单独拆出来做一个广告活动，也就是类似 SKAG；但最终评估时，要把同一价值点下的数据合并评估。fileciteturn2file0

---

## 搜索量集中度算法

对每一个需求点，计算：

```text
单词搜索占比 =
某关键词搜索量 / 该需求点总搜索量
```

```text
Top3 搜索集中度 =
该需求点下 Top3 关键词搜索量 / 该需求点总搜索量
```

---

## 拆分规则

| 情况 | 操作 |
|---|---|
| 单个关键词占比 ≥ 30% | 单独 Campaign / SKAG |
| Top3 关键词占比 ≥ 60% | Top3 单独拆组 |
| 搜索量分散 | 按需求主题合并广告组 |
| 词量少但转化强 | Exact 小预算验证 |
| 搜索量大但供给弱 | 谨慎测试，不主推 |
| 搜索量小但评论痛点强 | 长尾精准测试 |

---

## 示例

需求点：厚发强抓力

| 关键词 | 搜索量占比 | 操作 |
|---|---:|---|
| claw clips for thick hair | 42% | 单独 Campaign |
| large claw clips | 22% | 单独 Ad Group |
| strong hold hair clips | 12% | 合并测试 |
| hair clips for thick hair | 10% | 合并测试 |
| jumbo claw clips | 8% | 合并测试 |

最终评估时，不只看单个词，而是看整个需求点：

```text
厚发强抓力需求整体表现 =
所有 thick hair / strong hold / large claw clips 相关广告数据合并评估
```

---

# 十、价值验证路径

SIF 文件第 23 页提出：价值打法始于关键词，但不止于关键词；先做价值验证，再基于已验证价值做流量拓展，最后做流量泛化。fileciteturn2file0

可以整理成三阶段。

---

## 阶段 1：价值验证

目标：

> 验证这个需求点是否真的能为你的产品带来点击和转化。

操作：

```text
关键词投放：
- Exact 精准
- Phrase 词组

预算：
- 小预算
- 控制变量
- 按需求点分组
```

核心指标：

| 指标 | 判断 |
|---|---|
| CTR | 用户是否被吸引 |
| CVR | 产品是否满足需求 |
| CPC | 流量成本 |
| ACOS | 盈利可行性 |
| Search Term | 是否拓展出相似需求 |

---

## 阶段 2：基于已验证价值的流量拓展

当某个需求点验证成功后，再扩展：

```text
搜索页投放：
- 关键词精准
- 关键词词组

商品详情页投放：
- 目标 ASIN
- 高度相似竞品
- 已验证流量来源 ASIN
```

例如：

```text
已验证价值点：thick hair strong hold
拓展方向：
- claw clips for thick hair
- large claw clips
- jumbo claw clips
- strong hold hair clips
- 竞品 ASIN 商品投放
```

---

## 阶段 3：流量泛化

目标：

> 不是只吃一个关键词，而是把需求点扩展成更大的流量池。

操作：

```text
- Broad 广泛匹配
- 自动广告
- 商品投放扩展
- 类目投放
- 相似竞品投放
- Listing 文案强化
- 主图/A+强化需求表达
```

---

# 十一、关键词打标最终算法

可以把整个系统算法写成这样。

## 输入数据

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

## Step 1：关键词清洗

```text
normalize(keyword):
  小写化
  去符号
  单复数归一
  同义词归一
  品牌词识别
  IP词识别
  无效词过滤
```

---

## Step 2：需求元素抽取

```text
extract_elements(keyword):
  提取品类词
  提取人群词
  提取场景词
  提取功能词
  提取风格词
  提取颜色词
  提取材质词
  提取尺寸词
  提取主题元素词
  提取品牌词
  提取节日/季节词
```

---

## Step 3：需求分类打标

```text
for each element:
  match tag_dictionary
  assign demand_category
```

输出：

```text
关键词 = claw clips for thick hair

标签：
品类名称 = claw clips
目标受众/发质 = thick hair
功能特征 = strong hold 隐含需求
购买意图 = 精准需求词
```

---

## Step 4：词频统计

```text
TF_count(tag) =
Σ 是否出现 tag
```

```text
TF_weighted(tag) =
Σ keyword_weight_i × 是否出现 tag
```

如果有搜索量：

```text
keyword_weight_i = search_volume_i
```

如果只有 ABA 排名：

```text
keyword_weight_i = 1 / ln(ABA_rank_i + 1)
```

---

## Step 5：需求强度评分

```text
Demand Score =
标准化搜索量加权词频 × 0.6
+ 标准化出现次数词频 × 0.25
+ 转化信号 × 0.15
```

转化信号可以来自：

```text
ABA购买份额
广告CVR
广告订单数
评论正向提及
```

---

## Step 6：供给匹配评分

```text
Supply Fit =
3：强匹配，是产品核心卖点
1：弱匹配，产品可以承接但不是核心优势
0：不匹配，产品无法满足
```

---

## Step 7：价值机会评分

```text
Value Opportunity Score =
Demand Score × 0.4
+ Supply Fit × 0.3
+ Review Pain Gap × 0.15
+ Competition Advantage × 0.1
+ Profit Feasibility × 0.05
```

---

## Step 8：广告动作判断

```text
if Demand高 and SupplyFit=3:
    S级核心价值词，Exact + Phrase，独立预算

if Demand中高 and SupplyFit=3:
    A级长尾机会词，Phrase + Exact测试

if Demand高 and SupplyFit=1:
    B级谨慎测试，先小预算验证

if Demand低 and SupplyFit=3:
    C级低量精准词，适合Listing收录/低预算

if SupplyFit=0:
    不主推，可否定或仅观察

if IP/品牌风险:
    风险词，谨慎投放或剔除
```

---

# 十二、最终输出表结构

建议你的关键词打标结果表固定为下面这些字段。

| 字段 | 说明 |
|---|---|
| 原始关键词 | raw keyword |
| 清洗关键词 | normalized keyword |
| 中文翻译 | 中文理解 |
| 搜索需求分类 | 品类/人群/场景/功能等 |
| 品类名称 | 产品对象 |
| 目标受众 | 谁用 |
| 使用场景 | 哪里用/什么时候用 |
| 功能特征 | 解决什么问题 |
| 风格款式 | 审美风格 |
| 颜色 | 颜色需求 |
| 材质材料 | 材质需求 |
| 尺寸大小 | 大小规格 |
| 容量 | 容量需求 |
| 参数 | 技术/规格 |
| 主题元素 | 图案/造型/元素 |
| 品牌 | 品牌/竞品 |
| 季节 | 季节性 |
| 节日 | 节日需求 |
| 兼容搭配 | 适配/搭配对象 |
| 配件 | 配件/耗材 |
| 其他需求 | 其他 |
| 出现次数词频 | TF_count |
| 搜索量加权词频 | TF_weighted |
| 需求强度 | Demand Score |
| 自身卖点匹配 | Supply Fit |
| 评论痛点匹配 | Review Gap |
| 价值机会分 | Value Score |
| 机会等级 | S/A/B/C/R |
| 推荐广告结构 | Campaign / Ad Group |
| 推荐匹配模式 | Exact / Phrase / Broad / Auto / Product |
| Listing用途 | 标题/五点/A+/后台词 |
| 视觉用途 | 主图/场景图/对比图/A+ |
| 选品用途 | 开发/改款/包装/套装 |
| 备注 | 风险、季节性、低相关 |

---

# 十三、核心总结

SIF 价值打法下，亚马逊关键词打标的最新路径不是：

```text
收集关键词 → 分类 → 投广告
```

而是：

```text
收集关键词
→ 还原消费者需求
→ 用词频判断需求大小
→ 用产品卖点判断供给匹配
→ 用评论验证痛点和价值
→ 按需求点搭建广告结构
→ 按搜索量集中度拆分广告活动
→ 用广告数据验证价值
→ 把已验证价值迁移到关键词、商品投放、自动广告、Listing、视觉和产品开发
```

最终公式可以记成一句话：

```text
关键词价值 =
消费者需求强度 × 产品供给匹配度 × 广告验证结果 × 可规模化程度
```

也就是：

> **始于关键词，落到需求；始于投放，回到产品价值。**

---

## 轮次 40 · 用户 · 2026-05-07 11:03 Asia/Shanghai

给亚马逊美国空净的关键词打标

---

## 轮次 41 · 助手 · 2026-05-07 11:03 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/SKILL.md

---

## 轮次 42 · 助手 · 2026-05-07 11:03 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/API_QUICK_START.md

---

## 轮次 43 · 助手 · 2026-05-07 11:03 Asia/Shanghai

from artifact_tool import Blob, SpreadsheetFile, Workbook
input_path="/mnt/data/关键词搭建 汇总工作簿1(1).xlsx"
wb = SpreadsheetFile.import_xlsx(Blob.load(input_path))
print(wb.inspect({"kind":"sheet","include":"id,name,dimensions"}).ndjson[:2000])

---

## 轮次 44 · 助手 · 2026-05-07 11:05 Asia/Shanghai

bash -lc python - <<'PY'
from artifact_tool import Blob, SpreadsheetFile
print('ok')
PY

---

## 轮次 45 · 助手 · 2026-05-07 11:05 Asia/Shanghai

bash -lc python - <<'PY'
from artifact_tool import Blob, SpreadsheetFile
p='/mnt/data/关键词搭建 汇总工作簿1(1).xlsx'
wb=SpreadsheetFile.import_xlsx(Blob.load(p))
print('imported')
print(wb.inspect({'kind':'sheet','include':'id,name,dimensions'}).ndjson[:2000])
PY

---

## 轮次 46 · 助手 · 2026-05-07 11:06 Asia/Shanghai

bash -lc python - <<'PY'
import openpyxl, os, json, sys
p='/mnt/data/关键词搭建 汇总工作簿1(1).xlsx'
wb = openpyxl.load_workbook(p, read_only=True, data_only=False)
print(wb.sheetnames)
for ws in wb.worksheets:
    print(ws.title, ws.max_row, ws.max_column)
    headers=[ws.cell(1,c).value for c in range(1,min(ws.max_column,20)+1)]
    print(headers)
PY

---

## 轮次 47 · 助手 · 2026-05-07 11:06 Asia/Shanghai

bash -lc python - <<'PY'
import openpyxl, json
p='/mnt/data/关键词搭建 汇总工作簿1(1).xlsx'
wb=openpyxl.load_workbook(p, read_only=True, data_only=True)
ws=wb['主要的 ABA数据']
for r in range(1,20):
    vals=[ws.cell(r,c).value for c in range(1,11)]
    print(r, vals)
PY

---

## 轮次 48 · 助手 · 2026-05-07 11:07 Asia/Shanghai

bash -lc python - <<'PY'
import openpyxl, re, collections
p='/mnt/data/关键词搭建 汇总工作簿1(1).xlsx'
wb=openpyxl.load_workbook(p, read_only=True, data_only=True)
ws=wb['主要的 ABA数据']
rows=[]
for row in ws.iter_rows(min_row=2, values_only=True):
    if row[1]: rows.append(row)
print('rows',len(rows))
for row in rows[:100]: print(row[0], row[1], row[4], row[5], row[6])
print('last')
for row in rows[-30:]: print(row[0], row[1])
# top tokens
cnt=collections.Counter()
for row in rows:
    kw=row[1].lower()
    tokens=re.findall(r"[a-z0-9]+", kw)
    cnt.update(tokens)
print(cnt.most_common(100))
PY

---

## 轮次 49 · 助手 · 2026-05-07 11:07 Asia/Shanghai

bash -lc cat > /tmp/tag_air_purifier.py <<'PY'
import openpyxl, re, math, statistics, os, json, sys, textwrap
from openpyxl import Workbook, load_workbook
from openpyxl.styles import Font, PatternFill, Border, Side, Alignment
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl.chart import BarChart, PieChart, Reference
from openpyxl.formatting.rule import ColorScaleRule, DataBarRule, CellIsRule, FormulaRule
from openpyxl.worksheet.datavalidation import DataValidation
from collections import defaultdict, Counter
from datetime import datetime

INPUT = '/mnt/data/关键词搭建 汇总工作簿1(1).xlsx'
OUTPUT = '/mnt/data/亚马逊美国站空气净化器_SIF关键词打标结果.xlsx'

# ------------------ helpers ------------------
def norm_text(s):
    if s is None:
        return ''
    s = str(s).strip().lower()
    s = s.replace('’', "'").replace('“','"').replace('”','"')
    s = re.sub(r"^[\s'\"]+|[\s'\"]+$", '', s)
    s = re.sub(r'\s+', ' ', s)
    return s

def contains_any(text, phrases):
    return [label for pat,label in phrases if re.search(pat, text)]

def uniq(seq):
    out=[]
    seen=set()
    for x in seq:
        if x and x not in seen:
            out.append(x); seen.add(x)
    return out

def join_tags(tags):
    return '、'.join(uniq(tags)) if tags else ''

# ------------------ dictionaries ------------------
brands = [
    (r'\blevoit\b', 'Levoit'), (r'\bshark\b', 'Shark'), (r'\bwinix\b', 'Winix'),
    (r'\bdyson\b', 'Dyson'), (r'\bhoneywell\b', 'Honeywell'), (r'\bblueair\b|\bblue air\b', 'Blueair'),
    (r'\bgerm\s*guardian\b|\bgermguardian\b', 'GermGuardian'), (r'\bair\s*doctor\b', 'AirDoctor'),
    (r'\bgovee\b', 'Govee'), (r'\bmedify\b', 'Medify'), (r'\bpuroair\b', 'PuroAir'),
    (r'\bcoway\b', 'Coway'), (r'\baroeve\b', 'AROEVE'), (r'\bafloia\b', 'Afloia'),
    (r'\btolife\b|\bto life\b', 'ToLife'), (r'\boneisall\b|\bone is all\b', 'oneisall'),
    (r'\bclorox\b', 'Clorox'), (r'\bsans\b', 'Sans'), (r'\balen\b', 'Alen'),
    (r'\bnuwave\b', 'NuWave'), (r'\bmorento\b', 'Morento'), (r'\blab\s*charge\b|\blabcharge\b', 'LabCharge'),
    (r'\bdreo\b', 'Dreo'), (r'\bmooka\b', 'MOOKA'), (r'\bclarifion\b', 'Clarifion'),
    (r'\bairthereal\b', 'Airthereal'), (r'\biqair\b', 'IQAir'), (r'\bholmes\b', 'Holmes'),
    (r'\btherapure\b', 'Therapure'), (r'\bvremi\b', 'Vremi'), (r'\bfebreze\b', 'Febreze'),
    (r'\bkenmore\b', 'Kenmore'), (r'\boreck\b', 'Oreck'), (r'\bbissell\b', 'Bissell'),
    (r'\bhomedics\b', 'HoMedics'), (r'\bphilips\b', 'Philips'), (r'\bxiaomi\b', 'Xiaomi'),
    (r'\bvewiior\b', 'VEWIOR'), (r'\bwelov\b', 'WELOV'), (r'\bmorelax\b', 'MORELAX'),
    (r'\blektrofan\b', 'LectroFan'),
]
product_patterns = [
    (r'\bair\s*purif(?:ier|iers|er)\b|\bairpurifier\b|\bair\s*pirifier\b|\baur\s*purifier\b|\bpurifier\b', '空气净化器'),
    (r'\bair\s*cleaner(s)?\b', '空气清洁器'),
    (r'\bpurificador\s+de\s+aire\b', '空气净化器/西语'),
    (r'\bportable\s+air\s+filter\b', '便携空气过滤器'),
]
accessory_patterns = [
    (r'\bfilter\s*replacement\b|\breplacement\s*filter\b|\breplacement\b', '替换滤芯'),
    (r'\bfilters\b|\bfilter\b', '滤芯/过滤器'),
    (r'\bcartridge\b', '滤芯/除味盒'),
    (r'\bpads?\b', '净化垫/替换片'),
    (r'\bessential\s*oils?\b|\boil\b', '精油/香薰配件'),
    (r'\bbags?\b|\bcharcoal\s*bag\b', '活性炭包'),
]
function_patterns = [
    (r'\btrue\s*hepa\b', 'True HEPA'), (r'\bhepa\b|\bh13\b|\bh12\b', 'HEPA过滤'),
    (r'\bactivated\s*carbon\b|\bcarbon\b|\bcharcoal\b', '活性炭除味'),
    (r'\bionic\b|\bionizer\b|\bion\b|\bnegative\s*ion\b', '负离子/离子净化'),
    (r'\bozone\b', '臭氧/谨慎功能'),
    (r'\buv\b|\buvc\b|\bultraviolet\b', 'UV杀菌'),
    (r'\bwashable\b|\bwashable\s*filter\b', '可水洗滤网'),
    (r'\bfilterless\b|\bno\s*filter\b', '无滤芯/免耗材'),
    (r'\bsmart\b|\bwi\s*fi\b|\bwifi\b|\bapp\b', '智能/App/WiFi'),
    (r'\bquiet\b|\bsilent\b|\bsleep\b|\bwhite\s*noise\b', '低噪/睡眠模式'),
    (r'\bplug\s*in\b|\bplug-in\b', '插电/墙插'),
    (r'\bportable\b', '便携'), (r'\bmini\b|\bcompact\b', '小型/迷你'),
    (r'\bfan\b', '风扇/循环风'),
    (r'\bhumidifier\b', '加湿组合'), (r'\bdehumidifier\b', '除湿组合'),
    (r'\bheater\b', '取暖组合'),
    (r'\bair\s*quality\b|\bmonitor\b|\bsensor\b', '空气质量监测'),
    (r'\bfsa\b|\bhsa\b', 'FSA/HSA可报销'),
]
pain_patterns = [
    (r'\bsmoke\b|\bsmokers\b|\bwildfire\b', '烟味/烟尘'),
    (r'\bdust\b', '灰尘'),
    (r'\bpet\s*hair\b|\bpet\b|\bpets\b|\bdander\b|\bdog\b|\bcat\b', '宠物毛发/皮屑'),
    (r'\bmold\b|\bmildew\b', '霉菌/潮湿异味'),
    (r'\ballerg(?:y|ies|ens?)\b|\bpollen\b|\bhay\s*fever\b', '过敏/花粉'),
    (r'\bodor\b|\bodour\b|\bsmell\b|\bstink\b|\blitter\b', '异味/猫砂味'),
    (r'\bvoc\b|\bchemical\b|\bformaldehyde\b', 'VOC/化学污染'),
    (r'\bgerm\b|\bgerms\b|\bbacteria\b|\bvirus\b|\bviral\b', '细菌/病毒/空气卫生'),
    (r'\basbestos\b', '石棉/高风险污染'),
]
scene_patterns = [
    (r'\bhome\b|\bhouse\b|\bwhole\s*house\b', '家庭/全屋'),
    (r'\bbedroom\b|\bsleeping\b', '卧室/睡眠'),
    (r'\bliving\s*room\b', '客厅'),
    (r'\blarge\s*room\b|\bbig\s*room\b', '大房间'),
    (r'\bsmall\s*room\b', '小房间'),
    (r'\boffice\b|\bdesk\b|\bdesktop\b|\bdesk\s*top\b', '办公室/桌面'),
    (r'\bdorm\b|\bcollege\b', '宿舍/大学'),
    (r'\bcar\b|\bvehicle\b', '汽车'),
    (r'\bbaby\s*room\b|\bnursery\b', '婴儿房'),
    (r'\bbasement\b', '地下室'), (r'\bbathroom\b', '浴室'), (r'\bkitchen\b', '厨房'),
    (r'\bapartment\b', '公寓'), (r'\brv\b', 'RV/房车'), (r'\bclassroom\b', '教室'),
]
audience_patterns = [
    (r'\bbaby\b|\binfant\b|\bnursery\b', '婴儿/新生儿家庭'),
    (r'\bkids\b|\bchildren\b|\btoddler\b', '儿童家庭'),
    (r'\bpet\b|\bpets\b|\bdog\b|\bcat\b', '养宠家庭'),
    (r'\bsmokers\b|\bsmoke\b', '吸烟/烟味人群'),
    (r'\ballergy\b|\ballergies\b|\bpollen\b', '过敏人群'),
    (r'\bdorm\b|\bcollege\b', '学生/宿舍人群'),
]
size_patterns = [
    (r'\blarge\b|\blarge\s*room\b|max\b|\bwhole\s*house\b', '大空间/大覆盖'),
    (r'\bsmall\b|\bsmall\s*room\b', '小空间'),
    (r'\bmini\b|\bcompact\b', '迷你/紧凑'),
    (r'\bportable\b', '便携'),
    (r'\bdesk\b|\bdesktop\b|\bdesk\s*top\b', '桌面型'),
    (r'\b\d+\s*pack\b|\bpack\s*of\s*\d+\b', '套装数量'),
    (r'\b\d+\s*sq\s*ft\b|\b\d+\s*square\s*feet\b', '覆盖面积参数'),
]
color_patterns = [
    (r'\bwhite\b', '白色'), (r'\bblack\b', '黑色'), (r'\bblue\b', '蓝色'), (r'\bpink\b', '粉色'),
    (r'\bgray\b|\bgrey\b', '灰色'), (r'\bgreen\b', '绿色')
]
season_patterns = [
    (r'\bsummer\b', '夏季'), (r'\bwinter\b', '冬季'), (r'\bspring\b', '春季/花粉季'), (r'\bfall\b|\bautumn\b', '秋季')
]
holiday_patterns = [
    (r'\bchristmas\b', '圣诞'), (r'\bblack\s*friday\b', '黑五'), (r'\bprime\s*day\b', 'Prime Day')
]
risk_patterns = [
    (r'\bozone\b', '臭氧功能合规谨慎'),
    (r'\bdisney\b|\bbarbie\b|\bmarvel\b|\bpokemon\b', 'IP/授权谨慎'),
    (r'\blevitra\b', '疑似错拼/低相关品牌'),
]
spanish_patterns = [
    (r'\bpurificador\b|\bpara\s+casa\b|\bpara\s+el\s+cuarto\b|\bde\s+aire\b', '西语')
]

# ------------------ translations ------------------
replace_cn = [
    ('air purifiers', '空气净化器'), ('air purifier', '空气净化器'), ('airpurifier', '空气净化器'),
    ('air purifer', '空气净化器'), ('air pirifier', '空气净化器'), ('aur purifier', '空气净化器'),
    ('air cleaners', '空气清洁器'), ('air cleaner', '空气清洁器'), ('purificador de aire', '空气净化器'),
    ('for home', '家用'), ('for bedroom', '卧室用'), ('large room', '大房间'), ('small room', '小房间'),
    ('for office', '办公室用'), ('for baby', '婴儿用'), ('baby room', '婴儿房'), ('dorm room', '宿舍'),
    ('dorm', '宿舍'), ('car', '汽车'), ('portable', '便携'), ('mini', '迷你'), ('compact', '紧凑型'),
    ('hepa', 'HEPA'), ('true hepa', 'True HEPA'), ('filter replacement', '替换滤芯'), ('replacement filter', '替换滤芯'),
    ('air purifier filter', '空气净化器滤芯'), ('filters', '滤芯'), ('filter', '滤芯'),
    ('pet hair', '宠物毛发'), ('pets', '宠物'), ('pet', '宠物'), ('dust', '灰尘'), ('smoke', '烟味/烟尘'),
    ('mold', '霉菌'), ('mildew', '霉菌/霉味'), ('allergies', '过敏'), ('allergy', '过敏'), ('pollen', '花粉'),
    ('odor', '异味'), ('odors', '异味'), ('cat litter', '猫砂味'), ('humidifier', '加湿器'), ('dehumidifier', '除湿机'),
    ('combo', '组合'), ('fan', '风扇'), ('smart', '智能'), ('washable', '可水洗'), ('plug in', '插电式'),
    ('white', '白色'), ('black', '黑色'), ('blue', '蓝色'), ('pink', '粉色'),
]

def translate_keyword(kw, brands_found=None):
    t = norm_text(kw)
    if not t:
        return ''
    cn = t
    # phrases first by length
    for en, zh in sorted(replace_cn, key=lambda x: -len(x[0])):
        cn = re.sub(r'\b' + re.escape(en) + r'\b', zh, cn)
    # brand names keep as English
    cn = re.sub(r'\s+', ' ', cn).strip()
    # If mostly English remains, fallback composition
    if re.search(r'[a-z]', cn):
        pieces=[]
        if brands_found:
            pieces.extend(brands_found)
        # generate from tags in caller? do basic
        if '空气净化器' in cn or 'purifier' in t or 'purificador' in t:
            pieces.append('空气净化器')
        if '滤芯' in cn or 'filter' in t:
            pieces.append('滤芯/过滤器')
        if '家用' in cn or 'home' in t:
            pieces.append('家用')
        if '卧室' in cn or 'bedroom' in t:
            pieces.append('卧室')
        if '宠物' in cn or 'pet' in t:
            pieces.append('宠物')
        if '烟味' in cn or 'smoke' in t:
            pieces.append('烟味')
        if '灰尘' in cn or 'dust' in t:
            pieces.append('灰尘')
        if pieces:
            return ' / '.join(uniq(pieces))
    return cn

# ------------------ tag keyword ------------------
def tag_keyword(raw_kw, aba_rank=None, existing_tag=None, existing_rel=None):
    text = norm_text(raw_kw)
    original_text = text
    brands_found = contains_any(text, brands)
    product = contains_any(text, product_patterns)
    accessories = contains_any(text, accessory_patterns)
    funcs = contains_any(text, function_patterns)
    pains = contains_any(text, pain_patterns)
    scenes = contains_any(text, scene_patterns)
    audiences = contains_any(text, audience_patterns)
    sizes = contains_any(text, size_patterns)
    colors = contains_any(text, color_patterns)
    seasons = contains_any(text, season_patterns)
    holidays = contains_any(text, holiday_patterns)
    risks = contains_any(text, risk_patterns)
    langs = contains_any(text, spanish_patterns)

    # Product inference
    if not product and (('filter' in text and ('air' in text or brands_found)) or brands_found):
        product.append('空气净化器相关')

    # Category labels
    demand_categories=[]
    if product: demand_categories.append('品类名称')
    if audiences: demand_categories.append('目标受众')
    if scenes: demand_categories.append('使用场景')
    if funcs: demand_categories.append('功能特征')
    if colors: demand_categories.append('颜色')
    # material: filter media and carbon
    material=[]
    if re.search(r'\bhepa\b|\bh13\b|\bcarbon\b|\bcharcoal\b', text):
        material = [x for x in funcs if x in ['HEPA过滤','True HEPA','活性炭除味']]
    if material: demand_categories.append('材质材料')
    if sizes: demand_categories.append('尺寸大小')
    # capacity/parameters
    params=[]
    for m in re.findall(r'\b\d+\s*(?:sq\s*ft|square\s*feet|s|pack|pcs|piece|oz)\b', text):
        params.append(m)
    for m in re.findall(r'\b(?:core\s*)?\d{2,4}s?\b', text):
        params.append(m)
    if params: demand_categories.append('参数')
    themes=[]
    if 'never change' in text: themes.append('免换滤芯概念')
    if 'odor neutralizer' in text: themes.append('除味中和概念')
    if themes: demand_categories.append('主题元素')
    if brands_found: demand_categories.append('品牌')
    if seasons: demand_categories.append('季节')
    if holidays: demand_categories.append('节日')
    compat=[]
    if re.search(r'\bfor\s+(?:home|bedroom|pets?|baby|office|large room|small room|smoke|mold|dust|allergies)\b', text):
        compat.append('for-use适配需求')
    if compat: demand_categories.append('兼容搭配')
    if accessories: demand_categories.append('配件')
    if langs: demand_categories.append('其他需求')
    if risks: demand_categories.append('风险词')
    if not demand_categories: demand_categories.append('其他需求')

    # intent
    low_relevance = False
    if not product and not accessories and not brands_found and not pains and not scenes:
        low_relevance=True
    # Off-target common terms
    if re.search(r'\bdorm\s*(room\s*)?essentials\b|\bcollege\s*dorm\b', text) and 'air' not in text and 'purif' not in text:
        low_relevance=True
    if re.search(r'\bessential\s*oils?\b', text) and 'filter' not in text and 'purif' not in text:
        low_relevance=True

    if risks:
        intent='风险/谨慎词'
    elif low_relevance:
        intent='低相关/谨慎词'
    elif langs:
        intent='西语搜索词'
    elif brands_found:
        intent='品牌/竞品拦截词'
    elif accessories and ('replacement' in text or 'filter' in text or 'cartridge' in text or 'pad' in text):
        intent='配件/滤芯替换词'
    elif re.search(r'\bhumidifier\b|\bdehumidifier\b|\bfan\b|\bheater\b', text):
        intent='组合功能词'
    elif pains:
        intent='痛点解决词'
    elif scenes:
        intent='场景需求词'
    elif funcs:
        intent='功能技术词'
    elif product:
        intent='核心品类词'
    else:
        intent='其他需求词'

    # supply fit default 0/1/3: universal generic air purifier assumption
    supply=1
    if low_relevance:
        supply=0
    elif risks:
        supply=0 if any('臭氧' in r for r in risks) else 1
    elif brands_found:
        supply=1
    elif accessories:
        supply=1
    elif re.search(r'\bhumidifier\b|\bdehumidifier\b|\bheater\b|\bcar\b|\bplug\s*in\b|\bionic\b|\bozone\b|\bfilterless\b', text):
        supply=1
    elif product or pains or scenes or funcs:
        supply=3
    if re.search(r'\bsmart\b|\bwifi\b|\bwashable\b|\bnever\s*change\b', text):
        supply=min(supply,1) if supply !=0 else 0
    if re.search(r'\blarge\s*room\b|\bwhole\s*house\b', text):
        # large-room must match CADR/coverage; default medium unless existing says core
        supply = 2 if supply == 3 else supply

    # emotional needs
    emotions=[]
    if any(x in pains for x in ['烟味/烟尘','灰尘','霉菌/潮湿异味','过敏/花粉','VOC/化学污染','细菌/病毒/空气卫生']):
        emotions.append('健康防护/安全感')
    if any(x in pains for x in ['宠物毛发/皮屑','异味/猫砂味']):
        emotions.append('养宠家庭安心')
    if '婴儿/新生儿家庭' in audiences or '婴儿房' in scenes:
        emotions.append('宝宝守护/父母安心')
    if '卧室/睡眠' in scenes or '低噪/睡眠模式' in funcs:
        emotions.append('睡眠舒适/放松')
    if '家庭/全屋' in scenes:
        emotions.append('家庭空气质量管理')
    if brands_found:
        emotions.append('品牌信任/性能背书')
    if accessories:
        emotions.append('耗材维护/持续净化')
    if not emotions and product:
        emotions.append('洁净空气/健康生活')

    # Combination label
    combo_parts=[]
    if brands_found and intent.startswith('品牌'):
        combo_parts.append(join_tags(brands_found))
    if product:
        combo_parts.append(join_tags(product[:2]))
    if scenes:
        combo_parts.append(join_tags(scenes[:2]))
    if funcs:
        combo_parts.append(join_tags(funcs[:2]))
    if pains:
        combo_parts.append(join_tags(pains[:2]))
    if audiences:
        combo_parts.append(join_tags(audiences[:2]))
    if accessories and intent.startswith('配件'):
        combo_parts.append(join_tags(accessories[:2]))
    if not combo_parts:
        combo_parts.append('其他需求')
    combo_label = ' × '.join(uniq(combo_parts))

    # review pain score: keyword-level inferred
    if pains:
        review_gap=75
    elif accessories:
        review_gap=55
    elif scenes or audiences:
        review_gap=50
    elif funcs:
        review_gap=45
    elif brands_found:
        review_gap=35
    else:
        review_gap=25
    if low_relevance: review_gap=10

    # competition advantage proxy
    if low_relevance or risks:
        comp_adv=10
    elif brands_found:
        comp_adv=35
    elif intent == '核心品类词':
        comp_adv=30
    elif accessories:
        comp_adv=50
    elif scenes or pains or funcs:
        comp_adv=65
    else:
        comp_adv=45

    # ad suggestions
    if low_relevance:
        ad_struct='否定/观察词包'
        match_mode='不建议主推；必要时低预算Broad排查'
        listing_use='不建议放核心位置'
        visual_use='无'
        product_suggestion='不作为产品开发依据'
    elif risks:
        ad_struct='风险词隔离活动'
        match_mode='谨慎Exact；合规确认后再投'
        listing_use='避免夸大或侵权表达'
        visual_use='避免臭氧/IP/医疗化表达'
        product_suggestion='需做合规与商标/IP检查'
    elif brands_found:
        ad_struct='SP商品投放/竞品词独立活动'
        match_mode='Product Targeting + Exact小预算验证'
        listing_use='不放标题；可做竞品对标分析'
        visual_use='做参数/滤网/场景对比图，但不出现对方商标'
        product_suggestion='监控竞品流量与滤芯生态'
    elif accessories:
        ad_struct='滤芯/耗材独立活动'
        match_mode='Exact + Phrase；按型号/品牌拆广告组'
        listing_use='配件兼容性、型号、替换周期写清楚'
        visual_use='滤芯结构、安装步骤、替换周期图'
        product_suggestion='适合开发兼容滤芯/套装/复购包'
    elif langs:
        ad_struct='西语关键词独立活动'
        match_mode='Exact + Phrase；西语词包独立预算'
        listing_use='后台Search Terms可覆盖西语'
        visual_use='如有西语素材可做西语场景图'
        product_suggestion='适合测试西语用户需求'
    elif intent=='组合功能词':
        ad_struct='组合功能测试活动'
        match_mode='Phrase + Exact；若产品无该功能则否定'
        listing_use='仅在产品真实具备时写入'
        visual_use='组合功能对比/多功能场景图'
        product_suggestion='评估加湿/除湿/风扇组合需求'
    elif pains:
        ad_struct='痛点解决价值验证活动'
        match_mode='Exact + Phrase优先，成熟后Broad拓展'
        listing_use='标题/五点/A+前置痛点解决表达'
        visual_use='污染物图标、前后对比、宠物/烟味/灰尘场景'
        product_suggestion='围绕痛点强化滤网/CADR/除味能力'
    elif scenes or audiences:
        ad_struct='场景/人群价值验证活动'
        match_mode='Phrase + Exact；按场景拆广告组'
        listing_use='标题/五点/后台词覆盖场景词'
        visual_use='卧室/客厅/办公室/婴儿房真实场景图'
        product_suggestion='按空间大小、噪音、夜灯、外观做差异化'
    elif funcs:
        ad_struct='功能技术活动'
        match_mode='Exact + Phrase；核心技术词单独预算'
        listing_use='标题/五点/参数图突出技术功能'
        visual_use='HEPA/活性炭/传感器/噪音分贝图'
        product_suggestion='强化可验证技术卖点与认证'
    else:
        ad_struct='核心品类词活动'
        match_mode='Exact控转化 + Phrase拓词'
        listing_use='标题主词、五点、后台Search Terms'
        visual_use='主图/首屏展示产品本体与核心净化利益'
        product_suggestion='大词竞争高，需用长尾价值点切入'

    # campaign/ad group naming based on dominant need
    if pains:
        theme=join_tags(pains[:2])
    elif scenes:
        theme=join_tags(scenes[:2])
    elif funcs:
        theme=join_tags(funcs[:2])
    elif accessories:
        theme=join_tags(accessories[:2])
    elif brands_found:
        theme=join_tags(brands_found[:2])
    elif langs:
        theme='西语空气净化器'
    elif product:
        theme='核心空气净化器'
    else:
        theme='其他需求'
    campaign = f"US_AP_{theme}"[:60]

    return {
        'keyword': raw_kw,
        'normalized_keyword': original_text,
        '中文翻译': translate_keyword(raw_kw, brands_found),
        '搜索需求分类': join_tags(demand_categories),
        '品类名称': join_tags(product),
        '目标受众': join_tags(audiences),
        '使用场景': join_tags(scenes),
        '功能/技术': join_tags(funcs),
        '痛点/污染物': join_tags(pains),
        '属性/参数': join_tags(params),
        '材质/滤网': join_tags(material),
        '尺寸/空间': join_tags(sizes),
        '颜色/外观': join_tags(colors),
        '主题元素': join_tags(themes),
        '品牌/竞品': join_tags(brands_found),
        '季节/节日': join_tags(seasons + holidays),
        '兼容/搭配': join_tags(compat),
        '配件/耗材': join_tags(accessories),
        '语言/地区': join_tags(langs),
        '风险备注': join_tags(risks),
        '购买意图': intent,
        '情绪/心理需求': join_tags(emotions),
        '组合标签': combo_label,
        '供给匹配默认分': supply,
        '评论痛点匹配分': review_gap,
        '竞争修正分': comp_adv,
        '推荐广告结构': ad_struct,
        '推荐广告活动/广告组': campaign,
        '推荐匹配模式': match_mode,
        'Listing用途': listing_use,
        '视觉内容建议': visual_use,
        '选品/产品建议': product_suggestion,
        'low_relevance': low_relevance,
        'elements': []
    }

# elements for TF
def extract_elements_for_tf(tagged):
    fields = [
        ('品类名称', tagged['品类名称']), ('目标受众', tagged['目标受众']), ('使用场景', tagged['使用场景']),
        ('功能特征', tagged['功能/技术']), ('痛点/污染物', tagged['痛点/污染物']), ('颜色', tagged['颜色/外观']),
        ('材质材料', tagged['材质/滤网']), ('尺寸大小', tagged['尺寸/空间']), ('参数', tagged['属性/参数']),
        ('主题元素', tagged['主题元素']), ('品牌', tagged['品牌/竞品']), ('季节/节日', tagged['季节/节日']),
        ('兼容搭配', tagged['兼容/搭配']), ('配件', tagged['配件/耗材']), ('其他需求', tagged['语言/地区']),
        ('风险词', tagged['风险备注'])
    ]
    els=[]
    for cat, vals in fields:
        if vals:
            for v in vals.split('、'):
                if v:
                    els.append((cat, v))
    return els

# ------------------ Load input ------------------
wb_in = load_workbook(INPUT, read_only=True, data_only=True)
main_ws = wb_in['主要的 ABA数据']
main_headers = [main_ws.cell(1, c).value for c in range(1, main_ws.max_column+1)]
rows=[]
for r in main_ws.iter_rows(min_row=2, values_only=True):
    if not r or not r[1]:
        continue
    row={main_headers[i]: r[i] if i < len(r) else None for i in range(len(main_headers))}
    rows.append(row)

# Determine demand score by ABA rank order
valid_ranks=[]
for row in rows:
    try:
        valid_ranks.append(int(row.get('ABA排名')))
    except Exception:
        pass
rank_sorted=sorted(set(valid_ranks))
rank_pos={rank:i for i,rank in enumerate(rank_sorted)}
max_pos=max(len(rank_sorted)-1, 1)

def rank_demand_score(rank):
    try:
        rank=int(rank)
        pos=rank_pos.get(rank, max_pos)
        return round(100 - 99*(pos/max_pos), 1)
    except Exception:
        return 0

def aba_weight(rank):
    try:
        r=max(int(rank),1)
        return 1.0 / math.log(r+10)
    except Exception:
        return 0.0

tagged_rows=[]
for idx,row in enumerate(rows, start=1):
    kw=row.get('关键词')
    tag=tag_keyword(kw, row.get('ABA排名'), row.get('打标'), row.get('相关性'))
    demand=rank_demand_score(row.get('ABA排名'))
    supply_pct = tag['供给匹配默认分']/3*100
    value_score = round(0.45*demand + 0.30*supply_pct + 0.15*tag['评论痛点匹配分'] + 0.10*tag['竞争修正分'], 1)
    tag['需求强度分'] = demand
    tag['ABA权重'] = round(aba_weight(row.get('ABA排名')), 6)
    tag['价值机会分'] = value_score
    # grade
    if tag['购买意图'] == '低相关/谨慎词':
        grade='低相关/谨慎词'
    elif tag['风险备注']:
        grade='风险/合规谨慎词'
    elif tag['购买意图'] == '西语搜索词':
        grade='西语词包'
    elif tag['购买意图'] == '品牌/竞品拦截词':
        grade='品牌/竞品词'
    elif tag['购买意图'] == '配件/滤芯替换词':
        grade='配件/耗材词'
    elif value_score >= 75 and tag['供给匹配默认分']>=3:
        grade='S-核心必打'
    elif value_score >= 62 and tag['供给匹配默认分']>=2:
        grade='A-高机会长尾'
    elif value_score >= 45:
        grade='B-中机会测试'
    else:
        grade='C-低优先观察'
    tag['机会等级']=grade
    tag['elements']=extract_elements_for_tf(tag)
    tagged_rows.append((row, tag))

# ------------------ Aggregate TF ------------------
tf = {}
for row, tag in tagged_rows:
    weight = tag['ABA权重']
    kw = row.get('关键词')
    for cat, elem in set(tag['elements']):
        key=(cat, elem)
        if key not in tf:
            tf[key]={'搜索需求分类':cat, '词根/元素':elem, 'count':0, 'weight':0.0, 'samples':[], 'grades':Counter(), 'value_scores':[]}
        tf[key]['count']+=1
        tf[key]['weight']+=weight
        if len(tf[key]['samples'])<8:
            tf[key]['samples'].append(kw)
        tf[key]['grades'][tag['机会等级']]+=1
        tf[key]['value_scores'].append(tag['价值机会分'])

total_count=len(tagged_rows)
total_weight=sum(t['ABA权重'] for _,t in tagged_rows)
tf_rows=[]
for key,v in tf.items():
    avg_score=round(sum(v['value_scores'])/len(v['value_scores']),1) if v['value_scores'] else 0
    top_grade=v['grades'].most_common(1)[0][0] if v['grades'] else ''
    tf_rows.append({
        '搜索需求分类': v['搜索需求分类'],
        '词根/元素': v['词根/元素'],
        '中文翻译/解释': v['词根/元素'],
        '出现次数词频': v['count'],
        '出现次数占比': v['count']/total_count if total_count else 0,
        '搜索量加权词频': round(v['weight'],6),
        '搜索需求占比': v['weight']/total_weight if total_weight else 0,
        '平均价值机会分': avg_score,
        '主要机会等级': top_grade,
        '代表关键词': ' | '.join(v['samples'][:5])
    })
tf_rows.sort(key=lambda x: (x['搜索量加权词频'], x['出现次数词频']), reverse=True)

# High opportunity
high_rows=[]
for row,tag in tagged_rows:
    if tag['机会等级'] in ['S-核心必打','A-高机会长尾']:
        high_rows.append((row,tag))
high_rows.sort(key=lambda rt: rt[1]['价值机会分'], reverse=True)

# Dashboard counts
grade_counts=Counter(tag['机会等级'] for _,tag in tagged_rows)
intent_counts=Counter(tag['购买意图'] for _,tag in tagged_rows)
category_counts=Counter()
for _,tag in tagged_rows:
    for c in tag['搜索需求分类'].split('、') if tag['搜索需求分类'] else []:
        category_counts[c]+=1

# Advertising plan groups
ad_groups=defaultdict(list)
for row,tag in tagged_rows:
    g=tag['推荐广告活动/广告组']
    # Add only relevant examples and high/mid value, no more than 20 per group
    if tag['机会等级'] not in ['低相关/谨慎词','风险/合规谨慎词']:
        ad_groups[g].append((row,tag))

ad_plan=[]
for group,items in ad_groups.items():
    items_sorted=sorted(items, key=lambda rt: rt[1]['价值机会分'], reverse=True)
    sample=items_sorted[:12]
    grades=Counter(t['机会等级'] for _,t in sample)
    # determine theme from group
    plan={
        '广告活动/广告组建议': group,
        '需求主题': group.replace('US_AP_',''),
        '关键词数量': len(items),
        '建议阶段': '价值验证' if any(t['机会等级'] in ['S-核心必打','A-高机会长尾'] for _,t in items) else '小预算探索',
        '推荐匹配模式': sample[0][1]['推荐匹配模式'] if sample else '',
        '建议投放词': ' | '.join([str(r.get('关键词')) for r,t in sample[:8]]),
        '最高机会等级': sample[0][1]['机会等级'] if sample else '',
        '平均价值分': round(sum(t['价值机会分'] for _,t in items_sorted)/len(items_sorted),1) if items_sorted else 0,
        'S/A词数': sum(1 for _,t in items if t['机会等级'] in ['S-核心必打','A-高机会长尾']),
        '拆分建议': '单独Campaign/SKAG' if len(sample)>0 and sample[0][1]['需求强度分']>=85 else '按需求点合并广告组'
    }
    ad_plan.append(plan)
ad_plan.sort(key=lambda x: (x['S/A词数'], x['平均价值分']), reverse=True)

# Supply matrix based on TF high dimensions
supply_rows=[]
for tr in tf_rows:
    cat=tr['搜索需求分类']; elem=tr['词根/元素']
    default_fit=1
    if cat in ['品类名称','痛点/污染物','使用场景','功能特征','目标受众']:
        default_fit=3
    if elem in ['大空间/大覆盖','智能/App/WiFi','可水洗滤网','无滤芯/免耗材','加湿组合','除湿组合','负离子/离子净化','臭氧/谨慎功能','汽车','插电/墙插']:
        default_fit=1
    if cat in ['品牌','配件','风险词']:
        default_fit=1 if cat!='风险词' else 0
    supply_rows.append({
        '需求分类': cat,
        '需求点/元素': elem,
        '出现次数词频': tr['出现次数词频'],
        '搜索量加权词频': tr['搜索量加权词频'],
        '默认供给匹配分(0/1/3)': default_fit,
        '需确认的产品卖点': '是否真实具备该卖点/参数/认证/配件兼容性',
        '验证动作': 'Exact/Phrase小预算验证；看CTR/CVR/ACOS' if default_fit>0 else '合规/相关性确认，不默认投放',
        '备注': '可按实际产品卖点改为0/1/3'
    })

# ------------------ Build output workbook ------------------
wb = Workbook()
# remove default
ws = wb.active
ws.title = 'ABA关键词打标结果'

# Theme styles
header_fill = PatternFill('solid', fgColor='0F766E')
subheader_fill = PatternFill('solid', fgColor='CCFBF1')
blue_fill = PatternFill('solid', fgColor='DBEAFE')
green_fill = PatternFill('solid', fgColor='DCFCE7')
yellow_fill = PatternFill('solid', fgColor='FEF3C7')
red_fill = PatternFill('solid', fgColor='FEE2E2')
gray_fill = PatternFill('solid', fgColor='F3F4F6')
white_font = Font(color='FFFFFF', bold=True, name='Microsoft YaHei')
bold_font = Font(bold=True, name='Microsoft YaHei')
normal_font = Font(name='Microsoft YaHei', size=10)
small_font = Font(name='Microsoft YaHei', size=9)
thin = Side(style='thin', color='D1D5DB')
border = Border(left=thin, right=thin, top=thin, bottom=thin)

# Result sheet
result_headers = [
    'ABA排名','关键词','关键词翻译(原表)','工具来源','相关性(原表)','原表打标','原表流量分级','原表广告用法','原表链接用途','原表选品用途',
    '清洗关键词','中文需求翻译','搜索需求分类','品类名称','目标受众','使用场景','功能/技术','痛点/污染物','属性/参数','材质/滤网','尺寸/空间','颜色/外观','主题元素','品牌/竞品','季节/节日','兼容/搭配','配件/耗材','语言/地区','风险备注','购买意图','情绪/心理需求','组合标签','ABA权重','需求强度分','供给匹配默认分','评论痛点匹配分','竞争修正分','价值机会分','机会等级','推荐广告结构','推荐广告活动/广告组','推荐匹配模式','Listing用途','视觉内容建议','选品/产品建议'
]
ws.append(result_headers)
for row,tag in tagged_rows:
    ws.append([
        row.get('ABA排名'), row.get('关键词'), row.get('关键词翻译'), row.get('工具来源'), row.get('相关性'), row.get('打标'), row.get('流量分级'), row.get('广告用法'), row.get('链接用途'), row.get('选品用途'),
        tag['normalized_keyword'], tag['中文翻译'], tag['搜索需求分类'], tag['品类名称'], tag['目标受众'], tag['使用场景'], tag['功能/技术'], tag['痛点/污染物'], tag['属性/参数'], tag['材质/滤网'], tag['尺寸/空间'], tag['颜色/外观'], tag['主题元素'], tag['品牌/竞品'], tag['季节/节日'], tag['兼容/搭配'], tag['配件/耗材'], tag['语言/地区'], tag['风险备注'], tag['购买意图'], tag['情绪/心理需求'], tag['组合标签'], tag['ABA权重'], tag['需求强度分'], tag['供给匹配默认分'], tag['评论痛点匹配分'], tag['竞争修正分'], tag['价值机会分'], tag['机会等级'], tag['推荐广告结构'], tag['推荐广告活动/广告组'], tag['推荐匹配模式'], tag['Listing用途'], tag['视觉内容建议'], tag['选品/产品建议']
    ])

# style result sheet
for cell in ws[1]:
    cell.fill = header_fill; cell.font = white_font; cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True); cell.border=border
for row in ws.iter_rows(min_row=2, max_row=ws.max_row, max_col=ws.max_column):
    for cell in row:
        cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
    grade=row[result_headers.index('机会等级')].value
    if grade=='S-核心必打': fill=green_fill
    elif grade=='A-高机会长尾': fill=blue_fill
    elif grade=='B-中机会测试': fill=yellow_fill
    elif grade in ['风险/合规谨慎词','低相关/谨慎词']: fill=red_fill
    elif grade in ['品牌/竞品词','配件/耗材词','西语词包']: fill=gray_fill
    else: fill=None
    if fill:
        for idx in [result_headers.index('机会等级'), result_headers.index('购买意图'), result_headers.index('价值机会分')]:
            row[idx].fill=fill
ws.freeze_panes='A2'
ws.auto_filter.ref = ws.dimensions
# widths
widths = {
    1:10,2:34,3:18,4:12,5:10,6:12,7:12,8:14,9:14,10:14,11:26,12:24,13:28,14:18,15:18,16:18,17:20,18:20,19:16,20:18,21:18,22:14,23:18,24:18,25:14,26:16,27:18,28:12,29:18,30:18,31:22,32:34,33:12,34:12,35:14,36:14,37:14,38:14,39:16,40:24,41:26,42:28,43:34,44:36,45:36
}
for i,w in widths.items(): ws.column_dimensions[get_column_letter(i)].width=w
ws.row_dimensions[1].height=36
for r in range(2, ws.max_row+1): ws.row_dimensions[r].height=45
# table
try:
    tab = Table(displayName='AirPurifierTagResult', ref=f"A1:{get_column_letter(ws.max_column)}{ws.max_row}")
    style = TableStyleInfo(name='TableStyleMedium2', showFirstColumn=False, showLastColumn=False, showRowStripes=True, showColumnStripes=False)
    tab.tableStyleInfo=style
    ws.add_table(tab)
except Exception as e:
    print('table result err', e)
# conditional format value score
score_col = get_column_letter(result_headers.index('价值机会分')+1)
ws.conditional_formatting.add(f'{score_col}2:{score_col}{ws.max_row}', ColorScaleRule(start_type='min', start_color='FEE2E2', mid_type='percentile', mid_value=50, mid_color='FEF3C7', end_type='max', end_color='DCFCE7'))

# High opportunity sheet
ws2 = wb.create_sheet('高机会词清单')
high_headers = ['机会等级','价值机会分','ABA排名','关键词','中文需求翻译','购买意图','组合标签','需求强度分','供给匹配默认分','推荐广告活动/广告组','推荐匹配模式','Listing用途','视觉内容建议','选品/产品建议']
ws2.append(high_headers)
for row,tag in high_rows:
    ws2.append([tag['机会等级'], tag['价值机会分'], row.get('ABA排名'), row.get('关键词'), tag['中文翻译'], tag['购买意图'], tag['组合标签'], tag['需求强度分'], tag['供给匹配默认分'], tag['推荐广告活动/广告组'], tag['推荐匹配模式'], tag['Listing用途'], tag['视觉内容建议'], tag['选品/产品建议']])
for cell in ws2[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws2.iter_rows(min_row=2, max_row=ws2.max_row, max_col=ws2.max_column):
    for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
ws2.freeze_panes='A2'; ws2.auto_filter.ref=ws2.dimensions
for idx,w in enumerate([16,14,10,32,24,18,36,12,14,28,26,38,38,38], start=1): ws2.column_dimensions[get_column_letter(idx)].width=w
for r in range(2, ws2.max_row+1): ws2.row_dimensions[r].height=42
try:
    tab = Table(displayName='HighOpportunityList', ref=f"A1:{get_column_letter(ws2.max_column)}{ws2.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium4', showRowStripes=True)
    ws2.add_table(tab)
except Exception: pass

# TF sheet
ws3 = wb.create_sheet('SIF需求词频统计')
tf_headers=['搜索需求分类','词根/元素','中文翻译/解释','出现次数词频','出现次数占比','搜索量加权词频','搜索需求占比','平均价值机会分','主要机会等级','代表关键词']
ws3.append(tf_headers)
for tr in tf_rows:
    ws3.append([tr[h] for h in tf_headers])
for cell in ws3[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws3.iter_rows(min_row=2, max_row=ws3.max_row, max_col=ws3.max_column):
    for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
for col in ['E','G']:
    for cell in ws3[col][1:]: cell.number_format='0.00%'
for col in ['F','H']:
    for cell in ws3[col][1:]: cell.number_format='0.00'
ws3.freeze_panes='A2'; ws3.auto_filter.ref=ws3.dimensions
for idx,w in enumerate([18,24,24,14,14,16,14,14,18,80], start=1): ws3.column_dimensions[get_column_letter(idx)].width=w
try:
    tab=Table(displayName='SIFDemandFrequency', ref=f"A1:{get_column_letter(ws3.max_column)}{ws3.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium9', showRowStripes=True)
    ws3.add_table(tab)
except Exception: pass

# Supply matrix sheet
ws4 = wb.create_sheet('需求供给匹配矩阵')
supply_headers=['需求分类','需求点/元素','出现次数词频','搜索量加权词频','默认供给匹配分(0/1/3)','需确认的产品卖点','验证动作','备注']
ws4.append(supply_headers)
for tr in supply_rows[:200]:
    ws4.append([tr[h] for h in supply_headers])
for cell in ws4[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws4.iter_rows(min_row=2, max_row=ws4.max_row, max_col=ws4.max_column):
    for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
ws4.freeze_panes='A2'; ws4.auto_filter.ref=ws4.dimensions
for idx,w in enumerate([18,26,14,16,20,38,42,28], start=1): ws4.column_dimensions[get_column_letter(idx)].width=w
# Data validation for supply fit
try:
    dv = DataValidation(type="list", formula1='"0,1,3"', allow_blank=False)
    ws4.add_data_validation(dv)
    dv.add(f'E2:E{ws4.max_row}')
except Exception: pass
try:
    tab=Table(displayName='SupplyDemandMatrix', ref=f"A1:{get_column_letter(ws4.max_column)}{ws4.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium5', showRowStripes=True)
    ws4.add_table(tab)
except Exception: pass

# Ad plan sheet
ws5 = wb.create_sheet('广告结构规划')
ad_headers=['广告活动/广告组建议','需求主题','关键词数量','建议阶段','推荐匹配模式','建议投放词','最高机会等级','平均价值分','S/A词数','拆分建议']
ws5.append(ad_headers)
for ap in ad_plan:
    ws5.append([ap[h] for h in ad_headers])
for cell in ws5[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws5.iter_rows(min_row=2, max_row=ws5.max_row, max_col=ws5.max_column):
    for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
ws5.freeze_panes='A2'; ws5.auto_filter.ref=ws5.dimensions
for idx,w in enumerate([32,26,12,16,32,80,18,14,12,22], start=1): ws5.column_dimensions[get_column_letter(idx)].width=w
for r in range(2, ws5.max_row+1): ws5.row_dimensions[r].height=56
try:
    tab=Table(displayName='AdStructurePlan', ref=f"A1:{get_column_letter(ws5.max_column)}{ws5.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium2', showRowStripes=True)
    ws5.add_table(tab)
except Exception: pass

# Dashboard sheet
ws6 = wb.create_sheet('标签汇总_看板', 0)
ws6['A1']='亚马逊美国站空气净化器关键词打标看板（SIF价值打法版）'
ws6['A1'].font=Font(name='Microsoft YaHei', size=16, bold=True, color='FFFFFF')
ws6['A1'].fill=header_fill
ws6.merge_cells('A1:H1')
ws6['A2']='处理时间'
ws6['B2']=datetime.now().strftime('%Y-%m-%d %H:%M')
ws6['A3']='主表关键词数'
ws6['B3']=len(tagged_rows)
ws6['A4']='高机会词数(S/A)'
ws6['B4']=len(high_rows)
ws6['A5']='方法说明'
ws6['B5']='先从关键词还原消费者需求，再用需求词频+供给匹配+价值机会分规划广告与Listing。'
ws6.merge_cells('B5:H5')
for rng in ['A2:A5']:
    for cell in ws6[rng][0] if False else []: pass
for row in ws6.iter_rows(min_row=2, max_row=5, max_col=8):
    for c in row:
        c.font=normal_font; c.alignment=Alignment(vertical='center', wrap_text=True); c.border=border
for c in ws6['A2:A5']:
    c[0].fill=subheader_fill; c[0].font=bold_font
# grade summary
start=7
ws6[f'A{start}']='机会等级分布'
ws6[f'A{start}'].fill=header_fill; ws6[f'A{start}'].font=white_font
ws6.append([])
ws6[f'A{start+1}']='机会等级'; ws6[f'B{start+1}']='关键词数'; ws6[f'C{start+1}']='占比'
for cell in ws6[start+1][0:3]: cell.fill=subheader_fill; cell.font=bold_font; cell.border=border
r=start+2
for grade,count in grade_counts.most_common():
    ws6[f'A{r}']=grade; ws6[f'B{r}']=count; ws6[f'C{r}']=count/len(tagged_rows)
    ws6[f'C{r}'].number_format='0.00%'
    r+=1
# intent summary
start2=7
ws6[f'E{start2}']='购买意图分布'
ws6[f'E{start2}'].fill=header_fill; ws6[f'E{start2}'].font=white_font
ws6[f'E{start2+1}']='购买意图'; ws6[f'F{start2+1}']='关键词数'; ws6[f'G{start2+1}']='占比'
for cell in [ws6[f'E{start2+1}'],ws6[f'F{start2+1}'],ws6[f'G{start2+1}']]: cell.fill=subheader_fill; cell.font=bold_font; cell.border=border
r=start2+2
for intent,count in intent_counts.most_common():
    ws6[f'E{r}']=intent; ws6[f'F{r}']=count; ws6[f'G{r}']=count/len(tagged_rows); ws6[f'G{r}'].number_format='0.00%'
    r+=1
# category summary
start3=22
ws6[f'A{start3}']='搜索需求分类统计'
ws6[f'A{start3}'].fill=header_fill; ws6[f'A{start3}'].font=white_font
ws6[f'A{start3+1}']='搜索需求分类'; ws6[f'B{start3+1}']='关键词数'; ws6[f'C{start3+1}']='占比'
for cell in [ws6[f'A{start3+1}'],ws6[f'B{start3+1}'],ws6[f'C{start3+1}']]: cell.fill=subheader_fill; cell.font=bold_font; cell.border=border
r=start3+2
for cat,count in category_counts.most_common():
    ws6[f'A{r}']=cat; ws6[f'B{r}']=count; ws6[f'C{r}']=count/len(tagged_rows); ws6[f'C{r}'].number_format='0.00%'
    r+=1
# top demand elements
start4=22
ws6[f'E{start4}']='Top需求元素（按搜索量加权词频）'
ws6[f'E{start4}'].fill=header_fill; ws6[f'E{start4}'].font=white_font
ws6[f'E{start4+1}']='需求元素'; ws6[f'F{start4+1}']='分类'; ws6[f'G{start4+1}']='加权词频'; ws6[f'H{start4+1}']='出现次数'
for cell in [ws6[f'E{start4+1}'],ws6[f'F{start4+1}'],ws6[f'G{start4+1}'],ws6[f'H{start4+1}']]: cell.fill=subheader_fill; cell.font=bold_font; cell.border=border
r=start4+2
for tr in tf_rows[:15]:
    ws6[f'E{r}']=tr['词根/元素']; ws6[f'F{r}']=tr['搜索需求分类']; ws6[f'G{r}']=tr['搜索量加权词频']; ws6[f'H{r}']=tr['出现次数词频']
    r+=1
for row in ws6.iter_rows(min_row=1, max_row=40, max_col=8):
    for c in row:
        c.alignment=Alignment(vertical='center', wrap_text=True); c.border=border
        if not c.font or c.font.name != 'Microsoft YaHei': c.font=normal_font
for col,w in zip(range(1,9),[24,12,12,4,24,16,14,12]): ws6.column_dimensions[get_column_letter(col)].width=w
# charts
try:
    chart = BarChart()
    data = Reference(ws6, min_col=2, min_row=start+1, max_row=start+1+len(grade_counts))
    cats = Reference(ws6, min_col=1, min_row=start+2, max_row=start+1+len(grade_counts))
    chart.add_data(data, titles_from_data=True); chart.set_categories(cats)
    chart.title='机会等级分布'; chart.y_axis.title='关键词数'; chart.x_axis.title='机会等级'; chart.height=7; chart.width=12
    ws6.add_chart(chart, 'J2')
    chart2=BarChart()
    data=Reference(ws6, min_col=7, min_row=start4+1, max_row=start4+16)
    cats=Reference(ws6, min_col=5, min_row=start4+2, max_row=start4+16)
    chart2.add_data(data, titles_from_data=True); chart2.set_categories(cats)
    chart2.title='Top需求元素加权词频'; chart2.y_axis.title='加权词频'; chart2.height=8; chart2.width=15
    ws6.add_chart(chart2, 'J18')
except Exception as e:
    print('chart err', e)

# Dictionary sheet
ws7 = wb.create_sheet('标签词典')
dict_headers=['一级维度','标签/元素','英文触发词示例','说明','业务用途']
ws7.append(dict_headers)
dict_rows = [
    ['品类名称','空气净化器','air purifier, air purifiers, purifier, purificador de aire','产品主词/同义词/错拼词','标题、广告核心词、后台词'],
    ['配件','替换滤芯','filter replacement, replacement filter, cartridge, pads','耗材复购和兼容性需求','单独耗材活动、配件开发'],
    ['功能特征','HEPA过滤','hepa, true hepa, h13','核心过滤技术','标题/五点/参数图'],
    ['功能特征','活性炭除味','carbon, activated carbon, charcoal','除味/烟味/宠物味需求承接','五点/A+/污染物图标'],
    ['功能特征','负离子/臭氧','ionic, ionizer, ozone','有合规/功能争议，需谨慎','隔离投放、合规审核'],
    ['使用场景','卧室/睡眠','bedroom, sleep, quiet','睡眠与低噪需求','场景图、Exact/Phrase'],
    ['使用场景','家庭/大房间','home, house, large room, whole house','家用空间覆盖需求','主图/覆盖面积图'],
    ['目标受众','养宠家庭','pet, dog, cat, dander, pet hair','宠物毛发、皮屑、异味需求','痛点广告组、宠物场景图'],
    ['痛点/污染物','烟味/烟尘','smoke, smokers, wildfire','高意图痛点词','痛点解决广告、污染物图标'],
    ['痛点/污染物','灰尘/过敏/花粉','dust, allergy, pollen','健康防护需求','五点/A+、评论痛点反击'],
    ['痛点/污染物','霉菌/异味','mold, mildew, odor, litter','潮湿、地下室、猫砂味等细分需求','长尾精准词测试'],
    ['尺寸大小','小型/便携/桌面','mini, compact, portable, desk','小空间/办公桌需求','小空间活动、桌面图'],
    ['品牌','竞品品牌','levoit, shark, winix, dyson 等','竞品截流/商品投放','竞品ASIN投放，避免标题侵权'],
    ['其他需求','西语词','purificador, para casa, para el cuarto','美国站西语用户搜索需求','西语独立活动/后台词'],
]
for r in dict_rows: ws7.append(r)
for cell in ws7[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws7.iter_rows(min_row=2, max_row=ws7.max_row, max_col=ws7.max_column):
    for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
for idx,w in enumerate([18,24,36,48,36], start=1): ws7.column_dimensions[get_column_letter(idx)].width=w
ws7.freeze_panes='A2'
try:
    tab=Table(displayName='AirPurifierTagDict', ref=f"A1:{get_column_letter(ws7.max_column)}{ws7.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium3', showRowStripes=True)
    ws7.add_table(tab)
except Exception: pass

# Rules sheet
ws8 = wb.create_sheet('打标规则说明')
rules = [
    ['模块','说明'],
    ['SIF价值打法核心','关键词只是消费者需求的外显表达；本表先把关键词拆成需求元素，再用词频、供给匹配、价值机会分决定广告结构。'],
    ['第一步：搭建词库','本次主词库来自“主要的 ABA数据”，共处理 %s 条关键词。' % len(tagged_rows)],
    ['第二步：词频统计','出现次数词频=包含某标签/元素的关键词数量；搜索量加权词频=Σ ABA权重。由于本表无真实搜索量，用 ABA排名换算为权重：1 / ln(ABA排名+10)。'],
    ['第三步：供给匹配','默认按照通用空气净化器假设打0/1/3分：3=强匹配，1=需确认或弱匹配，0=不匹配/风险。实际产品卖点请在“需求供给匹配矩阵”中调整。'],
    ['第四步：需求中心广告框架','广告活动不按关键词随意堆叠，而按需求主题拆：痛点、场景、人群、功能、配件、品牌竞品、西语。'],
    ['第五步：投放词与匹配模式','高价值高匹配词用Exact+Phrase验证；中机会词Phrase/Broad探索；品牌词用商品投放/Exact小预算；配件词单独耗材活动；风险词隔离或否定。'],
    ['第六步：搜索量集中度拆分','同一需求下若某关键词需求强度过高，可单独Campaign/SKAG；但复盘时仍应按同一需求点合并评估。'],
    ['价值机会分算法','价值机会分 = 需求强度分×45% + 供给匹配分百分制×30% + 评论痛点匹配分×15% + 竞争修正分×10%。'],
    ['机会等级','S=核心必打；A=高机会长尾；B=中机会测试；C=低优先；品牌/配件/西语/风险/低相关单独归类。'],
    ['注意','本次未接入真实广告CVR/ACOS和Review明细，因此“评论痛点匹配分”为关键词语义推断。后续接入广告和评论数据后可升级为真实价值验证。'],
]
for r in rules: ws8.append(r)
for cell in ws8[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws8.iter_rows(min_row=2, max_row=ws8.max_row, max_col=2):
    for cell in row: cell.font=normal_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
    row[0].fill=subheader_fill; row[0].font=bold_font
ws8.column_dimensions['A'].width=26; ws8.column_dimensions['B'].width=110
for r in range(1, ws8.max_row+1): ws8.row_dimensions[r].height=38

# Original ABA data sheet
ws9 = wb.create_sheet('原始ABA数据')
ws9.append(main_headers)
for row in rows:
    ws9.append([row.get(h) for h in main_headers])
for cell in ws9[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
for row in ws9.iter_rows(min_row=2, max_row=ws9.max_row, max_col=ws9.max_column):
    for cell in row: cell.font=small_font; cell.border=border; cell.alignment=Alignment(vertical='top', wrap_text=True)
ws9.freeze_panes='A2'; ws9.auto_filter.ref=ws9.dimensions
for idx,w in enumerate([10,34,18,12,10,14,12,14,14,14], start=1): ws9.column_dimensions[get_column_letter(idx)].width=w
try:
    tab=Table(displayName='OriginalABAData', ref=f"A1:{get_column_letter(ws9.max_column)}{ws9.max_row}")
    tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium1', showRowStripes=True)
    ws9.add_table(tab)
except Exception: pass

# maybe secondary data quick tag for non-ABA top relevant? create filtered quick sheet from secondary up to 5000 relevant to keep useful
if '次要的  除ABA外' in wb_in.sheetnames:
    sec_ws = wb_in['次要的  除ABA外']
    sec_headers = [sec_ws.cell(1,c).value for c in range(1, sec_ws.max_column+1)]
    quick = []
    max_quick = 3000
    for r in sec_ws.iter_rows(min_row=2, values_only=True):
        if not r or not r[1]: continue
        kw = str(r[1])
        txt = norm_text(kw)
        # filter relevant air purifier words / brands / pain terms to reduce noise
        if re.search(r'air\s*purif|airpurifier|purificador|\bpurifier\b|\bhepa\b|air\s*cleaner|air\s*filter|levoit|shark|winix|dyson|blueair|honeywell|puroair|medify|aroeve|afloia|coway', txt):
            row={sec_headers[i]: r[i] if i < len(r) else None for i in range(len(sec_headers))}
            tag=tag_keyword(kw, row.get('ABA排名'))
            # Use search/month if available for rough demand; else rank demand
            try:
                sv=float(row.get('月搜索量') or 0)
            except Exception:
                sv=0
            if sv>0:
                demand=min(100, round(20 + 80*math.log1p(sv)/math.log1p(100000),1))
            else:
                demand=rank_demand_score(row.get('ABA排名'))
            supply_pct=tag['供给匹配默认分']/3*100
            value=round(0.45*demand + 0.30*supply_pct + 0.15*tag['评论痛点匹配分'] + 0.10*tag['竞争修正分'],1)
            tag['需求强度分']=demand; tag['价值机会分']=value
            if tag['购买意图']=='品牌/竞品拦截词': grade='品牌/竞品词'
            elif tag['购买意图']=='配件/滤芯替换词': grade='配件/耗材词'
            elif tag['购买意图']=='低相关/谨慎词': grade='低相关/谨慎词'
            elif value>=75 and tag['供给匹配默认分']>=3: grade='S-核心必打'
            elif value>=62 and tag['供给匹配默认分']>=2: grade='A-高机会长尾'
            elif value>=45: grade='B-中机会测试'
            else: grade='C-低优先观察'
            tag['机会等级']=grade
            quick.append((row, tag))
        if len(quick)>=max_quick:
            break
    ws10 = wb.create_sheet('次要词快速打标')
    sec_out_headers=['ABA排名','关键词','关键词翻译','工具来源','月搜索量','月购买量','购买率','清洗关键词','中文需求翻译','搜索需求分类','购买意图','组合标签','需求强度分','供给匹配默认分','价值机会分','机会等级','推荐广告结构','推荐匹配模式','Listing用途','视觉内容建议']
    ws10.append(sec_out_headers)
    for row, tag in quick:
        ws10.append([row.get('ABA排名'), row.get('关键词'), row.get('关键词翻译'), row.get('工具来源'), row.get('月搜索量'), row.get('月购买量'), row.get('购买率'), tag['normalized_keyword'], tag['中文翻译'], tag['搜索需求分类'], tag['购买意图'], tag['组合标签'], tag.get('需求强度分'), tag['供给匹配默认分'], tag.get('价值机会分'), tag.get('机会等级'), tag['推荐广告结构'], tag['推荐匹配模式'], tag['Listing用途'], tag['视觉内容建议']])
    for cell in ws10[1]: cell.fill=header_fill; cell.font=white_font; cell.alignment=Alignment(horizontal='center', wrap_text=True); cell.border=border
    for row in ws10.iter_rows(min_row=2, max_row=ws10.max_row, max_col=ws10.max_column):
        for cell in row: cell.font=small_font; cell.alignment=Alignment(vertical='top', wrap_text=True); cell.border=border
    ws10.freeze_panes='A2'; ws10.auto_filter.ref=ws10.dimensions
    for idx,w in enumerate([10,34,18,12,12,12,10,30,24,28,18,36,12,14,14,16,26,30,38,38], start=1): ws10.column_dimensions[get_column_letter(idx)].width=w
    try:
        tab=Table(displayName='SecondaryQuickTags', ref=f"A1:{get_column_letter(ws10.max_column)}{ws10.max_row}")
        tab.tableStyleInfo=TableStyleInfo(name='TableStyleMedium6', showRowStripes=True)
        ws10.add_table(tab)
    except Exception: pass

# workbook properties and freeze
for s in wb.worksheets:
    s.sheet_view.showGridLines = False

# Save workbook
wb.save(OUTPUT)
print(OUTPUT)
print(json.dumps({
    'main_keywords': len(tagged_rows),
    'high_opportunity': len(high_rows),
    'sheets': wb.sheetnames,
    'grade_counts': grade_counts,
    'intent_counts': intent_counts
}, ensure_ascii=False, default=str, indent=2))
PY
python /tmp/tag_air_purifier.py

---

## 轮次 50 · 助手 · 2026-05-07 11:12 Asia/Shanghai

bash -lc python - <<'PY'
import openpyxl, os, json
p='/mnt/data/亚马逊美国站空气净化器_SIF关键词打标结果.xlsx'
wb=openpyxl.load_workbook(p, data_only=False)
print(os.path.getsize(p))
for ws in wb.worksheets:
    print(ws.title, ws.max_row, ws.max_column)
ws=wb['ABA关键词打标结果']
headers=[ws.cell(1,c).value for c in range(1, ws.max_column+1)]
for r in range(2,8):
    vals=[ws.cell(r,headers.index(h)+1).value for h in ['ABA排名','关键词','中文需求翻译','购买意图','组合标签','价值机会分','机会等级','推荐匹配模式']]
    print(vals)
# simple error scan text values
errs=[]
for ws in wb.worksheets:
    for row in ws.iter_rows():
        for cell in row:
            if isinstance(cell.value,str) and any(e in cell.value for e in ['#REF!','#DIV/0!','#VALUE!','#NAME?','#N/A']):
                errs.append((ws.title, cell.coordinate, cell.value))
print('errors', len(errs), errs[:5])
PY

---

## 轮次 51 · 助手 · 2026-05-07 11:12 Asia/Shanghai

已完成 **亚马逊美国站空气净化器关键词打标**，文件已生成：

[下载：亚马逊美国站空气净化器_SIF关键词打标结果.xlsx](sandbox:/mnt/data/亚马逊美国站空气净化器_SIF关键词打标结果.xlsx)

本次处理：

- 主表 **ABA关键词：622 条**
- 次要词快速打标：**3000 条**
- 高机会词清单：**126 条**
- 使用 SIF 价值打法逻辑：  
  **关键词 → 消费者需求 → 词频统计 → 供给匹配 → 价值机会分 → 广告结构规划**

文件包含 10 个 sheet：

1. **标签汇总_看板**
2. **ABA关键词打标结果**
3. **高机会词清单**
4. **SIF需求词频统计**
5. **需求供给匹配矩阵**
6. **广告结构规划**
7. **标签词典**
8. **打标规则说明**
9. **原始ABA数据**
10. **次要词快速打标**

打标结果概览：

- **S-核心必打：44 个**
- **A-高机会长尾：82 个**
- **B-中机会测试：145 个**
- **品牌/竞品词：185 个**
- **配件/耗材词：74 个**
- **西语词包：5 个**
- **风险/合规谨慎词：3 个**
- **低相关/谨慎词：11 个**

重点已按空气净化器类目拆出：

- HEPA / True HEPA
- bedroom / home / large room / office / dorm
- pet hair / dust / smoke / mold / allergy / odor
- filter replacement / cartridge / washable filter
- Levoit / Shark / Winix / Dyson / Honeywell 等竞品品牌词
- 西语词：purificador de aire 等
- 组合功能词：humidifier combo、dehumidifier combo、fan 等

---

## 轮次 52 · 用户 · 2026-05-08 14:15 Asia/Shanghai

把我上面一个价值打法，关键词打标，做成一个skills，markdown文件

---

## 轮次 53 · 助手 · 2026-05-08 14:17 Asia/Shanghai

已整理成 Markdown Skill 文件：

[下载：Amazon_Keyword_Tagging_SIF_Value_Play_SKILL.md](sandbox:/mnt/data/Amazon_Keyword_Tagging_SIF_Value_Play_SKILL.md)

里面包含：

- SIF 价值打法核心逻辑
- 亚马逊关键词打标标准路径
- TF 词频 / 搜索量加权词频算法
- 消费者需求分类体系
- 0-1-3 供给匹配规则
- 机会评分模型
- 广告结构规划逻辑
- Listing / 视觉 / 选品迁移规则
- 空气净化器和 hair clips 示例
- Excel 输出 Sheet 规范
- 标准回复模板

---

## 轮次 54 · 用户 · 2026-05-11 17:13 Asia/Shanghai

亚马逊广告策略和推广计划制定，CPC为1.2美金，转化率为5%，售价49.99,20个点击出一单，sheet推广计划每一周：字段
WEEK        Date        SKU        售价（美金）        COUPON（%）        Action        目标平均日销        周销        目标排名        Review星级/数量        REVIEW计划                周消耗库存        销售额        日均流量        转化率        主关键词自然搜索排名        广告计划                                                库存计划
                                                                                送出数量        措施                                                广告日预算        每日点击        CPC        CVR        广告日订单        广告订单占比                        LBS库存        SZ库存        LBS在途        LBS发货        采购计划 

sheet广告计划每一周：字段
WEEK        Date        售价        目标平均日销        销售额        转化率        日均流量        广告销量        广告销售额        广告订单占比        广告费        点击量        预估量                广告结构        广告目标及关注指标        广告关键词        不同广告类型预算分配
                                                                                        点击量        平均cpc        广告转化率                                 
说明 基于目标CPC=ACOS*客单价*转化率，  ACOS与毛利率持平，即新品前期所有利润用来做广告
WEEK        Date        售价        目标平均日销        销售额        转化率        日均流量        广告销量        广告销售额        广告订单占比        广告费        点击量        预估量                广告结构        广告目标及关注指标        广告关键词        不同广告类型预算分配
                                                                                        点击量        平均cpc        广告转化率                                 

说明 
预估量说明：
平均cpc和转化率的值的预估方法：
1.市场调研得到同行平均cpc的基础上适当上调；多50-60%空间
2.正在做的同品类商品的历史cpc基础上适当上调；
平均cpc和转化率计划制定的说明：
新品期间波动大，采用梯度预估
eg:当cpc为2.5$$,转化率为5%的时候，完成日销目标对应的广告费为105$$/天；
    当cpc为2.3$$.转化率为7%的时候，完成日销目标对应的广告费为69$$/天  B0F1F12345
用全部毛利 去做广告，你的毛利率=ACOS之间关系，公式，CPC=ACOS*售价*CVR，CPA= CPC/CVR，ACOS=CPA/售价，举例比如我这个产品利润就只有6美金，如果转化率是8%，前期不考虑自然订单的情况下，你12.5个点击才能出1单，那么你的cpc就只能做到0.48是刚好的

sheet推广目标：字段
SKU
ASIN
上架销售时间：
推广周期：
排名目标：
目标销量：
目标管理        目标
对标竞品        B0DKPGKSYS
目标排名        21-24
目标日销         20-25 日销
价格        109-129.99
rating        136
评分        4.7
主推词        air purifiers for bedroom
核心关键词 选取，
长尾关键词 选取，
蓝海词关键词 选取，
品牌词

---

## 轮次 55 · 助手 · 2026-05-11 17:13 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/SKILL.md

---

## 轮次 56 · 助手 · 2026-05-11 17:14 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/API_QUICK_START.md

---

## 轮次 57 · 助手 · 2026-05-11 17:14 Asia/Shanghai

from datetime import datetime, timedelta
from artifact_tool import Workbook, SpreadsheetFile

# Create workbook and sheets
wb = Workbook.create()
s_dash = wb.worksheets.add("总览Dashboard")
s_target = wb.worksheets.add("推广目标")
s_promo = wb.worksheets.add("推广计划")
s_ads = wb.worksheets.add("广告计划")
s_kw = wb.worksheets.add("关键词与广告结构")
s_formula = wb.worksheets.add("公式说明")

# Theme colors
dark = "#0F766E"
mid = "#14B8A6"
light = "#CCFBF1"
pale = "#F0FDFA"
orange = "#F97316"
yellow = "#FEF3C7"
redlight = "#FEE2E2"
greenlight = "#DCFCE7"
blue_light = "#DBEAFE"
gray = "#F3F4F6"

header_fmt = {
    "fill": dark,
    "font": {"bold": True, "color": "#FFFFFF"},
    "horizontal_alignment": "center",
    "vertical_alignment": "center",
    "wrap_text": True
}
subheader_fmt = {
    "fill": light,
    "font": {"bold": True, "color": "#0F172A"},
    "horizontal_alignment": "center",
    "vertical_alignment": "center",
    "wrap_text": True
}
title_fmt = {
    "fill": dark,
    "font": {"bold": True, "color": "#FFFFFF", "size": 16},
    "horizontal_alignment": "center",
    "vertical_alignment": "center"
}
section_fmt = {
    "fill": "#0EA5E9",
    "font": {"bold": True, "color": "#FFFFFF"},
    "horizontal_alignment": "left",
    "vertical_alignment": "center"
}
input_fmt = {
    "fill": yellow,
    "font": {"bold": True, "color": "#111827"},
    "horizontal_alignment": "left"
}
note_fmt = {
    "fill": "#F9FAFB",
    "font": {"color": "#374151"},
    "wrap_text": True,
    "vertical_alignment": "top"
}

start_date = datetime(2026, 5, 11)
weeks = 12
sku = "B0F1F12345"
asin = "B0F1F12345"
price = 49.99
base_cpc = 1.20
base_cvr = 0.05
target_daily_sales = [3,5,8,10,13,16,20,22,25,25,25,25]
coupons = [0.20,0.20,0.15,0.15,0.10,0.10,0.10,0.10,0.05,0.05,0.05,0.05]
ad_order_shares = [0.90,0.85,0.80,0.75,0.70,0.65,0.60,0.55,0.50,0.45,0.40,0.35]
rank_targets = [">100","80-100","60-80","45-60","35-45","28-35","21-28","21-24","稳定21-24","冲刺Top20","稳定Top20-24","控ACOS+稳排名"]
natural_rank = [">150","120-150","90-120","70-90","50-70","35-50","25-35","21-28","21-24","20-24","20-24","20-24"]
review_plan = [5,5,8,8,10,10,10,8,8,5,5,5]
review_count = [0,3,8,15,22,30,42,55,70,85,100,120]
review_star = [0,4.6,4.6,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7]
actions = [
    "上架冷启动；Coupon 20%；主词精准+词组验证",
    "扩大核心词曝光；优化主图点击率；拉Review",
    "新增痛点/场景词；过滤低转化Search Term",
    "拆分高点击词SKAG；预算向高CVR词倾斜",
    "扩展商品投放；打竞品相似ASIN",
    "加大核心词Exact；优化五点/A+承接需求",
    "冲刺目标排名；提高自然位权重",
    "稳定排名；控制ACOS；保留高ROI词",
    "降低Coupon；筛选盈利词；拓展蓝海词",
    "加SB/SBV品牌曝光；承接类目流量",
    "精细化否词；预算回收至高转化词",
    "复盘：保留已验证价值点，沉淀长期广告结构"
]
ad_structures = [
    "SP-Exact核心词；SP-Phrase长尾词；Auto Close Match",
    "SP-Exact/phrase；Auto采词；少量Broad探索",
    "按需求点拆Campaign：Bedroom/Home/HEPA/Pet/Smoke",
    "高搜索集中词单独SKAG；低量长尾合并测试",
    "商品投放：相似竞品ASIN + 类目定向",
    "核心词放量 + 竞品ASIN扩展 + Auto否词",
    "核心主词Ranking Push；Top of Search加价",
    "稳定核心词；预算转向ACOS可控词包",
    "蓝海词/低CPC词拓展；降低泛词浪费",
    "SBV/SB品牌词+核心词；SP继续收割",
    "利润词维护；清理低转化流量",
    "广告结构复盘：验证词、盈利词、扩展词分层"
]
ad_keywords_week = [
    "air purifiers for bedroom; air purifier for bedroom; hepa air purifier",
    "air purifiers for home; air purifier for allergies; air purifier for smoke",
    "air purifier for pet hair; air purifier for dust; bedroom air purifier",
    "small air purifier; quiet air purifier for bedroom; true hepa air purifier",
    "levoit air purifier; shark air purifier; winix air purifier; honeywell air purifier",
    "air purifier large room; air purifier for home pets; air purifier for mold",
    "air purifiers for bedroom; air purifier for bedroom; HEPA bedroom purifier",
    "air purifier with washable filter; air purifier odor eliminator",
    "dorm room air purifier; office air purifier; compact air purifier",
    "air purifier for bedroom quiet; air purifier for allergies and pets",
    "best air purifier for bedroom; air purifier deals; hepa filter purifier",
    "核心盈利词+高CVR长尾词+低ACOS商品投放词"
]

# --- 推广目标 sheet ---
s_target.get_range("A1:H1").merge()
s_target.get_range("A1").values = [["亚马逊美国站空气净化器：推广目标 & 广告参数"]]
s_target.get_range("A1").format = title_fmt
s_target.get_range("A1:H1").format.row_height = 28

target_rows = [
    ["基础信息", "", "", "", "广告测算参数", "", "", ""],
    ["SKU", sku, "", "", "售价/客单价", price, "输入", ""],
    ["ASIN", asin, "", "", "Coupon默认", 0.20, "输入", ""],
    ["上架销售时间", start_date, "", "", "目标CPC", base_cpc, "输入", ""],
    ["推广周期", "12周", "", "", "目标CVR", base_cvr, "输入", ""],
    ["排名目标", "主推词自然排名 21-24", "", "", "点击出单数", "", "公式", "=1/F5"],
    ["目标销量", "20-25 日销", "", "", "CPA/广告获客成本", "", "公式", "=F4/F5"],
    ["目标管理", "目标", "", "", "预估ACOS", "", "公式", "=F7/F2"],
    ["对标竞品", "B0DKPGKSYS", "", "", "目标ACOS=毛利率", 0.48, "输入", ""],
    ["目标排名", "21-24", "", "", "按目标ACOS反推CPC", "", "公式", "=F9*F2*F5"],
    ["目标日销", "20-25", "", "", "若单件利润$6且CVR=8%：可承受CPC", "", "公式", "=(6/F2)*F2*8%"],
    ["价格", price, "", "", "说明", "新品前期可用全部毛利做广告：ACOS≈毛利率；CPC=ACOS*售价*CVR", "", ""],
    ["rating数量", 136, "", "", "", "", "", ""],
    ["评分", 4.7, "", "", "", "", "", ""],
    ["主推词", "air purifiers for bedroom", "", "", "", "", "", ""],
    ["核心关键词", "air purifier; air purifiers for bedroom; hepa air purifier; air purifier for home; air purifier for allergies", "", "", "", "", "", ""],
    ["长尾关键词", "air purifier for smoke; air purifier for pet hair; air purifier for dust; quiet air purifier for bedroom; air purifier for mold", "", "", "", "", "", ""],
    ["蓝海词关键词", "air purifier with washable filter; dorm room air purifier; compact bedroom air purifier; air purifier odor eliminator", "", "", "", "", "", ""],
    ["品牌词", "levoit air purifier; shark air purifier; winix air purifier; honeywell air purifier; dyson air purifier", "", "", "", "", "", ""],
]
s_target.get_range("A2:H20").values = target_rows
s_target.get_range("A2:H2").format = section_fmt
s_target.get_range("E2:H2").format = section_fmt
s_target.get_range("A3:A20").format = subheader_fmt
s_target.get_range("E3:E13").format = subheader_fmt
s_target.get_range("B3:B20").format.wrap_text = True
s_target.get_range("F3:F13").format = input_fmt
s_target.get_range("F7:F8").formulas = [["=F4/F5"],["=F7/F2"]]
s_target.get_range("F11:F12").formulas = [["=F9*F2*F5"],["=(6/F2)*F2*8%"]]
s_target.get_range("F6").formulas = [["=1/F5"]]
s_target.get_range("B5").format.number_format = "yyyy-mm-dd"
s_target.get_range("F3:F4").format.number_format = "$0.00"
s_target.get_range("F5:F5").format.number_format = "0.00%"
s_target.get_range("F6:F7").format.number_format = "0.0"
s_target.get_range("F8:F11").format.number_format = "0.00%"
s_target.get_range("F12:F12").format.number_format = "$0.00"
s_target.get_range("B13:B13").format.number_format = "$0.00"
s_target.get_range("A1:H20").format.autofit_columns()
s_target.get_range("A:A").format.column_width = 18
s_target.get_range("B:B").format.column_width = 48
s_target.get_range("E:E").format.column_width = 24
s_target.get_range("F:F").format.column_width = 18
s_target.get_range("H:H").format.column_width = 44
s_target.freeze_panes.freeze_rows(2)

# --- 推广计划 sheet ---
promo_headers = [
    "WEEK","Date","SKU","售价（美金）","COUPON（%）","Action","目标平均日销","周销","目标排名",
    "Review星级/数量","REVIEW计划","送出数量","措施","周消耗库存","销售额","日均流量","转化率",
    "主关键词自然搜索排名","广告计划","广告日预算","每日点击","CPC","CVR","广告日订单","广告订单占比",
    "LBS库存","SZ库存","LBS在途","LBS发货","采购计划"
]
s_promo.get_range("A1:AD1").values = [promo_headers]
s_promo.get_range("A1:AD1").format = header_fmt
promo_values = []
for i in range(weeks):
    r = i + 2
    week = i+1
    date = start_date + timedelta(days=i*7)
    review_text = f"{review_star[i] if review_star[i] else '-'} / {review_count[i]}"
    promo_values.append([
        week, date, sku, price, coupons[i], actions[i], target_daily_sales[i], None, rank_targets[i],
        review_text, f"目标新增Review {review_plan[i]}个；Vine/站外/售后跟进", review_plan[i],
        "主图/标题/五点围绕需求点承接；每周否词与Search Term复盘", None, None, None, base_cvr,
        natural_rank[i], ad_structures[i], None, None, base_cpc, base_cvr, None, ad_order_shares[i],
        None, 500, 0 if i<3 else 300, 0 if i<3 else 300, "若LBS库存<2周消耗，启动补货"
    ])
s_promo.get_range(f"A2:AD{weeks+1}").values = promo_values
# formulas columns: H 周销, N 周消耗, O 销售额, P 日均流量, T 广告日预算, U 每日点击, X 广告日订单, Z LBS库存
formulas = []
for i in range(weeks):
    r = i+2
    # LBS库存 formula: initial 300 + incoming - cumulative consumption
    if i == 0:
        lbs_formula = f"=300+AC{r}-N{r}"
    else:
        lbs_formula = f"=Z{r-1}+AC{r}-N{r}"
    formulas.append([
        f"=G{r}*7",  # H
        f"=H{r}+L{r}",  # N
        f"=D{r}*(1-E{r})*H{r}",  # O
        f"=G{r}/Q{r}",  # P
        f"=U{r}*V{r}",  # T
        f"=X{r}/W{r}",  # U
        f"=G{r}*Y{r}",  # X
        lbs_formula  # Z
    ])
# Set each formula column
cols = {"H":0, "N":1, "O":2, "P":3, "T":4, "U":5, "X":6, "Z":7}
for col, idx in cols.items():
    s_promo.get_range(f"{col}2:{col}{weeks+1}").formulas = [[row[idx]] for row in formulas]

# Format promo
s_promo.freeze_panes.freeze_rows(1)
s_promo.get_range("A2:AD13").format.wrap_text = True
for col in ["B"]:
    s_promo.get_range(f"{col}2:{col}13").format.number_format = "yyyy-mm-dd"
for col in ["D","O","T","V"]:
    s_promo.get_range(f"{col}2:{col}13").format.number_format = "$0.00"
for col in ["E","Q","W","Y"]:
    s_promo.get_range(f"{col}2:{col}13").format.number_format = "0.00%"
for col in ["G","H","L","N","P","U","X","Z","AA","AB","AC"]:
    s_promo.get_range(f"{col}2:{col}13").format.number_format = "0"
# Widths
widths = {
    "A":8,"B":12,"C":14,"D":12,"E":12,"F":34,"G":12,"H":10,"I":14,"J":16,
    "K":28,"L":10,"M":36,"N":12,"O":12,"P":12,"Q":10,"R":18,"S":34,"T":12,
    "U":10,"V":10,"W":10,"X":12,"Y":12,"Z":12,"AA":12,"AB":12,"AC":12,"AD":20
}
for col, w in widths.items():
    s_promo.get_range(f"{col}:{col}").format.column_width = w
s_promo.get_range("A1:AD13").tables.add if False else None
try:
    s_promo.tables.add("A1:AD13", True, "PromotionPlanTable")
except Exception as e:
    print("table promo add error", e)

# Conditional formatting
try:
    s_promo.get_range("Y2:Y13").conditional_formats.add_color_scale({
        "minColor": "#DCFCE7", "midColor": "#FEF3C7", "maxColor": "#FEE2E2"
    })
    s_promo.get_range("Z2:Z13").conditional_formats.add_cell_is({
        "operator": "lessThan", "formula": 150, "format": {"fill": "#FECACA", "font": {"color":"#991B1B","bold": True}}
    })
except Exception as e:
    print("conditional promo error", e)

# --- 广告计划 sheet ---
ads_headers = [
    "WEEK","Date","售价","目标平均日销","销售额","转化率","日均流量","广告销量","广告销售额","广告订单占比",
    "广告费","点击量","预估点击量","平均CPC","广告转化率","预估ACOS","广告结构","广告目标及关注指标","广告关键词",
    "SP精准预算","SP词组预算","SP广泛预算","自动广告预算","商品投放预算","备注"
]
s_ads.get_range("A1:Y1").values = [ads_headers]
s_ads.get_range("A1:Y1").format = header_fmt

ads_values = []
for i in range(weeks):
    r = i+2
    ads_values.append([
        i+1, start_date + timedelta(days=i*7), None, target_daily_sales[i], None, base_cvr, None, None, None, ad_order_shares[i],
        None, None, None, base_cpc, base_cvr, None, ad_structures[i],
        "关注：CTR、CVR、ACOS、TOS占比、Search Term转化；每周按需求点复盘",
        ad_keywords_week[i], None, None, None, None, None,
        "新品前期用毛利换数据；验证后扩大词包与商品投放"
    ])
s_ads.get_range(f"A2:Y{weeks+1}").values = ads_values
# formulas
for i in range(weeks):
    r = i+2
    s_ads.get_range(f"C{r}").formulas = [[f"='推广计划'!D{r}*(1-'推广计划'!E{r})"]]
    s_ads.get_range(f"E{r}").formulas = [[f"=C{r}*D{r}*7"]]
    s_ads.get_range(f"G{r}").formulas = [[f"=D{r}/F{r}"]]
    s_ads.get_range(f"H{r}").formulas = [[f"=D{r}*7*J{r}"]]
    s_ads.get_range(f"I{r}").formulas = [[f"=H{r}*C{r}"]]
    s_ads.get_range(f"K{r}").formulas = [[f"=L{r}*N{r}"]]
    s_ads.get_range(f"L{r}").formulas = [[f"=H{r}/O{r}"]]
    s_ads.get_range(f"M{r}").formulas = [[f"=L{r}"]]
    s_ads.get_range(f"P{r}").formulas = [[f"=K{r}/I{r}"]]
    # budget allocation by stage
    if i < 2:
        alloc = (0.35,0.25,0.15,0.15,0.10)
    elif i < 6:
        alloc = (0.40,0.25,0.10,0.10,0.15)
    elif i < 9:
        alloc = (0.45,0.20,0.05,0.10,0.20)
    else:
        alloc = (0.40,0.15,0.05,0.15,0.25)
    for j, col in enumerate(["T","U","V","W","X"]):
        s_ads.get_range(f"{col}{r}").formulas = [[f"=K{r}*{alloc[j]}"]]

# Format ads
s_ads.freeze_panes.freeze_rows(1)
s_ads.get_range("A2:Y13").format.wrap_text = True
s_ads.get_range("B2:B13").format.number_format = "yyyy-mm-dd"
for col in ["C","E","I","K","N","T","U","V","W","X"]:
    s_ads.get_range(f"{col}2:{col}13").format.number_format = "$0.00"
for col in ["F","J","O","P"]:
    s_ads.get_range(f"{col}2:{col}13").format.number_format = "0.00%"
for col in ["D","G","H","L","M"]:
    s_ads.get_range(f"{col}2:{col}13").format.number_format = "0"
ads_widths = {
    "A":8,"B":12,"C":10,"D":12,"E":12,"F":10,"G":10,"H":10,"I":12,"J":12,
    "K":12,"L":10,"M":12,"N":10,"O":12,"P":12,"Q":38,"R":42,"S":44,
    "T":12,"U":12,"V":12,"W":12,"X":12,"Y":28
}
for col, w in ads_widths.items():
    s_ads.get_range(f"{col}:{col}").format.column_width = w
try:
    s_ads.tables.add("A1:Y13", True, "AdPlanTable")
except Exception as e:
    print("table ads add error", e)
try:
    s_ads.get_range("P2:P13").conditional_formats.add_color_scale({
        "minColor": "#DCFCE7", "midColor": "#FEF3C7", "maxColor": "#FEE2E2"
    })
    s_ads.get_range("K2:K13").conditional_formats.add_data_bar({"color": "#14B8A6", "gradient": True})
except Exception as e:
    print("conditional ads error", e)

# --- 关键词与广告结构 sheet ---
kw_headers = ["层级","需求点/广告活动","广告组","关键词","匹配模式","预算建议","出价逻辑","目标/关注指标","Listing承接","否词/风险"]
kw_rows = [
    ["S核心", "Bedroom 主需求", "核心主词", "air purifiers for bedroom", "Exact", "高", "目标CPC=$1.20；Top of Search +20%-50%", "排名21-24；CTR>0.35%；CVR>5%", "标题前半段+主图场景", ""],
    ["S核心", "Bedroom 主需求", "同义词", "air purifier for bedroom", "Exact/Phrase", "高", "按CVR动态调价", "订单量、CVR、自然排名", "五点强调sleep/quiet/bedroom", ""],
    ["S核心", "HEPA 技术", "技术词", "hepa air purifier; true hepa air purifier", "Exact/Phrase", "中高", "高相关才放量", "CVR与退货率", "参数图/滤网图", ""],
    ["A长尾", "Home 场景", "家庭场景", "air purifiers for home; air purifier for home", "Phrase", "中", "以词组拓展Search Term", "新搜索词质量", "A+家庭场景", ""],
    ["A长尾", "Allergy 痛点", "过敏需求", "air purifier for allergies", "Exact/Phrase", "中高", "若CVR>均值则提价", "CVR、ACOS、Review痛点", "五点承接allergy/dust", "注意医疗功效表达合规"],
    ["A长尾", "Pet 痛点", "宠物毛发", "air purifier for pet hair; air purifier for pets", "Phrase", "中", "长尾词优先", "转化词扩展", "宠物场景图", ""],
    ["A长尾", "Smoke/Odor 痛点", "烟味异味", "air purifier for smoke; air purifier odor eliminator", "Phrase/Exact", "中", "先验证再放量", "点击后CVR", "活性炭/除味图", "避免过度功效承诺"],
    ["B测试", "Room Size", "小房间/宿舍", "small air purifier; dorm room air purifier; compact air purifier", "Phrase/Broad", "低中", "低CPC探索", "新词、CPC", "尺寸对比图", ""],
    ["B测试", "Quiet/Sleep", "安静睡眠", "quiet air purifier for bedroom; air purifier for bedroom quiet", "Phrase", "中", "晚间使用场景", "CTR、CVR", "睡眠场景图/噪音参数", ""],
    ["竞品", "Brand/ASIN防守进攻", "Levoit/Shark/Winix", "levoit air purifier; shark air purifier; winix air purifier; honeywell air purifier", "Product/Exact谨慎", "低中", "只打高相似ASIN；严控ACOS", "CTR/CVR/ACOS", "对比图突出差异", "品牌词合规谨慎"],
    ["自动", "Auto挖词", "Close/Substitutes", "Auto close match; substitutes", "Auto", "中", "每日预算小而持续", "Search Term采词", "覆盖基础相关性", "每周否定不相关词"],
    ["SD", "商品页重定向", "浏览再营销", "Views remarketing; similar ASIN", "SD", "低中", "验证后加预算", "ROAS/回访订单", "优惠券+主图承接", ""],
]
s_kw.get_range("A1:J1").values = [kw_headers]
s_kw.get_range("A1:J1").format = header_fmt
s_kw.get_range(f"A2:J{len(kw_rows)+1}").values = kw_rows
s_kw.get_range(f"A2:J{len(kw_rows)+1}").format.wrap_text = True
s_kw.freeze_panes.freeze_rows(1)
kw_widths = {"A":10,"B":20,"C":18,"D":42,"E":18,"F":12,"G":30,"H":30,"I":28,"J":22}
for col, w in kw_widths.items():
    s_kw.get_range(f"{col}:{col}").format.column_width = w
try:
    s_kw.tables.add(f"A1:J{len(kw_rows)+1}", True, "KeywordStructureTable")
except Exception as e:
    print("table kw add error", e)

# --- 公式说明 sheet ---
s_formula.get_range("A1:H1").merge()
s_formula.get_range("A1").values = [["广告策略公式说明：CPC / CPA / ACOS / CVR"]]
s_formula.get_range("A1").format = title_fmt
formula_rows = [
    ["模块","公式","说明","示例/当前值","备注"],
    ["点击出单数","=1/CVR","CVR=5%时，20个点击出1单","20", "用户给定：20个点击出一单"],
    ["CPA","=CPC/CVR","每单广告获客成本","$1.20 / 5% = $24.00", "前期若不考虑自然单，CPA就是单个广告订单成本"],
    ["ACOS","=CPA/售价","广告费/广告销售额","$24 / $49.99 = 48.01%", "当用全部毛利打广告时，目标ACOS≈毛利率"],
    ["目标CPC","=ACOS*售价*CVR","按目标ACOS反推出价上限","48%*$49.99*5%≈$1.20", "若毛利率低于48%，$1.20 CPC会亏损"],
    ["利润反推CPC","=(单件利润/售价)*售价*CVR","单件利润$6、CVR=8%时","$6*8%=$0.48", "这就是你举例里的可承受CPC"],
    ["广告订单","=目标日销*广告订单占比","新品早期广告订单占比高，后期逐渐下降","W1=90%，W12=35%", "自然排名起来后降低广告订单占比"],
    ["每日点击","=广告日订单/CVR","由日订单目标与转化率倒推流量","广告日订单3单，CVR5% → 60点击", ""],
    ["广告日预算","=每日点击*CPC","由点击量和CPC决定预算","60*$1.20=$72/天", ""],
    ["日均流量","=目标日销/CVR","总流量需求，不只广告流量","20单/5%=400访客/天", "自然+广告合计"],
    ["价值打法逻辑","关键词→需求点→供给匹配→广告活动","广告不是围绕词，而是围绕消费者需求搭建","Bedroom/HEPA/Pet/Smoke等需求点", "投放后按需求点合并评估"],
]
s_formula.get_range(f"A2:E{len(formula_rows)+1}").values = formula_rows
s_formula.get_range("A2:E2").format = header_fmt
s_formula.get_range(f"A3:E{len(formula_rows)+1}").format.wrap_text = True
s_formula.get_range("A:A").format.column_width = 18
s_formula.get_range("B:B").format.column_width = 34
s_formula.get_range("C:C").format.column_width = 42
s_formula.get_range("D:D").format.column_width = 34
s_formula.get_range("E:E").format.column_width = 44
try:
    s_formula.tables.add(f"A2:E{len(formula_rows)+1}", True, "FormulaTable")
except Exception as e:
    print("table formula add error", e)

# --- Dashboard sheet ---
s_dash.get_range("A1:N1").merge()
s_dash.get_range("A1").values = [["亚马逊美国站空气净化器广告推广计划 Dashboard"]]
s_dash.get_range("A1").format = title_fmt
s_dash.get_range("A1:N1").format.row_height = 30

# KPI blocks
dash_rows = [
    ["核心输入", "", "", "", "关键测算", "", "", "", "12周计划汇总", "", "", "", "风险提醒", ""],
    ["售价", price, "", "", "CPC", base_cpc, "", "", "总目标销量", "", "", "", "当前CPC对应ACOS", ""],
    ["CVR", base_cvr, "", "", "点击出单数", "", "", "", "总广告费", "", "", "", "若毛利率<48%，需提升CVR或降CPC", ""],
    ["Coupon首周", coupons[0], "", "", "CPA", "", "", "", "总广告销量", "", "", "", "库存低于2周消耗需补货", ""],
    ["主推词", "air purifiers for bedroom", "", "", "预估ACOS", "", "", "", "平均广告订单占比", "", "", "", "品牌词/功效词需谨慎合规", ""],
]
s_dash.get_range("A2:N6").values = dash_rows
s_dash.get_range("A2:N2").format = section_fmt
s_dash.get_range("A3:A6").format = subheader_fmt
s_dash.get_range("E3:E6").format = subheader_fmt
s_dash.get_range("I3:I6").format = subheader_fmt
s_dash.get_range("M3:M6").format = subheader_fmt
s_dash.get_range("B3:B6").format = input_fmt
s_dash.get_range("F3:F6").format = input_fmt
s_dash.get_range("J3:J6").format = input_fmt
s_dash.get_range("N3:N6").format = note_fmt
# dashboard formulas
s_dash.get_range("F4").formulas = [["='推广目标'!F6"]]
s_dash.get_range("F5").formulas = [["='推广目标'!F7"]]
s_dash.get_range("F6").formulas = [["='推广目标'!F8"]]
s_dash.get_range("J3").formulas = [["=SUM('推广计划'!H2:H13)"]]
s_dash.get_range("J4").formulas = [["=SUM('广告计划'!K2:K13)"]]
s_dash.get_range("J5").formulas = [["=SUM('广告计划'!H2:H13)"]]
s_dash.get_range("J6").formulas = [["=AVERAGE('广告计划'!J2:J13)"]]
s_dash.get_range("N3").formulas = [["='推广目标'!F8"]]
# formats
s_dash.get_range("B3").format.number_format = "$0.00"
s_dash.get_range("B4").format.number_format = "0.00%"
s_dash.get_range("B5").format.number_format = "0.00%"
s_dash.get_range("F3").format.number_format = "$0.00"
s_dash.get_range("F4").format.number_format = "0.0"
s_dash.get_range("F5").format.number_format = "$0.00"
s_dash.get_range("F6").format.number_format = "0.00%"
s_dash.get_range("J3:J5").format.number_format = "0"
s_dash.get_range("J4").format.number_format = "$0.00"
s_dash.get_range("J6").format.number_format = "0.00%"
s_dash.get_range("N3").format.number_format = "0.00%"

# Weekly summary table
weekly_summary_headers = ["WEEK","Date","目标日销","周销","销售额","广告费","广告订单占比","预估ACOS","广告日预算","库存结余"]
s_dash.get_range("A8:J8").values = [weekly_summary_headers]
s_dash.get_range("A8:J8").format = header_fmt
summary_formulas = []
for i in range(weeks):
    r = i+9
    pr = i+2
    summary_formulas.append([
        f"='推广计划'!A{pr}",
        f"='推广计划'!B{pr}",
        f"='推广计划'!G{pr}",
        f"='推广计划'!H{pr}",
        f"='推广计划'!O{pr}",
        f"='广告计划'!K{pr}",
        f"='推广计划'!Y{pr}",
        f"='广告计划'!P{pr}",
        f"='推广计划'!T{pr}",
        f"='推广计划'!Z{pr}",
    ])
s_dash.get_range("A9:J20").formulas = summary_formulas
s_dash.get_range("B9:B20").format.number_format = "yyyy-mm-dd"
for col in ["E","F","I"]:
    s_dash.get_range(f"{col}9:{col}20").format.number_format = "$0.00"
for col in ["G","H"]:
    s_dash.get_range(f"{col}9:{col}20").format.number_format = "0.00%"
for col in ["A","C","D","J"]:
    s_dash.get_range(f"{col}9:{col}20").format.number_format = "0"
s_dash.get_range("A8:J20").format.wrap_text = True
for col in list("ABCDEFGHIJ"):
    s_dash.get_range(f"{col}:{col}").format.column_width = 14
s_dash.get_range("A:A").format.column_width = 8
s_dash.get_range("B:B").format.column_width = 12
s_dash.get_range("M:N").format.column_width = 22
try:
    s_dash.get_range("H9:H20").conditional_formats.add_color_scale({
        "minColor": "#DCFCE7","midColor": "#FEF3C7","maxColor":"#FECACA"
    })
    s_dash.get_range("J9:J20").conditional_formats.add_cell_is({
        "operator":"lessThan","formula":150,"format":{"fill":"#FECACA","font":{"color":"#991B1B","bold":True}}
    })
except Exception as e:
    print("conditional dash error", e)

# Try charts on dashboard
try:
    chart = s_dash.charts.add("line", s_dash.get_range("A8:F20"))
    chart.title_text = "12周销售额与广告费趋势"
    chart.has_legend = True
    chart.set_position("L8", "S22")
except Exception as e:
    print("chart1 error", e)
try:
    chart2 = s_dash.charts.add("columnClustered", s_dash.get_range("A8:D20"))
    chart2.title_text = "12周销量爬坡"
    chart2.has_legend = True
    chart2.set_position("L23", "S37")
except Exception as e:
    print("chart2 error", e)

# Global alignment and borders maybe
for sheet in [s_dash, s_target, s_promo, s_ads, s_kw, s_formula]:
    try:
        sheet.get_range("A1:AZ200").format.vertical_alignment = "center"
    except Exception:
        pass

# Verify inspections
print(wb.inspect({"kind":"sheet","include":"id,name"}).ndjson[:1000])
print(wb.inspect({"kind":"table","range":"推广目标!A1:H20","include":"values,formulas","table_max_rows":20,"table_max_cols":8}).ndjson[:2000])
errors = wb.inspect({
    "kind":"match",
    "search_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    "options":{"use_regex":True,"max_results":300},
    "summary":"final formula error scan"
})
print(errors.ndjson[:1000])

# Export
out_path = "/mnt/data/亚马逊美国站空气净化器_广告策略与推广计划.xlsx"
SpreadsheetFile.export_xlsx(wb).save(out_path)
out_path

---

## 轮次 58 · 助手 · 2026-05-11 17:17 Asia/Shanghai

# Patch 推广目标 formulas and text to remove formula errors
s_target = wb.worksheets.get_item("推广目标")
# Rewrite parameter section rows E3:H12 cleanly
param_rows = [
    ["售价/客单价", price, "输入", ""],
    ["Coupon默认", 0.20, "输入", ""],
    ["目标CPC", base_cpc, "输入", ""],
    ["目标CVR", base_cvr, "输入", ""],
    ["点击出单数", None, "公式", "1 / CVR"],
    ["CPA/广告获客成本", None, "公式", "CPC / CVR"],
    ["预估ACOS", None, "公式", "CPA / 售价"],
    ["目标ACOS=毛利率", 0.48, "输入", ""],
    ["按目标ACOS反推CPC", None, "公式", "ACOS * 售价 * CVR"],
    ["若单件利润$6且CVR=8%：可承受CPC", None, "公式", "$6 * 8% = $0.48"],
]
s_target.get_range("E3:H12").values = param_rows
s_target.get_range("F7").formulas = [["=1/F6"]]
s_target.get_range("F8").formulas = [["=F5/F6"]]
s_target.get_range("F9").formulas = [["=F8/F3"]]
s_target.get_range("F11").formulas = [["=F10*F3*F6"]]
s_target.get_range("F12").formulas = [["=6*8%"]]
# formats
s_target.get_range("F3:F5").format.number_format = "$0.00"
s_target.get_range("F4:F4").format.number_format = "0.00%"
s_target.get_range("F6:F6").format.number_format = "0.00%"
s_target.get_range("F7:F7").format.number_format = "0.0"
s_target.get_range("F8:F8").format.number_format = "$0.00"
s_target.get_range("F9:F11").format.number_format = "0.00%"
s_target.get_range("F12:F12").format.number_format = "$0.00"
s_target.get_range("E3:E12").format = subheader_fmt
s_target.get_range("F3:F12").format = input_fmt

# Patch Dashboard formulas to correct references
s_dash = wb.worksheets.get_item("总览Dashboard")
s_dash.get_range("F4").formulas = [["='推广目标'!F7"]]
s_dash.get_range("F5").formulas = [["='推广目标'!F8"]]
s_dash.get_range("F6").formulas = [["='推广目标'!F9"]]
s_dash.get_range("N3").formulas = [["='推广目标'!F9"]]

# Patch 公式说明 formulas as text
s_formula = wb.worksheets.get_item("公式说明")
formula_rows = [
    ["模块","公式","说明","示例/当前值","备注"],
    ["点击出单数","1 / CVR","CVR=5%时，20个点击出1单","20", "用户给定：20个点击出一单"],
    ["CPA","CPC / CVR","每单广告获客成本","$1.20 / 5% = $24.00", "前期若不考虑自然单，CPA就是单个广告订单成本"],
    ["ACOS","CPA / 售价","广告费/广告销售额","$24 / $49.99 = 48.01%", "当用全部毛利打广告时，目标ACOS≈毛利率"],
    ["目标CPC","ACOS * 售价 * CVR","按目标ACOS反推出价上限","48%*$49.99*5%≈$1.20", "若毛利率低于48%，$1.20 CPC会亏损"],
    ["利润反推CPC","单件利润 * CVR","单件利润$6、CVR=8%时","$6*8%=$0.48", "这就是你举例里的可承受CPC"],
    ["广告订单","目标日销 * 广告订单占比","新品早期广告订单占比高，后期逐渐下降","W1=90%，W12=35%", "自然排名起来后降低广告订单占比"],
    ["每日点击","广告日订单 / CVR","由日订单目标与转化率倒推流量","广告日订单3单，CVR5% → 60点击", ""],
    ["广告日预算","每日点击 * CPC","由点击量和CPC决定预算","60*$1.20=$72/天", ""],
    ["日均流量","目标日销 / CVR","总流量需求，不只广告流量","20单/5%=400访客/天", "自然+广告合计"],
    ["价值打法逻辑","关键词 → 需求点 → 供给匹配 → 广告活动","广告不是围绕词，而是围绕消费者需求搭建","Bedroom/HEPA/Pet/Smoke等需求点", "投放后按需求点合并评估"],
]
s_formula.get_range(f"A2:E{len(formula_rows)+1}").values = formula_rows
s_formula.get_range("A2:E2").format = header_fmt
s_formula.get_range(f"A3:E{len(formula_rows)+1}").format.wrap_text = True

# Re-scan errors
print(wb.inspect({"kind":"table","range":"推广目标!E3:H12","include":"values,formulas","table_max_rows":10,"table_max_cols":4}).ndjson)
errors = wb.inspect({
    "kind":"match",
    "search_term":"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    "options":{"use_regex":True,"max_results":300},
    "summary":"final formula error scan"
})
print(errors.ndjson[:2000])
# Export updated
out_path = "/mnt/data/亚马逊美国站空气净化器_广告策略与推广计划.xlsx"
SpreadsheetFile.export_xlsx(wb).save(out_path)
out_path

---

## 轮次 59 · 助手 · 2026-05-11 17:19 Asia/Shanghai

已做好 Excel 版 **亚马逊美国站空气净化器广告策略与推广计划**：

[下载：亚马逊美国站空气净化器_广告策略与推广计划.xlsx](sandbox:/mnt/data/亚马逊美国站空气净化器_广告策略与推广计划.xlsx)

文件包含 6 个 sheet：

1. **总览Dashboard**：12周销量、广告费、ACOS、库存风险总览  
2. **推广目标**：SKU、ASIN、竞品、目标排名、目标日销、主推词、核心词/长尾词/蓝海词/品牌词  
3. **推广计划**：按周规划 Action、日销目标、Review计划、广告预算、库存计划  
4. **广告计划**：按周计算广告销量、广告费、点击量、CPC、CVR、ACOS、预算分配  
5. **关键词与广告结构**：核心词、长尾词、竞品词、自动广告、商品投放结构  
6. **公式说明**：CPC、CPA、ACOS、CVR、利润反推CPC的计算逻辑  

已按你的参数写入：

- 售价：**$49.99**
- CPC：**$1.20**
- CVR：**5%**
- 20个点击出1单
- CPA：**$24**
- 预估 ACOS：**48.01%**
- 公式：**CPC = ACOS × 售价 × CVR**
- 利润 $6、CVR 8% 时，可承受 CPC：**$0.48**

---

## 轮次 60 · 用户 · 2026-06-11 11:02 Asia/Shanghai

结合之前的关键词打标逻辑，帮我把英国布艺清洗机的关键词进行打标

---

## 轮次 61 · 助手 · 2026-06-11 11:13 Asia/Shanghai

已完成 **英国布艺清洗机关键词 SIF 价值打法打标**，文件已生成：

[下载：英国布艺清洗机_SIF关键词打标结果.xlsx](sandbox:/mnt/data/英国布艺清洗机_SIF关键词打标结果.xlsx)

本次处理：

- 原始关键词：**40 条**
- 总搜索量：**5,106,644**
- S-核心必打：**2 个**
- A-高机会长尾：**15 个**
- 品牌/竞品词：**4 个**
- 低匹配/观察词：**13 个**

文件包含 10 个 sheet：

1. **标签汇总_看板**
2. **关键词打标结果**
3. **高机会词清单**
4. **SIF需求词频统计**
5. **需求供给匹配矩阵**
6. **广告结构规划**
7. **竞品ASIN汇总**
8. **标签词典**
9. **打标规则说明**
10. **原始数据**

重点机会方向已拆出：

- **spot cleaner / spot wash / spot washer**
- **upholstery cleaner machine**
- **sofa cleaner machine**
- **handheld / portable / small / lightweight**
- **stair carpet cleaner**
- **carpet and upholstery cleaner**
- **VAX 竞品截流词**

核心打法建议：

> 先验证 **spot / upholstery / sofa** 这类高相关需求词，再扩展 **handheld / portable / small** 便携形态词；泛词 **carpet cleaner** 流量大但意图混合，建议低预算控量测试，不作为新品前期主战场。

---

## 轮次 62 · 用户 · 2026-06-15 15:10 Asia/Shanghai

德国布艺清洗机进行打标

---

## 轮次 63 · 助手 · 2026-06-15 15:10 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/SKILL.md

---

## 轮次 64 · 助手 · 2026-06-15 15:11 Asia/Shanghai

bash -lc cat /home/oai/skills/spreadsheets/API_QUICK_START.md

---

## 轮次 65 · 助手 · 2026-06-15 15:12 Asia/Shanghai

from artifact_tool import Blob, SpreadsheetFile, Workbook
input_path = "/mnt/data/Niche详情搜索术语选项卡打标.xlsx"
wb_in = SpreadsheetFile.import_xlsx(Blob.load(input_path))
print(wb_in.inspect({"kind":"sheet","include":"id,name"}).ndjson)

---

## 轮次 66 · 助手 · 2026-06-15 15:13 Asia/Shanghai

sheet_name = "Niche详情搜索术语选项卡_2026_6_15德国"
print(wb_in.inspect({"kind":"table","range":f"'{sheet_name}'!A1:O20","include":"values,formulas","table_max_rows":20,"table_max_cols":15}).ndjson)

---

## 轮次 67 · 助手 · 2026-06-15 15:14 Asia/Shanghai

sheet_in = wb_in.worksheets.get_item(sheet_name)
vals = sheet_in.get_range("A1:O708").values
type(vals), len(vals), len(vals[0]), vals[:2]

---

## 轮次 68 · 助手 · 2026-06-15 15:15 Asia/Shanghai

headers = vals[0]
rows = vals[1:]
# Remove rows with no keyword
data_rows = [r for r in rows if r[1]]
len(data_rows), data_rows[-1][:9]

---

## 轮次 69 · 助手 · 2026-06-15 15:15 Asia/Shanghai

for r in data_rows[:30]:
    print(r[0], r[1], r[2], r[4], r[5], r[6], r[7], r[8])
print("last few")
for r in data_rows[-10:]:
    print(r[0], r[1], r[2], r[4], r[5], r[6], r[7], r[8])

---

## 轮次 70 · 助手 · 2026-06-15 15:16 Asia/Shanghai

import math, re, statistics, json, textwrap, os, sys, unicodedata
def to_float(x):
    if x is None or x == "":
        return None
    if isinstance(x, (int,float)):
        return float(x)
    try:
        return float(str(x).replace(",","").replace("%",""))
    except:
        return None

# Prepare raw dicts
raw_records = []
for i, r in enumerate(data_rows, start=1):
    keyword = (r[1] or "").strip()
    if not keyword:
        continue
    rec = {
        "序号": r[0] if r[0] is not None else i,
        "搜索词": keyword,
        "原始中文翻译": r[2],
        "搜索量": to_float(r[4]) or 0,
        "90天增长": to_float(r[5]),
        "180天增长": to_float(r[6]),
        "点击份额": to_float(r[7]),
        "搜索转化率": to_float(r[8]),
        "商品1标题": r[9],
        "商品1ASIN": r[10],
        "商品2标题": r[11],
        "商品2ASIN": r[12],
        "商品3标题": r[13],
        "商品3ASIN": r[14],
    }
    raw_records.append(rec)
len(raw_records), max(r["搜索量"] for r in raw_records), min(r["搜索量"] for r in raw_records)

---

## 轮次 71 · 助手 · 2026-06-15 15:18 Asia/Shanghai

# Rule dictionaries
brand_patterns = [
    ("kärcher", "Kärcher"), ("karcher", "Kärcher"), ("kaercher", "Kärcher"), ("bissell", "Bissell"),
    ("vax", "VAX"), ("hoover", "Hoover"), ("shark", "Shark"), ("hyla", "HYLA"), ("thomas", "THOMAS"),
    ("vacmaster", "Vacmaster"), ("vorwerk", "Vorwerk"), ("bosch", "Bosch"), ("philips", "Philips"),
    ("rowenta", "Rowenta"), ("miele", "Miele"), ("aeg", "AEG"), ("cleanmaxx", "Cleanmaxx"),
    ("rivenara", "Rivenara"), ("haushof", "HAUSHOF"), ("zilan", "Zilan"), ("saker", "Saker"),
    ("spotclean", "Bissell SpotClean"), ("spot wash", "Spot Wash"), ("stain striker", "Shark StainStriker"),
    ("stainstriker", "Shark StainStriker"), ("dirt devil", "Dirt Devil"), ("einhell", "Einhell")
]
# ordered rules
category_rules = [
    (["polsterreiniger gerät","polsterreinigungsgerät","polsterreiniger", "polstersauger", "polster reiniger"], "Polsterreiniger/布艺清洁机"),
    (["sofa reiniger", "sofareiniger", "couch reiniger", "couchreiniger", "sofa cleaner"], "Sofa-/Couch-Reiniger/沙发清洁机"),
    (["textilreiniger", "textil reiniger"], "Textilreiniger/织物清洁机"),
    (["fleckenreiniger", "flecken reiniger", "spot cleaner", "spotclean", "stain"], "Fleckenreiniger/污渍清洁机"),
    (["waschsauger", "wasch sauger", "sprühextraktionsgerät", "sprüh extraktionsgerät"], "Waschsauger/Sprühextraktion/抽洗机"),
    (["nass trockensauger", "nass-/trockensauger", "nasssauger", "nassauger", "nass sauger"], "Nass-/Trockensauger/湿式或干湿吸尘器"),
    (["teppichreiniger", "teppich reiniger", "teppich reinigungsgerät", "carpet cleaner"], "Teppichreiniger/地毯清洁机"),
    (["dampfreiniger", "dampf reiniger", "steam cleaner"], "Dampfreiniger/蒸汽清洁机"),
    (["wasserstaubsauger", "wasser staubsauger"], "Wasserstaubsauger/水过滤吸尘器"),
    (["handstaubsauger", "staubsauger"], "Staubsauger/吸尘器泛词"),
    (["reinigungsmittel", "teppich shampoo", "shampoo", "konzentrat", "reinigungslösung", "reiniger"], "Reinigungsmittel/清洁剂"),
]

scenario_rules = [
    (["polster", "polstermöbel", "polsterreiniger"], "Polster/软垫布艺"),
    (["sofa", "couch"], "Sofa/Couch/沙发"),
    (["teppich", "carpet"], "Teppich/地毯"),
    (["matratze", "matratzen"], "Matratze/床垫"),
    (["auto", "autositz", "autositze", "car"], "Auto/Autositze/车内座椅"),
    (["treppe", "treppen"], "Treppen/楼梯"),
    (["stuhl", "stühle", "sessel"], "Stuhl/Sessel/椅子座椅"),
    (["hund", "hunde", "katze", "katzen", "haustier", "pet"], "Haustiere/宠物家庭"),
    (["bett", "bettwäsche"], "Bett/Bettwäsche/床品"),
    (["möbel", "möbelstoff"], "Möbel/家具"),
]

function_rules = [
    (["dampf", "steam"], "Dampf/蒸汽清洁"),
    (["heißwasser", "heisswasser", "heißes wasser", "heisses wasser", "warmwasser"], "Heißwasser/热水清洁"),
    (["kaltwasser"], "Kaltwasser/冷水日常清洁"),
    (["nass trocken", "nass-/trocken", "nass und trocken"], "Nass-Trocken/干湿两用"),
    (["nasssauger", "nassauger", "nass sauger"], "Nasssaugen/湿吸"),
    (["waschsauger", "sprühextraktion", "extraktion"], "Sprühen-Waschen-Saugen/喷洗抽吸"),
    (["fleck", "flecken", "stain"], "Fleckenentfernung/污渍清除"),
    (["tierhaar", "tierhaare", "haare", "hundehaare", "katzenhaare"], "Tierhaare/宠物毛发"),
    (["urin"], "Urin-/Geruchsflecken/尿渍异味"),
    (["geruch", "gerüche", "odor"], "Geruchsentfernung/除味"),
    (["milbe", "milben"], "Milben/除螨"),
    (["allerg", "allergie"], "Allergie/过敏源"),
    (["desinfektion", "bakterien", "hygien"], "Hygiene/消杀卫生"),
    (["saugkraft", "starke saug", "power"], "Saugkraft/吸力"),
    (["reinigen", "reinigung", "reinigungsgerät"], "Reinigung/清洁需求"),
]

form_rules = [
    (["handgerät", "handheld", "hand"], "Handgerät/手持"),
    (["tragbar", "portable"], "Tragbar/便携"),
    (["kompakt", "compact"], "Kompakt/紧凑"),
    (["klein", "small"], "Klein/小型"),
    (["leicht", "lightweight"], "Leicht/轻量"),
    (["kabellos", "cordless", "akku"], "Kabellos/Akku/无线"),
    (["3 in 1", "3-in-1", "3in1"], "3-in-1/三合一"),
    (["4 in 1", "4-in-1", "4in1"], "4-in-1/四合一"),
    (["set", "kit"], "Set/套装"),
]

accessory_rules = [
    (["reinigungsmittel", "reinigungslösung", "reiniger", "konzentrat", "shampoo", "mittel", "lösung"], "清洁剂/溶液"),
    (["filter", "patronenfilter", "ersatzfilter"], "滤芯/滤网"),
    (["schlauch"], "软管"),
    (["düse", "duese"], "吸嘴/喷嘴"),
    (["bürste", "buerste", "brush", "scrubber"], "刷头/刷子"),
    (["ersatz", "ersatzteile"], "替换件"),
    (["beutel", "pads"], "耗材件"),
]

param_rules = [
    (["1800w", "1800 w"], "1800W"),
    (["1700w", "1700 w"], "1700W"),
    (["800w", "800 w"], "800W"),
    (["450w", "450 w"], "450W"),
    (["500w", "500 w"], "500W"),
    (["17kpa", "17 kpa"], "17kPa吸力"),
    (["1l", "1 l", "1 liter"], "1L水箱"),
    (["100°", "100 grad", "100c"], "100°C蒸汽"),
    (["60°", "60 grad", "60c"], "60°C热水"),
]

low_related_terms = [
    "wasserstaubsauger", "handstaubsauger", "staubsauger", "sauger", "vacuum", "wasserfilter",
    "hyla", "vorwerk", "reinigungsset", "multi scrubber", "cleaning gadgets"
]

special_trans = {
    "polsterreiniger gerät": "布艺/软垫清洁机",
    "nasssauger": "湿式吸尘器",
    "waschsauger": "抽洗机/洗地毯机",
    "nasssauger polsterreiniger": "布艺清洁湿式吸尘器",
    "waschsauger polsterreiniger": "布艺抽洗机",
    "teppichreiniger waschsauger": "地毯清洁抽洗机",
    "teppich reinigungsgerät": "地毯清洁设备",
    "teppichreiniger gerät": "地毯清洁机",
    "hyla wasserstaubsauger": "HYLA 水过滤吸尘器",
    "hyla": "HYLA 品牌词",
    "nass sauger": "湿式吸尘器",
    "wasserstaubsauger": "水过滤吸尘器",
    "sofa reiniger gerät": "沙发清洁机",
    "nassauger": "湿式吸尘器",
    "nass trockensauger polsterreiniger": "干湿两用布艺清洁机",
    "teppich und polsterreiniger gerät": "地毯与布艺清洁机",
    "polsterreinigungsgerät": "布艺清洁设备",
    "polstersauger": "布艺吸尘/清洁机",
    "waschsauger mit dampffunktion": "带蒸汽功能抽洗机",
    "dampfreiniger": "蒸汽清洁器",
}

def normalize_kw(kw):
    kw = kw.lower().strip()
    repl = {
        "ä":"a", "ö":"o", "ü":"u", "ß":"ss",
        "é":"e", "è":"e", "à":"a"
    }
    norm = kw
    for k,v in repl.items():
        norm = norm.replace(k,v)
    norm = re.sub(r"[^\w\s\-/°]+", " ", norm)
    norm = re.sub(r"\s+", " ", norm).strip()
    return norm

# Helper match includes both original lower and normalized forms
def contains_any(kw_l, kw_n, patterns):
    return [p for p in patterns if p in kw_l or normalize_kw(p) in kw_n]

def apply_rules(kw, rules):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    out = []
    for pats, label in rules:
        if contains_any(kw_l, kw_n, pats):
            if label not in out:
                out.append(label)
    return out

def detect_brands(kw):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    brands = []
    for pat, brand in brand_patterns:
        if pat in kw_l or normalize_kw(pat) in kw_n:
            if brand not in brands:
                brands.append(brand)
    return brands

def translate_keyword(kw, raw_cn, category, scenarios, funcs, forms):
    if raw_cn:
        return raw_cn
    k = kw.lower().strip()
    if k in special_trans:
        return special_trans[k]
    pieces = []
    if category:
        pieces.append(category[0].split("/")[1] if "/" in category[0] else category[0])
    for group in [scenarios, funcs, forms]:
        for lab in group[:2]:
            if "/" in lab:
                pieces.append(lab.split("/")[-1])
            else:
                pieces.append(lab)
    return " / ".join(dict.fromkeys(pieces)) if pieces else "待人工翻译/低相关词"

volumes = [r["搜索量"] for r in raw_records if r["搜索量"] is not None]
max_vol = max(volumes)
def clamp(x, lo=0, hi=100): 
    return max(lo, min(hi, x))

def norm_volume(vol):
    return clamp(math.log1p(max(vol, 0)) / math.log1p(max_vol) * 100)

def score_growth(g):
    if g is None:
        return 50
    # g is -0.3 etc, clamp -0.5 to +1.0 
    return clamp(50 + g*50)  # +100% => 100, -100%=>0

def score_conv(c):
    if c is None:
        return 0
    return clamp(c / 0.03 * 100)

def score_click(c):
    if c is None:
        return 0
    return clamp(c / 0.35 * 100)

def determine_relevance(kw, category, scenarios, funcs, forms, brands, accessories):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    rel = 20
    # Core fabric/upholstery/sofa/mattress
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["polsterreiniger", "polsterreinigungs", "polstersauger", "sofa reiniger", "couch reiniger", "textilreiniger", "polster"]):
        rel = max(rel, 95)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "sprühextraktion", "spruh extraktion"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "textil", "teppich"]):
        rel = max(rel, 90)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["nasssauger", "nassauger", "nass sauger", "nass trockensauger"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "textil"]):
        rel = max(rel, 90)
    # Nearby terms
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "nasssauger", "nassauger"]):
        rel = max(rel, 75)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["teppichreiniger", "teppich reinigungsgerät", "teppich reiniger"]):
        rel = max(rel, 68)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["dampfreiniger", "dampf"]):
        rel = max(rel, 65)
        if any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "matratze"]):
            rel = max(rel, 88)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["fleck", "spot", "stain"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "teppich", "carpet"]):
        rel = max(rel, 85)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["auto", "autositz", "autositze", "matratze", "treppen"]):
        rel = max(rel, 75)
    # Lower terms
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["wasserstaubsauger", "staubsauger", "handstaubsauger"]):
        rel = min(max(rel, 45), 55) if rel < 75 else rel
    if accessories and not any(term in kw_l or normalize_kw(term) in kw_n for term in ["gerät", "gerat", "maschine", "waschsauger", "nasssauger", "dampfreiniger", "polsterreiniger"]):
        rel = min(rel, 45)
    # Brand pure words not product type
    if brands and len(kw.split()) <= 2 and not any(c in kw_l for c in ["polster", "teppich", "wasch", "nass", "dampf", "reiniger", "gerät", "gerat", "spot", "stain"]):
        rel = min(rel, 35)
    return rel

def supply_fit_score(kw, rel, category, funcs, forms, scenarios, accessories):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    # Core fit
    if rel >= 90:
        return 3
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["dampf"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "polster", "sofa", "teppich", "reiniger"]):
        return 3
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "nasssauger", "nassauger", "teppichreiniger", "fleckenreiniger", "dampfreiniger"]):
        return 2
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["auto", "matratze", "treppen", "sofa", "couch", "polster"]):
        return 2
    if accessories:
        return 1
    return 1 if rel >= 45 else 0

def buying_intent(kw, category, scenarios, funcs, forms, brands, accessories):
    intents = []
    if brands: intents.append("品牌/竞品截流")
    if accessories: intents.append("配件/耗材")
    if forms: intents.append("形态规格型")
    if funcs: intents.append("功能痛点型")
    if scenarios: intents.append("场景型")
    if category: intents.append("品类泛词/产品词")
    # parameter specific
    if re.search(r"\d+\s?(w|kpa|l|liter|°|grad)", kw.lower()): intents.append("参数型")
    if not intents: intents.append("泛搜索/待观察")
    return " + ".join(dict.fromkeys(intents))

def ad_suggestion(level, intent, brands, accessories, rel, supply_fit):
    if level.startswith("S"):
        return "核心需求Campaign；Exact主控 + Phrase拓展；保证搜索结果顶部曝光"
    if level.startswith("A"):
        return "高机会长尾Campaign；Phrase/Exact测试；按需求点分组控ACOS"
    if "品牌/竞品" in level:
        return "竞品/品牌词单独Campaign；低预算商品投放+精准词，谨慎控制侵权与转化"
    if "配件" in level:
        return "配件/耗材词单独观察；如产品不卖耗材则低预算或否定"
    if level.startswith("B"):
        return "中机会测试Campaign；Phrase + Auto close match挖词"
    if level.startswith("C"):
        return "低预算探索；主要用于收录/自动广告搜索词观察"
    return "低匹配或风险词；不主推，必要时否定"

def listing_suggestion(category, scenarios, funcs, forms, brands, accessories, level):
    if "配件" in level:
        return "仅在后台词/否词库观察；主Listing不建议突出耗材词"
    parts = []
    if category: parts.append("标题/五点前置品类词：" + "、".join(category[:2]))
    if scenarios: parts.append("图片/A+展示场景：" + "、".join(scenarios[:3]))
    if funcs: parts.append("五点/A+强化功能：" + "、".join(funcs[:3]))
    if forms: parts.append("尺寸图/收纳图突出：" + "、".join(forms[:2]))
    if brands: parts.append("竞品对比仅内部使用，不写入Listing")
    return "；".join(parts[:3]) if parts else "低相关词，暂不进入Listing主文案"

def visual_suggestion(scenarios, funcs, forms, level):
    if level.startswith(("S","A","B")):
        parts = []
        if "Sofa/Couch/沙发" in scenarios or any("Sofa" in s for s in scenarios):
            parts.append("沙发污渍清洁前后对比")
        if "Polster/软垫布艺" in scenarios:
            parts.append("软垫/布艺深度清洁图")
        if "Teppich/地毯" in scenarios:
            parts.append("地毯/楼梯/地垫场景图")
        if "Auto/Autositze/车内座椅" in scenarios:
            parts.append("车内座椅清洁场景")
        if any("Dampf" in f for f in funcs):
            parts.append("100°C蒸汽/卫生除螨图")
        if any("Heißwasser" in f for f in funcs):
            parts.append("60°C热水溶污图")
        if any("Flecken" in f for f in funcs):
            parts.append("顽固污渍前后对比")
        if any("Tragbar" in f or "Kompakt" in f or "Klein" in f for f in forms):
            parts.append("轻巧便携收纳图")
        return "；".join(dict.fromkeys(parts) or ["围绕需求点做场景图和对比图"])
    return "不作为主视觉卖点，内部观察"

def product_suggestion(scenarios, funcs, forms, accessories, level):
    if "配件" in level:
        return "若耗材词需求大，可后续开发清洁液/刷头/软管配件包；当前不主推"
    suggestions = []
    if any("Dampf" in f for f in funcs): suggestions.append("强化100°C蒸汽消杀/除螨")
    if any("Heißwasser" in f for f in funcs): suggestions.append("强化60°C热水清洁")
    if any("Flecken" in f for f in funcs): suggestions.append("优化顽固污渍刷头/吸水效率")
    if any("Tierhaare" in f for f in funcs) or any("Haustiere" in s for s in scenarios): suggestions.append("增加宠物毛发/尿渍场景")
    if any("Auto" in s for s in scenarios): suggestions.append("增加车内座椅清洁卖点")
    if any("Kompakt" in f or "Tragbar" in f for f in forms): suggestions.append("突出1.25m软管与紧凑收纳")
    if not suggestions: suggestions.append("作为相关需求词观察，结合广告转化再决定产品改款")
    return "；".join(suggestions)

def classify_record(rec):
    kw = rec["搜索词"].strip()
    kw_l = kw.lower()
    category = apply_rules(kw, category_rules)
    scenarios = apply_rules(kw, scenario_rules)
    funcs = apply_rules(kw, function_rules)
    forms = apply_rules(kw, form_rules)
    accessories = apply_rules(kw, accessory_rules)
    params = apply_rules(kw, param_rules)
    brands = detect_brands(kw)
    rel = determine_relevance(kw, category, scenarios, funcs, forms, brands, accessories)
    fit = supply_fit_score(kw, rel, category, funcs, forms, scenarios, accessories)
    vol_score = norm_volume(rec["搜索量"])
    growth_score = (score_growth(rec["90天增长"]) + score_growth(rec["180天增长"])) / 2
    conv_s = score_conv(rec["搜索转化率"])
    click_s = score_click(rec["点击份额"])
    demand = 0.65*vol_score + 0.15*growth_score + 0.10*conv_s + 0.10*click_s
    trend = growth_score
    value = 0.35*demand + 0.25*rel + 0.20*(fit*33.333) + 0.10*trend + 0.10*conv_s
    
    # opportunity level
    if brands and (len(kw.split()) <= 3 or any(b.lower().split()[0] in kw_l for b in brands)):
        level = "品牌/竞品词"
    elif accessories and rel < 60:
        level = "配件/耗材词"
    elif rel >= 90 and fit == 3 and demand >= 55:
        level = "S-核心必打"
    elif rel >= 85 and fit >= 2 and value >= 60:
        level = "A-高机会长尾"
    elif rel >= 75 and fit >= 2 and value >= 50:
        level = "B-中机会测试"
    elif rel >= 55 and value >= 40:
        level = "C-低预算观察"
    else:
        level = "低匹配/谨慎词"
    # override for obvious core with low/missing demand
    if not brands and not (accessories and rel<60):
        if rel >= 90 and fit == 3 and rec["搜索量"] >= 8000:
            level = "S-核心必打" if rec["搜索量"] >= 50000 else "A-高机会长尾"
        elif rel >= 90 and fit == 3:
            level = "A-高机会长尾"
    
    primary_category = "；".join(category)
    consumer_class = []
    # gather main categories
    if category: consumer_class.append("品类名称")
    if scenarios: consumer_class.append("使用场景")
    if funcs: consumer_class.append("功能特征")
    if forms: consumer_class.append("形态/尺寸")
    if accessories: consumer_class.append("配件/耗材")
    if brands: consumer_class.append("品牌")
    if params: consumer_class.append("参数")
    if not consumer_class: consumer_class.append("其他需求")
    
    combo_tags = []
    if category: combo_tags.append(category[0].split("/")[0])
    if scenarios: combo_tags.append(scenarios[0].split("/")[0])
    if funcs: combo_tags.append(funcs[0].split("/")[0])
    if forms: combo_tags.append(forms[0].split("/")[0])
    combo = " × ".join(combo_tags[:4]) if combo_tags else "泛清洁需求"
    
    result = {
        "序号": rec["序号"],
        "原始关键词": kw,
        "清洗关键词": normalize_kw(kw),
        "中文翻译": translate_keyword(kw, rec["原始中文翻译"], category, scenarios, funcs, forms),
        "搜索量": int(rec["搜索量"]) if rec["搜索量"] else 0,
        "90天增长": rec["90天增长"],
        "180天增长": rec["180天增长"],
        "点击份额": rec["点击份额"],
        "搜索转化率": rec["搜索转化率"],
        "搜索需求分类": "；".join(consumer_class),
        "品类名称": primary_category,
        "目标受众": "宠物家庭" if any("Haustiere" in s for s in scenarios) else "",
        "使用场景": "；".join(scenarios),
        "功能特征": "；".join(funcs),
        "风格/形态": "；".join(forms),
        "颜色": "",
        "材质材料": "Textil/Polsterstoff/织物布艺" if any(x in kw_l for x in ["textil","polster","stoff"]) else "",
        "尺寸大小": "；".join([f for f in forms if any(x in f for x in ["Kompakt", "Klein", "Leicht"])]),
        "容量": "1L水箱" if params and any("1L" in p for p in params) else "",
        "参数": "；".join(params),
        "主题元素": "",
        "品牌": "；".join(brands),
        "季节": "",
        "节日": "",
        "兼容搭配": "",
        "配件": "；".join(accessories),
        "其他需求": "",
        "购买意图": buying_intent(kw, category, scenarios, funcs, forms, brands, accessories),
        "组合标签": combo,
        "需求强度分": round(demand, 1),
        "相关性分": round(rel, 1),
        "供给匹配分(0/1/3)": fit,
        "价值机会分": round(value, 1),
        "机会等级": level,
        "广告打法建议": ad_suggestion(level, None, brands, accessories, rel, fit),
        "Listing/链接用途": listing_suggestion(category, scenarios, funcs, forms, brands, accessories, level),
        "视觉/内容建议": visual_suggestion(scenarios, funcs, forms, level),
        "选品/产品建议": product_suggestion(scenarios, funcs, forms, accessories, level),
        "Top1 ASIN": rec["商品1ASIN"],
        "Top2 ASIN": rec["商品2ASIN"],
        "Top3 ASIN": rec["商品3ASIN"],
    }
    return result

tagged = [classify_record(r) for r in raw_records]
from collections import Counter
Counter([r["机会等级"] for r in tagged]), len(tagged)

---

## 轮次 72 · 助手 · 2026-06-15 15:19 Asia/Shanghai

for r in tagged[:40]:
    print(r["原始关键词"], r["搜索量"], r["机会等级"], r["需求强度分"], r["相关性分"], r["供给匹配分(0/1/3)"], r["组合标签"])

---

## 轮次 73 · 助手 · 2026-06-15 15:20 Asia/Shanghai

for kw in ["nass sauger","teppichreiniger"]:
    cat = apply_rules(kw, category_rules)
    scen = apply_rules(kw, scenario_rules)
    funcs = apply_rules(kw, function_rules)
    forms = apply_rules(kw, form_rules)
    acc = apply_rules(kw, accessory_rules)
    brands = detect_brands(kw)
    print(kw, cat, funcs, acc, determine_relevance(kw,cat,scen,funcs,forms,brands,acc), supply_fit_score(kw, 75, cat, funcs, forms, scen, acc))

---

## 轮次 74 · 助手 · 2026-06-15 15:21 Asia/Shanghai

# Refine accessory rules and relevance
accessory_rules = [
    (["reinigungsmittel", "reinigungslösung", "reinigungslosung", "konzentrat", "shampoo", "reinigungsflüssigkeit", "reinigungsflussigkeit", "cleaning solution", "solution"], "清洁剂/溶液"),
    (["filter", "patronenfilter", "ersatzfilter"], "滤芯/滤网"),
    (["schlauch"], "软管"),
    (["düse", "duese"], "吸嘴/喷嘴"),
    (["bürste", "buerste", "brush", "scrubber"], "刷头/刷子"),
    (["ersatz", "ersatzteile"], "替换件"),
    (["beutel", "pads"], "耗材件"),
]
def determine_relevance(kw, category, scenarios, funcs, forms, brands, accessories):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    rel = 20
    # Core fabric/upholstery/sofa/mattress
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["polsterreiniger", "polsterreinigungs", "polstersauger", "sofa reiniger", "couch reiniger", "textilreiniger", "polster"]):
        rel = max(rel, 95)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "sprühextraktion", "spruh extraktion"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "textil", "teppich"]):
        rel = max(rel, 90)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["nasssauger", "nassauger", "nass sauger", "nass trockensauger"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "textil"]):
        rel = max(rel, 90)
    # Nearby terms
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "nasssauger", "nassauger", "nass sauger"]):
        rel = max(rel, 75)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["teppichreiniger", "teppich reinigungsgerät", "teppich reiniger"]):
        rel = max(rel, 68)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["dampfreiniger", "dampf"]):
        rel = max(rel, 65)
        if any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "couch", "matratze"]):
            rel = max(rel, 88)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["fleck", "spot", "stain"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["polster", "sofa", "teppich", "carpet"]):
        rel = max(rel, 85)
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["auto", "autositz", "autositze", "matratze", "treppen"]):
        rel = max(rel, 75)
    # Lower terms
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["wasserstaubsauger", "staubsauger", "handstaubsauger"]):
        rel = min(max(rel, 45), 55) if rel < 75 else rel
    if accessories and not any(term in kw_l or normalize_kw(term) in kw_n for term in ["gerät", "gerat", "maschine", "waschsauger", "nasssauger", "nassauger", "dampfreiniger", "polsterreiniger", "teppichreiniger"]):
        rel = min(rel, 45)
    # Brand pure words not product type
    if brands and len(kw.split()) <= 2 and not any(c in kw_l for c in ["polster", "teppich", "wasch", "nass", "dampf", "reiniger", "gerät", "gerat", "spot", "stain"]):
        rel = min(rel, 35)
    return rel

def supply_fit_score(kw, rel, category, funcs, forms, scenarios, accessories):
    kw_l = kw.lower()
    kw_n = normalize_kw(kw)
    # Core fit
    if rel >= 90:
        return 3
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["dampf"]) and any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "polster", "sofa", "teppich", "reiniger"]):
        return 3
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["waschsauger", "nasssauger", "nassauger", "nass sauger", "teppichreiniger", "fleckenreiniger", "dampfreiniger"]):
        return 2
    if any(term in kw_l or normalize_kw(term) in kw_n for term in ["auto", "autositz", "autositze", "matratze", "treppen", "sofa", "couch", "polster"]):
        return 2
    if accessories:
        return 1
    return 1 if rel >= 45 else 0

tagged = [classify_record(r) for r in raw_records]
Counter([r["机会等级"] for r in tagged])

---

## 轮次 75 · 助手 · 2026-06-15 15:22 Asia/Shanghai

for r in tagged[:40]:
    print(r["原始关键词"], r["搜索量"], r["机会等级"], r["需求强度分"], r["相关性分"], r["供给匹配分(0/1/3)"], r["组合标签"])

---

## 轮次 76 · 助手 · 2026-06-15 15:23 Asia/Shanghai

# Build output data structures
total_volume = sum(r["搜索量"] for r in tagged)
level_counts = Counter(r["机会等级"] for r in tagged)
level_volume = {}
for r in tagged:
    level_volume[r["机会等级"]] = level_volume.get(r["机会等级"], 0) + r["搜索量"]

# Sort levels
level_order = ["S-核心必打", "A-高机会长尾", "B-中机会测试", "C-低预算观察", "品牌/竞品词", "配件/耗材词", "低匹配/谨慎词"]
dashboard_summary = []
for lv in level_order:
    dashboard_summary.append([lv, level_counts.get(lv,0), int(level_volume.get(lv,0)), round((level_volume.get(lv,0)/total_volume)*100, 1) if total_volume else 0])

result_headers = list(tagged[0].keys())
result_rows = [[r.get(h) for h in result_headers] for r in tagged]

# High opportunity
high_levels = {"S-核心必打", "A-高机会长尾"}
high_tagged = sorted([r for r in tagged if r["机会等级"] in high_levels], key=lambda x: (-x["价值机会分"], -x["搜索量"])) 
high_headers = ["原始关键词","中文翻译","搜索量","90天增长","180天增长","点击份额","搜索转化率","搜索需求分类","品类名称","使用场景","功能特征","组合标签","需求强度分","相关性分","供给匹配分(0/1/3)","价值机会分","机会等级","广告打法建议","Listing/链接用途","视觉/内容建议","选品/产品建议"]
high_rows = [[r.get(h) for h in high_headers] for r in high_tagged]

# TF aggregation
from collections import defaultdict
agg = defaultdict(lambda: {"dimension": None, "count": 0, "volume": 0.0, "scores": [], "keywords": []})
def add_tag(label, dim, rec):
    if not label:
        return
    key = (dim, label)
    d = agg[key]
    d["dimension"] = dim
    d["count"] += 1
    d["volume"] += rec["搜索量"]
    d["scores"].append(rec["价值机会分"])
    d["keywords"].append((rec["搜索量"], rec["原始关键词"]))

for r in tagged:
    for dim, col in [("品类名称", "品类名称"), ("使用场景","使用场景"), ("功能特征","功能特征"), ("风格/形态","风格/形态"), ("品牌","品牌"), ("配件","配件"), ("参数","参数")]:
        labels = [x for x in str(r.get(col,"")).split("；") if x and x!="None"]
        for lab in labels:
            add_tag(lab, dim, r)
    # also buying intent groups
    for lab in str(r.get("购买意图","")).split(" + "):
        if lab:
            add_tag(lab, "购买意图", r)

tf_headers = ["搜索需求分类","标签/词根","中文含义","出现次数词频","出现次数占比","搜索量加权词频","搜索量占比","平均价值机会分","代表关键词Top5","应用建议"]
tf_rows = []
nkw = len(tagged)
for (dim, label), d in agg.items():
    if not label:
        continue
    de = label.split("/")[0]
    cn = label.split("/")[-1] if "/" in label else label
    top_kw = "；".join([kw for vol, kw in sorted(d["keywords"], reverse=True)[:5]])
    avg_score = sum(d["scores"])/len(d["scores"]) if d["scores"] else 0
    app = ""
    if dim == "品类名称":
        app = "标题/广告结构/SEO核心词"
    elif dim == "使用场景":
        app = "场景图/A+模块/场景广告组"
    elif dim == "功能特征":
        app = "五点卖点/主图对比/功能词投放"
    elif dim == "品牌":
        app = "竞品截流/商品投放，谨慎使用"
    elif dim == "配件":
        app = "配件/耗材词观察或否定"
    else:
        app = "用于需求分类与广告分组"
    tf_rows.append([dim, de, cn, d["count"], round(d["count"]/nkw*100,2), int(d["volume"]), round(d["volume"]/total_volume*100,2), round(avg_score,1), top_kw, app])
tf_rows = sorted(tf_rows, key=lambda x: (x[0], -x[5]))

# Demand-supply matrix
demand_points = [
    ("布艺软垫核心词", ["polsterreiniger","polsterreinigungs","polstersauger","polster reiniger","polster"], "核心供给强匹配：1800W、17kPa、喷洗吸干、布艺/软垫深度清洁", 3, "主推核心词，标题/广告/主图必须覆盖"),
    ("沙发/Couch清洁", ["sofa","couch"], "核心场景强匹配：沙发、软垫、家庭污渍", 3, "单独广告组，主图做沙发污渍前后对比"),
    ("抽洗/湿吸设备", ["waschsauger","nasssauger","nassauger","nass sauger"], "形态强相关：抽洗/湿吸/干湿清洁", 2, "作为大词拓展，Phrase/Exact分层"),
    ("地毯联动需求", ["teppichreiniger","teppich reiniger","teppich"], "相关场景：地毯/楼梯/地垫，但需避免过度泛化", 2, "中预算测试，Listing可表达地毯但不抢主叙事"),
    ("蒸汽/热水清洁", ["dampf","heißwasser","heisswasser","warmwasser"], "差异化强供给：100°C蒸汽、60°C热水、冷水模式", 3, "功能差异化卖点，适合A+和视频重点呈现"),
    ("污渍/宠物/除味痛点", ["fleck","stain","tierhaar","hunde","katze","urin","geruch"], "真实痛点强相关：顽固污渍、宠物家庭、异味", 3, "痛点词精准/词组，评论和图片做证据链"),
    ("车内/床垫/楼梯", ["auto","autositz","autositze","matratze","treppen"], "长尾场景强相关：汽车座椅、床垫、楼梯", 3, "长尾词低CPC精准测试，适合场景图"),
    ("便携/紧凑/小型", ["tragbar","portable","kompakt","klein","leicht","handgerät","handheld"], "产品形态卖点：紧凑易收纳、1.25m软管", 2, "主图/A+增强尺寸收纳图，低中预算测试"),
    ("品牌/竞品截流", ["kärcher","karcher","bissell","shark","vacmaster","vax","hoover","hyla","thomas"], "竞品流量池：需看价格、Review、主图对比", 1, "商品投放/低预算精准，严格控ACOS"),
    ("耗材/清洁剂/配件", ["shampoo","konzentrat","reinigungslösung","filter","schlauch","düse","bürste","ersatz"], "非主品需求，和本产品相关但购买意图偏耗材", 1, "不作为新品主推；可用于否词或配件开发")
]
matrix_headers = ["需求点","匹配关键词数","搜索量加权词频","搜索量占比","平均价值机会分","供给匹配分","代表关键词Top8","供给说明","策略动作"]
matrix_rows = []
for name, pats, supply, fit, action in demand_points:
    matched = []
    for r in tagged:
        kw = r["原始关键词"].lower()
        kwn = normalize_kw(kw)
        if any(p in kw or normalize_kw(p) in kwn for p in pats):
            matched.append(r)
    vol = sum(r["搜索量"] for r in matched)
    avg = sum(r["价值机会分"] for r in matched)/len(matched) if matched else 0
    tops = "；".join([r["原始关键词"] for r in sorted(matched, key=lambda x: -x["搜索量"])[:8]])
    matrix_rows.append([name, len(matched), int(vol), round(vol/total_volume*100,2) if total_volume else 0, round(avg,1), fit, tops, supply, action])

# competitor ASIN summary
asin_info = {}
for rec in raw_records:
    vol = rec["搜索量"]
    for idx in [1,2,3]:
        asin = rec.get(f"商品{idx}ASIN")
        title = rec.get(f"商品{idx}标题")
        if asin:
            d = asin_info.setdefault(asin, {"count":0, "volume":0, "title": title, "keywords":[]})
            d["count"] += 1
            d["volume"] += vol
            if not d["title"] and title:
                d["title"] = title
            if len(d["keywords"]) < 20:
                d["keywords"].append(rec["搜索词"])
asin_headers = ["ASIN","出现次数","覆盖搜索量","代表标题","代表搜索词Top10","竞品用途"]
asin_rows = []
for asin, d in sorted(asin_info.items(), key=lambda kv: (-kv[1]["volume"], -kv[1]["count"]))[:100]:
    title = d["title"] or ""
    kws = "；".join(d["keywords"][:10])
    use = "商品投放/竞品对标/标题与视觉拆解"
    asin_rows.append([asin, d["count"], int(d["volume"]), title, kws, use])

# Ad structure
ad_headers = ["Campaign需求点","广告目标","广告结构","推荐匹配模式","核心关键词示例","预算优先级","关注指标","否词/风险控制","Listing/视觉联动"]
ad_rows = [
    ["核心布艺清洁 Polsterreiniger", "验证最强PMF需求，拉动主词排名", "SP关键词：核心Campaign + 独立预算", "Exact + Phrase", "polsterreiniger gerät；nasssauger polsterreiniger；waschsauger polsterreiniger；polsterreinigungsgerät", "30%", "CTR、CVR、CPC、ACOS、自然排名", "否掉低相关staubsauger纯泛词", "标题前置Polsterreiniger Gerät；主图展示沙发/软垫清洁"],
    ["Sofa/Couch场景", "获取沙发清洁高意图长尾", "SP关键词：场景Campaign", "Exact + Phrase", "sofa reiniger gerät；couch reiniger；polsterreiniger sofa", "15%", "CVR、搜索词转化、评论场景反馈", "排除单纯清洁剂词", "主图/A+做沙发污渍前后对比"],
    ["Waschsauger/Nasssauger大词拓展", "承接抽洗机/湿吸设备需求", "SP关键词：中等预算拓展Campaign", "Phrase + Broad小预算", "waschsauger；nasssauger；nass sauger；nass trockensauger polsterreiniger", "15%", "花费占比、点击质量、Search Term", "若ACOS高，拆分大词并降价", "五点解释喷洗吸干、干湿处理"],
    ["Teppich地毯联动", "覆盖地毯/楼梯/地垫相关需求", "SP关键词：相关场景Campaign", "Phrase + Exact", "teppichreiniger waschsauger；teppich reinigungsgerät；teppich und polsterreiniger gerät", "10%", "CVR、转化场景、客诉风险", "不要把carpet cleaner泛词过度放量", "图片展示地毯/楼梯清洁但不弱化布艺定位"],
    ["Dampf/Heißwasser差异化功能", "验证100°C蒸汽/60°C热水差异化卖点", "SP关键词 + SB视频可测试", "Phrase + Exact", "waschsauger mit dampffunktion；dampfreiniger polster；heißwasser polsterreiniger", "10%", "CTR、CVR、停留/视频点击", "排除衣物蒸汽/厨房蒸汽低相关", "A+做蒸汽/热水/冷水模式图"],
    ["Flecken/Pet痛点需求", "击中污渍、宠物毛发、尿渍和异味痛点", "SP关键词：痛点Campaign", "Phrase + Exact", "fleckenreiniger polster；polsterreiniger hund；urin sofa reinigen；tierhaare teppich", "8%", "CVR、评论痛点、退款原因", "避免承诺绝对消杀或医疗效果", "评论证据链+前后对比图"],
    ["Auto/Matratze/Treppen长尾场景", "低CPC长尾精准转化", "SP关键词：长尾Campaign", "Exact + Phrase", "nasssauger auto；polsterreiniger auto；matratzenreiniger；treppen teppichreiniger", "5%", "CPC、CVR、订单成本", "低量词集中在同一广告组", "车内/床垫/楼梯三类场景图"],
    ["品牌/竞品截流", "截流Kärcher/Bissell/Shark等竞品流量", "SP商品投放 + 品牌词低预算", "Product Targeting + Exact谨慎", "kärcher waschsauger；bissell spotclean；shark stainstriker；vacmaster waschsauger", "5%", "ACOS、转化率、详情页点击份额", "商标词谨慎，避免Listing侵权表达", "内部竞品对比表，不直接写竞品名"],
    ["自动广告挖词", "发现语义相关搜索词和商品流量", "Auto Close/Substitutes/Complements分组", "Auto", "Close Match；Substitutes；Complements", "2%", "有效Search Term、ASIN来源、否词", "每7天否定高点击不转化词", "回流到关键词词库和打标词典"],
]

# Tag dictionary sheet
tag_dict_headers = ["标签维度","德语/英文触发词","中文标签","业务用途","供给匹配说明"]
tag_dict_rows = []
for pats, label in category_rules:
    tag_dict_rows.append(["品类名称", " / ".join(pats), label, "SEO/广告结构/标题", "根据产品对象判断相关性"])
for pats, label in scenario_rules:
    tag_dict_rows.append(["使用场景", " / ".join(pats), label, "主图/A+/场景广告", "判断用户在哪里使用"])
for pats, label in function_rules:
    tag_dict_rows.append(["功能特征", " / ".join(pats), label, "五点/卖点/痛点词投放", "判断解决什么问题"])
for pats, label in form_rules:
    tag_dict_rows.append(["形态/尺寸", " / ".join(pats), label, "图片/尺寸图/收纳图", "判断形态和购买偏好"])
for pat, brand in brand_patterns:
    tag_dict_rows.append(["品牌", pat, brand, "竞品截流/商品投放", "独立竞品Campaign，谨慎控预算"])
for pats, label in accessory_rules:
    tag_dict_rows.append(["配件/耗材", " / ".join(pats), label, "否词/配件开发", "非主产品需求，谨慎投放"])
for pats, label in param_rules:
    tag_dict_rows.append(["参数", " / ".join(pats), label, "参数图/A+技术卖点", "验证是否和自身参数一致"])

# Rule explanation
rules_rows = [
    ["模块", "说明"],
    ["系统逻辑", "关键词 → 消费者需求 → TF词频统计 → 供给匹配 → 价值机会分 → 广告结构规划 → Listing/视觉/选品迁移"],
    ["TF出现次数词频", "某个词根/标签在关键词词库中出现的关键词数量，用于判断需求被提及的广度。"],
    ["搜索量加权词频", "包含该标签的关键词搜索量总和；本文件直接用原始搜索量加总，搜索量缺失时可用ABA排名权重替代。"],
    ["需求强度分", "0.65×搜索量分 + 0.15×增长分 + 0.10×转化率分 + 0.10×点击份额分。"],
    ["相关性分", "根据德国布艺清洗机类目的产品对象、使用场景、功能痛点和低相关泛词规则计算。"],
    ["供给匹配分", "0=不匹配；1=弱匹配/相关但非主卖点；2=可承接；3=强匹配核心卖点。"],
    ["价值机会分", "0.35×需求强度 + 0.25×相关性 + 0.20×供给匹配 + 0.10×增长 + 0.10×转化信号。"],
    ["机会等级", "S核心必打：高搜索+高相关+强供给；A高机会长尾：高相关强供给；B中机会测试：相关但偏泛；C低预算观察；品牌/竞品词；配件/耗材词；低匹配/谨慎词。"],
    ["德国布艺清洗机供给基准", "1800W、17kPa、100°C蒸汽、60°C热水、冷水、1L净水/污水箱、喷洒-刷洗-吸干-自清洁、便携紧凑、适合Polster/Sofa/Matratze/Teppich/Autositze。"],
    ["广告应用", "按需求点建Campaign，不按单个词堆广告；同一价值点下的大词可单独拆SKAG，但最终合并评估该需求点。"],
    ["视觉应用", "S/A词必须迁移到主图、场景图、对比图、A+模块；痛点词需要评论证据链和前后对比。"],
]
print(len(result_rows), len(high_rows), len(tf_rows), len(matrix_rows), len(asin_rows))
print(dashboard_summary)

---

## 轮次 77 · 助手 · 2026-06-15 15:24 Asia/Shanghai

total_volume

---

## 轮次 78 · 助手 · 2026-06-15 15:25 Asia/Shanghai

from artifact_tool import Workbook, SpreadsheetFile
from datetime import datetime

def col_letter(n):
    # 1-based
    s = ""
    while n:
        n, rem = divmod(n-1, 26)
        s = chr(65+rem) + s
    return s

def safe(v):
    if isinstance(v, str):
        v = v.replace("\x00","")
        if v.startswith("="):
            return "'" + v
    return v

def safe_matrix(mat):
    return [[safe(v) for v in row] for row in mat]

# Create workbook
wb_out = Workbook.create()

# Formatting constants
TITLE_FILL = "#0F766E"
HEADER_FILL = "#14532D"
SUBHEADER_FILL = "#DCFCE7"
LIGHT_FILL = "#F0FDF4"
WARN_FILL = "#FEF3C7"
BAD_FILL = "#FEE2E2"
WHITE = "#FFFFFF"
BORDER_COLOR = "#D1D5DB"

def add_sheet_with_data(wb, name, headers, rows, table_name=None, freeze=True):
    sh = wb.worksheets.add(name)
    data = [headers] + rows
    nrows = len(data)
    ncols = len(headers)
    rng = sh.get_range(f"A1:{col_letter(ncols)}{nrows}")
    rng.values = safe_matrix(data)
    # Format header
    sh.get_range(f"A1:{col_letter(ncols)}1").format = {
        "fill": HEADER_FILL,
        "font": {"bold": True, "color": WHITE},
        "horizontal_alignment": "center",
        "vertical_alignment": "center",
        "wrap_text": True,
        "row_height": 30
    }
    sh.get_range(f"A2:{col_letter(ncols)}{nrows}").format = {
        "vertical_alignment": "top",
        "wrap_text": True,
        "font": {"size": 10}
    }
    # Borders may be expensive; skip full borders for big sheets
    if freeze:
        try:
            sh.freeze_panes.freeze_rows(1)
        except Exception as e:
            pass
    try:
        if table_name:
            sh.tables.add(f"A1:{col_letter(ncols)}{nrows}", True, table_name)
    except Exception as e:
        # no table if fails
        print("table add failed", name, e)
    # sensible widths
    for ci in range(1, ncols+1):
        letter = col_letter(ci)
        width = 15
        head = str(headers[ci-1])
        if any(k in head for k in ["关键词","建议","用途","标题","代表","说明","组合","需求"]):
            width = 28
        if head in ["原始关键词","清洗关键词","中文翻译"]:
            width = 24
        if head in ["广告打法建议","Listing/链接用途","视觉/内容建议","选品/产品建议"]:
            width = 36
        if head in ["代表标题"]:
            width = 44
        if head in ["Top1 ASIN","Top2 ASIN","Top3 ASIN","ASIN"]:
            width = 14
        try:
            sh.get_range(f"{letter}:{letter}").format.column_width = width
        except Exception:
            pass
    return sh

# Dashboard
dash = wb_out.worksheets.add("标签汇总_看板")
# Title
dash.get_range("A1:H1").merge()
dash.get_range("A1").values = [["德国布艺清洗机 SIF关键词打标总览"]]
dash.get_range("A1:H1").format = {
    "fill": TITLE_FILL,
    "font": {"bold": True, "color": WHITE, "size": 16},
    "horizontal_alignment": "center",
    "vertical_alignment": "center",
    "row_height": 34
}
# KPI block
kpis = [
    ["指标", "数值", "说明"],
    ["关键词总数", len(tagged), "已打标搜索词数量"],
    ["总搜索量", int(total_volume), "过去360天搜索量汇总"],
    ["高机会词数量(S/A)", len(high_rows), "S核心必打 + A高机会长尾"],
    ["核心供给基准", "1800W / 17kPa / 100°C蒸汽 / 60°C热水", "用于供给匹配判断"],
    ["主推需求", "Polsterreiniger + Sofa + Waschsauger + Dampf", "优先进入广告与Listing"]
]
dash.get_range("A3:C8").values = safe_matrix(kpis)
dash.get_range("A3:C3").format = {"fill": HEADER_FILL, "font": {"bold": True, "color": WHITE}, "horizontal_alignment": "center"}
dash.get_range("A4:A8").format = {"fill": LIGHT_FILL, "font": {"bold": True}}
dash.get_range("B4:B8").format = {"font": {"bold": True, "size": 12}, "horizontal_alignment": "center"}
dash.get_range("A3:C8").format.wrap_text = True
dash.get_range("A:A").format.column_width = 22
dash.get_range("B:B").format.column_width = 28
dash.get_range("C:C").format.column_width = 44

# Opportunity table
opp_headers = ["机会等级","关键词数","搜索量加权词频","搜索量占比%"]
opp_data = [opp_headers] + dashboard_summary
dash.get_range(f"A10:D{10+len(dashboard_summary)}").values = safe_matrix(opp_data)
dash.get_range("A10:D10").format = {"fill": HEADER_FILL, "font": {"bold": True, "color": WHITE}, "horizontal_alignment": "center"}
dash.get_range(f"A11:D{10+len(dashboard_summary)}").format = {"wrap_text": True}
dash.get_range(f"D11:D{10+len(dashboard_summary)}").format.number_format = "0.0"

# Top demand matrix summary
dash.get_range("F3:J3").merge()
dash.get_range("F3").values = [["Top需求点（按搜索量）"]]
dash.get_range("F3:J3").format = {"fill": HEADER_FILL, "font": {"bold": True, "color": WHITE}, "horizontal_alignment": "center"}
top_matrix = sorted(matrix_rows, key=lambda x: -x[2])[:8]
dash.get_range("F4:J4").values = [["需求点","关键词数","搜索量","占比%","供给匹配"]]
dash.get_range("F4:J4").format = {"fill": SUBHEADER_FILL, "font": {"bold": True}, "horizontal_alignment": "center"}
dash.get_range(f"F5:J{4+len(top_matrix)}").values = safe_matrix([[r[0], r[1], r[2], r[3], r[5]] for r in top_matrix])
dash.get_range("F:F").format.column_width = 22
dash.get_range("G:G").format.column_width = 11
dash.get_range("H:H").format.column_width = 14
dash.get_range("I:I").format.column_width = 12
dash.get_range("J:J").format.column_width = 12

# Top high opportunity keywords
dash.get_range("F14:J14").merge()
dash.get_range("F14").values = [["高机会关键词Top10"]]
dash.get_range("F14:J14").format = {"fill": HEADER_FILL, "font": {"bold": True, "color": WHITE}, "horizontal_alignment": "center"}
top_high = sorted([r for r in high_tagged], key=lambda x: (-x["搜索量"], -x["价值机会分"]))[:10]
dash.get_range("F15:J15").values = [["关键词","中文","搜索量","机会等级","广告动作"]]
dash.get_range("F15:J15").format = {"fill": SUBHEADER_FILL, "font": {"bold": True}, "horizontal_alignment": "center"}
dash.get_range(f"F16:J{15+len(top_high)}").values = safe_matrix([[r["原始关键词"], r["中文翻译"], r["搜索量"], r["机会等级"], r["广告打法建议"]] for r in top_high])
dash.get_range("F:F").format.column_width = 26
dash.get_range("G:G").format.column_width = 24
dash.get_range("J:J").format.column_width = 38
dash.get_range("F16:J25").format.wrap_text = True
try:
    dash.freeze_panes.freeze_rows(1)
except Exception:
    pass

# Add other sheets
res_sh = add_sheet_with_data(wb_out, "关键词打标结果", result_headers, result_rows, "TaggingResults", True)
high_sh = add_sheet_with_data(wb_out, "高机会词清单", high_headers, high_rows, "HighOpportunity", True)
tf_sh = add_sheet_with_data(wb_out, "SIF需求词频统计", tf_headers, tf_rows, "TermFrequency", True)
matrix_sh = add_sheet_with_data(wb_out, "需求供给匹配矩阵", matrix_headers, matrix_rows, "SupplyDemandMatrix", True)
ad_sh = add_sheet_with_data(wb_out, "广告结构规划", ad_headers, ad_rows, "AdStructure", True)
asin_sh = add_sheet_with_data(wb_out, "竞品ASIN汇总", asin_headers, asin_rows, "CompetitorASIN", True)
dict_sh = add_sheet_with_data(wb_out, "标签词典", tag_dict_headers, tag_dict_rows, "TagDictionary", True)
rules_sh = add_sheet_with_data(wb_out, "打标规则说明", ["模块","说明"], rules_rows[1:], "Rules", True)

# Raw data
raw_headers = headers.copy()
for idx, h in enumerate(raw_headers):
    if h is None:
        raw_headers[idx] = f"原始空列{idx+1}"
# Rename C if blank
if raw_headers[2].startswith("原始空列"):
    raw_headers[2] = "原始中文翻译"
if raw_headers[3].startswith("原始空列"):
    raw_headers[3] = "原始备注"
raw_rows = rows
raw_sh = add_sheet_with_data(wb_out, "原始数据", raw_headers, raw_rows, "RawData", True)

# Additional formatting for numeric columns in result sheet
# Find column indices
def fmt_col(sh, headers, name, fmt):
    if name in headers:
        ci = headers.index(name) + 1
        letter = col_letter(ci)
        nrows = len(headers) # not used
        try:
            sh.get_range(f"{letter}:{letter}").format.number_format = fmt
        except Exception as e:
            pass
for sh, hdrs, ndata in [(res_sh, result_headers, len(result_rows)), (high_sh, high_headers, len(high_rows))]:
    for name in ["搜索量","需求强度分","相关性分","价值机会分"]:
        fmt_col(sh, hdrs, name, "#,##0.0" if "分" in name else "#,##0")
    for name in ["90天增长","180天增长","点击份额","搜索转化率"]:
        fmt_col(sh, hdrs, name, "0.00%")

# Conditional formats for opportunity levels and scores
try:
    # Score color scale
    if "价值机会分" in result_headers:
        ci = result_headers.index("价值机会分") + 1
        res_sh.get_range(f"{col_letter(ci)}2:{col_letter(ci)}{len(result_rows)+1}").conditional_formats.add_color_scale({
            "minColor": "#FEE2E2",
            "midColor": "#FEF3C7",
            "maxColor": "#DCFCE7"
        })
    if "机会等级" in result_headers:
        ci = result_headers.index("机会等级") + 1
        rng = res_sh.get_range(f"{col_letter(ci)}2:{col_letter(ci)}{len(result_rows)+1}")
        rng.conditional_formats.add_custom(f'=${col_letter(ci)}2="S-核心必打"', {"fill": "#BBF7D0", "font": {"bold": True}})
        rng.conditional_formats.add_custom(f'=${col_letter(ci)}2="A-高机会长尾"', {"fill": "#DCFCE7"})
        rng.conditional_formats.add_custom(f'=${col_letter(ci)}2="低匹配/谨慎词"', {"fill": "#FEE2E2"})
except Exception as e:
    print("conditional formatting failed", e)

# Add simple chart on dashboard
try:
    chart = dash.charts.add("bar", {"title": "机会等级关键词数", "has_legend": False})
    series = chart.series.add("关键词数")
    series.category_formula = "'标签汇总_看板'!$A$11:$A$17"
    series.formula = "'标签汇总_看板'!$B$11:$B$17"
    chart.set_position("A20", "E38")
except Exception as e:
    print("chart failed", e)

# Format raw numeric
try:
    raw_sh.get_range("E:E").format.number_format = "#,##0"
    raw_sh.get_range("F:I").format.number_format = "0.00%"
except Exception as e:
    pass

# Set row heights for text-heavy sheets
for sh in [res_sh, high_sh, tf_sh, matrix_sh, ad_sh, asin_sh, dict_sh, rules_sh, raw_sh]:
    try:
        sh.get_range("1:1").format.row_height = 34
    except Exception:
        pass

# Verify small inspection
print(wb_out.inspect({"kind":"sheet","include":"id,name"}).ndjson[:1000])
print(wb_out.inspect({"kind":"table","range":"标签汇总_看板!A1:J25","include":"values,formulas","table_max_rows":25,"table_max_cols":10}).ndjson[:2000])

---

## 轮次 79 · 助手 · 2026-06-15 15:26 Asia/Shanghai

errors = wb_out.inspect({
  "kind": "match",
  "search_term": "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  "options": {"use_regex": True, "max_results": 100},
  "summary": "final formula error scan"
})
print(errors.ndjson)
# Export workbook
out_path = "/mnt/data/德国布艺清洗机_SIF关键词打标结果.xlsx"
SpreadsheetFile.export_xlsx(wb_out).save(out_path)
print(out_path, os.path.getsize(out_path))

---

## 轮次 80 · 助手 · 2026-06-15 15:28 Asia/Shanghai

bash -lc ls -l /mnt/data/德国布艺清洗机_SIF关键词打标结果.xlsx

---

## 轮次 81 · 助手 · 2026-06-15 15:29 Asia/Shanghai

已完成 **德国布艺清洗机 SIF关键词打标**，文件已生成：

[下载：德国布艺清洗机_SIF关键词打标结果.xlsx](sandbox:/mnt/data/德国布艺清洗机_SIF关键词打标结果.xlsx)

本次处理：

- 原始关键词：**705 条**
- 总搜索量：**4,594,864**
- **S-核心必打：4 个**
- **A-高机会长尾：66 个**
- **B-中机会测试：52 个**
- **品牌/竞品词：189 个**
- **配件/耗材词：14 个**

文件包含 10 个 sheet：

1. **标签汇总_看板**
2. **关键词打标结果**
3. **高机会词清单**
4. **SIF需求词频统计**
5. **需求供给匹配矩阵**
6. **广告结构规划**
7. **竞品ASIN汇总**
8. **标签词典**
9. **打标规则说明**
10. **原始数据**

重点机会方向已拆出：

- **polsterreiniger gerät**
- **nasssauger polsterreiniger**
- **waschsauger polsterreiniger**
- **teppichreiniger waschsauger**
- **sofa reiniger gerät**
- **nass trockensauger polsterreiniger**
- **teppich und polsterreiniger gerät**
- **waschsauger mit dampffunktion**

建议打法：

> 德国站新品前期先围绕 **Polsterreiniger / Sofa / Waschsauger / Nasssauger Polsterreiniger** 做核心需求验证，再用 **Dampf / Flecken / Auto / Matratze / Teppich** 做长尾场景扩展；Kärcher、Bissell、Shark、Vacmaster 等品牌词单独低预算竞品截流，避免和核心需求词混在一起。

---

If you want, I can:

- 继续解释关键词打标的第六步和后续步骤
- 举例说明如何构建具体广告框架
- 演示关键词和需求点匹配评分及排序算法

---
