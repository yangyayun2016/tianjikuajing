# 04 · 打标流水线 + tag_dictionary 字段设计

## 混合打标原则

建议用 **「规则 + 词典 + 语义模型/LLM + 人工校验」** 的混合方式：

| 方法 | 适用标签 |
|------|----------|
| 规则匹配 | 尺寸、颜色、材质、容量、数字参数 |
| 词典匹配 | 人群、场景、节日、功能、属性 |
| 语义模型/LLM | 情绪、价值认同、隐性痛点、心理需求 |

例如 `peace of mind` 不能只靠硬规则，更接近：安心、安全感、父母关照、风险规避。

---

## Step 1：数据采集

采集：

- 关键词词库（ABA / 第三方搜索量）
- 竞品标题
- 五点描述
- A+ 文案
- 图片文案
- 后台属性
- 评论 / Q&A
- 广告 Search Term（点击、转化、ACOS、CPC、曝光）
- 站外趋势词
- 自己产品卖点（供后续供给匹配）

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
- IP / 授权风险标记

| 原始词 | 标准化 |
|--------|--------|
| leak proof | leakproof |
| kids / kid / children | kids |
| 32oz / 32 oz | 32 oz |
| BPA-Free / bpa free | BPA free |

伪代码：

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

对应 12 维与 SIF 18 类元素抽取（见 `02`、`06`）。

```text
extract_elements(keyword):
  提取品类词 / 人群词 / 场景词 / 功能词 / 风格词
  提取颜色词 / 材质词 / 尺寸词 / 主题元素词
  提取品牌词 / 节日季节词 / 配件词 / 风险词
```

---

## Step 4：标签匹配

```text
for each element:
  match tag_dictionary
  assign dimension + demand_category
  attach evidence_source
```

输出示例：

```text
关键词 = claw clips for thick hair
标签：
  品类名称 = claw clips
  目标受众/发质 = thick hair
  功能特征 = strong hold（隐含需求，置信度可能为 1）
  购买意图 = 参数型/问题解决型
```

---

## Step 5：置信度评分

每个标签带 confidence（0/1/3），见 `03`。写入 `keyword_tag_result.confidence` 与 `evidence_source` / `evidence_text`。

---

## tag_dictionary 字段设计（完整版）

第一版建议建 `tag_dictionary` 表：

| 字段 | 说明 |
|------|------|
| tag_id | 标签 ID |
| tag_name_cn | 中文标签 |
| tag_name_en | 英文标签 |
| dimension | 一级维度（12 维之一） |
| parent_tag | 父级标签 |
| tag_level | L1 原子 / L2 组合 / L3 策略 |
| synonyms | 同义词 |
| include_patterns | 命中规则（正则/关键词） |
| exclude_patterns | 排除规则 |
| example_keywords | 示例关键词 |
| source_priority | 来源优先级 |
| confidence_rule | 置信度规则 |
| business_use | SEO / PPC / 视觉 / 选品 / 评论 |
| status | 启用 / 待审核 / 废弃 |

MVP 精简字段（与五表一致）：

```text
tag_id
tag_name
dimension
parent_tag
synonyms
patterns
business_use
```

### 词典行示例

| tag_name_en | dimension | synonyms | business_use |
|-------------|-----------|----------|--------------|
| leakproof | 功能 | leak proof, no leak, spill proof | SEO/PPC/卖点 |
| toddler | 人群 | baby, infant, little kid | 人群定位 |
| gift | 购买意图 | present, giftable, gift for | 节日营销 |
| premium | 价值认同 | luxury, high end, elegant | 视觉/定价 |
| easy clean | 痛点解决 | dishwasher safe, washable | 五点/评论优化 |
| claw | 产品基础 | claw clips, hair claw, jaw clips | 产品结构/广告分组 |
| thick hair | 兼容搭配 | thick, coarse, heavy hair | 发质卖点/主图对比 |

发夹样例词典见 `samples/hair-clips-aba-tagged-sample.xlsx` →「标签词典」Sheet（约 78 条规则）。

---

## 词库基础字段（SIF 第一步）

| 字段 | 说明 |
|------|------|
| raw_keyword | 原始关键词 |
| normalized_keyword | 清洗后关键词 |
| 中文翻译 | 方便人工理解 |
| 数据来源 | ABA / 广告 / 竞品 / 评论 / 站外 |
| ABA 排名 | Search Frequency Rank |
| 搜索量 | 第三方有则填 |
| 搜索量权重 | 无 SV 时用 ABA 排名换算 |
| 点击份额 | ABA Top Clicked |
| 转化份额 | ABA Top Purchased |
| 相关 ASIN | 对应竞品 |
| 类目 | 主类目/细分 |
| 品牌词标记 | 是否品牌词 |
| IP/侵权风险 | 是否涉及授权/IP |
| 是否有效词 | 有效 / 低相关 / 剔除 |
