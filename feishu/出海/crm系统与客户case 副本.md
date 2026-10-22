---
title: "crm系统与客户case 副本"
feishu_url: https://my.feishu.cn/wiki/RLAnwPmHEiK2BPkIKHccqASwnJh
obj_type: docx
obj_token: JzeidFgyBoqweVxAhnecm0clnBd
updated: 2026-01-08T16:45:55+08:00
---

# crm系统与客户case 副本

# crm系统

## 各模块说明

### **1、客户管理：**

用于登记每个客户的资料

字段：名称、联系方式品牌

最近交付时间（不同填，自动从「交付记录」中同步）

### 2、供应商管理

供应商id（不用填，公式：供应商名称-领域，避免重名）

供应商名称

领域

联系方式

备注

### 3、合同管理

记录所有签过的合同

字段：合同编号（格式：NGS-日期-序号，例如 NGS-20251020-001）

客户名称（从「客户管理」中选择「客户名称」）
商机名称（从「商机管理」中选择「机会名称」）

签约日期

合同金额

合同附件（上传 最终版pdf）

### **4、商机管理【核心表格】**

**因为1 个客户可能有多个需求，例如做完 Reddit 代发，可能需要开发 agent，这里就****case by case****地记录客户的需求**

字段：

机会名称（公式：客户名称-商机描述）

客户名称（从客户管理表里选择）

商机描述

跟进人员（Reddit 代发➡️CC；Agent 开发➡️饼干）

创建实践（自动生成）

成交金额，备注

跟进阶段（接触提议、方案报价、赢单交付中、完结、丢单）

匹配合同（通过「机会名称」匹配「合同管理」表）

交付记录（不用填，反链接自「客户交付记录」表）

### 5、交付记录

交付id

商机名称（一定要选）

客户名称（不用填，选商机后会出来）

交付项（单选：调研报告、帖子）

交付内容（链接、文档地址等）

交付人（cc、饼干、半醒）

供应商（通过「供应商id」匹配「供应商管理」表）（可为空）

已交付的case整理

关联到这个客户的交付结果，还有

供应商管理

## 执行SOP

1、微信等渠道沟通，了解信息后，对有价值的客户

通过表单：https://ry6uq5vtyu.feishu.cn/share/base/form/shrcnsCeHyI6CRj1roy0iJDV1Se

填入客户信息（一个客户填 1 次）

2、对于有明确意向客户，拉群

填表单：https://ry6uq5vtyu.feishu.cn/share/base/form/shrcneW0veMHNh9vqfx4QmskTjh

录入商机（项目，case by case，或者说，一个合同一个商机，1 个项目填一次）

3、随着谈判进程，每周复盘 1 次，填「商机管理」表中的「跟进阶段」

4、签合同后，填入「合同管理」，1 个项目填一次

5、正式开始交付后，所有的过程结果，都要填入「交付记录」表，按商机/项目来填，一个项目多个记录，包括前期调研的飞书文档、交付的帖子、评论地址等

# 客户case

1.品牌Alivinghome

长期客户，代发帖，佳佳客户，第一个客户，联系方式：ka328-3556409

480两个代发贴

https://www.reddit.com/r/hometheater/comments/1mkqkoh/what_is_your_favorite_comfy_sofa_for_home_theater/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

https://www.reddit.com/r/BuyItForLife/comments/1mahgyi/looking_for_a_modern_recliner_sofa_thatll/

目前进展：20个贴子，和20个评论，评论5美金，贴子200元，11.30之前发完，代发贴我们不提供内容

2.Veout 1000元发了4个贴子

便携显示器用户，合作一次不合作了，对内容创作一窍不通

https://www.reddit.com/r/monitor/comments/1mstluo/can_a_decent_portable_monitor_be_purchased_for/

https://www.reddit.com/r/Monitors/comments/1mmvo7b/choosing_the_ultimate_lowlatency_monitor/

https://www.reddit.com/r/podcasting/comments/12vsdc8/the_most_intensive_beginners_guide_to_microphones/

被删了https://www.reddit.com/r/NintendoSwitch/comments/1mq22nd/til_docked_mode_on_hotel_tvs_is_pointless_my/

https://www.reddit.com/r/digitalnomad/comments/1mrpib8/portable_monitor_dilemma/ 

3.redix.vip

Esim客户，合作一单，一直卡内容，对内容一窍不通，代发帖

249合作的一个代发贴给他补充了评论

https://www.reddit.com/r/eSIMs/comments/1oenboy/comment/nl5awuv/?context=3&utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

4. Giraffe Tools

高压清洗机用户我们全权负责，代发帖100美金，固定长期合作，给折扣，事少衍生需求

第一个月合作5篇，390美金 10月5篇350，11月合作10篇 700美金

10月被删了4篇多花了4篇，还有安排评论6个点价格

https://www.reddit.com/r/garageporn/comments/1o205og/how_to_mount_heavy_stuff_in_the_garage_when_your/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

https://www.reddit.com/r/powerwashingporn/comments/1o1zpwi/i_honestly_forgot_what_color_our_walls_were/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

https://www.reddit.com/r/garageporn/comments/1o1z3cc/my_back_hurts_but_after_a_long_weekend_the_garage/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

https://www.reddit.com/r/Detailing/comments/1nl1w6f/the_best_upgrade_i_made_to_my_detailing_setup/?share_id=cLRSrcMIWT1-3mzhW4Kax&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1

https://www.reddit.com/r/garageporn/comments/1nic7ij/my_little_slice_of_zen/?share_id=LISHylGqJvvJ1xoHQgWDx&utm_content=1&utm_medium=android_app&utm_name=androidcss&utm_source=share&utm_term=1

5.Imfish 移动电源

移动电源第一次合作，全包内容+发帖事少

700元代写内容代发帖

https://www.reddit.com/r/onebag/comments/1ofuim7/still_stuck_in_power_bank_purgatory_kindly_help/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

6.petsnowy

代运营+养号和社区

10000 3个月起

![](assets/crm%E7%B3%BB%E7%BB%9F%E4%B8%8E%E5%AE%A2%E6%88%B7case%20%E5%89%AF%E6%9C%AC_EzG1bYn5ho.jpg)

佳佳

