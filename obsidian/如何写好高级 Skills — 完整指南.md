D:\Backup\Pictures\广告分析0316\如何写好高级 Skills — 完整指南\如何写好高级 Skills — 完整指南

下面是整理后的 **《如何写好高级 Skills — 完整指南》**，可直接作为团队内部方法论、知识库文档、AI Agent 设计规范或高级 Skills 编写手册使用。内容基于你上传的文档重构整理。

---

# 🧠 如何写好高级 Skills — 完整指南

## 一、核心认知：什么是高级 Skill？

高级 Skill 不是简单的提示词，也不是单个函数。

它应该是一个具备以下能力的 **智能协作单元**：

```text
输入理解
  ↓
上下文感知
  ↓
知识检索
  ↓
推理判断
  ↓
结构化输出
  ↓
证据链追溯
  ↓
质量验证
```

一句话定义：

> **高级 Skill = 单一任务能力 + 上下文注入 + 知识库/RAG + 结构化输出 + 证据链 + 闭环验证。**

---

# 二、高级 Skill 的整体架构

一个成熟的高级 Skill，建议由五层组成：

```text
用户任务 / 触发条件
        ↓
Skill 任务识别层
        ↓
知识库 + 向量库 + 知识图谱检索
        ↓
LLM 推理生成
        ↓
结构化输出 + 置信度 + 证据链
```

可以理解为：

```text
提示词模板
+ 知识库
+ 向量库
+ RAG 检索
+ MiniLM 语义编码
+ 知识图谱
+ JSON 输出合同
+ Critic 验证机制
= 高级 Skill
```

---

# 三、高级 Skill 与普通 Skill 的区别

|维度|普通 Skill|高级 Skill|
|---|---|---|
|任务处理|单次问答|多步骤任务执行|
|上下文|依赖当前输入|注入历史、知识库、前序结果|
|知识来源|主要依赖模型记忆|知识库 + 向量库 + RAG|
|输出形式|自然语言为主|JSON / 表格 / 报告 / 结构化数据|
|可靠性|容易泛化或幻觉|有证据链、置信度、限制说明|
|可复用性|低|高，可作为模块拼装|
|工作流|单点执行|可被 Planner / Router / Critic 调度|
|错误处理|模糊|显式返回 status、reason、suggestion|

---

# 四、高级 Skill 的标准结构

## 1. Skill 基础信息

每个 Skill 应该先定义清楚：

```json
{
  "skill_name": "CompetitorPriceAnalyzer",
  "version": "1.0.0",
  "description": "分析亚马逊竞品价格变化，并判断可能原因",
  "domain": "Amazon Competitive Intelligence",
  "task_type": "price_analysis"
}
```

---

## 2. 输入合同 Input Schema

输入必须明确，不要让模型猜。

```json
{
  "input_schema": {
    "type": "object",
    "required": ["target_asin", "marketplace", "price_history"],
    "properties": {
      "target_asin": {
        "type": "string",
        "description": "需要分析的竞品ASIN"
      },
      "marketplace": {
        "type": "string",
        "description": "目标站点，如 US / UK / DE / JP"
      },
      "price_history": {
        "type": "array",
        "description": "过去一段时间的价格数据"
      },
      "bsr_history": {
        "type": "array",
        "description": "BSR历史排名数据，可选"
      },
      "context": {
        "type": "object",
        "description": "外部上下文，如类目、促销、库存、广告信息"
      }
    }
  }
}
```

---

## 3. 输出合同 Output Schema

输出也必须标准化，方便后续 Skill 继续调用。

```json
{
  "output_schema": {
    "type": "object",
    "properties": {
      "status": {
        "enum": ["success", "need_more_data", "error"]
      },
      "analysis": {
        "type": "string"
      },
      "root_cause": {
        "type": "string"
      },
      "confidence_score": {
        "type": "number",
        "minimum": 0,
        "maximum": 1
      },
      "evidence_chain": {
        "type": "array"
      },
      "limitations": {
        "type": "string"
      },
      "recommended_action": {
        "type": "string"
      },
      "next_skill": {
        "type": "string"
      }
    }
  }
}
```

---

# 五、高级 Skill 的 7 条黄金法则

## 1. 单一职责

一个 Skill 只做一件事。

错误写法：

```text
分析竞品价格、评论、广告、关键词，并输出Listing优化方案。
```

正确拆分：

```text
Skill 1：竞品价格分析
Skill 2：竞品评论分析
Skill 3：关键词流量分析
Skill 4：Listing优化生成
```

原则：

> **Skill 越单一，越稳定；Skill 越复杂，越容易失控。**

---

## 2. 明确背景

高级 Skill 必须交代背景，让模型知道任务处于什么业务场景中。

推荐三层背景：

```text
业务背景：这是一个亚马逊竞品监控任务
当前状态：已经完成数据采集，现在进入价格异动分析
期望结果：输出可供运营团队执行的应对策略
```

模板：

```text
# 背景
我们是一家亚马逊跨境电商公司，正在监控目标类目的核心竞品。

# 当前阶段
这是竞品分析工作流的第 2 步，前一步已经完成数据采集。

# 本 Skill 任务
只分析竞品价格变化，不分析广告、不分析评论、不写Listing。

# 期望输出
判断价格变化原因、置信度、证据链和运营建议。
```

---

## 3. 注入上下文

高级 Skill 不能只看当前输入，还要能接收上下文。

上下文包括：

|上下文类型|示例|
|---|---|
|前序 Skill 输出|市场分析结果、竞品池、关键词列表|
|知识库内容|历史报告、SOP、规则、案例|
|向量检索结果|与当前问题相关的语义片段|
|知识图谱关系|ASIN、品牌、供应商、关键词、痛点关系|
|当前流程状态|Step 2/5、retry_count、失败原因|
|业务约束|预算、时间、类目、站点、目标|

上下文注入模板：

```text
# 前序结果
{previous_skill_output}

# 检索到的知识库证据
{retrieved_chunks}

# 知识图谱关系
{kg_context}

# 当前流程状态
当前步骤：{current_step}/{total_steps}
重试次数：{retry_count}
```

---

## 4. 严格输出格式

高级 Skill 不建议只输出散文式回答。

推荐输出：

```json
{
  "status": "success",
  "conclusion": "竞品本次降价更可能是清库存行为",
  "confidence_score": 0.82,
  "evidence_chain": [
    "过去14天售价下降30%",
    "BSR短期上升但评论增速未同步增加",
    "同品牌近期上架新变体"
  ],
  "recommended_action": "短期不建议跟随降价，应监控其库存与新款动向",
  "limitations": "缺少竞品真实库存数据，结论为推断"
}
```

---

## 5. 证据链输出

高级 Skill 的结论必须能追溯。

错误：

```text
竞品可能在清库存。
```

正确：

```text
竞品可能在清库存。依据包括：
1. 过去14天价格下降30%
2. BSR改善但评论增速没有明显提升
3. 同品牌出现新款Listing
4. 降价发生在旺季结束后
```

要求：

```text
没有证据 → 标注为推测
证据不足 → 降低置信度
数据缺失 → 返回 need_more_data
```

---

## 6. 显式错误处理

不要让 Skill 失败时只返回空值。

标准错误输出：

```json
{
  "status": "need_more_data",
  "reason": "缺少过去30天价格历史数据，无法判断价格变化趋势",
  "missing_fields": ["price_history", "bsr_history"],
  "suggestion": "请补充竞品近30天价格、BSR和销量估算数据"
}
```

---

## 7. Critic 闭环验证

高级 Skills 最好加入 Critic Skill 做质量检查。

Critic 检查什么？

|检查项|说明|
|---|---|
|字段完整性|是否缺少必要输出|
|证据充分性|结论是否有证据支撑|
|置信度合理性|置信度是否过高或过低|
|事实一致性|是否与知识库/图谱冲突|
|格式合规|JSON是否可解析|
|任务边界|是否做了不该做的事情|

Critic 输出：

```json
{
  "status": "rejected",
  "issues": [
    "结论缺少证据链",
    "confidence_score 为 0.95，但数据不足，置信度过高"
  ],
  "action": "retry",
  "suggestion": "降低置信度，并补充限制说明"
}
```

---

# 六、知识库 + 向量库 + RAG 的用法

## 1. 为什么高级 Skill 需要知识库？

因为模型自身记忆不可靠，而且无法长期维护企业私有知识。

知识库适合存：

```text
公司SOP
选品标准
历史竞品分析报告
评论分析模板
亚马逊运营规则
类目经验
广告案例
专利风险案例
合规清单
供应链资料
```

---

## 2. 为什么需要向量库？

向量库用于语义检索。

例如用户问：

```text
竞品为什么突然降价？
```

