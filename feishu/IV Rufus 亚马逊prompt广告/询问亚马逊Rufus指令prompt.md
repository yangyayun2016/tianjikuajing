---
title: "询问亚马逊Rufus指令prompt"
feishu_url: https://my.feishu.cn/wiki/X1FbwtkCtiHo2lkS5xgcio0kn7d
obj_type: docx
obj_token: QGRed0TvBof6dpxNqFHcvejVnFh
updated: 2025-12-18T14:51:30+08:00
---

# 询问亚马逊Rufus指令prompt

Rufus问答验证【Rufus介绍】 

【背景】

- Rufus 是亚马逊用于购物问答与推荐的智能购物助手系统。

- Rufus 不会猜测商品能力，也不会使用 Listing 之外的隐含常识。

- 只有当 Listing 中存在明确、可引用的信息时，Rufus 才能给出确定回答并推荐商品。

- 本任务用于验证：当前 Listing 是否具备“无需猜测即可回答买家问题”的能力。
  

【角色】

你是一名 亚马逊 Listing 质检官（Rufus 视角），

职责是 模拟真实买家提问，并验证当前 Listing 是否提供了足够的信息，让 Rufus 能“直接回答、而不是猜”。

你的判断标准不是“回答是否好看”，而是：

Rufus 能否仅基于 Listing 中的明确文本或属性，给出确定、不含推断的回答

【输入】

- 产品标题: {title}

- 五点描述: {bullet_points}

- 产品描述: {description}

- 后台埋词: {Search Terms }

- 后台属性: {backend_terms}https://sellercentral.amazon.com/abis/ajax/reconciledDetailsV2?asin=B0FF3165LL

- 卖点与规格: {usps_specs}
  

【任务】

1. 请基于真实购物场景，生成 不少于 20 条“买家可能在 Rufus 中直接询问的问题，要求如下

- 问题必须是完整自然语言（不是关键词）

- 问题应体现买家在下单前的真实犹豫点

- 覆盖以下维度（可交叉）：

 -- 功能与效果（怎么用、效果如何）

 -- 适配与兼容（适合谁 / 不适合谁 / 使用场景）

 -- 安装 / 组装 / 使用门槛

 -- 清洁/维护（是否有替换配件，是否可水洗）

 -- 安全性（材质、安全限制、承重、风险，是否适合儿童使用）

 -- 对比与差异（与常见替代方案或版本的区别）

 -- 售后/保修/退换

1. 模拟 Rufus 作答：让AI仅基于输入的Listing内容（前台+后台文本与属性）进行回答，

只允许引用或复述 Listing 中“明确存在”的信息如果 Listing 中没有明确支持信息，必须如实反映“无法确定”

1. 对每个问题输出：
  - Question: [问题]  
  - Answer: [基于Listing文本生成的回答]  
  - Confidence: 可直接回答 / 部分可回答 / 无法回答  
  - Missing Info: [若无法或部分回答，指出具体缺失的字段、参数或措辞]  
    

【输出格式】

以表格形式输出：

| # | Question | Answer | Confidence | Missing Info |

Rufus问答验证【Rufus介绍】 

【背景】

- Rufus 是亚马逊用于购物问答与推荐的智能购物助手系统。

- Rufus 不会猜测商品能力，也不会使用 Listing 之外的隐含常识。

- 只有当 Listing 中存在明确、可引用的信息时，Rufus 才能给出确定回答并推荐商品。

- 本任务用于验证：当前 Listing 是否具备“无需猜测即可回答买家问题”的能力。
  

【角色】

你是一名 亚马逊 Listing 质检官（Rufus 视角），

职责是 模拟真实买家提问，并验证当前 Listing 是否提供了足够的信息，让 Rufus 能“直接回答、而不是猜”。

你的判断标准不是“回答是否好看”，而是：

Rufus 能否仅基于 Listing 中的明确文本或属性，给出确定、不含推断的回答

【输入】

- 产品标题: {title}

- 五点描述: {bullet_points}

- 产品描述: {description}

- 后台埋词: {Search Terms }

- 后台属性: {backend_terms}

- 卖点与规格: {usps_specs}
  

【任务】

1. 请基于真实购物场景，生成 不少于 20 条“买家可能在 Rufus 中直接询问的问题，要求如下

- 问题必须是完整自然语言（不是关键词）

- 问题应体现买家在下单前的真实犹豫点

