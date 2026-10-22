---
title: "出海赚美金：用n8n搭建「Reddit商机搜索与洞察」 AI Agent自动化寻找蓝海市场，发现真实痛点 副本"
feishu_url: https://my.feishu.cn/wiki/SklDwPYhIi882lkvh7pc1CoEnKg
obj_type: docx
obj_token: Gfe0dVQbGooG94xIkFxcSsh7nIf
updated: 2026-01-07T18:13:05+08:00
---

# 出海赚美金：用n8n搭建「Reddit商机搜索与洞察」 AI Agent自动化寻找蓝海市场，发现真实痛点 副本

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_JO1HbQt9mo.png)

前天，生财有术的老板亦仁发布了一条**「超级标」（至少价值千万以上的现象级行业机会）：**

随着GPT-4o图像革命而来的，是无数的创业机会。

但对我来说，同时也是大部分不熟悉图像相关业务的同学来说，**知道有这个机会，但也不知道要怎么开始？做什么行业？以及怎么做？**

今天，我们就来解决这个问题。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_LuERbzc87o.jpg)

结论先行：

我们可以**用n8n搭建一个AI Agent自动到Reddit上搜索内容，并判断是否有商业价值，最终形成一份洞察报告。**

工作流长这样：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_YekdbxpsZo.jpg)

我输入信息：

```
昨天，生财有术的老板发了一个超级标预示着ChatGPT4o带来的图像生成成本降低，能引发很大的商业价值
现在我想在reddit上搜索关于这方面的商业机会
```

最终得到分析报告：

（做了两份html形式的，不得不说，DeepSeek R1赢了 Claude4，你猜谁是谁？）

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_RewtbAZ1Zo.png)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_P6eZbaB7Io.png)

这里是示例，只是用了5篇帖子的数据做的分析供参考。想要更有效的建议，可以用这个工作流做大规模的分析，例如分析100篇。

接下来详细说说。

## 先聊聊Reddit

为什么选择到Reddit里进行商机搜索与洞察呢？

**Reddit是什么？—— 全球最大的兴趣部落集合体**

Reddit，常被戏称为“互联网首页”，是一个庞大且极具活力的在线社区平台。**它并非单一的论坛，而是由成千上万个名为“Subreddit”（简称sub，可理解为特定主题的版块或子社区）组成的集合体。**每个Subreddit都围绕着一个特定的兴趣、话题或社群，从主流的科技（r/technology）、游戏（r/gaming）、新闻（r/news），到非常小众的爱好如“只用勺子吃饭的人”（r/WeWantPlatesButWeGotSpoons），包罗万象。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_PSF4bwzLTo.jpg)

用户可以在Reddit上发布帖子（文本、图片、视频、链接），评论他人的帖子，并通过“顶”（upvote）或“踩”（downvote）来表达对内容的认可度。帖子的热度决定了其在Subreddit乃至Reddit首页的曝光度。**用户的活跃度和贡献度会累积为“Karma”（业力值），高Karma值通常意味着账号在社区内有更高的可信度和影响力，这对于内容推广和互动至关重要。**

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_M1u9bsjgio.jpg)

**Reddit对“出海”人士的价值何在？—— 低成本的流量洼地与真实用户反馈池**

对于希望拓展海外市场的个人或企业（“出海”），Reddit具有不可估量的价值：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_DRhUbqq8vo.jpg)

1. **巨大的流量与精准的用户群**：Reddit月活用户数以亿计，且用户画像清晰。通过找到与你产品/服务相关的Subreddit，你可以直接触达高度精准的目标潜客，这是一个天然的“流量洼地”。

1. **高SEO价值**：Reddit上的讨论和内容经常被谷歌等搜索引擎收录，且排名靠前。在相关Subreddit中贡献有价值的内容，或将Reddit上的热门问题转化为你网站的SEO文章并进行引流，能有效提升品牌曝光和网站权重。

1. **真实的用户反馈与市场调研**：Reddit社区氛围相对真实、直接。你可以在这里进行“公开建造（Build in Public）”，分享你的创业理念、产品原型（MVP），直接获取目标用户的真实反馈、挖掘未被满足的需求，甚至与用户共创产品。这是低成本验证想法、迭代产品的绝佳场所。

1. **冷启动与社区驱动增长**：对于缺乏初始用户的项目，Reddit可以成为冷启动的跳板。通过真诚互动、价值输出，可以逐步建立品牌声誉，积累早期用户，并借助社区力量实现口碑传播和用户增长。

