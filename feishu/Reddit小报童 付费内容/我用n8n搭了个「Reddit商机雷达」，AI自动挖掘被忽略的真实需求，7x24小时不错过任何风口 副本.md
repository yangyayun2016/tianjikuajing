---
title: "我用n8n搭了个「Reddit商机雷达」，AI自动挖掘被忽略的真实需求，7x24小时不错过任何风口 副本"
feishu_url: https://my.feishu.cn/wiki/HVrjwtzP7iK4sikRbZjc2oHVnOc
obj_type: docx
obj_token: S97fdTpgdo9bfYxZTEncySVVnDd
updated: 2026-01-07T18:06:39+08:00
---

# 我用n8n搭了个「Reddit商机雷达」，AI自动挖掘被忽略的真实需求，7x24小时不错过任何风口 副本

如果你是**创业者或独立开发者**，尤其是刚起步，最大的难题往往不是技术，而是“我到底该做什么？” 你有能力创造，却缺少一个真实、有人愿意付费解决的问题。

而如果你是做**出海业务的市场人**，需要找到下一个增长点：用户真正渴望的功能是什么？哪个细分市场的抱怨声最大？

**这些困境，都源于我们离用户真实、一手的对话太远了。**

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_JDQrbWAt4o.jpg)

今天，饼干哥哥就手把手带你用n8n，从0到1搭建一个全自动的“Reddit商机发现AI Agent”。这套系统能不知疲倦地监控Reddit特定社区，自动筛选有价值的帖子，通过多维度AI分析，最终将一份份“商业机会简报”存入你的数据库，甚至直接发送到你的邮箱。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_RMyybc7iCo.jpg)

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_DHwrbXsRVo.jpg)

之前我们已经做过1 期n8n+reddit的玩法——**基于已知需求，用关键词去搜相关内容的**：[出海赚美金：用n8n搭建「Reddit商机搜索与洞察」 AI Agent自动化寻找蓝海市场，发现真实痛点](https://ry6uq5vtyu.feishu.cn/docx/MdSldfOI2oAu9Ex8uB0c6X33nVb?from=from_copylink)；

而今天这期做的是** 未知需求，从 0去发现用户痛点，提炼商机的。**

下图就是我们最终要搭建的自动化工作流，分为了四个核心阶段：**数据收集、内容分析、洞察生成**和**数据存储**。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_MVpbbTkjHo.jpg)

这套系统不仅看起来很酷，更重要的是，它背后有一套严谨的、可落地的商业洞察逻辑。

### 一、一个好的商机发现框架是什么样的？

在进入n8n的节点配置前，我们必须先搞清楚这套打法背后的核心逻辑。为什么这套流程是科学的？它解决了传统市场调研的哪些核心痛点？

#### 传统的市场调研方式（人工挖掘模式）

通常，一个标准的市场调研流程是这样的：

1. **逛论坛**：运营同学或产品经理打开Reddit，进入r/smallbusiness或r/SideProject等社区，凭直觉一篇篇地刷帖子。

1. **找痛点**：看到某个帖子似乎在抱怨什么问题，就点进去看评论，试图从七嘴八舌的讨论中总结出核心需求。

1. **记笔记**：把有价值的帖子链接、内容要点复制粘贴到文档或表格里。

1. **靠灵感**：积累了一堆零散的笔记后，等待灵感迸发的那一刻。

这个流程最大的痛点是什么？三个字：**低效、随机、主观**。

你可能花了一下午，只看了几十个帖子，其中大部分还是无关的闲聊。你觉得某个痛点很重要，可能只是因为发帖人的文笔特别有感染力。这种方式极度依赖人的精力和判断力，无法规模化，更无法保证客观。

#### AI工作流解决方案

我们的“Reddit商机雷达”，就是为了解决这些痛点而设计的。它的核心思想，是**把重复性的筛选、阅读、分析工作，全部交给AI和自动化工具**，让人只专注于最终的决策。

我把它总结成了一个四步走的框架：

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_HT6VbQ3Ufo.png)

接下来，让我们进入实操环节，看看这个工作流在n8n里是如何一步步搭建起来的。

### 二、保姆级教程：从0到1搭建「Reddit商机雷达」

为了方便理解，我们会逐一拆解工作流的每个阶段。

#### 阶段一：数据收集

