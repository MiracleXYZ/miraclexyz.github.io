---
layout:     post
title:      "【网站分析】分享看热门电影？"
subtitle:   " \"朋友圈链接分析\""
date:       2018-07-15 00:05:00
author:     "MiracleXYZ"
thumbnail: "/2018/07/15/network-pirated-movies/post-bg-pirated-movies.jpg"
tags:
    - 网站分析
---

## 引言

最近电影《我不是药神》很火（票房在前几天突破了20亿），想看的人很多，而人们并不都有空去电影院看这部电影；于是一些人似乎就有了可乘之机——我的朋友圈和微信群聊中开始出现了这样一些链接：

{% asset_img link-01.png link-01 %}

看一眼这个链接，通过

1. 题目由**一个随机的emoji**加引人注目的标题组成；
2. 网站域名`uix96.bjymnu.cn.`极其不规则（看起来像被封了随时就换一个的网站）

可以初步确定，这绝不是一个正规网站。一般说来，这样的网站有的提供枪版电影，有的纯粹钓鱼，诱导用户点进去甚至分享才是他们的目的。我们可以点开链接一探究竟。

## 链接初探

点开链接，看起来是个人畜无害的电影网站：

{% asset_img link-02.png link-02 %}

当然，点击那个播放按钮之后，熟悉的界面就出来了：

{% asset_img link-03.png link-03 %}

嗯……果然是**诱导分享**。实际上，经历这一次分享后，网站还会让你分享到更多的微信群和朋友圈，最后跳转到一个枪版电影界面。这样网站制作者就达到了扩大网站流量的目的。

当然，对付这种行为很好办：

1. 首先不要相信什么「应版权方宣传要求」之类的话语。对于电影版权方来说，上映期间放着好好的电影院线的钱不赚而去网上放出片源靠诱导分享赔本赚吆喝，显然是不合常理和逻辑的。这种网站的电影即使有，也是在电影院盗录的枪版片源。
2. 这些普通的H5界面只会知道你**是否做出分享的动作**，而对你分享给了谁、是否分享给了不同的群、甚至有没有分享出去这些根本一无所知。如果你真的足够好奇，可以做出分享的假动作（点击分享后接着取消），看看网站进一步的行动。
3. 退一万步讲，即使这个界面真的手眼通天搞到了获取分享信息的能力，你也可以一个人建立一个微信群（方法网上很多）作为测试。当然这不太可能发生，毕竟出了几个月前的分享风波之后，即使是微信小游戏也拿不到这些权限了。

好了，表层看的差不多，是时候show me the code了。

## 网站分析

最开始想到的当然是用Chrome浏览器打开对应网站抓包分析。然而，网站设置了一个限制机制，只能通过微信内置的浏览器打开，用Chrome打开则是——

{% asset_img redirect.png redirect %}

没错！他们跳转到了微信官方用于封停诱导分享链接的页面！前面假装自己是应版权方要求，后面用Chrome打开的时候玩一波「装死」，贵网站还真是把「贼喊捉贼」四个字应用到了极致。不过，看到链接是HTTP而非HTTPS，我们还有办法。

用Fiddler抓包之后，找到了主页面，其中引用了一段js代码：

```js
function share_tip(share_app_times, share_timeline_times) {
	if (share_timeline_times == -1) {
		if (shareATimes == 1) {
		dialog_alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群即可观看！', '好')
		
		//dialog_alert_Mes('分 享成功，还需分 享<span style="font-size: 30px;color: #f5294c">' + (3 - friend_num) + '</span>个不同的群即可观看（同样的群无效）');
		
		} else if (shareATimes == 2) {
		dialog_alert_Mes('<span style="font-size: 24px;color: #f5294c">分享失败！</span><br>注意：分享到相同的群会失败<br>请继续分享到<span style="font-size: 30px;color: #f5294c">2</span>个不同的群！', '好')
		} else if (shareATimes == 3) {
		dialog_alert_Mes('<span style="font-size: 24px;color: #f5294c">分享成功</span></br>请继续分享到<span style="font-size: 30px;color: #f5294c">1</span>个不同的群即可观看！', '好')
		} else if (share_timeline_times < 1) {
			$("#share-wx-img").attr('src','index_files/q1.png'); 
		dialog_alert_Mes('<span style="font-size: 30px;color: #f5294c">分享成功！</span><br/>最后请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可!', '好')
		}
	} else {
		if (shareATimes <= 3) {
			dialog_alert_Mes('应版权方宣传要求！发送到群即可观看全集！');
		} else {
			window.location.href="https://*****.****-*****.***/********/*****_********/*****.****"; //芬享完成后跳转的地址
			}
	}
}
//注：为保护版权，我们将盗版电影网址隐去
```

程序逻辑如下：

1. 点击播放→弹出诱导分享界面；
2. 分享1次→显示「分享成功，还需分享2个群」；
3. 分享2次→强行显示「分享失败，需要分享到不同的群」；
4. 分享3次→显示「分享成功，还需分享1个群」；
5. 分享4次→显示「需分享到朋友圈」；
6. 分享5次→跳转到枪版电影界面。

让这个网站变现的途径是这段代码：

```js
window.onhashchange=function(){jp();};
    function jp() {location.href="http://kigec.mxqnb.cn./";}
    		function hh() {history.pushState(history.length+1, "message", window.location.href.split('#')[0]+"#"+new Date().getTime());}
		setTimeout('hh();', 200);
```

直接在你不注意的时候跳转到小广告的网址，赚取流量费。

## 总结

每当有热点，这些诱导分享的网站就会浮现出来，而且总会有很多人乐此不疲地进行分享。这些网站，要么以传播盗版为手段赚取访问量，要么直接跳转到无关网站空手套白狼，总之做的都是违法的事情。

当然，随着人们警惕意识的提高，这类网站也变得狡猾了起来，开始以「版权方」名义要求用户分享，或者通过在浏览器中「装死」来逃避分析。当然，我们可以利用的方法还是比困难多的。

值得注意的是，网站背后确实有枪版电影这一点，已经是万幸。实际上，该网站的一些链接会解析出一个**跳转到无关网址**的网页，原因尚且未知。如果真的存在一个「空手套白狼」的网站，这也是完全可能的。

最后希望大家在电影上映期间尽量去电影院多多支持正版电影。