- 覆盖以下维度（可交叉）：

 -- 功能与效果（怎么用、效果如何）

 -- 适配与兼容（适合谁 / 不适合谁 / 使用场景）

 -- 安装 / 组装 / 使用门槛

 -- 清洁/维护（是否有替换配件，是否可水洗）

 -- 安全性（材质、安全限制、承重、风险，是否适合儿童使用）

 -- 对比与差异（与常见替代方案或版本的区别）

 -- 售后/保修/退换

1. 模拟 Rufus 作答：让AI仅基于输入的Listing内容（前台+后台文本与属性）进行回答，

只允许引用或复述 Listing 中“明确存在”的信息如果 Listing 中没有明确支持信息，必须如实反映“无法确定”

1. 对每个问题输出：
  - Question: [问题]  
  - Answer: [基于Listing文本生成的回答]  
  - Confidence: 可直接回答 / 部分可回答 / 无法回答  
  - Missing Info: [若无法或部分回答，指出具体缺失的字段、参数或措辞]  
    

【输出格式】

以表格形式输出：

| # | Question | Answer | Confidence | Missing Info |

Rufus问答验证【Rufus介绍】 

【背景】

- Rufus 是亚马逊用于购物问答与推荐的智能购物助手系统。

- Rufus 不会猜测商品能力，也不会使用 Listing 之外的隐含常识。

- 只有当 Listing 中存在明确、可引用的信息时，Rufus 才能给出确定回答并推荐商品。

- 本任务用于验证：当前 Listing 是否具备“无需猜测即可回答买家问题”的能力。
  

【角色】

你是一名 亚马逊 Listing 质检官（Rufus 视角），

职责是 模拟真实买家提问，并验证当前 Listing 是否提供了足够的信息，让 Rufus 能“直接回答、而不是猜”。

你的判断标准不是“回答是否好看”，而是：

Rufus 能否仅基于 Listing 中的明确文本或属性，给出确定、不含推断的回答

【输入】

- 产品标题:LEVOIT Luftreiniger 3-in-1 HEPA Filter, Luftfilter gegen Schimmel, Staub, Pollen & Gerüche, Air Purifier für Schlafzimmer, App Steuerung & Timer, Schlafmodus & Nachtlicht, Mattweiß {title}
  

- 五点描述:𝐕𝐞𝐫𝐛𝐞𝐬𝐬𝐞𝐫𝐭𝐞𝐬 𝟑 𝐢𝐧 𝟏 𝐅𝐢𝐥𝐭𝐞𝐫𝐬𝐲𝐬𝐭𝐞𝐦: HEPA-, Aktivkohlefilter und Vorfilter entfernen Schadstoffe mit Größe von 0,3 um aus der Luft, damit Sie vor Pollen, Staub, Tierhaaren, Schimmelpilzsporen, Industrie- und Autoabgase und Gerüche geschützt sind

𝐇𝐨𝐜𝐡𝐞𝐟𝐟𝐢𝐳𝐢𝐞𝐧𝐭𝐞 𝐅𝐢𝐥𝐭𝐫𝐚𝐭𝐢𝐨𝐧: Mit 360° Design und Vortexair-Technologie reinigt Core 200S Luftreiniger die Luft in einem 31.5 m² großen Raum in weniger als 30 Minuten; Geeignet für Schlafzimmer, Wohnzimmer, Raucherzimmer, Kinderzimmer, Büro und Küche

𝐁𝐞𝐬𝐨𝐧𝐝𝐞𝐫𝐬 𝐥𝐞𝐢𝐬𝐞𝐫 𝐁𝐞𝐭𝐫𝐢𝐞𝐛: Mit QuietKEAP-Technologie arbeitet der Luftreiniger im Schlafmodus nahezu geräuschlos (24dB); Lautstärke bei höchster Stufe ist 45dB

𝐊𝐢𝐧𝐝𝐞𝐫𝐥𝐞𝐢𝐜𝐡𝐭𝐞 𝐓𝐨𝐮𝐜𝐡𝐝𝐢𝐬𝐩𝐥𝐚𝐲: Durch das Touchdisplay können Sie 4 Geschwindigkeitsstufen auswählen (Schlafmodus und 1-3 Lüfterstufen), Timer für 2-4-8 Stunden einstellen, Nachtlicht und Display ein-/ausschalten

𝐒𝐦𝐚𝐫𝐭 𝐅𝐞𝐫𝐧𝐛𝐞𝐝𝐢𝐞𝐧𝐮𝐧𝐠: Per VeSync App können Sie überall Lüfterstufe und Modus ändern, Filterlebensdauer prüfen, Zeitpläne festlegen, Timer einstellen; Durch Alexa und Google Assistant können Sie die Lüfterstufe ändern und das Gerät ein/ausschalten

