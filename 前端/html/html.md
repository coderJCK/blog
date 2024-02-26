<a name="top"></a>
## 一、HTML 简介

### 1、定义

HyperText Markup language 超文本标记语言（网页的标准语言）

- **hypertext**：超文本，以超链接的形式将信息跳转到目标文本的位置
- **makeup**：标记，即标签或者元素，划分网页中不同部分的内容
- **language**：描述网页的语言，非编程语言。

### 2、基本框架

```html
<!--声明文件-->
<!DOCTYPE html>
<!--网页开始-->
<html lang="en">
<!--网页的头部-->
<head>
  <!--编译语言，防止乱码；utf-8 多国编译语言-->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--网页的标题-->
  <title>我的网页</title>
</head>
<!--网页主体-->
<body>
</body>
</html>
<!--网页结束-->
```

### 3、命名规范

- 只能由字母、数字、符号-构成
- 一般不区分大小写，小写为主
- 示例：index.html

## 二、标签

### 1、概念

（HTML tag）指从开始标签到结束标签的所有代码。

- 不区分大小写，推荐使用小写；
- 由尖括号包围，由/结束；

### 2、关系

- **父子关系**
  如，html>head;
- **并列关系、兄弟关系**
  如，head 和 body;
- **多层嵌套，祖先后代关系**
  如，html>head>title;

### 3、类别

- **块级元素**
  默认独占一行，且宽度 100%
  能容纳行内元素或其他块级元素
  宽高度、内外边距可以直接设置
- **行内元素(内联)**
  只能容纳文本或其他行内元素
  宽高度、内外边距不可以直接设置
- **行内块元素**
  不会默认独占一行、也不会默认宽度 100%
  能容纳行内元素或其他块级元素
  宽高度、内外边距可以直接设置
- **单标签**
  大部分元素是双标签，有些元素是单标签，如 hr、img、br 等

### 4、嵌套规则

- 块级元素嵌套行内元素以及部分块元素，div 可以嵌套任意元素，行内元素不可以嵌套块元素
- **转换**：行内标签可以转换为块级标签，不建议把块级标签转换为行内标签
- **固定嵌套关系**：ul>li ol>li dl>dt+dd select>option table>tr>td
- 标题标签 h 与段落标签 p 不能相互嵌套
- 自定义列表里的 dt 只能嵌套行内元素和行内块元素，dd 可以嵌套任意元素

## 三、特殊字符

### 1、空格

```html
一个空格——&emsp;
半个空格 ——&ensp;
半个空白位——&nbsp;
```

### 2、大于小于

&lt;&gt;

```html
小于号——&lt;
大于号——&gt;
```

### 3、其他

注册:&reg; 版权:&copy; 商标:&trade; 引用:&quot;

```html
注册——&reg;
版权——&copy;
商标——&trade;
引用——&quot;
```

## 四、基本标签

### 1、分组

可以随意使用，最常用

```html
<!-- 行内元素 -->
<span></span>
<!-- 块元素 -->
<div></div>
```

### 2、标题

一个页面一般只能有一个 h1 标签，而 h2 到 h6 标签可以有多个。

<h1 align="center">一级标题</h1>
<h2 align="center">二级标题</h2>
<h3 align="center">三级标题</h3>
<h4 align="center">四级标题</h4>
<h5 align="center">五级标题</h5>
<h6 align="center">六级标题</h6>
```html
<h1 align="center">一级标题</h1>
<h2 align="center">二级标题</h2>
<h3 align="center">三级标题</h3>
<h4 align="center">四级标题</h4>
<h5 align="center">五级标题</h5>
<h6 align="center">六级标题</h6>
```

### 3、段落

<p align="left">左对齐的段落</p>
<p align="center">居中对齐的段落</p>
<p align="right">右对齐的段落</p>
```html
<p align="left">左对齐的段落</p>
<p align="center">居中对齐的段落</p>
<p align="right">右对齐的段落</p>
```

### 4、列表

**无序列表**

<ul type="disc">
  <li>无序列表1</li>
  <li>无序列表1</li>