向量库可以找到类似内容：

```text
竞品清库存案例
价格战案例
旺季结束降价规律
供应商上新导致旧款降价
```

这比关键词搜索更智能。

---

## 3. 推荐技术栈

|模块|推荐工具|
|---|---|
|文档切分|自定义 SmartChunker|
|向量模型|Microsoft all-MiniLM-L6-v2|
|向量数据库|ChromaDB、FAISS、Pinecone|
|知识图谱|Neo4j、Amazon Neptune|
|工作流编排|LangGraph、AWS Step Functions|
|LLM推理|GPT-4 / Claude / 其他大模型|

---

## 4. 为什么使用 Microsoft MiniLM？

MiniLM 适合做轻量级本地语义检索。

|模型|维度|特点|适用场景|
|---|--:|---|---|
|all-MiniLM-L6-v2|384维|快、轻、本地运行|实时检索、低成本RAG|
|all-MiniLM-L12-v2|384维|精度略高|精度优先场景|
|OpenAI Embedding|1536维|通用高精度|API型生产系统|
|BGE-large-zh|1024维|中文效果好|中文知识库|

MiniLM 的优势：

```text
本地运行
低延迟
零调用成本
部署简单
适合中小型知识库
```

---

# 七、RAG Skill 标准流程

一个高级 RAG Skill 建议包含 5 步：

```text
Step 1：查询改写
Step 2：向量检索
Step 3：知识图谱检索
Step 4：结果重排序
Step 5：基于证据生成答案
```

## Step 1：查询改写

用户问题往往很模糊，需要改写成适合检索的问题。

示例：

```text
用户问题：价格怎么了？
改写后：竞品ASIN在过去30天价格是否发生异常变化，可能原因是什么？
```

---

## Step 2：向量检索

用 MiniLM 把问题转成向量，再从向量库中找相关知识片段。

检索结果应包含：

```json
{
  "chunk_id": "competitor_report_2024_chunk_3",
  "text": "竞品A在旺季结束后进行降价清库存...",
  "source_title": "2024年Q3竞品分析报告",
  "relevance_score": 0.86
}
```

---

## Step 3：知识图谱检索

知识图谱用于处理实体和关系。

适合存储：

```text
ASIN ↔ 竞品ASIN
ASIN ↔ 品牌
ASIN ↔ 供应商
ASIN ↔ 关键词
ASIN ↔ 用户痛点
ASIN ↔ 专利
品牌 ↔ 类目
关键词 ↔ 搜索意图
```

示例关系：

```text
ASIN A -[CompetesWith]-> ASIN B
ASIN B -[HasIssue]-> 发热严重
ASIN B -[Dominates]-> wireless charger
ASIN B -[DerivedFrom]-> 工厂X
```

---

## Step 4：重排序

向量检索出来的内容不一定都是最有用的，需要重排序。

重排序依据：

```text
语义相关度
来源可信度
时间新鲜度
类目匹配度
是否包含结构化数据
是否被多个来源交叉验证
```

---

## Step 5：生成结构化答案

生成时必须约束：

```text
只基于证据回答
没有证据不要编造
不确定的地方要说明
输出置信度
输出证据编号
建议下一步 Skill
```

输出示例：

```json
{
  "answer": "竞品本次降价更可能是清库存，而不是长期价格战。",
  "key_findings": [
    "价格在14天内下降30%",
    "BSR改善但评论增长不同步",
    "知识库中存在旺季后清库存相似案例"
  ],
  "evidence_used": ["chunk_03", "kg_path_02"],
  "confidence_score": 0.78,
  "limitations": "缺少真实库存和广告预算数据",
  "suggested_next_skill": "CompetitorInventoryMonitorSkill"
}
```

---

# 八、提示词工程四大法则

## 法则 1：批注

批注就是告诉模型“为什么要这么做”。

低质量提示词：

```text
分析竞品，输出JSON。
```

高级提示词：

```text
# 角色定义
你是亚马逊竞品分析专家。

# 批注
输出JSON是因为下游系统需要自动解析你的结果。

# 任务
请只分析竞品价格变化原因，不分析评论、不分析广告。

# 约束
没有数据支撑的结论必须标注为“推测”。
```

---

## 法则 2：交代背景

提示词要回答三个问题：

```text
这是什么业务？
现在做到哪一步？
产出给谁用？
```

示例：

```text
这是亚马逊新品上市前的竞品分析任务。
当前已完成市场规模和竞品池分析。
本次输出将给产品经理用于判断是否进入该类目。
```

---

## 法则 3：上下文注入

要把相关上下文喂给模型，而不是让模型凭空判断。

上下文包括：

```text
前序分析结果
用户输入条件
检索到的知识片段
图谱关系
业务限制
历史案例
```

---

## 法则 4：单一任务

一个提示词只完成一个目标。

错误：

```text
请分析市场、竞品、评论、关键词、广告、利润，并输出完整方案。
```

正确：

```text
本 Skill 只完成“评论痛点聚类”。
不要分析市场规模。
不要给广告建议。
不要写Listing。
```

---

# 九、5 种高级 Skill 模式

## 模式 1：实体提取 Skill

作用：

```text
从非结构化文本中提取结构化实体。
```

适用场景：

```text
从评论中提取痛点
从Listing中提取卖点
从报告中提取品牌、ASIN、价格、时间
从专利文档中提取专利号、权利人、结构特征
```

输出示例：

```json
{
  "status": "success",
  "entities": [
    {
      "type": "ASIN",
      "value": "B0XXXXXXX",
      "confidence": 0.98
    },
    {
      "type": "PAIN_POINT",
      "value": "battery drains fast",
      "confidence": 0.91
    }
  ]
}
```

---

## 模式 2：知识图谱探索 Skill

作用：

```text
基于实体关系做多跳推理。
```

适用场景：

```text
判断竞品是否共享供应商
判断某品牌是否控制多个ASIN
判断某痛点是否集中出现在某类产品
判断某关键词是否被某品牌垄断
```

输出示例：

```json
{
  "status": "success",
  "graph_paths": [
    "ASIN_A -> CompetesWith -> ASIN_B",
    "ASIN_B -> HasIssue -> overheating",
    "ASIN_B -> Dominates -> wireless charger"
  ],
  "reasoning": "竞品B在核心关键词上占优，但存在发热痛点，可作为我方差异化攻击点。",
  "confidence_score": 0.84
}
```

---

## 模式 3：RAG 检索增强 Skill

作用：

```text
从知识库中检索相关证据，再让模型基于证据回答。
```

适用场景：

```text
历史案例分析
竞品策略解释
合规规则查询
公司SOP问答
专利风险判断
选品标准匹配
```

---

## 模式 4：Critic 验证 Skill

作用：

```text
检查其他 Skill 的输出质量。
```

适用场景：

```text
报告生成后检查
数据结论检查
JSON格式检查
证据链检查
置信度检查
```

---

## 模式 5：Planner 规划 Skill

作用：

```text
把复杂任务拆解为多个子 Skill。
```

示例：

用户任务：

```text
帮我判断这个产品值不值得做。
```

Planner 拆解：

```text
Step 1：市场容量分析
Step 2：竞品分析
Step 3：VOC痛点分析
Step 4：关键词调研
Step 5：利润测算
Step 6：侵权合规检查
Step 7：综合决策
```

---

# 十、多 Skill 工作流设计

高级 Skills 最适合组合成工作流。

## 示例：亚马逊选品分析工作流

```text
PlannerSkill
  ↓
MarketOpportunitySkill
  ↓
CompetitorAnalysisSkill
  ↓
VOCInsightSkill
  ↓
KeywordResearchSkill
  ↓
ProfitSimulationSkill
  ↓
RiskComplianceSkill
  ↓
DecisionMakerSkill
  ↓
CriticSkill
  ↓
FinalReportSkill
```

---

## 示例：竞品防守分析工作流

```text
MarketMapperSkill
  ↓
CompetitorProfileSkill
  ↓
KeywordDefenseSkill
  ↓
ReviewGapAnalyzerSkill
  ↓
ListingDefenseSkill
  ↓
AdDefensePlannerSkill
  ↓
CriticSkill
  ↓
90DayActionPlanSkill
```

---

# 十一、高级 Skill Prompt 标准模板

下面是一套通用模板，可以直接复用。

