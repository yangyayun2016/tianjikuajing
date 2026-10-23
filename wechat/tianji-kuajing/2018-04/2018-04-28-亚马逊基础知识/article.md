---
title: 亚马逊基础知识
source_url: "https://mp.weixin.qq.com/s/AIHYiPi4oBu8rgOj30X1JQ"
published_at: "2018-04-28T00:18:34+08:00"
content_hash: 2327be1644ab54ebec6fd35cacaf41d80c672dbe4e9b076749e6f9f37b271e59
platform: wechat
author: 天机跨境
account: tianji-kuajing
---
# 亚马逊基础知识

> Source: wechat
> Author: 天机跨境
> Original: https://mp.weixin.qq.com/s/AIHYiPi4oBu8rgOj30X1JQ

---

![cover](images/cover.jpg)

---

第四天 成效衡量

En-6.Performance and reporting

![Image](images/img_001.png)

En-6.Performance and reporting-1.advertising cost of sales

![Image](images/img_002.png)

En-6.Performance and reporting-1.campaign metrics

![Image](images/img_003.png)

En-6.Performance and reporting-2.ad metrics

![Image](images/img_004.png)

En-6.Performance and reporting-3.ad and keyword metric

![Image](images/img_005.png)

En-6.Performance and reporting-4.additional sponsored products metric

![Image](images/img_006.png)

报告类型

![Image](images/img_007.png)

## Day4-各类报告-3组

**1，En-6.Performance and reporting-5.1 Performance over time report**

![Image](images/img_008.png)

**2，En-6.Performance and reporting-5.2 Performance by SKU**

![Image](images/img_009.png)

**3，En-6.Performance and reporting-5.3 Search term report**

![Image](images/img_010.png)

**4，En-6.Performance and reporting-5.4 other asin report**

![Image](images/img_011.png)

**5，En-6.Performance and reporting-5.5 Campaign performance report**

![Image](images/img_012.png)

**6，En-6.Performance and reporting-5.6 Performance by placement report**

![Image](images/img_013.png)

**7，En-6.Performance and reporting-5.Reports overview**

![Image](images/img_014.png)

**8，En-6.Performance and reporting-6.Traffic validation**

![Image](images/img_015.png)

**9，keyword-bid-report-2017-04-20-105470017277**

![Image](images/img_016.png)

![Image](images/img_017.png)

Day5 CPC广告批量上传

1,En-7.Bulk Operations

![Image](images/img_018.png)

2,En-7.Bulk Operations-1.Create a bulk file for Sponsored Products

![Image](images/img_019.png)

3,En-7.Bulk Operations-2. Update bids across multiple campaign

![Image](images/img_020.png)

4,En-7.Bulk Operations-3. Create a new campaign with bulk operations

![Image](images/img_021.png)

5,En-7.Bulk Operations-4.Add products to a campaign with bulk operations

![Image](images/img_022.png)

6,En-7.Bulk Operations-5.Pause keywords with bulk operations

![Image](images/img_023.png)

7,En-7.Bulk Operations-6.Add negative keywords with bulk operations

![Image](images/img_024.png)

8,En-7.Bulk Operations-7.Bulk file errors for Sponsored Products

![Image](images/img_025.png)

9,En-7.Bulk Operations-8.Integrate with the Advertising API

![Image](images/img_026.png)

## 批量上传常见错误讲解

Feed Processing Summary :

Number of records processed         399 本次上传商品数量

Number of records successful 294 本次上传商品成功数量

