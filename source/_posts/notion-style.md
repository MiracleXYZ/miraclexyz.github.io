---
title: 我如何优化Notion样式
date: 2019-05-08 15:57:55
tags:
    - Notion
    - Style
---

[Notion](https://www.notion.so/)是一款强大的笔记软件，但是由于其主要针对英文市场，在中文界面上显示有些怪怪的。因此，我在实际使用的过程中对其样式进行了一些优化。

## 1 使用网页端

在PC上，Notion可以从**网页端**或**客户端**登录。由于客户端较难对格式进行修改，我们在这里使用**网页端**。

不过，如果直接在浏览器中打开网页端，有很大一部分空间是被浪费掉的：我们只是要打开Notion，而不需要地址栏和标签页。换句话说，我们需要一个长得像客户端的网页端。

这样的功能怎么实现呢？我使用了Chrome APP。参考[这篇博文](https://sspai.com/post/50250)，将其中Slack的地址替换为Notion，即可在桌面上创建一个比Notion客户端更好看的Chrome APP了。

## 2 更改字体

Notion并未对中文字体做太多优化，所以中文字体的显示充斥着一种「原始感」：Windows客户端使用的是宋体和楷体，网页端使用的是浏览器默认字体（Windows一般是微软雅黑）和楷体。虽然网页端默认使用无衬线字体对美观程度有所改善，但是把楷体作为Serif格式默认字体的设置实在是不太符合我个人的审美。

好在，网页端有很多更改格式的方法。我使用了Chrome插件Stylus。你可以在[Chrome网上应用店](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)安装这款插件。新建一个新样式，将其应用于域名：

- `www.notion.so`
- `notion.so`

就可以在里面输入CSS修改字体了。

``` css
@font-face {
    font-family: 'KaiTi';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: 'STKaiTi';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: '华文楷体';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: 'KaiTi_GB2312';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: '楷体_GB2312';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: '楷体';
    src: local('思源宋体 CN');
}
@font-face {
    font-family: 'BlinkMacSystemFont';
    src: local('思源黑体 CN');
}
```

前面几行是将「楷体」改成了「思源宋体」，后面则是将默认的字体改成了思源黑体。当然，需要先在本地安装这两款字体才行。你可以在GitHub下载到这两款字体：

- [思源黑体](https://github.com/adobe-fonts/source-han-sans)
- [思源宋体](https://github.com/adobe-fonts/source-han-serif)

这之后，Notion的样式就变得好看多了。

## 3 优化滚动条（夜间模式）

Notion官方有夜间模式的支持，这是非常不错的。然而其突兀的滚动条实在是让人心烦。为了解决这个问题，你可以在前面的CSS中加入如下代码（源自notion-hack）：

```css
#notion-app .notion-scroller > div:nth-child(1) {
    color: #eee!important
}
#notion-app .notion-scroller::-webkit-scrollbar {
    width: 5px;
}
#notion-app .notion-scroller::-webkit-scrollbar * {
    background: transparent;
}
#notion-app .notion-scroller::-webkit-scrollbar-thumb {
    background: rgba(47, 47, 47, .1) !important;
}

::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar * {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: rgba(47, 47, 47, .1) !important;
}

#notion-app .notion-scroller > div > .notion-selectable[style*="flex"] {
    padding-bottom: 0px!important;
}
#notion-app .notion-scroller .notion-selectable > div[style*="inline-flex"] {
    overflow: hidden;
    height: 400px;
}
#notion-app .notion-scroller .notion-selectable > div[style*="inline-flex"] > div {
    overflow: auto;
}
```

前半部分优化代码，后半部分则针对Board View之下所有的列都做了一个滚动条，方便观看页面较多的Board。

---

上面几步完成之后，Notion的页面应该就好多了，可以安心地记笔记了……

最终的界面如下：

![界面预览](preview.png)

