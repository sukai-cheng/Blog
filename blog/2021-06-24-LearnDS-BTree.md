---
slug: LearnDS-BTree
title:
author: 承苏凯
author_title: Java工程师
author_url: https://github.com/sukai-cheng
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description:
tags: [数据结构, 树]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img alt="" src={useBaseUrl('img/2021-06-24-LearnDS-BTree/WX20210624-220006@2x.png')} />

树是数据结构中最基本的一种结构，它的特点是1对多。
:::caution
The description in this article is not rigorous
:::
<!-- truncate -->

<!-- [B 站视频 - 点击传送]() -->

[源码：Github - BTree](https://gitee.com/sukai-cheng/DS)

## 主要内容
### 思路
:::info
通过栈来存储父结点
:::
* 样例: `A(B(D,E),C(,F))`
* 遇到` ( `就把上一次的结点入栈，下一个字母是左结点
* 遇到` ) `就退栈
* 遇到` , `说明一个字母是右结点

```cpp
void CreateBTree(TNode *&rNode,char *str){
    BTree *p = nullptr;
    char ch;
    int k = 0;
    BTree* St[MaxSize];
    int top = -1;
    int j = 0;
    ch = str[j];

    while(ch != '\0'){
        switch(ch){
            case '(':
                k = 1;
                top++;
                St[top] = p;
                break;
            case ')':
                top--;
                break;
            case ',':
                k = 2;
                break;
            default:
                p = (BTree *)malloc(sizeof(BTree));
                p->rChlid = p->lChild = nullptr;
                p->data = ch;
                if(rNode == nullptr){
                    rNode = p;
                }else{
                    switch(k){
                        case 1:
                            St[top]->lChild = p;
                            break;
                        case 2:
                            St[top]->rChlid = p;
                            break;
                    }
                }

        }
        j++;
        ch = str[j];
    }
}
```
## 总结
通过这次练习，我们熟悉了对栈的使用以及二叉链存储结构


