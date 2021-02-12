---
slug: algorithm-finite-difference
title: Finite Difference
author: 承苏凯
author_title: Java工程师 / 承苏凯
author_url: https://github.com/sukai-cheng
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: JavaScript 早期的规范不统一，也没有严格的标准，再加上它的语法灵活多样，有些看起来就不正确的代码却能正常执行，一些看起来符合逻辑的代码，运行结果却相差十万八千里。这些问题在日常开发中经常会导致 BUG，更重要的是，很多面试官会把它们拿出来当考验咱们 JS 工程师的能力。
tags: [算法]
---

Finite Difference is define that:`b[i] = a[i] - a[i-1],(i>=1)`, we can calculate value that the result of adding a value to an interval between a and b.
<!-- truncate -->

## Finite Difference problems

### Ques1

```cpp

```

你可能会认为它的输出结果是 "object"，但是结果却是 `undefined`。乍一看代码好像没什么问题，但是细心一点可以看到 return 语句返回的对象放到了下一行，那么问题就来了：JavaScript 的分号是可选的，return 语句在换行后，JavaScript 会自动给它的结尾加上分号，而在 return 之后的代码都不会执行，所以 foo() 的返回结果是 undefined。解决方法是在每行结尾都写上分号，这样就能清楚的知道代码在哪里结束。

### Ques2

问题：

```javascript

```