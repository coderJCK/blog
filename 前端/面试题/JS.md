---
title: 基础
---

## 重要概念

### 数据类型
- **值类型 && 引用类型**
> - 基本类型存的是值，引用类型存的是地址

- **栈内存、堆内存**

> - **栈空间**通常不会设置太大，主要存放一些原始数据的小数据; 
> - **堆空间**很大，主要存放引用类型的数据。
> - 原始类型的赋值会完整复制变量的值，引用类型的赋值是复制引用地址

- **类型判断**
> typeof 快速区分基本数据类型
> xx instanceof xx 只能判断引用类型
> xx.constructor === xx 无法判断Null、undefined
> Object.prototype.toString.call() 精准判断数据类型

- **对象类型的转换**
> **对象类型会先默认转换为字符串类型，然后再进行数字转换**
```js
// {} => [Object Object] => NaN
console.log(Number({})); 
// [] => " " => 0
console.log(Number([])); 
// {} => [Object Object] => true
console.log(Boolean({})); 
// [] => " " => true
console.log(Boolean([])); 
```

- **NaN**
> - NaN的全称为 Not a Number，表示非数字
> - 任何涉及 NaN 的操作都会返回 NaN
> - NaN 和任何值都不相等，包括它自己本身

- **undefined && null**
> - 区别：undefined是一种初始状态，null是手动赋予的空值
> - 比较：比较时会将 undefined 转换成 null，所以undefined == null为true

- **== && ===**
> - ==（宽松相等）：会在比较两个操作数时执行类型转换，尝试将两者转换为相同类型后再比较。
> - ===（严格相等）：不会执行类型转换，仅在类型和值完全相同的情况下返回 true。

### 箭头函数
> - 语法简介
> - 没有prototype、没有arguments，没有this，不支持bind、call、apply，不能用于构造函数
> - 适用于回调、闭包等

### this 指向

函数的上下文，即函数中的 this 关键字

> - 严格模式，指向 undefined，非严格模式，指向 window;
> - 指向调用对象；
> - 指向构建函数创建的实例化对象；
> - 指向事件调用者
> - 箭头函数没有自身的 this 值；

改变 this 指向的方式

```js
fn.call(obj, arg1,arg2,...)
fn.apply(obj, [arg1,arg2,...])
fn.bind()
```


### 变量提升

先编译，再执行。

> - 编译阶段: 变量和函数会被存放到变量环境中，变量的默认值为 undefined。
> - 执行阶段：js 引擎会从变量环境中查找自定义的变量和函数。

> **变量提升**：js 执行代码过程中，js 引擎会把变量和函数的声明部分提升到代码最前面，变量被提升后变量默认值为 undefined。
>
> - 函数提升优先级高于变量提升，且不会被覆盖，但是会被变量赋值之后覆盖。(即函数和变量命名冲突，变量不生效，除非被赋值)
> - 编辑阶段结束会生成执行上下文(执行一段代码时的运行环境)和可执行代码

### 作用域

- 作用域

> - `全局作用域`。在最外层定义的变量或者没有定义在任何函数内的变量
> - `局部作用域`。
>   - `函数作用域`: 在函数内部定义的变量
>   - `块级作用域`: 使用 let 或 const 在代码块内定义的变量(es6 出现)

- 作用域链

> 作用域链：变量查找机制，从当前作用域 逐级向上查找，直到全局作用域或 ReferenceError。

### 闭包
**闭包的核心特性**
- 访问外部函数作用域的变量
- 即使外部函数执行结束，变量依然被保留
- 不会被垃圾回收，直到闭包不再被引用
**缺点**
- 可能导致内存泄漏。闭包会持有外部变量的引用，导致变量无法被垃圾回收(手动将变量置为 null 或谨慎管理作用域)
- 滥用闭包可能影响性能。每次调用都会创建新的作用域，影响垃圾回收机制

### 内存泄漏

1. 产生情况

> - 全局变量
> - 未清理的定时器和回调函数
> - 闭包
> - 脱离 DOM 的引用
> - 循环引用。(两个或多个对象相互引用，形成闭环，如果这些对象之间的引用没有被正确解除)

2. 解决方式

> - 及时释放引用，当不再需要使用一个对象时，确保将其引用设置为 null
> - 及时清理、移除定时器和事件监听管理

### 垃圾回收机制

