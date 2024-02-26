[vue官网](https://v2.cn.vuejs.org/v2/api/)
## 全局配置
`不常用`
```js
// 阻止vue在启动时生成生产提示，一般脚手架自带这个配置
Vue.config.productionTip = false; 
// 捕获错误信息和Vue实例
Vue.config.errorHandler = function (err, vm, info) {}
```
## 全局API
```js
Vue.use(plugin) // 安装插件
Vue.extend()  // 创建"子类"，参数是一个包含组件选项的对象
Vue.nextTick(() => {}) // 在下次DOM更新循环结束之后执行延迟回调
Vue.set(target,index/propertyName, value) // 添加响应式新属性
Vue.directive('my-directive', {})// 注册自定义指令
Vue.filter('my-filter', ()=>{}) // 注册全局过滤器
Vue.component('my-component', {}); // 注册全局组件
Vue.mixin(object) // 注册全局混入
Vue.observable() // 让一个对象可响应
```
## 数据绑定
{{}}类似于Mustache语法，里面的值最终都会当作字符串来处理

### 1、插值
```
 {{a}}  a变化时，文本的值也会变化
```
### 2、表达式
```
 {{a / 100}}
 {{true? 1 : 0}}
 {{str.split(",")}}
```
### 3、过滤器
```
 {{a | filterA | filterB}}
 {{a | filter a b}}
```
## 数据相关配置
 - **所有选项都不能使用箭头函数**，因为箭头函数绑定了父级作用域的上下文，this不会按照期望指向Vue实例，this.xx将是undefined
### data
顶级组件object，其他组件都是function，因为一个组件可能被用来创建多个实例，如果不是函数的话，则多个实例将会共享这一个数据对象，造成数据污染。
```js
data() {
  return {
    data1: 1,
    data2: 2,
  }
}
```
### props
用于接收父组件的数据，可以是数组形式，也可以是对象形式
```js
props:['msg1','msg2']
props:{
  msg1: Number,
  msg2: {
    type: Number,
    default: 0,
    required: true,
    validator: function(value) {
      return value > 0
    }
  }
}
```
### propsData
只用于new创建的实例中，即顶层的实例
```js
var vm = new Vue({
  propsData:{
    msg: '11'
  }
})
```
### computed
计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。
```js
computed: {
  doubleMsg1: vm => vm.a * 2
  doubleMsg2() {
    return this.msg * 2;
  },
  // 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter：
  doubleMsg3: {
    get(){
      return this.msg * 2;
    }
    set(newValue){
      // newValue即getter的值
      // 数据变动时执行
    }
  }
}
```
### methods
 - 用于封装函数，this.xx()可直接使用
### watch
 - 一个对象，键是需要观察的表达式，值是对应的回调函数/方法名/对象
```js
watch: {
  msg1: (newValue, oldValue) => {}
  msg2: 'someMethod',
  msg3: {
    handler: 'someMethod'
    immediate: true,  // 侦听开始后立即调用
    deep: true // 无论对象属性嵌套多深，都会侦听到
  },
  // 你可以传入回调数组，它们会被逐一调用
  msg4: [
    'handler1'
    function handler2(newValue, oldValue) {},
    {
      handler: function handler3(newValue, oldValue) {},
    }
  ]
}
```
## 指令
指令就是当其表达式的值改变时把某些特殊的行为应用到DOM上面。
### v-once
只执行一次，数据改变时，插值内容不更新
```html
<div v-once>{{msg}}</div>
```
### v-html
插入html
```html
<!-- div标签会被msg的标签替换 -->
<div v-html="msg"></div>
```
### v-text
插入普通文本
```html
<div v-html="msg"></div>
```
### v-if
生成或移除一个元素，存在局部编译或卸载的过程
```html
<!-- 生成该元素 -->
<div v-if="true"></div>
<!-- 移除该元素 -->
<div v-if="false"></div>
```
### v-show
隐藏或显示一个元素，本质上是通过内联样式display来控制
```html
<!-- 显示该元素 -->
<div v-if="true"></div>
<!-- 隐藏该元素 -->
<div v-if="false"></div>
```
### v-else
必须跟着v-if或v-show，充当else的功能
```html
<!-- 显示该元素 -->
<div v-if="1==2"></div>
<div v-else></div>
```
**v-show用在组件上时，由于指令优先级问题v-else会出现问题**
### v-model
用来在表单控件元素上创建双向数据绑定，根据控件类型自动选取正确的方法更新元素
```html
<input type="text" v-model="username" />
<input type="radio" name="sex" v-model="sex" />
<input type="radio" name="sex" v-model="sex" />
<input type="checkbox" value="a" v-model="interest" />
<input type="checkbox" value="b" v-model="interest" />
<input type="checkbox" value="c" v-model="interest" />
<select v-model="sel">
  <option value="a">a</option>
  <option value="b">b</option>
  <option value="c">c</option>
</select>
```
### v-for
遍历渲染元素
```html
<div v-for="(item, index) in arr" :item="item" :key="index"></div>
```
和html的属性进行绑定
```html
<div v-on:click="add"></div>
<!-- 动态参数 -->
<div v-on:[curEvent]="add"></div>
<!-- 简写形式 -->
<button @click="add"></button>
```
### v-bind
和html的属性进行绑定
```html
<div v-bind:disabeld="isDisabled"></div>
<!-- 动态参数 -->
<div v-bind:[msg1]="msg2"></div>
<!-- 简写形式 -->
<div :disabeld="isDisabled"></div>
<div :[msg1]="msg2"></div>
```
和Class绑定
```html
<div :class="normal"></div>
<div :class="{active: isActive, danger: isError}"></div>
<div :class="[isActive, isError]"></div>
```
和style绑定
```html
<div :style="{background:isBlack?'black':'white'}"></div>
<div :style="styleData"></div>
```
### v-on
和html的属性进行绑定
```html
<div v-on:click="add"></div>
<!-- 动态参数 -->
<div v-on:[curEvent]="add"></div>
<!-- 简写形式 -->
<button @click="add"></button>
```
### v-slot
用于具名插槽
### v-pre
跳过该标签和其子元素的编译过程，显示原始Mustache标签，加快编译
```html
<span v-pre>{{ this will not be compiled }}</span>
```
### v-cloak
不会显示，直到编译结束。
```html
<div v-cloak>{{ message }}</div>
```
### 修饰符
**number** 将用户的输入转换为数字类型(如果转换结果是NaN时，则返回原值);
```html
<input type="text" v-model.number="username" />
```
**lazy**   input事件改到change事件中发生
```html
<!-- input失焦时，username数据才会改变 -->
<input type="text" v-model.lazy="username"/>
```
**debounce**  延迟同步数据
```html
<!-- username数据在5000ms后发生改变 -->
<input type="text" v-model="username" debounce="5000" />
```
**prevent**
```html
<!-- 调用event.preventDefault -->
<div @click.prevent="add"></div>
```
## 生命周期钩子
```js
beforeCreate  //实例初始化完成,但是各配置还未进行
created // watch\method\computed已被配置完成，但未进行挂载
beforeMounted // 挂载之前，render首次被调用
mounted // 已挂载完成，但是不能保证子组件都渲染完成，如果需要可以调用nextTIck
beforeUpdate  // 数据发生改变，DOM被更新之前调用
updated // 数据改变导致虚拟DOM重新渲染和更新后被调用，也同样不能保证子组件都渲染完成
activated // 被缓存的组件激活时调用
deactivated // 被缓存的组件失活时被调用
beforeDestroy // 实例销毁前使用
destroyed // 实例销毁后
errorCaptured // 捕获后代组件的错误时被调用
```
## 组合
(parent、provide见组件相关知识点)
### parent/children
 - 父子传值，应急方法，更推荐使用props和events
### provide/inject
 - 跨级传值
### mixins
 - 接收一个混入对象的数组。可以和正常的实例对象使用一样的实例选项，如生命周期勾子、computed等，
 - Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
```js
var mixin = {
  created: function () { console.log(1) }
}
var vm = new Vue({
  created: function () { console.log(2) },
  mixins: [mixin]
})
```
### extends
 - 允许声明扩展另一个组件 (可以是一个简单的选项对象或构造函数)，而无需使用
 - 和mixins类似
```js
var CompA = { ... }
// 在没有调用 `Vue.extend` 时候继承 CompA
var CompB = {
  extends: CompA,
}
```

