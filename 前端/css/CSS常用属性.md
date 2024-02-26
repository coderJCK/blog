## ————— 基础类 ————— 
## 字体

| 属性        | 描述                                                    |
| ----------- | ------------------------------------------------------- |
| font-size   | 文字大小（**浏览器默认最小值12px、默认值16px**）、em、% |
| font-weight | 加粗效果（normal；bold；100-900）                       |
| font-family | 文字字体（**IE默认宋体；Chrome默认微软雅黑**）          |
| font-style  | 文字风格（normal；italic斜体字；oblique使字倾斜）       |
| color       | #16进制；英文单词；RGB                                  |

```
复合属性——font：斜体 加粗 大小 字体（大小倒数第二，字体倒数第一）
```

| 字体       | 描述                               |
| ---------- | ---------------------------------- |
| serif      | 字体中字符在行的末端拥有额外的装饰 |
| sans-serif | 字体在末端没有额外的装饰           |
| Monospace  | 所有的等宽字符具有相同的宽度       |

## 段落

| 属性            | 属性值                                   | 描述               |
| --------------- | ---------------------------------------- | ------------------ |
| text-align      | left、center、right、justify             | 文本水平对齐方式   |
| text-decoration | none、underline、overline、line-through  | 文本修饰           |
| text-indent     | 以em为单位，1em=一个文字大小，可以为负值 | 文本首行缩进       |
| line-height     | px、数值、百分比                         | 行高               |
| verital-align   | baseline默认、top、middle、bottom        | 文本的垂直对齐方式 |
| text-transform  | capitalize大写开头、uppercase、lowercase | 转大小写           |

```css
p.date{text-align:right}
p.mate{text-align:justify}
```

| 属性           | 描述         | 属性值          |
| -------------- | ------------ | --------------- |
| word-spacing   | 单词间的距离 | px              |
| letter-spacing | 字符间的距离 | px              |
| direction      | 文字书写方向 | rtl（从右向左） |


## 背景

| 属性                  | 属性值                                                       | 描述             |
| --------------------- | ------------------------------------------------------------ | ---------------- |
| background-color      | 英文单词、16进制(a-f)、rgb(0-255)、rgba（a不透明度）         | 背景颜色         |
| background-image      | 通过url引入图片路径                                          | 背景图片         |
| background-repeat     | repeat默认值、repeat-X横向平铺、repeat-Y纵向平铺、no-repeat不平铺 | 背景图片平铺     |
| background-position   | left、right、center、top、bottom（输入一个值时，另一个值默认为center）、"横px 纵px"（数值可以为负） | 背景位置         |
| background-attachment | 背景图像是否固定或者随着页面的其余部分滚动                   | fixed            |
| background-size       | px（横纵）、百分比（横纵）、cover                            | 背景大小         |
| background-origin     | content-box相对于内容、padding-box相对于内边距、border-box默认，相对于边框定位 | 背景图像定位区域 |
| background-clip       | content-box从内容区域开始、padding-box、border-box默认       | 规定背景绘制区域 |

```css
background：
---linear-gradient（颜色1，颜色2，颜色3...）线性渐变
---radial-gradient（颜色1，颜色2，颜色3...）圆角渐变
```

**背景复合属性：**——一个声明中设置所有的背景属性，可以接一个或多个值，值与值之间用空格隔开。

****

```css
background：颜色 图片 平铺 位置（可以是一个或者多个，多个之间用“,”隔开）
```
### 精灵图/雪碧图

- 概念
  - 是一种网页的图片应用处理方式，它允许将一个页面涉及到的所有零星图片都包含在一张大图里。
- 过程
  - Ui将网页中小图片整合到一张大图里，
  - 利用background-image属性添加图片，
  - 再利用background-position属性使用精准数字定位出图片的位置
- 优点：
  - 1.减少对服务器的请求次数
  - 2.从而加快页面加载速度
- 缺点：
  - 1.需要合理规划布局
  - 2.开发时比较麻烦
  - 3.维护时比较麻烦 

## 列表

| 属性                | 属性值                     | 描述         |
| ------------------- | -------------------------- | ------------ |
| list-style-type     | none、disc、circle、square | 列表项目符号 |
| list-style-image    | url（图片路径）            | 图片项目符号 |
| list-style-position | outside、inside            | 项目符号位置 |