```text
# Skill 名称
{skill_name}

# 角色
你是{role}，擅长{domain}。

# 背景
{business_background}

# 当前流程状态
当前任务处于第 {current_step}/{total_steps} 步。
前序结果如下：
{previous_output}

# 输入数据
{input_data}

# 检索上下文
以下是知识库/RAG检索到的相关证据：
{retrieved_context}

# 知识图谱上下文
以下是相关实体与关系：
{kg_context}

# 单一任务
你本次只需要完成：
{single_task}

不要执行以下任务：
{excluded_tasks}

# 分析要求
1. 基于输入数据和证据进行分析
2. 没有证据的地方标注为“推测”
3. 数据不足时返回 need_more_data
4. 输出置信度
5. 输出证据链
6. 给出下一步建议

# 输出格式
请严格按照以下 JSON 输出：

{
  "status": "success | need_more_data | error",
  "conclusion": "",
  "analysis": "",
  "key_findings": [],
  "evidence_chain": [],
  "confidence_score": 0.0,
  "limitations": "",
  "recommended_action": "",
  "next_skill": ""
}

# 约束
- 不要编造数据
- 不要超出本 Skill 任务边界
- 不要输出非 JSON 内容
- 置信度低于 0.6 时必须说明原因
```

---

# 十二、一个高级 Skill 示例：竞品价格异动分析

## Skill 定义

```json
{
  "skill_name": "CompetitorPriceChangeAnalyzer",
  "version": "1.0.0",
  "description": "分析亚马逊竞品价格变化，并判断其背后的商业原因"
}
```

## 单一任务

```text
只分析竞品价格变化原因，不分析评论、不分析广告、不写Listing。
```

## 输入

```json
{
  "target_asin": "B0XXXXXXX",
  "marketplace": "US",
  "price_history": [
    {"date": "2025-01-01", "price": 49.99, "bsr": 12000},
    {"date": "2025-01-15", "price": 39.99, "bsr": 8500},
    {"date": "2025-01-30", "price": 34.99, "bsr": 6100}
  ],
  "context": {
    "category": "wireless charger",
    "season": "post-holiday",
    "new_variant_detected": true
  }
}
```

## 输出

```json
{
  "status": "success",
  "conclusion": "竞品本轮降价更可能是清库存，而不是长期价格战。",
  "root_cause": "clearance",
  "analysis": "该竞品在30天内价格从49.99美元降至34.99美元，降幅约30%。同期BSR改善，但该品牌出现新变体，结合节后时间点，更符合旧款清库存特征。",
  "confidence_score": 0.81,
  "evidence_chain": [
    "30天内价格下降约30%",
    "BSR改善说明降价带来销量刺激",
    "检测到同品牌新变体",
    "时间点处于节后库存处理期"
  ],
  "limitations": "缺少真实库存和广告预算数据，无法完全排除价格战可能。",
  "recommended_action": "不建议立即跟随降价。建议观察7-14天库存、Buy Box和新变体表现，再决定是否调整价格。",
  "next_skill": "CompetitorInventoryMonitorSkill"
}
```

---

# 十三、高级 Skill 检查清单

写完一个 Skill 后，用这张表检查。

## 1. 任务设计

|检查项|是否完成|
|---|---|
|是否只有一个明确任务|□|
|是否说明不做哪些任务|□|
|是否有清晰角色定位|□|
|是否有业务背景|□|
|是否有当前流程状态|□|

---

## 2. 输入输出

|检查项|是否完成|
|---|---|
|是否定义 input_schema|□|
|是否定义 output_schema|□|
|是否有 required 字段|□|
|是否有 status 字段|□|
|是否有 error / need_more_data 机制|□|

---

## 3. 知识与上下文

|检查项|是否完成|
|---|---|
|是否能接收前序 Skill 输出|□|
|是否能接收 RAG 检索内容|□|
|是否能接收知识图谱关系|□|
|是否保留 metadata|□|
|是否输出 evidence_chain|□|

---

## 4. 推理与可靠性

|检查项|是否完成|
|---|---|
|是否输出 confidence_score|□|
|是否说明 limitations|□|
|是否区分事实与推测|□|
|是否避免编造数据|□|
|是否支持 Critic 验证|□|

---

## 5. 工程化能力

|检查项|是否完成|
|---|---|
|是否可被工作流调用|□|
|是否可与其他 Skill 拼装|□|
|是否有 next_skill 建议|□|
|是否支持 retry_count|□|
|是否有版本号|□|

---

# 十四、高级 Skill 最终写法公式

可以用这个公式写任何高级 Skill：

```text
高级 Skill =
角色定位
+ 明确背景
+ 单一任务
+ 输入合同
+ 上下文注入
+ RAG证据
+ 知识图谱关系
+ 分析步骤
+ 输出合同
+ 置信度
+ 证据链
+ 限制说明
+ 下一步建议
+ Critic验证
```

更短的版本：

```text
高级 Skill =
知道自己是谁
+ 知道当前任务是什么
+ 知道上下文是什么
+ 只做一件事
+ 基于证据回答
+ 输出结构化结果
+ 能被验证和复用
```

---

# 十五、一句话总结

**高级 Skills 的核心不是“写更长的提示词”，而是把 Skill 设计成一个可检索、可推理、可验证、可复用、可组合的智能模块。**

最终标准是：

```text
MiniLM 做语义感知
向量库做知识召回
RAG 做证据增强
知识图谱做关系推理
提示词做任务约束
JSON Schema 做输入输出合同
Critic Skill 做质量闭环
工作流做多 Skill 编排
```



如何写好高级 Skills — 完整指南

# 🧠 高级 Skills 深度研究：知识库 + 向量库 + RAG + MiniLM + 提示词工程

  

--- 怎么写skills，写出高级Skills---

  

## 一、整体架构全景图

  

先看清楚这几个组件之间的关系：

  

```

用户提问 / 任务触发

        │

        ▼

┌───────────────────────────────────────────────────────────────────┐

│                        Skill 执行引擎                              │

│                                                                   │

│  ┌─────────────┐     ┌──────────────────────────────────────┐    │

│  │  提示词模板   │     │         RAG 检索增强管线              │    │

│  │             │     │                                      │    │

│  │ • 批注       │     │  用户Query ──▶ MiniLM 编码 ──▶ 向量  │    │

│  │ • 背景交代   │     │                                │     │    │

│  │ • 上下文注入 │     │              ┌─────────────────┘     │    │

│  │ • 单一任务   │     │              ▼                       │    │

│  │ • 输出合同   │     │  ┌────────────────┐  ┌──────────┐   │    │

│  └──────┬──────┘     │  │   向量数据库     │  │ 知识图谱  │   │    │

│         │            │  │ (ChromaDB/FAISS)│  │ (Neo4j)  │   │    │

│         │            │  │   语义相似检索   │  │  精确关系  │   │    │

│         │            │  └───────┬────────┘  └────┬─────┘   │    │

│         │            │          │                 │         │    │

│         │            │          └────────┬────────┘         │    │

│         │            │                   ▼                  │    │

│         │            │           检索到的上下文 Chunks        │    │

│         │            └───────────────────┬──────────────────┘    │

│         │                                │                       │

│         └───────────────┬────────────────┘                       │

│                         ▼                                        │

│              ┌─────────────────────┐                             │

│              │    LLM 推理生成      │                             │

│              │ (GPT-4 / Claude)    │                             │

│              └──────────┬──────────┘                             │

│                         ▼                                        │

│              结构化输出 (JSON + 元数据 + 置信度)                    │

└───────────────────────────────────────────────────────────────────┘

```

  

---

  

## 二、Microsoft MiniLM 深度使用

  

### 2.1 为什么选 MiniLM？

  

```

┌──────────────────┬──────────────┬───────────────┬───────────────┐

│      模型         │   维度       │   速度        │   适用场景     │

├──────────────────┼──────────────┼───────────────┼───────────────┤

│ all-MiniLM-L6-v2 │   384维      │  ⚡ 极快      │ 实时检索/边缘  │

│ all-MiniLM-L12-v2│   384维      │  🔵 快        │ 精度优先      │

│ OpenAI ada-002   │   1536维     │  🔴 慢(API)   │ 通用高精度    │

│ BGE-large-zh     │   1024维     │  🟡 中等      │ 中文专用      │

└──────────────────┴──────────────┴───────────────┴───────────────┘

  

✅ MiniLM 优势：本地运行、零成本、低延迟、384维够用

```

  

### 2.2 MiniLM 完整集成代码

  

