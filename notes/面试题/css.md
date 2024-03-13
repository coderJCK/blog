---
title: CSS 面试题
---

# CSS 面试题

## 基础

### @import 和 link 的区别

> 1. 语法不同。@import 是一种 css 规则。link 是一个 html 标签
> 2. 加载顺序不同。@import 是 css 加载后再引入，可能阻塞页面。 link 是并行加载 css 文件，不会导致阻塞。
> 3. 兼容性不同。@import 是 css2.1 引入的特性，存在兼容性问题。 link 没有兼容性问题
> 4. 适用范围不同。link 可以指定媒体类型等其他属性
> 5. js 操作。 link 可以在 js 中动态插入或者删除。

### reset.css 和 normalize.css 的区别

> 用于重置或标准化浏览器的默认样式。
>
> - `reset.css`: 旨在重制所有元素的默认样式。
> - `normalize.css`: 旨在解决不同浏览器之间的样式差异

### CSS hack

> 为解决浏览器兼容性问题，针对不同浏览器或版本写相应的 css 代码的过程
>
> - 浏览器前缀
> - 特定浏览器选择器
> - 特定浏览器条件注释。
> - css 属性前缀。-webkit-border-radius

### CSS 选择器

> `基础`：id、class、属性和伪类、element 和伪元素、通配符  
> `复合`：后代、子、兄弟、交集、并集...

### CSS 继承和层叠

> `继承`： 子元素会继承父元素的某些样式，如字体（大小、样式、粗细）、文本（行高、对齐方式、颜色、大小写）、list-style、cursor、opacity、visibility 等
> `层叠`： 多个规则应用于一个元素时，最终样式的确定方式。基于源顺序、优先级、重要性等。

### CSS 盒模型

> 盒模型用于描述元素所占的空间。由 content + padding + border + margin 组成  
> `标准盒模型(box-sizing: content-box)`: 元素的宽高只包括 content 区域  
> `怪异盒模型(box-sizing: border-box)`：元素的宽高包括了 content、padding 和 border

### CSS 单位

> - 长度单位
>   - `px像素`。像素是相对于显示设备的物理像素的单位。
>   - `em、rem`。相对于父元素\根元素的单位
>   - `百分比(%)`。相对于父元素的大小的单位。
>   - `vw、vh`。相对于视窗宽度/高度的单位
>   - `calc()`计算属性
>   - 实际的长度单位(mm\cm\in\pt)
> - 角度单位(deg\rad\turn)
> - 时间单位(s\ms)
> - 颜色单位(RGB\HSL)

### 伪类和为元素

> `伪类`用于定义元素的特定状态.如:hover、:focus、：first-child 等

> `伪元素`用于样式化元素的特定部分或是创建虚拟元素。如::afte。

### BFC

> - `GFC`：网格布局格式化上下文，将一块区域以 grid 网格的形式来格式化
> - `FFC`：弹性格式化上下文，将一块区域以弹性盒的形式来格式化
> - `IFC`：行内格式化上下文，将一块区域以行内元素的形式来格式化。
> - `BFC`：块级格式化上下文，是指一个独立的布局环境，内部元素与外部元素互不影响

> BFC 触发方式：
>
> - 浮动
> - overflow 设置为 hidden/auto/scroll
> - position 设置为 absolute/fixed

> BFC 应用：
>
> - 解决浮动元素令父元素高度塌陷的问题
> - 解决非浮动元素被浮动元素覆盖问题
> - 解决外边距垂直方向重合的问题

### 清除浮动

> - clear(浮动元素下方添加空 div 并清除浮动)
> - 给浮动元素的父级设置高度
> - 给浮动元素的父级设置浮动或者 overflow：hidden;
> - after 伪类清除浮动

### 层叠上下文

> 层叠上下文（Stacking Context）是 CSS 中一种控制元素层叠顺序的机制。当元素发生层叠时，层叠上下文定义了元素在垂直空间中的位置，影响着元素在 z 轴方向上的顺序

> 创建层叠上下文的常见方式
>
> - position 为 relative、absolute、fixed、sticky 时
> - opacity 属性值小于 1 时
> - transform、filte 等 css 属性值不为 none 的元素

### opacity、visibility、display 区别

