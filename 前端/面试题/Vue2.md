## 概念原理类
### *Angular* && *React* && *Vue*  
> 1.学习曲线: Angular > React > Vue
> 2.架构设计: 
>   Angular:全功能的、基于模块化的框架
>   React: 轻量级的视图层库，它专注于构建 UI 组件
>   Vue: 渐进式框架的设计理念
> 3.语法风格：Angular（模板语法结合ts）、React（jsx）、Vue（模板语法）
> 4.生态系统：
>   Angular（强大的官方支持和完善的生态系统， 有很多内置功能和工具）
>   React(生态系统庞大，有众多的第三方库和工具)
>   Vue(生态系统丰富,有官方路由库和状态管理库，三方插件)
> 5.适用场景：Angular大型企业级、React各种规模、Vue中小型



### *Vue* 的优点

> 参考答案：
> *Vue* 是一个构建数据驱动的 *Web* 界面的渐进式框架。

> 关于 *Vue* 的优点，主要有**响应式编程、组件化开发、虚拟 *DOM***
> **响应式编程**
> 指 *Vue* 会自动对页面中某些数据的变化做出响应。这也就是 *Vue* 最大的优点，通过 *MVVM* 思想实现数据的双向绑定，让开发者不用再操作 *DOM* 对象，有更多的时间去思考业务逻辑。
> **组件化开发**
> *Vue* 通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（*component*）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。
> 组件化开发的优点：提高开发效率、方便重复使用、简化调试步骤、提升整个项目的可维护性、便于协同开发。
> **虚拟 *DOM***
> 在传统开发中，用 *JQuery* 或者原生的 *JavaScript DOM* 操作函数对 *DOM* 进行频繁操作的时候，浏览器要不停的渲染新的 *DOM* 树，导致在性能上面的开销特别的高。
> 而 *Virtual DOM* 则是虚拟 *DOM* 的英文，简单来说，他就是一种可以预先通过 *JavaScript* 进行各种计算，把最终的 *DOM* 操作计算出来并优化，由于这个 *DOM* 操作属于预处理操作，并没有真实的操作 *DOM*，所以叫做虚拟 *DOM*。最后在计算完毕才真正将 *DOM* 操作提交，将 *DOM* 操作变化反映到 *DOM* 树上。

### *MVVM*

> 参考答案：
>
> -  *MVVM* 是 *Model-View-ViewModel* 的缩写。*MVVM* 是一种设计思想。
>   - *Model* 层代表数据模型，也可以在 *Model* 中定义数据修改和操作的业务逻辑; 
>   - *View* 代表 *UI* 组件，它负责将数据模型转化成 *UI* 展现出来，*View* 是一个同步 *View* 和 *Model* 的对象
> - 在 *MVVM* 架构下，*View* 和 *Model* 之间并没有直接的联系，而是通过 *ViewModel* 进行交互， *Model* 和 *ViewModel* 之间的交互是双向的， 因此 *View* 数据的变化会同步到 *Model* 中，而 *Model* 数据的变化也会立即反应到 *View* 上。
> - 对 *ViewModel* 通过双向数据绑定把 *View* 层和 *Model* 层连接了起来，而 *View* 和 *Model* 之间的 同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 *DOM*，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 *MVVM* 来统一管理。

### *响应式原理*

> 面试题：请阐述`vue2`响应式原理
> 简述：数据变动时，自动触发页面更新
在具体实现上，vue用到了**核心部件**：

1. Observer
```
- 作用：将普通数据转换为响应式数据。
- 生命周期：在`beforeCreate`之后，`created`之前。
- 过程：
1)Observer会递归遍历对象的所有属性，把对象的每个属性通过`Object.defineProperty`转换为带有`getter`和`setter`的属性。
2)对于数组，`vue`会更改它的隐式原型，重写数组的 7 个方法（如 push, pop），使数组操作也能触发视图更新。

- 局限性
1)无法检测对象新增属性或删除属性（需用 Vue.set/Vue.delete）。因此`vue`提供了`$set`和`$delete`两个实例方法，让开发者通过这两个实例方法对已有响应式对象添加或删除属性。
2)数组索引直接赋值（如 arr[0] = 1）或修改长度不会触发更新。
```

```js
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) return;
  // 每个对象对应一个 Observer 实例
  const ob = new Observer(obj);
  return ob;
}

class Observer {
  constructor(value) {
    this.value = value;
    // 遍历对象属性，调用 defineReactive 劫持
    Object.keys(value).forEach(key => {
      defineReactive(value, key, value[key]);
    });
  }
}

function defineReactive(obj, key, val) {
  // 递归处理嵌套对象
  observe(val);
  const dep = new Dep(); // 每个属性对应一个 Dep 实例
  // Object.defineProperty数据劫持核心 兼容性在ie9以及以上
  Object.defineProperty(obj, key, {
    get() {
      // 依赖收集
      if (Dep.target) { // 当前正在计算的 Watcher
        dep.depend(); // 将 Watcher 添加到 Dep 的依赖列表
      }
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      observe(newVal); // 新值可能是对象，需要递归劫持
      // 派发更新
      dep.notify(); // 通知所有依赖的 Watcher 更新
    }
  });
}
```

