## 一、新增属性

### 1、表单类型

[详情](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/button)
`兼容性较差`

#### 日期

日期 date：<input type="date">

```html
<input type="date">
```

月 month: <input type="month">

```html
<input type="month">
```

周 week：<input type="week">

```html
<input type="week">
```

时间 time：<input type="time">

```html
<input type="time">
```

日期时间 datetime-local：<input type="datetime-local">

```html
<input type="datetime-local">
```

#### 滚动条

滑动条 range：<input type="range" max="100" min="1" step="10" value="50">

```html
<input type="range" max="100" min="1" step="10" value="50">
```

#### 颜色

颜色 color: <input type="color">

```html
<input type="datetime-local">
```

#### 搜索

搜索 search: <input type="search">

```html
<input type="search">
```

#### 数字

数字 number: <input type="number" value="0" max="10" >

```html
<input type="number" value="0" max="10">
```

#### 电话

电话号码 tel: <input type="tel">

```html
<input type="tel">
```

#### 邮箱

邮件 email: <input type="email">

```html
<input type="email">
```

#### 隐藏

隐藏 hidden: <input type="hidden" value="123">

```html
<input type="hidden" value="123">
```

#### 提交

提交 submit：<input type="submit">

```html
<input type="submit">
```

### 2、表单属性

[详情](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/disabled)

#### placeholder

输入框提示信息：<input type="text" placeholder="请输入内容">

```html
  <input type="text" placeholder="请输入内容">
```

#### min、max、step

最小值、最大值、间隔：<input type="number" value="2" min='2' max='8' step='2' >

```html
  <input type="number" min='2' max='8' step='2'>
```

#### pattern

描述一个正则表达式验证输入的值

#### required

required 要求输入的内容是否可为空

#### autofocus

autofocus 规定在页面加载时，域自动获取焦点

### 3、contentEditable

- 设置为可编辑的

```html
<div contentEditable></div>
```

### 4、draggable

- 设置为可拖拽的
- **safari chrome**可用，**firefox**不可用
- 可以结合拖拽事件使用
- 包括被拖拽的对象，目标区域

```html
<div draggable="true"></div>
```

### 5、自定义属性

data-xx="xx"

```html
<input type="text" data-a="1" data-b="2" />
```

## 二、新增标签

### 1、表单标签

#### datalist

定义 input 可能的值。
<input type="text" list="a">
<datalist id="a">

<option>选项 1</option>
<option>选项 2</option>
</datalist>
</input>

```html
<input type="text" list="a">
  <datalist id="a">
    <option>选项1</option>
    <option>选项2</option>
  </datalist>
</input>
```

#### output

<form action="" oninput="c.value=parseInt(a.value)+parseInt(b.value)">
  <input type="text" id="a">+
  <input type="text" id="b">=
  <output id="c"></output>
</form>
```html
<form action="" oninput="c.value=parseInt(a.value)+parseInt(b.value)">
  <input type="text" id="a">+
  <input type="text" id="b">=
  <output id="c" for="a b"></output>
</form>
```

#### progress

进度条
<progress></progress>

```html
<progress></progress>
```

### 2、新媒体标签

#### audio

audio 定义音频，支持 mp3 ogg wav 三种格式
<audio controls></audio>

```html
<!--
  controls  向用户显示音频控件（比如播放/暂停按钮）。
  autoplay  音频在就绪后马上播放。
  loop      每当音频结束时重新开始播放。
  muted     音频输出为静音。
  src     *URL*规定音频文件的 URL。
-->
<audio controls></audio>
```

#### video

video 定义视频，支持 MP4 webp ogg 三种格式
<video controls></video>

```html
<!--
  autoplay  如果出现该属性，则视频在就绪后马上播放。
  controls  如果出现该属性，则向用户显示控件，比如播放按钮。
  width     设置视频播放器的宽度
  height    设置视频播放器的高度。
  loop      如果出现该属性，则当媒介文件完成播放后再次开始播放。
  muted     如果出现该属性，视频的音频输出为静音。
  poster    *URL* 规定视频正在下载时显示的图像，直到用户点击播放按钮。
  src       *URL* 要播放的视频的 URL。
-->
<video controls></video>
```