> 都可以控制元素的隐藏和显示
>
> - `opacity`: 控制元素的不透明度。0 隐藏，仍然占据页面布局
> - `visibility`: 控制元素是否可见。hidden 隐藏，仍然占据页面布局
> - `display`: 控制元素的显示方式。none 完成隐藏，不占据页面布局

## 进阶

### CSS 预处理器

> CSS 预处理器可以为 CSS 增加变编程特性，通过编译器将使用新语法的文件输出为一个 CSS 文件，解决 CSS 难以复用、代码冗余、可维护性低的缺点。常见的预处理器有 less、sass、stylus。

### CSS3 新属性

> - 选择器(属性选择器、子选择器、兄弟选择器)
> - 圆角边框(border-radius)
> - 盒子阴影(box-shadow)
> - 渐变背景(linear-gradient、radial-gradient)
> - 过渡、变形、动画效果(transition、transform、keyframes)
> - 媒体查询(@media)
> - flex、grid 布局
> - font-face (允许使用在线字体，能将放置在服务器上的自定义字体嵌入到页面中，这个字体也可以是矢量图标)

### 渐进增强和优雅降级

> 其实就是向上兼容和向下兼容。因为业务优先，所以大多数公司都是渐进增强
>
> - `渐进增强`：低版本向高版本兼容。
> - `优雅降低`：高版本向低版本兼容

### 渐进式渲染

> 一种提高网页性能的技术，如图片懒加载、异步加载 html、按页面内容显示的优先级进行加载

### 重排和重绘

> `重排`。元素的几何属性变化，如宽高、位置等
> `重绘`。元素的外观改变，如颜色、背景、边框样式等

### CSS 优化，提升性能的方式

> - 1.命名语义化
> - 2.尽可能避免使用!important
> - 3.尽可能精简规则

## 布局类

### 布局方式

> - 静态布局。固定宽度，常用 px
> - 流式布局。相对宽度，常用%
> - 删格化布局。将网页宽度人为的划分成均等的长度,然后排版布局时则以这些均等的长度做为度量单位，通常利用百分比做为长度单位来划分成均等的长度
> - 响应式布局。

### 响应式设计

> 响应式设计是一种设计方法，使网站或应用程序能够自动适应不同的设备和屏幕尺寸。可以通过 css3 媒体查询实现

> 缺点
>
> - 兼容各种设备工作量大，效率低；
> - 代码多，加载时间长；

### 三栏布局

> - flex 左右固定，中间自适应
> - position + margin
> - float + margin

### flex 布局

> flex 容器有属性
>
> - `flex-direction` 属性决定主轴的方向；
> - `flex-wrap` 属性定义，如果一条轴线排不下，如何换行；
> - `flex-flow` 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap；
> - `justify-content` 属性定义了项目在主轴上的对齐方式。
> - `align-items` 属性定义项目在交叉轴上如何对齐。
> - `align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

> 项目（子元素）属性
>
> - `order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
> - `flex-grow` 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
> - `flex-shrink` 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
> - `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
> - `flex` 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。
> - `align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的
> - `align-items` 属性，如果没有父元素，则等同于 stretch。

### 垂直水平居中

1. display

```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
```

2. grid

```css
.container {
  display: grid;
  place-items: center; /* 垂直和水平居中 */
}
```

3. 表格布局

```css
.container {
  display: table-cell;
  text-align: center; /* 水平居中 */
  vertical-align: middle; /* 垂直居中 */
}
```

4. 绝对定位和 transform