**Reddit怎么玩？一个最佳实践案例：“社区价值输出 + SEO引流”**

假设你正在开发一款面向海外独立开发者的效率工具，可以这样利用Reddit：

- **第一步：找准阵地，融入社区。**
  - 注册Reddit账号，花时间完善个人资料。
  - 搜索并加入相关的Subreddit，如r/SideProject, r/IndieDev, r/Productivity, r/SoftwareDevelopment等。
  - **关键**：初期不要急于推广！先“潜水”观察社区氛围、热门话题和用户痛点。积极参与讨论，回答他人问题，分享你的见解和经验，提供真实价值，逐步积累Karma值和社区信任。

- **第二步：挖掘痛点，内容反哺。**
  - 在浏览和互动中，你会发现许多独立开发者常遇到的问题或痛点，例如“如何管理多个项目的时间？”“有没有好用的代码片段管理工具？”。
  - 针对这些高频问题或痛点，精心撰写一篇高质量的博客文章发布在你的个人网站或产品官网上，提供详尽的解决方案或你的工具如何解决该问题。

- **第三步：精准引流，自然推广。**
  - 当你在Reddit上再次看到相关的讨论或有人提出类似问题时，你可以真诚地回复，简要分享你的看法，并附上你之前撰写的博客文章链接，作为更详细的解答或资源。
  - **话术示例**：“我之前也遇到过这个问题，后来我研究并总结了一套方法/发现一个工具可以解决，写了篇文章分享，或许对你有帮助：[你的博客链接]。”
  - 这种方式既帮助了提问者，提供了价值，又自然地将流量引导到了你的网站，同时有助于提升你网站的SEO。如果你的工具确实能解决问题，社区成员也会自发讨论和推荐。

- **第四步：持续互动，迭代优化。**
  - 收集通过Reddit引流来的用户反馈，持续优化你的产品和内容。保持在相关Subreddit的活跃度，将Reddit作为你与用户沟通、获取灵感和推广产品的重要渠道。

通过这种**“先贡献价值，再伺机引流”的策略**，你不仅能在Reddit上建立良好的口碑，还能为你的出海项目带来持续的、高质量的潜在用户和宝贵的市场洞察。记住，**真诚和价值是Reddit社区的通行证。**

例如我昨天逛Reddit的时候就发现了一个把Cursor做成移动端的帖子：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_WIyAbAul9o.jpg)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_PBibb52TTo.jpg)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_HnMNbwcMso.jpg)

是个很不错的想法，也是个商机。

于是我在生财的AI传术师群里交流，交叉验证了这个需求：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_EBPsb9unfo.jpg)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_MuYzbHuw7o.jpg)

**这就是Reddit的使用场景，特别适合出海。**

## n8n工作流

前面已经看到这个AI Agent是用n8n做的，我们逐个部分来看。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_BCCFbvNzso.jpg)

同时，深度结合了飞书多维表格，设计了以下**数据模型**：

1. `搜索记录`表，记录每次搜索的意图和关键词，并保存最终分析结论（AI总结多个帖子的分析小节）

1. `结果分析`表，记录所有搜索结果，并对其中符合条件的帖子进行总结和AI分析

1. 两个表通过`搜索id`连接

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_E0pDbg8nUo.jpg)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_X8UlbQYJzo.jpg)

ok，接下来逐个节点来看：

### 根据关键词在Reddit搜索

目前已完成的是1.0的形态：直接在节点固定**搜索意图和关键词，用于Reddit的搜索**

下一步计划增加AI意图识别的功能，根据用户的描述，自动生成搜索意图和关键词。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_PQ4vb2wIAo.jpg)

#### 设置搜索词与id

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_Zka7bmGyCo.jpg)

其中，`index`是用做本次搜索的唯一标识，也就是前面提到的`搜索id`

#### ⚠️ Reddit

**这是这次工作流的关键，也是难点所在。**

首先，新增一个Reddit节点`Search for a post`，这个是n8n自带的，不得不说真的很适合出海。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_OTMMbTijJo.jpg)

照例，要新建Reddit节点的`credential`

如下图：把`OAuth Redirect URL`记住，点`Click to Copy`待用。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_KZW8bqKBAo.jpg)

**要求URL是能公开访问的，也就是说你得有一个公开域名。**

**这一步的坑跟之前我们做监控X内容同步到谷歌文档里的工作流里的操作很像，可以对照学习。**

