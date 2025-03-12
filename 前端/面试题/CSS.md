# CSS

## 概念类

### CSS技术

> - CSS 框架：TailwindCSS BootStrap
> - CSS 预处理语言：Less Sass Stylus
> - CSS 后处理语言：PostCSS Autoprefixer
> - CSS 组件库：ElementUI AntDesign
> - CSS-in-JS：Styled-Components Emotion
> - CSS 工具：Normalize.css Animate.css


### @import && link

> 1. 加载顺序不同。前者必须先下载，后者是并行加载
> 2. 兼容性不同。前者不兼容旧浏览器，后者都兼容
> 3. 使用方式不同。前者是CSS语法规则，后者是HTML标签

### reset.css && normalize.css

> - reset.css 主要理念是 “**完全重置**”，是去为了除浏览器之间的默认样式差异
> - normalize.css 其设计理念是 “**规范化**”，不是简单地重置样式，而是保留了一些合理的浏览器默认样式，同时纠正了浏览器之间的不一致性和错误的默认样式。

### CSS尺寸

> rem\em、vw\vh、%、px

### 伪元素 && 伪类

> **伪元素** 主要用于选择元素的特定部分。如::before
> **伪类** 主要用于选择元素的特定状态。如：hover

### CSS3
> transition、transform、animation
> flex、grid
> box-shadow、text-shadow、border-radius
> linear-gradient、radial-gradient
> font-face

## 使用类

### CSS选择权、权重

> 基础选择器——行内样式>id选择器>类选择器>标签选择器>全局选择器
> 复合选择器的权重值相加再比较
| 样式                                | 权重            |
| ----------------------------------- | --------------- |
| ！important（属性：值 !important;） | 10000不推荐使用 |
| 行内样式                            | 01000           |
| id选择器                            | 00100           |
| class/类选择器、伪类选择器          | 00010           |
| 标签/元素选择器                     | 00001           |
| 全局/通配选择器                     | 00000           |
| 继承的样式没有权值                  |                 |

### CSS盒模型
> box-sizing: border-box; 启用怪异盒模型
> box-sizing: content-box; 启用标准盒模型

> 标准盒模型：width 和 height 属性仅包含了内容区
> 怪异盒模型：width 和 height 属性包含了内容区、内边距和边框的宽度

### 文本换行

**word-break**需要在长单词或连续字符（如网址、邮箱等）内进行换行时使用
> break-all允许在单词内换行，即使会截断单词。
> normal：使用默认的换行规则，在单词之间换行。
> keep-all：只能在半角空格或连字符处换行。
**禁止换行**
- normal：默认值，合并连续的空白符，文本在必要时换行。
- nowrap：合并连续的空白符，但文本不会换行，会在一行内显示。

```css
/* 多行 */
.container1 {
  width: 200px;
  border: 1px solid black;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 显示的行数 */
  overflow: hidden;
}
/* 单行 */
.container2 {
  width: 200px;
  border: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 显示省略号 */
}
```

### lineHeight继承规则

> line-height 不同类型的值，继承规则是不一样的

> 写具体的数值，如 30px，则继承该数值 - 30px
> 写百分比，如 200% ，则继承当前计算出来的值 - 40px。
> 写比例，如 2  ，则继承比例 - 30px。

### margin负值

> margin-left 负值，元素左移
> margin-top 复制，元素上移
> margin-right 负值，自身宽度缩小，右侧元素会跟进，但内容不受影响
> margin-bottom 负值，自身高度缩小，下方元素会跟进，但内容不受影响

### BFC

> BFC (Block formatting context) 直译为"块级格式化上下文"。它是一个独立的渲染区域，与这个区域外部毫不相干。即，BFC 里面的的内容再怎么发生变化，也不会影响到 BFC 外面的布局，这一点是在网页布局中非常有用的。先说，能形成 BFC 的条件有：
> 1. float 属性不为 none
> 2. position 为 absolute 或 fixed
> 3. display 为 inline-block table-cell table-caption flex inline-flex
> 4. overflow 不为 visible

## 实现

### 居中对齐

**垂直对齐**
- line-height
- top + margin/transform
- 决定定位上下左右0 + maring: auto
- align-items:center
**水平对齐**
- text-align: center、
- left + margin
- margin:auto
- justify-content:center

### 三角形
```css
.triangle-up {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #000; /* 底部颜色即为三角形颜色 */
}
```

### 黑白主题

切换变量颜即可
```css
/* 定义变量 */
:root,
:host {
  --color: #333;
  --bg-color: #fff;
}

/* 使用变量 */
p {
  color: var(--color);
  background-color: var(--bg-color);
}
```

### 