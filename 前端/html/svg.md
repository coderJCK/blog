[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/SVG)
## svg概述
1、svg提供的是矢量图，缩放不会失真或降低质量
```html
<!-- 绘制到svg标签中即可，svg必须设置宽度 -->
<svg></svg>
```
2、css可以利用style属性插入到元素的行间
```html
<svg width="200px">
  <rect x="10" height="10" y="10" width="180" style="stroke: black; fill: red;"/>
</svg>
```
3、svg可以嵌套svg
- 可以利用内部svg元素的属性viewBox、属性width和属性height简单创建一个新的坐标系统。
```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <svg width="100" height="100" viewBox="0 0 50 50">
    <rect width="50" height="50" />
  </svg>
</svg>
```

## 形状
### 1、直线

<svg width="200px" height="50px">
  <line x1="10" x2="100" y1="30" y2="30" stroke-width='5' stroke="black" />
</svg>

```html
<!-- 
  x1、y1  起点坐标位置
  x2、y2  终点坐标位置
 -->
<line x1="10" x2="100" y1="30" y2="30" stroke-width='5' stroke="black" />
```

### 2、折线

<svg width="200px" height="50px">
  <polyline points="0 0,10 30,20 0,30,30" fill="transparent" stroke-width="1" stroke="black" />
</svg>

```html
<!-- 
  points  一组点的坐标
 -->
<polyline points="0 0,10 30,20 0,30,30" fill="transparent" stroke-width="1" stroke="black" />
```

### 3、矩形

<svg width="200px" height="50px">
  <rect x="10" y="10" width="40" height="30" stroke="black" fill="transparent" stroke-width="5" rx="10" ry="10" />
  <rect x="100" y="10" width="40" height="30" stroke="black" fill="red" stroke-width="5" rx="10" ry="10" />
</svg>

```html
<!-- 
  x、y  坐标位置
  rx、ry 边框圆角
  width、height 宽高
 -->
<rect x="10" y="10" width="40" height="30" stroke="black" fill="transparent" stroke-width="5" rx="10" ry="10" />
<rect x="100" y="10" width="40" height="30" stroke="black" fill="red" stroke-width="5" rx="10" ry="10" />
```

### 4、圆

<svg width="200px" height="50px">
  <circle cx="25" cy="25" r="20" fill="transparent" stroke="black" stroke-width="5" />
  <circle cx="100" cy="25" r="20" fill="red" stroke="black" stroke-width="5" />
</svg>

```html
<!-- 
  cx、cy  坐标位置
  r 半径
 -->
<circle cx="25" cy="25" r="20" fill="transparent" stroke="black" stroke-width="5" />
<circle cx="100" cy="25" r="20" fill="red" stroke="black" stroke-width="5" />
```

### 5、椭圆

<svg width="200px" height="50px">
  <ellipse cx="40" cy="25" rx="30" ry="20" fill="transparent" stroke="black" stroke-width="5" />
  <ellipse cx="150" cy="25" rx="30" ry="20" fill="red" stroke="black" stroke-width="5" />
</svg>

```html
<!-- 
  cx、cy  坐标位置
  rx、ry 半径
 -->
<ellipse cx="40" cy="25" rx="20" ry="20" fill="transparent" stroke="black" stroke-width="5" />
<ellipse cx="150" cy="25" rx="20" ry="20" fill="red" stroke="black" stroke-width="5" />
```

### 6、多边形
- **与折线类似，但是折线不会形成闭合**
- 矩形也是一种矩形，所以也可以用多边形创建矩形

<svg width="200px" height="50px">
  <polygon points="20 0,40 0,50 30,10 30" stroke="black" stroke-width="2" fill="transparent" />
  <polygon points="100 0,120 0,130 30,90 30" stroke="black" stroke-width="2" fill="red" />
</svg>

```html
<!-- 
  points  一组点的坐标(会进行闭合)
 -->
<svg width="200px" height="50px">
  <polygon points="20 0,40 0,50 30,10 30" stroke="black" stroke-width="2" fill="transparent" />
  <polygon points="100 0,120 0,130 30,90 30" stroke="black" stroke-width="2" fill="red" />
</svg>
```

### 7、路径
- **最强大的一个**，可以创建线条，曲线，弧形等
- path设置很少的点就能创建平滑流畅的线条， polyline必须设置大量的点，且放大过后点的离散更明显

1）画线