</ul>
```html
<!-- 
  type="square方形/disc实心圆/circle空心圆"
-->
<ul type="disc">
  <li>无序列表1</li>
  <li>无序列表1</li>
</ul>
```

**有序列表**

<ol type="1" start="1">
  <li>我是1</li>
  <li>我是2</li>
</ol>
```html
<!-- 
  type="1、A、I..."		按什么类型排序
  start="1"						起始值是多少
  reversed="reversed"	是否反转
-->
<ol type="1" start="2">
  <li>我是2</li>
  <li>我是3</li>
</ol>
```
**自定义列表**
<dl>
  <dt>标题</dt>
  <dd>文本</dd>
</dl>
```HTML
<dl>
  <dt>标题</dt>
  <dd>文本</dd>
</dl>
```

### 5、表格

<table>
  <caption>表格标题</caption>
  <thead>
    <tr align="center">
      <th>姓名</th>
      <th>年龄</th>
      <th>年龄</th>
      <th>年龄</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td>Tom</td>
      <td>26</td>
      <td>26</td>
      <td>26</td>
    </tr>
    <tr align="center">
      <td>Tom</td>
      <td>26</td>
      <td>26</td>
      <td>26</td>
    </tr>
  </tbody>
</table>

```html
<!--
--table属性
  align---水平对齐方式:left左（默认）、center中、right右
  width="px、%"----宽度
  height="px、%"----高度
  border="px"----边框大小
  bordercolor----边框颜色
  cellspacing="xxpx"----单元格间距,默认为2px
  cellpadding="xxpx"----单元格内边距，默认为1px
  bgcolor="rgb()、16进制、英文单词"----背景颜色
  background----背景图片

--tr属性
  align---水平对齐方式left左（默认）、center中、right右
  valign---垂直对齐方式top上  、middle中（默认）、bottom下
  bgcolor---背景颜色
  height---高度
  background----背景图片

--td属性
  align---水平对齐方式:left左（默认）、center中、right右
  valign---垂直对齐方式:top上  、middle中（默认）、bottom下
  bgcolor---背景颜色
  width---宽度
  rowspan----垂直合并
  colspan----水平合并
-->
<table>
  <caption>表格标题</caption>
  <thead>
    <tr align="center">
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td>Tom</td>
      <td>26</td>
    </tr>
  </tbody>
</table>
```

### 6、文本

<font 
  face="helvetica, arial"
  size="bold"
  color="blue">
文本
</font>

```html
<!--
  face 字体 size 字号 color颜色
-->
<font
  face="helvetica, arial"
  size="bold"
  color="blue">
  文本
</font>
```

<b>粗体</b>
<strong>粗体表强调</strong>
<u>下划线</u>
<i>斜体</i>
<em>斜体表强调</em>
<small>缩小</small>
<sup>上标</sup>
<sub>下标</sub>

```html
<b>粗体</b>
<strong>粗体表强调</strong>
<u>下划线</u>
<i>斜体</i>
<em>斜体表强调</em>
<small>缩小</small>
<sup>上标</sup>
<sub>下标</sub>
```

### 7、超链接

<a href="https://www.baidu.com">百度一下</a>

```html
<!--
  href（链接地址）
    ——外部链接：网址（http：//www.***.com）
    ——内部链接: 相对路径
    ——#（空链接：只刷新页面，不跳转页面）
  target（窗口打开方式）
    ——self （在原窗口中打开--默认）
    ——_blank 在新窗口打开
-->
<a href="https://www.baidu.com">百度一下</a>
```

**锚点链接：**
<a href="#top">回到顶部</a>

```html
<!-- 创建锚点 -->
<a name="top"></a>
<!-- 锚点链接 -->
<a href="#top">回到顶部</a>
```

**图片链接：**
<a href="https://www.baidu.com"><img></a>
<a href="https://www.baidu.com/img/bd_logo1.pn">查看图片</a>