𝐀𝐭𝐞𝐦𝐟𝐫𝐞𝐮𝐧𝐝𝐥𝐢𝐜𝐡: Core 200S Luftreiniger sorgt dafür, dass Sie bei Pollensaison und starker Luftbelastung gesunde Luft atmen

𝐒𝐢𝐜𝐡𝐞𝐫𝐡𝐞𝐢𝐭 𝐮𝐧𝐝 𝐕𝐞𝐫𝐭𝐫𝐚𝐮𝐞𝐧: Fremdmarken-Ersatzfilter können Ihrem Luftreiniger Schaden zufügen; Wir empfehlen, den Ersatzfilter mindestens alle 6-8 Monate auszutauschen; Bitte entfernen Sie die Verpackungsfolie des Filters, bevor Sie den Filter verwenden {bullet_points}

- 产品描述: {description}Wichtigste Highlights

Farbe        Mattweiß

Marke        Levoit

Produktabmessungen        20,5T x 20,5B x 32H cm

Bodenfläche        31,5 quadratmeter

Geräuschpegel        24 Dezibel

        Stromquelle

Kabelgebunden

        Artikelgewicht

3 Kilogramm

        Steuerungsmethode

App, Berühren, Sprachsteuerung

        Filtertyp

HEPA, Aktivkohlefilter, Vorfilter

Funktionen & technische Daten

Energiequelle        Kabelgebunden

Steuerungsart        App, Berühren, Sprachsteuerung

Filtertyp        HEPA, Aktivkohlefilter, Vorfilter

Bodenbereich        31,5 quadratmeter

Geräuschpegel        24 Dezibel

Controllertyp        Touchsteuerung und mobile App

Markenname        Levoit

Modellnummer        Core 200S White

UPC        810123677030

Hersteller        Levoit

ASIN        B0FDQTRDW4

Artikeltypbezeichnung        HEPA Luftreiniger

Ursprungsland        China

Artikelhöhe        32 cm

Anzahl von Einheiten        1.0 stück

Maße

Artikel Abmessungen T x B x H        20,5T x 20,5B x 32H cm

Artikelgewicht        3 Kilogramm

Zusätzliche Angaben

Farbe        Mattweiß

- 后台埋词: {Search Terms }luftreiniger,levoit luftreiniger,air purifier,levoit core 300s

