## 布局

### 1、浮动
**适合文字环绕效果**
#### 1）设置浮动
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)
```css
float: left;
```
#### 2）清除浮动
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)
```css
/* 方式1 clear:left/right/both */
clear: both;
/* 方式2 :after */
#box::after {
  content: '';
  clear: both;
  display: block;
}
/* 方式3 overflow设置除visible以外的值 */
#box{
  overflow: hidden;
}
/* 方式4 display */
#box{
  display: flow-root;
}
```

### 2、弹性盒子
**适合单行或单列布局**
#### 1）定义弹性盒子
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
```css
display: flex;
```
#### 2）方向及换行
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)
```css
flex-direction: row;
```
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)
```css
flex-wrap: wrap;
```
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-flow)
```css
flex-flow: row wrap;
```
#### 3）主轴排列方式
主轴排列方式
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)
```css
justity-content: space-between;
```
主轴各个元素的排列方式
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items)
```css
justity-items: space-items;
```
主轴子项的排列方式
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-self)
```css
justity-self: stretch;
```
#### 4）侧轴排列方式
侧轴单行排列方式
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)
```css
align-items: space-between;
```
侧轴多行排列方式
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-content)
```css
align-content: space-between;
```
侧轴子项的排列方式

- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self)
```css
align-self: stretch;
```
#### 5）排列方式复合属性
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-content)
```css
place-content: center;
```
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items)
```css
place-items: center;
```
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-self)
```css
place-self: center;
```
#### 6）子项属性
放大
- [详情](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
```css
flex-grow: 1;
```
缩小
- [详情](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
```css
flex-shrink: 1;
```
初始大小
- [详情](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
```css
flex-basis: 1;
```
简写
- [详情](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
```css
flex: 1;
```
### 3、网格
**适合多行多列布局**
#### 1）显式网格属性
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
```css
display: grid;
```
行
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-rows)
```css
grid-template-rows: auto;
```
列
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-columns)
```css
grid-template-columns: auto;
```
网格区域
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-template-areas)
```css
grid-template-areas: "b b . a";
```
#### 2）隐式网格属性
行
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-rows)
```css
grid-auto-rows: auto;
```
列
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-columns)
```css
grid-auto-columns: auto;
```
自动布局
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-auto-flow)
```css
grid-auto-flow: row;
```
列间隔
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-gap)
```css
column-gap: 2rem;
```
行间隔
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/row-gap)
```css
row-gap: 2rem;
```
## 视觉
> 所谓视觉类样式，是指不影响盒子位置、尺寸的样式，例如文字颜色、背景颜色、背景图片等


### 盒子阴影
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)
```css
box-shadow：h-shadow v-shadow  blur spread color inset;
```

### 文字阴影

- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow)

```css
text-shadow：h-shadow v-shadow blur color;
```

### 边框圆角

- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

```css
border-radius: 10px; /* 同时设置4个角的圆角，半径为10px */
border-radius: 50%; /* 同时设置4个角的圆角，圆的横向半径为宽度一半，纵向半径为高度一半 */
border-radius: 10px 20px 30px 40px; /* 分别设置左上、右上、右下、左下的圆角 */
```

### 渐变色

线性渐变
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient())
```css
background: linear-gradient(to bottom, #e66465, #9198e5);
background: linear-gradient(#e66465, #9198e5);
```
陉向渐变
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient())
```css
background: radial-gradient(to bottom, #e66465, #9198e5);
background: radial-gradient(#e66465, #9198e5);
```


### 变形
> transform只是视觉效果的变化，不会影响盒子的布局
> transform不会导致浏览器重绘和回流，因此效率极高
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
```css
/* 位移 */
transform: translate(45deg);
/* 缩放 */
transform: scale(2);
/* 旋转 */
transform: rotate(0.5turn);
/* 倾斜 */
transform: skew(50deg);
```
修改变形的原点
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)
```css
transform-origin: center; /* 设置原点在盒子中心 */
transform-origin: left top; /* 设置原点在盒子左上角 */
transform-origin: right bottom; /* 设置原点在盒子右下角 */
transform-origin: 30px 60px; /* 设置原点在盒子坐标 (30, 60) 位置 */
```
## 过渡
> 能影响的只有数值类属性，例如：颜色、宽高、字体大小等等
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)
```css
transition: 过渡属性 持续时间 过渡函数 过渡延迟
```
## 动画
> 能影响的只有数值类属性，例如：颜色、宽高、字体大小等等
- [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)
```css
animation: 3s linear 1s infinite alternate slidein;
```
[属性详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)
- animation-name
- animation-delay
- animation-direction
- animation-duration
- animation-fill-mode
- animation-iteration-count 
- animation-play-state
- animation-timing-function

## 字体图标
设置自定义字体
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face)
- [阿里巴巴矢量图标库](https://www.iconfont.cn/)
```css
@font-face {
  font-family: "Open Sans";
  color: #FFFFFF;
  font-size: 22px;
  src: url("/fonts/OpenSans-Regular-webfont.woff2").format("woff2");
}
```
## 视口单位
css3支持使用`vw`和`vh`作为单位，分别表示`视口宽度`和`视口高度`
例如`1vh`表示视口高度的`1%`，`100vw`表示视口宽度的`100%`
## 图像内容适应

- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)

下图中的所有`img`元素均被固定了宽高，溢出img的部分实际上均不会显示

![image-20210514134908778](http://mdrs.yuanjin.tech/img/20210514134908.png)
## 平滑滚动
- [详情](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-behavior)
```css
scroll-behavior: smooth
```
## box-sizing
![image-20210514150015660](http://mdrs.yuanjin.tech/img/20210514150015.png)


## 伪元素选择器

通过`::before`和`::after`选择器，可以通过css给元素生成两个子元素

<img src="http://mdrs.yuanjin.tech/img/20210514140049.png" alt="image-20210514140049244" style="zoom:50%;" />
使用伪元素可以避免在HTML中使用过多的空元素
**伪元素必须要有`content`属性，否则不能生效，如果不需要有元素内容，设置`content:''`**