#### source

source 定义多媒体资源 配合 audio video 使用

<source></source>
```html
<!-- 
  src 引入文件路径
  type 规定文件类型
 -->
<source></source>
```

#### 相关 API

针对`video`和`audio`元素，HTML5 新增了音视频的 API，让开发者可以使用 JS 控制它们

**音视频属性**

| 属性名       | 含义                                                              |
| ------------ | ----------------------------------------------------------------- |
| currentTime  | 当前播放时间，单位为秒。为其赋值将会使媒体跳到一个新的时间。      |
| loop         | 对应 HTML 标签`loop`属性，决定该媒体是否循环播放.                 |
| controls     | 对应 HTML 标签`controls`属性，控制是否显示用户播放界面的控制 HTML |
| src          | 对应 HTML 标签`src`属性，获取和设置播放地址                       |
| volume       | 表示音频的音量。值从 0.0（静音）到 1.0（最大音量）。              |
| playbackRate | 播放倍速。1 为正常。                                              |
| duration     | 总时长，单位为秒。                                                |
| paused       | 当前是否是暂停状态                                                |
| muted        | 是否静音                                                          |

**音视频方法**

| 方法名  | 含义     |
| ------- | -------- |
| play()  | 开始播放 |
| pause() | 暂停播放 |

**事件**

| 事件名     | 含义                                                      |
| ---------- | --------------------------------------------------------- |
| pause      | 暂停时触发                                                |
| ended      | 结束时触发                                                |
| play       | 开始播放时触发                                            |
| timeupdate | 属性`currentTime`变化时触发。会随着播放进度的变化不断触发 |
| loadeddata | 事件在第一帧数据加载完成后触发                            |

### 3、语义化标签

语义化标签，也可以叫元素语义化，是指每个 HTML 元素都代表着某种含义，在开发中应该根据元素含义选择元素。

**语义化标签示例**：

```html
<!-- article：一篇文章 -->
<article>
  <!-- header：文章头部信息 -->
  <header>
    <h1>文章标题</h1>
    <!-- blockquote：引用信息 -->
    <blockquote>此文章引用的文献：xxxx</blockquote>
  </header>
  <!-- aside: 文章的其他附加信息 -->
  <aside>
    <span>作者：xxxx</span>
    <span>发布日期：xxx</span>
  </aside>
  <nav>导航栏</nav>
  <!-- section：章节 -->
  <section>
    <h2>章节1</h2>
    <p>段落1</p>
  </section>
  <!-- 页脚 -->
  <footer>
    <p>参考资料</p>
    <!-- cite表示外部站点的引用 -->
    <cite>xxxxxxx</cite>
    <cite>xxxxxxx</cite>
  </footer>
</article>
```

**语义化标签的好处：**

- 利于 SEO（搜索引擎优化）
- 利于无障碍访问
- 利于浏览器的插件分析网页

### 4、svg

### 5、canvas

## 三、新增 web api

### 使用 css 选择器选中元素

```js
// 使用css选择器选中匹配的第一个元素
document.querySelector('css选择器');
// 使用css选择器选中匹配的所有元素，返回伪数组
document.querySelectorAll('css选择器');
```

### 控制类样式

```js
// 添加类样式
dom.classList.add('a');  // <div class="a"></div>
dom.classList.add('b');  // <div class="a b"></div>
dom.classList.add('c');  // <div class="a b c"></div>
// 是否包含某个类样式
dom.classList.contains('a');  // true
// 移除类样式
dom.classList.remove('a');  // <div class="b c"></div>
// 切换类样式
dom.classList.toggle('a'); // <div class="a b c"></div>
dom.classList.toggle('a'); // <div class="b c"></div>
dom.classList.toggle('a'); // <div class="a b c"></div>
```

### web Storage

`localStorage`，永久保存到本地
`sessionStorage`，临时保存到本地，关闭浏览器后消失