original-record-number sku ：错误SKU                           error-code ：错误代码            error-type ： 类别         error-message ：错误信息

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | 错误SKU | 错误代码 | 类别 | 错误信息 |
| original-record-number | sku | error-code | error-type | error-message |
| 0 | ABC | 90009 | Fatal | The file's header row is missing or invalid. The header row is for Amazon use only and must not be modified or deleted. To correct this error, download the template again from seller Help and use that new copy, or insert the correct header row directly above the column headings in your existing file. 批量上传模板的格式错误。原因：批量上传模板的前三行被改动过；或者是保存为文本文件（制表符分隔）.txt的时候出现错误，保存成了错误的文件格式。 |
|  |  |  |  |  |
| 0 |  | 90012 | Fatal | The required sku field is missing from the file. To correct this error, download the template again and use the new copy, or insert the required field into your existing file. SKU是必填项不能为空。原因：SKU没填写或者有可能是数据最后一条下面有一些空行造成的，请删除空行。 |
|  |  |  |  |  |
| 1 | N7100B93 | 8541 | Error | SKU N7100B93, ASIN B00F414X08, ('item\_name' Merchant: 'Generic Hard Back Case Cover Black Nautical Stripes Compatible With Samsung Galaxy Note II 2 N7100 Color White' / Amazon: 'Generic Hard Back Case Cover Keep Calm And Carry on & Blue Vintage Chevrons Pattern Compatible With Samsung Galaxy S III S3 i9300 Color White', 'merchant\_sku' Merchant: 'N7100B93' / Amazon: '', 'customer\_id' Merchant: '13235707105' / Amazon: ''). The product\_id provided with N7100B93 corresponds to ASIN B00F414X08, but some of the information submitted contradicts information in the Amazon catalog. If your product is the same as this ASIN, please modify your product data to reflect the following Amazon catalog values and resubmit. If your product is different than the ASIN, please check that the product\_id is correct. If it is correct, please contact Seller Support for proper resolution.Feed ID: 0 For details, see http://sellercentral.amazon.com/gp/errorcode/8541  UPC冲突。原因：本次上传商品所使用的UPC码跟亚马逊已有商品一样但是有些信息不一致导致的错误，通常是由于非正规渠道购买的UPC码造成的，请在正规渠道购买UPC码。如果UPC没问题，请检查批量上传模板里面是否有UPC重复，并且确认该UPC是否在美国或英国亚马逊平台使用过，如果使用过请确保本次上传的商品信息与另一平台上传过的商品信息保持一致。 |
|  |  |  |  |  |
| 365 | X80052 | 20000 | Error | Error downloading image from URL: http://www.moonvivi.com/albums/women-shoes/x80052/b03.jpg . HTTP Status Code: 404.  For more details, see http://sellercentral.amazon.com/gp/errorcode/20004 图片URL错误。原因：图片URL有问题，请修改图片URL，注意必须是.jpg结尾，必须可以直接在浏览器里查看该图片。 |
|  |  |  |  |  |
| 663 | X80008 | 8801 | Warning | The child SKU ('X80008BL35') could not be added to parent SKU ('X80008') because another SKU ('X80008BL36') has the same variation attributes (["color\_name"]) and is already associated with the parent SKU. 多属性商品父子关系错误。原因：多属性商品父子关系重复，请确定一组多属性商品里，同样属性的子商品只出现一次，上面这个错误的意思是，同样颜色的子商品出现多次。 |
|  |  |  |  |  |
| 384 | C0002 | 8032 | Error | Invalid variation relationship: The child variation is already assigned to a parent SKU. Please delete the old relationship before submitting a new relationship. 多属性商品父子关系错误。原因：这商品之前上传过并且已经分配给了另一组多属性商品了，通常是由于SKU分配失误或者parent sku字段填写失误造成的。 |
|  |  |  |  |  |
| 351 | C0013 | 8803 | Warning | Your feed has a parent/child relationship between parent SKU 'C0013' and child SKU 'C0003Y36' that cannot be created. Your child SKU shares the same variation attributes with another child ASIN 'B00EZ6RWD8, B00EZ6RNNW', which is not allowed. Do one of the following and then resubmit your feed: 1) Correct the variation attributes for your child SKU.  2) Update your child SKU to match ASIN 'B00EZ6RWD8, B00EZ6RNNW'.  3) Assign a different parent SKU to your child SKU.  4) Remove the variation theme on your child SKU, and remove the relationship to your child SKU.  多属性商品父子关系错误。原因：本次上传数据里的这组父子商品SKU 'C0013' 和 SKU 'C0003Y36' 有问题，子商品 SKU 'C0003Y36' 跟亚马逊平台已有商品ASIN 'B00EZ6RWD8, B00EZ6RNNW' 有同样的属性所以上传失败 。解决方法，1) 修改这个子商品属性； 2) 更新已有商品的属性；3) 修改父商品SKU；4) 删除父子关系字段。 |
|  |  |  |  |  |
| 426 | C0018B38 | 5000 | Error | The value 'C0018B38' for 'SKU' in this message was the same as previous message(s) '418', which is not allowed. This message was skipped. 商品信息重复。原因：SKU 'C0018B38'的全部字段信息，与之前上传过的数据里面的信息完全一致，所以本次不会上传这个商品。 |
|  |  |  |  |  |
| 1 | PH1335 | 99043 | Warning | The value provided for "Item Type Keyword" (TOY) is not valid. Please use the Product Classifier or download the category-specific Browse Tree Guide from Seller Help to see a list of valid "Item Type Keyword" (TOY) values. This information tells Amazon where your product should be classified and affects how easily customers can find your product. 字段信息错误。原因：某些字段如 Item type keyword 是有下拉菜单值的， 不是随便填什么都可以的， 填写的信息有问题的时候会有这个错误， 请修改这个字段的信息。这个Item Type Keyword字段需要通过后台的Product Classifier功能查找后填写；其他字段如Department是要通过批量上传模板的Valid Value表格查找的。 |
|  |  |  |  |  |
| 79 | Z6015F | 8026 | Error | Seller is not authorized to list products in this category. For more details, see http://sellercentral.amazon.com/gp/errorcode/8026 品类审批问题。原因：请申请品类并获得批准后再上传该品类的商品，服装，眼镜，鞋包，腰带，手表，珠宝首饰，汽配等商品需要品类审批，具体信息查看后台Help。 |
|  |  |  |  |  |
| 1 | HH33-02T | 99041 | Warning | A value was not provided for "bullet\_point". Please provide a value for "bullet\_point". This information appears on the product detail page and helps customers evaluate products.  字段信息错误。原因：Bullet point字段是必填项，不能为空。 |
|  |  |  |  |  |
| 5 | HA-11-32L | 90117 | Error | The generic\_keywords1 field contains an invalid value: Harvest Penumatic Swing Clamp Cylinder Top Flange Line Type HA-11-32L60 Single Side Rotary Angle ... The value exceeds the maximum number of characters allowed: 50. 字段信息错误。原因：generic\_keywords1这个字段最大值为50字符。 |
|  |  |  |  |  |
| 1 | HH33-02T | 90117 | Error | The Subject Matter1 field contains an invalid value: Harvest Hydraulic Supporting Cylinder Spring Rising Contact Type Force 2KN HH33-02T Color Black. The value exceeds the maximum number of characters allowed: 50. 字段信息错误。原因：Subject Matter1这个字段最大值为50字符。 |
|  |  |  |  |  |
| 1 | XD-SC01 | 99040 | Warning | A value was not provided for "Main Image URL". Please provide a value for "Main Image URL" so the product has an image. Images appear in search results and on the product detail page, and help customers evaluate products. 字段信息错误。原因："Main Image URL"这个字段不能为空。 |
|  |  |  |  |  |
| 1 | 007-10% | 99010 | Error | A value is missing from one or more required columns from this group: [Sale Price = "55"], [Sale Start Date = null], [Sale End Date = null]. 字段信息错误。原因：Sale Price优惠价，Sale Start Date优惠开始日期，Sale End Date优惠结束日期， 这三个字段只要填写了其中一个字段， 另外两个字段就必须填写。 |
|  |  |  |  |  |
| 1 | MA0802B | 99010 | Error | A value is missing from one or more required columns from this group: [Parentage = "parent"], [Variation Theme = null]. 字段信息错误。原因：Parentage （父子关系）字段填写了parent的商品，variation theme（多属性变体主题）字段为必填项，不能留空， 此处可以填写跟子商品一样的值。 |
|  |  |  |  |  |
| 10 | E005-US4 | 8560 | Error | SKU E005-US4-Pink-MFN, Missing Attributes standard\_product\_id,missing\_keyset\_reason. SKU E005-US4-Pink-MFN does not match any ASIN. Creation of a new ASIN requires the following missing attributes: standard\_product\_id,missing\_keyset\_reason. Feed ID: 0. For details, see http://sellercentral.amazon.com/gp/errorcode/200692370 字段信息错误。原因：standard\_product\_id (UPC码) 字段不能为空，如果是申请了品来认证的卖家，请确保品牌认证已经通过审批，standard product id字段留空，在Style Number或者Manufacturer Part Number字段填写16位的代码，改代码不能重复，每个SKU要有一个。 |
|  |  |  |  |  |
| 0 |  | 90000 | Info | http://sellercentral.amazon.com/myi/search/ErrorListingsSummary?batchId=9633268674  衍生错误。原因：由于其他错误造成了这个错误，修改好其他错误后这个错误会消失，通常是多属性商品错误或者必填项字段没有填写造成的。 |
|  |  |  |  |  |
| 175 | S0028BXL | 13013 | Error | This SKU does not exist in your Amazon inventory so we could not process this record. To correct this error for future feeds, add the SKU to your Amazon account. For more information, see http://sellercentral.amazon.com/gp/errorcode/13013.  衍生错误。原因：由于其他错误造成了这个错误，修改好其他错误后这个错误会消失，通常是多属性商品错误或者必填项字段没有填写造成的。 |
|  |  |  |  |  |
| 175 | S0028BXL | 20005 | Error | Cannot associate image with an existing product. For more details, see http://sellercentral.amazon.com/gp/errorcode/20005  衍生错误。原因：由于其他错误造成了这个错误，修改好其他错误后这个错误会消失，通常是多属性商品错误或者必填项字段没有填写造成的。 |
|  |  |  |  |  |
| 1 | MA0802B | 99006 | Error | A value is required in the "Quantity" field because there are values in dependent fields.: [Fulfillment Latency = "5"]. 字段信息错误。原因：如果Fulfillment Latency（备货时间字）段填写了任何数字， 则Quantity（库存量）字段也要填写， 注意：父商品是不需要填写备货时间和库存量两个字段的。 |
|  |  |  |  |  |
| 1 | MA0802B | 99006 | Error | A value is required in the "Standard Price" field because there are values in dependent fields.: [Sale Start Date = "2014-4-21"], [Sale End Date = "2015-4-21"]. 字段信息错误。原因：如果Sales Start Date （促销开始日期）和Sale End Date （促销结束日期）字段填写了，则Standard Price （商品售价）字段必须填写。如果商品是多属性父子商品中的子商品，则促销价格，促销开始结束日期，商品售价字段留空，不需要填写。 |
|  |  |  |  |  |
| 2 | 9001069 | 8560 | Error | SKU 9001069, Missing Attributes part\_number. SKU 9001069 does not match any ASIN. Creation of a new ASIN requires the following missing attributes: part\_number. Feed ID: 0. For details, see http://sellercentral.amazon.co.uk/gp/errorcode/200692370 字段信息错误。原因：part number（零件编码）字段为必填项，不能为空。 |

## BULK UPLOAD练习（需求模拟）

销售1：

将LCL-MZ开头广告系列状态改为暂停

销售2：

将ZCP-IRIS过去两月ACOS高于50%的关键字状态改为暂停

销售3：

将ZCP-IRIS过去两月订单数大于5，ACOS低于20%的关键字出价提升0.05

销售4：

要将C-小组广告搬迁到另外一个账号，将表格准备好。

销售5：

增加以下关键字到广告系列ZTJ005675\*

广告组1

test1

test2

test3

销售6：

创建批量为以下料号创建自动广告，预算10，默认出价0.25,广告系列命名开头是118-1-AD11,开始时间是当下

118-1-AD11-2031-AUTO

AM002031-1

AM002033-3

AM002030-1

销售7：利用上传功能创建手动广告系列，广告系列命名是开头是101-02-AD10

开始时间是当下

广告系列预算10

SKU是：AM002034

关键字是：

test7

test8

test9

匹配方式是广泛

广告组默认出价0.35，名称是广告组1

test8出价0.28

需要上传模板和正确答案可以联系我

批量需求模拟-正解
