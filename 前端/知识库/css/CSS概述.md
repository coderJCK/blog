## 概述
- **概念**：Cascading Style Sheets——CSS样式表/层叠样式表/级联样式表

- **作用**：用于设置HTML页面中的文本内容（字体、大小、对齐方式）、图片的外形（宽高、边框样式、边距等）以及版面的布局和外观显示样式。

## 特性

### 1）优先级
用一个元素 使用不同CSS样式表设置相同的CSS样式;
行内样式 > 内嵌样式 > 外部样式				——就近原则
- 行内样式优先级高——调试时使用
- 内嵌样式——没有做到结构和样式完全分离，复用率低，不推荐使用
- 外部样式——结构和样式完全分离，复用率高，推荐使用

### 2）继承性
- 子承父业后代可以继承祖先的部分样式。

**无继承性的样式**

```css
display;
文本类属性：
vertical-align、text-decoration、text-shadow
```

### 3）层叠性
- 后来者居上

## 样式表

### 1）行内样式表

是在HTML开始标签中添加style属性来书写CSS代码的样式表

```
<标签名 style="
  属性：值； 
  属性：值； 
  属性：值；">
</标签名>
例：
<div style="
    background color：blue； 
    font-size：**px；">
</div>
```

### 2）内嵌样式表
是在head标签中，嵌套style标签来书写CSS代码的样式表

```html
<head>
  <title></title>
  <style type="text/css">
    选择器 {
        属性：值；
        属性：值；
    }		
         p {
           color：
        background color：
        font-size：**px
    }
  </style>
</head>
<body>
  <p></p>
</body>
```

### 3）外部样式表
将CSS样式书写在外部的CSS文件中，通过link标签引入

link是单标签

- href：用于指定连接的外部CSS文件的路径
- rel：用来指定当前页面与href所链接的文件之间的关系，stylesheet是样式表不可以省略

```html
<head>
  <link rel="stylesheet" type="text/css" href="css样式表的路径">
</head>
```

### 4）外部导入样式
将CSS样式书写在外部css文件中，通过@import引入到css文件中
（注意：放在第一行）
```
@import url（"css文件路径"）；
```

### **外部样式与外部导入样式的区别**

- 本质的差别: 
  - @import是 CSS 提供的语法规则，只有导入样式表的作用；
  - link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 type、rel 连接属性等。
- 加载顺序的差别: 
  - 加载页面时，link标签引入的 CSS 被同时加载；
  - @import引入的 CSS 将在页面加载完毕后被加载。 
- 兼容性的差别：
  - @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；
  - link标签作为 HTML 元素，不存在兼容性问题。

## CSS语法

```css
选择器 {
  属性：值；
  属性：值；
}
包括选择器和声明块，声明块里面放声明，声明包括属性和属性值
1.选择器是一种选择标签的方式。不同的选择方式对应不同的选择器。
2.声明块：指”{}“，括号里放声明，可以一条，也可以多条。
声明：由属性与值组成
   属性与属性之间需要换行
   属性与值之间使用":"衔接、使用";"结尾
```

## CSS属性书写顺序

目的：减少浏览器回流 增强渲染性能

```css
1.定位属性
position、z-index、left/right/top/bottom
float、overflow、clear
2.自身属性
width、height、padding、margin、background
3.文字样式
color、font-size、font-family、font-style、font-weight
4.文本属性
text-align、vertical-align、text-indent、text-decoration、
letter-spacing、word-spacing、white-space、text-overflow、
5.css3中属性
box-shadow、animation、border-radius、transform
```
