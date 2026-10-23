# 亚马逊关键词库升级-用数跨境BI展示可视化

Source: https://zhuanlan.zhihu.com/p/1965559097576362233

![](https://picx.zhimg.com/v2-d2345fd725375603bfecfd123b45fc57_720w.jpg?source=d16d100b)![](https://picx.zhimg.com/v2-a7edd3d97d663e182d46e408256fb9f7_720w.jpg?source=d16d100b)![](https://pic1.zhimg.com/v2-1a774ca31ce910a1aa3e3e3eaaf2acae_720w.jpg?source=d16d100b)![](https://picx.zhimg.com/v2-e0fb78f9247fc62488428174984025d0_720w.jpg?source=d16d100b)![](https://picx.zhimg.com/v2-eb2949deaad3c50d9e502c0e862fc337_720w.jpg?source=d16d100b)

在前几篇文章中，我详细介绍了如何通过Python, AI, Tableau搭建关键词库和流量诊断的分析流程。但收到很多朋友的反馈说环境配置比较复杂，好不容易把代码跑通，又要下载Tableau，替换数据还出现很多兼容问题。

首先感谢各位读者的热心反馈，不然我还是在自嗨的状态中。一是用Python清洗数据，大部分运营人员确实没搞过。二是Tableau不太方便个人使用，浪费了很多时间。

今天主要讲解下第二部分，我是如何把Tableau的模板搬到了云数据Saas平台-数跨境BI。

### [https://work.shukuajing.com/decision/home/space/dashboard/agnbx3df6z2arigoklpyhdvuna](http://link.zhihu.com/?target=https%3A//work.shukuajing.com/decision/home/space/dashboard/agnbx3df6z2arigoklpyhdvuna) 背景

前几年我一直在使用简道云，当时在知无不言论坛分享了一个销售看板模板，获得了不少好评（文章链接放到末尾）。那时候，我就开始了解到简道云的母公司-帆软。Fine report, Fine BI这类企业级的软件就是来自于帆软。

后续他们又推出了一些适合个人用户的产品，包括今天要用到的软件。结合我目前的需求，是把本地的BI软件迁移到线上，很快我就找到了九数云和数跨境。

数跨境和九数云在功能上是一模一样的，只是数跨境提供了很多适合跨境电商行业的模板。无论从实用性，还是观感上，我都觉得很棒。所以，后续针对Tableau类的BI模板，我会直接发布到数跨境，方便大家观看和使用。

![](https://pic1.zhimg.com/v2-dc34b7b899e8aa93369b6c9cdad2001a_720w.jpg?source=d16d100b)

### 效果

整体上说，数跨境比Tableau容易上手，各种功能相通，但又更易懂。系统提供了很多样式模板，帮助文档把每个模块解释得都很清楚。从Tableau无缝切换到数跨境BI，整个过程极其丝滑。

看过前几篇文章的朋友，应该知道，我做Tableau模板的时候，完全没有考虑可视化效果。因为主要是自用，就只把功能给做出来了。但是对比数跨境，明显是这种仪表盘看着舒服多了，而且更加容易传播，不会劝退小白用户。

![](https://picx.zhimg.com/v2-405f8dcba55550e78be347f92cf4c8ab_720w.jpg?source=d16d100b)

### 使用方法

### 进入模板

我已经把关键词库的模板发布到了数跨境的模板市场，你可以在这里直接应用模板。另外，发布模板需要对接官方人员进行审核，他们团队的审核效率很高。而且人工审核的话，可以保证模板质量，减少用户筛选的时间。

![](https://picx.zhimg.com/v2-9e93807fd94c66fdfc29d5e0843150ff_720w.jpg?source=d16d100b)

也可以通过这个链接，直接进入模板，应用模板。

[https://work.shukuajing.com/decision/application/08cf11660445629e08295cd4eedba5](http://link.zhihu.com/?target=https%3A//work.shukuajing.com/decision/application/08cf11660445629e08295cd4eedba5)

![](https://picx.zhimg.com/v2-45bdf6c820b9471f554bc84d172232b5_720w.jpg?source=d16d100b)

### 替换数据源

进入模板可以从血缘图中看到链接情况。左边是数据源，右边是分析表和看板。

![](https://picx.zhimg.com/v2-8b05a21e28c6c360c6eecf60fa2090bf_720w.jpg?source=d16d100b)

为了简化大家使用的流程，你只需要在数据连接中，替换”output”数据源。如果不需要流量诊断的话，可以不替换”myproduct”。

![](https://pica.zhimg.com/v2-4d2d0b0c7ed14fcc8c6d91495e61047c_720w.jpg?source=d16d100b)

替换完成后，点开“关键词库”的看板，就看到可视化效果了。整个过程极其优雅，再也不用担心各种兼容问题了。

![](https://picx.zhimg.com/v2-70b9fa2a48b80c8e3af1530539c2410f_720w.jpg?source=d16d100b)

### 自定义设置

如果需要根据自己产品的实际情况修改筛选指标，可以编辑“关键词库”，“流量对比”分析表。

![](https://pica.zhimg.com/v2-47a68bd3b42849b49bdbfcae0f824a5e_720w.jpg?source=d16d100b)

修改核心词和扩展词中的“流量占比”，“购买量”筛选值。

![](https://pica.zhimg.com/v2-9e2891a7f3c2e4753dc5c8b4ecf6aab5_720w.jpg?source=d16d100b)

### 总结

本来我以为，合并两个不同的数据源有点麻烦。但是用“左右合并”就可以很方便的把两个表合并在一起。然后创建字段，添加公式，也会把每个步骤都标出来，方便返回上一步。数跨境把清洗数据，分析，可视化都放在了一个Saas里，确实很方便。

Tableau是把数据清洗和可视化BI分开了。Tableau Prep负责清洗数据，Desktop, Public等负责分析和可视化。

但其实这两款软件没有好坏，只是适用的场景略有差别。

![](https://pic1.zhimg.com/v2-d563da8027495c61f89fe3295b3e5977_720w.jpg?source=d16d100b)

另外，每天我都能收到一些读者的消息说，那个代码怎么弄的，运行不了之类的问题。。。我能理解大家的需求，我有想法去做一个视频解释一下，中间的流程。

有句话怎么说的，如果你能搞定软件安装，就超过了90%的人。如果你觉得很需要一个视频去解释下代码运行的流程，请在评论区告诉我。

同时，提醒大家不要在使用软件上耽误过多的时间，毕竟工具的目的是辅助我们完成目标。

亚马逊关键词库升级-用数跨境BI展示可视化