> - `标记-清除算法`。所有无法被访问到的对象都会被标记为可回收。清除阶段释放内存。
> - `引用计数`。跟踪每个值被引用的次数来决定何时回收内存。
> - `垃圾回收优化`。JavaScript 引擎会进行一系列优化来提高垃圾回收的效率，包括增量标记、延迟清除、增量式垃圾回收、并行垃圾回收等技术。
> - `手动内存管理`。养成良好的内存管理习惯，避免创建不必要的全局变量、及时释放不再需要的对象引用等，以避免内存泄漏问题。

### new 操作符

```
1. 创建一个空的javascript对象
2. 链接该对象到该对象的原型对象
3. 步骤1的对象作为this的上下文
4. 如果该函数没有返回对象，则返回this。
```


### 原型
> 原型和原型链是 JavaScript 实现继承的核心机制，它们使得对象能够共享属性和方法，提高了代码的复用性。理解原型和原型链的工作原理对于掌握 JavaScript 的面向对象编程至关重要。

1. 原型（Prototype）
> 在 JavaScript 里，每个对象都有一个内部属性 **Prototype**（在浏览器中通常可以通过 **__proto__**来访问，但这不是标准属性），它指向该对象的原型对象。原型对象也是一个普通对象，它同样有自己的原型对象，以此类推，直到最顶层的原型对象 Object.prototype，其 **Prototype**为 null。

> 原型的**主要作用是实现对象之间的属性和方法共享**。
2. 原型链（Prototype Chain）
> 原型链是由多个对象的原型依次连接形成的链条。当访问一个对象的属性或方法时，JavaScript 引擎会先在该对象本身查找，如果找不到，就会沿着原型链向上查找，直到找到该属性或方法或者到达原型链的末尾（即 null）。

### 继承
在 JavaScript 中，继承是一种允许一个对象直接使用另一对象的属性和方法的机制，它可以提高代码的复用性和可维护性。
1. 原型链继承。
让子类的原型指向父类实例。
- ✅ 优点： 父类方法可复用
- ❌ 缺点： 1. 共享引用类型属性（如 arr = [] 会被多个实例共享），2. 法在创建 child 时向父类构造函数传递参数。3.原型链过长可能导致性能问题
```js
function Parent() {
  this.name = 'Parent'
}
Parent.prototype.sayHello = function () {
  console.log('Hello from Parent')
}
function Child() {}
Child.prototype = new Parent() // 继承 Parent
Child.prototype.constructor = Child

const child = new Child()
console.log(child.name) // "Parent"
child.sayHello() // "Hello from Parent"
```
2. 借用构造函数继承。 
在子类构造函数中使用 call 继承父类属性。
- ✅ 优点： 1. 解决原型链继承共享问题，2. 可传参
- ❌ 缺点： 无法继承父类原型上的方法
```js
function Parent(name) {
  this.name = name
}
function Child(name, age) {
  Parent.call(this, name) // 继承 Parent
  this.age = age
}
const child = new Child('Rain', 18)
console.log(child.name, child.age) // "Rain", 18
```
3. 组合继承（原型链 + 构造函数继承，最常用）
继承属性用构造函数，继承方法用原型链。
- ✅ 优点： 解决了前两种方法的缺陷
- ❌ 缺点： 调用两次 Parent 构造函数
```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayHello = function () {
  console.log('Hello from Parent')
}

function Child(name, age) {
  Parent.call(this, name) // 第 1 次调用 Parent
  this.age = age
}

Child.prototype = new Parent() // 第 2 次调用 Parent
Child.prototype.constructor = Child

const child = new Child('Rain', 18)
console.log(child.name, child.age) // "Rain", 18
child.sayHello() // "Hello from Parent"
```
4. 原型式继承
直接用 Object.create() 创建一个新对象，继承已有对象。
- ✅ 优点： 适合创建对象而非类的继承
- ❌ 缺点： 不能传参，只适用于简单继承
```js
const parent = {
  name: 'Parent',
  sayHello() {
    console.log('Hello!')
  },
}
const child = Object.create(parent)
child.age = 18
console.log(child.name, child.age) // "Parent", 18
child.sayHello() // "Hello!"
```
5. 寄生组合继承（优化版，推荐)
 组合继承的优化版本，避免了 Parent 被调用两次的问题。