```js
// 保存一个键值对到本地，值必须是字符串
localStorage.key = 'value';
localStorage.setItem('key', 'value');
// 根据键，读取本地保存的值
localStorage.getItem('key');
localStorage.key;
// 清除所有保存的内容
localStorage.clear();
// 根据键，清除指定的内容
localStorage.removeItem('key');
```

```js
// 保存一个键值对到本地，值必须是字符串
sessionStorage.key = 'value';
sessionStorage.setItem('key', 'value');
// 根据键，读取本地保存的值
sessionStorage.getItem('key');
sessionStorage.key;
// 清除所有保存的内容
sessionStorage.clear();
// 根据键，清除指定的内容
sessionStorage.removeItem('key');
```

它们都只能保存字符串，如果需要保存对象或数组，可以先将对象和数组转换为`JSON`字符串再进行保存

```js
JSON.stringify(obj); // 将对象或数组转换为JSON搁置
JSON.parse(jsonString); // 将JSON格式的字符串转换为对象或数组
```

### websocket

在线聊天，聊天室
[详情](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

### webworker

- worker 是多线程的
- 可以发送 ajax, 可以计算(提升性能);
- 不能操作 DOM，没有 window 对象，不能读取文件
- **不常用**

index.js 主线程

```js
const worker = new Worker('./work.js') // 开启另外一个线程，并执行
worker.postMessage({a:1});
worker.onmessage = (e) => {
  console.log(e.data) // 收到e.data.a++，即2
}
```

work.js 其他线程

```js
this.onmessage = (e) => {
  this.postMessage(e.data.a++); // e.data即传过来的数据，即{a:1}
}
```

### request-animation-frame

```js
// 该函数负责在下一帧渲染前，执行一次元素状态变化
function changeOnce(){
  requestAnimationFrame(function(){
    // 传入一个回调函数，该函数在下一帧渲染之前自动运行
    // 通常，可以利用该回调函数，在下一帧渲染前改动元素的状态
    if(动画是否应该停止){
      return;
    }
    // 改变元素状态
    changeOnce(); // 改变完成后，继续注册下一帧的变化
  })
}
changeOnce();
```

### deviceorientation

```js
// 陀螺仪
// https协议
// 移动设备
window.addEventListener('deviceorientation', function (event) {
  // 获取陀螺仪的数据
  console.log(event);
  // 获取方向
  const { alpha, beta, gamma } = event; // alpha: 方向 beta: 倾斜 gamma: 滚动
  // alpha: 0-360, beta: -180-180, gamma: -90-90
  console.log(alpha, beta, gamma);
});
```

### devicemotion

```js
// 移动设备
// devicemotion 事件
window.addEventListener('devicemotion', function (event) {
  // 获取加速度
  console.log(event);
  // 获取加速度
  const { x, y, z } = event.acceleration; // x: x轴加速度 y: y轴加速度 z: z轴加速度
  // x: -10-10, y: -10-10, z: -10-10
  console.log(x, y, z);
});
```

### geoLocation

```js
/**
  * 获取地理信息
  *  - 必须是移动设备
  *  - 必须是https协议、或者file协议
  *  - 需要联网
*/
window.navigator.geolocation.getCurrentPosition(function (position) {
    // 获取经纬度
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
  }, function (error) {
    console.log(error);
});
```

### pushState

多页面应用，回到上个页面
单页面应用，回到上个状态

```js
// pushState是h5新增的API，可以改变浏览器的url，但是不会刷新页面，也不会触发浏览器的前进后退事件
history.pushState('123', null, location.href + "?a=1"); // 参数1：state对象，参数2：title，参数3：url
// popstate事件是浏览器的前进后退事件，不是H5新增的API，但是可以通过pushState来触发
window.addEventListener('popstate', function (event) {
  // 监听浏览器的前进后退事件，event.state就是pushState的第一个参数
  history.pushState('456', null, location.href + "?a=2");
});
// 浏览器的hash变化会触发hashchange事件
window.addEventListener('hashchange', function (event) {
  console.log('hashchange');
});
```

### fileReader

文件读取，预览
[详情](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader/FileReader)

### fetch

[详情](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
