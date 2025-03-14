# webpack

## webpack的产生背景

浏览器端的模块化问题
> 效率问题：会导入大量的文件
> 兼容性问题：仅支持es6
> 工具问题：不支持npm下载的第三方包

为什么node端问题没有这么多问题？
> &emsp;&emsp;因为node端，运行的js文件都在本地，可以读取本地文件，所以效率要比浏览器的远程传输高得多。
> &emsp;&emsp;**根本原因**：在浏览器端，开发时态和运行时态的侧重点不一样
> 1. **开发时态 devtime**：模块划分细、支持多种模块化标准、支持各种包，主要考虑开发和维护效率问题。
> 2. **运行时态 runtime**：模块划分少、文件体积小、代码乱、兼容浏览器、效率高, 主要解决运行效率问题。

为了解决这个问题，所以出现了构建工具。能够将开发时态的代码结构，转化为运行时态的代码。

常见的构建工具
- webpack 用火，生态最完整
- grunt
- gulp
- browserify
- fis
- 其他

## webpack特点

- 为解决前端工程化而生。
- 简单易用。
- 强大生态。
- 基于nodejs。
- 基于模块化。包括CommonJS 和ES6 Module。

打包后的代码既不是CommonJS，也不是ES6 Module，只是普通的js文件。

## webpack安装、使用

**安装**
- webpack。核心包，主要包含构建过程需要用到的api
- webpack-cli。提供一个简单的cli命令，它调用了webpack核心包的api，来完成构建过程。

**使用**
- 直接执行webpack即可，默认入口文件(src/index.js),打包完在浏览器环境和node环境都可以运行,src中可以使用任意模块化的代码

本地无需安装webpack时，需要加npx
```
npx webpack
```
不同环境打包
```
npx webpack --mode=production
npx webpack --mode=development
npx webpack --mode=development --watch //文件变更自动打包
```

## 配置文件

**为什么配置文件只能使用CMJ,不能使用ESM ?**
> 因为webpack配置文件在打包过程中是需要参与运行的，而src中的文件打包过程中是不需要参与执行的，只是当成文件来编译处理。
> src代码有错，打包过程中不会报错，但是配置文件有错，打包会报错

**行命令**
```shell
npx webpack --config webpack.config.js
```
**配置文件**
```js
// 当命令行配置和配置文件配置冲突时，以命令行配置为准
export.default = {
  // 基本配置 
  mode: 'development', // 打包模式 'production/development'
  entry: 'main.js', // 入口文件
  output：{
    filename: 'index.js', // 输出文件
  }
}
```

## devtool配置
> **source map**。是一种文件，用于将经过转换、压缩或编译后的代码映射回原始的源代码。应作为一种调试手段在开发环境使用。
```js
module.exports = {
  // none 生产环境默认值
  // eval 开发环境默认值
  // eval-source-map 映射源码位置最准确
  devtool: 'none',
}
```

## 编译过程

1. 初始化
- cli参数、配置文件、默认配置融合，形成一个最终的配置对象
- 对配置的处理过程是依托一个三方库yargs完成的
>2. 编译
>3. 输出
- 按照资源列表生成文件
## loaders
> loader本质上就是一个函数，运用在读取文件之后，转成抽象语法树之前
## plugins