这个阶段的目标是，从Reddit海量的帖子中，自动筛选出那一小撮最有潜力的“金矿石”。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_MNIEbMPj3o.jpg)

1. **节点：Get Posts (Reddit)**

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_Cyr9bzPTwo.jpg)

- **作用**：这是我们整个工作流的数据源。它负责到指定的Reddit子版块（Subreddit）中，根据关键词获取帖子。

- **配置**：你需要先配置好Reddit的API凭证。然后设置要搜索的`Subreddit`（如`smallbusiness`）和`Keyword`（如`looking for a solution`），并设置`Limit`（如20篇）来控制获取数量。

具体配置可以参考这篇文章来完成：[出海赚美金：用n8n搭建「Reddit商机搜索与洞察」 AI Agent自动化寻找蓝海市场，发现真实痛点](https://ry6uq5vtyu.feishu.cn/docx/MdSldfOI2oAu9Ex8uB0c6X33nVb?from=from_copylink)

1. **节点：Filter Posts By Features (IF)**
  - **作用**：不是所有帖子都有分析价值。这个节点像一个保安，根据我们设定的硬性指标进行第一轮筛选。
  - **配置**：我们设置了三个条件：
    - 点赞数 `ups` > 2 (有一定热度)
    - 帖子正文 `selftext` 不为空 (有实质内容可分析)
    - 创建时间 `created` 在最近180天内 (保证时效性)

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_XZrzbQg03o.jpg)

可以看到，节点从 20 个 Reddit 帖子中筛选出了 12 个符合`硬性要求`的信息。

1. **节点：Select Key Fields (Set)**
  - **作用**：Reddit返回的数据字段很多，我们只保留需要的，并对一些字段进行格式化，方便后续处理。比如，将Unix时间戳转换为标准日期格式。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_SWd3bk6Wqo.jpg)

#### 阶段二：内容分析 (AI初筛，去伪存真)

这个阶段，我们引入第一个AI，**对内容进行初步的定性分析，判断它是否值得我们投入更多AI算力去深度挖掘。**

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_LhTKbOo9No.jpg)

1. **节点：Analysis Content By AI (Agent)**
  - **作用**：AI扮演“问题鉴别员”的角色。它会阅读每个帖子的内容，判断这篇帖子是否在描述一个商业相关的问题或需求。
  - **配置**：核心在于Prompt：
```
Decide whether this reddit post is describing a business-related problem or a need for a solution. The post should mention a specific challenge or requirement that a business is trying to address.
Reddit post: `{{ $json.postcontent }}`
Is this post about a business problem or need for a solution? Output only yes or no.
```

  - 这个Prompt要求AI只输出“yes”或“no”，非常便于后续的自动化处理。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_TXrIbI2Umo.jpg)

1. **节点：Merge Input**
  - **作用**： 这是给原先 Reddit Posts的内容，加入是否为商业问题的`yes or no`的字段，用于后续的过滤

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_Q82ubADISo.jpg)

1. **节点：Filter Posts By Content (IF)**
  - **作用**：又一个保安。这次它只放行被AI打上“yes”标签的帖子，那些闲聊、吐槽、不相关的帖子就被过滤掉了。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_Vv2DbrbCjo.jpg)

#### 阶段三：洞察生成与输出 (AI深度分析，炼石成金)

通过了前两轮筛选的帖子，可以说是“潜力股”了。现在，我们调动多个AI能力，对它们进行全方位的深度分析。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_CtkYbyhAHo.jpg)

这一阶段，数据流会兵分三路，同时进行三种不同的分析：

1. **路径一：帖子摘要 (Post Summarization -> Basic LLM Chain)**
  - **作用**：AI首先生成一个简短的帖子摘要，然后（如果需要）可以再通过一个LLM Chain节点将其翻译成中文，方便我们快速理解核心内容。

1. **路径二：商业点子生成 (Analysis Content By AI)**
  - **作用**：让AI扮演“商业顾问”，根据帖子的内容，**直接提出一个可以解决该问题的商业点子或服务。**
  - **提示词**：
```
Based on the following Reddit post, suggest a business idea or service that I could create to help this problem for this business and other with similar needs.

Reddit post: "{{ $json.postcontent }}"

Provide a concise description of a business idea or service that would adress this issue effectively for mutiple businesses facing similar challenges.
```