```python

# ============================================================

# 第一步：安装依赖

# pip install sentence-transformers chromadb langchain tiktoken

# ============================================================

  

from sentence_transformers import SentenceTransformer

import numpy as np

  

class MiniLMEmbedder:

    """基于微软 MiniLM 的嵌入引擎 —— Skills 的"感知层" """

    def __init__(self, model_name="all-MiniLM-L6-v2"):

        # ✅ 首次运行自动从 HuggingFace 下载（约 80MB）

        # ✅ 之后完全本地离线运行

        self.model = SentenceTransformer(model_name)

        self.dimension = 384  # MiniLM-L6 输出维度

    def encode(self, texts: list[str], batch_size=64) -> np.ndarray:

        """

        批量编码文本为向量

        参数:

            texts: 文本列表（可以是句子、段落、整篇文档）

            batch_size: 批处理大小（GPU显存不够时调小）

        返回:

            numpy数组, shape = (len(texts), 384)

        """

        embeddings = self.model.encode(

            texts,

            batch_size=batch_size,

            show_progress_bar=True,

            normalize_embeddings=True  # ✅ L2归一化，余弦相似度 = 点积

        )

        return embeddings

    def similarity(self, query: str, candidates: list[str]) -> list[dict]:

        """计算 query 与候选文本的语义相似度"""

        query_vec = self.model.encode([query], normalize_embeddings=True)

        cand_vecs = self.model.encode(candidates, normalize_embeddings=True)

        # 归一化后点积 = 余弦相似度

        scores = np.dot(cand_vecs, query_vec.T).flatten()

        results = [

            {"text": t, "score": float(s)}

            for t, s in zip(candidates, scores)

        ]

        return sorted(results, key=lambda x: x["score"], reverse=True)

  
  

# ============================================================

# 使用示例

# ============================================================

embedder = MiniLMEmbedder()

  

# 测试语义理解能力

query = "电池续航太短了"

candidates = [

    "这个充电宝容量不够，用半天就没电了",      # ✅ 语义相关

    "产品外观非常漂亮，颜色很好看",             # ❌ 不相关

    "电量消耗太快，出门必须带充电器",            # ✅ 语义相关

    "包装盒有破损，但产品本身没问题",            # ❌ 不相关

]

  

results = embedder.similarity(query, candidates)

for r in results:

    print(f"  [{r['score']:.4f}] {r['text']}")

  

# 输出：

#   [0.8234] 电量消耗太快，出门必须带充电器

#   [0.7891] 这个充电宝容量不够，用半天就没电了

#   [0.1245] 包装盒有破损，但产品本身没问题

#   [0.0987] 产品外观非常漂亮，颜色很好看

```

  

---

  

## 三、知识库 + 向量库 构建

  

### 3.1 文档切分策略（关键中的关键）

  

```python

class SmartChunker:

    """

    智能文档切分器

    ❌ 错误做法：按固定字数硬切（会切断语义）

    ✅ 正确做法：按语义边界切分 + 重叠窗口

    """

    def __init__(self, chunk_size=512, overlap=64):

        self.chunk_size = chunk_size   # 每个chunk的token数

        self.overlap = overlap          # 重叠token数（防止边界丢失信息）

    def chunk_document(self, document: dict) -> list[dict]:

        """

        参数:

            document: {"title": "...", "content": "...", "metadata": {...}}

        返回:

            [{"chunk_id": "doc1_chunk_0", "text": "...", "metadata": {...}}, ...]

        """

        text = document["content"]

        # ✅ 策略1：优先按自然段落切分

        paragraphs = text.split("\n\n")

        chunks = []

        current_chunk = ""

        chunk_idx = 0

        for para in paragraphs:

            # 如果加上这一段不超限，就合并

            if len(current_chunk) + len(para) < self.chunk_size:

                current_chunk += para + "\n\n"

            else:

                # 保存当前chunk

                if current_chunk.strip():

                    chunks.append(self._make_chunk(

                        document, current_chunk.strip(), chunk_idx

                    ))

                    chunk_idx += 1

                # ✅ 策略2：重叠窗口 —— 保留上一段最后N个字符

                overlap_text = current_chunk[-self.overlap:] if len(current_chunk) > self.overlap else ""

                current_chunk = overlap_text + para + "\n\n"

        # 最后一个chunk

        if current_chunk.strip():

            chunks.append(self._make_chunk(document, current_chunk.strip(), chunk_idx))

        return chunks

    def _make_chunk(self, doc, text, idx):

        return {

            "chunk_id": f"{doc.get('doc_id', 'unknown')}_chunk_{idx}",

            "text": text,

            "metadata": {

                **doc.get("metadata", {}),

                "source_title": doc.get("title", ""),

                "chunk_index": idx,

                "char_count": len(text),

                # ✅ 关键：保留来源信息，供后续"证据链"追溯

            }

        }

```

  

### 切分策略可视化对比

  

```

原始文档：

┌──────────────────────────────────────────────────┐

│ 第一段：产品A的电池采用锂聚合物技术...             │

│ 第二段：续航测试结果显示在连续使用场景下...         │

│ 第三段：与竞品B对比，A的充电速度快30%...           │

│ 第四段：用户反馈中，85%提到了续航满意度...          │

└──────────────────────────────────────────────────┘

  

❌ 硬切（固定200字）：

┌────────────┐┌────────────┐┌────────────┐

│产品A的电池采│用锂聚合物...│续航测试结果显│  ← 把"采用"切断了！

└────────────┘└────────────┘└────────────┘

  

✅ 语义切分 + 重叠：

┌──────────────────────┐

│ Chunk 0:              │

│ 第一段 + 第二段       │  ← 按段落边界

│                       │

│  ...连续使用场景下... │  ← 保留尾部64字符

└──────────────────────┘

          ┌──────────── overlap ──┐

┌──────────────────────┐          │

│ Chunk 1:              │          │

│ ...连续使用场景下...  │  ← 重叠区│

│ 第三段 + 第四段       │

└──────────────────────┘

```

  

### 3.2 向量数据库构建（ChromaDB）

  

```python

import chromadb

from chromadb.utils import embedding_functions

  

class VectorKnowledgeBase:

    """

    向量知识库 —— Skills 的"长期语义记忆"

    知识库(文档) ──切分──▶ Chunks ──MiniLM编码──▶ 向量 ──存入──▶ ChromaDB

    """

    def __init__(self, collection_name="skill_knowledge"):

        # ✅ 使用 MiniLM 作为嵌入函数

        self.ef = embedding_functions.SentenceTransformerEmbeddingFunction(

            model_name="all-MiniLM-L6-v2"

        )

        # 持久化存储（重启不丢失）

        self.client = chromadb.PersistentClient(path="./chroma_db")

        self.collection = self.client.get_or_create_collection(

            name=collection_name,

            embedding_function=self.ef,

            metadata={"hnsw:space": "cosine"}  # ✅ 余弦距离

        )

    def ingest(self, chunks: list[dict]):

        """批量写入知识chunks"""

        self.collection.add(

            ids=[c["chunk_id"] for c in chunks],

            documents=[c["text"] for c in chunks],

            metadatas=[c["metadata"] for c in chunks]

        )

        print(f"✅ 已写入 {len(chunks)} 个chunks，总计 {self.collection.count()} 条")

    def search(self, query: str, top_k=5, filters: dict = None) -> list[dict]:

        """

        语义检索

        参数:

            query: 自然语言查询

            top_k: 返回前K条最相关结果

            filters: 元数据过滤（如 {"source": "competitor_report"}）

        """

        where_filter = filters if filters else None

        results = self.collection.query(

            query_texts=[query],

            n_results=top_k,

            where=where_filter,

            include=["documents", "metadatas", "distances"]

        )

        retrieved = []

        for i in range(len(results["ids"][0])):

            retrieved.append({

                "chunk_id": results["ids"][0][i],

                "text": results["documents"][0][i],

                "metadata": results["metadatas"][0][i],

                "relevance_score": 1 - results["distances"][0][i],  # 距离→相似度

            })

        return retrieved

  
  

# ============================================================

# 完整流程演示

# ============================================================

  

# 1. 准备知识文档

documents = [

    {

        "doc_id": "competitor_report_2024",

        "title": "2024年Q3竞品分析报告",

        "content": """

            竞品A（ASIN: B0XXXXX）在7月进行了大幅降价，从$49.99降至$34.99。

            分析认为这是一次清库存行为，因为其供应商（东莞XX工厂）同期发布了新模具。

            竞品B的广告策略转向了长尾词，放弃了核心大词"wireless charger"的竞价，

            转而主攻"wireless charger for iphone 15 magsafe"等精确匹配词。

            其ACOS从45%降至22%。

            市场整体趋势：消费者对"快充"需求增长了67%，但Top 10竞品中

            仅有3家在Listing中提及"65W快充"功能。这是一个明显的内容差距。

        """,

        "metadata": {"type": "report", "quarter": "2024Q3", "category": "charger"}

    },

    {

        "doc_id": "review_analysis_001",

        "title": "消费者评论痛点汇总",

        "content": """

            通过分析Top 20竞品的共计15,000条评论，提取出以下高频痛点：

            1. 充电速度慢（提及率38%）——消费者期望至少30W以上

            2. 发热严重（提及率25%）——尤其是夏天使用场景

            3. 不兼容新款手机（提及率18%）——iPhone 15 MagSafe适配问题

            4. 外观廉价感（提及率12%）——对比Anker等品牌

            5. 数据线质量差（提及率7%）——容易断裂

        """,

        "metadata": {"type": "review_analysis", "category": "charger"}

    }

]

  

# 2. 切分

chunker = SmartChunker(chunk_size=400, overlap=50)

all_chunks = []

for doc in documents:

    all_chunks.extend(chunker.chunk_document(doc))

  

# 3. 写入向量库

kb = VectorKnowledgeBase(collection_name="amazon_competitor_intel")

kb.ingest(all_chunks)

  

# 4. 语义检索

results = kb.search("竞品为什么降价", top_k=3)

for r in results:

    print(f"\n[相似度: {r['relevance_score']:.4f}]")

    print(f"来源: {r['metadata']['source_title']}")

    print(f"内容: {r['text'][:100]}...")

```

  