**列表复合属性：**——一个声明中设置所有的列表属性，可以接一个或多个值，值与值之间用空格隔开

```css
ul li{
    list-style：type/url路径 outside/inside
    margin:0;外边距
    padding:0;内边距
}
```

## 表格

```css
caption{
    caption-side:bottom/top
}
table-layout属性
设置或返回表格单元格、行、列的显示算法规则
----auto 默认值  由内容决定
----fixed 固定宽度
border-collapse属性
设置表格的边框是否被折叠成一个单一的边框或隔开
----separate默认值。边框会被分开,会忽略 border-spacing 和 empty-cells 属性
----collapse如果可能，边框会合并为一个单一的边框,不会忽略 
border-spacing属性 设置表格的边框间距
----可以是一个值  水平和垂直方向间距一样
----两个值 第一是水平 第二个是垂直
empty-cells属性 设置是否显示表格中的空单元格
----show 默认值 在空单元格周围绘制边框
----hide 不在空单元格周围绘制边框
```

## 表单

```css
resize---规定是否可由用户调整元素的尺寸
----none禁止缩放
----both 默认值 允许水平方向及垂直方向缩放
----horizontal 只允许水平方向缩放
----vertical 只允许垂直方向缩放
outline 设置元素周围的轮廓
----outline-style 设置轮廓样式 solid实线 dashed虚线 double双线 dotted点线
----outline-color 设置轮廓颜色
----outline-width 设置轮廓宽度
outline复合属性
----outline-style outline-color outline-width;
----outline：none；去掉外轮廓
```

## ————— 效果类 ————— 
## 鼠标

cursor属性定义了鼠标指针放在一个元素边界范围时所用的光标形状

| 值        | 描述                                                         |
| --------- | :----------------------------------------------------------- |
| url       | 需使用的自定义光标的 URL。<br />注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
| default   | 默认光标（通常是一个箭头）                                   |
| auto      | 默认。浏览器设置的光标。                                     |
| crosshair | 光标呈现为十字线。                                           |
| pointer   | 光标呈现为指示链接的指针（一只手）                           |
| move      | 此光标指示某对象可被移动。                                   |
| e-resize  | 此光标指示矩形框的边缘可被向右（东）移动。                   |
| ne-resize | 此光标指示矩形框的边缘可被向上及向右移动（北/东）。          |
| nw-resize | 此光标指示矩形框的边缘可被向上及向左移动（北/西）。          |
| n-resize  | 此光标指示矩形框的边缘可被向上（北）移动。                   |
| se-resize | 此光标指示矩形框的边缘可被向下及向右移动（南/东）。          |
| sw-resize | 此光标指示矩形框的边缘可被向下及向左移动（南/西）。          |
| s-resize  | 此光标指示矩形框的边缘可被向下移动（南）。                   |
| w-resize  | 此光标指示矩形框的边缘可被向左移动（西）。                   |
| text      | 此光标指示文本。                                             |
| wait      | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
| help      | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |

## 显示、隐藏

（1）display

```css
-----显示
display:block----块元素（常用）
display:inline----行内元素
display:inline-block----行内块元素
display:list-item----列表项
display:table----表格
display:table-row-group----表格tbody
display:table-row----表格tr
display:table-cell----表格td
-----隐藏
display:none---隐藏某个元素，且不占用任何空间。
```

（2）visibility

```css
visibility:hidden;---隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间
```

（3）opacity

```css
设置元素的透明度
opacity：0----隐藏，但仍占用页面空间
opacity：1----显示
opacity：0.5/.5----半透明
```

## 溢出

（1）overflow

```css
overflow 盒子溢出处理
overflow -x 水平方向溢出处理
overflow -y 垂直方向溢出处理
```

| 属性值  | 描述                                         |
| ------- | -------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。 |
| hidden  | 超出元素框的内容将被隐藏。                   |
| scroll  | 内容会被修剪，任何情况下，均添加滚动条       |
| auto    | 自适应，根据元素框的尺寸自判断是否添加滚动条 |

（2）white-space

