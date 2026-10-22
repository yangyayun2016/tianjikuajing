VC下架订单分析

你这种情况需要先要看看前台没有 Buy Box / Featured Offer，不代表一定完全不能成交；客户有时可能通过 “Other sellers / See options” 入口购买，或者订单实际来自 SC/3P/FBA/FBM，而不是 VC Retail。Amazon 对 Featured Offer 主要看价格、配送、订单体验、库存等因素；无 Featured Offer 常见原因也包括缺货、价格过高或过低。

![[Pasted image 20260507123742.png]]


建议你先确认几个点：

1. 订单来源到底是 VC Retail 订单、SC 订单，还是第三方卖家订单？

2. 前台是完全没有购买入口，还是没有 Buy Box 但还有 “Other sellers / See options”？

3. ASIN 是否还有 Amazon Retail 残余库存、FBA库存、FBM库存、变体子体、bundle 或不同站点库存？

4. 你说的“VC下架”是停止下 PO / 不再补货，还是 ASIN 被抑制、不可售、不可补货？这几个不是同一件事。

5. case 说“不盈利”，通常要回到 profitability 维度排查，比如 cost price、list price、促销 funding、co-op/佣金扣点、物流成本、退货损耗、chargeback、价格匹配、库存周转和历史销量等。

所以我会先看后台订单报表和前台 offer 状态。如果订单确实还在出，优先判断是不是 SC/3P 在出，或者 VC 还有残余库存/延期订单；如果完全是 Retail 新订单，那才需要继续开 case 让 Amazon 确认 ASIN 的 buyability、retail offer 和补货状态。

你自己的判断方向是对的：**“VC没有购物车但还能出单”不能直接下结论，要先确认是不是 SC 在出、还是 VC残余库存/其他购买入口在出。**

另外“不盈利”确实不是单一原因，建议围绕 **NET PPM / 成本 / 扣点 / funding / 物流退货 / 价格竞争 / 库存周转** 逐项排查。

给新同事的 NET PPM 公式也可以顺手整理成这样：

**NET PPM（不促销）**

`(List Price - Cost Price + 佣金扣点 × Cost Price) / List Price`

**NET PPM（BD促销）**

`(促销后 List Price - Cost Price + 促销 Funding + 佣金扣点 × Cost Price) / 促销后 List Price`

[1]: https://sell.amazon.com/blog/buy-box-featured-offer "Maximize Your Sales Potential with the Amazon Featured Offer (formerly Buy Box) - Sell on Amazon"

对，这个可以补充进你的专业回答里：**AVS 常规会从盈利性角度建议做 CPD 或提 RRP，但这只能解释“不盈利/不补货”的处理方向，不能直接解释“没购物车为什么还能出单”。**

你可以这样回朋友：

这个情况我建议先分两层看：

第一层先确认订单来源。VC 下架、没有 Buy Box，不代表 ASIN 一定完全不能成交，有可能是 SC/3P/FBA/FBM 在出，也可能前台没有主购物车但还有 Other Sellers 入口，或者 VC 还有残余库存、延期订单、变体流量带来的订单。所以先看后台订单报表，确认是 Retail 订单还是 Marketplace 订单。

第二层再看 Amazon 为什么说不盈利。AVS 对这类问题通常会建议两个方向：一个是做 CPD，降低 Cost Price；另一个是提 RRP，提高零售价空间。本质上都是为了改善 NET PPM / Retail profitability。

但这两个动作要谨慎看。CPD 会直接影响供货毛利；提 RRP 也不一定能解决问题，因为 Amazon 前台成交价还会受竞品价格、价格匹配、Buy Box、促销、库存和转化影响。RRP 提高后，如果前台价格无法同步上去，或者转化变差，可能也不能真正改善盈利。

所以我的建议是：先确认订单到底是谁在出，再根据 NET PPM 拆 cost price、list price/RRP、funding、佣金扣点、物流退货、chargeback、促销和竞品价格。确认是盈利性问题后，再跟 AVS 讨论 CPD 或 RRP 哪个更适合。

你也可以更短一点说：

AVS 一般会建议做 CPD 或提 RRP，因为 Amazon 判断不盈利主要看 retail profitability / NET PPM。但这个和“没有 Buy Box 还能出单”是两个问题。

我会先确认订单来源：到底是 VC Retail 在出，还是 SC/3P/FBA/FBM 在出，或者只是没有主购物车但还有 Other Sellers 入口。确认订单来源后，再看不盈利原因。如果确实是 VC 盈利性问题，再拆 NET PPM，评估 CPD、RRP、funding、扣点、物流退货、chargeback 和竞品价格。

你的原话可以改成：**“AVS 建议 CPD 或提 RRP 是常规盈利性修复方案，但我会先确认 buyability 和订单来源，再判断是不是盈利性导致的不补货。”**


![[Pasted image 20260507123742.png]]

vc不来订单的问题， 不盈利 有很多因素 导致的，你去一个个排查，

你可以把语气改得更专业一点，不要直接说“你这个有问题”，而是说“先确认订单来源和前台状态”。可以这样回复：

这种情况需要先拆开看，不能只用“VC下架/没有购物车”来判断。

如果前台没有 Buy Box / Featured Offer，不代表一定完全不能成交；客户有时可能通过 “Other sellers / See options” 入口购买，或者订单实际来自 SC/3P/FBA/FBM，而不是 VC Retail。Amazon 对 Featured Offer 主要看价格、配送、订单体验、库存等因素；无 Featured Offer 常见原因也包括缺货、价格过高或过低。([Sell on Amazon](https://sell.amazon.com/blog/buy-box-featured-offer "Maximize Your Sales Potential with the Amazon Featured Offer (formerly Buy Box) - Sell on Amazon"))

建议你先确认几个点：

1. 订单来源到底是 VC Retail 订单、SC 订单，还是第三方卖家订单？
    
2. 前台是完全没有购买入口，还是没有 Buy Box 但还有 “Other sellers / See options”？
    
3. ASIN 是否还有 Amazon Retail 残余库存、FBA库存、FBM库存、变体子体、bundle 或不同站点库存？
    
4. 你说的“VC下架”是停止下 PO / 不再补货，还是 ASIN 被抑制、不可售、不可补货？这几个不是同一件事。
    
5. case 说“不盈利”，通常要回到 profitability 维度排查，比如 cost price、list price、促销 funding、co-op/佣金扣点、物流成本、退货损耗、chargeback、价格匹配、库存周转和历史销量等。
    

所以我会先看后台订单报表和前台 offer 状态。如果订单确实还在出，优先判断是不是 SC/3P 在出，或者 VC 还有残余库存/延期订单；如果完全是 Retail 新订单，那才需要继续开 case 让 Amazon 确认 ASIN 的 buyability、retail offer 和补货状态。

你自己的判断方向是对的：**“VC没有购物车但还能出单”不能直接下结论，要先确认是不是 SC 在出、还是 VC残余库存/其他购买入口在出。**  
另外“不盈利”确实不是单一原因，建议围绕 **NET PPM / 成本 / 扣点 / funding / 物流退货 / 价格竞争 / 库存周转** 逐项排查。

给新同事的 NET PPM 公式也可以顺手整理成这样：

**NET PPM（不促销）**  
`(List Price - Cost Price + 佣金扣点 × Cost Price) / List Price`

**NET PPM（BD促销）**  
`(促销后 List Price - Cost Price + 促销 Funding + 佣金扣点 × Cost Price) / 促销后 List Price`

![[Pasted image 20260507123742.png]]
