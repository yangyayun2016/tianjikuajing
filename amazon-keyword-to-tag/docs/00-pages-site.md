---
title: 亚马逊关键词原子级打标系统 · ABA通用 + SIF价值打法最新路径
source: https://aba-sif-xzm2.pages.grok.bot/
note: Full text dump of the pages site. Source URL is https://aba-sif-xzm2.pages.grok.bot/
---

# 亚马逊关键词原子级打标系统 · ABA通用 + SIF价值打法最新路径

Source URL: https://aba-sif-xzm2.pages.grok.bot/
Page title: 亚马逊关键词原子级打标系统 · ABA通用 + SIF价值打法最新路径
English name: Amazon Keyword-to-Tag Intelligence System
Capture note: Full visible text of the signed-in page (iframe document). No Google Translate popup was present. The on-page TOC lists 14 linked sections (not 15). All 14 h2 sections plus the header / 总路径 block are included below. Grid/tables are reconstructed from on-page cell order (the page uses div grids, not HTML tables). Checkboxes on the 8-question list were unchecked.

## Screenshots

- [定位与目录](screens/01-positioning-toc.png)
- [SIF 价值打法六步](screens/02-sif-six-steps.png)
- [机会指数模型](screens/03-opportunity-model.png)
- [样例证据（发夹 ABA）](screens/04-samples-evidence.png)

---

## 页眉

亚马逊关键词原子级打标系统 · ABA通用 + SIF价值打法最新路径

Amazon Keyword-to-Tag Intelligence：原子标签看懂词，组合标签看懂需求，机会指数决定该不该做。由「关键词打标bot（ABA通用版）」与「关键词打标bot（价值打法升级版）」共同维护；Emily 可反复迭代。

### 总路径（callout）

搭词库 → TF 双词频（出现次数 + 搜索量加权）→ 供给 0/1/3 反向匹配 → 需求中心广告框架 → 投放词与匹配模式 → 搜索量集中度拆分 → 价值验证三阶段。投放核心不是关键词，而是消费者需求（COSMO 洞察意图 + Rufus 对话匹配）。

流程条（两行标签，按页面从左到右）：

- 上行：词库 → 需求（TF + 18类分类）→ 供给匹配 → 广告框架（需求→Campaign）→ 验证决策
- 下行对应：收集 → 反向匹配 → 需求中心 → 集中度拆分

---

## 目录（14）

