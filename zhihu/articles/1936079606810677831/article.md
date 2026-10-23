# VC  NET PPM讨论 20250805

Source: https://zhuanlan.zhihu.com/p/1936079606810677831

VC NET PPM讨论

![](https://pica.zhimg.com/v2-eca85154a6bc47e4e7395b4439d66a06_1440w.jpg)

不促销的情况：(List price-cost price+佣金扣点\*cost price）/List price

即

德国=(66.66-55.85+19.45%\*55.85）/66.66 =32.51%（不含税66.66）

德国=(79.99-55.85+19.45%\*55.85）/79.99 =43.75%（含税79.99）

德国 cost price=55.85 list price=79.99 （不含税66.66）

法国 cost price=58 list price=84.99 （不含税70.83）

意大利cost price=58.8 list price=84.99 （不含税70.83）

西班牙cost price=59.35 list price=84.99 （不含税70.83）

英国cost price=55.3 list price=79.99 （不含税66.66）

**促销的情况：(促销后的List price-cost price+促销funding+佣金扣点\*cost price）/促销后的List price**

**即**

**德国BD=(67.99-55.85+12+19.45%\*55.85）/67.99 =51.48%（含税促销后67.99）**

德国BD=(57.13-55.85+12+19.45%\*55.85）/57.13 =42.26%（不含税促销后57.13）

亚马逊VC官方①商品成本，②促销funding, ③销售折扣

④其他物流成本（转运费仓储费退货处理费）

analysing net pure product margin or net PPM. Net PPM measures product profitability after cost of goods, vendor funding, and sales discounts are taken into account.

分析产品净利润率或净PPM。净PPM是指在扣除商品成本、VC的促销funding和销售折扣后的纯利润率，是衡量产品盈利情况的重要指标。净PPM在 考虑了商品成本、供应商资金和销售折扣后衡量产品的盈利能力。

![](https://pica.zhimg.com/v2-7e0296c4f51ef03431c5410597ffcfd0_1440w.jpg)

PO条件下NET PPM是40%, DF条件下是35%

Net PPM=前台毛利+Term协议返点，

前台毛利=list price-costs（建议零售价-所有供货成本）包括销售discount

Term协议返点=(COOP+DA+Freight+QP)\*Costs

COOP:营销费用，DA:不良率defect Allowance, freight:转运费，

官方原文

### Amazon Retail Analytics

Amazon Retail Analytics (ARA) is a set of dashboards that let you analyze sales and operational data, such as your revenue and inventory levels. Amazon Brand Analytics (ABA) is a set of dashboards that let you analyze your customers’ buying and search behavior. You can access ARA and ABA through the **Reports** menu.

All vendors have access to ARA, including manufacturers and authorized resellers. Brand Registry enrollment is not required for ARA.

For access to ABA, you must be enrolled in Brand Registry and be responsible for selling the brand in the Amazon store.

For a glossary of metrics included in the ARA dashboards, go to the [Amazon Retail Analytics metric glossary.](https://link.zhihu.com/?target=https%3A//vendorcentral.amazon.eu/hz/vendor/members/support/help/node/G201826990)

### General dashboard information

[https://vendorcentral.amazon.eu/hz/vendor/members/support/help/node/GWFN9PHZTGK54F8F](https://link.zhihu.com/?target=https%3A//vendorcentral.amazon.eu/hz/vendor/members/support/help/node/GWFN9PHZTGK54F8F)

**Difference between Manufacturing view and Sourcing view**

All vendors have access to Sourcing views, which will show the sales data for ASINs that are sourced from a vendor code in the vendor group. If you are a manufacturer, you will also have access to the Manufacturing view, which shows data for any ASIN manufactured by you, regardless of who sourced the product to Amazon.

The Traffic, Net Pure Product Margin (PPM), and Forecasting dashboards are only displayed to manufacturers.

The Program view (retail) includes all other selling programs such as Amazon Business and Amazon Fresh.

Access to views of Amazon programs, such as Business and Fresh, are managed by vendor group permissions.

If you believe you should have access to any of the views mentioned above, you can contact us to request access.

**ARA data**

Reports may take up to a week to populate data after a reporting periods closes. We aim to update all weekly reports within 72 hours and are continuously improving our system to get your reports to you faster.

To see trailing time period options, select **Trailing** in the **Time frame** drop-down menu. To see prior period, select **Show additional filters**. Trailing time period options include trailing 4 weeks, 13 weeks, and 12 months.

To see recurring time period options, select **Recurring** in the **Time frame** drop-down menu. To see year over year, select **Show additional filters**. Recurring time period options include year to date, quarter to date, month to date, and week to date.

**Lost buy box (LBB)**

LBB is no longer supported by the pricing team, and we can’t provide an LBB metric in ARA until an effective replacement metric is available. An alternative metric, Lost featured offer (LFO), is in development, but we can’t provide guidance as to when that metric will be available.

**Conversion and average sale prices**

Conversion and average sale prices (ASP) are derived metrics, meaning that they can be calculated using other metrics already provided in the sales dashboard. Conversion means the number of ordered units divided by glance views. ASP means the amount of shipped revenue divided by shipped units

### Troubleshooting

**Missing ASINs in the dashboard**

This can be due to one or a combination of the following reasons:

- **Distributor view:** Ensure that you have selected the proper Distributor view selection. The Manufacturing view shows data for ASINs manufactured by you, regardless of who sourced the products to Amazon. The Sourcing view shows only the data of ASINs sourced directly from a vendor code in your vendor group.
- **No data in time period:** An ASIN must have data for at least one of the metrics in a given dashboard for the selected time period being viewed in order for it to appear in that dashboard. For example, an ASIN with inventory will appear in the Inventory dashboard, but may not appear in the Sales dashboard if no sales occurred for that ASIN in the selected timeframe.
- **ASIN mapping:** Vendor hierarchy and ASIN catalog attribute setup impact how ASINs are mapped to ARA reports. ASINs not properly mapped to ARA may appear to be missing from reports. Once mapping is corrected, it may take up to 14 days to reflect in the dashboards. For troubleshooting help with data issues related to ASIN mapping, vendor hierarchy, or catalog attributes, reach out to your retail partner or open a Contact Us case.

**Unowned ASINs in the dashboard**

This is likely due to an ASIN mapping issue. ASINs not properly mapped to ARA via proper vendor hierarchy, ASIN catalog attributes, and vendor group setup may cause an ASIN to inaccurately populate in ARA dashboards. For troubleshooting help with issues related to ASIN mapping, reach out to your retail partners or open a Contact Us case and request ASIN mapping assistance.

**Data does not match the data surfaced by the vendor manager or account manager**

There is ASIN-level data parity between ARA and the internal tools used by your retail partners. For questions on reporting that you receive from your retail teams, reach out to your retail partner or open a Contact Us case.

**Only some users see a particular dashboard, while others can’t**

Users who are not administrators must have the "FinancialReports" task-based role enabled in order to access the Inventory dashboard. Admins will already have all rights enabled by default. Only an Admin can enable or disable a non-admin’s rights.

### Forecasting dashboard

The Forecasting dashboard lets you identify the customer demand for your products for production and inventory planning purposes. The Forecasting dashboard provides a forecast for customer demand, but is not a promise of purchase orders.

**Meaning of the different P-levels**

The forecasting system produces forecasts for an ASIN at various confidence levels, or critical ratios (CR). If you are setting a CR of .80, a.k.a. "P80," it means there is 80% probability that the ASIN will be in stock for the buying horizon. A higher CR or P-level means more buffer stock.

**Vendor purchase orders don’t align with the unit forecast in the Forecasting dashboard**

The forecast report provides a forecast for unconstrained customer demand, which is not a promise of purchase orders. If there are already on-hand or on-order units available to cover customer demand, for example, this would be accounted for when the system issues purchase orders.

### Inventory dashboard

The Inventory dashboard lets you monitor the health of your product inventory through weekly updates. You can quickly identify and respond to unfavorable trends.

**Sellable on-hand units calculation**

In the Inventory dashboard, sellable on-hand units refers to the physical condition of the product as recorded in our inventory, before we account for any outbound units such as customer shipments, transfers, or removals. Sellable inventory does not necessarily mean that it is available for sale on the Amazon website, only that it is not considered defective.

**Unable to see inventory metrics at the daily grain**

Not all metrics included in the Inventory dashboard are available at the daily granularity, so the option has been removed.

**Out of stock (OOS) metric is not replenishable OOS (Rep OOS)**

ARA surfaces procurable product OOS (ROOS). While Rep OOS considers only replenishable ASINs, ROOS considers procurable ASINs. Since the ASIN cohort is larger for ROOS vs. Rep OOS, in most cases, ROOS will be a lower percentage than Rep OOS.

**I can’t see ROOS or unfilled customer order units in Sourcing view**

This is expected behavior, as the data from ROOS and unfilled customer order units are only available for manufacturing vendors. This is ASIN-level data that cannot be attributed to a specific vendor.

**Viewing Amazon Fresh (F3) sales**

Access to Amazon Fresh views must be enabled by your internal retail partner.

### Net PPM dashboard

The Net PPM dashboard lets you identify which products are driving profitability up or down by analyzing net pure product margin (Net PPM). Net PPM measures product profitability after cost of goods, vendor funding, and sales discounts are taken into account.

Net pure product margin (PPM) is calculated as shipped revenue minus shipped PCOGS + CCOGS (cost of goods) minus sales discounts, then divided by shipped revenue.

**Unable to see the Net PPM dashboard**

The Net PPM dashboard is typically only displayed to manufacturers. Reach out to your retail partners or open a Contact Us case if you believe you should have access to the Net PPM dashboard.

**Warehouse Deals sales not included in the Net PPM metric**

Brand Analytics (including ARA) does not include Warehouse Deals sales in its metrics. Since proceeds from Warehouse Deals sales are not collected by the vendor, we do not account for these transactions. The internal tools used by your retail partners may be inclusive of Warehouse Deals sales. For questions on whether Warehouse Deals sales are included in your internal metrics, reach out to your retail partners or open a Contact Us case.

### Sales dashboard

The Sales dashboard lets you quickly identify opportunities by determining what is contributing to sales performance.

**Unable to see Manufacturing view for the Sales dashboard, only the Sourcing view**

All vendors will have access to the Sourcing view of the sales report, which will show the sales data for ASINs (with a product cost) that have an offer from a vendor code listed in the vendor group. If the vendor is a manufacturer, they will have access to the Manufacturing view, which shows ASIN-level data for any ASIN manufactured by the vendor code designated as the manufacturing role in the vendor group. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners if you believe you should have access to the Manufacturing view or open a Contact Us case.

**Warehouse Deals sales are not included in sales metrics**

ARA does not include Warehouse deals in reported metrics. Since proceeds from Warehouse deals sales are not collected by the vendor, we do not account for these transactions. The internal tools used by your retail partners may be inclusive of Warehouse Deals sales. For questions on whether Warehouse Deals sales are included in your internal metrics, reach out to your retail partners or open a Contact Us case.

**Customer returns and free replacements are accounted for in shipped units and revenue**

ARA accounts for customer returns and free replacements in shipped units and revenue.

**The date that customer returns and cancellations are attributed to**

Customer returns and cancellations are applied to ordered revenue based on the original date of the sale.

**Seeing Amazon Business (B2B) and Amazon Fresh (F3) sales**

Access to views of other Amazon Programs, such as B2B and F3, are enabled via vendor group rights. Reach out to your retail partners or open a Contact Us case if you believe you should have access to these views.

### Traffic dashboard

The Traffic dashboard lets you quickly identify changes in relevant traffic related metrics.

**Unable to access the Traffic dashboard**

If the vendor is a manufacturer, they will have access to the Manufacturing view, which shows ASIN-level data such as traffic, Net PPM, and forecasting, for any ASIN manufactured by the vendor code designated as the manufacturing role in the vendor group. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners or open a Contact Us case if you believe you should have access.

**Defining a glance view**

Glance views (GVs) measure customer traffic and are defined by the number of views to the product detail page.

**How glance views are calculated in Brand Analytics**

In Brand Analytics reporting, GVs are calculated at the ASIN-level, and only when Retail is the featured seller (that is, has the featured offer on the product detail page). By exposing raw GVs when Retail is the featured seller, we provide vendors with the traffic data where Retail had the opportunity to convert a sale.

**The glance view metric in Brand Analytics doesn’t match Advertising reports**

Glance view metrics can vary based on the reporting tool used, and the specific inputs or filters applied to those metrics. For example, Advertising tracks impressions and clicks to evaluate the efficacy of an ad taking the shopper to the shelf (that is, all detail page views). On the other hand, Brand Analytics tracks customer traffic to a detail page where the vendor has had the opportunity to convert a sale. Glance view metrics may vary across reporting tools.

**Using glance views to calculate conversion**

Conversion is the percentage of times a glance view was converted into a sale. It is a derived metric that is calculated by dividing ordered revenue by glance views.

### Catalog dashboard

The Catalog dashboard lets you monitor catalog quality by instantly accessing the latest catalog details for your products.

**Accessing the Catalog dashboard**

This dashboard is available to all vendors and users with access to ARA regardless of additional permissions. Vendors will have access to select the Manufacturing view in addition to the Sourcing view only if the vendor is a manufacturer. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners if you believe you should have access to the Manufacturing view, or open a Contact Us case.

**Why only some people see the Manufacturing view in the Catalog dashboard, while others can’t**

All users will have access to the Sourcing view option if they have access to ARA. Users who are not administrators must have the Financial Reports task-based role enabled in order to access the Manufacturing view of the Catalog dashboard. Admins will already have all rights enabled by default. Only an admin can enable or disable a non-admin’s rights.

**Catalog dashboard update frequency**

The report will update with the most recent available ASIN attribute data and display to the user the most recent date the report was updated. There is no date selection available.

### Worldwide Sales dashboard

The Worldwide Sales dashboard provides a consolidated view of your worldwide sales data across all Amazon stores where your products are sold. This tab is currently available for vendors enrolled in Global Procurement Entity (GPE). Use the **Vendor code** column to view your store mix.

The dashboard enhances your view of Worldwide sales with the following columns (in addition to others):

- Vendor code: Indicates what vendor code the ASIN is tied to, give you visibility into your sourcing channel mix (for example, domestic, GPE, or dropship)
- Store code: The country in which an item is sold
- Destination country: The country the item is shipped to when a customer places an order

**Notes**:

- To verify or change your vendor code in the dashboard, work with your GPE contact.
- Poland store code will show as Germany. The data point used to map store code is warehouse ID. Because the Poland warehouse is in Germany, the store code shows-up as Germany.

The Worldwide Sales dashboard also includes metrics such as shipped revenue and shipped units, which indicate the revenue and number of units shipped to customers.

Unlike the Sales dashboard, Worldwide Sales does not include ordered revenue or ordered units, which are slightly different from shipped metrics, because they’re calculated when a customer orders a product instead of when the product is shipped. With the addition of shipped revenue and units, you have a comprehensive view of ASIN-level performance.

Unlike the Sales dashboard, the Worldwide Sales dashboard does not include a program drop-down and only shows manufacturer data (not sourcing).

直译

亚马逊零售分析（Amazon Retail Analytics，ARA）是一套仪表板，允许您分析销售和运营数据，例如您的收入和库存水平。亚马逊品牌分析（Amazon Brand Analytics，ABA）是一套仪表板，允许您分析客户的购买和搜索行为。您可以通过“报告”菜单访问ARA和ABA。

所有供应商都可以访问ARA，包括制造商和授权经销商。ARA不需要品牌注册。

要访问ABA，您必须注册品牌注册，并对在亚马逊商店销售该品牌负责。

要查看包含在ARA仪表板中的指标词汇表，请参阅亚马逊零售分析指标词汇表。

通用仪表板信息

制造视图与采购视图的区别

所有供应商都可以访问采购视图，这些视图将显示从供应商组中的供应商代码采购的ASIN的销售数据。如果您是制造商，您还将获得制造视图的访问权限，该视图显示您制造的任何ASIN的数据，无论谁将产品采购到亚马逊。

流量、纯产品利润率（PPM）和预测仪表板仅显示给制造商。

项目视图（零售）包括所有其他销售项目，如亚马逊商务和亚马逊生鲜。

对亚马逊项目（如商务和生鲜）视图的访问由供应商组权限管理。

如果您认为您应该能够访问上述任何视图，您可以联系我们请求访问。

ARA数据

报告在报告期结束后可能需要长达一周的时间来填充数据。我们旨在在72小时内更新所有周报，并持续改进我们的系统，以便更快地将报告提供给您。

要查看滞后时间段选项，请在时间框架下拉菜单中选择“滞后”。要查看先前时间段，请选择“显示其他过滤器”。滞后时间段选项包括滞后4周、13周和12个月。

要查看重复时间段选项，请在时间框架下拉菜单中选择“重复”。要查看同比，请选择“显示其他过滤器”。重复时间段选项包括年初至今、季度至今、本月至今和本周至今。

丢失的购买框（LBB）

定价团队不再支持LBB，在我们提供有效的替代指标之前，我们无法在ARA中提供LBB指标。一个替代指标，丢失的特色报价（LFO），正在开发中，但我们无法提供该指标何时可用的指导。

转化率和平均销售价格

转化率和平均销售价格（ASP）是派生指标，这意味着它们可以使用销售仪表板中已经提供的其他指标进行计算。转化率是指订购单位数除以浏览量。ASP是指运费收入除以运费单位数。

故障排除

仪表板中缺少ASIN

这可能是由于以下一个或多个原因：

分销商视图：确保您已选择了正确的分销商视图选择。制造视图显示您制造的ASIN的数据，无论谁将产品采购到亚马逊。采购视图仅显示直接从您供应商组中的供应商代码采购的ASIN的数据。

时间段内没有数据：一个ASIN必须在给定仪表板中选定的时间段内至少有一个指标的数据，才能出现在该仪表板中。例如，一个有库存的ASIN将出现在库存仪表板中，但如果在选定的时间范围内该ASIN没有发生销售，则可能不会出现在销售仪表板中。

ASIN映射：供应商层次结构和ASIN目录属性设置会影响ASIN如何映射到ARA报告。未正确映射到ARA的ASIN可能看起来会从报告中缺失。一旦映射得到纠正，最多可能需要14天才能在仪表板中反映出来。对于与ASIN映射、供应商层次结构或目录属性相关的数据问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

仪表板中未拥有的ASIN

这可能是由于ASIN映射问题。未通过正确的供应商层次结构、ASIN目录属性和供应商组设置正确映射到ARA的ASIN可能导致ASIN在ARA仪表板中不准确地显示。对于与ASIN映射相关的问题，请联系您的零售合作伙伴或打开一个“联系我们”案例并请求ASIN映射帮助。

数据与供应商经理或账户经理呈现的数据不匹配

ARA与您的零售合作伙伴使用的内部工具之间存在ASIN级别的数据一致性。对于您从零售团队收到的报告问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

只有一些用户可以看到特定的仪表板，而其他人看不到

非管理员用户必须启用“财务报告”基于任务的角色才能访问库存仪表板。管理员默认已启用所有权限。只有管理员可以启用或禁用非管理员用户的权限。

预测仪表板

预测仪表板让您能够识别客户对您产品的需求，以用于生产和库存规划。预测仪表板提供了客户需求的预测，但不是采购订单的承诺。

不同P级别的含义

预测系统以不同的置信水平或关键比率（CR）为ASIN生成预测。如果您设置CR为0.80，即“P80”，这意味着ASIN在购买时间范围内有80%的概率有库存。更高的CR或P级别意味着更多的缓冲库存。

供应商采购订单与预测仪表板中的单位预测不一致

预测报告提供了无约束客户需求的预测，这不是采购订单的承诺。如果已经有可供满足客户需求的现货或订单单位，例如，这将在系统发出采购订单时予以考虑。

库存仪表板

库存仪表板让您能够通过每周更新监控您产品库存的健康状况。您可以快速识别和应对不利趋势。

可销售现货单位计算

在库存仪表板中，可销售现货单位是指我们库存中记录的产品物理状况，在我们考虑任何出库单位（如客户发货、转移或移除）之前。可销售库存不一定意味着它在亚马逊网站上可供销售，只是意味着它不被认为是缺陷产品。

无法查看每日粒度的库存指标

库存仪表板中包含的所有指标并非都提供每日粒度，因此该选项已被删除。

缺货（OOS）指标是不可补充的缺货（Rep OOS）

ARA显示可采购产品缺货（ROOS）。虽然Rep OOS仅考虑可补充的ASIN，但ROOS考虑可采购的ASIN。由于ROOS的ASIN群体比Rep OOS更大，在大多数情况下，ROOS将是一个比Rep OOS更低的百分比。

我无法在采购视图中看到ROOS或未完成的客户订单单位

这是预期行为，因为ROOS和未完成的客户订单单位的数据仅对制造供应商可用。这是无法归因于特定供应商的ASIN级别数据。

查看亚马逊生鲜（F3）销售

访问亚马逊生鲜视图必须由您内部的零售合作伙伴启用。

净PPM仪表板

净PPM仪表板让您能够通过分析净纯产品利润率（净PPM）来识别哪些产品推动了利润的增长或下降。净PPM在考虑了商品成本、供应商资金和销售折扣后衡量产品盈利能力。

净纯产品利润率（PPM）的计算方法是：运费收入减去运费PCOGS + CCOGS（商品成本）减去销售折扣，然后除以运费收入。

无法查看净PPM仪表板

净PPM仪表板通常仅显示给制造商。如果您认为您应该能够访问净PPM仪表板，请联系您的零售合作伙伴或打开一个“联系我们”案例。

仓库交易销售不包括在净PPM指标中

品牌分析（包括ARA）在其指标中不包括仓库交易销售。由于仓库交易销售的收益不由供应商收取，我们不记录这些交易。您的零售合作伙伴使用的内部工具可能包括仓库交易销售。对于您内部指标是否包括仓库交易销售的问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

销售仪表板

销售仪表板让您能够通过确定什么因素影响了销售表现来快速识别机会。

无法查看销售仪表板的制造视图，只能看到采购视图

所有供应商都将获得销售报告的采购视图访问权限，该视图将显示供应商组中列出的供应商代码提供的报价（具有产品成本）的ASIN的销售数据。如果供应商是制造商，他们将获得制造视图的访问权限，该视图显示供应商组中指定为制造角色的供应商代码制造的任何ASIN的ASIN级别数据。启用或禁用此视图将由零售利益相关者负责。如果您认为您应该能够访问制造视图，请联系您的零售合作伙伴或打开一个“联系我们”案例。

仓库交易销售不包括在销售指标中

ARA在其报告的指标中不包括仓库交易。由于仓库交易销售的收益不由供应商收取，我们不记录这些交易。您的零售合作伙伴使用的内部工具可能包括仓库交易销售。对于您内部指标是否包括仓库交易销售的问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

客户退货和免费更换计入运费单位和收入

ARA将客户退货和免费更换计入运费单位和收入。

客户退货和取消的归属日期

客户退货和取消是根据销售的原定日期应用于已订购收入的。

查看亚马逊商务（B2B）和亚马逊生鲜（F3）销售

对其他亚马逊项目（如B2B和F3）视图的访问是通过供应商组权限启用的。如果您认为您应该能够访问这些视图，请联系您的零售合作伙伴或打开一个“联系我们”案例。

流量仪表板

流量仪表板让您能够快速识别相关流量相关指标的变化。

无法访问流量仪表板

如果供应商是制造商，他们将获得制造视图的访问权限，该视图显示任何由供应商组中指定为制造角色的供应商代码制造的ASIN的ASIN级别数据，如流量、净PPM和预测。启用或禁用此视图将由零售利益相关者负责。如果您认为您应该能够访问，请联系您的零售合作伙伴或打开一个“联系我们”案例。

浏览量的定义

浏览量（GVs）衡量客户流量，定义为产品详情页的浏览次数。

品牌分析中浏览量的计算

在品牌分析报告中，GVs在ASIN级别计算，并且仅在零售是特色卖家（即在产品详情页上有特色报价）时。通过在零售是特色卖家时公开原始GVs，我们为供应商提供了零售有机会促成销售时的流量数据。

品牌分析中的浏览量指标与广告报告不匹配

浏览量指标可能因使用的报告工具和应用于这些指标的具体输入或过滤器而有所不同。例如，广告跟踪印象和点击以评估广告将购物者带到货架（即所有详情页浏览）的有效性。另一方面，品牌分析跟踪供应商有机会促成销售的产品详情页的客户流量。浏览量指标可能在不同的报告工具中有所不同。

使用浏览量计算转化率

转化率是浏览量转化为销售的百分比。这是一个派生指标，通过将已订购收入除以浏览量计算得出。

目录仪表板

目录仪表板让您能够通过即时访问您产品的最新目录详细信息来监控目录质量。

访问目录仪表板

此仪表板可供所有供应商和具有ARA访问权限的用户使用，无论是否有其他权限。供应商将能够选择制造视图以及采购视图，但仅当供应商是制造商时。启用或禁用此视图将由零售利益相关者负责。如果您认为您应该能够访问制造视图，请联系您的零售合作伙伴或打开一个“联系我们”案例。

为什么只有一些人可以在目录仪表板中看到制造视图，而其他人看不到

所有用户如果具有ARA访问权限，都将具有采购视图选项。非管理员用户必须启用基于任务的财务报告角色才能访问目录仪表板的制造视图。管理员默认已启用所有权限。只有管理员可以启用或禁用非管理员用户的权限。

目录仪表板更新频率

报告将使用最新的可用ASIN属性数据更新，并向用户显示报告上次更新的日期。没有日期选择可用。

全球销售仪表板

全球销售仪表板提供了您在全球所有销售您产品的亚马逊商店中的销售数据的统一视图。此选项卡目前可供注册了全球采购实体（GPE）的供应商使用。使用供应商代码列查看您的商店组合。

仪表板通过以下列（以及其他列）增强了全球销售的视图：

供应商代码：指示ASIN关联的供应商代码，让您了解您的采购渠道组合（例如，国内、GPE或寄售）

商店代码：商品销售的国家

目的地国家：客户下单时商品被运往的国家

注意：

要验证或更改仪表板中的供应商代码，请与您的GPE联系人合作。

波兰的商店代码将显示为德国。用于映射商店代码的数据点是仓库ID。由于波兰的仓库位于德国，因此商店代码显示为德国。

全球销售仪表板还包括运费收入和运费单位等指标，这些指标表示运送给客户的收入和单位数量。

与销售仪表板不同，全球销售不包括已订购收入或已订购单位，因为这些指标与运费指标略有不同，因为它们是在客户订购产品时计算的，而不是在产品发货时。通过添加运费收入和单位，您可以全面了解ASIN级别的表现。

与销售仪表板不同，全球销售仪表板不包括项目下拉菜单，并且仅显示制造商数据（不包括采购）。

问题

语句不通顺：

“ARA数据”部分中“报告在报告期结束后可能需要长达一周的时间来填充数据”中“来填充数据”表达略显生硬，更自然的表达应为“可能需要长达一周的时间填充数据”。

“转化率和平均销售价格”部分中“转化率和平均销售价格（ASP）是派生指标，这意味着它们可以使用销售仪表板中已经提供的其他指标进行计算”中“这意味着”显得多余，可直接说明它们如何计算。

不符合中文表达习惯：

“故障排除”部分中“这可能是由于以下一个或多个原因”中“这”指代不明，应改为“仪表板中缺少ASIN的原因可能包括以下一个或多个方面”。

“无法查看每日粒度的库存指标”中“粒度”一词在中文中较少使用，可改为“无法查看按日统计的库存指标”。

晦涩难懂：

“预测仪表板”部分中“预测系统以不同的置信水平或关键比率（CR）为ASIN生成预测”中“置信水平”和“关键比率”对普通用户来说可能较难理解，建议补充解释，如“置信水平是指预测结果的可靠程度，关键比率是衡量库存安全水平的指标”。

意译

亚马逊零售分析（Amazon Retail Analytics，ARA）

ARA是一套仪表板，允许您分析销售和运营数据，例如您的收入和库存水平。亚马逊品牌分析（Amazon Brand Analytics，ABA）是一套仪表板，允许您分析客户的购买和搜索行为。您可以通过“报告”菜单访问ARA和ABA。

所有供应商都可以访问ARA，包括制造商和授权经销商。ARA不需要品牌注册。

要访问ABA，您必须注册品牌注册，并对在亚马逊商店销售该品牌负责。

要查看包含在ARA仪表板中的指标词汇表，请参阅亚马逊零售分析指标词汇表。

通用仪表板信息

制造视图与采购视图的区别

所有供应商都可以访问采购视图，这些视图将显示从供应商组中的供应商代码采购的ASIN的销售数据。如果您是制造商，您还将获得制造视图的访问权限，该视图显示您制造的任何ASIN的数据，无论谁将产品采购到亚马逊。

流量、纯产品利润率（PPM）和预测仪表板仅显示给制造商。

项目视图（零售）包括所有其他销售项目，如亚马逊商务和亚马逊生鲜。

对亚马逊项目（如商务和生鲜）视图的访问由供应商组权限管理。

如果您认为您应该能够访问上述任何视图，您可以联系我们请求访问。

ARA数据

报告在报告期结束后可能需要长达一周的时间填充数据。我们旨在在72小时内更新所有周报，并持续改进我们的系统，以便更快地将报告提供给您。

要查看滞后时间段选项，请在时间框架下拉菜单中选择“滞后”。要查看先前时间段，请选择“显示其他过滤器”。滞后时间段选项包括滞后4周、13周和12个月。

要查看重复时间段选项，请在时间框架下拉菜单中选择“重复”。要查看同比，请选择“显示其他过滤器”。重复时间段选项包括年初至今、季度至今、本月至今和本周至今。

丢失的购买框（LBB）

定价团队不再支持LBB，在我们提供有效的替代指标之前，我们无法在ARA中提供LBB指标。一个替代指标，丢失的特色报价（LFO），正在开发中，但我们无法提供该指标何时可用的指导。

转化率和平均销售价格

转化率和平均销售价格（ASP）是派生指标，可以直接使用销售仪表板中已经提供的其他指标进行计算。转化率是指订购单位数除以浏览量。ASP是指运费收入除以运费单位数。

故障排除

仪表板中缺少ASIN

仪表板中缺少ASIN的原因可能包括以下一个或多个方面：

分销商视图：确保您已选择了正确的分销商视图选择。制造视图显示您制造的ASIN的数据，无论谁将产品采购到亚马逊。采购视图仅显示直接从您供应商组中的供应商代码采购的ASIN的数据。

时间段内没有数据：一个ASIN必须在给定仪表板中选定的时间段内至少有一个指标的数据，才能出现在该仪表板中。例如，一个有库存的ASIN将出现在库存仪表板中，但如果在选定的时间范围内该ASIN没有发生销售，则可能不会出现在销售仪表板中。

ASIN映射：供应商层次结构和ASIN目录属性设置会影响ASIN如何映射到ARA报告。未正确映射到ARA的ASIN可能看起来会从报告中缺失。一旦映射得到纠正，最多可能需要14天才能在仪表板中反映出来。对于与ASIN映射、供应商层次结构或目录属性相关的数据问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

仪表板中未拥有的ASIN：这可能是由于ASIN映射问题。未通过正确的供应商层次结构、ASIN目录属性和供应商组设置正确映射到ARA的ASIN可能导致ASIN在ARA仪表板中不准确地显示。对于与ASIN映射相关的问题，请联系您的零售合作伙伴或打开一个“联系我们”案例并请求ASIN映射帮助。

数据与供应商经理或账户经理呈现的数据不匹配

ARA与您的零售合作伙伴使用的内部工具之间存在ASIN级别的数据一致性。对于您从零售团队收到的报告问题，请联系您的零售合作伙伴或打开一个“联系我们”案例。

只有一些用户可以看到特定的仪表板，而其他人看不到

非管理员用户必须启用“财务报告”基于任务的角色才能访问库存仪表板。管理员默认已启用所有权限。只有管理员可以启用或禁用非管理员用户的权限。

预测仪表板

预测仪表板让您能够识别客户对您产品的需求，以用于生产和库存规划。预测仪表板提供了客户需求的预测，但不是采购订单的承诺。

不同P级别的含义

预测系统以不同的置信水平或关键比率（CR）为ASIN生成预测。如果您设置CR为0.80，即“P80”，这意味着ASIN在购买时间范围内有80%的概率有库存。更高的CR或P级别意味着更多的缓冲库存。

供应商采购订单与预测仪表板中的单位预测不一致

预测报告提供了无约束客户需求的预测，这不是采购订单的承诺。如果已经有可供满足客户需求的现货或订单单位，例如，这将在系统发出采购订单时予以考虑。

库存仪表板

库存仪表板让您能够通过每周更新监控您产品库存的健康状况。您可以快速识别和应对不利趋势。

可销售现货单位计算

在库存仪表板中，可销售现货单位是指我们库存中记录的产品物理状况，在我们考虑任何出库单位（如客户发货、转移或移除）之前。可销售库存不一定意味着它在亚马逊网站上可供销售，只是意味着它不被认为是缺陷产品。

无法查看按日统计的库存指标

库存仪表板中包含的所有指标并非都提供按日统计的数据，因此该选项已被删除。

自从今年九月份亚马逊开始VC账号大整顿以后，中国VC卖家惶惶不可终日，头上始终悬着一把“达摩克利斯之剑”，不知道什么时候自己的VC帐号也会被关闭。

中国VC卖家现在主要面临两个问题：一是大多数VC卖家都不知道自己的VM，就像是一个没有人管的孩子一样。如果没有及时的提醒和指导，孩子总会做错事的。

据知情人士说，一个VM同时会管理100-200多个VC帐号，而且最大的问题是VM有时都不知道自己到底要管理哪些VC帐号，因为VC帐号分配是随机的。VM同时要管理众多帐号，特别是最近亚马逊精简裁员更是加重了VM工作量，因此VM在管理时候就像老师按照标准答案批改试卷，是没有任何人情味的。

二是VC卖家对具体的业绩指标考核不清楚。孙悟空头上的“紧箍咒”是有形的，犯错了师傅就在旁边念咒提醒，但是亚马逊的“紧箍咒”是无形的，没有人在身边及时提醒，卖家必须平时保持高度的自制力，不能触碰高压线。

最近在一场内部交流会上，一个VC卖家年销售高达几个亿人民币，也收到了亚马逊要求关闭帐号的通知，还没有来得及找到原因和申诉，帐号就被关闭了。这肯定不是行业唯一的案例。

总体来说，根据亚马逊VC业务设立的初衷（见前面文章详细分析），亚马逊为了确保达到稳健增长以及盈利能力不断提升，特别制定了一系列的关键绩效指标（KPI）。这些KPI主要分为增长相关、盈利相关以及运营相关三大类。

**一、增长KPI指数（Growth KPIs）**

1. **销售额（Shipped Revenue）**

作为衡量在亚马逊平台上销售业绩的直接指标，销售额不仅反映了业务规模的大小，更是市场接受度和竞争力的直观体现。

![](https://pic3.zhimg.com/v2-5341b2aacbc5b2f1ad6849ce9bc1889c_1440w.jpg)

简单的说，销售额既能体现卖家在亚马逊平台上面的价值，也体现了卖家帮助亚马逊抢占市场的能力和价值。

**2.总供货价（Shipped COGS）**

此指标揭示了为维持销售所付出的总成本，是评估成本控制策略及定价策略合理性的重要依据。通过监控总供货价，供应商可以及时发现成本波动，优化成本结构，提高盈利能力。

### **3.平均售价（Average Selling Price）**

平均售价的计算帮助供应商了解市场对其产品定价的接受程度，是制定和调整价格策略的关键参考。

![](https://pic4.zhimg.com/v2-84bb1c97ae7b883d783a14bd8dba1e3b_1440w.jpg)

### **4.平均供货价（Average Cost per Unit）**

单个商品的成本控制是盈利的基础，平均供货价反映了这一成本控制的效果。

### **5.转化率（Conversion Rate）**

转化率是衡量产品页面吸引力和销售效率的关键。高转化率意味着更多的访客被转化为实际购买者，是评估营销和页面优化效果的重要指标，另外转化率较高的产品可能会在搜索结果中排名更高。

![](https://picx.zhimg.com/v2-2bddae73be93dd6da03a7224389dce9b_1440w.jpg)

**二、盈利指标（Profitability KPls）**

**6.净毛利率（Net PPM）**

净利润率是衡量VC账户盈利能力最为直观的指标之一，它显示了净利润占总销售额的比例。每个品类Net PPM会有差异，据行业头部VC卖家透露，目前亚马逊Net PPM在PO条件下是40%，在DF条件下是35%。

为什么会差五个点？就是因为PO和DF模式之间会相差一个转运费。DF是从卖家仓库直接发给消费者的；PO则是从卖家的海外仓转到FBA，这样就多了一个转运费。如果你是大件家具、超大件可能还不止五个点。请记下下面主要计算公式：

\*Net PPM=前台毛利+Term返点

\*前台毛利=Listing Price（建议零售价）-Costs（所有供货成本）

=Average Selling price- Cost Price-Sales Discount

=Shipped Revenue-Shipped COGS-Sales Discount

\*Term返点=（COOP+DA+Freight+QP）\*Costs

Net PPM等于前台毛利加账号返点（Term）。前台毛利等于卖家零售价减去所有供货成本（包括销售Discount）。比如说这个商品零售价是100美金，我的供货价是70美金，那么前台毛利就是30美金。

另外，亚马逊往往给每个品类设定一个销售返点（即Term）。有的返点是10%，有的返点是零，有的返点是15，等等。Term返点由几个主要条款组成。其中COOP一般是营销费用（Marketing），DA是不良率（Defect Allowance），Freight是转运费。

Term本质是一个业绩管理指标。简单的说，如果卖家前台毛利不够，就需要卖家提供更高的Term返点，反之，Term就会减少，甚至为零。因此，Term返点从0到15%其实并没有任何区别，亚马逊VM最终考核的是Net PPM。

这里特别需要提醒的是，市场上有不少VC服务商，或者有一些不太懂的自媒体会说他们的VC账号返点很好，是零扣点。其实他们是在误导卖家把Term理解成SC帐号的佣金，因为SC帐号一般佣金扣点也是15。

Net PPM是目前美国市场亚马逊考核VM的一个最优先的考核指标。这和当下亚马逊在疫情之后一直推动的降本增效的管理要求是相一致的。如果这个指标不达标，亚马逊VM就会认为有亏钱的风险，就会把卖家的产品下架，或者不给Buy box，或者不给卖家报活动。相应的，卖家在具体VC运营过程中就会出现很多问题。

最近亚马逊发言人明确指出，此次整顿的一个重要目标就是要优化和提升供应链的效率。这意味着在上面Net PPM之外，有关供应链的指标（涉及文中几个指标的组合）也是亚马逊当下优先考核的。

因此，VC卖家最重要的工作就是要在前期把定价表做好。SC帐号卖家随时可以调零售价，但是如果VC的定价表错了，卖家改动的成本就会非常高。

### **7.销售毛利（Gross Profit）**

销售毛利是扣除直接成本后的利润，直接反映了产品的盈利潜力。

### **8.EBITDA（税息折旧及摊销前利润）**

EBITDA作为经营效益的综合性指标，排除了非经常性费用的干扰，为供应商提供了一个更加清晰的经营状况视图。高EBITDA意味着具有较强的盈利能力和抗风险能力。

## **三、运营指标（Operational KPls）**

### **9.Lost Buy Box(黄金购物车丢失率)**

黄金购物车是亚马逊平台上的重要销售工具，其丢失率直接影响到潜在销售机会的把握。供应商应密切关注此指标，分析原因并采取有效措施降低丢失率。

### **10.Sourceable Product OOS(可采购产品缺货率)**

缺货是供应链管理的大敌，它不仅影响客户满意度，还可能损害品牌形象。供应商需努力降低可采购产品的缺货率，确保供应链的稳定性和可靠性。

### **11.Confirmation Rates(订单确认率)**

订单确认率反映了供应商在客户下单后的响应速度和订单处理能力。高确认率有助于提升客户满意度和订单履行效率，是运营管理水平的重要体现。

### **12.Financial Disputes as a % of Revenue(财务纠纷率)**

财务纠纷不仅增加了运营成本，还可能损害供应商的信誉度。供应商应关注此指标的变化趋势，及时解决财务问题，降低纠纷率以维护账号健康。

![](https://pic3.zhimg.com/v2-daab8cd15773756f6898c762b664611e_1440w.jpg)

在亚马逊VC账号的运营过程中，这12大核心KPI指标构成了亚马逊VC账号运营管理的基石。供应商应定期监控这些指标的变化趋势，深入分析其背后的原因和影响因素，并采取有效措施加以改进和优化。只有这样，才能在激烈的市场竞争中保持领先地位并实现可持续发展。

缺货（OOS）指标是不可补充的缺货（Rep OOS

[https://mp.weixin.qq.com/s/F0qbIXG\_RISiMSQNH2wyjg](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/F0qbIXG_RISiMSQNH2wyjg)

![](https://pic4.zhimg.com/v2-516756db1877ee6a2449e31e6b217979_1440w.jpg)

### \*\*亚马逊 Vendor Central (VC) 常见问题与缺陷总结\*\*

#### \*\*1. 流程缺陷（Process Defects）\*\*

\*\*问题类型\*\*：\*\*Chargebacks（罚款扣款）\*\*

- \*\*定义\*\*：因流程缺陷导致的惩罚性费用，反映运营低效和额外成本。

- \*\*常见原因\*\*：

- \*\*ASN（提前发货通知）错误\*\*：未正确提交或延迟提交。

- \*\*包装问题\*\*：包装不足或不符合要求（如重型/大件商品未使用 SIOC 包装）。

- \*\*交付问题\*\*：延迟交付或未交付。

- \*\*目录错误\*\*：商品信息（如尺寸、重量）不准确。

---

#### \*\*2. 短缺问题（Shortages）\*\*

\*\*问题类型\*\*：\*\*收货与发票不符\*\*

- \*\*定义\*\*：亚马逊实际收货数量与供应商发票不一致，导致发票未支付。

- \*\*常见原因\*\*：

- \*\*发票问题\*\*：提前、延迟、重复或错误提交发票。

- \*\*目录数据错误\*\*：如条形码、最小订单量（MOQ）、包装规格（IPQ）不匹配。

- \*\*ASN 问题\*\*：未提交或提交错误的 ASN。

- \*\*PO（采购订单）合规问题\*\*：未遵守确认时间或交付窗口。

---

#### \*\*3. 价格差异（Price Variances）\*\*

\*\*问题类型\*\*：\*\*成本价不一致\*\*

- \*\*定义\*\*：供应商与亚马逊系统记录的成本价不一致，导致付款延迟。

- \*\*常见原因\*\*：

- \*\*目录数据错误\*\*：如条形码、MOQ/IPQ 信息不准确。

- \*\*成本调价延迟\*\*：未及时接受亚马逊的价格更新请求。

- \*\*人为错误\*\*：亚马逊或供应商误操作更新目录数据。

---

### \*\*关键分析与建议\*\*

1. \*\*预防 Chargebacks\*\*：

- 确保 ASN 准时准确提交，包装符合 SIOC 标准（尤其是重型商品）。

- 定期审核商品目录数据（尺寸、重量、包装类型）。

2. \*\*减少 Shortages\*\*：

- 严格匹配 PO 数量与发票，避免重复或延迟开票。

- 使用标准化条码，确保 ASN 与实物发货一致。

3. \*\*避免 Price Variances\*\*：

- 及时响应亚马逊的成本价更新请求。

- 定期核对目录数据，避免人为录入错误。

4. \*\*通用优化措施\*\*：

- \*\*自动化工具\*\*：使用 EDI 系统同步 ASN、发票和 PO 数据。

- \*\*定期培训\*\*：确保团队熟悉亚马逊 VC 合规要求。

- \*\*数据监控\*\*：设置预警机制，及时发现差异并修正。

---

\*\*总结\*\*：亚马逊 VC 的三大核心问题（Chargebacks、Shortages、Price Variances）均与 \*\*数据准确性\*\* 和 \*\*流程合规性\*\* 强相关。供应商需重点关注 ASN、目录数据和发票的实时匹配，以减少罚款和付款延迟。

**二、盈利指标（Profitability KPls）**

**6.净毛利率（Net PPM）**

净利润率是衡量VC账户盈利能力最为直观的指标之一，它显示了净利润占总销售额的比例。每个品类Net PPM会有差异，据行业头部VC卖家透露，目前亚马逊Net PPM在PO条件下是40%，在DF条件下是35%。

为什么会差五个点？就是因为PO和DF模式之间会相差一个转运费。DF是从卖家仓库直接发给消费者的；PO则是从卖家的海外仓转到FBA，这样就多了一个转运费。如果你是大件家具、超大件可能还不止五个点。请记下下面主要计算公式：

\*Net PPM=前台毛利+Term返点

\*前台毛利=Listing Price（建议零售价）-Costs（所有供货成本）

=Average Selling price- Cost Price-Sales Discount

=Shipped Revenue-Shipped COGS-Sales Discount

\*Term返点=（COOP+DA+Freight+QP）\*Costs

Net PPM等于前台毛利加账号返点（Term）。前台毛利等于卖家零售价减去所有供货成本（包括销售Discount）。比如说这个商品零售价是100美金，我的供货价是70美金，那么前台毛利就是30美金。

另外，亚马逊往往给每个品类设定一个销售返点（即Term）。有的返点是10%，有的返点是零，有的返点是15，等等。Term返点由几个主要条款组成。其中COOP一般是营销费用（Marketing），DA是不良率（Defect Allowance），Freight是转运费。

Term本质是一个业绩管理指标。简单的说，如果卖家前台毛利不够，就需要卖家提供更高的Term返点，反之，Term就会减少，甚至为零。因此，Term返点从0到15%其实并没有任何区别，亚马逊VM最终考核的是Net PPM。

这里特别需要提醒的是，市场上有不少VC服务商，或者有一些不太懂的自媒体会说他们的VC账号返点很好，是零扣点。其实他们是在误导卖家把Term理解成SC帐号的佣金，因为SC帐号一般佣金扣点也是15。

Net PPM是目前美国市场亚马逊考核VM的一个最优先的考核指标。这和当下亚马逊在疫情之后一直推动的降本增效的管理要求是相一致的。如果这个指标不达标，亚马逊VM就会认为有亏钱的风险，就会把卖家的产品下架，或者不给Buy box，或者不给卖家报活动。相应的，卖家在具体VC运营过程中就会出现很多问题。

最近亚马逊发言人明确指出，此次整顿的一个重要目标就是要优化和提升供应链的效率。这意味着在上面Net PPM之外，有关供应链的指标（涉及文中几个指标的组合）也是亚马逊当下优先考核的。

因此，VC卖家最重要的工作就是要在前期把定价表做好。SC帐号卖家随时可以调零售价，但是如果VC的定价表错了，卖家改动的成本就会非常高。

### 7.销售毛利（Gross Profit）

销售毛利是扣除直接成本后的利润，直接反映了产品的盈利潜力。

### 8.EBITDA（税息折旧及摊销前利润）

EBITDA作为经营效益的综合性指标，排除了非经常性费用的干扰，为供应商提供了一个更加清晰的经营状况视图。高EBITDA意味着具有较强的盈利能力和抗风险能力。

### 三、运营指标（Operational KPls）

### 9.Lost Buy Box(黄金购物车丢失率)

黄金购物车是亚马逊平台上的重要销售工具，其丢失率直接影响到潜在销售机会的把握。供应商应密切关注此指标，分析原因并采取有效措施降低丢失率。

### 10.Sourceable Product OOS(可采购产品缺货率)

缺货是供应链管理的大敌，它不仅影响客户满意度，还可能损害品牌形象。供应商需努力降低可采购产品的缺货率，确保供应链的稳定性和可靠性。

### 11.Confirmation Rates(订单确认率)

订单确认率反映了供应商在客户下单后的响应速度和订单处理能力。高确认率有助于提升客户满意度和订单履行效率，是运营管理水平的重要体现。

### 12.Financial Disputes as a % of Revenue(财务纠纷率)

财务纠纷不仅增加了运营成本，还可能损害供应商的信誉度。供应商应关注此指标的变化趋势，及时解决财务问题，降低纠纷率以维护账号健康。

![](https://pic4.zhimg.com/v2-516756db1877ee6a2449e31e6b217979_1440w.jpg)

在亚马逊VC账号的运营过程中，这12大核心KPI

亚马逊VC账号的运营过程中，这12大核心KPI指标构成了亚马逊VC账号运营管理的基石。供应商应定期监控这些指标的变化趋势，深入分析其背后的原因和影响因素，并采取有效措施加以改进和优化。只有这样，才能在激烈的市场竞争中保持领先地位并实现可持续发展。

![](https://pic4.zhimg.com/v2-55260368ecee58b7685c58e1245258d5_1440w.jpg)![](https://pic4.zhimg.com/v2-91654799d85aa6995d4ee0cc43ac9d89_1440w.jpg)![](https://pic2.zhimg.com/v2-0d4a14876258d743fc7488cf95e74f83_1440w.jpg)![](https://picx.zhimg.com/v2-a607f6c212d618f1aa9ac55afc9ffda3_1440w.jpg)![](https://pic2.zhimg.com/v2-703a829d0e29a93954a2abbdd441f7e9_1440w.jpg)![](https://pic2.zhimg.com/v2-c8c8052ab7269ba852aaf93ae990b329_1440w.jpg)![](https://pica.zhimg.com/v2-b2b05684b36cfb6683e2182651a0129a_1440w.jpg)

Amazon Retail Analytics

Amazon Retail Analytics (ARA) is a set of dashboards that let you analyze sales and operational data, such as your revenue and inventory levels. Amazon Brand Analytics (ABA) is a set of dashboards that let you analyze your customers’ buying and search behavior. You can access ARA and ABA through the Reports menu.

All vendors have access to ARA, including manufacturers and authorized resellers. Brand Registry enrollment is not required for ARA.

For access to ABA, you must be enrolled in Brand Registry and be responsible for selling the brand in the Amazon store.

For a glossary of metrics included in the ARA dashboards, go to the Amazon Retail Analytics metric glossary.

General dashboard information

Difference between Manufacturing view and Sourcing view

All vendors have access to Sourcing views, which will show the sales data for ASINs that are sourced from a vendor code in the vendor group. If you are a manufacturer, you will also have access to the Manufacturing view, which shows data for any ASIN manufactured by you, regardless of who sourced the product to Amazon.

The Traffic, Net Pure Product Margin (PPM), and Forecasting dashboards are only displayed to manufacturers.

The Program view (retail) includes all other selling programs such as Amazon Business and Amazon Fresh.

Access to views of Amazon programs, such as Business and Fresh, are managed by vendor group permissions.

If you believe you should have access to any of the views mentioned above, you can contact us to request access.

ARA data

Reports may take up to a week to populate data after a reporting periods closes. We aim to update all weekly reports within 72 hours and are continuously improving our system to get your reports to you faster.

To see trailing time period options, select Trailing in the Time frame drop-down menu. To see prior period, select Show additional filters. Trailing time period options include trailing 4 weeks, 13 weeks, and 12 months.

To see recurring time period options, select Recurring in the Time frame drop-down menu. To see year over year, select Show additional filters. Recurring time period options include year to date, quarter to date, month to date, and week to date.

Lost buy box (LBB)

LBB is no longer supported by the pricing team, and we can’t provide an LBB metric in ARA until an effective replacement metric is available. An alternative metric, Lost featured offer (LFO), is in development, but we can’t provide guidance as to when that metric will be available.

Conversion and average sale prices

Conversion and average sale prices (ASP) are derived metrics, meaning that they can be calculated using other metrics already provided in the sales dashboard. Conversion means the number of ordered units divided by glance views. ASP means the amount of shipped revenue divided by shipped units

Troubleshooting

Missing ASINs in the dashboard

This can be due to one or a combination of the following reasons:

Distributor view: Ensure that you have selected the proper Distributor view selection. The Manufacturing view shows data for ASINs manufactured by you, regardless of who sourced the products to Amazon. The Sourcing view shows only the data of ASINs sourced directly from a vendor code in your vendor group.

No data in time period: An ASIN must have data for at least one of the metrics in a given dashboard for the selected time period being viewed in order for it to appear in that dashboard. For example, an ASIN with inventory will appear in the Inventory dashboard, but may not appear in the Sales dashboard if no sales occurred for that ASIN in the selected timeframe.

ASIN mapping: Vendor hierarchy and ASIN catalog attribute setup impact how ASINs are mapped to ARA reports. ASINs not properly mapped to ARA may appear to be missing from reports. Once mapping is corrected, it may take up to 14 days to reflect in the dashboards. For troubleshooting help with data issues related to ASIN mapping, vendor hierarchy, or catalog attributes, reach out to your retail partner or open a Contact Us case.

Unowned ASINs in the dashboard

This is likely due to an ASIN mapping issue. ASINs not properly mapped to ARA via proper vendor hierarchy, ASIN catalog attributes, and vendor group setup may cause an ASIN to inaccurately populate in ARA dashboards. For troubleshooting help with issues related to ASIN mapping, reach out to your retail partners or open a Contact Us case and request ASIN mapping assistance.

Data does not match the data surfaced by the vendor manager or account manager

There is ASIN-level data parity between ARA and the internal tools used by your retail partners. For questions on reporting that you receive from your retail teams, reach out to your retail partner or open a Contact Us case.

Only some users see a particular dashboard, while others can’t

Users who are not administrators must have the "FinancialReports" task-based role enabled in order to access the Inventory dashboard. Admins will already have all rights enabled by default. Only an Admin can enable or disable a non-admin’s rights.

Forecasting dashboard

The Forecasting dashboard lets you identify the customer demand for your products for production and inventory planning purposes. The Forecasting dashboard provides a forecast for customer demand, but is not a promise of purchase orders.

Meaning of the different P-levels

The forecasting system produces forecasts for an ASIN at various confidence levels, or critical ratios (CR). If you are setting a CR of .80, a.k.a. "P80," it means there is 80% probability that the ASIN will be in stock for the buying horizon. A higher CR or P-level means more buffer stock.

Vendor purchase orders don’t align with the unit forecast in the Forecasting dashboard

The forecast report provides a forecast for unconstrained customer demand, which is not a promise of purchase orders. If there are already on-hand or on-order units available to cover customer demand, for example, this would be accounted for when the system issues purchase orders.

Inventory dashboard

The Inventory dashboard lets you monitor the health of your product inventory through weekly updates. You can quickly identify and respond to unfavorable trends.

Sellable on-hand units calculation

In the Inventory dashboard, sellable on-hand units refers to the physical condition of the product as recorded in our inventory, before we account for any outbound units such as customer shipments, transfers, or removals. Sellable inventory does not necessarily mean that it is available for sale on the Amazon website, only that it is not considered defective.

Unable to see inventory metrics at the daily grain

Not all metrics included in the Inventory dashboard are available at the daily granularity, so the option has been removed.

Out of stock (OOS) metric is not replenishable OOS (Rep OOS)

ARA surfaces procurable product OOS (ROOS). While Rep OOS considers only replenishable ASINs, ROOS considers procurable ASINs. Since the ASIN cohort is larger for ROOS vs. Rep OOS, in most cases, ROOS will be a lower percentage than Rep OOS.

I can’t see ROOS or unfilled customer order units in Sourcing view

This is expected behavior, as the data from ROOS and unfilled customer order units are only available for manufacturing vendors. This is ASIN-level data that cannot be attributed to a specific vendor.

Viewing Amazon Fresh (F3) sales

Access to Amazon Fresh views must be enabled by your internal retail partner.

Net PPM dashboard

The Net PPM dashboard lets you identify which products are driving profitability up or down by analyzing net pure product margin (Net PPM). Net PPM measures product profitability after cost of goods, vendor funding, and sales discounts are taken into account.

Net pure product margin (PPM) is calculated as shipped revenue minus shipped PCOGS + CCOGS (cost of goods) minus sales discounts, then divided by shipped revenue.

Unable to see the Net PPM dashboard

The Net PPM dashboard is typically only displayed to manufacturers. Reach out to your retail partners or open a Contact Us case if you believe you should have access to the Net PPM dashboard.

Warehouse Deals sales not included in the Net PPM metric

Brand Analytics (including ARA) does not include Warehouse Deals sales in its metrics. Since proceeds from Warehouse Deals sales are not collected by the vendor, we do not account for these transactions. The internal tools used by your retail partners may be inclusive of Warehouse Deals sales. For questions on whether Warehouse Deals sales are included in your internal metrics, reach out to your retail partners or open a Contact Us case.

Sales dashboard

The Sales dashboard lets you quickly identify opportunities by determining what is contributing to sales performance.

Unable to see Manufacturing view for the Sales dashboard, only the Sourcing view

All vendors will have access to the Sourcing view of the sales report, which will show the sales data for ASINs (with a product cost) that have an offer from a vendor code listed in the vendor group. If the vendor is a manufacturer, they will have access to the Manufacturing view, which shows ASIN-level data for any ASIN manufactured by the vendor code designated as the manufacturing role in the vendor group. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners if you believe you should have access to the Manufacturing view or open a Contact Us case.

Warehouse Deals sales are not included in sales metrics

ARA does not include Warehouse deals in reported metrics. Since proceeds from Warehouse deals sales are not collected by the vendor, we do not account for these transactions. The internal tools used by your retail partners may be inclusive of Warehouse Deals sales. For questions on whether Warehouse Deals sales are included in your internal metrics, reach out to your retail partners or open a Contact Us case.

Customer returns and free replacements are accounted for in shipped units and revenue

ARA accounts for customer returns and free replacements in shipped units and revenue.

The date that customer returns and cancellations are attributed to

Customer returns and cancellations are applied to ordered revenue based on the original date of the sale.

Seeing Amazon Business (B2B) and Amazon Fresh (F3) sales

Access to views of other Amazon Programs, such as B2B and F3, are enabled via vendor group rights. Reach out to your retail partners or open a Contact Us case if you believe you should have access to these views.

Traffic dashboard

The Traffic dashboard lets you quickly identify changes in relevant traffic related metrics.

Unable to access the Traffic dashboard

If the vendor is a manufacturer, they will have access to the Manufacturing view, which shows ASIN-level data such as traffic, Net PPM, and forecasting, for any ASIN manufactured by the vendor code designated as the manufacturing role in the vendor group. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners or open a Contact Us case if you believe you should have access.

Defining a glance view

Glance views (GVs) measure customer traffic and are defined by the number of views to the product detail page.

How glance views are calculated in Brand Analytics

In Brand Analytics reporting, GVs are calculated at the ASIN-level, and only when Retail is the featured seller (that is, has the featured offer on the product detail page). By exposing raw GVs when Retail is the featured seller, we provide vendors with the traffic data where Retail had the opportunity to convert a sale.

The glance view metric in Brand Analytics doesn’t match Advertising reports

Glance view metrics can vary based on the reporting tool used, and the specific inputs or filters applied to those metrics. For example, Advertising tracks impressions and clicks to evaluate the efficacy of an ad taking the shopper to the shelf (that is, all detail page views). On the other hand, Brand Analytics tracks customer traffic to a detail page where the vendor has had the opportunity to convert a sale. Glance view metrics may vary across reporting tools.

Using glance views to calculate conversion

Conversion is the percentage of times a glance view was converted into a sale. It is a derived metric that is calculated by dividing ordered revenue by glance views.

Catalog dashboard

The Catalog dashboard lets you monitor catalog quality by instantly accessing the latest catalog details for your products.

Accessing the Catalog dashboard

This dashboard is available to all vendors and users with access to ARA regardless of additional permissions. Vendors will have access to select the Manufacturing view in addition to the Sourcing view only if the vendor is a manufacturer. Enabling or disabling this view will be owned by retail stakeholders. Reach out to your retail partners if you believe you should have access to the Manufacturing view, or open a Contact Us case.

Why only some people see the Manufacturing view in the Catalog dashboard, while others can’t

All users will have access to the Sourcing view option if they have access to ARA. Users who are not administrators must have the Financial Reports task-based role enabled in order to access the Manufacturing view of the Catalog dashboard. Admins will already have all rights enabled by default. Only an admin can enable or disable a non-admin’s rights.

Catalog dashboard update frequency

The report will update with the most recent available ASIN attribute data and display to the user the most recent date the report was updated. There is no date selection available.

Worldwide Sales dashboard

The Worldwide Sales dashboard provides a consolidated view of your worldwide sales data across all Amazon stores where your products are sold. This tab is currently available for vendors enrolled in Global Procurement Entity (GPE). Use the Vendor code column to view your store mix.

The dashboard enhances your view of Worldwide sales with the following columns (in addition to others):

Vendor code: Indicates what vendor code the ASIN is tied to, give you visibility into your sourcing channel mix (for example, domestic, GPE, or dropship)

Store code: The country in which an item is sold

Destination country: The country the item is shipped to when a customer places an order

Notes:

To verify or change your vendor code in the dashboard, work with your GPE contact.

Poland store code will show as Germany. The data point used to map store code is warehouse ID. Because the Poland warehouse is in Germany, the store code shows-up as Germany.

The Worldwide Sales dashboard also includes metrics such as shipped revenue and shipped units, which indicate the revenue and number of units shipped to customers.

Unlike the Sales dashboard, Worldwide Sales does not include ordered revenue or ordered units, which are slightly different from shipped metrics, because they’re calculated when a customer orders a product instead of when the product is shipped. With the addition of shipped revenue and units, you have a comprehensive view of ASIN-level performance.

Unlike the Sales dashboard, the Worldwide Sales dashboard does not include a program drop-down and only shows manufacturer data (not sourcing).

### \*\*Amazon Retail Analytics (ARA) 核心内容总结\*\*

#### \*\*1. ARA 概述\*\*

- \*\*ARA\*\*：提供销售和运营数据（如收入、库存）的分析仪表盘。

- \*\*Amazon Brand Analytics (ABA)\*\*：分析客户购买和搜索行为，仅限品牌注册用户使用。

- \*\*访问方式\*\*：通过卖家后台的 \*\*Reports\*\* 菜单进入。

#### \*\*2. 访问权限\*\*

- \*\*ARA\*\*：所有供应商（包括制造商和授权经销商）均可使用，无需品牌注册。

- \*\*ABA\*\*：需完成 \*\*Brand Registry\*\* 注册，且必须是品牌销售负责人。

#### \*\*3. 仪表盘视图类型\*\*

- \*\*Sourcing View（采购视图）\*\*：显示供应商代码关联的 ASIN 销售数据（所有供应商可用）。

- \*\*Manufacturing View（制造视图）\*\*：仅制造商可用，显示所有由该制造商生产的 ASIN 数据（无论谁供货）。

- \*\*Program View（零售视图）\*\*：包含其他销售渠道（如 Amazon Business、Amazon Fresh）。

#### \*\*4. 关键仪表盘功能\*\*

- \*\*Forecasting Dashboard（预测仪表盘）\*\*

- 预测客户需求（非采购订单承诺）。

- \*\*P-levels（置信水平）\*\*：如 P80 表示 80% 概率库存充足。

- 仅制造商可用。

- \*\*Inventory Dashboard（库存仪表盘）\*\*

- 监控库存健康状况。

- \*\*Sellable On-Hand Units\*\*：可售库存（不一定是网站可售状态）。

- \*\*Out of Stock (OOS)\*\*：显示可采购产品的缺货率（ROOS），非仅可补货缺货（Rep OOS）。

- \*\*Net PPM Dashboard（净产品利润率仪表盘）\*\*

- 计算方式：`(发货收入 - 商品成本 + 销售折扣) / 发货收入`。

- 仅制造商可用，不包含 Warehouse Deals 销售数据。

- \*\*Sales Dashboard（销售仪表盘）\*\*

- 分析销售表现，包含客户退货和免费换货数据。

- 不包含 Warehouse Deals 销售数据。

- \*\*Traffic Dashboard（流量仪表盘）\*\*

- 关键指标：\*\*Glance Views (GVs)\*\*（商品详情页浏览量）。

- 仅制造商可用。

- \*\*Catalog Dashboard（目录仪表盘）\*\*

- 监控产品目录质量，所有供应商可用。

- \*\*Worldwide Sales Dashboard（全球销售仪表盘）\*\*

- 仅限 \*\*Global Procurement Entity (GPE)\*\* 供应商使用。

- 显示全球销售数据（按国家/供应商代码分类）。

#### \*\*5. 数据更新与时间范围\*\*

- 报告数据可能延迟 \*\*1 周\*\* 更新，周报通常在 \*\*72 小时内\*\* 更新。

- \*\*时间范围选项\*\*：

- \*\*Trailing\*\*：过去 4 周/13 周/12 个月。

- \*\*Recurring\*\*：年初至今 (YTD)、季度至今 (QTD) 等。

#### \*\*6. 常见问题与解决方案\*\*

- \*\*ASIN 缺失\*\*：检查视图类型、时间范围或 ASIN 映射问题（需联系支持）。

- \*\*数据不一致\*\*：ARA 与零售团队工具数据一致，如有差异需联系支持。

- \*\*权限问题\*\*：非管理员需开通 \*\*FinancialReports\*\* 权限才能访问某些仪表盘。

#### \*\*7. 其他注意事项\*\*

- \*\*Lost Buy Box (LBB)\*\*：已停用，替代指标 \*\*Lost Featured Offer (LFO)\*\* 开发中。

- \*\*转化率与平均售价 (ASP)\*\*：

- 转化率 = 订单量 / Glance Views。

- ASP = 发货收入 / 发货量。

#### \*\*8. 支持与联系\*\*

- 权限或数据问题可通过 \*\*Contact Us\*\* 提交请求，或联系零售合作伙伴。

--- Net\_PPM\_ASIN\_Spain\_Weekly\_20-07-2025\_26-07-2025.xlsx

\*\*总结\*\*：ARA 是供应商分析销售、库存、利润和流量的核心工具，不同视图和仪表盘针对制造商和普通供应商提供差异化数据权限，需注意数据更新延迟和权限配置问题。

![](https://pic4.zhimg.com/v2-516756db1877ee6a2449e31e6b217979_1440w.jpg)