2. Dep
```
- 作用：
Vue会为响应式对象中的每个属性、对象本身、数组本身创建一个`Dep`实例，每个`Dep`实例都有能力做以下两件事
1）依赖收集。当读取响应式对象的某个属性时，它会进行依赖收集：有人用到了我。(get时)
2）派发更新。当改变某个属性时，它会派发更新：那些用我的人听好了，我变了(set时)
```
```js
class Dep {
  constructor() {
    this.subs = []; // 存储 Watcher 实例
  }
  // 添加 Watcher 到依赖列表
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this); // Watcher 记录自己依赖的 Dep
    }
  }
  // 通知所有 Watcher 执行更新
  notify() {
    const subs = this.subs.slice();
    for (const watcher of subs) {
      watcher.update(); // 触发 Watcher 更新
    }
  }
}
Dep.target = null; // 全局唯一的“当前正在计算的 Watcher”
```
3. Watcher
- vue中的函数都不会直接运行，而是先交给watcher,watcher先设置一个全局变量，然后再执行函数，函数执行中，如果发生了依赖收集，那么Dep就会通过这个全局变量去记录当前的这个watcher，以便用于派发更新。
- 因为每个组件实例都至少对应一个render函数，所以也都至少对应一个watcher
```
作用: 执行具体的更新逻辑，例如重新渲染组件、执行计算属性或侦听器回调。
Watcher 类型:
1)渲染 Watcher：每个组件实例对应一个，负责视图更新。
2)计算属性 Watcher：处理计算属性的缓存逻辑。
3)用户自定义 Watcher：通过 watch 选项或 $watch 方法创建。
```
```js
class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm;
    this.cb = cb;
    this.deps = []; // 依赖的 Dep 列表（用于清理无用依赖）
    this.getter = expOrFn; // 可能是渲染函数或计算属性的 getter
    this.value = this.get(); // 初始化时触发依赖收集
  }

  // 执行 getter，触发依赖收集
  get() {
    Dep.target = this; // 设置全局当前 Watcher
    const value = this.getter.call(this.vm);
    Dep.target = null; // 收集完成后重置
    return value;
  }

  // 添加依赖
  addDep(dep) {
    if (!this.deps.includes(dep)) {
      this.deps.push(dep);
      dep.subs.push(this); // Dep 也记录 Watcher
    }
  }

  // 更新逻辑（可能被 Scheduler 调度）
  update() {
    if (this.lazy) {
      // 计算属性标记为“脏”，下次访问时重新计算
      this.dirty = true;
    } else {
      // 将 Watcher 推入异步队列（Scheduler 调度）
      queueWatcher(this);
    }
  }

  // 执行回调（如渲染函数或用户 watcher）
  run() {
    const value = this.get();
    if (value !== this.value) {
      this.cb.call(this.vm, value, this.value);
      this.value = value;
    }
  }
}
```
4. Scheduler
```
作用：通过异步队列批量处理 Watcher 更新，避免重复计算和频繁 DOM 操作。
实现:
  - 异步队列：nextTick 根据不同环境选择异步策略。promise、MutationObserver、setImmediate、setTimeout依次判断
  - 去重：同一 Watcher 在同一个事件循环中只会被推入队列一次。
```
```js
const queue = [];
let waiting = false;
function queueWatcher(watcher) {
  // 去重：同一 Watcher 只添加一次
  if (!queue.includes(watcher)) {
    queue.push(watcher);
  }
  // 同一事件循环中只需启动一次刷新
  if (!waiting) {
    waiting = true;
    nextTick(flushSchedulerQueue);
  }
}

function flushSchedulerQueue() {
  queue.sort((a, b) => a.id - b.id); // 按 Watcher 创建顺序执行
  for (const watcher of queue) {
    watcher.run(); // 执行更新
  }
  queue.length = 0; // 清空队列
  waiting = false;
}

// 实现 nextTick（优先使用微任务）
const callbacks = [];
let pending = false;

function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    Promise.resolve().then(() => {
      flushCallbacks();
    });
  }
}

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice();
  callbacks.length = 0;
  for (const cb of copies) {
    cb();
  }
}
```

### *虚拟DOM*
> 面试题：请你阐述一下对vue虚拟dom的理解
> 1. 什么是虚拟DOM
> 2. 为什么需要虚拟DOM
> 3. 虚拟DOM是如何转化为真实DOM的
> 4. 模板和虚拟DOM的关系

1. 什么是虚拟dom？

> - 虚拟dom本质上就是一个普通的JS对象（组件中打印this._vnode，可以查看这个js对象），用于描述视图的界面结构
> - 在vue中，每个组件都有一个`render`函数，每个`render`函数都会返回一个虚拟dom树，这也就意味着每个组件都对应一棵虚拟DOM树

2. 为什么需要虚拟dom？

> - 创建js对象，效率要比操作DOM，效率大得多
> - 在页面首次渲染时，虚拟DOM其实并没有提升渲染效率，反而了增加创建虚拟DOM这一步。
> - 在页面视图更新时，如果没有虚拟DOM，会有大量的DOM操作，会带来大量的性能问题，降低渲染效率。而如果有了虚拟DOM，通过新旧虚拟DOM树的对比，只需操作发生变动的真实DOM，减少了真实DOM的更新操作，从而极大提升了渲染效率。
   
3. 虚拟dom是如何转换为真实dom的？

> - 组件首次渲染时，会先通过render函数，生成一个虚拟DOM树，然后根据虚拟DOM树，创建真实DOM，并把真实DOM挂载到页面中合适的位置，此时，每个虚拟dom便会对应一个真实的dom
> - 组件需要重新渲染时，会重新调用render函数，生成一个新的虚拟DOM树，然后通过对比新旧虚拟DOM，找到最小的更新量，更新必要的虚拟DOM节点，最终根据更新的节点去修改对应真实DOM。

4. 模板和虚拟dom的关系

> - vue框架中有一个`compile`模块，它主要负责将模板转换为`render`函数，而`render`函数调用后将得到虚拟dom。(模板的存在，仅仅是为了让开发人员更加方便的书写界面代码)
> - 编译的过程：
>   - 1. 将模板字符串转换成为`AST`
>   - 2. 将`AST`转换为`render`函数
> - 编译的类型：
>   - 如果使用传统的引入方式，则编译时间发生在组件第一次加载时，这称之为**运行时编译**。
>   - 如果是在`vue-cli`的默认配置下，编译发生在打包时，这称之为**模板预编译**。

   编译是一个极其耗费性能的操作，预编译可以有效的提高运行时的性能，而且，由于运行的时候已不需要编译，`vue-cli`在打包时会排除掉`vue`中的`compile`模块，以减少打包体积

### *diff算法*
当组件创建和更新时，vue均会执行内部的update函数，该函数使用render函数生成的虚拟dom树，将新旧两树进行对比，找到差异点，最终更新到真实dom，对比差异的过程叫diff，vue在内部通过一个叫patch的函数完成该过程

- 在判断两个节点是否相同时，vue是通过虚拟节点的key和tag来进行判断的
- 具体来说，首先对根节点进行对比，如果相同则将旧节点关联的真实dom的引用挂到新节点上，然后根据需要更新属性到真实dom，然后再对比其子节点数组；如果不相同，则按照新节点的信息递归创建所有真实dom，同时挂到对应虚拟节点上，然后移除掉旧的dom。
- 在对比其子节点数组时，vue对每个子节点数组使用了两个指针，分别指向头尾，然后不断向中间靠拢来进行对比，这样做的目的是尽量复用真实dom，尽量少的销毁和创建真实dom。如果发现相同，则进入和根节点一样的对比流程，如果发现不同，则移动真实dom到合适的位置。

- 这样一直递归的遍历下去，直到整棵树完成对比。

### **既然 *Vue* 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 *DOM* 进行 *diff* 监测差异 ？**

> 参考答案：
>
> 现代前端框架有两种方式侦测变化，一种是 *pull*，一种是 *push*。
> ***pull***
> 其代表为 *React*，我们可以回忆一下 *React* 是如何侦测到变化的。
> 我们通常会用 *setState API* 显式更新,然后 *React* 会进行一层层的 *Virtual Dom Diff* 操作找出差异，然后 *Patch* 到 *DOM* 上，*React* 从一开始就不知道到底是哪发生了变化,只是知道「有变化了」,然后再进行比较暴力的 *Diff* 操作查找「哪发生变化了」，另外一个代表就是 *Angular* 的脏检查操作。

