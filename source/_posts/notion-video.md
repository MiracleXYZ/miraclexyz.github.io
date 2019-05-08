---
title: 在Notion中嵌入视频（以B站为例）
date: 2019-04-19 18:56:16
tags:
    - Notion
    - 视频
    - 嵌入
---

Notion虽然提供了嵌入视频服务，但是只能嵌入YouTube等外国视频网站的视频。不过，我们可以用一些其他方法嵌入国内视频网站的视频。（理论上只要是个iframe就能搞进去，只是配置需要自己手动拖……）

# 以B站为例

1. 首先找到视频，点击「分享」按钮，复制所有的嵌入代码：
    {% asset_img bilibili-share.png B站分享页面 %}
2. 点击下面文本框右边的「复制」按钮，然后在合适的地方粘贴，你会看到这段代码：
    ```html
    <iframe src="//player.bilibili.com/player.html?aid=19390801&cid=31621681&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
    ```
3. 把`src`里面的复制出来（不带引号），前面加上`https:`像这样：
    ```
    https://player.bilibili.com/player.html?aid=19390801&cid=31621681&page=1
    ```
4. 在Notion中新建一个embed（直接输入 `/embed` 即可），并复制这个地址：
    {% asset_img notion-embed.png Notion的embed页面 %}
5. 对生成的页面进行适当拖动，看效果吧！

---

<iframe src="//player.bilibili.com/player.html?aid=19390801&cid=31621681&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width=100% height=550> </iframe>

（随着视频边框的拖动，样式也会发生相应的变化哦~）