```css
指定元素内的空白怎样处理
--只有normal内容不会超出盒子；
--只有nowrap不会换行，直到遇到下个元素；
--只有pre读换行符；
```

| 属性值 | 描述                                             |
| ------ | ------------------------------------------------ |
| normal | 默认值空白会被浏览器忽略                         |
| nowrap | 文本不会换行，会在同一行上继续，直到遇到标签为止 |
| pre    | 空白、tab换行会被浏览器保留为空格                |

（3）text-overflow

```css
指定当文本溢出包含它的元素应该发生什么
--溢出文本显示省略号
--单行文本显示省略号
--文字在一行显示
```

| 属性值  | 描述                         |
| ------- | ---------------------------- |
| clip    | 修剪文本                     |
| elipsis | 显示省略号来代表被修剪的文本 |

（4）单行文本省略

```css
overflow: hidden;		/* 文本溢出隐藏 */
white-space: nowrap;	/* 文字在一行显示 */
text-overflow: ellipsis; /* 隐藏的文字显示省略号 */
```

```css
/* 优点 */
1.无兼容性；
2.响应式截断；
3.文本溢出范围才显示省略号，否则不显示；
4.省略号的位置刚好；
```

（5）多行文本省略---按行数

```css
---使用WebKit的css拓展属性，该方法适用于safari、chrome和大多数移动端浏览器
/* 优点 */
1.响应式截断；
2.文本溢出范围才显示省略号，否则不显示；
3.省略号的位置刚好；
/* 缺点 */
兼容性一般，webkit-line-clamp属性只有WebKit内核的浏览器才支持
/* 适用场景 */
移动端页面，因为移动端设备浏览器更多是基于WebKit内核
```

```css
overflow: hidden;
display: -webkit-box;			 /* 将对象作为弹性盒子模型展示 */
-webkit-box-orient: vertical;	/* 设置子元素排列方式 */
-webkit-line-clamp: 2;			/* 设置显示的行数 多出的部分会显示为...*/
```

（6）多行文本省略---按高度

```css
--使用伪元素实现，将伪元素放在最后一个字的上方，达到显示省略号的目的。
--该方法兼容性较好，但文字未超出的情况下也会显示省略号
/* 优点 */
1.响应式截断；
2.无兼容性问题
/* 缺点 */
1.无法识别出文字的长短，无论文本是否溢出范围，一直显示省略号；
2.省略号显示可能不会刚刚好，有时会遮住一半的文字；
/* 适用场景 */
适用于数量效果要求比较低，文本一定溢出的情况
```

（7）溢出换行

```css
word-break:
---break-all;   溢出换行
---nomal；
---keep-all；只能在半角空格或连字符处换行
```

## 定位

- 定位=定位模式+偏移量
- 定位模式：静态定位 固定定位 相对定位 绝对定位 粘性定位
- 偏移量: top left right bottom

| 属性     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| fixed    | 元素的位置相对于浏览器窗口是固定位置。                       |
| relative | 相对定位元素的定位是相对其正常位置。                         |
| absolute | 相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于html: |
| sticky   | 依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。 |
| static   | 默认值，即没有定位，遵循正常的文档流对象。                   |

```css
position：absolute
left/right：px
top/bottom：px
```

（1）静态定位static
默认值
```css
position：static
```

（2）相对定位 relative

```css
相对于自身原来的位置进行定位
元素开启了相对定位为后层级提升一级
元素开启了相对定位是占位置的 保留原来位置
```

（3）绝对定位 absolute

```css
元素开启了绝对定位 会脱离文档流不占页面空间
层级提升一级
没有父元素或父元素没有开启定位时 以浏览器为基准进行偏移
父元素开启定位时 相对父元素进行定位 推荐使用父相子绝
```

（4）固定定位 fixed

```ss
脱离文档流 不占页面空间；
以浏览器为基准进行偏移；
不随页面的滚动而滚动；
```

（5）粘性定位--sticky

```css
元素开启定位粘性保留原来位置；
到一定条件不随页面的滚动而滚动；
```