> ***push***
> *Vue* 的响应式系统则是 *push* 的代表，当 *Vue* 程序初始化的时候就会对数据 *data* 进行依赖的收集，一但数据发生变化，响应式系统就会立刻得知，因此 *Vue* 是一开始就知道是「在哪发生变化了」
> 但是这又会产生一个问题，通常绑定一个数据就需要一个 *Watcher*，一但我们的绑定细粒度过高就会产生大量的 *Watcher*，这会带来内存以及依赖追踪的开销，而细粒度过低会无法精准侦测变化，因此 *Vue* 的设计是选择中等细粒度的方案，在组件级别进行 *push* 侦测的方式，也就是那套响应式系统。

> 通常我们会第一时间侦测到发生变化的组件,然后在组件内部进行 *Virtual Dom Diff* 获取更加具体的差异，而 *Virtual Dom Diff* 则是 *pull* 操作，*Vue* 是 *push + pull* 结合的方式进行变化侦测的。

### **说一下在 *Vue2.x* 中如何检测数组的变化？**

> 参考答案：
>
> *Vue2.x* 中实现检测数组变化的方法，是**将数组的常用方法进行了重写**。*Vue* 将 *data* 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 *api* 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。
>
> 流程:
>
> 1. 初始化传入 data 数据执行 initData
> 2. 将数据进行观测 new Observer
> 3. 将数组原型方法指向重写的原型
> 4. 深度观察数组中的引用类型
>
> 有两种情况无法检测到数组的变化。
>
> - 当利用索引直接设置一个数组项时，例如 *vm.items[indexOfItem] = newValue*
> - 当修改数组的长度时，例如 *vm.items.length = newLength*
>
> 不过这两种场景都有对应的解决方案。
>
> **利用索引设置数组项的替代方案**
>
> ```js
> //使用该方法进行更新视图
> // vm.$set，Vue.set的一个别名
> vm.$set(vm.items, indexOfItem, newValue)
> ```
>
> **修改数组的长度的替代方案**
>
> ```js
> //使用该方法进行更新视图
> // Array.prototype.splice
> vm.items.splice(indexOfItem, 1, newValue)
> ```

### **nextTick**

> 参考答案：
>
> 作用：*vue* 更新 *DOM* 是异步更新的，数据变化，*DOM* 的更新不会马上完成，*nextTick* 的回调是在下次 *DOM* 更新循环结束之后执行的延迟回调。
>
> 实现原理：*nextTick* 主要使用了宏任务和微任务。根据执行环境分别尝试采用
>
> - *Promise*：可以将函数延迟到当前函数调用栈最末端
> - *MutationObserver* ：是 *H5* 新加的一个功能，其功能是监听 *DOM* 节点的变动，在所有 *DOM* 变动完成后，执行回调函数
> - *setImmediate*：用于中断长时间运行的操作，并在浏览器完成其他操作（如事件和显示更新）后立即运行回调函数
> - 如果以上都不行则采用 *setTimeout* 把函数延迟到 DOM 更新之后再使用
>
> 原因是宏任务消耗大于微任务，优先使用微任务，最后使用消耗最大的宏任务。


## 用法类

### 组件中写 *name* 选项有哪些好处

> 参考答案：
>
> 1. 可以通过名字找到对应的组件（ 递归组件：组件自身调用自身 ）
> 2. 可以通过 *name* 属性实现缓存功能（*keep-alive*）
> 3. 可以通过 *name* 来识别组件（跨级组件通信时非常重要）
> 4. 使用 *vue-devtools* 调试工具里显示的组见名称是由 *vue* 中组件 *name* 决定的


### *Vue* 组件的 *data* 为什么必须是函数

> 参考答案：
>
> 组件中的 *data* 写成一个函数，数据以函数返回值形式定义。这样每复用一次组件，就会返回一份新的 *data*，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 *data*，就会造成一个变了全都会变的结果。


### v-model
> 面试题：请阐述一下 `v-model` 的原理

`v-model`即可以作用于表单元素，又可作用于自定义组件，无论是哪一种情况，它都是一个语法糖，最终会生成一个属性和一个事件

**当其作用于表单元素时**，`vue`会根据作用的表单元素类型而生成合适的属性和事件。例如，作用于普通文本框的时候，它会生成`value`属性和`input`事件，而当其作用于单选框或多选框时，它会生成`checked`属性和`change`事件。

`v-model`也可作用于自定义组件，**当其作用于自定义组件时**，默认情况下，它会生成一个`value`属性和`input`事件。

开发者可以通过组件的`model`配置来改变生成的属性和事件

```js
// Comp
const Comp = {
  model: {
    prop: "number", // 默认为 value
    event: "change" // 默认为 input
  },
  props: ["number"],
  // ...
}
```

```html
<Comp v-model="data" />
<!-- 等效于 -->
<Comp :number="data" @change="data=$event" />
```

### *computed* && *methods* && *watch*
> 1.原理不同
>   *methods*。只需要遍历methods配置中的每个属性，通过bind改变其this指向到当前实例即可。通过调用函数的方式来执行。
>   *computed*。会遍历computed配置中的所有属性，为每一个属性创建一个Watcher对象，并传入一个函数，该函数的本质其实就是computed配置中的getter，这样一来，getter运行过程中就会收集依赖。
> 它会根据依赖的数据进行缓存，只有当依赖的数据发生变化时，才会重新计算。
>   *watch*。watch 是一个对象，用于监听数据的变化，当被监听的数据发生变化时，会执行相应的回调函数。
> 2.性能: computed > methods、watch
> 3.其他：调用方式、返回值、传参

### 生命周期

> 参考答案：
> **什么是 *vue* 生命周期**
> 对于 *vue* 来讲，生命周期就是一个 *vue* 实例从创建到销毁的过程。
>