- ✅ 优点： 1. 继承属性和方法，2. 只调用一次 Parent
- ❌ 缺点： 代码略微复杂
```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayHello = function () {
  console.log('Hello from Parent')
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype) // 关键优化
Child.prototype.constructor = Child

const child = new Child('Rain', 18)
console.log(child.name, child.age) // "Rain", 18
child.sayHello() // "Hello from Parent"
```
6. ES6 class 继承（最现代化的方式）
- ✅ 优点： 语法更清晰，易读易用
- ❌ 缺点： 本质仍是 prototype 继承
```js
class Parent {
  constructor(name) {
    this.name = name
  }
  sayHello() {
    console.log('Hello from Parent')
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name) // 继承属性
    this.age = age
  }
}

const child = new Child('Rain', 18)
console.log(child.name, child.age) // "Rain", 18
child.sayHello() // "Hello from Parent"
```

## 重点
### Promise
- 用于解决回调地狱问题
- 三种状态 pending\fulfilled\rejected
- 状态一旦变化，不可更改
- then\catch\finally
- all\race\
### WebWorker

### WebAssembly
> WebAssembly（Wasm） 是一种新的 Web 技术，它允许开发者将其他编程语言（如 C、C++、Rust 等）编译成高效的二进制代码，并在浏览器中运行。WebAssembly 旨在提供接近原生性能的 Web 体验，特别适用于高性能计算任务。
- 特点

> **高效性**。WebAssembly 是一种二进制格式，比 JavaScript 的文本格式更紧凑，加载速度更快，执行速度更快，适用于 CPU 密集型任务，如图像处理、游戏开发和科学计算。
> **与 JavaScript 协作**。WebAssembly 和 JavaScript 可以协同工作，JavaScript 用于 UI 操作和事件处理，WebAssembly 负责计算密集型任务。它们通过 共享内存 和 消息传递 进行通信。
> **跨平台**。WebAssembly 是跨平台的，可以在所有支持 WebAssembly 的现代浏览器中运行，并且不需要针对不同操作系统和硬件做额外的修改。
> **安全性**。WebAssembly 运行在沙盒环境中，不能直接访问操作系统资源，保证了 Web 应用的安全性。

- 应用场景

> **游戏开发**: 通过高效的计算，WebAssembly 可以让 Web 上的游戏运行得更流畅。
> **图像/视频处理**：利用 WebAssembly 进行高效的图像处理和视频编解码。
> **科学计算**：WebAssembly 能大大提升 JavaScript 在处理大数据和复杂计算时的性能。

## 代码题

### 数组去重

1. 数字/字符串数组去重(效率高)

```
1. 声明一个对象
2. 循环原数组
3. 判断每一项在新数组中是否已存在，不存在则将该值作为键名添加到对象中
4. 返回该对象
```

2.  任意数组去重(适配范围广，效率低)

```
1、声明一个新数组
2、循环原数组
3、判断每一项在新数组中是否已存在，不存在则添加到新数组中
4. 返回新数组
```

3. set(适配范围广，效率一般，书写简单)

```
[...new Set(arr)]
```

### 深浅拷贝

两者的区别本质上来说就是拷贝一个对象`是否需要递归`的问题
> 1、浅拷贝只考虑了该对象的一个层级的属性，没有考虑属性值的数据类型， 拷贝的是属性的值和地址  
> 2、深拷贝不仅考虑了该对象的属性，还考虑了属性值的数据类型，会递归执行拷贝所有对象类型的属性值，拷贝只有值，没有地址。
```js
function cloneDeep(source, hash = new WeakMap()) {
  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source)

  var target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
```

### 防抖节流

**防抖**
```js
// 防抖函数，一段时间内仅执行最后一次调用
function debounce(func, delay) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    // 如果存在，清除之前的函数执行，重新计时；不存在则正常执行
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// 使用示例
function handleInput() {
  console.log('Input event triggered');
}
// 对输入事件进行防抖
const debouncedHandleInput = debounce(handleInput, 300);
```

**节流**
```js
// 节流函数,在某段时间内仅执行一次
function throttle(func, delay) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    // 如果timer存在，函数不执行
    // 如果timer不存在，则设置定时器，并执行函数;
    if (!timer) {
      func.apply(context, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
// 使用示例
function fn(){}
// 对fn进行节流
const throttledFn = throttle(fn, 500);
```

### 