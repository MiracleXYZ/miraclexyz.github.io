---
title: 【VTuber】会员关联度可视化（油管数据）
date: 2019-06-11 16:41:44
tags:
    - VTuber
thumbnail: "/2019/06/11/vtuber-collab-youtube/yousim_core.jpg"
---

> 原载：bilibili https://www.bilibili.com/read/cv2797187

前不久，我画了几张B站VUP的关联度可视化图表，具体细节及算法见：

{% post_link vtuber-collab %}

后来发现，YouTube Gaming也有类似的月费会员机制，因此可以把上篇文章中的算法在YouTube上再实现一遍。

本篇文章使用了Mamedaifuku桑提供的数据，数据来源见http://mamedaifuku.sakura.ne.jp/live_stream/html/index.html，时间范围为2019年5月。

话不多说，直接上图。

---

{% asset_img yousim.jpg %}

图中线段所代表的意义如下：

1. **灰色线段**代表两个VTuber之间**有重合的会员**。如果两者消费群体完全不重合，两个VTuber间将直接没有线段。
2. **粉色线段**代表两个VTuber之间存在**best-match**。比如，在与MEA有关VTuber中，AQUA的相似度最高，那么MEA和AQUA之间就有一条粉色的线段。

从图里可以看到，日本市场比国内市场参与者更多，聚集程度也更大。我们可以把图中的「核心区域」单独摘出来：

Hololive、Nijisanji、ANMR、HNST、Paryipro，各自旗下的VTuber几乎都是聚集在一起的。事实上，在一些VTuber的相似度排序中，可以非常清楚地看到这一点：

{% asset_img aqua.jpg %}

Aqua的相似度排序，前10名除Mea外全部是Hololive成员。

{% asset_img mea.jpg %}

Mea的相似度排序中也有一大部分是（前）Paryipro成员。

彩虹社的箱推特点也非常明显，以本间向日葵为例：

{% asset_img hima.jpg %}

ANMR和HNST的关系也较近。比如组长（因幡はねる）

{% asset_img haneru.jpg %}

结构整齐，层次清晰……

什么？你说homolive？

{% asset_img tamaki.jpg %}


对于（半）个人势犬山玉姬来说，相似度高低主要取决于联动数量和时长的多少。排在前面的基本都是与犬山老师有较多联动的。~~（谁能想到和犬山哥贴贴的竟然是BFM呢）~~

至于NOBUTAMA，这里仅有0.03的相似度。

<p style="text-align:center">**我　想　救　救　犬　山　哥**</p>

嗯……仔细想想这个数值也并不令人吃惊，毕竟两人没有任何的正式联动，DD们没有「给这俩人打钱」的动机……

所以啊……正式联动あくしろよ！！！

---

你在图片中看到了什么呢？欢迎在评论区留言讨论。有什么意见或建议也可以在评论区提出。

我很感谢Mamedaifuku桑提供的数据以及给我的启发，这对这篇文章的形成有莫大的帮助。

关系图使用python的networkx画出。你可以在networkx的[官网](https://networkx.github.io/)查阅有关资料。

感谢阅读。欢迎点赞、投币、收藏、分享，下篇文章见~


