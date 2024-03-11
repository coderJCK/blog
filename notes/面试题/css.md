## 布局

## 文字

### 单词数字换行问题
> word-break 指定了怎样在单词内断行
<div style="width: 100px;height: 50px;border:1px solid gray;word-break:break-all">
  what's your name ?
</div>

```css
word-break: break-all;
```

### 文本省略
- 单行
<div style="width: 200px;
  border:1px solid gray;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;">海客談瀛洲，煙濤微茫信難求。越人語天姥，雲霞明滅或可覩。</div>

```css
.text {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
- 多行
<div style="width:200px;border:1px solid gray;display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;">天台四萬八千丈，對此欲倒東南傾。我欲因之夢吳越，一夜飛渡鏡湖月。</div>

```css
.text {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  /* 需要显示的行数 */
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 设置小于12px的字体大小
- 方法1: 默认值`不推荐`
> `浏览器设置` - 外观 - 自定义字体 - 最小字号设置
> 
> 设置`-webkit-text-size-adjust: none;` 解除字号限制，但是此属性在chrome edge中无效
- 方法2: `scale`
> 优点：单行、多行文本都可使用
> 
> 缺点：只是视觉效果变小，并不会改变盒子的实际占位，在对齐其他盒子时不太友好
```css
.text{
  /* 缩放只对有宽高的标签有效 */
  display: block; 
  /* 如何需要设置10px，则设置10/fontsize值(此处为20) */
  font-size: 20px;
  transform: scale(0.5);
  /* 缩放中心点位置 */
  transform-origin: 0 0;
  /* 缩放中心 */
  white-space: nowrap;
}
```
- 方法3: `svg`
> 优点：1px-12px任意字号均可设置，可对设计界面进行对齐调整
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

## 图形

### 三角形
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

### 卡券
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

- BFC、IFC、GFC、FFC
- 选择器、权重
- 盒模型
- 层叠上下文
- 垂直水平居中
- 三角形、多边形
- flex布局
- opacity、visibility、display
- transform、animation
- 文本溢出
- png8、png16、png32
- 渐进增强和优雅降级
- 重绘和重排
- 图片优化
- import link
- 清除浮动
- reset.css normalize.css
- 渐进式渲染
- 新增属性
- 响应式
- CSS hack
- css单位