#### link链接笔记(CSS)

>a:link - 正常，为访问的链接
>
>a:visited - 用户已访问的链接
>
>a:hover - 当用户鼠标放在链接上时
>
>a:active - 链接被点击的那一刻

background-color(背景颜色)

color(文字颜色)

text-decoration(文字样式)



#### 注意

a:hover 必须在 a:link 和 a:visited 之后，需要严格按顺序才能看到效果。

a:active 必须在 a:hover 之后。



#### 例子

```css
a:link {color: #000000}         /* 链接的颜色 (link)*/
a:visited {color: #00ff00}      /*已访问链接后的颜色*/
a:hover {color: #000eee}        /* 鼠标移到链接上的颜色(hover) */
a:active {color: #eee000}       /*鼠标点击到链接上的颜色(active）*/
```

