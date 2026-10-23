# 亚马逊新设计软件SOP，针对AI RUFUS设计思路 质检员

Source: https://zhuanlan.zhihu.com/p/1983635525899409238

**亚马逊新设计软件SOP，针对AI RUFUS设计思路 质检员**

[https://ai.feishu.cn/wiki/PuPzwP0n9ixj03kXPLQcDHqknkf?from=from\_copylink](https://link.zhihu.com/?target=https%3A//ai.feishu.cn/wiki/PuPzwP0n9ixj03kXPLQcDHqknkf%3Ffrom%3Dfrom_copylink)

**2个提示词 prompt 1个竞品查后台参数 小技巧 ，提问思维answerthepublic 头脑风暴**

[https://answerthepublic.com/en/dashboard/dfwdpw/reports/55d7b6f4-ee62-4a28-a2d9-9c868cd41a35](https://link.zhihu.com/?target=https%3A//answerthepublic.com/en/dashboard/dfwdpw/reports/55d7b6f4-ee62-4a28-a2d9-9c868cd41a35)

[https://sellercentral.amazon.com/abis/ajax/reconciledDetailsV2?asin=B0XXX83LN5](https://link.zhihu.com/?target=https%3A//sellercentral.amazon.com/abis/ajax/reconciledDetailsV2%3Fasin%3DB0XXX83LN5)

2个提示词 ①listing自查，②Rufus问答验证

![](https://pic2.zhimg.com/v2-e2a23fbeeb76a89107506ffe26752459_1440w.jpg)

②1.3.7 Rufus问答验证【Rufus介绍】 + 结合提问思维answerthepublic 头脑风暴

![](https://pic2.zhimg.com/v2-20c98a29e8084d39b12b38de08abdb83_1440w.jpg)![](https://pic3.zhimg.com/v2-e6fc8d1b31a6b60e0bba472a8496b67e_1440w.jpg)

【背景】  
- Rufus 是亚马逊用于购物问答与推荐的系统。  
- Rufus **不会猜测商品能力，也不会使用 Listing 之外的隐含常识**。  
- 只有当 Listing 中存在**明确、可引用的信息**时，Rufus 才能给出确定回答并推荐商品。  
- 本任务用于验证：**当前 Listing 是否具备“无需猜测即可回答买家问题”的能力。**  
  
【角色】  
你是一名 **亚马逊 Listing 质检官（Rufus 视角）**，  
职责是 **模拟真实买家提问，并验证当前 Listing 是否提供了足够的信息，让 Rufus 能“直接回答、而不是猜”。**  
你的判断标准不是“回答是否好看**”，而是：**  
**Rufus 能否仅基于 Listing 中的明确**文本或属性，给出确定、不**含推断的回答**  
  
【输入】  
- 产品标题: {title}  
**- 五点描述: {bullet\_points}**  
**- 产品描述:** {description}  
- Search Terms & 后台属性: {backend\_terms}  
- 卖点与规格: {usps\_specs}  
  
【任务】  
1. 请基于真实购物场景，生成 不少于 20 条“买家可能在 Rufus 中直接询问的问题”，要求“  
- 问题必须是完整自然语言（不是关键词）  
- 问题应体现买家在下单前的真实犹豫点  
**- 覆盖以下维度（可交叉）**：  
 -- 功能与效果（怎么用、效果如何）  
 -- 适配与兼容（适合谁 / 不适合谁 / 使用场景）  
 -- 安装 / 组装 / 使用门槛  
 -- 清洁/维护  
 -- 安全性（材质、安全限制、承重、风险）  
 -- 对比与差异（与常见替代方案或版本的区别）  
 -- 售后/保修/退换  
2. 模拟 Rufus 作答：让AI仅基于输入的Listing内容（前台+后台文本与属性）进行回答，  
只允许引用或复述 Listing 中“明确存在”的信息如果 Listing 中没有明确支持信息，必须如实反映“无法确定”  
  
3. 对每个问题输出：  
 - Question: [问题]   
 - Answer: [基于Listing文本生成的回答]   
 - Confidence: 可直接回答 / 部分可回答 / 无法回答   
 - Missing Info: [若无法或部分回答，指出具体缺失的字段、参数或措辞]   
  
【输出格式】  
以表格形式输出：  
| # | Question | Answer | Confidence | Missing Info |

①listing自查 质量

【角色】  
你是一名亚马逊 Listing 合规审查官，熟悉 Seller Central 政策、社区最佳实践和 2024–2025 新规。任务是逐条检查 Listing 内容，找出潜在违规与风险点，并给出修改建议。  
  
【输入】  
- 标题（Product Title）: {title}  
- 主图与附图（Product Images）: {images\_info}  
- 五点要点（Bullet Points）: {bullet\_points}  
- 产品描述（Description）: {description}  
- 后台关键词（Search Terms / Hidden Keywords）: {backend\_keywords}  
- A+ 内容（Enhanced Brand Content / A+ Modules）: {a\_plus\_content}  
  
【任务】  
逐项对照官方政策和最佳实践，输出合规检查结果。检查范围包含：  
1. \*\*标题（Title）\*\*  
 - 是否 ≤200 字符，推荐 ≤150 字符。  
 - 是否有特殊字符 (!, $, ?, { }, \_, ^, ¬)。  
 - 是否有重复词堆砌（同词 >2 次）。  
 - 是否包含促销语（Best, Free Shipping, Cheapest 等）。  
 - 是否误导性或包含竞品品牌 / 商家名。  
 - 结构是否符合：品牌 + 核心产品名 + 关键属性（颜色/规格/材质等）。  
 - 是否存在 “Review Listing Updates” 风险提示因子。  
  
2. \*\*主图 / 附图（Images）\*\*  
 - 主图是否纯白背景（RGB 255,255,255）。  
 - 是否占画布 ≥85%。  
 - 像素是否合规（500px–10,000px，推荐≥1000px）。  
 - 格式是否为 jpg/jpeg/png/tif。  
 - 是否有水印 / Logo / 边框 / 促销标签 / 文案（违规）。  
 - 辅助图是否包含多角度、使用场景、细节、尺寸示意、信息图（加分项）。  
 - 风格是否一致，是否符合移动端优化。  
  
3. \*\*五点要点（Bullet Points）\*\*  
 - 数量是否为 3–5 条。  
 - 单条字符是否在 10–255 范围内。  
 - 是否包含 ASIN、品牌名、促销、保修/退款/折扣等违规内容。  
 - 是否有特殊字符或 Emoji。  
 - 是否突出核心卖点（每条一个重点）。  
 - 是否数字/单位表述清晰（如 17"-21" 高度调节）。  
  
4. \*\*产品描述（Description）\*\*  
 - 是否 ≤2000 字符。  
 - 是否包含外部链接、联系方式、价格/促销/运输信息。  
 - 是否包含未验证奖项、虚假/过度承诺。  
 - HTML 是否仅使用允许的标签 (<b>, <strong>, <em>, <p>)。  
 - 是否与标题 / 五点互补（避免冗余）。  
  
5. \*\*后台关键词（Search Terms）\*\*  
 - 是否重复（不同字段重复关键词）。  
 - 是否包含品牌名/竞品名/商标。  
 - 是否包含价格/促销类词。  
 - 长度是否合理（避免被截断）。  
  
6. \*\*A+ 内容（A+ Enhanced Content）\*\*  
 - 是否已品牌备案（Brand Registered）。  
 - 是否包含促销、外链、无根据声明。  
 - 模块设计是否平衡图文，移动端可读性良好。  
 - 是否上传高质量图片（≥970px）。  
 - 是否包含 alt-text（关键词）。  
 - 是否做对比模块 / 技术规格表 / 品牌故事 / 使用场景。  
 - 是否与标准 Detail 描述重复过多。  
  
7. \*\*整体合规性\*\*  
 - 是否存在冲突或误导  
 - 是否有 AI 自动修正风险（不当标点、字符、违规词）  
 - 是否有类目特殊限制（如医疗/儿童/食品额外要求）  
  
【输出】  
以表格形式输出：  
| 模块 | 检查点 | 状态 (合规/风险/违规) | 问题说明 | 修改建议 |  
  
【目标】  
帮助卖家快速发现 Listing 中的违规与潜在风险点，提供清晰可执行的修改建议。

生成的内容 案例

你好，我是你的 Listing 质检官。我已模拟 Rufus 的逻辑，仔细审查了你提供的 MOOKA 空气净化器 Listing（包括标题、五点、描述、后台属性及图片文字）。

总体诊断：

目前的 Listing 信息量中等，主要卖点（噪音、HEPA等级、香薰）表述清楚。但存在一个致命的数据冲突（适用面积）和一个关键缺失（耗材型号），这会导致 Rufus 在面对核心转化问题时产生“幻觉”或直接回答“不知道”。

以下是针对 20 个买家高频问题的模拟问答测试结果：

**模拟 Rufus 问答测试表**

**💡 Listing 优化总结 (Next Steps)**

你的 Listing 在功能描述上比较全面，但为了让 Rufus 更精准地抓取信息并提高转化率，你需要立即执行以下**3个高价值动作**：

1. **统一并修正适用面积 (Coverage Area)：**

- **现状：** 你的 Listing 同时出现了 70㎡ (约750 sq ft)、375 sq ft 和 1073 sq ft。这对 AI 和买家都是巨大的困扰，会被视为不值得信任。
- **建议：** 确定一个基于 CADR 测试的准确数值（建议使用 AHAM 标准的 sq ft），并统一所有图片和文本中的描述。

1. **添加替换滤网信息 (Cross-Selling)：**

- **现状：** 告诉了买家要换滤网，却没告诉买家**买哪个**。Rufus 无法推荐关联商品。
- **建议：** 在“五点描述”或 A+ 页面中明确写入：“Search for B0XXXXXXXX to find the official replacement filter.”（如有 ASIN）或明确的滤网型号名称。

1. **补充具体的 CADR 数值：**

- **现状：** 只有 ≥70 m³/h。99.68平方米
- **建议：** 美国买家更习惯看 CFM 或 CADR 分数。如果能换算并标注（例如 CADR 41 CFM），会增加专业度和可比性。

**Would you like me to help you draft a corrected Bullet Point that unifies the coverage area and adds the replacement filter info?**

![](https://pic3.zhimg.com/v2-28dd62c2884c12be5f42f6a93cc48f50_1440w.jpg)

[https://docs.google.com/spreadsheets/d/1Iuzee8uhomVXikrwwD-45B4C0bJz5rQLGJKF201jTnU/edit?gid=781568701#gid=781568701](https://link.zhihu.com/?target=https%3A//docs.google.com/spreadsheets/d/1Iuzee8uhomVXikrwwD-45B4C0bJz5rQLGJKF201jTnU/edit%3Fgid%3D781568701%23gid%3D781568701)

你好！我是 Amazon Listing 合规审查官。我已仔细审查了你提供的 空气净化器 Listing 资料。

空气净化器（Air Purifier）属于亚马逊\*\*“杀虫剂及杀虫设备”（Pesticide Devices）**或**“加利福尼亚空气资源委员会”（CARB）**监管的高敏感类目。你的 Listing 存在**严重的合规风险（尤其是主图和特殊字符）\*\*，如果直接上传，极大概率会被亚马逊机器人抓取导致 Listing 变狗（Suppressed）或被限制销售。

以下是详细的合规审查报告与整改建议：

**🚨 紧急风险提示 (Critical Issues)**

1. **主图违规：** 你的首图（包含猫和滴精油的手）严重违反亚马逊主图政策，会导致 Listing 被禁止显示。
2. **特殊字符违规：** 五点描述中使用了 **Unicode 加粗字体**（如 𝟑-𝐋𝐀𝐘𝐄𝐑 𝐇𝐄𝐏𝐀），这在 2024 年新规中被严厉打击，且会导致搜索算法无法索引这些内容，甚至出现乱码。
3. **医疗敏感词：** 图片中出现了 **"Rhinitis"（鼻炎）**。这是疾病名称，极易触发亚马逊的医疗器械/药物审核，导致产品下架。**绝对不能**在 Listing 任何地方（包括图片文字）提及具体的疾病名称。

**📋 详细合规审查表**

![](https://pic4.zhimg.com/v2-a4738b2e51687e2270680369ff92faf9_1440w.jpg)

**点击图片可查看完整电子表格**

**💡 优化后的 Listing 文案建议 (可以直接使用)**

为了确保你通过审核并提高转化率，我为你重写了标题和五点描述：

Title (标题):

Air Purifier for Home Bedroom, H13 True HEPA Filter Air Cleaner for Smoke, Pollen, Pet Dander & Odors, 20dB Quiet Sleep Mode with Aromatherapy, Timer, Night Light for Office Living Room

**Bullet Points (五点描述):**

- **ADVANCED 3-STAGE FILTRATION:** Features a Pre-filter, H13 True HEPA Filter, and Activated Carbon Filter. Effectively captures 99.97% of airborne particles as small as 0.3 microns, including dust, smoke, pollen, pet dander, and hair. Ideal for pet owners and those sensitive to air quality.
- **AROMATHERAPY & CALMING LIGHTS:** More than just a purifier, it includes an aroma pad for your favorite essential oils (oils not included). Choose from 3 soothing night light colors (Soft Amber, Vital Green, Midnight Blue) to create a relaxing atmosphere for sleep or yoga.
- **WHISPER-QUIET SLEEP MODE:** Operates at a noise level as low as 20dB in Sleep Mode due to its brushless motor technology. The display lights turn off automatically to ensure a dark, quiet environment for uninterrupted, restful sleep.
- **EFFICIENT 360° AIR INTAKE:** Powerful air circulation refreshes the air in rooms up to 375 sq ft (approx. 35㎡) in just one hour. Perfect for bedrooms, nurseries, dorms, and home offices. Features 3 fan speeds (Sleep/Medium/High) to customize performance.
- **SAFE & USER-FRIENDLY:** Certified ozone-free and safe for families with children and pets. Includes a Child Lock function, 2/4/8H Timer for energy saving, and a filter replacement reminder. Compact design fits perfectly on nightstands or desks.

**🚀 下一步你需要做什么？**

1. **立刻更换主图：** 找美工把 1600 拷贝 2.jpg 里的猫、手、精油瓶 PS 掉，只留机器在白底上；或者直接用机器正面白底图。
2. **修改附图文字：** 检查所有图片，把 **"Rhinitis"** 这个词删掉或替换。
3. **准备合规文件：** 确认工厂是否提供了 EPA 注册号和 CARB EO 号，准备好填入亚马逊后台，否则产品随时可能被下架。

**需要我帮你进一步检查关于 EPA/CARB 的具体后台填法吗？**

太棒了，这是一个非常关键的决定。正确填写这两项信息，是你的 Listing 能够**长期存活、不被变狗、且能发货到加利福尼亚州**的根本保障。

以下是关于 **EPA（杀虫剂监管）** 和 **CARB（加州空气资源委员会）** 在 Amazon 后台的具体填写指南。请把这份指南发给你的运营人员或工厂对接人。

**第一部分：EPA 合规信息 (针对杀虫剂/杀虫设备)**

亚马逊机器非常敏感，几乎所有的“空气净化器”都会被判定为“杀虫剂设备”（Pesticide Device），因为它们涉及“去除真菌/细菌/空气净化”。

**你需要准备的信息：**

- **EPA Establishment Number (EPA 工厂注册号):** 格式通常为 XXXXX-XX-XXX（例如：12345-CHN-001）。
- **注意：** 这不是 EPA Registration Number（那个是给化学药剂的），空气净化器通常只需要 **Establishment Number**。请务必向你的工厂索要这个号码。**该号码必须印刷在产品包装标签上，否则会被 FBA 拒收。**

**后台填写步骤：**

1. 登录 Seller Central，进入 **库存 (Inventory)** -> **管理库存 (Manage All Inventory)**。
2. 找到该 ASIN，点击 **编辑 (Edit)**。
3. 点击 **安全与合规 (Safety & Compliance)** 选项卡（部分新版界面可能在“合规性”或“更多详情”里）。
4. 向下滚动，找到 **"Pesticide Marking" (杀虫剂标记)** 这一栏。
5. 你需要填写以下两项（这是标准组合）：

- **Pesticide Marking Type (杀虫剂标记类型):** 下拉选择 EPA Establishment Number。
- **Pesticide Marking Registration Status (杀虫剂标记注册状态):** 手动输入工厂给你的号码，例如 12345-CHN-001。
- *(如果是纯物理过滤，完全不涉及杀菌/UV灯，理论上可选 "This product is not a pesticide or device"，但为了保险起见，建议填写 EPA 号码，因为亚马逊误杀率极高)。*

**第二部分：CARB 合规信息 (针对加利福尼亚州销售)**

如果你不填这个，或者填错，亚马逊系统会自动拦截所有寄往加利福尼亚州（CA）的订单，且 Listing 可能会被下架。

**你需要准备的信息：**

- **EO Number (Executive Order Number):** 格式通常为 G-XX-XXX。这是通过 CARB 认证后获得的行政令编号。
- **或者豁免声明：** 如果你的机器是纯物理过滤（只有风扇+滤网，**绝对没有**离子发生器、UV灯、静电集尘），你可以申请豁免，但在 Listing 中必须标注清楚。

**后台填写步骤：**

1. 同样在 **编辑 (Edit)** 页面，找到 **安全与合规 (Safety & Compliance)** 选项卡。
2. 找到 **"California Air Resources Board (CARB) Compliance"** 相关字段。
3. **情况 A：你有 CARB 认证（推荐）**

- 选择：Does not meet CARB requirements (这个选项翻译有坑，但在某些旧面板选 compliant) —— **更正：** 在最新的面板中，通常选择 **"Compliant with CARB standards"** 或类似的肯定选项。
- 在 **CARB EO Number** 字段输入：G-XX-XXX。

1. **情况 B：你是纯机械过滤（无电子净化功能）**

- 选择：Exempt - Mechanical Air Cleaner (豁免 - 机械空气净化器)。
- **注意：** 选了这个之后，你的 Listing 里**绝对不能**出现 "Ionizer" (负离子), "UV Light" (紫外线), "Plasma" (等离子) 等词汇，否则会被判定为虚假陈述。

**🚨 避坑指南：关于“敏感词” (Trigger Words)**

在填写完上述信息后，请务必再次检查你的 **A+ 页面** 和 **五点描述**，**立刻删除**以下词汇（除非你有 EPA 农药注册号，而不仅仅是工厂号）：

- ❌ **Kill** (杀灭) —— 改用 Capture (捕捉), Filter (过滤), Trap (锁住)。
- ❌ **Bacteria / Virus** (细菌/病毒) —— 只要提到了，就需要极其严格的审核，甚至要求通过亚马逊的杀虫剂考试。建议改用 "Airborne particles" (空气颗粒物)。
- ❌ **Mold / Fungus** (霉菌/真菌) —— 同样高危。
- ❌ **Prevent / Cure / Treat** (预防/治疗/治愈) —— 这是医疗用语，绝对禁止（针对你图片里的 Rhinitis 鼻炎）。
- ❌ **Anti-microbial / Anti-bacterial** (抗菌/抗病毒)。

修改建议：

只强调物理功能："Captures 99.97% of dust, pollen, smoke" 是最安全的说法。

**✅ 你的下一步行动清单**

1. **联系工厂：** "请提供这批货的 **EPA Establishment Number** 和 **CARB EO Number** (如有)。"
2. **检查包装：** 确认 EPA 号码已经印在包装盒上（不能是贴纸，必须是印刷，或者极其牢固的贴纸）。
3. **后台操作：** 按照上述步骤填入 Seller Central。
4. **上传实物图：** 假如亚马逊审核不通过，准备一张**清晰的包装盒六面图**，特写拍清楚 EPA 号码的位置，以备申诉使用。

好的，收到。为了消除 Listing 中的数据冲突，确立 **1073 sq ft** 为唯一权威数据，我们需要对文本进行精确的单位换算和统一化处理。

这不仅能让 Rufus 准确抓取答案，也能避免因参数混乱导致的买家投诉（“Not as described”）。

以下是具体的修改方案：

1. **核心数据换算与定义**

我们以 **1073 sq ft** 为基准：

- **英制面积：** **1073 sq ft**
- **公制面积（换算）：** $1073 \times 0.0929 \approx 99.68 m^2$。建议取整为 **100 ㎡**。
- **时间限定（合规关键）：** 对于小型机型标注大面积（1073 sq ft），通常是指 **1次换气/小时 (1 ACH)**。为了符合亚马逊对于“真实性”的要求，建议在文案中加上 "in 1 hour" 或 "based on 1 ACH"，这样更严谨，防止被投诉虚假宣传。

2. **Listing 文案修改建议 (Copy & Paste)**

请使用以下文案替换原有的冲突部分。

1. **标题 (Title) - 可选微调**  
   如果标题还有空间，建议将面积直接放入标题，增加权重。

| 建议添加: ... (20dB) Quiet Air Purifiers for Home Large Room up to 1073 Sq Ft, with 3 Light... |
| --- |

1. **五点描述 (Bullet Points) - 第4点重写**  
   原冲突点：同时出现了 70㎡ 和 375 sq ft。  
   新版本（统一为 1073 sq ft / 100 ㎡）：

| 【POWERFUL PURIFICATION FOR LARGE ROOMS】 Featuring 360° air intake technology, this high-efficiency air purifier is engineered to refresh the air in spaces up to 1073 sq ft (100 ㎡) within one hour. Ideally suited for spacious bedrooms, living rooms, and offices, it delivers consistent airflow to ensure every corner of your home is covered. |
| --- |

1. **产品描述 (Product Description) - 修正段落**

原冲突点：提到 "Fast Purification For Rooms Up To 375 Sq Ft"。

新版本：

| Wide Coverage for Every Home:Whether placed in a bedroom, nursery, or large living area, the air purifier is designed to handle it all. With its powerful filtration system, it effectively circulates and filters air in rooms as large as 1073 sq ft (approx. 100 ㎡), helping you and your family breathe fresher air day and night. |
| --- |

3. **图片与 A+ 页面检查清单 (Next Steps)**

由于 Rufus 也会扫描图片中的文字（OCR），请务必检查以下图片：

1. **图片 1600 拷贝 6.jpg (Fits for Every Corner):**

- 这张图上的文字目前是 *"Coverage Area Up to 1073 sq ft2"*。
- **检查：** "sq ft2" 写法有误（应该是 sq ft 或 $ft^2$）。如果可能，请美工修正为 **1073 sq ft**。
- **状态：** 数值正确（1073），需保留。

1. **图片 1600 拷贝 4.jpg 或其他参数图：**

- 请检查是否有任何图片残留了 "375 sq ft" 或 "70 ㎡" 的字样。如果有，**必须删除或替换**，否则 Rufus 依然会判定为“信息冲突”。

4. **模拟 Rufus 修正后的回答**

修改并上传后，Rufus 的回答将变为：

![](https://pic4.zhimg.com/v2-993802c92f0fa870caf80397cc1c8cbb_1440w.jpg)

**点击图片可查看完整电子表格**

**需要我为你生成这段关于“1073 sq ft”的 JSON 属性更新代码（用于后台批量上传）吗？**

[https://ai.feishu.cn/wiki/PuPzwP0n9ixj03kXPLQcDHqknkf?from=from\_copylink](https://link.zhihu.com/?target=https%3A//ai.feishu.cn/wiki/PuPzwP0n9ixj03kXPLQcDHqknkf%3Ffrom%3Dfrom_copylink)
