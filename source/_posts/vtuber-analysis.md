---
layout:     post
title:      "【分析】VTuber数据分析(1)"
subtitle:   " \"Virtual YouTubers\""
date:       2018-07-19 15:37:00
author:     "MiracleXYZ"
thumbnail: "/2018/07/19/vtuber-analysis/post-bg-vtuber-analysis.jpg"
tags:
    - VTuber
    - ECharts
---

<script type="text/javascript" src="https://echarts.baidu.com/dist/echarts.min.js"></script>

## VTuber概述

最近，Virtual YouTuber（简称VTuber）行业方兴未艾；从最初的Kizuna Ai（キズナアイ、絆愛）到现在超过3000人的规模，也不过两年的时间。而且，这一数字还将继续增长下去。

在这个时间节点上，我决定做一个相关的统计工作。

- 数据来源：[バーチャルYouTuberランキング](http://virtual-youtuber.userlocal.jp/)（前2000名VTuber情报）
- 分析工具：Python, ECharts
- 采集时间：2018年7月17日 17:00:00

## VTuber TOP100

### 粉丝数（YouTube频道订阅数）

<div id="top100-fan" style="width:100%;height:550px;"></div>
<script type="text/javascript" src="/js/top100-fan.js"></script>

### 播放数

<div id="top100-play" style="width:100%;height:550px;"></div>
<script type="text/javascript" src="/js/top100-play.js"></script>

## VTuber公司（事务所）TOP5

近几个月以来，VTuber界的形势又有所变化：多个YouTuber开始成立公司或者事务所，每个公司占据一定比例的市场份额。我们按照粉丝数和播放数对这些公司排序，使用前五名的数据得到下面的两张图表——可以看到一张市场大饼已初具雏形。

### 粉丝数TOP5的公司

<div id="company-fan" style="width:100%;height:550px;"></div>
<script type="text/javascript" src="/js/company-fan.js"></script>

### 播放数TOP5的公司

<div id="company-play" style="width:100%;height:550px;"></div>
<script type="text/javascript" src="/js/company-play.js"></script>

## 总结

值得注意的是，这些图表只是在试图窥探这个庞大市场当中的一隅——VTuber事业仍然处于上升期，所以这些图表中的数据在将来可能会有不小的变化（比如在一年前谁会想到会有一群VTuber对着爱酱叫「親分」呢）；也希望这一产业能够继续发展，给人们带来更多的娱乐选择。

欢迎在评论区留下你的见解。