（6）z-index 元素层叠顺序
- 设置元素的层叠顺序，属性值为无单位的整数值，值较大的元素会叠加在值较小的元素之上；
  - 1.元素可拥有负的z-index属性值，默认值是：auto,默认层是：0层
  - 2.当没有设置z-index属性或者层数相同时，后面的元素显示在上面  
  - 3.z-index的属性值，只能为整数，正整数，0，负整数
  - 4.z-index值越大越靠上 
  - 5.需要元素开启定位 才可以使用z-index调整元素顺序

## 转换

可以实现元素的移动，旋转，缩放，倾斜等效果。可以理解为变形，相当于ps软件里的ctrl+t，2D转换是改变元素在二维坐标系上的位置和形状。

（1）translate

```css
---位移属性translate
translate（x,y）沿着x轴和y轴移动
translateX（x）沿着x轴移动
translateY（y）沿着y轴移动
```

（2）rotate

```css
---旋转属性rotate
rotate（度数deg）旋转 正值 顺时针旋转，负值—逆时针旋转
rotateX（度数deg）沿着x轴
rotateY（度数deg）沿着y轴
```

（3）scale

```css
---缩放属性scale
scale（number）缩放0-1 之间表示缩小 大于1表示放大
scaleX（number）水平方向缩放
scaleY（number）垂直反向缩放
```

（4）skew

```css
---倾斜skew(包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个数为空，则默认为0，参数为负表示向相反方向倾斜)
skewX（Xdeg）沿着x轴
skewY（Ydeg）沿着y轴

倾斜90度就看不见了

----复合属性
transform：translate（） rotate（） scale（）
transform-origin--转换的基点（）
默认选中心点为(50% 50%)，也可以设置像素、方位名词（top、bottom、left、right、center）
```

## 过渡

可以为一个元素在不同状态之间切换的时候定义不同的过渡效果

（1）transition-property

```css
添加过渡效果的css属性名称
```

（2）transition-duration

```css
过渡时长--规定完成过渡效果需要多少秒s或毫秒ms
```

（3）transition-timing-function

```css
---linear：匀速
---ease：开始和结束慢，中间快，（默认）
---ease-in：加速
---ease-out：减速
---ease-in-out：和ease类似，但比ease幅度大
```

（4）transition-delay

```css
效果延迟时间/过渡效果延迟
```

（5）符合属性

```css
transition ：1property(css属性) 2duration  3timing function  4delay
(第一个可省略，后三个可以随意调顺序，第一个时间永远是duration)
```

## 动画

```css
@keyframes 规定动画
规则内指定一个css样式和动画将逐步从目前的的样式改变为新的样式
@keyframes 动画名{
    from{}
    *%{}
    to{}
}
---from 规定动画初始状态 0%
---中间可任意添加关键帧
---to规定动画的结束状态 100%
```

（1）动画名称

```css
animation-name：动画名；
```

（2）动画需要时间

```css
规定动画完成一个周期所花费的秒或毫秒。毫秒：ms 秒：s
animation-duration：s/ms；
```

（3）动画何时开始

```css
规定动画是否延迟
animation-delay：s/ms；
```

（4）动画曲线速度

```css
animation-timing-function：
---linear匀速
---ease默认值，慢快慢
---ease-in加速
---ease-out减速
---ease-in-out与ease类似，幅度更大
```

（5）动画次数

```css
animation- iteration-count：
---默认值是1
---infinite循环播放
```

（6）动画播放顺序

```css
animation-direction：
---normal 默认值 正常播放
---reverse 倒叙
---alternate 是否回到原点 播放次数大于2
---alternate-reverse 结束点--开始点--结束点 播放次数大于2
```

（7）动画不播放时

```css
animation-fill-mode：
---none默认值
---forwards保持结束样式
---backwards回到开始
```

（8）动画暂停

```css
（鼠标划过时使用）animation-play-state
---paused
---running默认
```

（9）复合属性

```css
----符合属性
将动画所有属性写在一个属性中(animation-play-state除外)
animation：name duration interaction-count delay fill-mode timing-function fill-mode
```


## 阿里矢量图

Iconfont-国内功能很强大且图标内容很丰富的矢量图标库,提供矢量图标*下载*、在线存储、格式转换等功能。*阿里巴巴*体验团队倾力打造,设计和前端开发的便捷工具

官网：https://www.iconfont.cn/home/index