---

  

## 四、RAG Skill 完整实现

  

### 4.1 RAG 管线架构

  

```

用户 Query

    │

    ▼

┌─────────────────────┐

│  Step 1: 查询改写    │  ← 把模糊问题变精确

│  "价格怎么了"        │

│  → "竞品近期价格异动  │

│     原因是什么"       │

└─────────┬───────────┘

          │

          ▼

┌─────────────────────┐     ┌─────────────────┐

│  Step 2: 双路检索    │     │                 │

│                     │────▶│  向量库 (语义)    │ → 相似内容chunks

│  同时发起            │     │  MiniLM cosine   │

│  两路检索            │     └─────────────────┘

│                     │     ┌─────────────────┐

│                     │────▶│  知识图谱 (精确)  │ → 关系/实体

│                     │     │  Cypher 查询     │

└─────────┬───────────┘     └─────────────────┘

          │

          ▼

┌─────────────────────┐

│  Step 3: 重排序      │  ← 对检索结果按相关性重新排序

│  Cross-Encoder      │

│  或 LLM 打分        │

└─────────┬───────────┘

          │

          ▼

┌─────────────────────┐

│  Step 4: 提示词组装  │  ← 将检索到的上下文注入Prompt

│  背景 + 批注 +       │

│  上下文 + 任务指令   │

└─────────┬───────────┘

          │

          ▼

┌─────────────────────┐

│  Step 5: LLM 生成    │  ← 基于证据生成答案

│  + 置信度打分        │

│  + 证据引用标注      │

└─────────────────────┘

```

  

### 4.2 完整 RAG Skill 代码

  

```python

class RAGSkill:

    """

    检索增强生成 Skill —— 知识库 + 向量库 + MiniLM + LLM

    这是一个"组合型高级Skill"，内部包含多个子步骤

    """

    def __init__(self, vector_kb, kg_client, llm):

        self.vector_kb = vector_kb      # 向量知识库（ChromaDB + MiniLM）

        self.kg = kg_client             # 知识图谱（Neo4j）

        self.llm = llm                  # 大语言模型

        self.embedder = MiniLMEmbedder()

    def execute(self, input_data: dict) -> dict:

        """

        输入: {"query": "...", "context": {...}, "step_info": {"current": 2, "total": 5}}

        输出: {"status": "...", "answer": "...", "evidence": [...], "confidence": 0.85}

        """

        query = input_data["query"]

        context = input_data.get("context", {})

        # ═══════════════════════════════════════

        # Step 1: 查询改写（Query Rewriting）

        # ═══════════════════════════════════════

        rewritten_query = self._rewrite_query(query, context)

        # ═══════════════════════════════════════

        # Step 2: 双路检索（Hybrid Retrieval）

        # ═══════════════════════════════════════

        # 路径A：向量语义检索

        vector_results = self.vector_kb.search(

            query=rewritten_query,

            top_k=8,

            filters=context.get("search_filters")  # 可按类目/时间过滤

        )

        # 路径B：知识图谱精确检索

        kg_results = self._query_knowledge_graph(rewritten_query, context)

        # ═══════════════════════════════════════

        # Step 3: 重排序（Re-ranking）

        # ═══════════════════════════════════════

        reranked = self._rerank(query, vector_results, top_k=5)

        # ═══════════════════════════════════════

        # Step 4: 组装提示词 + 生成

        # ═══════════════════════════════════════

        answer = self._generate_answer(

            query=query,

            retrieved_chunks=reranked,

            kg_context=kg_results,

            task_context=context

        )

        return answer

    # --------------------------------------------------

    # 内部方法

    # --------------------------------------------------

    def _rewrite_query(self, query: str, context: dict) -> str:

        """将用户模糊查询改写为精确检索查询"""

        prompt = f"""请将以下用户问题改写为更适合知识库检索的查询语句。

保留核心意图，补充必要的限定词。

  

用户问题: {query}

当前上下文: {json.dumps(context, ensure_ascii=False)}

  

只输出改写后的查询，不要其他内容。"""

        return self.llm.invoke(prompt).strip()

    def _query_knowledge_graph(self, query: str, context: dict) -> dict:

        """从知识图谱检索结构化信息"""

        # 先用 LLM 将自然语言转为 Cypher 查询

        cypher_prompt = f"""你是Neo4j Cypher专家。根据问题生成查询语句。

  

图谱Schema:

- (:ASIN)-[:CompetesWith]->(:ASIN)

- (:ASIN)-[:HasIssue]->(:PainPoint)

- (:ASIN)-[:Dominates]->(:Keyword)

- (:ASIN)-[:DerivedFrom]->(:Supplier)

- (:ASIN)-[:BelongsTo]->(:Brand)

  

问题: {query}

只输出Cypher语句:"""

        cypher = self.llm.invoke(cypher_prompt).strip()

        try:

            results = self.kg.query(cypher)

            return {"status": "success", "data": results, "cypher": cypher}

        except Exception as e:

            return {"status": "error", "reason": str(e), "cypher": cypher}

    def _rerank(self, query: str, results: list, top_k=5) -> list:

        """用 Cross-Encoder 或 LLM 对检索结果重排序"""

        # 方法1：用 MiniLM 快速重排（计算 query 与每个 chunk 的精确相似度）

        texts = [r["text"] for r in results]

        scores = self.embedder.similarity(query, texts)

        # 按新分数排序，取 top_k

        score_map = {s["text"]: s["score"] for s in scores}

        for r in results:

            r["rerank_score"] = score_map.get(r["text"], 0)

        reranked = sorted(results, key=lambda x: x["rerank_score"], reverse=True)

        return reranked[:top_k]

    def _generate_answer(self, query, retrieved_chunks, kg_context, task_context):

        """组装最终提示词并生成答案"""

        # ✅ 构建带编号的证据文本（用于引用标注）

        evidence_text = ""

        for i, chunk in enumerate(retrieved_chunks, 1):

            source = chunk["metadata"].get("source_title", "未知来源")

            evidence_text += f"\n[证据{i}] (来源: {source}, 相关度: {chunk['rerank_score']:.2f})\n"

            evidence_text += f"{chunk['text']}\n"

        # ✅ 构建知识图谱上下文

        kg_text = ""

        if kg_context.get("status") == "success" and kg_context.get("data"):

            kg_text = f"\n知识图谱查询结果:\n{json.dumps(kg_context['data'], ensure_ascii=False, indent=2)}"

        # ══════════════════════════════════════════

        #  核心：高质量提示词模板

        # ══════════════════════════════════════════

        prompt = f"""\

# 角色与背景（批注：告诉AI它是谁）

你是一位资深的亚马逊运营分析专家，拥有10年跨境电商经验。

你擅长从多维数据中发现竞争机会。

  

# 上下文（批注：交代当前状态）

当前分析阶段: {task_context.get('phase', '通用分析')}

目标类目: {task_context.get('category', '未指定')}

关注的ASIN: {task_context.get('target_asin', '未指定')}

  

# 检索到的知识库证据

{evidence_text}

  

# 知识图谱关系数据

{kg_text}

  

# 任务（批注：单一明确任务）

请基于以上证据，回答以下问题：

{query}

  

# 输出要求（批注：严格约束格式）

必须按以下JSON格式输出：

{{

    "answer": "你的分析结论（必须引用证据编号，如[证据1]）",

    "key_findings": ["发现1", "发现2", "发现3"],

    "evidence_used": [1, 3],

    "confidence_score": 0.85,

    "reasoning_chain": [

        "第一步推理...",

        "第二步推理...",

        "因此得出结论..."

    ],

    "limitations": "数据不足或不确定的地方",

    "suggested_next_skill": "建议下一步调用的Skill名称（如需要）"

}}

  

# 约束（批注：防止幻觉）

- 只基于提供的证据作答，不要编造数据

- 没有证据支撑的观点必须标注"推测"

- confidence_score < 0.6 时，在limitations中说明原因

"""

        response = self.llm.invoke(prompt)

        try:

            result = json.loads(response)

            result["status"] = "success"

            result["source_chunks"] = [c["chunk_id"] for c in retrieved_chunks]

            return result

        except json.JSONDecodeError:

            return {

                "status": "error",

                "reason": "LLM输出不是有效JSON",

                "raw_output": response,

                "suggestion": "retry_with_stricter_prompt"

            }

```

  

