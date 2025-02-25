## ES5
- [严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
## 新增声明方法
|    不同点       | var  | let  | const |
| ---------- | ---- | ---- | ----- |
| 变量提升(变量定义之前是否可以使用)   | 有   | 无   | 无    |
| 顶层对象(是否可以通过window对象访问)| 有   | 无   | 无    |
| 是否可以定义同名命令   | 是   | 否   | 否    |
| 作用域     | 全局 | 块级 | 块级  |
| 定义变量时是否必须赋值 | 否   | 否   | 是    |
| 变量的值能否被更新| 是   | 是   | 否    |
```js
// 过去的问题
for(var i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i)
  }, 1000)
}
// 输出：3 3 3
  
// 过去的解决办法：IIFE
for(var i = 0; i < 3; i++){
  (function(i){
    setTimeout(function(){
      console.log(i)
    }, 1000)
  })(i)
}
// 输出：0 1 2
```
## 解构赋值
```js
在解构中，有两部分参与：
1.解构的源，解构赋值表达式的右边部分；
2.解构的目标，解构赋值表达式的左边部分。
// 剩余运算符，即...运算符
可以使用数组方法，仅使用一次，放在参数最后
```

（1）数组

```js
// 基本：
let [a,b,c]=[1,2,3] 	//a=1;b=2;c=3
// 可嵌套
let [a,[[b],c]]=[1,[[2],3]]
// 可忽略
let [a,,b]=[1,2,3]  	//a=1;b=3
let [,,b]=[1,2,3]  		//b=3
// 不完全解构
let [a = 1，b] = []      //a=1;b=undefined
let [a,b] = [1,2,3,4,5]  //a=1;b=2
// 剩余运算符(只能是最后一个元素)
let [a,...b]=[1,2,3]     //a=1;b=[2,3]
// 默认值
let [a = 3, b = a] = [];     // a = 3, b = 3
let [a = 3, b = a] = [1];    // a = 1, b = 1
let [a = 3, b = a] = [1, 2]; // a = 1, b = 2
```

（2）对象

```js
// 基本
let {a,b} = {a:"a",b:"b"}; // a="a";b="b"
let {a:"aa"} = {a:"aaa"}  // a ="aaa"
// 可嵌套
let {z:[x,{y}]} = {z:["11",{y:"22"}]};// x="11",y="22"
// 可忽略
let {z:[x,{ }]} = {z:["11",{y:"22"}]};// x="11"
// 不完全解构
let {z:[x,{ }]} = {z:[{y:"22"}]}; // x=undefined，y="22"
// 剩余运算符
let {a,b,...rest} = {a:1,b:2,c:3,d:4}//a=1, b=2, rest={c:3,d:4}
// 解构默认值
let {a=1,b=2} = {a:3}; //a=3,b=2
let {a:aa=11,b:bb=22}={a:3}; // aa=3,bb=22
```

（3）函数参数

```js
function add([x,y]) = {
    console.log("x+y",x+y)	//3
}
add([1,2]);
function fn({x,y} = {x:1,y:2}){
    return [x,y]
}
fn();	//[1,2]
```

（4）字符串

```js
let [a,b,c] = "abc";
//a='a',b='b',c='c'
```

（5）代码简化

```js
const { log } = console;
log('hh');
```
## 拓展
### 数值

```js
Number.isFinite()	用来检查一个数值是否为有限的（finite），
Number.isNaN()	用来检查一个值是否为NaN。
Number.isInteger() 用来判断一个数值是否为整数。
```
### 运算符
#### 指数运算符
特点：右结合，即从右边开始计算
```js
2**3 // 8
2**3**2 // 512 相当于2的(3的2次方)次方
a **= 2	// a = a*a
```
#### 链判断运算符
```js
// 如果读取对象内部的某个属性，往往需要判断一下，属性的上层对象是否存在。
(obj && obj.a && obj.a.aa) && obj.a.aa -= 0
obj?.a?.aa && obj.a.aa -= 0
```
#### Null判断运算符
前者为null,执行后者
```js
null ?? 2  //2
false ?? 2 //false
```
### 字符串
#### 遍历器接口
可通过for of遍历
```js
for(let x of "string"){
  console.log(x)	// s,t,r,i,n,g
}
```

#### 模板字符串

```js
1.可换行
2.可使用插值表达式添加变量，变量也可以替换成可执行的 JS 语句，即`${}`
```

#### 新增字符串API

```js
// 判断---都返回布尔值
1.includes()：表示是否找到了参数字符串。
2.startsWith()：表示参数字符串是否在原字符串的头部。
3.endsWith()：表示参数字符串是否在原字符串的尾部。
这三个方法都支持第二个参数，表示开始搜索的位置。
// 补全
1.padStart()头部补全
2.padEnd()尾部补全。
第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
// 消除空格
1.trimStart()
2.trimEnd()
// 复制
repeat()返回一个新字符串，表示将原字符串重复n次。
// 替换
replaceAll('替换目标','替换值')方法，可以一次性替换所有匹配。
// 索引
at()  类似于arr[i]
```
### 数组
#### for of 循环
```js
// for of 的方式，结果一样
for(const i of [1,2,3]){
  console.log(i)  // 1,2,3
}
```
#### 新增API
```js
Array.from  // 用于将对象转为真正的数组
Array.of(1，2，3) // 用于将一组值1，2，3，转换为数组[1,2,3]。
fill('填充值'，'起'，'末') //使用给定值，填充一个数组。
find('xx')  // 搜索数组中到符合条件的项
findIndex(item => item.id == id) //
includes('xx')  // 判断数组中是否包含某一项
flat('拉平的层数') // 多维数组转一维数组
flatMap()  // map+flat
at()	// 相当于arr[i]
```
### 对象
#### 属性的简洁表示法
1.如果 key 和 value 变量名相同，省略 value
2.省略函数：function
3.计算属性：[Math.random()]
```js
const bar = 'bar'
const obj = {
    bar,
    fn() {
        console.log('1111')
    },
    [Math.random()]: '123'
}
console.log(obj)
console.log(obj.bar)
console.log(obj.fn())
```

#### 属性名表达法

```js
obj['表达式'] = ***
```

#### 属性的遍历
```js
1.for in 
2.Object.keys(obj)
```
### 箭头函数
任何书写匿名函数的位置均可以书写箭头函数；
```js
// 匿名函数旧写法
function (){}
function (a,b) {
  return a + b;
}
function (x,y) {
  return {x,y};
}
// 匿名函数ES6写法
() => {}
(a,b) => a + b;
(a,b) => {
  return a + b;
}
(x,y) => ({x,y});
(x,y) => ({
  return {x,y};
});
```
箭头函数的特点
- 1.语法更加简洁；
- 2.不会创建自己的this；继承而来的this指向永远不变；- call、apply、bind无法改变箭头函数的this
- 3.不能作为构造函数使用；
- 4.没有自己的原型；
- 5.没有自己arguments；但可以用rest参数代替
- 6.不能用作Generator函数，不能使用yeild关键字；
## 数据类型Symbol
```js
// 新增Symbol的原因
防止属性名的冲突
// 运算
不能与其他类型的值进行计算，会报错
// 转换
1.可以显示转为字符串
String();
Symbol('123').toString()
2.可以转为布尔值
```
## Set & Map
- [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
ES6新增了Set结构，用于保存唯一值的序列
- [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
ES6新增了Map结构，用于保存键值对的映射，它和对象的最大区别在于：对象的键只能是字符串，而Map的键可以是任何类型
## Promise
> - Promise 是异步编程的一种解决方案，比传统的解决方案(回调函数和事件)更合理和更强大。
> - 目的: 为了解决传统ajax请求中的回调地狱问题(代码嵌套层级太多，难以维护管理)
> - 特点: 对象的状态不受外界影响; 一旦状态改变，就不会再变，任何时候都可以得到这个结果

- 实例
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

## async函数
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
async function getlist() {
  try {
    const res = await promise;
  } catch(err) {
    console.error(err);
  }
}
```

## Class
```js
// 旧的写法
function User(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = `${firstName} ${lastName}`;
}
User.isUser = function(u){
  return !!u && !!u.fullName
}
User.prototype.sayHello = function(){
  console.log(`Hello, my name is ${this.fullName}`);
}

// 新的等效写法
class User{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
  }
  
  static isUser(u){
  	 return !!u && !!u.fullName
  }
  
  sayHello(){
    console.log(`Hello, my name is ${this.fullName}`);
  }
}
```

## ES Module

```js
模块功能主要由两个命令构成：export和import。
export命令用于规定模块的对外接口
import命令用于输入其他模块提供的功能。
```




