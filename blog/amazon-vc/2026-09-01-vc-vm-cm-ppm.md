---
title: "亚马逊vc账号 vm经理资源 字段含义 价值(亚马逊视角下的盈利能力（如 cm、ppm）以及供应链成本上。)"
category: "亚马逊VC"
tags: []
created_at: 2026-09-01T08:27:51.523Z
original_url: https://tianjikuajing.com/t/vc-vm-cm-ppm/91
---

[亚马逊VC账号 VM经理资源 字段含义 价值(亚马逊视角下的盈利能力（如 CM、PPM）以及供应链成本上。)](https://tianjikuajing.feishu.cn/wiki/KhYMw0x5fiF1KlkEWrrcGScfnpd?from=from_copylink)

亚马逊VC账号 VM经理资源 字段含义 价值(亚马逊视角下的盈利能力（如 CM、PPM）以及供应链成本上。)

**Net PPM 控制面板 (Net PPM dashboard)**

Net PPM（净纯产品利润率）控制面板通过分析净纯产品利润率（Net PPM），快速识别出哪些产品在拉高或降低利润。Net PPM 衡量的是在计入商品成本（cost of goods）、供应商资金（vendor funding）和销售折扣（sales discounts）后的产品盈利能力。

净纯产品利润率（PPM）的计算方法是：用已发货收入（shipped revenue）减去已发货 PCOGS（发货产品主营业务成本）加上 CCOGS（商品成本），再减去销售折扣（sales discounts），最后除以已发货收入（shipped revenue）。

![image|690x265](https://tianjikuajing.com/uploads/default/original/1X/d543227c9cf957ab830671a2a014077aaf89e1c3.png)

![亚马逊VC PPM 1280X1280|690x120](https://tianjikuajing.com/uploads/default/original/1X/a0272cb2edcaad23aeb712f1649e28aa7c86780f.jpeg)

![image|475x500](https://tianjikuajing.com/uploads/default/original/1X/d309492da8b2c71efbd9f6b39c2cc70e8a41a4a6.png)

亚马逊VC账号 VM经理资源 字段含义 价值(亚马逊视角下的盈利能力（如 CM、PPM）以及供应链成本上。)

详细介绍亚马逊供应商账号VC 每一个字段含义，价值

这份 VC (Vendor Central) 数据报表包含了亚马逊供应商体系中最核心的财务、运营和物流指标。与 SC (Seller Central) 相比，VC 的逻辑更偏向于“B2B 供货”，因此数据维度高度集中在**亚马逊视角下的盈利能力（如 CM、NET PPM）以及供应链成本**上。

亚马逊VC账号 VM经理资源 字段含义 价值

![](https://tianjikuajing.com/uploads/default/original/1X/9009c10c61b5f8aced44633887a78746aea657d7.jpeg)

为了便于系统性理解，我将这些字段划分为五大模块，并详细拆解其含义与在精细化运营中的数据驱动价值。

---

### 一、 核心财务与利润指标 (Core Financial & Profitability)

这是 VC 账号中最关键的数据。亚马逊的采购算法 (PO 算法) 极度依赖这些指标来决定是否继续向你下订单、分配多少流量权重，或者是否将你的产品标记为 CRaP (Cannot Realize a Profit)。

* **PCOGS($) (Product Cost of Goods Sold):**
* **含义：** 产品销货成本，即亚马逊按照供货价向你采购该商品所支付的成本。
* **运营价值：** 评估你与亚马逊之间的供货结算基数。在自动化数据流中，它是计算总营收底盘的核心参数。
  \*
  \*
* **CP($) (Cost Price) / CPPU (Cost Price Per Unit):**
* **含义：** CP 是总采购价格，CPPU 是单件采购价格。
* **运营价值：** 监控采购单价的波动。如果亚马逊要求降价（Cost Support），这里的变动会直接影响你的底线利润。
  \*
  \*
* **CM (Contribution Margin):**
* **含义：** **贡献毛利（极度重要）**。这是**亚马逊**在扣除掉你的供货价、物流费用、仓储等变动成本后，卖出你这款产品所赚取的利润。
* **运营价值：** 衡量亚马逊推流意愿的核心指标。高 CM 意味着亚马逊赚钱，飞轮效应下会给该 ASIN 更多自然曝光和购物车倾斜；低 CM 极易导致停刷 PO 或触发 CRaP。日常需要严密监控其趋势。
  \*
  \*
* **PPM (Pure Product Margin):**
* **含义：** 纯产品利润率。通常计算公式为 `(Amazon销售额 - 供货成本) / Amazon销售额`。
* **运营价值：** 这是基础的毛利水位线。通常 VC 卖家需要通过商业谈判（Vendor Negotiations）来维持一个健康的 PPM 目标，避免被强制要求提供合作补贴（Co-op 费用）。
  \*
  * Net **PPM (Pure Product Margin):**
  * ![](https://tianjikuajing.com/uploads/default/original/1X/9009c10c61b5f8aced44633887a78746aea657d7.jpeg)
  * 
* **CM ex Ads (Contribution Margin excluding Ads):**
* **含义：** 剔除广告收入后的贡献毛利。
* **运营价值：** 挤出“广告费带来的虚假繁荣”。如果 CM 看起来很高，但 CM ex Ads 很低，说明该产品的利润完全是靠你砸广告费（让亚马逊赚广告钱）撑起来的，产品本身的自然盈利能力堪忧。
  * 广告前毛利 和广告后毛利
  * 
  * 
* **CPLF (Cost Price Less Freight):**
* **含义：** 扣除运费后的供货成本价。
* **运营价值：** 用于剥离物流波动的影响，精准核算纯货品端的成本控制效率。
  \*
  \*
* **Product GMS($) (Gross Merchandise Sales):**
* **含义：** 产品的总商品交易额（消费者在亚马逊上购买该产品的总金额）。
* **运营价值：** 衡量产品在市场上的真实体量和市占率（Market Share）的北极星指标。
  \*
  \*
* **Revenue Share Amount($):**
* **含义：** 收入分成金额。通常出现在特定的分成协议或数字产品、附加服务中。
* **运营价值：** 追踪常规供货之外的额外营收/扣除项。
  \*
  \*
  \*

### 二、 销售与退款数据 (Sales & Refund Metrics)

直接反映消费者终端需求与产品质量表现。

* **Shipped Units (表中为 Shipped Unites):**
* **含义：** 实际发货给消费者的商品总件数。
* **运营价值：** 反应前端转化后的真实吞吐量。
  \*
  \*
* **Net Shipped Units:**
* **含义：** 净发货件数（总发货件数 - 退回/取消件数）。
* **运营价值：** 真实确认收入的件数。在建立数据分析看板时，以此作为计算转化和单件成本的分母最为精准。
  \*
  \*
* **Refund Revenue Amount:**
* **含义：** 退款总金额。
* **运营价值：** **高危风险预警指标**。如果该金额异常飙升，极易触发亚马逊的安灯拉绳机制（Andon Cord），导致 ASIN 被下架审查。对于高客单价或带电类产品，需结合此数据与用户原声（VOC）快速生成改善计划（POA）。
  \*
  \*
  \*
  \*
  \*

### 三、 物流、仓储与履约成本 (Logistics & Fulfillment Costs)

VC 模式下，物流效率直接吃掉利润，这部分数据是供应链优化的重点。

* **Shipping Cost:**
* **含义：** 亚马逊向消费者配送的端到端运费成本。
  * 说明 类似亚马逊SC 的FBA费用，亚马逊VC配送到消费者的费用
  * 
  * 
* **Inbound Freight:**
* **含义：** 头程运费。如果是 Collect 模式（亚马逊上门提货），这里会显示亚马逊向你收取的运费；如果是 Prepaid 模式（你送货进仓），则反映入库的物流成本。
* 也就是入库到亚马逊VC仓库这部分的物流费用，也称作二程
* **运营价值：** 评估头程供应链效率。可通过对比不同批次的入仓成本，优化发货计划。
  \*
  \*
* **FC Cost (Fulfillment Center Cost):**
* **含义：** 运营中心（FBA 仓库）的操作成本，包括上架、分拣、打包等。
* **运营价值：** 洞察包装优化的空间。如果 FC Cost 居高不下，可能需要考虑申请 SIOC（Ships in Own Container）认证或优化包装尺寸，以降低仓储和操作费。
  \*
  \*
* **Warehouse Deals-Other Cost:**
* **含义：** 亚马逊二手仓储（Warehouse Deals）相关的其他成本处理，通常涉及退货翻新或折价处理的残值折损。
* **运营价值：** 反映退货进入二手流转环节造成的沉默成本，需纳入整体 ASIN 的生命周期利润核算中。
  \*
  \*
  \*

### 四、 广告与营销投入 (Marketing & Advertising)

* **Display Ads Amount:**
* **含义：** 展示型广告（通常指 DSP 或 Sponsored Display）的花费金额。
* **运营价值：** 结合 GMS 评估站内外流量获取成本。在打通系统的 API 后，此字段是计算全局 ROAS 和监控流量获取效率的关键输入参数。
  \*
  * 亚马逊VC的广告和SC的打法 都差不多 还是一样的方法，就是整体感觉VC的CPC会低很多，转化率也会高很多，尤其BD秒杀，本身促销活动也有很高的流量，BD+广告，拉排名的方法
  * 

### 五、 基础维度与产品标识 (Basic Dimensions & Identifiers)

用于构建数据仓库（Data Warehouse）时的索引与分类层。

* **时间维度 (Year, Month):** 用于趋势分析、同比/环比计算及季节性预测。
* **分类维度 (GL Family, GL Product Group, Product Category Code/Description, Product Subcategory Code/Description):**
* **GL (General Ledger):** 亚马逊内部的财务大类。
* **运营价值：** 在进行大规模选品或元素迁移分析时，通过 GL 和子类目代码，可以清晰定位产品处于哪个竞争层级，方便按类目抓取市场大盘数据进行横向对比。
  \*
  \*
* **产品与公司标识 (ASIN, Item Name, Manufacturer Code/Name, Vendor Code, Company Name/Code):**
* **运营价值：** VC 账号通常会管理多品牌或多供应商代码（Vendor Code）。这些字段是数据库中的主键（Primary Keys），用于在 ERP 或本地 BI 系统中精准关联具体的产品线和供货主体。

详细介绍每个的价值

如何将这些离散的指标转化为驱动业务决策的底层数据流。

如何将这些离散的指标转化为驱动业务决策的底层数据流。

Python

```
import pandas as pd
file_path = "2025Vendor data(2).xlsx"try:
    xls = pd.ExcelFile(file_path)
    sheet_name = xls.sheet_names[0]
    df = pd.read_excel(xls, sheet_name=sheet_name, nrows=5)
    columns = list(df.columns)
    print("Columns in the first sheet:")
    for col in columns:
        print(f"- {col}")
except Exception as e:
    print(f"Error: {e}")
```

代码输出

```
Columns in the first sheet:
- Year
- Month
- GL Family
- GL Product Group
- Product Category Code
- Product Subcategory Code
- ASIN
- Manufacturer Code
- Vendor Code
- Item Name
- Manufacturer Name
- Company Name
- Company Code
- Product Category Description
- Product Subcategory Description
- PCOGS($) 
- CP($) 
- CPPU 
- CM 
- PPM 
- Product GMS($) 
- Revenue Share Amount($) 
- CM ex Ads（Contribution Margin excluding Ads）
- CPLF(Cost Price Less Freight)
- Shipped Unites
- Refund Revenue Amount
- Shipping Cost
- Net Shipped Units
- Inbound Freight
- Warehouse Deals-Other Cost
- FC Cost
- Display Ads Amount
```

针对这份包含 32 个字段的 VC 数据报表，其真正的价值在于**如何将这些离散的指标转化为驱动业务决策的底层数据流**。

对于致力于精细化运营和构建自动化数据流的体系来说，这些字段不仅是财务记录，更是触发业务动作（如自动调价、预警断货、生成申诉报告）的关键节点。以下是对每一个字段在实际应用中核心价值的详细拆解：

![](https://tianjikuajing.com/uploads/default/original/1X/9009c10c61b5f8aced44633887a78746aea657d7.jpeg)

### 一、 核心利润与成本核算网络 (Core Profit & Cost Metrics)

这是整个数据模型的心脏，决定了亚马逊算法对 ASIN 的推流意愿以及自身的现金流健康度。

* **PCOGS($) (Product Cost of Goods Sold):**
  * **数据价值：** 现金流计算的基础水位线。在自动化利润核算工作流中，它是确保业务在扣除平台各项杂费前，仍具备正向经营现金流的绝对底线。
* **CP($) / CPPU (Cost Price / Cost Price Per Unit):**
  * **数据价值：** 供货端博弈的触发器。CPPU 是单件供货价，当亚马逊 PO 算法要求降价以换取购物车份额时，系统可通过此字段的变化，瞬间测算出对底层利润的侵蚀比例，辅助决策是否接受降价。
* **CM (Contribution Margin - 贡献毛利):**
  * **数据价值：** **亚马逊流量分配的“咽喉”指标**。CM 越高，意味着亚马逊推广你的产品越赚钱，算法会自动倾斜自然搜索位和活动资源；CM 跌破阈值极易导致产品沦为 CRaP (Cannot Realize a Profit) 并停止采购。它是监控 ASIN 生命周期的最核心雷达。
* **PPM (Pure Product Margin - 纯产品利润率):**
  * **数据价值：** 商业谈判的杠杆。反映了不考虑后端履约时的纯货品溢价能力。高 PPM 意味着在面临亚马逊要求提供 Vendor Co-op (合作补贴) 时，有更充足的谈判纵深。
* **CM ex Ads (Contribution Margin excluding Ads):**
  * **数据价值：** 真实盈利能力的“照妖镜”。如果 CM 尚可，但 CM ex Ads 极低，说明产品的利润完全依靠广告费“输血”。这是一个强烈的业务信号，可以作为自动化 Agent 削减低效广告预算或启动产品迭代的触发条件。
* **CPLF (Cost Price Less Freight - 扣除运费后的供货价):**
  * **数据价值：** 剥离物流波动干扰，用于纯粹衡量工厂端采购成本和供应链生产效率的指标。

### 二、 销售与退货基本面 (Sales & Refund Performance)

反映市场真实需求、转化效率以及产品质量的终端表现。

* **Product GMS($) (Gross Merchandise Sales):**
  * **数据价值：** 衡量市场天花板和市占率的北极星指标。结合整体类目容量，可以计算出品牌在特定生态位中的渗透率。
* **Revenue Share Amount($):**
  * **数据价值：** 追踪常规供货之外的额外营收/扣除项，用于复杂供应商协议下的财务对账，确保每一笔款项的颗粒度归属。
* **Shipped Unites (总发货件数) & Net Shipped Units (净发货件数):**
  * **数据价值：** **Net Shipped Units 是所有“单件成本分析 (Per Unit)”的唯一正确分母**。在追踪自然排位胜率或建立流量归因模型时，使用净发货件数才能得出最真实的转化效能。
* **Refund Revenue Amount (退款总额):**
  * **数据价值：** **合规与风控的生命线**。异常飙升的退款额是危险信号。在高效的运营流中，一旦该指标超过预设阈值，应立即触发预警：暂停广告投入、抓取 VOC (Voice of Customer) 数据，并提前起草 POA (行动计划)，以防系统触发安灯拉绳 (Andon Cord) 导致产品下架审查。

### 三、 供应链效率与履约损耗 (Supply Chain & Fulfillment)

VC 体系下，隐藏在水面下的物流成本往往是吞噬利润的黑洞。

* **Shipping Cost (尾程配送成本):**
  * **数据价值：** 衡量亚马逊交付给终端消费者的端到端物流成本。数据的波动可以提示包装尺寸或重量段是否发生了被亚马逊错误测量的情况，触发重新测量的动作。
* **Inbound Freight (头程入库运费):**
  * **数据价值：** 评估头程干线物流效率。通过对比此字段，可以优化拼箱策略、评估货代报价，或在 Collect (亚马逊提货) 和 Prepaid (卖家送货) 模式间寻找最优解。
* **FC Cost (Fulfillment Center Cost - 运营中心操作费):**
  * **数据价值：** 指示包装优化的空间。持续高昂的 FC 费用通常意味着仓储分拣摩擦力大，这为是否需要申请 SIOC (自带包装发货) 认证以豁免部分操作费提供了数据支撑。
* **Warehouse Deals-Other Cost (二手仓储与其他折损成本):**
  * **数据价值：** 量化退货产生的沉没成本。将其纳入 ASIN 的全生命周期财务模型中，能够更精准地测算高退货率类目的真实底线利润。

### 四、 流量获取与分类锚点 (Traffic & Categorization Anchors)

构建数据仓库主键和追踪流量引擎表现的关键。

* **ASIN & Item Name:**
  * **数据价值：** 数据库的核心主键 (Primary Key)。所有的自动化数据抓取、向量数据库存储、以及 API 接口回调，都必须以此为锚点进行关联。
* **GL Family & GL Product Group:**
  * **数据价值：** 顶层市场边界的划定。在进行跨类目的“元素迁移”选品策略时（例如从家居清洁电器跨界到其他品类），GL 能够帮助宏观评估亚马逊内部的流量倾斜级别和总可寻址市场 (TAM)。
* **Product Category / Subcategory (Code & Description):**
  * **数据价值：** 精准定锚搜索节点。准确的子类目不仅影响传统搜索的 A9 算法，在生成式引擎优化 (GEO) 时代，更是决定产品能否被诸如 Amazon Rufus 等 AI 购物助手准确抓取和推荐的底层标签。
* **Display Ads Amount (展示型广告花费):**
  * **数据价值：** 漏斗顶部的流量燃料计。结合 GMS 和自然单量，可以计算全局的增量 ROAS，评估品牌曝光策略的真实转化效率。
* **Year & Month:**
  * **数据价值：** 时间序列的 X 轴。是构建同比 (YoY)、环比 (MoM) 趋势看板，以及训练销量预测模型不可或缺的特征值。
* **Manufacturer / Vendor / Company (Code & Name):**
  * **数据价值：** 实体身份标识。对于多账号、多供应商代码运营的矩阵体系，这些字段用于在 ERP 或后端系统中实现账单和库存的精准隔离与分发。

VC成本利润表

https://gemini.google.com/app/820eb5b26033b1f5

我读取了你的 Excel：工作表 **VC** 只有 1 行表头，共 **32 个字段**，没有明细数据。所以我先按字段字典方式整理：**字段含义、业务价值、公式/校验、异常判断**。我也做成了一个可直接给团队使用的 Excel 字段字典：

下载：亚马逊VC字段字典\_2025VendorData.xlsx

说明：VC 财务字段是 **Amazon 1P / Vendor Central 零售视角**，不是 Seller Central 的店铺利润口径。比如 PCOGS、PPM、CP、CM 更多是 Amazon 作为零售商判断这个 ASIN 是否赚钱的指标。公开资料里，ARA/VC 常见指标包括 Shipped Revenue、Shipped COGS、Shipped Units、Customer Returns 等；PCOGS 通常指 Product Cost of Goods Sold；Net PPM 是 Amazon 判断 Vendor 商品盈利能力的重要指标。([Amalytix](https://www.amalytix.com/en/knowledge/controlling/amazon-retail-analytics-ara/?utm_source=chatgpt.com))

## 一、字段整体分类

你的表头可以分成 6 类：

1. **时间维度**：Year、Month
2. **类目维度**：GL Family、GL Product Group、Product Category Code、Subcategory Code
3. **商品维度**：ASIN、Item Name
4. **供应商/公司维度**：Manufacturer Code、Vendor Code、Company Code 等
5. **销售收入指标**：Product GMS、Revenue Share Amount、Shipped Units、Net Shipped Units
6. **成本利润指标**：PCOGS、CP、CPPU、CM、PPM、CPLF、Shipping Cost、Inbound Freight、FC Cost、Display Ads Amount 等

## 二、每个字段含义与价值

| **字段** | **中文含义** | **核心价值** |
|:---:|:---:|:---:|
| **Year** | 年份 | 做年度同比、年度 Vendor 谈判、全年利润复盘。 |
| **Month** | 月份 | 做月度趋势、旺季淡季、补货节奏、利润波动分析。 |
| **GL Family** | Amazon 内部大类族群 | 用于按大类看销售、利润和成本，不同 GL 的盈利要求可能不同。 |
| **GL Product Group** | Amazon 内部产品组 | 比 GL Family 更细，用于类目经理/VM 看产品组表现。 |
| **Product Category Code** | 产品类目代码 | 系统建模、类目聚合、BI 透视的分类主键。 |
| **Product Subcategory Code** | 产品子类目代码 | 找具体细分类目增长、亏损或退款问题。 |
| **ASIN** | 商品唯一识别码 | 所有销售、利润、广告、退款、物流分析的核心主键。 |
| **Manufacturer Code** | 制造商代码 | 区分不同制造商、工厂、品牌主体。 |
| **Vendor Code** | VC 供应商代码 | Amazon 向供应商采购/下 PO 的核心编码。一个 ASIN 多 Vendor Code 时，要看是否多合同价或多供货主体。 |
| **Item Name** | 商品名称 | 方便人工识别 ASIN、规格、套装、产品线。 |
| **Manufacturer Name** | 制造商名称 | 按制造商维度分析销售和利润表现。 |
| **Company Name** | 公司名称 | 多公司、多账号、多主体汇总时使用。 |
| **Company Code** | 公司代码 | 比 Company Name 更稳定，适合做系统主键。 |
| **Product Category Description** | 产品类目描述 | 解释 Product Category Code，便于人工阅读。 |
| **Product Subcategory Description** | 产品子类目描述 | 解释 Product Subcategory Code，便于精细化类目分析。 |
| **PCOGS($)** | Product Cost of Goods Sold，Amazon 采购商品成本金额 | 判断 Amazon 买入成本压力，是 PPM、CP、CM 的核心成本项。PCOGS 通常可理解为 Amazon 卖出商品对应的采购成本，不等于你的工厂生产成本。([Amazon & Marketplace SOPs](https://wiki.amazowl.com/sop/amazon-foundations/PCOGS?utm_source=chatgpt.com)) |
| **CP($)** | 通常指 Contribution Profit，贡献利润金额 | 判断 Amazon 经营这个 ASIN 是否赚钱。CP 为负，说明该 ASIN 对 Amazon 可能亏损。 |
| **CPPU** | Contribution Profit Per Unit，单件贡献利润 | 比 CP 更适合比较不同销量 ASIN 的单件盈利能力。公开术语资料也把 CPPU 解释为 Contribution Profit Per Unit。([Consulterce](https://consulterce.com/insights/amazon-glossary?utm_source=chatgpt.com)) |
| **CM** | Contribution Margin，贡献利润率 | 用来判断商品盈利质量。销售额高但 CM 低，说明增长质量差。 |
| **PPM** | Pure Product Margin，纯商品毛利率 | 主要看 Amazon 买入价和卖出价之间的基础毛利空间；通常不完整包含履约、广告、退货等成本。PCOGS、PPM、Net PPM 是 Vendor 端非常核心的利润概念。([Amazowl](https://www.amazowl.com/courses/amazon-ecosystem-and-terminology/lessons/2-advertising-and-reporting/topic/pcogs-ppm-and-net-ppm/?utm_source=chatgpt.com)) |
| **Product GMS($)** | Product Gross Merchandise Sales，商品成交额/商品销售额 | 衡量商品销售规模，是 ASP、毛利率、广告占比的分母基础。 |
| **Revenue Share Amount($)** | 收入分摊金额 | 这个字段不同导出口径可能不同，建议不要直接等同于 Product GMS；通常用于还原 Amazon 内部 P&L 收入口径或收入分摊口径。 |
| **CM ex Ads** | Contribution Margin excluding Ads，不含广告影响的贡献利润 | 用于判断商品本身是否赚钱，还是广告花费把利润吃掉。 |
| **CPLF** | Cost Price Less Freight，扣除/不含运费影响后的成本价口径 | 用于把商品采购成本和 freight 成本拆开看。 |
| **Shipped Unites** | 应为 Shipped Units，已发货件数 | 衡量真实履约后的销量。表头里 Unites 是拼写错误，建议改成 Units。 |
| **Refund Revenue Amount** | 退款收入金额/退款冲减金额 | 判断售后损失、退货、质量问题、页面预期问题。 |
| **Shipping Cost** | 配送/运输成本 | 低客单价、重货、大件商品的利润杀手。 |
| **Net Shipped Units** | 净发货件数 | 通常是在 Shipped Units 基础上扣除退货/调整后的净销量，更适合作为单位利润分母。 |
| **Inbound Freight** | 入仓运输成本 | 判断从供应商到 Amazon FC 或指定节点的入仓成本。 |
| **Warehouse Deals-Other Cost** | Warehouse Deals/其他库存处理成本 | 常与退货后二次销售、开箱、折价销售、库存处理损耗有关。 |
| **FC Cost** | Fulfillment Center Cost，运营中心处理成本 | 反映仓内拣货、打包、处理等履约成本。 |
| **Display Ads Amount** | 展示广告金额 | 判断广告投入对利润的影响。Amazon 官方说明 Vendor advertiser 可以用 Vendor Central/Advantage Central 注册并选择广告类型、产品、竞价和预算。([Amazon Ads](https://advertising.amazon.com/library/guides/vendors?utm_source=chatgpt.com)) |

## 三、最核心的 VC 利润分析公式

1. ### 基础销售公式

```
ASP = Product GMS($) / Shipped Units
```

作用：看前台平均成交价。

如果 ASP 下降但销量上升，要判断是不是低价促销拉动，是否牺牲了 PPM 和 CM。

2. ### 商品采购成本

```
单位采购成本 ≈ PCOGS($) / Shipped Units
```

作用：判断 Amazon 买入这个商品的成本。

如果 PCOGS 占 GMS 过高，Amazon 的基础买卖毛利空间会变差。

3. ### PPM 纯商品毛利率

```
PPM ≈ (Revenue 或 Product GMS - PCOGS) / Revenue 或 Product GMS
```

作用：判断商品基础毛利空间。

PPM 低，通常说明：供货价高、前台售价低、价格匹配、促销折扣过重。

4. ### CP 单品贡献利润

```
CP = 收入 - PCOGS - 物流/履约/退款/其他可变成本
```

作用：判断 Amazon 卖这个 ASIN 最终是否有贡献利润。

CP 为负时，Amazon 可能会涨价、降低采购、要求 funding，严重时存在 CRaP 风险。

5. ### CPPU 单件贡献利润

```
CPPU = CP($) / Net Shipped Units
```

作用：比 CP 更适合比较不同销量 ASIN。

比如一个 ASIN 总 CP 高，可能只是因为销量大；CPPU 才能看单件是否健康。

6. ### CM 贡献利润率

```
CM = CP($) / Revenue 或 Product GMS
```

作用：判断盈利质量。

高 GMS + 低 CM = 规模大但利润差；低 GMS + 高 CM = 可考虑加广告/促销测试放量。

7. ### 广告前后利润判断

```
广告占比 = Display Ads Amount / Product GMS
```

判断逻辑：

```
如果 CM ex Ads 好，但 CM 差：
说明商品本身可以，广告投放拖累利润。

如果 CM ex Ads 也差：
说明商品经济模型本身不成立，要先改售价、供货价、包装尺寸、物流、退款。
```

## 四、VC 字段真正的业务价值

这张表不是普通销售表，而是一个 **Amazon 视角的 ASIN P&L 表**。它可以回答 5 个关键问题：

1. ### Amazon 是否愿意继续采购这个 ASIN？

核心看：

```
Product GMS
PCOGS
PPM
CP
CPPU
CM
Net Shipped Units
```

如果销售额高但 CP/CM 低，Amazon 可能认为这个 ASIN “卖得多但不赚钱”。

2. ### 这个 ASIN 是价格问题、成本问题，还是广告问题？

拆法：

```
PPM 低：采购价/前台售价问题
CM ex Ads 低：商品本身经营模型差
CM ex Ads 好但广告后差：广告投放拖累
Shipping / FC / Inbound 高：物流履约成本问题
Refund 高：质量、包装、页面预期问题
```

3. ### 哪些 ASIN 适合放量？

优先找：

```
Product GMS 有增长
PPM 稳定
CP > 0
CPPU > 0
CM 健康
Refund 低
Shipping/FC 成本可控
```

这些 ASIN 才适合加广告、加库存、谈资源位、做促销。

4. ### 哪些 ASIN 需要止损？

重点看：

```
CP < 0
CPPU < 0
CM < 0
PPM 很低
退款率高
物流成本/FC 成本过高
广告花费高但利润没改善
```

这类 ASIN 不应该盲目打广告，应该先修利润模型。

5. ### 年度 Vendor 谈判怎么用？

可以按 Vendor Code、GL Product Group、ASIN 聚合：

```
销售贡献
PPM 贡献
CP 贡献
退款损失
物流成本
广告投入
低利润 ASIN 清单
高利润可放量 ASIN 清单
```

这就是跟 Amazon VM 谈 **供货价、COOP、funding、促销、包装、补货策略** 的基础数据。

把一份沉睡在 Excel 里的 Vendor 报表，抽象成一个自动化的 SaaS 产品，这正是从“业务操作者”向“系统架构者”跨越的最爽瞬间。

做 SaaS 切忌一上来就铺大摊子。按照精益创业的逻辑，我们第一步应该是**先打磨出一个跑得通的、能立刻创造利润护城河的核心 Agent（单点跑通）**，等跑出正向现金流，再去构建更大一盘棋的完整生态。

基于你提供的 VC 字段，我们可以将这个 SaaS 命名为 **"VendorOS"**（或你正在构建的平台级代号）。前端 UI 建议保持极简的科技蓝调，去掉冗余的图表，只透传最核心的决策数据。

以下是整个 SaaS 的架构蓝图与核心业务流：

### 一、 SaaS 顶层架构蓝图 (Technical Architecture)

这套系统不仅仅是“看数据”，而是要“做动作”。底层可以使用 Go 处理高并发的数据流，Node.js 负责前端接口，配合工作流编排工具实现自动化流转。

1. **数据基座 (Data Layer):**
   1. **接口源:** 对接 Amazon Vendor API (或解析 EDI 数据)、广告 API。
   2. **数据主键:** 以 `ASIN` + `GL Product Group` 为核心，串联所有供应链与财务数据。
2. **编排引擎 (Workflow Layer):**
   1. 使用类似 **n8n** 这样的工具作为中央总线。定时抓取 PCOGS、CM 等数据，当某个字段（如退款额）触发阈值时，自动执行分支逻辑（如发飞书/Telegram 预警）。
3. **智能体中心 (Agentic Layer):**
   1. 接入大模型（通过类似 **Dify** 的平台封装）。针对复杂的业务场景（例如退款率超标），Agent 自动抓取亚马逊 VOC (客户原声)，结合历史成功经验，直接输出一套应对安灯 (Andon Cord) 风险的 POA (行动计划) 草稿。
4. **展示与决策层 (Presentation Layer):**
   1. **Next.js** 构建的轻量级管理后台。不堆砌报表，只给行动指令。

### 二、 SaaS 核心模块划分与字段重构

我们将 Excel 里的 32 个字段，解构并重组为四大核心 SaaS 模块：

1. #### 利润与生存雷达 (Profitability & CRaP Radar)

这是 MVP (最小可行性产品) 阶段最该优先上线的模块。亚马逊 VC 的核心痛点是“卖得越多，亏得越惨”，这个模块专门拦截亏损。

* **核心输入字段:** `PCOGS`, `CPPU`, `Shipping Cost`, `FC Cost`
* **引擎自动计算:** `PPM`, `CM`, `CM ex Ads`
* **SaaS 动作:**
  * **CRaP 预警器:** 当系统侦测到某 ASIN 的 `CM` 逼近 10% 红线，立刻触发高危预警，提示运营“该产品即将被亚马逊停止采购”。
  * **广告输血诊断:** 如果 `CM` 为正，但 `CM ex Ads` 为负，系统自动标记“虚假繁荣”，并建议调用 API 削减低效 Display Ads Amount。

2. #### 供应链损耗扫描仪 (Supply Chain Leakage Scanner)

吃掉 VC 利润的往往是水面下的物流和履约成本。

* **核心输入字段:** `Inbound Freight`, `FC Cost`, `Warehouse Deals-Other Cost`, `Shipped Units`
* **引擎自动计算:** `CPLF` (扣减运费后成本)、单件仓储操作费。
* **SaaS 动作:**
  * **包装优化建议:** 追踪 `FC Cost` 的环比涨幅。如果某 ASIN 的操作费异常升高，系统提示“可能遭遇亚马逊错误测量”，生成开 Case 申诉重测的任务单。
  * **退换货残值评估:** 计算二手仓损耗 (`Warehouse Deals`)，倒推工厂端是否需要改进品控。

3. #### 流量与基本面看板 (Market Share & Performance)

不看虚荣指标，只看真实的终端吞吐量。

* **核心输入字段:** `Product GMS`, `Net Shipped Units`, `Display Ads Amount`
* **SaaS 动作:**
  * 结合 GL 分类代码，宏观监控不同产品线的真实转化。以 `Net Shipped Units` 作为唯一分母，计算单件获取成本 (CPA) 和真实的流量转化率。

4. #### 智能风控与合规中心 (Risk Control & Compliance)

应对亚马逊重拳出击的“安全气囊”。

* **核心输入字段:** `Refund Revenue Amount`, `Net Shipped Units`
* **SaaS 动作:**
  * **防拉绳 (Andon Cord) 机制:** 实时计算退款率。对于带电类或高单价硬件，一旦退款率突增，系统自动阻断补货计划，并调取 Dify 智能体，分析买家评论，生成退货归因报告与合规改善计划 (POA) 备用。