```html
<!-- 点击图片跳转到某链接 -->
<a href=""><img></a>
<!-- 点击文本查看图片的链接 -->
<a href="图片衔接">查看图片</a>
```

### 8、图片

<img src="https://www.baidu.com/img/bd_logo1.pn" title="我是图片" alt="图片加载失败"  />
```html
<!-- 
  src---图片路径
  border---边框
  width---宽度
  height ---高度
  title-----鼠标控制时提示性文字
  alt----图片非正常加载时的提示性文字
-->
  <img src="" title="我是图片" alt="图片加载失败"  />
```

### 9、水平线

<hr width="50%" />
```html
<!-- 
  color	颜色
  size 大小
  width 宽度
  align水平对齐方式
-->
<hr />
```

### 10、iframe

用来在当前 HTML 文档中嵌入另一个文档

```html
<!--
  - src 引入文档路径
  - width 设置宽度
  - height 设置高度
  - name 起名
  - scrolling属性 滚动条 auto自动获取 no去掉滚动条
  - frameborder 设置边框 no/0去掉边框 yes/1是有边框
-->
<iframe name="" src="" width="" height="" scrolling="" frameborder="">

</iframe>
```

**iframe 的缺点**

- iframe 会阻塞主页面的 onload 事件，不利于 seo(网络优化技术)，搜索引擎无法解析当前页面（iframe）
- iframe 和主页面共享连接池，而浏览器对相同层的链接有限制，所以会影响页面的并行加载
- iframe 最好通过 js 技术动态给 iframe 添加 src 属性，这样可以避开以上问题

## 五、表单类标签

- 表单是收集用户输入信息，并通过浏览器传输数据。
- form 标签用于声明整个表单，定义数据收集范围

```html
<!--
  action----表单提交地址
  target----窗口打开方式
    -_self  原窗口中打开（默认）
    -_blank  新窗口中打开
  method----表单提交方式
    -get: 明文提交（文件小，传输速度快，安全性较低）
    -post：保密（文加大，传输速度慢，安全性较高）
  name:表单名称
-->
<form target="_blank" method="post">
  <!-- 需要提交的信息 -->
</form>
```

### 1、输入框

```
  value----按钮上显示文字
  checked-----选框默认选项
  readonly：是否只读，布尔属性
  disabled：是否禁用，布尔属性
```

普通输入框：<input type="text" />

```html
<input type="text" />
```

密码输入框：<input type="password" />

```html
<input type="password" />
```

文件输入框：<input type="file" />

```html
<input type="file" />
```

单选框
<input type="radio" name="xb"/>男
<input type="radio" name="xb" checked/>女

```html
<input type="radio" name="xb"/>男
<input type="radio" name="xb" checked/>女
```

复选框
<input type="CheckBox"/>吃
<input type="CheckBox"/>喝
<input type="CheckBox" checked="checked"/>睡

```html
<input type="CheckBox"/>吃
<input type="CheckBox"/>喝
<input type="CheckBox" checked="checked"/>睡
```

按钮：<input type="button" value='按钮' />

```html
<input type="button" value='按钮' />
```

重置：<input type="reset" />

```html
<input type="reset" />
```

### 2、下拉列表

<select name="xxx">
  <option value="1">1</option>
  <option value="2" selected>2</option>
  <option value="3">3</option>
</select>

```html
<!--
  selected：默认选中的选项
  value：提交数据
-->
<select name="xxx">
  <option value="1">1</option>
  <option value="2" selected>2</option>
  <option value="3">3</option>
</select>
```

### 3、文本域

<textarea></textarea>

```html
<!--
  rows---行---高度
  cols---列----宽度
  maxlength----最大字符数
  minlength----最小字符数
  placeholder----提示文字
-->
<textarea></textarea>
```

### 4、label

配合输入框实现：点击文本也可选中输入框

**1）显示关联**

<label for="值">文字：</label><input type="" id="值"/>

```html
<label for="值">文字</label><input type="" id="值"/>
```

**2）隐式关联**

<label>文字：<input type=""/></label>

```html
<label>文字<input type=""/></label>
```