补充阅读：[免费用n8n打造一个24小时监控AI博主的工作流](https://ry6uq5vtyu.feishu.cn/docx/UnWfdh13ho6VFExHBIfcVLJfnGh?from=from_copylink)

这里是参考文档：

https://docs.n8n.io/integrations/builtin/credentials/reddit/?utm_source=n8n_app&utm_medium=credential_settings&utm_campaign=create_new_credentials_modal

如图的位置点`third-party app`

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_J2uLbvh3Mo.jpg)

也可以直接进入网址：

https://www.reddit.com/prefs/apps

这是Reddit的后台。也就是说，**你需要有个Reddit账号，如果没有的话，先解决这个问题，否则这个工作流无法运行。**

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_OgMbbEZ6Uo.jpg)

点`create an app...`

设置名字，把前面复制的`OAuth Redirect URL`填到`redirect uri`的位置，点`create app`即可

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_N7Tvb25F7o.jpg)

接下来，就会弹出`web app`和`secret`信息，记住它们。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_TSxVbhuodo.jpg)

回到n8n的页面，按下图填入`Client ID`和`Client Secret`

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_AREbb2S2Uo.jpg)

点 `Connect my account`

就会弹出Reddit的授权页面，这步是不是跟谷歌的很像？

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_PVZMbXFsmo.jpg)

确保看到以下`Account connected`证明成功了。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_MHKOb6ff0o.jpg)

OK，接着就可以对Reddit做以下设置了：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_H5H3br2Ypo.jpg)

还有，`Return All` 是否返回所有结果，量太大了，一方面不精准，另一方面可能会影响api的使用，不建议开

对于`Subreddit`，也就是子板块的选择，需要选择活跃且有效信息多的，例如`r/smallbusiness`是专门讨论中小企业创业和商业化的，跟我们这次主题很契合。

更具体的，可以先到Reddit里搜索一下先看结果。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_VF8db5fqBo.jpg)

点`Execute step`测试，看到旁边有结果出来了，证明最难一关已过。

至此，我们就得到了多个Reddit的搜索结果，接下来对它们进行处理

### 对搜索结果进行处理

如图，这一步是把所有结果保存到飞书多维表格后，再针对其中符合我们要求的帖进行分析，最后把分析结果更新到飞书表格里。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_UL87bIKkIo.jpg)

#### 保存结果到飞书表格

新建一个飞书的多维表格新增记录节点，这步没有难点

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_K1sxb6cvRo.jpg)

#### Filter 过滤出符合要求的帖子

正常来说，搜索的结果很多可能不是我们要的

一方面我们可以用AI去识别是否有价值

另一方面也可以**用客观的硬性条件去过滤，例如内容长度、点赞数等等**

这里就是后者：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_MUQ6bnsTzo.jpg)

新建`Filter`节点，没什么难点，主要是里面的公式怎么写？

```
{{ DateTime.fromSeconds($json.created_utc).toISO() }}
```

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_JibTbpk1So.jpg)

```
{{ $today.minus({days: 180}).toISO() }}
```

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_AaNBbUHaqo.jpg)

筛选后有4条是符合我们要求的。

（这里调整了一下，因为数据比较小，就要求近一年内发布，且有赞即可，大家可以根据自己的情况去调整）

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_I65cbRSPNo.jpg)

#### 循环节点

逐个分析符合要求的帖

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_WeqebZ18eo.jpg)

#### Summarization Chain

从原文中提炼出摘要，方便用户快速看

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_F3HQbfQ6Fo.jpg)

#### AI对当前的帖进行分析

这里的关键在于提示词，形成一个固定结构的分析结论，方便最终汇总。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_B0gBb2jKpo.jpg)

以下是我总结提炼的提示词：

