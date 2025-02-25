## 什么是Less？

**Less**是一种更加简洁的样式代码，它非常像CSS，但又不太一样，它让编写样式变得更容易
下面是css代码和Less代码的对比，它们都表达了一样的含义
![image-20210507125034131](http://mdrs.yuanjin.tech/img/20210507125034.png)

**Less无法被浏览器识别**，因此需要一个工具将其转换为血统纯正的css代码
**node环境具有读写文件的能力**，于是在node环境中可以轻松的完成文件的转换
`npm`上有一个包叫做`less`，它运行在node环境中，通过它可以完成对Less代码的转换
**转换代码，称之为编译(compile)，转换代码的工具，称之为编译器(compiler)**

## Less的核心语法

>Less官网：https://lesscss.org/
>Less民间中文网：https://less.bootcss.com/
最常用的功能有下面3个：
- 变量
- 嵌套
- 混合

```less
// 这样的注释只存在于less源代码中
/* 这是普通的css注释，它会生成到编译结果中 */

// 变量
@theme-color: #008c8c;  
// 嵌套
.ol{
  background: @theme-color;
  li{
    color: @theme-color;
  }
}
```

## 体验Less

1. 新建`index.less`文件，编写`less`代码
2. 初始化npm, 使用`npm`下载`less`
3. 使用`lessc`命令，对编写的`less`文件进行编译
```json
  "scripts": {
    "xx": "lessc index.less index.css",
```

```shell
  # 将 index.less 编译成为 index.css
  执行npm run xx
```
4. 新建一个页面，引用编译结果`index.css`