---

  

## 五、提示词工程四大法则（深度展开）

  

### 法则 1：批注（Annotations）

  

```python

# ❌ 没有批注 —— AI 不理解你为什么这样要求

prompt = """分析竞品，输出JSON。"""

  

# ✅ 有批注 —— AI 理解每个要求背后的原因

prompt = """

# 角色定义（批注：限定专业领域，减少通用废话）

你是亚马逊广告优化专家。

  

# 数据输入（批注：明确告诉AI数据的含义和时间范围）

以下是过去30天的广告数据，ACOS=广告销售成本比。

  

# 分析要求（批注：为什么要求这样做——因为运营需要可执行的建议）

请找出ACOS > 40%的关键词，并给出具体的"降低出价"或"否定关键词"建议。

不要给笼统建议（如"优化广告"），必须具体到词级别操作。

  

# 输出格式（批注：下游Skill需要解析JSON，所以格式必须严格）

输出严格JSON格式，因为该输出将被自动化管线中的下一个Skill解析。

"""

```

  

### 法则 2：交代背景（Background Context）

  

```python

# ✅ 背景交代模板 —— 分三层

BACKGROUND_TEMPLATE = """

┌─────────────────────────────────────────────┐

│  Layer 1: 业务背景（这个任务是什么）          │

│  "我们是一家跨境电商公司，主营3C配件类目，    │

│   目前在美国站的市场份额约3%。"               │

│                                             │

│  Layer 2: 当前状态（现在到了哪一步）          │

│  "这是我们每周竞品监控流程的第3步，            │

│   前两步已经完成了数据采集和实体提取。"        │

│                                             │

│  Layer 3: 期望结果（你要什么产出）             │

│  "我需要一份可以直接发给运营团队执行的         │

│   竞品应对方案，包含具体的价格调整建议。"      │

│                                             │

└─────────────────────────────────────────────┘

"""

```

  

### 法则 3：上下文注入（Context Injection）

  

```python

def build_context_aware_prompt(query, skill_context):

    """

    上下文不是越多越好，而是越"相关"越好

    ✅ 上下文选择策略：

    1. 从向量库检索的 top-5 chunks（语义相关）

    2. 从知识图谱获取的实体关系（结构化事实）

    3. 前序 Skill 的输出（流程状态）

    4. 历史对话/决策记录（避免重复）

    """

    context_block = f"""

## 前序 Skill 产出（上游数据）

{json.dumps(skill_context.get('previous_skill_output', {}), ensure_ascii=False)}

  

## 知识图谱实体关系

{skill_context.get('kg_entities', '无相关实体')}

  

## 向量库检索结果（按相关度排序）

{skill_context.get('retrieved_chunks', '无检索结果')}

  

## 当前流程状态

步骤: {skill_context.get('current_step', '?')}/{skill_context.get('total_steps', '?')}

已尝试次数: {skill_context.get('retry_count', 0)}

上次失败原因: {skill_context.get('last_failure_reason', '无')}

"""

    return context_block

```

  

### 法则 4：单一任务（Single Task）

  

```python

# ❌ 多任务混合 —— AI 会顾此失彼

bad_prompt = """

分析竞品价格，同时写一篇Listing文案，顺便给出广告投放建议。

"""

  

# ✅ 单一任务 —— 一个 Skill 一个任务，清晰专注

# 拆成3个独立 Skill:

  

SKILL_1_PROMPT = """

【唯一任务】分析以下竞品的价格变化趋势，判断降价原因。

不要做其他任何事情。

"""

  

SKILL_2_PROMPT = """

【唯一任务】基于上一步的竞品分析结果，撰写差异化的Listing标题和五点描述。

不要分析价格，不要给广告建议。

"""

  

SKILL_3_PROMPT = """

【唯一任务】基于前两步的分析和文案，生成广告关键词投放方案。

只关注广告层面，不要修改文案。

"""

```

  

---

  

## 六、完整的多 Skill 组合示例

  

### 场景：「竞品防守薄弱点挖掘」全自动化工作流

  

```python

class CompetitorWeaknessWorkflow:

    """

    完整工作流：4个Skill闭环组合

    Step 1: MarketMapper    → 扫描Top50竞品

    Step 2: GraphLinker     → 连接知识图谱，找共同痛点

    Step 3: GapAnalyzer     → RAG分析需求差距

    Step 4: ContentGenerator→ 生成优化方案

    + CriticSkill 在每步之后验证质量

    """

    def __init__(self):

        self.embedder = MiniLMEmbedder()

        self.vector_kb = VectorKnowledgeBase("competitor_intel")

        self.kg = Neo4jClient(...)

        self.llm = ChatOpenAI(model="gpt-4")

        # 初始化所有 Skills

        self.skills = {

            "market_mapper":     MarketMapperSkill(self.llm),

            "graph_linker":      GraphLinkerSkill(self.kg),

            "gap_analyzer":      GapAnalyzerSkill(self.vector_kb, self.kg, self.llm, self.embedder),

            "content_generator": ContentGeneratorSkill(self.llm),

            "critic":            CriticSkill(self.kg, self.llm),

        }

    def run(self, category: str, target_asin: str):

        state = {

            "category": category,

            "target_asin": target_asin,

            "total_steps": 4,

            "results": {},

            "evidence_chain": []

        }

        workflow_steps = [

            ("market_mapper",     "扫描市场"),

            ("graph_linker",      "图谱关联"),

            ("gap_analyzer",      "差距分析"),

            ("content_generator", "方案生成"),

        ]

        for step_idx, (skill_name, description) in enumerate(workflow_steps, 1):

            print(f"\n{'='*60}")

            print(f"📍 Step {step_idx}/{state['total_steps']}: {description}")

            print(f"{'='*60}")

            skill = self.skills[skill_name]

            # ✅ 注入上下文 + 流程状态

            skill_input = {

                **state,

                "current_step": step_idx,

                "previous_output": state["results"].get(workflow_steps[step_idx-2][0]) if step_idx > 1 else None

            }

            # 执行 + 闭环验证（最多重试3次）

            for attempt in range(3):

                output = skill.execute(skill_input)

                # ✅ Critic 验证

                critique = self.skills["critic"].execute({

                    "worker_output": output,

                    "step_name": skill_name,

                    "attempt": attempt + 1

                })

                if critique["status"] == "approved":

                    print(f"  ✅ 通过验证 (第{attempt+1}次尝试)")

                    state["results"][skill_name] = output

                    state["evidence_chain"].append({

                        "step": step_idx,

                        "skill": skill_name,

                        "confidence": output.get("confidence_score", "N/A")

                    })

                    break

                else:

                    print(f"  ❌ 验证失败: {critique['issues']}")

                    skill_input["last_failure_reason"] = critique["issues"]

                    skill_input["retry_count"] = attempt + 1

            else:

                print(f"  ⚠️ 达到最大重试次数，使用最后一次输出")

                state["results"][skill_name] = output

        # 生成最终报告

        return self._compile_report(state)

    def _compile_report(self, state):

        return {

            "status": "workflow_complete",

            "results": state["results"],

            "evidence_chain": state["evidence_chain"],

            "total_confidence": np.mean([

                e["confidence"] for e in state["evidence_chain"]

                if isinstance(e["confidence"], (int, float))

            ])

        }

  
  

# ============================================================

# 运行

# ============================================================

workflow = CompetitorWeaknessWorkflow()

report = workflow.run(

    category="wireless_charger",

    target_asin="B0XXXXXXX"

)

  

print(json.dumps(report, ensure_ascii=False, indent=2))

```

  

---

  

## 七、总结速查表

  