- 后台属性: {backend_terms}{

"detailPageListingResponse": {

  "supplier_declared_dg_hz_regulation#1.value": {

    "displayLabel": "危险商品规管",

    "value": "not_applicable"

  },

  "item_name#1.value": {

    "displayLabel": "商品名称",

    "value": "LEVOIT Air Purifier for Bedroom, Quiet Air Filter Removes 99.97% of Allergens, App & Alexa Controllable, with Timer & Night Light, Up to 35 m², Against Dust, Pet Hair, Pollen, Odors, Silver White"

  },

  "brand#1.value": {

    "displayLabel": "品牌名",

    "value": "LEVOIT"

  },

  "pattern#1.value": {

    "displayLabel": "图案",

    "value": "air purifier"

  },

  "item_weight#1.value": {

    "displayLabel": "商品重量",

    "value": "3.0"

  },

  "model_number#1.value": {

    "displayLabel": "型号",

    "value": "Core 200S White"

  },

  "detail_page_primary_image_url": {

    "displayLabel": "",

    "value": "https://images-na.ssl-images-amazon.com/images/I/01RmK+J4pJL._SS160_.gif"

  },

  "bullet_point#1.value": {

    "displayLabel": "要点",

    "value": "HEPA activated carbon filters and pre-filter remove pollutants with size of 0.3 um from the air, so you are protected from pollen, dust, pet hair, mould spores, industrial and car exhaust gases and odours"

  },

  "item_depth_width_height#1.depth.value": {

    "displayLabel": "商品从前到后的深度",

    "value": "20.5"

  },

  "item_package_weight#1.unit": {

    "displayLabel": "包装重量单位",

    "value": "kilograms"

  },

  "number_of_items#1.value": {

    "displayLabel": "产品数量",

    "value": "1"

  },

  "item_package_weight#1.value": {

    "displayLabel": "包装重量",

    "value": "3.79"

  },

  "product_type#1.value": {

    "displayLabel": "产品类型",

    "value": "AIR_PURIFIER"

  },

  "color#1.value": {

    "displayLabel": "颜色",

    "value": "Silver white"

  },

  "item_package_dimensions#1.height.unit": {

    "displayLabel": "包装高度单位",

    "value": "centimeters"

  },

  "item_package_dimensions#1.height.value": {

    "displayLabel": "包装高度",

    "value": "36.9"

  },

  "product_site_launch_date#1.value": {

    "displayLabel": "产品网站发布日期",

    "value": "2025-08-31T06:49:30.678Z"

  },

  "item_package_dimensions#1.width.value": {

    "displayLabel": "包装宽度",

    "value": "24.4"

  },

  "item_package_dimensions#1.length.value": {

    "displayLabel": "包装长度",

    "value": "24.2"

  },

  "part_number#1.value": {

    "displayLabel": "零件编号",

    "value": "Core 200S White"

  },

  "style#1.value": {

    "displayLabel": "风格",

    "value": "App control + night light"

  },

  "item_package_dimensions#1.width.unit": {

    "displayLabel": "包装宽度单位",

    "value": "centimeters"

  },

  "item_depth_width_height#1.width.value": {

    "displayLabel": "商品左右宽度",

    "value": "20.5"

  },

  "item_depth_width_height#1.height.unit": {

    "displayLabel": "商品高度单位",

    "value": "centimeters"

  },

  "item_depth_width_height#1.depth.unit": {

    "displayLabel": "商品深度单位",

    "value": "centimeters"

  },

  "floor_area#1.unit": {

    "displayLabel": "占地面积的单位",

    "value": "square_meters"

  },

  "manufacturer#1.value": {

    "displayLabel": "制造商",

    "value": "Levoit"

  },

  "externally_assigned_product_identifier#1.value": {

    "displayLabel": "外部产品 ID",

    "value": "810123677030"

  },

  "noise_level#1.unit": {

    "displayLabel": "噪声级单位",

    "value": "decibels"

  },

  "item_package_quantity#1.value": {

    "displayLabel": "成套产品数量",

    "value": "1"

  },

  "floor_area#1.value": {

    "displayLabel": "占地面积",

    "value": "31.5"

  },

  "item_type_keyword#1.value": {

    "displayLabel": "产品类型关键字",

    "value": "hepa-filter-air-purifiers"

  },

  "item_package_dimensions#1.length.unit": {

    "displayLabel": "包装长度单位",

    "value": "centimeters"

  },

  "item_depth_width_height#1.width.unit": {

    "displayLabel": "商品宽度单位",

    "value": "centimeters"

  },

  "item_weight#1.unit": {

    "displayLabel": "商品重量单位",

    "value": "kilograms"

  },

  "color#1.standardized_values#1": {

    "displayLabel": "色彩地图",

    "value": "Silver white"

  },

  "item_depth_width_height#1.height.value": {

    "displayLabel": "底部到顶部的高度",

    "value": "32.0"

  },

  "noise_level#1.value": {

    "displayLabel": "噪声级",

    "value": "24.0"

  },

  "externally_assigned_product_identifier#1.type": {

    "displayLabel": "外部产品 ID 类型",

    "value": "upc"

  }

},

"detailPageListingResponseImsv3": "{\"brand\":[{\"value\":\"LEVOIT\"}],\"bullet_point\":[{\"value\":\"HEPA activated carbon filters and pre-filter remove pollutants with size of 0.3 um from the air, so you are protected from pollen, dust, pet hair, mould spores, industrial and car exhaust gases and odours\"}],\"color\":[{\"standardized_values\":[\"Silver white\"],\"value\":\"Silver white\"}],\"detail_page_primary_image_url\":\"https://images-na.ssl-images-amazon.com/images/I/01RmK+J4pJL._SS160_.gif\",\"externally_assigned_product_identifier\":[{\"type\":\"upc\",\"value\":\"810123677030\"}],\"floor_area\":[{\"unit\":\"square_meters\",\"value\":\"31.5\"}],\"item_depth_width_height\":[{\"depth\":{\"unit\":\"centimeters\",\"value\":\"20.5\"},\"height\":{\"unit\":\"centimeters\",\"value\":\"32.0\"},\"width\":{\"unit\":\"centimeters\",\"value\":\"20.5\"}}],\"item_name\":[{\"value\":\"LEVOIT Air Purifier for Bedroom, Quiet Air Filter Removes 99.97% of Allergens, App & Alexa Controllable, with Timer & Night Light, Up to 35 m², Against Dust, Pet Hair, Pollen, Odors, Silver White\"}],\"item_package_dimensions\":[{\"height\":{\"unit\":\"centimeters\",\"value\":\"36.9\"},\"length\":{\"unit\":\"centimeters\",\"value\":\"24.2\"},\"width\":{\"unit\":\"centimeters\",\"value\":\"24.4\"}}],\"item_package_quantity\":[{\"value\":\"1\"}],\"item_package_weight\":[{\"unit\":\"kilograms\",\"value\":\"3.79\"}],\"item_type_keyword\":[{\"value\":\"hepa-filter-air-purifiers\"}],\"item_weight\":[{\"unit\":\"kilograms\",\"value\":\"3.0\"}],\"manufacturer\":[{\"value\":\"Levoit\"}],\"model_number\":[{\"value\":\"Core 200S White\"}],\"noise_level\":[{\"unit\":\"decibels\",\"value\":\"24.0\"}],\"number_of_items\":[{\"value\":\"1\"}],\"part_number\":[{\"value\":\"Core 200S White\"}],\"pattern\":[{\"value\":\"air purifier\"}],\"product_site_launch_date\":[{\"value\":\"2025-08-31T06:49:30.678Z\"}],\"product_type\":[{\"value\":\"AIR_PURIFIER\"}],\"style\":[{\"value\":\"App control + night light\"}],\"supplier_declared_dg_hz_regulation\":[{\"value\":\"not_applicable\"}]}",

"reconciledDataSummary": null,

"debug": null

}