```
### Reddit搜索结果深度分析与商业洞察

#### 1. 角色扮演 (Role) & 任务背景 (Context)

您将扮演一名专业的 “Reddit 商业机会分析师”。您的任务是基于给定的 Reddit 搜索数据，为用户提供一份精准、深刻且聚焦于商业价值的分析洞察。请以该专家的视角进行思考和表达。

#### 2. 任务目标 (Goal)

根据下方提供的 “用户搜索意图”、“搜索关键词” 和 “Reddit 搜索结果”，生成一份包含两大核心模块的分析报告：“主题内容与相关性” 和 “行业聚焦与细分机会”。报告必须结构清晰、逻辑严谨，并严格遵循指定的输出格式。

#### 3. 输入数据 (Input Data)

* 用户的搜索意图:
    ```
    {{ $('设置搜索词与id').item.json.target }}
    ```

* 搜索关键词:
    ```
    {{ $('设置搜索词与id').item.json.search_keyword }}
    ```

* Reddit 搜索结果 (帖子标题与内容):
    ```
    {{ $('Loop Over Items').item.json.data.record.fields['帖子标题'] }}

    {{ $('Loop Over Items').item.json.data.record.fields['帖子内容'] }}
    ```

---

#### 4. 输出要求：严格遵循以下 Markdown 格式 (Output Format)

### Reddit 搜索结果商业价值分析报告

1. 主题内容与相关性

* 核心议题总结: (在此处以列表形式，总结帖子中反复出现的 1-3 个核心议题、问题或观点。)
    * 议题一: * 议题二: * ...
* 相关性评估: (在此处明确评估这些议题与“用户搜索意图”的关联程度，请选择：高 / 中 / 低 / 不相关，并简要解释你的判断理由。)

2. 行业聚焦与细分机会

*   2.1 潜在细分行业/领域:
    *   根据帖子内容，识别出该讨论最可能归属或关联的 1-2 个细分行业或特定市场领域。
    *   示例：
        *   细分行业1: [例如：独立游戏开发、SaaS客户支持工具、可持续时尚电商]

*   2.2 用户痛点洞察:
    *   从帖子中用户（发帖人或评论者）的讨论、抱怨、提问或分享的经验中，识别出 1-3 个明确的用户痛点或未被满足的需求。
    *   要求：痛点描述需具体，能反映用户的真实困境。
    *   示例：
        *   痛点1: [例如：缺乏针对小型企业的廉价项目管理工具]
        *   痛点2: [例如：现有AI写作助手生成的中文内容不够自然]

*   2.3 潜在商业机会挖掘:
    *   基于上述核心议题和用户痛点，思考并提出 1-2 个具有潜力的商业机会、产品概念或服务方向。
    *   要求：商业机会应具有一定的创新性和可行性，并说明其如何解决用户痛点或满足需求。
    *   示例：
        *   商业机会1: [例如：开发一款集成AI的、专为中文内容创作者设计的语法和风格优化插件，以解决AI写作不自然的问题。]
        *   商业机会2: [例如：推出一个专注于可持续材料的B2B时尚采购平台，连接设计师与环保面料供应商。]

---

#### 5. 关键指令与限制 (Critical Instructions & Constraints)
* 聚焦商业: 分析的最终目的是挖掘商业价值，请确保“商业机会”部分具体、有启发性，而不仅仅是重复问题。
* 专注当前帖子： 你的所有分析都必须严格基于当前提供的“Reddit帖子标题”和“Reddit帖子内容”。不要引入外部知识或对其他帖子的假设，除非帖子内容明确引用，杜绝主观臆测。
* 客观中立： 保持分析的客观性和中立性，避免主观臆断。
* 深度优先： 相比宽泛的概述，更注重对单一帖子价值的深度挖掘。
* 精炼表达： 使用精炼的商业语言，直击要点。语言力求精准、专业、言简意赅。
* 信息不足处理： 如果帖子内容过于简短或信息不足，导致无法有效完成某项分析（如“商业机会挖掘”），请在该项下明确指出“信息不足，无法进行有效分析”，并简要说明原因。
* 严格遵守格式： 必须完全遵循上述Markdown输出格式，包括标题层级、编号和加粗等。
* 如果帖子内容为空或无关： 若“Reddit帖子内容”为空、乱码或与“帖子标题”、“搜索关键词”及“用户搜索意图”完全不相关（例如广告、spam），则在报告开头注明“当前帖子内容无效或不相关，无法进行分析”，然后终止后续分析。
```

#### 更新记录到飞书

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_TlXUbkRxto.jpg)

这一步就是把`符合条件`、`总结摘要`、`AI分析`内容补进去。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_M2tPb7OwLo.jpg)

### 汇总结论，形成最终报告

这一步，是把前面多个分析小节，汇总成一份分析报告。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_XLsSbcIkfo.jpg)

关键点是**在AI提示词上，怎么形成有效的分析报告。**

这是我总结提炼的提示词：

