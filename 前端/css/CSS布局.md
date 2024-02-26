>`三栏布局`就是两边固定，中间自适应；

>`两栏布局`就是一边固定，一边自适应，两者类似；

## 1、流体布局

```css
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>
左右模块左右浮动；
中间模块调整margin使自身宽度自适应；

/* 缺点：*/
主要内容无法最先加载，当内容较多时会影响用户体验
```

## 2、BFC三栏布局

```css
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>
左右模块左右浮动；
中间模块设置BFC环境；
/* 缺点：*/
主要内容无法最先加载，当页面中内容较多的时候会影响用户体验。
```

## 3、圣杯布局

```css
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>

跟双飞翼布局很像，但是相对于双飞翼布局来说，
HTML 结构相对简单，样式稍微复杂，也是优先加载内容主体。

盒子设置左右边距；
中间部分设置左浮动，宽度100%；
左边部分设置左浮动，左边距-100%，相对定位 left：-宽度；
右边部分设置右浮动，左边距-100%，相对定位 right：-宽度；
```

## 4、双飞翼布局

```css
<div class="container">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>

利用的是浮动元素 margin 负值的应用；
主题内容可以优先加载，HTML 代码结构稍微复杂点；

盒子设置左浮动，宽度100%；
中间部分设置左右边距；
左边部分设置左浮动，左边距-100%；
右边部分设置右浮动，左边距-100%；
```

## 5、flex布局

```css
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>

盒子设置弹性盒子；
左边部分order：1；
中间部分order：2；flex-grow：1
右边部分order：3；
```

## 6、table布局

缺点：不能设置栏间距

```css
<div class="container">
  <div class="left"></div>
  <div class="main"></div>
  <div class="right"></div>
</div>
盒子设置display：table，宽度100%；
三个部分display：table-cell；
```

## 7、绝对定位布局

简单实用，并且主要内容可以优先加载。

```css
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>

盒子设置相对定位
中间部分设置左右边距；
左边部分设置绝对定位，left:0;top:0;
右边部分设置绝对定位，right:0;top:0;
```

## 8、栅格布局

```css
body{
  display: grid;
}
.left{
  grid-row:1;
  grid-column: 1/2;
  height: 300px;
  background-color: red;
}
.main{
  grid-row:1;
  grid-column: 2/4;
  height: 300px;
  background-color: green;
}
.right{
  grid-row:1;
  grid-column: 4/5;
  height: 300px;
  background-color: blue;
}
```

## 一行自适应等比例布局

```js
// float+百分比
优点：简单快速；宽度间距可控制。
缺点：需要知道具体列数从而设置对应的百分比宽度和间距；
    脱离文档流需要清除浮动。
      
// display：inline-block+百分比
优点：传统方法，所有浏览器均支持，宽度间距可控制大小。
缺点：需要对父级元素设置文字大小为0，否则会有误差，布局失效；
需要知道具体列数。

// display：flex+百分比
优点：宽度间距可控制；根据元素总宽度，浏览器根据剩余宽度自动分配间距宽度；
  不脱离文档流，简单快速。
缺点：需要知道具体的列数从而设置宽度大小；
  低级浏览器需要做兼容。
```