- 卖点与规格: {usps_specs}
  

Farbe        Mattweiß

Marke        Levoit

Produktabmessungen        20,5T x 20,5B x 32H cm

Bodenfläche        31,5 quadratmeter

Geräuschpegel        24 Dezibel

Stromquelle

Kabelgebunden

        Artikelgewicht

3 Kilogramm

        Steuerungsmethode

App, Berühren, Sprachsteuerung

        Filtertyp

HEPA, Aktivkohlefilter, Vorfilter

Technische Details

Marke        Levoit

Modellnummer        Core 200S White

Farbe        Mattweiß

Produktabmessungen        20,5 x 20,5 x 32 cm; 3 Kilogramm

Lautstärke        24 Dezibel

Artikelgewicht        3 Kilograms

- 链接：https://www.amazon.de/dp/B0FDQTRDW4

- 评论AI总结：Die Kunden sagen

Die Kunden sind mit dem Luftreiniger insgesamt zufrieden. Sie beschreiben ihn als leise und nicht störend. Die Qualität wird als gut und überraschend gut beschrieben. Die Luftqualität wird als sauber, frisch und gesund empfunden. Viele Kunden loben die Wirksamkeit und Leistung des Geräts. Die Bedienung wird als einfach und unkompliziert empfunden. Das Preis-Leistungs-Verhältnis wird ebenfalls positiv bewertet. Es gibt jedoch gemischte Meinungen zur Zuverlässigkeit und Geruchsfreiheit.

KI-generiert aus dem Text von Kundenrezensionen

KI-generiert aus dem Text von Kundenrezensionen

Auswählen, um mehr zu erfahren

Geräuschpegel(667)

Qualität(660)

Luftqualität(657)

Wirksamkeit(635)

Bedienung(310)

Preis-Leistung(222)

Zuverlässigkeit(226)

Geruchsfreiheit(174)

【任务】

1. 请基于真实购物场景，生成 不少于 20 条“买家可能在 Rufus 中直接询问的问题，要求如下

- 问题必须是完整自然语言（不是关键词）

- 问题应体现买家在下单前的真实犹豫点

- 覆盖以下维度（可交叉）：

 -- 功能与效果（怎么用、效果如何）

 -- 适配与兼容（适合谁 / 不适合谁 / 使用场景）

 -- 安装 / 组装 / 使用门槛

 -- 清洁/维护（是否有替换配件，是否可水洗）

 -- 安全性（材质、安全限制、承重、风险，是否适合儿童使用）

 -- 对比与差异（与常见替代方案或版本的区别）

 -- 售后/保修/退换

1. 模拟 Rufus 作答：让AI仅基于输入的Listing内容（前台+后台文本与属性）进行回答，

只允许引用或复述 Listing 中“明确存在”的信息如果 Listing 中没有明确支持信息，必须如实反映“无法确定”

1. 对每个问题输出：
  - Question: [问题]  
  - Answer: [基于Listing文本生成的回答]  
  - Confidence: 可直接回答 / 部分可回答 / 无法回答  
  - Missing Info: [若无法或部分回答，指出具体缺失的字段、参数或措辞]  
    

【输出格式】

以表格形式输出：

| # | Question | Answer | Confidence | Missing Info |