```

┌──────────────────────────────────────────────────────────────────┐

│                    高级 Skill 写作检查清单                        │

├──────────────────────────────────────────────────────────────────┤

│                                                                  │

│  知识库 + 向量库 + RAG                                           │

│  ─────────────────                                               │

│  □ 文档按语义边界切分（不要硬切）                                  │

│  □ 切分时保留重叠窗口（overlap 50-100 字符）                      │

│  □ 每个chunk携带完整metadata（来源、时间、类目）                   │

│  □ MiniLM 编码时开启 normalize_embeddings=True                   │

│  □ 检索后做重排序（Re-ranking）                                   │

│  □ 向量检索 + 知识图谱 双路并行                                   │

│                                                                  │

│  提示词四法则                                                     │

│  ────────────                                                    │

│  □ 批注：每个要求标注"为什么"                                     │

│  □ 背景：三层（业务→状态→期望）                                   │

│  □ 上下文：注入前序输出 + 图谱实体 + 检索chunks                   │

│  □ 单一任务：一个Prompt只做一件事                                  │

│                                                                  │

│  Skill 工程规范                                                   │

│  ──────────────                                                  │

│  □ JSON Schema 定义输入输出合同                                   │

│  □ 显式错误处理（status + reason + suggestion）                   │

│  □ 元数据透传（来源节点、证据链、置信度）                          │

│  □ 状态意识（Step N/M + retry_count）                             │

│  □ Critic 闭环验证 + 自动重试                                     │

│                                                                  │

│  技术栈                                                          │

│  ──────                                                          │

│  □ 嵌入: all-MiniLM-L6-v2 (384维, 本地运行)                      │

│  □ 向量库: ChromaDB (轻量) / Pinecone (生产)                     │

│  □ 知识图谱: Neo4j / Amazon Neptune                              │

│  □ 编排: LangGraph (状态循环) / AWS Step Functions                │

│  □ LLM: GPT-4 / Claude (推理核心)                                │

│                                                                  │

└──────────────────────────────────────────────────────────────────┘

```

  

> 💡 **核心记忆点**：高级 Skill = **MiniLM感知** + **知识图谱推理** + **批注式提示词** + **闭环验证**。它们不是孤立的函数，而是能相互校验、自动重试、带着证据链输出的**智能协作单元**。

  

# 🚀 如何写好高级 Skills — 完整指南

  

根据你提供的文档，我将系统性地拆解**如何编写高级 Skills**，并配上实际代码示例和架构图。

  

---

  

## 一、核心理念：从"函数"到"智能单元"

  

> **高级 Skill ≠ 一个函数调用**，而是一个具备 **感知、决策、执行** 能力的独立模块。

  

```

传统 Skill:    输入 → 处理 → 输出（线性）

高级 Skill:    输入 + 上下文 + 知识图谱 → 推理 → 输出 + 元数据 + 置信度（网络化）

```

  

---

  

## 二、Skill 的结构化定义（JSON Schema）

  

每个 Skill 必须有**严格的输入输出合同**，确保工作流引擎能准确调度：

  

```json

{

  "skill_name": "CompetitorPriceAnalyzer",

  "version": "1.2.0",

  "description": "分析竞品价格异动并结合知识图谱推理原因",

  "input_schema": {

    "type": "object",

    "required": ["asin", "current_price", "history_context"],

    "properties": {

      "asin":            { "type": "string", "description": "目标ASIN" },

      "current_price":   { "type": "number", "description": "当前价格" },

      "history_context": {

        "type": "array",

        "items": {

          "type": "object",

          "properties": {

            "date":  { "type": "string" },

            "price": { "type": "number" },

            "bsr":   { "type": "integer" }

          }

        }

      },

      "kg_context": { "type": "object", "description": "知识图谱注入的上下文（可选）" }

    }

  },

  "output_schema": {

    "type": "object",

    "properties": {

      "status":           { "enum": ["success", "error", "need_more_data"] },

      "analysis":         { "type": "string" },

      "confidence_score": { "type": "number", "minimum": 0, "maximum": 1 },

      "affected_nodes":   { "type": "array", "items": { "type": "string" } },

      "evidence_chain":   { "type": "array", "description": "推理证据链" },

      "suggestion":       { "type": "string" }

    }

  }

}

```

  

### ✅ 三大设计原则

  

| 原则 | 说明 | 反面教材 |

|------|------|----------|

| **单一职责** | 一个 Skill 只解决一个具体问题 | ❌ 一个 Skill 又提取实体又查图谱又打分 |

| **上下文注入** | 允许接收外部 Context，不仅仅是原始输入 | ❌ Skill 内部硬编码上下文 |

| **显式错误处理** | 返回结构化错误+建议 | ❌ 出错只返回 `null` |

  

---

  

## 三、5 种高级 Skill 模式（附代码）

  

### 模式 1️⃣：实体提取 Skill（原子型）

  

```python

class EntityExtractorSkill:

    """从非结构化文本中提取结构化实体"""

    def __init__(self, llm, kg_client):

        self.llm = llm

        self.kg = kg_client

    def execute(self, input_data: dict) -> dict:

        text = input_data["raw_text"]

        prompt = f"""你是一个精准的实体提取器。

从以下文本中提取：公司名、金额、日期、风险标签。

  

文本：{text}

  

输出格式（严格JSON）：

{{"entities": [{{"type": "COMPANY", "value": "...", "confidence": 0.95}}]}}

"""

        result = self.llm.invoke(prompt)

        # ✅ 关键：与知识图谱交叉验证

        validated = []

        for entity in result["entities"]:

            kg_match = self.kg.query(f"MATCH (n) WHERE n.name =~ '{entity['value']}' RETURN n")

            validated.append({

                **entity,

                "kg_verified": bool(kg_match),

                "kg_node_id": kg_match[0]["id"] if kg_match else None

            })

        return {

            "status": "success",

            "entities": validated,

            "source_skill": "EntityExtractor_v1.2",  # ✅ 元数据透传

            "step": f"{input_data.get('current_step', '?')}/{input_data.get('total_steps', '?')}"

        }

```

  

### 模式 2️⃣：知识图谱探索 Skill（推理型）

  

```python

class GraphExplorerSkill:

    """在知识图谱中进行多跳推理"""

    def execute(self, input_data: dict) -> dict:

        entity_id = input_data["entity_id"]

        query_type = input_data["query_type"]  # "risk_check" | "competitor_link" | "supply_chain"

        queries = {

            "risk_check": f"""

                MATCH (c:Company {{id: '{entity_id}'}})-[:SANCTIONED_BY|OWNED_BY*1..3]-(risk:RiskEntity)

                RETURN c, risk, relationships(c) as path

            """,

            "competitor_link": f"""

                MATCH (a:ASIN {{id: '{entity_id}'}})-[:CompetesWith]->(b:ASIN)

                MATCH (b)-[:HasIssue]->(p:PainPoint)

                MATCH (b)-[:Dominates]->(k:Keyword)

                RETURN b.name, collect(p.description) as pain_points,

                       collect(k.term) as dominated_keywords

            """,

            "supply_chain": f"""

                MATCH (a:ASIN {{id: '{entity_id}'}})-[:DerivedFrom]->(s:Supplier)

                MATCH (s)<-[:DerivedFrom]-(other:ASIN)

                WHERE other.id <> '{entity_id}'

                RETURN s.name as shared_supplier, collect(other.name) as related_products

            """

        }

        results = self.kg.query(queries[query_type])

        return {

            "status": "success",

            "graph_paths": results,

            "reasoning": self._generate_reasoning(results, query_type),  # LLM 解读图谱路径

            "affected_nodes": [r["id"] for r in results],

            "confidence_score": self._calculate_confidence(results)

        }

```

  

### 模式 3️⃣：闭环验证 Skill（Critic 型）

  

```python

class CriticSkill:

    """验证其他 Skill 的输出质量，失败则打回重做"""

    def execute(self, worker_output: dict, rules_from_kg: list) -> dict:

        issues = []

        # ✅ 规则 1：输出完整性检查

        required_fields = ["analysis", "confidence_score", "evidence_chain"]

        for field in required_fields:

            if field not in worker_output:

                issues.append(f"缺少必要字段: {field}")

        # ✅ 规则 2：知识图谱事实校验

        for claim in worker_output.get("evidence_chain", []):

            kg_verified = self.kg.verify_fact(claim)

            if not kg_verified:

                issues.append(f"事实校验失败: {claim}")

        # ✅ 规则 3：置信度阈值

        if worker_output.get("confidence_score", 0) < 0.7:

            issues.append(f"置信度过低: {worker_output['confidence_score']}")

        if issues:

            return {

                "status": "rejected",

                "issues": issues,

                "action": "retry",             # 告诉工作流引擎：打回重做

                "max_retries": 3,

                "suggestion": "请补充更多上下文数据后重试"

            }

        return {"status": "approved", "final_output": worker_output}

```

  

### 模式 4️⃣：规划器 Skill（Planner 型）

  