1. 系统定位与一句话 (#positioning)
2. 双 Bot 分工与上下游接口 (#bots)
3. 数据层与权重 (#data-weights)
4. 12 维标签本体 (#ontology)
5. 0-1-3 与标签公式 (#granularity)
6. SIF 价值打法六步（最新路径） (#sif-six)
7. 价值验证与最终价值公式 (#value-verify)
8. 标签迁移重组 (#migration)
9. 机会指数模型 (#opportunity)
10. MVP 五表 (#mvp)
11. Excel 交付规范 (#excel)
12. 样例证据（发夹 ABA + 空净 SIF 先例） (#samples)
13. 最终 8 问决策清单 (#eight-q)
14. 维护约定与来源 (#maintain)

页面内还有这些 h3（不在 TOC 顶层，已并入对应节）：购买意图七层；18 类搜索需求分类；无 SV 时的 ABA 加权；投放词与匹配模式（第五步产出表）；集中度拆分规则（第六步）；ABA 通用机会等级（样例口径）。

---

## 1. 系统定位与一句话

本系统正式名：Amazon Keyword-to-Tag Intelligence System（亚马逊关键词原子级打标系统）。目标不是「关键词分类表」，而是把关键词、竞品前台、后台属性、评论、广告 Search Term、站外趋势拆成原子标签，再组合成「人群–场景–需求–情绪–卖点–广告–视觉–机会」可执行决策，服务 SEO、广告、视觉、评论洞察与选品。

> 原子标签解决「看懂关键词」，组合标签解决「看懂需求」，机会指数解决「该不该做」。
> —— 系统信条

流程示意（页面可视化，节点从左到右，箭头下为动作）：

词库 —收集→ 需求（TF + 18类分类） —反向匹配→ 供给匹配 —需求中心→ 广告框架（需求→Campaign） —集中度拆分→ 验证决策

---

## 2. 双 Bot 分工与上下游接口

| Bot | 职责边界 | 主产出 |
| --- | --- | --- |
| 关键词打标bot（ABA通用版） | 12 维标签本体、0-1-3 颗粒度、ABA 规则打标、机会等级 S/A/B/C/D、Excel 规范 | 打标结果表 + 高机会清单 + 看板 + 词典 + 规则说明 |
| 关键词打标bot（价值打法升级版） | SIF 六步、TF 双词频、供给反向匹配、需求中心广告、集中度拆分、价值验证三阶段 | 需求词频表 + 需求供给匹配矩阵 + 广告结构规划 + Value Score |

上下游接口（各一句）：

- → AI选词bot：输出已打标词库、组合意图、机会等级与推荐投放词，供选词与否定词决策。
- → AI广告托管bot：输出需求→Campaign→AdGroup→词→匹配模式骨架与集中度拆分规则，供托管执行。
- → 广告健康：输出价值验证指标口径（曝光/点击/转化/ACOS）与同价值点合并评估名单。

---

## 3. 数据层与权重

| 数据层 | 来源 | 主要用途 |
| --- | --- | --- |
| 类目层 | 类目树、类目属性、后台属性字段 | 标签边界与合规属性 |
| 竞品前台层 | 标题、五点、A+、图片文案、变体、价格、评分、Review | 卖点/属性/场景/人群抽取 |
| 后台属性层 | 材质、尺寸、容量、颜色、兼容、适用人群 | 标准化产品属性标签 |
| 评论层 | 好评、差评、Q&A、退货理由 | 情绪、痛点、真实需求 |
| 广告层 | Search Term、点击、转化、ACOS、CPC、曝光 | 购买意图与关键词价值 |
| 站外层 | TikTok、Google Trends、Pinterest、Reddit、社媒 | 趋势、创新声音、情绪 |
| 品牌/线下层 | 品牌定位、线下反馈、展会趋势 | 长期价值认同 |

第一版权重：站内 70%（关键词/广告 30% + 竞品页面 20% + 评论 20%）+ 站外 20% + 品牌/线下/趋势 10%。

---

## 4. 12 维标签本体

标签不做平铺清单，做成「标签本体」。马斯洛五层（生理、安全、爱与归属、尊重、自我实现）仅作情绪/价值认同的上层映射，转成消费需求，不机械套理论。

| 维度 | 定义 | 示例 |
| --- | --- | --- |
| 1 产品基础 | 这是什么：类目、部件、配件、套装、包装、礼盒、替换/兼容件 | water bottle；3 pack；gift box |
| 2 物理属性 | 长什么样、什么材料、什么规格 | stainless steel；pink；32 oz |
| 3 功能 | 能解决什么功能问题 | leakproof；portable；easy clean |
| 4 技术 | 靠什么技术实现 | HEPA filter；Bluetooth 5.3；BPA free |
| 5 人群 | 谁买、谁用、谁送 | for kids；for mom；for office workers |
| 6 场景 | 在哪里用、什么时候用 | for school；for travel；Christmas gift |
| 7 需求 | 用户真正想解决什么 | safe for kids；save space；help focus |
| 8 痛点 | 用户为什么不满意（差评/Q&A/退货） | leaks；hard to clean；not durable |
| 9 情绪/情感 | 买它时的心理感受 | peace of mind；thoughtful gift |
| 10 价值认同 | 为什么愿意多付钱 | eco friendly；premium lifestyle |
| 11 购买意图 | 购买路径所处阶段 | 认知/比较/参数/场景/人群/礼品/交易 |
| 12 商业策略 | 最终决策标签 | 流量抓手；机会指数；Listing 优化点 |

### 购买意图七层

| 意图层级 | 用户状态 | 关键词特征 |
| --- | --- | --- |
| 认知型 | 还在了解 | what is, how to, benefits |
| 比较型 | 在比较方案 | best, vs, reviews, top rated |
| 参数型 | 已有明确要求 | 32 oz, stainless steel, large |
| 场景型 | 有使用场景 | for school, for travel |
| 人群型 | 给特定人用 | for kids, for mom |
| 礼品型 | 送礼购买 | gift for dad, Christmas gift |
| 交易型 | 准备购买 | coupon, deal, bulk, pack |

---

## 5. 0-1-3 与标签公式

| 层级 | 含义 | 例子 |
| --- | --- | --- |
| 0 raw | 原始数据层，尚无可执行意义 | leakproof kids water bottle for school |
| 1 原子 | 单个可计算标签 | leakproof→功能；kids→人群；school→场景 |
| 3 组合 | ≥3 原子 → 意图 + 运营动作 | 儿童+学校+防漏 → 开学季标题/主图/长尾 Exact |

标签构成公式：

> 产品对象 + 属性参数 + 功能特征 + 人群 + 场景 + 痛点/需求 + 情绪/价值 + 购买意图

置信度同样用 0/1/3：0 无证据；1 弱命中（单来源）；3 强命中（多来源重复：词库+标题+五点+评论+广告转化）。

---

## 6. SIF 价值打法六步（最新路径）

> 投放核心不是关键词，而是具体的消费者需求。COSMO 洞察并匹配搜索意图；Rufus 通过对话匹配需求。PMF 是一切营销基础——先把产品卖给最需要它的人。
> —— SIF 价值打法信条 · 刘松

1. 第一步：搭建词库（收集消费者需求）
   汇总 ABA、竞品标题/五点/A+、后台属性、评论/Q&A、广告 Search Term、站外趋势；去重、归一、打品牌/产品/有效旗标。词库=目标市场。
2. 第二步：TF 词频统计整理需求分类
   双词频并行：①出现次数词频（Term Frequency，词在语料中出现次数）；②搜索量加权词频。无 SV 时 ABA 权重≈1/ln(rank+1)。输出：词频、中文翻译、搜索需求分类、加权词频、出现次数。按 18 类搜索需求分类。
3. 第三步：供给反向匹配并评估需求大小
   用自己产品卖点（供给）反向匹配市场需求，打 0/1/3；评论分三类（期待/痛点吐槽/满足点）；计算 Value Score，输出需求概览矩阵。
4. 第四步：以消费者需求为中心搭建广告框架
   结构：需求点 → Campaign → Ad Group → 关键词 → 匹配模式。核心指导思想：需求中心，而非词中心。
5. 第五步：整理投放词与匹配模式
   每个需求点对应关键词清单；Broad 探索 / Phrase 场景人群 / Exact 高转化核心；痛点与节日词独立分组。
6. 第六步：按搜索量集中度拆分广告活动
   单词搜索量占比≥30% 考虑 SKAG；Top3 合计≥60% 拆核心大词；同价值点大词拆出后最终评估仍合并看数据。

### 18 类搜索需求分类

| 分类 | 说明 |
| --- | --- |
| 品类名称 | 产品是什么 |
| 目标受众 | 谁用/谁买 |
| 使用场景 | 哪里/何时用 |
| 功能特征 | 能做什么 |
| 风格款式 | 风格外形 |
| 颜色 | 色彩偏好 |
| 材质材料 | 材料构成 |
| 尺寸大小 | 尺寸规格 |
| 容量 | 容积/装载 |
| 参数 | 技术/性能参数 |
| 主题元素 | 主题/IP/图案 |
| 品牌 | 品牌词 |
| 季节 | 季节性需求 |
| 节日 | 节日礼品场景 |
| 兼容搭配 | 兼容/搭配对象 |
| 配件 | 附件/替换件 |
| 其他需求 | 残余未归类 |
| （扩展）痛点/情绪 | 与 12 维对齐时可并入痛点/情绪维 |

### 无 SV 时的 ABA 加权

出现次数词频 = count(token)。搜索量加权词频：有 SV 用 SV 加权；仅有 ABA 排名时：

公式 (1)：

    w(rank) = 1 / ln(rank + 1)

加权词频 = Σ w(rank) × 命中次数。排名越前权重越大，避免被海量长尾稀释。

---

## 7. 价值验证与最终价值公式

价值验证三阶段：

1. 需求验证：词库 + TF 是否覆盖真实消费者需求分类
2. 供给验证：自家卖点 0/1/3 匹配与评论三类是否支撑 Value Score
3. 广告验证：投放后曝光/点击/转化/ACOS 是否支撑可规模化

> 始于关键词，但不止于关键词。也指导商品投放与自动投放；更适非标但「以消费者需求为中心」适用于任何产品；必须做词库。
> —— 刘松 · 价值打法

关键词价值公式 (2)：

    关键词价值 = 需求强度 × 供给匹配 × 广告验证 × 可规模化

可选 CPC 估算 (3)：

    CPC ≈ ACOS × 售价 × CVR

### 投放词与匹配模式（第五步产出表）

| 标签组合 | 匹配建议 | 广告动作 |
| --- | --- | --- |
| 核心产品词 + 高转化 | Exact | Exact Campaign / SKAG |
| 场景词 + 人群词 | Phrase | Phrase Campaign |
| 情绪 / 需求词 | Broad | Broad 探索 |
| 痛点词 | Phrase / Exact | 对比/竞品广告组 |
| 节日礼品词 | Phrase / Exact | 季节广告组 |

### 集中度拆分规则（第六步）

| 条件 | 动作 | 评估注意 |
| --- | --- | --- |
| 单关键词搜索量占比 ≥ 30% | 单独拆出 SKAG | 同价值点最终合并评估 |
| Top3 合计占比 ≥ 60% | 核心大词独立 Campaign | 防流量过度集中 |
| 同价值点多词 | 可拆结构，合并看效果 | 避免只看单词误杀价值点 |

---

## 8. 标签迁移重组

标签不只停在关键词层，必须迁移到运营动作（标签/元素迁移重组）。

| 标签类型 | 可迁移到 |
| --- | --- |
| 材质 | 标题、五点、后台属性、参数图 |
| 外观 | 主图、A+、视频、品牌风格 |
| 功能 | 标题、五点、广告关键词 |
| 痛点 | 五点、FAQ、评论反击、产品改良 |
| 人群 | 广告分组、模特图、A+ 场景 |
| 场景 | 主图场景、节日活动、站外内容 |
| 情感 | A+ 品牌故事、视频脚本、礼品包装 |
| 价值认同 | 品牌定位、溢价、视觉调性 |
| 价格/性价比 | Coupon、Deal、广告转化词 |
| 技术 | 参数图、对比图、专业背书 |

例：评论高频 hard to clean → 产品改良可拆洗 + Listing「easy to clean」+ 图 dishwasher safe 图标 + 广告词 easy clean lunch box。

---

## 9. 机会指数模型

Opportunity Score 第一版加权。

公式 (4)：

    机会指数 = 需求×0.35 + 缺口×0.25 + 匹配×0.20 + 趋势×0.10 + 利润/难度×0.10

或按信号来源比例版：站内信号 ×70% + 站外趋势 ×20% + 品牌/线下/长期趋势 ×10%。

| 分项 | 看什么 |
| --- | --- |
| Demand 需求强度 | 搜索量、广告曝光/CTR/CVR、评论提及、站外热度、季节 |
| Supply 供给强度 | 竞品数、头部 Review、评分壁垒、广告竞争、同质化 |
| Gap 缺口 | 高频痛点低解决率；有搜索少覆盖；站外强站内弱 |
| Fit 自身匹配 | 供应链、成本、差异化、品牌定位、合规 |
| Trend 趋势 | 社媒热词、节日周期、类目上新、宏观消费 |

### ABA 通用机会等级（样例口径）

| 等级 | 含义 | 动作 |
| --- | --- | --- |
| S-核心必打 | 核心流量或强转化承接 | 标题/Exact 优先 |
| A-高机会长尾 | 优先广告/Listing 测试 | Phrase/Exact 测试 |
| B-中机会测试 | 低预算测试或后台覆盖 | Broad/后台 |
| C-低量补充 | 补充覆盖 | 低出价或否定观察 |
| D-观察/不主推 | 暂不主推 | 人工复核 |
| 品牌/IP/低相关 | 独立处理 | 品牌组或否定/授权确认 |

---

## 10. MVP 五表

- keyword_raw：keyword_id, raw_keyword, source, asin, category, marketplace, date, metrics
- keyword_clean：keyword_id, normalized_keyword, language, token_list, brand_flag, product_flag, valid_flag
- tag_dictionary：tag_id, tag_name, dimension, parent_tag, synonyms, patterns, business_use
- keyword_tag_result：keyword_id, tag_id, dimension, confidence, evidence_source, evidence_text, tag_level
- opportunity_score：keyword_id, demand/supply/gap/fit/trend scores, opportunity_score, recommended_action

---

## 11. Excel 交付规范

两版共用扩展；ABA 通用版为底座，价值升级版叠加 SIF 表。

| 版本 | Sheet | 用途 |
| --- | --- | --- |
| ABA通用 | 打标结果 | 每词原子/组合/意图/机会/证据 |
| ABA通用 | 高机会词清单 | 分数阈值后的优先动作表 |
| ABA通用 | 看板 | 总量、等级分布、维度分布 |
| ABA通用 | 词典 | 维度–标签–规则–业务用途 |
| ABA通用 | 规则说明 | 0-1-3、机会等级、打标规则 |
| ABA通用 | 原始ABA | 原始排名与点击份额 |
| 价值升级 | SIF需求词频 | 出现次数 + 加权词频 + 18类 |
| 价值升级 | 需求供给匹配矩阵 | 需求×卖点 0/1/3 + Value |
| 价值升级 | 广告结构规划 | 需求→Campaign→词→匹配 |

打标结果建议字段（可精简）：

| 字段组 | 字段 |
| --- | --- |
| 识别 | 搜索频率排名 / 搜索词 / 中文归类 / 相关性 |
| 原子维 | 产品形态·物理属性·功能·技术·人群·场景·需求·痛点·情绪·价值·意图 |
| 组合 | 组合标签 / 流量分层 / 购买意图 |
| 证据 | Top3 点击/转化份额 / 打标证据 / 来源 |
| 策略 | 广告打法 / Listing用途 / 视觉建议 / 选品建议 |
| 决策 | 机会等级 / 优先级分 / Value Score（升级版） |

---

## 12. 样例证据（发夹 ABA + 空净 SIF 先例）

> 附件澄清
> 用户本轮附件 Excel 实际是美国站 hair clips（发夹）ABA 已打标样例，不是空净原始词库。空净 ABA 的 SIF 打标出现在 ChatGPT 分享中作为路径先例。

发夹 ABA 样例关键指标（来自附件看板，非空净库）：

| 数字 | 标签 | 说明 |
| --- | --- | --- |
| 561 | 发夹 ABA 词数 | 主表搜索词 |
| S14 | 核心必打 | 机会等级 S |
| A13 | 高机会长尾 | 机会等级 A |
| B81 | 中机会测试 | 机会等级 B |

| 指标 | 数量 | 说明 |
| --- | --- | --- |
| 总关键词 | 561 | 主 ABA 表 |
| 相关关键词 | 519 | 非低相关/非品牌谨慎 |
| S / A / B | 14 / 13 / 81 | 核心 / 高机会长尾 / 中机会 |
| C / D | 232 / 197 | 低量补充 / 观察不主推 |
| 品牌/竞品词 | 10 | 独立广告组；Listing 不写竞品商标 |
| IP/授权谨慎 | 7 | 确认授权后再用 |
| 高机会清单 | 27 | 分数≥72 且非品牌/IP/低相关 |

发夹样例已覆盖维度：产品形态、发质/头发需求、人群、场景、功能/卖点、材质外观风格、情绪/心理需求、购买意图、组合标签，以及广告/Listing/视觉/选品动作与机会等级——即 ABA 通用版交付形态的真实验证。

SIF 路径先例（ChatGPT 分享）：美国站空气净化器 ABA 约 622 词完成 SIF 向打标（含 S44/A82 等分布）；另有英国/德国布艺清洗机打标先例。空净类目后续由「价值打法升级版」bot 按六步跑通需求词频与供给匹配矩阵。

---

## 13. 最终 8 问决策清单

成熟打标系统最终要回答的不是「有哪些标签」，而是决策。状态截至本 Page 写入时：清单为验收标准，逐项在项目落地时勾选更新。

页面上 8 项复选框均为未勾选：

- [ ] 这个关键词属于什么产品、属性、功能、人群、场景？
- [ ] 它是流量词、转化词、痛点词、礼品词，还是品牌价值词？
- [ ] 它对应用户的哪种心理需求？
- [ ] 它在购买路径的哪个阶段？
- [ ] 它适合放标题、五点、A+、图片，还是广告？
- [ ] 它是红海词，还是有缺口的机会词？
- [ ] 它能不能迁移成产品创新、视觉卖点或广告抓手？
- [ ] 它和供应链、品牌定位、价格带是否匹配？

---

## 14. 维护约定与来源

本 Page 为 canonical 路径文档，由「关键词打标bot（ABA通用版）」与「关键词打标bot（价值打法升级版）」共同维护；主 bot 协调迭代。不另开平行页；变更直接改本页。

来源链接：

- ChatGPT 分享：原子级打标体系 V2 — https://chatgpt.com/share/6ae0608d-97f0-83ea-99c6-b2f8bef41897 （chatgpt.com）
- Maslow 需求层次（情绪/价值上层映射参考） — https://www.simplypsychology.org/maslow.html （simplypsychology.org）
- Amazon Ads：Sponsored Products 匹配类型 — https://advertising.amazon.com/library/guides/targeting-with-sponsored-products （advertising.amazon.com）

来源摘要：ChatGPT share（体系 V2 + 空净/布艺先例）· SIF 价值打法 PDF（刘松，COSMO+Rufus + 六步）· 发夹 ABA 已打标样例 Excel（561 词，S14/A13/B81，高机会 27）· Amazon Seller Central / Ads 匹配类型作背景。

---

## 覆盖核对

TOC anchors present in this dump: positioning, bots, data-weights, ontology, granularity, sif-six, value-verify, migration, opportunity, mvp, excel, samples, eight-q, maintain.
Formulas captured: (1) w(rank)=1/ln(rank+1); (2) 关键词价值; (3) CPC; (4) 机会指数.
Callouts/quotes captured: 系统信条; SIF 价值打法信条 · 刘松; 刘松 · 价值打法; 附件澄清.
