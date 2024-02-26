## this指向

### （1）指向window

```js
// 全局作用域内调用函数，this指向Window，如setTimeout()、setInterval()
function fn(){
    console.log(this)
}
fn();			//window
window.fn()		//window
```

### （2）指向事件调用者

```js
// 事件内调用函数，this指向该事件的调用者
$("button").click(function(){
    console.log(this)	//<button><button>
})
```

### （3）指向对象

```js
// 隐式绑定：调用对象内的函数，this指向该对象
var obj = {
    user:"kk",
    fn:function(){
        console.log(this)	//{user:"kk",fn:f}
    }
}
window.obj.fn()	//或者obj.fn();
```

### （4）指向实例化对象

```js
// new绑定：实例化对象中的this，指向这个实例化对象
function fn(){
    this.a = 22,
    console.log(this)	//fn{a:22}
}
var a = new fn()
```

## call、apply、bind区别

```js
// 隐式丢失
在一些特殊情况下，会存在隐式绑定丢失问题。最常见：参数传递、变量赋值
// 显式绑定 ----改变this指向
三者区别：
1.call和apply都是立即调用；bind是稍后调用
2.call调用时必须以参数列表的形式进行传递，apply必须以数组的形式进行传递；
---通过第一个参数指定函数内部this指向
---如果第一个参数指定了null或undefined，则内部this指向Windows，且返回的是函数
bind传参方式有两种：在bind的同时传递，或者在调用的时候传递
// call
b.call(a, 1, 2);
---call的参数是直接放进去的，第二第三第n个参数全都用逗号分隔，直接放到后面
// apply
b.apply(a, [1, 2]);
---apply的所有参数都必须放在一个数组里面传进去
// bind
 b.bind(a)(1, 4);
 b.bind(a, 1, 5)();
---bind返回是的函数(需要用小括号调用函数)
```