```
以下内容是之前对用户在reddit上搜索结果的分析，请你根据用户的搜索意图，对所有分析结果做一个总结，形成一个markdown分析报告

# Reddit搜索结果汇总分析报告

## 角色设定
你是一位资深的市场洞察与战略分析专家，擅长从海量的零散信息中整合、提炼核心洞察，并为商业决策提供战略性建议。你现在需要处理的是针对同一用户搜索意图下的多份独立Reddit帖子分析报告。

## 核心任务
整合并提炼来自多个独立Reddit帖子分析报告的核心洞察，形成一份全面的汇总分析报告。这份报告应揭示跨帖子的共性趋势、突出的用户痛点、以及最具潜力的商业机会，并最终为用户提供战略层面的建议。

## 输入数据
1.  用户原始搜索意图 (User Original Search Intent): `{{ $('设置搜索词与id').item.json.target }}`
2.  用户原始搜索关键词 (User Original Search Keywords): `{{ $('设置搜索词与id').item.json.search_keyword }}`
3.  多个独立帖子分析结果 (Collection of Individual Post Analyses):
```
{{ $json.data.toJsonString() }}
```

## 汇总分析报告框架与输出要求
请严格按照以下Markdown格式和内容要求，生成你的汇总分析报告：

### 基于用户搜索意图：“{{ $('设置搜索词与id').item.json.target }}” (关键词：“{{ $('设置搜索词与id').item.json.search_keyword }}”)

#### 1. 整体趋势与核心议题洞察

*   1.1 跨帖子核心议题聚合:
    *   识别并总结在多个帖子分析中反复出现或最为突出的 1-3 个核心议题、普遍性问题或共同关注点。
    *   对每个聚合议题进行简要描述，并说明其在所分析帖子中的普遍性或重要性。
    *   示例：
        *   聚合议题1: [例如：对现有解决方案不满意的普遍情绪] - 在X, Y, Z帖子中均有体现。
        *   聚合议题2: [例如：对特定功能/特性需求的强烈呼声] - 在A, B帖子中被重点讨论。

*   1.2 整体内容与用户搜索意图的吻合度:
    *   综合评估所有分析过的帖子内容，它们在多大程度上整体反映或满足了用户的原始搜索意图 ？
    *   是高度吻合、部分吻合还是存在较大偏差？请阐述理由。

#### 2. 聚合行业洞察与商业潜力评估

*   2.1 主导细分行业/领域识别:
    *   基于所有独立分析，识别在这些讨论中被共同提及或最常指向的 1-2 个主要细分行业或市场领域。
    *   示例：
        *   主导细分行业1: [例如：AI内容生成工具]
        *   主导细分行业2: [例如：小型企业项目管理软件]

*   2.2 关键用户痛点总结 (Top Pain Points):
    *   从所有独立分析的用户痛点中，提炼并总结出出现频率最高、用户反映最强烈或最具代表性的 1-3 个关键用户痛点。
    *   对每个关键痛点进行清晰描述，并说明其普遍性。
    *   示例：
        *   关键痛点1: [例如：当前工具学习曲线陡峭，上手困难] - 在多个帖子中被不同用户反复提及。
        *   关键痛点2: [例如：缺乏针对特定小众需求的定制化功能] - 虽提及次数不多，但用户表达的需求非常迫切。

*   2.3 综合商业机会研判 (Synthesized Commercial Opportunities):
    *   基于所有帖子的分析，综合评估并筛选出最具潜力、协同效应最强或被多次间接提及/支持的 1-2 个商业机会。
    *   对于每个机会：
        *   清晰描述该商业机会。
        *   解释它如何能解决已识别的关键用户痛点或满足聚合的核心议题。
        *   简要评估其潜在市场吸引力或可行性。
    *   示例：
        *   综合机会1: [例如：开发一款“即插即用”型、预设模板丰富的项目管理SaaS，专为技术背景较弱的小微企业主设计，直接解决上手难的痛点。] - 市场需求明确，竞争对手在该细分定位上较弱。

#### 3. 整体讨论氛围与用户情绪 (Optional, if discernible)

*   简要描述在这些相关帖子讨论中观察到的整体用户情绪或讨论氛围（例如：积极寻求解决方案、普遍感到沮丧、对新技术充满好奇、分享成功经验等）。如果信息不足或情绪多样难以概括，请注明。

#### 4. 综合结论与战略建议

*   4.1 核心洞察总结:
    *   用 2-3句话 高度概括本次Reddit搜索结果分析的核心发现。

*   4.2 战略行动建议:
    *   基于以上所有分析，为用户提供 2-3 条具体的、可行动的战略建议或下一步骤。
    *   建议应直接关联用户的搜索意图，并结合所发现的商业机会和用户痛点。
    *   示例：
        *   建议1: [例如：针对“AI内容生成工具”领域，重点调研“解决中文本地化与自然度”这一痛点的解决方案，因为这是多个帖子中反映的强烈需求。]
        *   建议2: [例如：考虑发起一项更深入的用户调研，验证“即插即用型项目管理SaaS”的市场接受度，特别是针对那些在Reddit上抱怨现有工具复杂性的用户群体。]

#### 5. 报告局限性

*   请指出本汇总报告的潜在局限性（例如：分析基于有限的Reddit帖子样本，可能无法代表全部用户观点；情绪判断具有主观性等）。

---

## 重要指令与限制：
1.  整合与提炼: 核心在于从多个独立分析中找出共性、趋势和最重要的洞察，避免简单罗列各个独立分析的结果。
2.  数据驱动: 所有汇总结论都应明确基于输入的“多个独立帖子分析结果”集合。
3.  突出重点: 优先呈现那些在多个分析中反复出现、或被认为是特别重要的信息。
4.  避免重复: 如果多个帖子指向完全相同的痛点或机会，请在汇总时整合描述，无需每个都作为独立点列出，但可以说明其来源广泛。
5.  处理冲突信息（如果存在）: 如果不同帖子分析之间存在明显矛盾的观点，请尝试在报告中提及这种差异性，或者选择性地突出更主流或证据更充分的观点。
6.  战略高度: 最终的建议应具有一定的战略指导意义，而不仅仅是操作层面的小技巧。
7.  严格遵守格式: 必须完全遵循上述Markdown输出格式。
```