<svg width="200px" height="30px">
  <path d="M5 5 L 75 5" fill="transparent" stroke="red" stroke-width="5" />
</svg>

2）画矩形

<svg width="200px" height="50px">
  <path d="M5 5 V 40 H 75 L 75 5 Z" fill="transparent" stroke="red" stroke-width="5" />
  <path d="M120 5 v 35 h 70 L 190 5 Z" fill="transparent" stroke="red" stroke-width="5" />
</svg>

3）贝塞尔曲线

<svg width="250px" height="200px">
  <path d="M 0 100 C 20 0, 80 0, 100 100 S 180 200, 200 100" fill="transparent" stroke="red" stroke-width="5" />
</svg>

4）弧形

<svg width="250px" height="200px">
  <path d="M 50 50
           A 50 50, 0, 1, 0, 100 100"
    fill="transparent" stroke="red" stroke-width="5" />
</svg>

```html
<!-- 
  Mx y  画笔起始坐标
  L x y 画笔终点坐标
  H x   画笔起始坐标水平方向平移的终点x坐标
  V y   画笔起始坐标垂直方向平移的终点y坐标
  h length  水平方向移动多少距离
  v length  垂直方向移动多少距离
  Z       闭合路径
  C x1 y1, x2 y2, x y   三次贝塞尔曲线(起点控制点，终点控制点，终点)
  S x2 y2, x y 创建与前面一样的贝塞尔曲线
  A rx ry x-axis-rotation large-arc-flog sweep-flag x y   弧形(x半径、y半径、x轴旋转角度、角度大小0-小弧1-大弧、弧线方向0-逆时针1-顺时针、终点坐标)
 -->
<svg width="200px" height="50px">
  <!-- 线 -->
  <path d="M5 5 L 75 5" fill="transparent" stroke="red" stroke-width="5" />
  <!-- 矩形 -->
  <path d="M5 5 V 40 H 75 L 75 5 Z" fill="transparent" stroke="red" stroke-width="5" />
  <path d="M120 5 v 35 h 70 L 190 5 Z" fill="transparent" stroke="red" stroke-width="5" />
</svg>
```

## 填充

### 1、基本填充和边框
```html
fill            设置填充颜色
fill-opacity    设置填充色的不透明度
stroke          设置描边颜色
stroke-opacity  设置描边的不透明度
stroke-width    设置描边尺寸
stroke-linecap  设置描边方式，如round圆角、butt直角、square直角，但会超出实际范围
stroke-linejoin 两条线之间的描边方式，如miter尖角、round圆角、bebel斜切
```
例如：设置一个黑色圆角不透明度为0.8的直线

<svg width="200px" height="30px">
  <line x1="10" y1="10" x2="100" y2="10" 
    stroke="black"
    stroke-width="10"
    stroke-linecap="round"
    stroke-opacity="0.8"
    />
</svg>
```html
<svg width="200px" height="30px">
  <line x1="10" y1="10" x2="100" y2="10" 
    stroke="black"
    stroke-width="10"
    stroke-linecap="round"
    stroke-opacity="0.8"
    />
</svg>
```

### 2、渐变填充
1） 线性渐变

<svg width="200px" height="80px">
  <defs>
    <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="blue" />
      <stop offset="50%" stop-color="red" />
      <stop offset="100%" stop-color="black" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="100" height="50" fill="url(#gradient1)" />
</svg>

```html
<!-- 
  linearGradient 定义一个渐变色，其他形状通过选择器使用这个渐变色来填充
  x1,x2,y1,y2  可以改变方向
 -->
<svg width="200px" height="80px">
  <defs>
    <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="blue" />
      <stop offset="50%" stop-color="red" />
      <stop offset="100%" stop-color="black" />
    </linearGradient>
  </defs>
  <rect x="10" y="10" width="100" height="50" fill="url(#gradient1)" />
</svg>
```

2）经向渐变

<svg width="200px" height="110px">
  <defs>
    <radialGradient id="gradient2" cx="0.25" cy="0.75" r="0.5" fx="0.5" fy="0.5">
      <stop offset="0%" stop-color="blue"></stop>
      <stop offset="80%" stop-color="red"></stop>
      <stop offset="100%" stop-color="black"></stop>
    </radialGradient>
  </defs>
  <circle cx="60" cy="60" r="50" fill="url(#gradient2)" />
</svg>

