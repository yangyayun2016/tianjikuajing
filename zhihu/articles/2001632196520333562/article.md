# 谈谈对亚马逊rufus一些自己的感受和心得

Source: https://zhuanlan.zhihu.com/p/2001632196520333562

listing优化方案，建议下载

谈谈对亚马逊rufus一些自己的感受和心得

![](https://picx.zhimg.com/v2-32070d69d919415a8864c8eda08dad5f_1440w.jpg)![](https://pic2.zhimg.com/v2-1e3558b1b975d44ed5827d8436e95b03_1440w.jpg)![](https://pica.zhimg.com/v2-7f891c0f8b8ca9b5a9904ac82f69ee54_1440w.jpg)

Rufus原理 答案占位率

![](https://pic4.zhimg.com/v2-66942a4288120c7eae964e15b97a5acb_1440w.jpg)![](https://pica.zhimg.com/v2-97e0b73a345df1ac71762abe10fce764_1440w.jpg)![](https://pic1.zhimg.com/v2-5fc98117f7c7b0c64d5ec55523f5ffd6_1440w.jpg)

如何进行操作，抓取亚马逊后台广告数据：

![](https://pic1.zhimg.com/v2-61e767d539dc2aab1a132a3d28710d52_1440w.jpg)![](https://pic1.zhimg.com/v2-798d4140845f33ea7b92101fd0e34e54_1440w.jpg)![](https://pic3.zhimg.com/v2-5ec5c2391eddf59bb6608d9274f566d8_1440w.jpg)![](https://pic4.zhimg.com/v2-78e0b789891fba772a427237b1d54b43_1440w.jpg)

具体指令：

---------------

/\*Query Template : Time to Conversion\*/

SELECT

advertiser,

campaign,

campaign\_id\_string,

CASE

WHEN traffic\_event\_subtype = 'AD\_IMP' THEN (

CASE

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 60 THEN '1 | < 1 MIN'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 600 THEN '2 | 1 - 10 MIN'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 1800 THEN '3 | 10 - 30 MIN'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 3600 THEN '4 | 30 - 60 MIN'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 7200 THEN '5 | 1 - 2 HRS'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 43200 THEN '6 | 2 - 12 HRS'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 86400 THEN '7 | 12 - 24 HRS'

WHEN SECONDS\_BETWEEN (impression\_dt, conversion\_event\_dt) <= 604800 THEN '8 | 1 - 7 DAYS'

ELSE '9 | 7+ DAYS'

END

)

WHEN traffic\_event\_subtype = 'AD\_CLICK' THEN (

CASE

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 60 THEN '1 | < 1 MIN'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 600 THEN '2 | 1 - 10 MIN'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 1800 THEN '3 | 10 - 30 MIN'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 3600 THEN '4 | 30 - 60 MIN'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 7200 THEN '5 | 1 - 2 HRS'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 43200 THEN '6 | 2 - 12 HRS'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 86400 THEN '7 | 12 - 24 HRS'

WHEN SECONDS\_BETWEEN (click\_dt, conversion\_event\_dt) <= 604800 THEN '8 | 1 - 7 DAYS'

ELSE '9 | 7+ DAYS'

END

)

ELSE 'Other'

END AS time\_to\_conversion,

SUM(purchases) AS purchases,

SUM(total\_purchases) AS total\_brand\_purchases

FROM

amazon\_attributed\_events\_by\_conversion\_time

WHERE

(

CUSTOM\_PARAMETER('ad\_product\_type') IS NULL

OR CARDINALITY(CUSTOM\_PARAMETER('ad\_product\_type')) = 0

OR ARRAY\_CONTAINS(

CUSTOM\_PARAMETER('ad\_product\_type'),

COALESCE(ad\_product\_type, 'DSP')

)

)

OR (

CUSTOM\_PARAMETER('campaign\_id') IS NULL

OR CARDINALITY(CUSTOM\_PARAMETER('campaign\_id')) = 0

OR ARRAY\_CONTAINS(

CUSTOM\_PARAMETER('campaign\_id'),

campaign\_id\_string

)

)

GROUP BY

1,

2,

3,

4

ad\_product\_type:

description: Provide one or more ad product types.

dataType:

type: ARRAY

elementDataType: STRING

value:

- sponsored\_products

- sponsored\_brands

- sponsored\_display

- DSP

campaign\_id:

description: Optional filter by campaign IDs.

dataType:

type: ARRAY

elementDataType: STRING

value:

- '1111111111111'

- '2222222222222'

核心理念

![](https://pic3.zhimg.com/v2-b1f2a8ef1a5ed19e1b95ce584f3d04de_1440w.jpg)

[https://mp.weixin.qq.com/s/wMBQSw3WPTH3ZxXGbPKEbw](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s/wMBQSw3WPTH3ZxXGbPKEbw)
