---
slug:  Data-Structure
title: 数据结构-顺序表的存储结构
author: 承苏凯
author_title: Java工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
tags: [数据结构]
---
表结构是一种一对一的逻辑结构，主要的存储结构有两种，第一顺序表实现，第二链表实现
<!-- truncate -->
:::caution

本文代码未经过测试,务必在本地调试通过

:::

## 链表
```cpp
typedef int ElemType;

typedef struct Node{
    ElemType data;
    struct Node * next;
}LinkNode;
```

## 基本操作集