最后的飞书表格更新记录，就是把这个结论补充进去。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_Vz35bSMRno.jpg)

### 把报告生成HTML

由于时间关系，这步我是手动处理的。

你也可以做到n8n工作流里，但**要解决html转成图片的问题，目前我想到的是单独用Cursor写Python的处理脚本，打包成api后，部署到服务器给n8n调用。参考之前我发的类似的网站截图方案：**[用n8n做AI工作流驱动网站出海赚美金2：网站截图与写 SEO 友好的介绍](https://ry6uq5vtyu.feishu.cn/docx/VXCPdcRZloGuXaxBRW5cWhH6nFc?from=from_copylink)

由于DeepSeek R1能力的提升，我们只需要很简单的提示词，并把分析结论给它即可：

```
请根据以下分析报告，形成一个html报告，要求样式要好看，结构清晰突出，确保包含报告的所有内容，但分块要清晰，加上必要的图标等：
```
分析结论
```
```

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_Mp63bCRROo.jpg)

DeepSeek的深度思考真的好用：

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_PDntbbtOro.jpg)

最终得到的报告就不重复显示了，是文章开头白色底的那份，你猜对了吗？

另一份黑色底的是我用Claude4用同样提示词生成的。

**分享一个生成html长图的技巧：**

用「Edge」浏览器打开html，把窗口调整到合适宽度，右键点`截图`

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_OVd8bRE60o.jpg)

点`捕获整页`，就能得到我文章开头那样很长的html截图了。

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_RztXbeSrqo.jpg)

## 目前问题与升级方向

1是当前的工作流还比较**局限在特定的板块下、对特定关键词的搜索**，下一步可以新增「意图识别」用AI生成多个搜索关键词；除了搜索帖子外，还可以搜索合适的板块来进行更精准的搜索。

2是当前工作流的使用还是内部自己用，想开放出来，可以打包成AI Agent、甚至是MCP工具，可以给到更多用户使用

3是整个流程跑下来还是挺久的，目前只是搜索了10个帖子，如果要跑100篇，估计要花大半个小时，所以最后**可以通过邮件通知的方式来通知结果，这样的好处是可以把结论转成邮件的HTML，更方便用户看。**

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_VEpGbqEeYo.jpg)

![](assets/%E5%87%BA%E6%B5%B7%E8%B5%9A%E7%BE%8E%E9%87%91%EF%BC%9A%E7%94%A8n8n%E6%90%AD%E5%BB%BA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E6%90%9C%E7%B4%A2%E4%B8%8E%E6%B4%9E%E5%AF%9F%E3%80%8D%20AI%20Agent%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BB%E6%89%BE%E8%93%9D%E6%B5%B7%E5%B8%82%E5%9C%BA%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%9C%9F%E5%AE%9E%E7%97%9B%E7%82%B9%20%E5%89%AF%E6%9C%AC_MxpjbEGDpo.jpg)

## 工作流

[附件：Reddit分析 by @bggg (1).json](https://my.feishu.cn/wiki/SklDwPYhIi882lkvh7pc1CoEnKg)