```html
<!-- 
  radialGradient 定义一个径向渐变色，其他形状通过选择器使用这个渐变色来填充
  cx cy r   移动渐变范围，默认0.5
  fx fy   渐变的焦点, 默认0.5,即中心点
 -->
<svg width="200px" height="110px">
  <defs>
    <radialGradient id="gradient2">
      <stop offset="0%" stop-color="blue"></stop>
      <stop offset="80%" stop-color="red"></stop>
      <stop offset="100%" stop-color="black"></stop>
    </radialGradient>
  </defs>
  <circle cx="60" cy="60" r="50" fill="url(#gradient2)" />
</svg>
```


### 3、图案填充
- pattern内部可以包含任何形状

<svg width="200px" height="200px">
  <defs>
    <pattern id="pattern1" width="0.25" height="0.25">
      <rect x="0" y="0" width="20" fill="red" height="20" />
      <circle cx="20" cy="20" r="10" opacity="0.5" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="200" height="200" fill="url(#pattern1)" />
</svg>

```html
<svg width="200px" height="200px">
  <defs>
    <pattern id="pattern1" x="0" y="0" width="0.5" height="0.5">
      <rect x="0" y="0" width="50" fill="red" height="50" />
      <circle cx="40" cy="40" r="30" opacity="0.5" />
    </pattern>
  </defs>
  <rect x="10" y="10" width="200" height="200" fill="url(#pattern1)" />
</svg>
```


### 4、文字填充

<svg width="200" height="200" style="border: solid">
  <text x="50" y="20" fill="blue" stroke="black" font-size="20" stroke-width='2' text-anchor="middle">SVG</text>
  <text>
    <tspan rotate="90deg" dx="10" dy="30" textLength="100">你好</tspan>
    <textPath xlink:href="#path1">沿着路径对齐</textPath>
  </text>
  <path id="path1" d="M 10 120
           A 10 10, 0, 1, 1, 100 120"
    fill="transparent" stroke="red" stroke-width="1" />
</svg>

```html
<!--
  text-anchor 水平对其方式 start、middle、end
  font-family 字体
  font-size
  font-style
  font-weight
  letter-spacing
  word-spacing
  text-decoration
  等有关字体的css属性都可以设置
 -->
<svg width="200" height="200" style="border: solid">
  <!-- 基本文本 -->
  <text x="50" y="20" fill="blue" stroke="black" font-size="20" stroke-width='2' text-anchor="middle">SVG</text>
  <text>
    <!-- tspan -->
    <tspan rotate="90deg" dx="10" dy="30" textLength="100">你好</tspan>
    <!-- textPath -->
    <textPath xlink:href="#path1">沿着路径对齐</textPath>
  </text>
  <path id="path1" d="M 10 120
           A 10 10, 0, 1, 1, 100 120"
    fill="transparent" stroke="red" stroke-width="1" />
</svg>
```

## 操作
### 1、变形
1）基本变形
和css的transform一样
2）复杂变形
matrix(a,b,c,d,e,f) 需要用到矩阵
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/transform#general_transformation)
### 2、剪切

<svg height="80">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="00" width="100" height="50" />
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="50" clip-path="url(#cut-off-bottom)" />
</svg>

```html
<svg>
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="00" width="100" height="50" />
    </clipPath>
  </defs>
  <circle cx="50" cy="50" r="50" clip-path="url(#cut-off-bottom)" />
</svg>
```

### 3、遮罩
- 可以搭配渐变使用

<svg>
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>

```html
<!-- mask -->
<svg>
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="white" stop-opacity="0" />
      <stop offset="1" stop-color="white" stop-opacity="1" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```


## 其他元素
###  1、容器元素g
- 方便统一设置填充、描边、变换等属性
```html
<g stroke="green" fill="white" stroke-width="5">
  <circle cx="25" cy="25" r="15" />
  <circle cx="55" cy="25" r="15" />
</g>
```

### 2、克隆元素use

<svg height="30px">
  <defs>
    <circle id="Port" fill="red" r="10"/>
  </defs>
  <use x="50" y="10" xlink:href="#Port" />
  <use x="10" y="10" xlink:href="#Port" />
</svg>

```html
<svg height="30px">
  <defs>
    <circle id="Port" fill="red" r="10"/>
  </defs>
  <use x="50" y="10" xlink:href="#Port" />
  <use x="10" y="10" xlink:href="#Port" />
</svg>
```

### 3、image
```html
<svg>
  <image xlink:href="./xx.png" x="0" y="0" height="50" width="50" />
</svg>
```