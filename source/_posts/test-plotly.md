---
layout:     post
title:      "【测试】Plotly图表插入"
subtitle:   " \"Plotly图表测试\""
date:       2018-08-04 11:21:00
author:     "MiracleXYZ"
header-img: "img/post-bg-test-echarts.jpg"
tags:
    - 测试
echarts: true
mathjax: true
---

## 测试图表

图表来自[plot.ly](https://plot.ly/)。灵感来源于Markowitz资产组合最优化模型。

$$ x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} , r = \begin{bmatrix} r_1 \\ r_2 \\ r_3  \end{bmatrix}$$

$$ \Sigma = \begin{bmatrix} 
\sigma_1^2 & \sigma_{12} & \sigma_{13} \\
\sigma_{12} & \sigma_2^2 & \sigma_{23} \\
\sigma_{13} & \sigma_{23} & \sigma_3^2 
\end{bmatrix} $$

$$ Return = x^T r, \qquad Std = (x^T \Sigma x)^\frac12 $$

<iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~MiracleXYZ/4.embed"></iframe>