1. **路径三：情绪分析 (Post Sentiment Analysis)**
  - **作用**：用 AI 来判断一个帖子的作者是在表达**积极的情绪（比如赞美、满意），还是消极的情绪（比如抱怨、愤怒、失望），或者是中性的情绪（比如陈述事实、提问）**。这能帮我们判断用户是在热情地寻找方案，还是在痛苦地抱怨问题，不同的情绪可能对应不同的市场切入点。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_PW7Nb95v7o.jpg)

**这里补充讲一下：**

这个节点的作用在于判断当前需求是否足够「痛」

你想想，一个商业机会往往源于一个**未被解决的问题**或一个**强烈的痛点**。而人们在什么时候会表达出最真实的痛点呢？—— **在他们抱怨的时候！**

所以，这个节点能帮我们：

1. **✅ 快速锁定“抱怨帖”：**
  - 如果一个帖子的情感分析结果是**“消极 (Negative)”** ，那它很可能就是一个金矿！比如一个用户发帖说：“我受够了现在用的XX软件，太难用了，有没有更好的推荐？” 这就是一个强烈的商业信号。这个帖子的“消极”情绪越强，说明用户的痛点越深，付费解决的意愿可能就越高。

1. **识别“赞美帖”的价值：**
  - 如果一个帖子的情感分析结果是**“积极 (Positive)”** ，它同样有价值。这能告诉我们，现有的某个产品或解决方案，哪些地方做得特别好，深受用户喜爱。这对于我们做竞品分析，或者思考如何“做得更好”非常有帮助。

后续，我们可以增加一个过滤条件：**优先分析那些****“情感为消极”且“点赞数很高”的帖子**。

这样的帖子几乎可以断定：**这是一个很多人都感同身受的、亟待解决的普遍性问题。** —— 这不就是最好的商业机会吗？

#### 阶段四：数据存储与报告 (汇总成果，触手可及)

最后，我们将所有AI分析的结果汇总起来，以两种方式呈现给我们。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_QFeAbGHj7o.jpg)

1. **节点：存入飞书 (Feishu)**

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_AIp9b9B5jo.jpg)

- **作用**：将每一篇分析过的帖子的所有信息——原文链接、摘要、商业点子、情绪、点赞数等，结构化地存入飞书多维表格。这个表格就成了我们动态更新的、永不枯竭的“商机库”。

**其中，情绪分析的****`Negative`****就是用户抱怨的「痛点」**

1. **节点：发送邮件报告 (Code -> Aggregate -> Send a message)**
  - **作用**：除了存入数据库，系统还会自动生成一封精美的HTML邮件，将当天的所有发现汇总起来，发送到你的邮箱。
  - **流程**：
    - `组装邮件内容 (Code)`: 将每个帖子的分析结果，用HTML代码片段格式化。
![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_XpIdbUhpio.jpg)

    - `Aggregate`: 将所有HTML片段合并成一个完整的邮件正文。
![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_SjZCb56C2o.jpg)

    - `Code`: 用一个优雅的HTML模板包裹邮件正文，使其更美观。
![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_Oyr6bT0rvo.jpg)

    - `Send a message`: 发送最终的邮件。
![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_KFg9b41hzo.jpg)

这样，即使你不登录n8n或飞书，每天早上也能在邮箱里收到一份热气腾腾的“全球商机日报”，是不是很棒？

### 写在最后

今天我们分析的是商业机会，但这个方法论完全可以复用在任何你想打透的领域——无论是寻找产品改进点、挖掘内容营销选题，还是监控竞品动态。

![](assets/%E6%88%91%E7%94%A8n8n%E6%90%AD%E4%BA%86%E4%B8%AA%E3%80%8CReddit%E5%95%86%E6%9C%BA%E9%9B%B7%E8%BE%BE%E3%80%8D%EF%BC%8CAI%E8%87%AA%E5%8A%A8%E6%8C%96%E6%8E%98%E8%A2%AB%E5%BF%BD%E7%95%A5%E7%9A%84%E7%9C%9F%E5%AE%9E%E9%9C%80%E6%B1%82%EF%BC%8C7x24%E5%B0%8F%E6%97%B6%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E9%A3%8E%E5%8F%A3%20%E5%89%AF%E6%9C%AC_Lst8brFNDo.jpg)

### n8n文件：

[附件：Reddit商机发现雷达 by 饼干哥哥AGI.json](https://my.feishu.cn/wiki/HVrjwtzP7iK4sikRbZjc2oHVnOc)