> 参考答案：
> **什么是 *vue* 生命周期**
> 对于 *vue* 来讲，生命周期就是一个 *vue* 实例从创建到销毁的过程。
>
> ***vue* 生命周期的作用是什么**
> 在生命周期的过程中会运行着一些叫做生命周期的函数，给予了开发者在不同的生命周期阶段添加业务代码的能力。
> 其实和回调是一个概念，当系统执行到某处时，检查是否有 *hook*(钩子)，有的话就会执行回调。
> 通俗的说，*hook* 就是在程序运行中，在某个特定的位置，框架的开发者设计好了一个钩子来告诉我们当前程序已经运行到特定的位置了，会触发一个回调函数，并提供给我们，让我们可以在生命周期的特定阶段进行相关业务代码的编写。
>
> ***vue* 生命周期有几个阶段**
>
> 它可以总共分为 *8* 个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。
>
> - *beforeCreate*：是 *new Vue( )* 之后触发的第一个钩子，在当前阶段 *data、methods、computed* 以及 *watch* 上的数据和方法都不能被访问。
> - *created*：在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 *updated* 函数。可以做一些初始数据的获取，在当前阶段无法与 *DOM* 进行交互，如果非要想，可以通过 *vm.$nextTick* 来访问 *DOM* 。
> - *beforeMount*：发生在挂载之前，在这之前 *template* 模板已导入渲染函数编译。而当前阶段虚拟 *DOM* 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 *updated*。
> - *mounted*：在挂载完成后发生，在当前阶段，真实的 *DOM* 挂载完毕，数据完成双向绑定，可以访问到 *DOM* 节点，使用 *$refs* 属性对 *DOM* 进行操作。
> - *beforeUpdate*：发生在更新之前，也就是响应式数据发生更新，虚拟 *DOM* 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
> - *updated*：发生在更新完成之后，当前阶段组件 *DOM* 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
> - *beforeDestroy*：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
> - *destroyed*：发生在实例销毁之后，这个时候只剩下了 *DOM* 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。
>
> **第一次页面加载会触发哪几个钩子**
>
> 会触发 *4* 个钩子，分别是：*beforeCreate、created、beforeMount、mounted*
> 
> ***DOM* 渲染在哪个周期就已经完成**
> 
> *DOM* 渲染是在 *mounted* 阶段完成，此阶段真实的 *DOM* 挂载完毕，数据完成双向绑定，可以访问到 *DOM* 节点。
>
> **多组件（父子组件）中生命周期的调用顺序说一下**
>
> 组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。
>
> - 加载渲染过程：父*beforeCreate*->父*created*->父*beforeMount*->子*beforeCreate*->子*created*->子*beforeMount*- >子*mounted*->父*mounted*
>
> - 子组件更新过程：父*beforeUpdate*->子*beforeUpdate*->子*updated*->父*updated*
>
> - 父组件更新过程：父 *beforeUpdate* -> 父 *updated*
>
> - 销毁过程：父*beforeDestroy*->子*beforeDestroy*->子*destroyed*->父*destroyed*

### Vue路由

- 解释 *hash* 模式和 *history* 模式的实现原理
- 说一下 *$router* 与 *$route* 的区别
- *vueRouter* 有哪几种导航守卫？
- 解释一下 *vueRouter* 的完整的导航解析流程是什么

