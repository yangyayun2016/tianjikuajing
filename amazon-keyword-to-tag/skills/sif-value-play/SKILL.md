---
name: amazon-keyword-tagging-sif-value-play
description: Use when building Amazon keyword tagging with SIF value-play six steps — lexicon, TF dual word-frequency demand classes, supply 0/1/3 reverse match, demand-centered ad structure, match types, volume-concentration split, and value validation (upgrade edition ②). Use together with or after ABA general edition ①.
---

# 亚马逊关键词打标 · SIF价值打法升级版本②

## When

用户提到：价值打法、SIF、刘松、COSMO/Rufus、TF/词频、搜索需求分类、供给反向匹配、需求中心广告、SKAG/集中度、价值验证、Value Score，或要求在 ABA 打标之上做「最新路径」。

原子打标 / Excel 底座先读或并联：

→ `../aba-general/SKILL.md`（版本①）

学习库全文：`amazon-keyword-to-tag/docs/06`（六步+算法）、`07`（CPC公式）、`08`–`10`（案例）、`11`（ChatGPT 归档）。

## 核心信条

> **投放核心不是关键词，而是具体的消费者需求。**  
> 关键词是需求的外显表达。始于关键词，但不止于关键词。  
> PMF 是营销基础；一定要做词库——词库就是目标市场。

## 总路径（六步 + 验证）

```text
1 搭建词库（收集消费者需求）
2 TF 双词频整理需求分类（18类）
3 供给卖点 0/1/3 反向匹配 + 评论三类 + Value
4 以需求为中心搭建广告框架
5 整理投放词与匹配模式
6 按搜索量集中度拆分活动
→ 价值验证三阶段（验证 → 拓展 → 泛化）
```

最终：

```text
关键词价值 = 需求强度 × 供给匹配 × 广告验证 × 可规模化
```

## TF

- **TF_count**：包含某标签的关键词条数  
- **TF_weighted**：Σ 搜索量（或 ABA 权重）× 是否包含  
- 无 SV：`w(rank) = 1 / ln(rank + 1)`

输出「消费者需求词频表」：词根、中文、18类、双词频、占比、代表词、卖点承接、是否适合投放。

## 18 类搜索需求分类

品类名称、目标受众、使用场景、功能特征、风格款式、颜色、材质材料、尺寸大小、容量、参数、主题元素、品牌、季节、节日、兼容搭配、配件、其他需求、风险词。

映射到版本①的 12 维本体，不另起平行维度。

## 第三步：供给匹配

```text
Supply Fit = 0 无法满足 | 1 弱满足 | 3 强满足核心卖点
```

```text
Demand ≈ TF_weighted×0.7 + TF_count×0.3   # 或算法版 0.6/0.25/0.15+转化
Value ≈ Demand×0.4 + Fit×0.3 + ReviewGap×0.15 + 转化×0.1 + 利润×0.05
```

评论输出：已验证价值 / 未满足需求 / 情绪需求。

## 第四–六步：广告

结构：`需求点 → Campaign → Ad Group → Keyword → Match`

| 状态 | 匹配 |
|------|------|
| 高需求高匹配 | Exact |
| 中高长尾 | Phrase |
| 不确定 | Broad |
| 竞品强相关 | 商品投放 |
| 未知 | 自动 Close/Substitutes |

集中度：

- 单词占需求点 ≥30% → SKAG/独立 Campaign  
- Top3 ≥60% → 拆组  
- **同价值点最终合并评估**

分层：S/A/B/C/R（与①机会等级对齐）。

## 价值验证三阶段

1. **验证**：Exact+Phrase，小预算，看 CTR/CVR/CPC/ACOS/ST  
2. **拓展**：已验证需求扩搜索词 + 商品投放 ASIN  
3. **泛化**：Broad/自动/类目 + Listing/主图强化  

广告算式（详见 docs/07）：

```text
CPC = ACOS × 售价 × CVR
CPA = CPC / CVR
ACOS = CPA / 售价
```

例：售价49.99、CPC1.2、CVR5% → CPA24、ACOS≈48%；利润$6、CVR8% → 可承受 CPC≈$0.48。

## Excel 在①之上追加

- SIF需求词频统计  
- 需求供给匹配矩阵  
- 广告结构规划  

（完整包可至 10 Sheet，参见空净/英德布艺先例 `docs/08`、`10`。）

## 算法伪代码（摘要）

```text
normalize → extract_elements → match dictionary
TF_count / TF_weighted
Demand Score → Supply Fit → Value Opportunity Score
if high demand & fit=3 → S Exact+Phrase 独立预算
…
if fit=0 → 不主推；IP风险 → 谨慎
concentration split；merge metrics by value point
```

完整伪代码见 `docs/06-sif-value-play-six-steps.md`。

## 实践约束

1. 先读 sheet/列；不编造体积与搜索量  
2. 品牌/IP/低相关单独；Listing 不写竞品商标  
3. 需求 Campaign 骨架交给广告运营；涉及出价/预算变更若已有托管 bot，先确认  
4. 与①共用词典与 0-1-3，禁止平行本体  

## 8 问验收

同版本①；额外确认：需求点是否验证、同价值点是否合并评估、迁移是否落到产品/视觉/广告。
