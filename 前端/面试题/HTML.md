# HTML

## 概念问题

### 语义化
> HTML5 语义化是指通过使用**具有明确含义的标签**，使网页的结构和内容更加清晰，方便浏览器、开发者以及搜索引擎理解网页内容。
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML5 语义化示例</title>
  </head>
  <body>
    <header>
      <h1>面试派</h1>
      <nav>
        <ul>
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于</a></li>
          <li><a href="#contact">联系</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h2>欢迎访问</h2>
        <p>这是一个 HTML5 语义化的示例。</p>
      </section>
      <section id="about">
        <h2>关于我们</h2>
        <article>
          <h3>我们的历史</h3>
          <p>这是关于我们历史的介绍。</p>
        </article>
      </section>
    </main>

    <aside>
      <h3>相关文章</h3>
      <ul>
        <li><a href="#">文章 1</a></li>
        <li><a href="#">文章 2</a></li>
      </ul>
    </aside>

    <footer>
      <p>&copy; 2025 &copy; 面试派</p>
    </footer>
  </body>
</html>
```

### 微格式
> 微格式建立在现有的 HTML 标准之上，利用已有的 HTML 元素（如 div、span 等）和属性（如 class、rel等），遵循**特定的命名约定和语法规则**，将网页中的信息进行结构化标注。通过这些标注，搜索引擎、社交媒体平台、移动应用等软件程序可以更准确地解析和提取网页中的关键信息，从而实现更丰富的功能和更好的用户体验。
```html
<div class="vevent">
  <h2 class="summary">Conference on Web Technologies</h2>
  <div class="dtstart">2024-05-10T09:00:00</div>
  <div class="dtend">2024-05-12T17:00:00</div>
  <div class="location">Conference Center, New York</div>
</div>
```


## 标签问题

### 标签的类别
> 行内、块、行内块
> 单标签、双标签、空标签

### DOCTYPE
> HTML5 中使用 !DOCTYPE html声明，浏览器会以标准模式渲染页面，确保页面元素按照最新的 HTML 和 CSS 标准进行布局和显示。如果没有 DOCTYPE 声明或者声明错误，浏览器可能会进入怪异模式，导致页面在不同浏览器中的显示效果不一致。
> **怪异模式**
> **标准/严格模式**

### meta
> 1. **字符编码**。可以指定 HTML 文档的字符编码，确保浏览器能够正确解析和显示页面中的文字内容。
> 2. **SEO**。显示在搜索引擎的搜索结果中，帮助用户快速了解页面的主要内容。
> 3. **页面重定向**。属性可以实现页面的自动重定向或定时刷新
> 4. **缓存控制**。开发者可以控制页面的缓存策略。
> 5. **响应式设计**。可以控制页面在不同设备屏幕上的布局和缩放。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 1. 字符编码 -->
    <meta charset="UTF-8">
    <!-- 2. 提供作者信息、页面描述和关键词 -->
    <meta name="author" content="kjc">
    <meta name="description" content="这是一个示例网站，提供丰富的前端开发知识和教程。">
    <meta name="keywords" content="前端开发, HTML, CSS, JavaScript">
    <!-- 3. 5秒后重定向到https://www.example.co，如果没有url,则表示当前页面自动刷新 -->
    <meta http-equiv="refresh" content="5;url=https://www.example.com">
    <meta http-equiv="refresh" content="5">
    <!-- 4. 告知浏览器不要缓存该页面，每次访问时都要从服务器重新获取页面内容。 -->
    <meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="expires" content="0">
    <!-- 5. 页面的宽度设置为设备的屏幕宽度，并将初始缩放比例设置为 1.0，确保页面在移动设备上能够以合适的大小显示。 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>META 示例</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

### link
> link标签是一个空元素，主要用于在 HTML 文档和外部资源之间建立连接。
> **DNS预解析**。在进行 HTTP 请求时，浏览器首先需要通过 DNS 解析将域名转换为对应的 IP 地址，这个过程可能会带来一定的延迟。DNS 预解析就是提前让浏览器进行域名解析，当后续真正发起请求时可以直接使用解析好的 IP 地址，从而节省时间。
> **预连接**。预连接不仅会提前进行 DNS 解析，还会建立 TCP 连接和可选的 TLS 握手，这样当真正发起请求时，就可以直接进行数据传输，进一步减少延迟。
> **预获取**。预获取是指提前下载一些后续可能会用到的资源，如图片、脚本、样式表等，并将其存储在浏览器缓存中。当页面需要使用这些资源时，可以直接从缓存中读取，而无需再次发起网络请求。
> **预加载**。预加载是告诉浏览器提前获取某些资源，以便在需要时能够更快地使用，从而提升页面的加载性能和响应速度。
> **预渲染**。预渲染会在后台加载整个页面，并进行渲染，当用户访问该页面时，可以立即显示已经渲染好的内容，实现几乎无延迟的页面加载。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 指定网站的图标 -->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- 预解析百度的域名 -->
    <link rel="dns-prefetch" href="https://www.baidu.com">
    <!-- 预连接谷歌字体的域名 -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- 预获取文件 -->
    <link rel="prefetch" href="demo.css">
    <link rel="prefetch" href="demo.js">
    <link rel="prefetch" href="demo.png">
    <!-- 预加载文件 -->
    <link rel="preload" href="demo.css">
    <link rel="preload" href="demo.js">
    <!-- 预渲染另一个页面 -->
    <link rel="prerender" href="https://example.com/another-page.html">
    <title>DNS 预解析示例</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```


### script
> script标签用于嵌入或引用 JavaScript 代码。
> **async** 属性是一个布尔属性，浏览器会在 HTML 解析过程中并行下载脚本文件，不会阻塞 HTML 文档的解析。**在HTML 文档解析完成后，按顺序依次执行**。
> **defer** 属性也是一个布尔属性，浏览器会在 HTML 解析过程中并行下载脚本文件，不会阻塞 HTML 文档的解析。**脚本在下载完成后会立即执行，这个过程可能会打断 HTML 文档的解析。**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Defer vs Async</title>
    <!-- defer 示例 -->
    <script defer src="defer-script1.js"></script>
    <script defer src="defer-script2.js"></script>
    <!-- async 示例 -->
    <script async src="async-script1.js"></script>
    <script async src="async-script2.js"></script>
</head>
<body>
    <p>这是一段 HTML 内容。</p>
</body>
</html>
```





### iframe
> 用于在当前 HTML 页面中嵌入另一个 HTML 页面
> 优点：实现内容复用、隔离性好、独立页面
> 不足：性能问题、SEO困难、跨域问题
> 使用场景：嵌入第三方内容、多页面应用、测试和调试
> 通信：postMessage(不同源)、localStorage、
```js
// 父
iframe.contentWindow.postMessage('发送主页面消息', 'http://example.com');
window.addEventListener('message', (event) => {
  if (event.origin === 'http://example.com') {
      alert('收到子页面消息：' + event.data);
  }
});
// 子页面
window.parent.postMessage('发送子页面消息', 'http://yourdomain.com');
window.addEventListener('message', (event) => {
  if (event.origin === 'http://yourdomain.com') {
      alert('收到主页面消息：' + event.data);
  }
});
```

### 新标签
> datalist、output
> header、main、aside、footer
> canvas、
> video、audio、source

### 
