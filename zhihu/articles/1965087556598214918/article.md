# 坑位记录表使用方法

Source: https://zhuanlan.zhihu.com/p/1965087556598214918

不知道大家有没有每天记录自己坑位的变化的习惯，反正我是每天都会记录自己店铺主卖产品的坑位变化。 通过记录关键词坑位，就算不看后台，也能大致了解到自己的产品的流量多少，再结合转化率和排名，也能不通过看后台猜到自己日出多少单。 所以在没有erp和后台的情况下，关键词坑位是运营的每日必备工作之一。

市面上有很多erp软件可以自动帮你监控产品的坑位词，但是由于有延迟性，所以我很少用到，看自己的习惯和时间吧。  
   
主题开始：

1：先罗列好自己产品的坑为词，不宜过多，一般5-10即可，因为多了每个都去找坑位词比较花时间；如下图，比如我罗列的关键词为a,b,c,d等等，然后上面填好每天的日期

![](https://pic1.zhimg.com/v2-9274ad808c08700ce0ebc4b3cd5e5d9f_720w.jpg?source=d16d100b)

2：先记录第一天的关键词，因为第一天没有对比，所以不管，第二天再在C2 中输入公式。

具体步骤：  
点击 条件格式 ->管理规则 -> 新建规则 ->使用公式  
然后再下方输入以下公式，直接粘贴复制即可  
=MID(B2,FIND("P",B2)+1,1)-MID(C2,FIND("P",C2)+1,1)>0

![](https://pic1.zhimg.com/v2-b4e0846ddf3104b5568fddc8b372d0c8_720w.jpg?source=d16d100b)![](https://pic1.zhimg.com/v2-0a6da65876f3cd872d2c6a09bdf5d458_720w.jpg?source=d16d100b)

3： 根据上一步的操作点击最后一步的，点击设置 格式 来设置单元格的格式，这里有四种选择，看个人喜好，我喜欢设置单元格的底色，你们也可以设置字体颜色或者其他格式； 我这里设置底色为绿色 （这里的意思是 如果当天的坑位对比昨天的坑位有所上升，单元格就是绿色，跟美股一样，绿色表示涨，你们也可以设置成其他颜色）

![](https://picx.zhimg.com/v2-0192ca59e23e04e0be801f189a37a49f_720w.jpg?source=d16d100b)

设置完成后的状态如下图：

![](https://picx.zhimg.com/v2-2af27fcb8d7912f357755cb5f92921db_720w.jpg?source=d16d100b)

4：在应用于里面输入 =$C$2:$IV$99, 然后奇迹就出现了，如下图，所有比前一天坑位上升的单元格都变绿了

![](https://pic1.zhimg.com/v2-e154e608e94fcaa8855b5d372c03b5ae_720w.jpg?source=d16d100b)![](https://picx.zhimg.com/v2-e66e8dc72e829303302c1a446937cedb_720w.jpg?source=d16d100b)

5：重复 第2步 的动作，点击 条件格式 ->管理规则 -> 新建规则 ->使用公式  
然后再下方输入以下公式，直接粘贴复制即可  
=MID(B2,FIND("P",B2)+1,1)-MID(C2,FIND("P",C2)+1,1)<0   
  
格式 设置成 单元格 底色为 红色，这里表示 对比前一天的坑位下降了 就显示红色

![](https://pica.zhimg.com/v2-b487a03c5d79ebcfd4ba7c095324b61f_720w.jpg?source=d16d100b)![](https://picx.zhimg.com/v2-da945a0d30c5bc84a12cdecb6e43dbf2_720w.jpg?source=d16d100b)

效果如下

![](https://picx.zhimg.com/v2-7c7cc1efa1ac8493a0a9cc3a485765fd_720w.jpg?source=d16d100b)

6：继续重复第二步操作，输入公式  
  
=AND(MID(B2,FIND("P",B2)+1,1)-MID(C2,FIND("P",C2)+1,1)=0,RIGHT(B2,LEN(B2)-FIND("R",B2))-RIGHT(C2,LEN(C2)-FIND("R",C2))>0) 格式设置成 底色为 绿色  
   
=AND(MID(B2,FIND("P",B2)+1,1)-MID(C2,FIND("P",C2)+1,1)=0,RIGHT(B2,LEN(B2)-FIND("R",B2))-RIGHT(C2,LEN(C2)-FIND("R",C2))<0) 格式设置成底色为 红色

7： 完后成是这样子的，切记 应用于 那一栏 填写的范围

![](https://pic1.zhimg.com/v2-66025221c841837b1e7e09577d354229_720w.jpg?source=d16d100b)

8： 最后效果如下

![](https://picx.zhimg.com/v2-200c51a6f2aadaf32b0fdb510e86b7b6_720w.jpg?source=d16d100b)

如果看到满屏的绿色，那么恭喜你，你的坑位词上升了，说明你的流量也增长了，订单肯定比之前多了；相反，如果你满屏都是红色，那么要考虑优化你的关键词广告和listing文案了。

坑位记录表使用方法.