> 参考答案：
>
> **解释 *hash* 模式和 *history* 模式的实现原理**
>
> `#` 后面 *hash* 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面；通过监听 *hashchange* 事件可以知道 *hash* 发生了哪些变化，然后根据 *hash* 变化来实现更新页面部分内容的操作。
>
> *history* 模式的实现，主要是 *HTML5* 标准发布的两个 *API*，*pushState* 和 *replaceState*，这两个 *API* 可以在改变 *URL*，但是不会发送请求。这样就可以监听 *url* 变化来实现更新页面部分内容的操作。 
>
> 两种模式的区别：
>
> - 首先是在 *URL* 的展示上，*hash* 模式有“#”，*history* 模式没有
>
> - 刷新页面时，*hash* 模式可以正常加载到 *hash* 值对应的页面，而 *history* 没有处理的话，会返回 *404*，一般需要后端将所有页面都配置重定向到首页路由
>
> - 在兼容性上，*hash* 可以支持低版本浏览器和 *IE*
>
>
> **说一下 *$router* 与 *$route* 的区别**
>
> *$route* 对象表示当前的路由信息，包含了当前 *URL* 解析得到的信息。包含当前的路径，参数，*query* 对象等。
>
> - *$route.path*：字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。 
>- *$route.params*： 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。 
> - *$route.query*：一个 key/value 对象，表示 URL 查询参数。例如对于路径 */foo?user=1*，则有 *$route.query.user == 1*，如果没有查询参数，则是个空对象。 
> - *$route.hash*：当前路由的 hash 值 (不带 #) ，如果没有 *hash* 值，则为空字符串。
> - *$route.fullPath*：完成解析后的 *URL*，包含查询参数和 *hash* 的完整路径。 
> - *$route.matched*：数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。 
> - *$route.name*：当前路径名字 
> - *$route.meta*：路由元信息  
> 
> *$route* 对象出现在多个地方:
>
> - 组件内的 *this.$route* 和 *route watcher* 回调（监测变化处理）
>- *router.match(location)* 的返回值
> - *scrollBehavior* 方法的参数
> - 导航钩子的参数，例如 *router.beforeEach* 导航守卫的钩子函数中，*to* 和 *from* 都是这个路由信息对象。
> 
> *$router* 对象是全局路由的实例，是 *router* 构造方法的实例。
>
> *$router* 对象常用的方法有：
>
> - *push*：向 *history* 栈添加一个新的记录
>- *go*：页面路由跳转前进或者后退
> - *replace*：替换当前的页面，不会向 *history* 栈添加一个新的记录
> 
>
> ***vueRouter* 有哪几种导航守卫？**
>
> - 全局前置/钩子：*beforeEach、beforeR-esolve、afterEach*
>
> - 路由独享的守卫：*beforeEnter*
>- 组件内的守卫：*beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave* 

> **解释一下 *vueRouter* 的完整的导航解析流程是什么**
>
> 一次完整的导航解析流程如下：
>
> 1. 导航被触发。
>2. 在失活的组件里调用离开守卫。
> 3. 调用全局的 *beforeEach* 守卫。
> 4. 在重用的组件里调用 *beforeRouteUpdate* 守卫（*2.2+*）。
> 5. 在路由配置里调用 *beforeEnter*。
> 6. 解析异步路由组件。
> 7. 在被激活的组件里调用 *beforeRouteEnter*。
> 8. 调用全局的 *beforeResolve* 守卫（*2.5+*）。
> 9. 导航被确认。
> 10. 调用全局的 *afterEach* 钩子。
> 11. 触发 *DOM* 更新。
> 12. 用创建好的实例调用 *beforeRouteEnter* 守卫中传给 *next* 的回调函数。

### 通信方式
> - 父子通信：
>   - 父向子传递数据是通过 *props* ，子向父是通过 *$emit / $on*
>   - *$emit / $bus*
>   - *vuex*
>   - 通过父链 / 子链也可以通信（ *$parent / $children* ）
>   - *ref* 也可以访问组件实例
>   - *v-model*
>   - .*sync* 修饰符
> - 兄弟通信：
>   - *$emit / $bus*
>   - *vuex*
> - 跨级通信：
>   - *$emit / $bus* 
>   - *vuex* 
>   - *provide / inject API*
>   - *$attrs/$listeners*

### vuex

> 参考答案：
>
> ***vuex* 是什么**
>
> *vuex* 是一个专为 *Vue* 应用程序开发的状态管理器，采用集中式存储管理应用的所有组件的状态。每一个 *vuex* 应用的核心就是 *store*（仓库）。“*store*” 基本上就是一个容器，它包含着应用中大部分的状态 (*state*)。
>
> **为什么需要 *vuex***
>
> 由于组件只维护自身的状态(*data*)，组件创建时或者路由切换时，组件会被初始化，从而导致 *data* 也随之销毁。
>
> **使用方法**
>
> 在 *main.js* 引入 *store*，注入。只用来读取的状态集中放在 *store* 中， 改变状态的方式是提交 *mutations*，这是个同步的事物，异步逻辑应该封装在 *action* 中。
>
> **什么场景下会使用到 *vuex***
>
> 如果是 *vue* 的小型应用，那么没有必要使用 *vuex*，这个时候使用 *vuex* 反而会带来负担。组件之间的状态传递使用 *props*、自定义事件来传递即可。
>
> 但是如果涉及到 *vue* 的大型应用，那么就需要类似于 *vuex* 这样的集中管理状态的状态机来管理所有组件的状态。例如登录状态、加入购物车、音乐播放等，总之只要是开发 *vue* 的大型应用，都推荐使用 *vuex* 来管理所有组件状态。

### *v-if* && *v-show*

> 参考答案：
>
> - 共同点：都是动态显示 *DOM* 元素 
>
> - 区别点:
>
>   - 手段
>
>     *v-if* 是动态的向 *DOM* 树内添加或者删除 *DOM* 元素
>
>     *v-show* 是通过设置 *DOM* 元素的 *display* 样式属性控制显隐
>
>   - 编译过程
>
>     *v-if*  切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件
>
>     *v-show* 只是简单的基于 *css* 切换
>
>   - 编译条件
>
>     *v-if*  是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始局部编译
>
>     *v-show* 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 *DOM* 元素保留
>
>   - 性能消耗
>
>     *v-if*  有更高的切换消耗
>
>     *v-show* 有更高的初始渲染消耗
>
>   - 使用场景
>
>     *v-if*  适合运营条件不大可能改变 
>
>     *v-show* 适合频繁切换



### **如何让 *CSS* 只在当前的组件中起作用**

> 参考答案：
>
> 在 *vue* 文件中的 *style* 标签上，有一个特殊的属性：*scoped*。当一个 style 标签拥有 *scoped* 属性时，它的 *CSS* 样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有 *style* 标签全部加上了 *scoped*，相当于实现了样式的模块化。
>
> ***scoped* 的实现原理**
>
> *vue* 中的 *scoped* 属性的效果主要通过 *PostCSS* 转译实现的。*PostCSS* 给一个组件中的所有 *DOM* 添加了一个独一无二的动态属性，然后，给 *CSS* 选择器额外添加一个对应的属性选择器来选择该组件中 *DOM*，这种做法使得样式只作用于含有该属性的 *DOM*，即组件内部 *DOM*。
>
> 例如：
>
> 转译前
>
> ```js
> <template>
>   <div class="example">hi</div>
> </template>
> 
> <style scoped>
> .example {
>   color: red;
> }
> </style>
> ```
>
> 转译后：
>
> ```js
> <template>
>   <div class="example" data-v-5558831a>hi</div>
> </template>
> 
> <style>
> .example[data-v-5558831a] {
>   color: red;
> }
> </style>
> ```


### ***scoped* 是如何实现样式穿透的？**

> 参考答案：
>
> 首先说一下什么场景下需要 *scoped* 样式穿透。
>
> 在很多项目中，会出现这么一种情况，即：引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除 *scoped* 属性造成组件之间的样式污染。此时只能通过特殊的方式，穿透 *scoped*。
>
> 有三种常用的方法来实现样式穿透。
>
> **方法一**
>
> 使用 *::v-deep* 操作符( >>> 的别名)
>
> 如果希望 *scoped* 样式中的一个选择器能够作用得“更深”，例如影响子组件，可以使用 >>> 操作符：
>
> ```js
> <style scoped>
>     .a >>> .b { /* ... */ }
> </style>
> ```
>
> 上述代码将会编译成：
>
> ```js
> .a[data-v-f3f3eg9] .b { /* ... */ }
> ```
>
> 后面的类名没有 *data* 属性，所以能选到子组件里面的类名。
>
> 有些像 *Sass* 之类的预处理器无法正确解析 >>>，所以需要使用 *::v-deep* 操作符来代替。
>
> **方法二**
>
> 定义一个含有 *scoped* 属性的 *style* 标签之外，再定义一个不含有 *scoped* 属性的 *style* 标签，即在一个 *vue* 组件中定义一个全局的 *style* 标签，一个含有作用域的 *style* 标签：
>
> ```js
> <style>
> /* global styles */
> </style>
> 
> <style scoped>
> /* local styles */
> </style>
> ```
>
> 此时，我们只需要将修改第三方样式的 *css* 写在第一个 *style* 中即可。
>
> **方法三**
>
> 上面的方法一需要单独书写一个不含有 *scoped* 属性的 *style* 标签，可能会造成全局样式的污染。
>
> 更推荐的方式是在组件的外层 *DOM* 上添加唯一的 *class* 来区分不同组件，在书写样式时就可以正常针对针对这部分 *DOM* 书写样式。

### *keep-alive*

- keep-alive的实现原理是什么
- 与keep-alive相关的生命周期函数是什么，什么场景下会进行使用
- keep-alive的常用属性有哪些

> 参考答案：
>
> keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。
>
> keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。另外它还提供了 max 属性，通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。
>
> 受keep-alive的影响，其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是 activated 和 deactivated，它们分别在组件激活和失活时触发。第一次 activated 触发是在 mounted 之后
>
> 在具体的实现上，keep-alive 在内部维护了一个 key 数组和一个缓存对象
>
> ```js
> // keep-alive 内部的声明周期函数
> created () {
>     this.cache = Object.create(null)
>     this.keys = []
> }
> ```
>
> key 数组记录目前缓存的组件 key 值，如果组件没有指定 key 值，则会为其自动生成一个唯一的 key 值
>
> cache 对象以 key 值为键，vnode 为值，用于缓存组件对应的虚拟 DOM
>
> 在 keep-alive 的渲染函数中，其基本逻辑是判断当前渲染的 vnode 是否有对应的缓存，如果有，从缓存中读取到对应的组件实例；如果没有则将其缓存。
>
> 当缓存数量超过 max 数值时，keep-alive 会移除掉 key 数组的第一个元素。




### *Vue SSR*

> 参考答案：
>
> - *app.js* 作为客户端与服务端的公用入口，导出 *Vue* 根实例，供客户端 *entry* 与服务端 *entry* 使用。客户端 *entry* 主要作用挂载到 *DOM* 上，服务端 *entry* 除了创建和返回实例，还需要进行路由匹配与数据预获取。
> - *webpack* 为客服端打包一个 *ClientBundle*，为服务端打包一个 *ServerBundle*。
> - 服务器接收请求时，会根据 *url*，加载相应组件，获取和解析异步数据，创建一个读取 *Server Bundle* 的 *BundleRenderer*，然后生成 *html* 发送给客户端。
> - 客户端混合，客户端收到从服务端传来的 *DOM* 与自己的生成的 *DOM* 进行对比，把不相同的 *DOM* 激活，使其可以能够响应后续变化，这个过程称为客户端激活（也就是转换为单页应用）。为确保混合成功，客户 端与服务器端需要共享同一套数据。在服务端，可以在渲染之前获取数据，填充到 *store* 里，这样，在客户端挂载到 *DOM* 之前，可以直接从 *store* 里取数据。首屏的动态数据通过 *window.\__INITIAL_STATE__* 发送到客户端
> - *VueSSR* 的原理，主要就是通过 *vue-server-renderer* 把 *Vue* 的组件输出成一个完整 *HTML*，输出到客户端，到达客户端后重新展开为一个单页应用。



### *Vue complier*

> 参考答案：
>
> 在使用 vue 的时候，我们有两种方式来创建我们的 HTML 页面，第一种情况，也是大多情况下，我们会使用模板 template 的方式，因为这更易读易懂也是官方推荐的方法；第二种情况是使用 render 函数来生成 HTML，它比 template 更接近最终结果。
>
> complier 的主要作用是解析模板，生成渲染模板的 *render*， 而 *render* 的作用主要是为了生成 *VNode*
>
> complier 主要分为 3 大块：
>
> - parse：接受 template 原始模板，按着模板的节点和数据生成对应的 ast
> - optimize：遍历 ast 的每一个节点，标记静态节点，这样就知道哪部分不会变化，于是在页面需要更新时，通过 diff 减少去对比这部分DOM，提升性能
> - generate 把前两步生成完善的 ast，组成 render 字符串，然后将 render 字符串通过 new Function 的方式转换成渲染函数



### ***vue* 如何快速定位那个组件出现性能问题的**

> 参考答案：
>
> ⽤ *timeline* ⼯具。 通过 *timeline* 来查看每个函数的调⽤时常，定位出哪个函数的问题，从⽽能判断哪个组件出了问题。

### *ref*

> 参考答案：
>
> *ref* 的作用是被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 *$refs* 对象上。其特点是：
>
> - 如果在普通的 *DOM* 元素上使用，引用指向的就是 *DOM* 元素
> - 如果用在子组件上，引用就指向组件实例
>
> 所以常见的使用场景有：
>
> 1. 基本用法，本页面获取 *DOM* 元素
> 2. 获取子组件中的 *data*
> 3. 调用子组件中的方法

### **说一下你知道的 *vue* 修饰符都有哪些？**

> 参考答案：
>
> 在 *vue* 中修饰符可以分为 *3* 类：
>
> - 事件修饰符
> - 按键修饰符
> - 表单修饰符
>
> **事件修饰符**
>
> 在事件处理程序中调用 *event.preventDefault* 或 *event.stopPropagation* 方法是非常常见的需求。尽管可以在 *methods* 中轻松实现这点，但更好的方式是：*methods* 只有纯粹的数据逻辑，而不是去处理 *DOM* 事件细节。
>
> 为了解决这个问题，*vue* 为 *v-on* 提供了事件修饰符。通过由点 *.* 表示的指令后缀来调用修饰符。
>
> 常见的事件修饰符如下：
>
> - *.stop*：阻止冒泡。
> - *.prevent*：阻止默认事件。
> - *.capture*：使用事件捕获模式。
> - *.self*：只在当前元素本身触发。
> - *.once*：只触发一次。
> - *.passive*：默认行为将会立即触发。
>
> **按键修饰符**
>
> 除了事件修饰符以外，在 *vue* 中还提供了有鼠标修饰符，键值修饰符，系统修饰符等功能。
>
> - .*left*：左键
> - .*right*：右键
> - .*middle*：滚轮
> - .*enter*：回车
> - .*tab*：制表键
> - .*delete*：捕获 “删除” 和 “退格” 键
> - .*esc*：返回
> - .*space*：空格
> - .*up*：上
> - .*down*：下
> - .*left*：左
> - .*right*：右
> - .*ctrl*：*ctrl* 键
> - .*alt*：*alt* 键
> - .*shift*：*shift* 键
> - .*meta*：*meta* 键
>
> **表单修饰符**
>
> *vue* 同样也为表单控件也提供了修饰符，常见的有 *.lazy*、*.number* 和 *.trim*。
>
> - .*lazy*：在文本框失去焦点时才会渲染
> - .*number*：将文本框中所输入的内容转换为number类型
> - .*trim*：可以自动过滤输入首尾的空格


### ***Vue.extend* 和 *Vue.component* 的区别是什么？**

> 参考答案：
> *Vue.extend* 用于创建一个基于 *Vue* 构造函数的“子类”，其参数应为一个包含组件选项的对象。
> *Vue.component* 用来注册全局组件。

### ***Vue* 为什么没有类似于 *React* 中 *shouldComponentUpdate* 的生命周期？**

> 参考答案：
>
> 根本原因是 *Vue* 与 *React* 的变化侦测方式有所不同
>
> *React* 是 *pull* 的方式侦测变化，当 *React* 知道发生变化后，会使用 *Virtual Dom Diff* 进行差异检测,但是很多组件实际上是肯定不会发生变化的，这个时候需要用 *shouldComponentUpdate* 进行手动操作来减少 *diff*，从而提高程序整体的性能。
>
> *Vue* 是 *pull+push* 的方式侦测变化的，在一开始就知道那个组件发生了变化，因此在 *push* 的阶段并不需要手动控制 *diff*，而组件内部采用的 *diff* 方式实际上是可以引入类似于 *shouldComponentUpdate* 相关生命周期的，但是通常合理大小的组件不会有过量的 *diff*，手动优化的价值有限，因此目前 *Vue* 并没有考虑引入 *shouldComponentUpdate* 这种手动优化的生命周期。

### ***Vue* 中的 *Key* 的作用是什么？**

> 参考答案：
>
> ***key* 的作用主要是为了高效的更新虚拟 *DOM***。
> *vue* 和 *react* 的虚拟 *DOM* 的 *Diff* 算法大致相同，其核心有以下两点：
> - 两个相同的组件产生类似的 *DOM* 结构，不同的组件产生不同的 *DOM* 结构。
> - 同一层级的一组节点，他们可以通过唯一的 *id* 进行区分。

### **你的接口请求一般放在哪个生命周期中？为什么要这样做？**

> 参考答案：
>
> 接口请求可以放在钩子函数 *created、beforeMount、mounted* 中进行调用，因为在这三个钩子函数中，*data* 已经创建，可以将服务端端返回的数据进行赋值。
>
> 但是推荐在 *created* 钩子函数中调用异步请求，因为在 *created* 钩子函数中调用异步请求有以下优点：
>
> - 能更快获取到服务端数据，减少页面 *loading* 时间
> - *SSR* 不支持 *beforeMount 、mounted* 钩子函数，所以放在 *created* 中有助于代码的一致性
> - *created* 是在模板渲染成 *html* 前调用，即通常初始化某些属性值，然后再渲染成视图。如果在 *mounted* 钩子函数中请求数据可能导致页面闪屏问题 


### **说一下你对 *vue* 事件绑定原理的理解？**

> 参考答案：
>
> *vue* 中的事件绑定是有两种，一种是原生的事件绑定，另一种是组件的事件绑定。
>
> 原生的事件绑定在普通元素上是通过 *@click* 进行绑定，在组件上是通过 *@click.native* 进行绑定，组件中的 *nativeOn* 是等价于 on 的。组件的事件绑定的 @click 是 vue 中自定义的 $on 方法来实现的，必须有 $emit 才可以触发。
>
> **原生事件绑定原理**
>
> 在 runtime下的patch.js中createPatchFunction执行了之后再赋值给patch。
>
> createPatchFunction方法有两个参数，分别是nodeOps存放操作dom节点的方法和modules，modules是有两个数组拼接起来的，modules拼接完的数组中有一个元素就是events，事件添加就发生在这里。
>
> events元素关联的就是events.js文件，在events中有一个updateDOMListeners方法，在events文件的结尾导出了一个对象，然后对象有一个属性叫做create，这个属性关联的就是updateDOMListeners方法。
>
> 在执行createPatchFunction方法时，就会将这两个参数传入，在createPatchFunction方法中接收了一个参数backend，在该方法中一开始进行backend的解构，就是上面的nodeOps和modules参数，解构完之后进入for循环。
>
> 在createPatchFunction开头定义了一个cbs对象。for循环遍历一个叫hooks的数组。hooks是文件一开头定义的一个数组，其中包括有create，for循环就是在cbs上定义一系列和hooks元素相同的属性，然后键值是一个数组，然后数组内容是modules里面的一些内容。这时就把events文件中导出来的create属性放在了cbs上。
>
> 当我们进入首次渲染的时候，会执行到patch函数里面的createElm方法，这个方法中就会调用invokeCreateHooks函数，用来处理事件系统，这里就是真正准备进行原生事件绑定的入口。invokeCreateHooks方法中，遍历了cbs.create数组里面的内容。然后把cbs.create里面的函数全部都执行一次，在cbs.create其中一个函数就是updateDOMListeners。
>
> updateDOMListeners就是用来添加事件的方法，在这方法中会根据vnode判断是否有定义一个点击事件。如果没有点击事件就return。有的话就继续执行，给on进行赋值，然后进行一些赋值操作，将vnode.elm赋值给target，elm这个属性就是指向vnode所对应的真实dom节点，这里就是把我们要绑定事件的dom结点进行缓存，接下来执行updateListeners方法。在接下来执行updateListeners方法中调用了一个add的方法，然后在app方法中通过原生addEventListener把事件绑定到dom上。
>
> **组件事件绑定原理**
>
> 在组件实例初始化会调用initMixin方法中的Vue.prototype._init，在init函数中，会通过initInternalComponent方法初始化组件信息，将自定义的组件事件放到_parentListeners上，下来就会调用initEvents来初始化组件事件，在initEvents中会实例上添加一个 _event对象，用于保存自定义事件，然后获取到 父组件给 子组件绑定的自定义事件，也就是刚才在初始化组件信息的时候将自定义的组件事件放在了_parentListeners上，这时候vm.$options._parentListeners就是自定义的事件。
>
> 最后进行判断，如果有自定义的组件事件就执行updateComponentListeners方法进行事件绑定，在updateComponentListeners方法中会调用updateListeners方法，并传传一个add方法进行执行，这个add方法里就是$on方法。


### **说一下 *vue* 模版编译的原理是什么**

> 参考答案：
>
> 简单说，*Vue* 的编译过程就是将 *template* 转化为 *render* 函数的过程。会经历以下阶段：
>
> - 生成 *AST* 树
> - 优化
> - *codegen*
>
> 首先解析模版，生成 *AST* 语法树(一种用 *JavaScript* 对象的形式来描述整个模板)。 使用大量的正则表达式对模板进行解析，遇到标签、文本的时候都会执行对应的钩子进行相关处理。
>
> *Vue* 的数据是响应式的，但其实模板中并不是所有的数据都是响应式的。有一些数据首次渲染后就不会再变化，对应的 *DOM* 也不会变化。那么优化过程就是深度遍历 *AST* 树，按照相关条件对树节点进行标记。这些被标记的节点(静态节点)我们就可以跳过对它们的比对，对运行时的模板起到很大的优化作用。
>
> 编译的最后一步是将优化后的 *AST* 树转换为可执行的代码。

### ***delete* 和 *Vue.delete* 删除数组的区别是什么？**

> 参考答案：
>
> *delete* 只是被删除的元素变成了 *empty/undefined* 其他的元素的键值还是不变。
> *Vue.delete* 是直接将元素从数组中完全删除，改变了数组其他元素的键值。

### ***v-on* 可以实现监听多个方法么？**

> 参考答案：
>
> 可以监听多个方法。关于监听多个方法提供了几种不同的写法：
>
> ```html
> 写法一：<div v-on="{ 事件类型: 事件处理函数, 事件类型: 事件处理函数 }"></div>
> 写法二：<div @事件类型=“事件处理函数” @事件类型=“事件处理函数”></div>
> 写法三：在一个事件里面书写多个事件处理函数
> <div @事件类型=“事件处理函数1，事件处理函数2”></div>
> 写法四：在事件处理函数内部调用其他的函数
> ```
>
> 示例代码如下：
>
> ```html
> <template>
>   <div>
>     <!-- v-on在vue2.x中测试,以下两种均可-->
>     <button v-on="{ mouseenter: onEnter, mouseleave: onLeave }">
>       鼠标进来1
>     </button>
>     <button @mouseenter="onEnter" @mouseleave="onLeave">鼠标进来2</button>
> 
>     <!-- 一个事件绑定多个函数，按顺序执行，这里分隔函数可以用逗号也可以用分号-->
>     <button @click="a(), b()">点我ab</button>
>     <button @click="one()">点我onetwothree</button>
>   </div>
> </template>
> <script>
> export default {
>   methods: {
>     //这里是es6对象里函数写法
>     a() {
>       console.log("a");
>     },
>     b() {
>       console.log("b");
>     },
>     one() {
>       console.log("one");
>       this.two();
>       this.three();
>     },
>     two() {
>       console.log("two");
>     },
>     three() {
>       console.log("three");
>     },
>     onEnter() {
>       console.log("mouse enter");
>     },
>     onLeave() {
>       console.log("mouse leave");
>     },
>   },
> };
> </script>
> ```

### **插槽与作用域插槽的区别是什么？**

>参考答案：
>
>插槽的作用是子组件提供了可替换模板，父组件可以更换模板的内容。
>
>作用域插槽给了子组件将数据返给父组件的能力，子组件一样可以复用，同时父组件也可以重新组织内容和样式。



### ***vue* 中相同逻辑如何进行抽离？**

>参考答案：
>
>可以使用 *vue* 里面的混入（*mixin*）技术。混入（*mixin*）提供了一种非常灵活的方式，来将 *vue* 中相同的业务逻辑进行抽离。
>
>例如：
>
>- 在 *data* 中有很多是公用数据
>- 引用封装好的组件也都是一样的
>- *methods、watch、computed* 中也都有大量的重复代码
>
>当然这个时候可以将所有的代码重复去写来实现功能，但是我们并不不推荐使用这种方式，无论是工作量、工作效率和后期维护来说都是不建议的，这个时候 *mixin* 就可以大展身手了。
>
>一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。说白了就是给每个生命周期，函数等等中间加入一些公共逻辑。
>
>**混入技术特点**
>
>- 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
>- 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
>- 值为对象的选项，例如 *methods、components* 和 *directives*，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。



### **如何监听 *pushstate* 和 *replacestate* 的变化呢？**

>参考答案：
>
>*History.replaceState* 和 *pushState* 不会触发 *popstate* 事件，所以我们可以通过在方法中创建一个新的全局事件来实现  *pushstate* 和 *replacestate* 变化的监听。
>
>具体做法为：
>
>```js
>var _wr = function(type) {
>   var orig = history[type];
>   return function() {
>       var rv = orig.apply(this, arguments);
>      var e = new Event(type);
>       e.arguments = arguments;
>       window.dispatchEvent(e);
>       return rv;
>   };
>};
>history.pushState = _wr('pushState');
>history.replaceState = _wr('replaceState');
>```
>
>这样就创建了 *2* 个全新的事件，事件名为 *pushState* 和 *replaceState*，我们就可以在全局监听：
>
>```js
>window.addEventListener('replaceState', function(e) {
>  console.log('THEY DID IT AGAIN! replaceState 111111');
>});
>window.addEventListener('pushState', function(e) {
>  console.log('THEY DID IT AGAIN! pushState 2222222');
>});
>```
>
>这样就可以监听到 *pushState* 和 *replaceState* 行为。

### 说一说自定义指令有哪些生命周期？

> 参考答案：
>
> 自定义指令的生命周期，有 5 个事件钩子，可以设置指令在某一个事件发生时的具体行为：
>
> - bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
> - inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
> - update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
> - componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
> - unbind: 只调用一次， 指令与元素解绑时调用。
>
> 钩子函数的参数 (包括 el，binding，vnode，oldVnode)
>
> - el: 指令所绑定的元素，可以用来直接操作 DOM 。
> - binding: 一个对象，包含以下属性：name: 指令名、value: 指令的绑定值、oldValue: 指令绑定的前一个值、expression: 绑定值的字符串形式、arg: 传给指令的参数、modifiers: 一个包含修饰符的对象。
> - vnode: Vue 编译生成的虚拟节点。
> - oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。



### *vue* 为什么采用异步渲染

> 参考答案：
>
> 因为如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染；所以为了性能考虑，*Vue* 会在本轮数据更新后，再去异步更新视图。


## 优化类

### ***vue* 中的 *spa* 应用如何优化首屏加载速度?**

> 参考答案：
>
> 优化首屏加载可以从这几个方面开始：
>
> - 请求优化：CDN 将第三方的类库放到 CDN 上，能够大幅度减少生产环境中的项目体积，另外 CDN 能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。
> - 缓存：将长时间不会改变的第三方类库或者静态资源设置为强缓存，将 max-age 设置为一个非常长的时间，再将访问路径加上哈希达到哈希值变了以后保证获取到最新资源，好的缓存策略有助于减轻服务器的压力，并且显著的提升用户的体验
> - gzip：开启 gzip 压缩，通常开启 gzip 压缩能够有效的缩小传输资源的大小。
> - http2：如果系统首屏同一时间需要加载的静态资源非常多，但是浏览器对同域名的 tcp 连接数量是有限制的(chrome 为 6 个)超过规定数量的 tcp 连接，则必须要等到之前的请求收到响应后才能继续发送，而 http2 则可以在多个 tcp 连接中并发多个请求没有限制，在一些网络较差的环境开启 http2 性能提升尤为明显。
> - 懒加载：当 url 匹配到相应的路径时，通过 import 动态加载页面组件，这样首屏的代码量会大幅减少，webpack 会把动态加载的页面组件分离成单独的一个 chunk.js 文件
> - 预渲染：由于浏览器在渲染出页面之前，需要先加载和解析相应的 html、css 和 js 文件，为此会有一段白屏的时间，可以添加loading，或者骨架屏幕尽可能的减少白屏对用户的影响体积优化
> - 合理使用第三方库：对于一些第三方 ui 框架、类库，尽量使用按需加载，减少打包体积
> - 使用可视化工具分析打包后的模块体积：webpack-bundle- analyzer 这个插件在每次打包后能够更加直观的分析打包后模块的体积，再对其中比较大的模块进行优化
> - 提高代码使用率：利用代码分割，将脚本中无需立即调用的代码在代码构建时转变为异步加载的过程
> - 封装：构建良好的项目架构，按照项目需求就行全局组件，插件，过滤器，指令，utils 等做一 些公共封装，可以有效减少我们的代码量，而且更容易维护资源优化
> - 图片懒加载：使用图片懒加载可以优化同一时间减少 http 请求开销，避免显示图片导致的画面抖动，提高用户体验
> - 使用 svg 图标：相对于用一张图片来表示图标，svg 拥有更好的图片质量，体积更小，并且不需要开启额外的 http 请求
> - 压缩图片：可以使用 image-webpack-loader，在用户肉眼分辨不清的情况下一定程度上压缩图片

### ***vue* 项目中的性能优化？**

> 直播课讲解

> 参考答案：
>
> **编码阶段**
>
> - 尽量减少 *data* 中的数据，*data* 中的数据都会增加 *getter* 和 *setter*，会收集对应的 *watcher*
> - *v-if* 和 *v-for* 不能连用
> - 如果需要使用 *v-for* 给每项元素绑定事件时使用事件代理
> - *SPA* 页面采用 *keep-alive* 缓存组件
> - 在更多的情况下，使用 *v-if* 替代 *v-show*
> - *key* 保证唯一
> - 使用路由懒加载、异步组件
> - 防抖、节流
> - 第三方模块按需导入
> - 长列表滚动到可视区域动态加载
> - 图片懒加载
>
> ***SEO* 优化**
>
> - 预渲染
> - 服务端渲染 *SSR*
>
> **打包优化**
>
> - 压缩代码
> - *Tree Shaking/Scope Hoisting*
> - 使用 *cdn* 加载第三方模块
> - 多线程打包 *happypack*
> - *splitChunks* 抽离公共文件
> - *sourceMap* 优化
>
> **用户体验**
>
> - 骨架屏
> - *PWA*
>
> 还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启 *gzip* 压缩等。