```css
.container {
  position: relative;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

5. 绝对定位和 margin

```css
.container {
  position: relative;
}
.centered {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: 250px;
  margin-top: 250px;
}
```

## 文本类

### 单词数字换行问题

> word-break 指定了怎样在单词内断行

强制换行

```css
word-break: break-all;
```

### 设置文字下划线

```css
text-decoration:underline;
```

### 文本省略

- 单行

```css
.text {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

- 多行

```css
.text {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 需要显示的行数 */
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 设置小于 12px 的字体大小

1. 默认值`不推荐`
   > `浏览器设置` - 外观 - 自定义字体 - 最小字号设置
   >
   > 设置`-webkit-text-size-adjust: none;` 解除字号限制，但是此属性在 chrome edge 中无效
2. `scale`
   > 优点：单行、多行文本都可使用
   >
   > 缺点：只是视觉效果变小，并不会改变盒子的实际占位，在对齐其他盒子时不太友好

```css
.text{
  display: block; /* 缩放只对有宽高的标签有效 */
  font-size: 20px; /* 如何需要设置10px，则设置10/fontsize值(此处为20) */
  transform: scale(0.5); /* 20px缩放一般则为10px */
  transform-origin: 0 0; /* 缩放中心点位置 */
  white-space: nowrap; /* 缩放中心 */
}
```

3.  `svg`
    > 优点：1px-12px 任意字号均可设置，可对设计界面进行对齐调整
    >
    > 缺点：不支持多行文本
    <div style="font-size:12px">我是12px字体大小</div>
    <svg width="100px" height="20px">
      <text y="10" x="0" font-size="10px">我是10px字体大小</text>
    </svg>

```html
<div style="font-size:12px">我是12px字体大小</div>
<svg width="100px" height="20px">
  <text y="10" x="0" font-size="10px">我是10px字体大小</text>
</svg>
```

## 图片类

### png8、png16、png32

> - `png8`。用于具有**较少颜色**的图标、图形或简单图像，文件较小，加载速度快。
> - `png16`。适用于照片或具有**大量颜色**的图像，保留更多细节和颜色信息，文件较大，加载速度较慢。
> - `png32`。PNG-24 中带有透明通道的格式，**支持透明度效果**。

### 图片优化

> - 使用适当的图像格式。
>   - 照片使用 jpg
>   - 图标/简单图形使用 svg
>   - 精灵图
> - 使用图片懒加载
> - 压缩图片
> - 通过 css3 渐变等效果替代图像
> - 使用浏览器缓存，减少重复请求和下载。

## 画图

### 画三角形

<div style="width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 50px 50px;
  border-color: transparent transparent transparent #B52400;"></div>

```css
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 50px 50px;
  border-color: transparent #B52400 transparent transparent;
}
```

### 画卡券

<div style="width: 100px;
  height: 100px;
  background: radial-gradient(circle at 50px 0, transparent 20px, #00adb5 0)">
</div>

```css
.hollow-one-circle{
  width: 100px;
  height: 100px;
  background: radial-gradient(circle at 50px 0, transparent 20px, #00adb5 0)"
}
```

### 自适应的正方形

1. 利用 vw

```css
width: 10vw;
height: 10vw;
background: blue;
```

2.利用 margin 或者 padding 的百分比计算是参照父元素的 width 属性

```css
.square {
 width: 10%;
 padding-bottom: 10%;
 height: 0; // 防止内容撑开多余的高度
 background: red;
}
```

## 常见问题

### 外边距塌陷

> 外边距塌陷（Margin Collapse）是 CSS 布局中的一个特性，它指的是在垂直方向上，相邻的两个或多个元素的外边距（margin）可能会合并成一个外边距。这种现象只发生在垂直方向上，水平方向的外边距不会合并。

> `发生情况`
>
> - 父子元素。当父元素没有顶部边框、顶部内边距、内联内容分隔时，父元素与其第一个或最后一个子元素的外边距也会发生合并。
> - 相邻兄弟元素。当两个兄弟元素垂直排列时，它们之间的外边距会合并。
> - 空的块级元素。如果一个块级元素没有内边距、边框、内联内容、高度或最小高度，它的上下外边距也会合并。

> `解决方法`
>
> - 使用边框或者内边距
> - 创建 BFC
> - 父元素使用 flex/grid 布局
> - 使用伪元素

```css
.parent::after {
    content: "";
    display: table;
    clear: both;
}
```

### img 元素下方的空隙问题

> img 元素下方出现空隙的问题通常是由于 img 元素被视为内联元素造成的，因为内联元素会被放置在基线上。

> - vertical-align: middle/top/bottom;
> - display: block/flex;
> - 给图片的父元素 font-size:0

### 内联元素的垂直对齐问题

```css
vertical-align: middle;
```

### 行内块元素之间的间隙问题

> - 原因：浏览器解析的时候，会把回车换行符解析成一定的间隙，间隙的大小跟默认的字体大小设置有关。
> - 解决：其父元素加上 font-size:0 的属性，但是字体需要额外处理。