```python

class PlannerSkill:

    """分析复杂任务，拆解为子任务序列并路由"""

    def execute(self, task: dict) -> dict:

        prompt = f"""你是一个任务规划专家。

任务描述：{task['description']}

可用 Skills：{json.dumps(task['available_skills'])}

知识图谱状态：{json.dumps(task['kg_state'])}

  

请拆解为最优子任务序列。考虑：

1. 哪些 Skill 可以并行执行？

2. 哪些 Skill 有依赖关系？

3. 是否需要知识图谱预热？

  

输出格式：

{{

  "plan": [

    {{"step": 1, "skill": "...", "parallel_group": "A", "input_mapping": {{...}}}},

    {{"step": 2, "skill": "...", "depends_on": [1], "input_mapping": {{...}}}}

  ],

  "estimated_steps": 4,

  "fallback_plan": [...]

}}

"""

        return self.llm.invoke(prompt)

```

  

### 模式 5️⃣：差距分析 Skill（Gap Analyzer，亚马逊场景）

  

```python

class GapAnalyzerSkill:

    """挖掘竞品防守薄弱点"""

    def execute(self, input_data: dict) -> dict:

        # 从知识图谱获取消费者需求 vs 竞品功能

        consumer_needs = self.kg.query("""

            MATCH (n:ConsumerNeed)<-[:MENTIONS]-(r:Review)

            WHERE r.category = $category

            WITH n, count(r) as mention_count

            ORDER BY mention_count DESC

            RETURN n.name, mention_count

        """, category=input_data["category"])

        top10_features = self.kg.query("""

            MATCH (a:ASIN)-[:HasFeature]->(f:Feature)

            WHERE a.bsr_rank <= 10 AND a.category = $category

            RETURN f.name, count(a) as coverage

        """, category=input_data["category"])

        # 🎯 核心逻辑：高需求 + 低覆盖 = 机会点

        feature_set = {f["name"] for f in top10_features}

        gaps = []

        for need in consumer_needs:

            if need["name"] not in feature_set and need["mention_count"] > 50:

                gaps.append({

                    "need": need["name"],

                    "demand_score": need["mention_count"],

                    "competitor_coverage": 0,

                    "opportunity_level": "HIGH"

                })

        return {

            "status": "success",

            "gaps": sorted(gaps, key=lambda x: x["demand_score"], reverse=True),

            "recommendation": self._generate_listing_advice(gaps)

        }

```

  

---

  

## 四、多 Skills 组合的工作流架构

  

### 🔄 闭环工作流（LangGraph 风格）

  

```

┌─────────────────────────────────────────────────────────────┐

│                    高级自动化工作流                           │

│                                                             │

│   ┌──────────┐    ┌──────────┐    ┌──────────┐             │

│   │ Planner  │───▶│ Router   │───▶│ Worker   │             │

│   │ Skill A  │    │ Skill B  │    │ Skill C  │             │

│   └──────────┘    └──────────┘    └────┬─────┘             │

│        ▲                               │                    │

│        │          ┌──────────┐         │                    │

│        │          │  Critic  │◀────────┘                    │

│        │          │ Skill D  │                              │

│        │          └────┬─────┘                              │

│        │               │                                    │

│        │     ┌─────────┴─────────┐                         │

│        │     │                   │                          │

│        │  [REJECTED]          [APPROVED]                    │

│        │     │                   │                          │

│        └─────┘           ┌───────┴──────┐                  │

│                          │ Decision     │                   │

│                          │ Maker Skill  │──▶ 📄 最终报告    │

│                          └──────────────┘                   │

│                                                             │

│   ══════════════════════════════════════════                │

│   ║         知识图谱 (Knowledge Graph)     ║  ◀── 全程参与  │

│   ══════════════════════════════════════════                │

└─────────────────────────────────────────────────────────────┘

```

  

### 代码实现（LangGraph）

  

```python

from langgraph.graph import StateGraph, END

  

# 定义工作流状态

class WorkflowState(TypedDict):

    task: str

    plan: list

    current_step: int

    total_steps: int

    results: dict

    retry_count: int

    kg_context: dict

  

# 构建工作流图

workflow = StateGraph(WorkflowState)

  

workflow.add_node("planner",    planner_skill.execute)

workflow.add_node("router",     router_skill.execute)

workflow.add_node("worker",     worker_skill.execute)

workflow.add_node("critic",     critic_skill.execute)

workflow.add_node("decision",   decision_skill.execute)

  

# 定义边和条件

workflow.add_edge("planner", "router")

workflow.add_edge("router", "worker")

workflow.add_edge("worker", "critic")

  

workflow.add_conditional_edges(

    "critic",

    lambda state: "worker" if state["retry_count"] < 3 and state.get("rejected") else "decision",

    {"worker": "worker", "decision": "decision"}

)

  

workflow.add_edge("decision", END)

workflow.set_entry_point("planner")

  

app = workflow.compile()

```

  

---

  

## 五、Skill Prompt 的编写秘诀

  

### ❌ 低质量 Prompt

```

"分析这个竞品的价格变化"

```

  

### ✅ 高质量 Prompt（带思维链路 + 数据合同）

```python

SKILL_PROMPT = """

你是一个亚马逊资深运营 Agent。

  

## 身份与背景

你负责竞品价格异动分析，已在该类目积累 5 年经验。

  

## 输入数据合同

- Current_State: {current_state}       # 当前价格/BSR/库存

- History_Context: {history_context}   # 过去30天数据

- KG_Context: {kg_context}            # 知识图谱提供的关联信息

  

## 执行逻辑（Chain of Thought）

1. 首先，对比价格与 BSR 的相关性（皮尔逊系数 > 0.7 则强相关）

2. 其次，检查 KG_Context 中该竞品是否正在进行 Seasonality_Promotion

3. 如果排除季节性因素，检查是否有站外引流信号（TikTok/红人合作）

4. 最后，结合供应链图谱判断是否为"清库存→上新款"策略

  

## 输出要求（严格JSON）

{{

    "status": "success",

    "analysis": "结构化分析文本",

    "root_cause": "seasonal | clearance | external_traffic | competitive_response",

    "confidence_score": 0.85,

    "evidence_chain": ["依据1", "依据2", "依据3"],

    "affected_kg_nodes": ["node_id_1", "node_id_2"],

    "recommended_action": "具体行动建议"

}}

  

## 约束

- 置信度 < 0.6 时必须标记 status 为 "need_more_data"

- 不要猜测，没有数据支撑的结论不要给出

"""

```

  

---

  

## 六、知识图谱架构（亚马逊竞品场景）

  

```

                    ┌──────────┐

            ┌──────▶│ Keyword  │◀── Dominates ──┐

            │       └──────────┘                 │

      RanksFor                                   │

            │       ┌──────────┐          ┌──────┴───┐

            └───────│  ASIN A  │──Competes│  ASIN B  │

                    └────┬─────┘  With    └────┬─────┘

                         │                     │

                   HasIssue               DerivedFrom

                         │                     │

                    ┌────┴─────┐          ┌────┴──────┐

                    │PainPoint │          │ Supplier  │

                    │"电池寿命短"│          │ "工厂X"   │

                    └──────────┘          └───────────┘

```

  

**推理示例：**

> 🧠 Skill A 发现竞品 B 降价 → 知识图谱告诉 Skill B：「竞品 B 与你的产品共享同一个供应商（工厂X），且它正在清空 '旧款' 节点下的库存 → **推测即将发布升级款**」

  

---

  

## 七、落地技术栈推荐

  

| 层级 | 推荐方案 | 说明 |

|------|---------|------|

| **图数据库** | Neo4j / Amazon Neptune | 存储知识图谱 |

| **向量库** | ChromaDB / Pinecone + MiniLM | RAG 语义检索 |

| **工作流编排** | LangGraph / AWS Step Functions | 支持状态循环 |

| **Skill 定义** | JSON Schema + OpenAPI | 让 LLM 像调函数一样调度 |

| **LLM** | GPT-4 / Claude | 推理核心 |

| **嵌入模型** | all-MiniLM-L6-v2 | 轻量高效的语义向量化 |

  

---

  

## 八、总结：高级 Skill 的 7 条黄金法则

  

```

1. 📦 单一职责 ——— 一个 Skill 只做一件事

2. 📋 严格合同 ——— JSON Schema 定义输入输出

3. 🧠 上下文感知 ——— 注入外部 Context + KG 数据

4. 🔗 元数据透传 ——— 输出包含来源、证据链、置信度

5. ❌ 显式错误 ——— 返回结构化错误 + 建议 + 重试策略

6. 🔄 闭环验证 ——— Critic Skill 校验 + 打回机制

7. 🏗️ 状态意识 ——— 知道自己在流程的第几步 (Step N/M)

```

  

> **记住：优秀的 Skill 应该像乐高积木一样——标准接口、独立功能、自由拼装。** 🧱我需要更深入研究下skills的高级用法

知识库  +向量库  RAG 利用微软 minilm

提示词，需要批注，交代背景，做 上下文，  单一任务

  

 怎么写skills，写出高级Skills