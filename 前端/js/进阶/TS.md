## 简要介绍

### 1、概念

TS，即Typescript，是 JavaScript 的类型超集。
TS = Type+JavaScript，也就是在JavaScript所有功能的基础上，增加了类型支持。

### 2、与js的区别

编程语言可以划分为**静态类型**（编译期做类型检查）和**动态类型**（执行期做类型检查）

- **JS属于动态类型**，执行期才会发现代码错误，而代码中绝大部分错误都是类型错误，导致开发过程中找Bug、改bug的时间增加，严重影响开发效率。
- **TS属于静态类型**，编译期做类型检查，可以显式标记出代码中的意外行为，可以更早发现错

## 安装

 `node.js和浏览器是不能直接读取ts语法，所以需要先安装编译ts的工具包，将ts代码转为js代码`。 

```
- 安装命令：`npm i -g typescript` 或者`yarn global add typescript`
- 验证是否安装成功：tsc –v(查看 typescript 的版本)
- 创建 test.ts 文件
- 编译命令：`tsc test.``ts`（此时，在同级目录中会出现一个同名的 JS 文件）
- 执行 JS 代码：`node test.js`
```

## 配置文件

tsconfig.json

```json
compilerOptions 配置编译选项
file 指定待编译文件
include	指定待编译文件
exclude	排除待编译文件
```

## 主要类型

### 1、原始

字符串类型：string

```typescript
let str: string = "str"
```

数字类型：number

```typescript
let num: number = 11
```

布尔类型： boolean

```typescript
let boo: boolean = true
```

未定义类型： undefined

```typescript
let und: undefined = undefined;
// 任意类型都可以 = undefined
```

空值类型：null

```typescript
let nul: null = null;
```

### 2、数组与元组

数组类型：数组中只有一种类型

```typescript
// 写法一：基础类型[]
let arr: string[] = ['str1', 'str2']
// 写法二: Array<基础类型>
let arr: Array<number> = [1, 3, 5]
```

元祖类型：数组中有多种类型

```typescript
let arr : [string, number, boolean] = ['str', 11, true]
```

### 3、对象

```typescript
// 写法一
let obj：{name：string；age：number} = {
    name: 'cc',
    age: 23
}
// 写法二
let obj: {
    name:string
    b: number
} = {
    name: 'cc',
    age: 23
}
```

### 4、函数

```typescript
// 写法一
const add = (x:number,y:number,z?:number):number => {
    return z? x+y+z : x+y
}
add(3, 4);
// 写法二
function add(x:number,y:number,z?:number): number => {
    return z? x+y+z : x+y
}
```

### 5、类型别名、接口

类型别名： 只是起一个别名

```typescript
// type 定义一种类型
type Puls = (x: number, y: number) => number
let sum: Plus
```

接口： 表示一种独特的类型

```typescript
// 接口定义
interface Person {
    name: string;
    age: number;
    area?: string;
    readonly id: number;
}
// 变量
let kjc: Person = {
    name: 'cc',
    age: 23,
    id :1
}
// 参数
readonly 即表示只可取，不可改
?表示为可选参数，即可设可不设
```

### 6、任意、联合、交叉

任意类型： any

```typescript
let anyth: any = 4
```

联合类型（或）

```typescript
let a: string | number;
```

交叉类型（且）

```typescript
interface Name {
    name： string
}
let kjc：Name & {age: number} = {
    name: 'cc',
    age: 23
}
```

### 7、类型推断、类型断言

类型推断

```typescript
// 没有声明类型时会自动给你推断出一个类型，如果把它赋值一个非该类型的值，则会报错
let str = "str"
str = 123	// Error
```

类型断言

```typescript
function fn(input: string | number):number {
    // 手动判断是哪种类型
    const str = input as string
    if( str.length ){
        return str.length
    }else{
        const number = input as number
        return number.toString().length
    }
}
```

### 8、枚举

```typescript
enum Direction {
    Left = 'left',
    Right = 'right',
    Top = 'top',
    Bottom = 'bottom',
}
const value = 'left'	// 此时Direction.left = value
Direction.Up	// 0取到的是值
Direction[0]	// left	取到的是
```

### 9、泛型

基础用法

```typescript
// <T> 占位符，表示任意类型都可以
// 会根据实参自动推断result的类型

// 例一
function fn1<T>(n: T) :T{
    return n
}
const result1 = fn(123)	// result2: number

// 例二
function fn2<T, U>(n: [T, U]): [T, U] {
    return [n[1], n[0]]
}
const result2 = fn2(['str', 123])	//result2: [string, number]
```

在函数中的使用

```typescript
// 问题
function fn(n: T) :T{
   	console.log(n.length) // 因为n不一定有length，所以会报错;
    return n
}


// 方案一: 加[]
function fn1<T>(n: T[]) :T[]{
   	console.log(n.length)
    return n
}
const result11 = fn1([1,2,3])

// 方案二: 定义接口 ——只要有length属性就可以
interface Withlength {
    length: number
}
function fn2<T extends Withlength>(n: T)：T {
    console.log(n.length)
    return n
}
const result1 = fn2('str')
const result2 = fn2([1,2,3])
const result3 = fn2({length: 10})	
```

在类中的使用

```typescript
class Queue<T> {
    private data = [];
    push(item: T) {
        item this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}
const queue = new Queue<number>()
queue.push(1)
```

在接口中的使用

```typescript
interface Obj<T, U> {
    key: T
    value: U
}
let k: Obj<number, string> = {
    key: 1,
    value: 'str'
}
```

### 10、字面量

```typescript
// 用于常量
const str: 'name' = 'name';
const number: 1 = 1;
```

### 11、内置类型

```javascript
let num = Math.sqrt(36)	// Math
let data = new Date().getTime()	// Date
...
```





官网：  [TypeScript: JavaScript With Syntax For Types. (typescriptlang.org)](https://www.typescriptlang.org/zh/) 