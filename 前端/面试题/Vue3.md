### 设计模式

### vue3新变化

#### 1.源码变化
  - **包管理方式**
    Vue2的源码是托管在src目录下的，依据功能拆分模块；
    monorepo：单个仓库，多个包的管理方式
  - **类型系统**
    vue1.x（纯js,无类型系统）；
    vue2.x（flow.js，类型系统）；
    vue3.x（typescript）
#### 2. 性能变化 
  -  **数据劫持优化**
    vue2.x：Object.defineProperty
    vue3.x：Proxy见面试题（vue3响应式）
  -  **diff算法优化**
    vue2.x：双端diff算法
    vue3.x：快速diff算法
  - **代码体积缩小**
    移除冷门功能(filter、inline-template)
    生产环境采用rollup构建，利用tree-shaking减少用户打包体积
  -  **编译优化**
    模板本质上是语法糖，最终会被编译器编译为渲染函数
#### 3. 语法API变化
  - **优化逻辑组织**
  Vue2.x：OptionsAPI, 逻辑代码按照data、computed...分类
  Vue3.x：OptionsAPI + CompositionAPI
  - **优化逻辑复用**
  Vue2.x：mixin缺点（不清晰的数据来源、命名空间冲突、隐式的跨mixin交流）
  - **其他变化**
  Vue2.x：通过实例化Vue创建应用，当一个页面存在多个Vue应用时，部分配置会影响所有的Vue应用
  Vue3.x：通过createApp，规避了上面Vue2.x的问题
#### 4. 引入RFC
Request For comments一种在软件开发和开源项目中常用的提案流程，用于收集社区对某个新功能、改动或标准的意见和建议。通过RFC,能够更好地倾听用户的需求和建议，从而开发出更加符合社区期待的功能和特性。


### vue3响应式
1. 实现拦截方式变化
  - Proxy针对一整个对象的多种操作，包括属性的读取、赋值、删除、原型的查看、函数调用等都能进行拦截，Proxy效率更高，拦截方式更灵活
2. 创建响应式方式变化
  - ref: proxy + Object.defineProperty
  - reactive: proxy
3. 依赖收集方式变化
  - vue2.x：Watcher + Dep
  - vue3.x：WeakMap + Map + Set(粒度更细，WeakMap键对应的是响应式对象，值是一个Map，Map的键是该对象的属性，值是一个Set,Set存储所有依赖于这个属于的effect函数， **WeakMap存Map, Map存Set, Set存依赖函数**)

### nextTick
本质是将一个回调函数包装为一个微任务放入到微任务队列。
 vue2.x 为了兼容旧浏览器，会根据不同环境选择不同异步策略
 vue3.x 只考虑现代浏览器环境，直接使用promise

### Vue运行机制
三大核心模块
- 响应式系统：
- 编译器：解析器、转换器、生成器
- 渲染器

### Composition API 和 Options API 相比有哪些优势？
1. 逻辑复用与代码组织
  - Options API 问题：在 Options API 里，一个组件的逻辑分散在 data、methods、computed 等不同选项中。当组件变得复杂，实现一个功能的相关代码会被拆得很零碎，难以管理和维护。例如，一个组件同时处理表单验证、数据获取和用户交互，这些逻辑会分散在多个选项中，难以快速定位和修改。
  - Composition API 优势：Composition API 允许开发者将相关逻辑组织在一起，形成一个个逻辑函数（也叫组合函数）。比如，将数据获取和缓存逻辑封装在一个组合函数中，在组件中引入该函数即可使用，提高了代码的可读性和可维护性。而且这些组合函数可以在多个组件间复用，避免了代码重复。
2. 类型推导与 TypeScript 支持
  - Options API 问题：在使用 Options API 结合 TypeScript 时，类型推导会变得复杂，尤其是在处理 this 上下文时，类型定义和推导容易出错，增加了代码的复杂度和维护成本。
  - Composition API 优势：Composition API 对 TypeScript 的支持更好，由于它是基于函数的，类型推导更加直观和简单，开发者可以更轻松地为函数和变量添加类型注解，提高代码的类型安全性。
3. 组件间逻辑复用
  - Options API 问题：在 Options API 中，主要通过 mixins 来实现组件间的逻辑复用，但 mixins 存在命名冲突、数据来源不清晰等问题，当多个 mixins 组合使用时，代码的复杂度会急剧上升。
  - Composition API 优势：Composition API 通过组合函数的方式进行逻辑复用，每个组合函数有明确的输入和输出，避免了命名冲突，并且数据来源清晰，提高了逻辑复用的灵活性和可维护性。

### watch 和 watchEffect
1. 触发时机
  - watch：是惰性的，也就是它不会在组件初始化的时候立即执行回调函数，只有当监听的数据源发生变化时才会执行。
  - watchEffect：是非惰性的，它会在组件初始化时立即执行一次回调函数，之后只要回调函数中所依赖的响应式数据发生变化，就会再次执行。
2. 监听方式
  - watch：需要明确指定要监听的数据源，可以是一个响应式对象的属性、一个 ref、一个 computed 属性，或者是一个返回值的函数。它可以精确地知道哪些数据的变化触发了回调。
  - watchEffect：不需要显式指定监听的数据源，它会自动收集回调函数中使用到的所有响应式数据作为依赖，只要这些依赖中的任何一个发生变化，就会重新执行回调函数。
3. 清理副作用
  - watch：在回调函数中可以通过返回一个清理函数来处理副作用清理，清理函数会在监听停止或者组件卸载时执行。
  - watchEffect：同样可以在回调函数中返回一个清理函数，用于清理副作用，不过它的清理时机还包括下一次回调执行之前。
4. 适用场景
  - 当你需要在特定数据发生变化时执行某些操作，并且希望精确控制监听的数据源时，适合使用 watch。例如，当用户输入框的值发生变化时，发送请求获取相关数据：
  - 当你不关心具体是哪个数据发生了变化，只需要在任何相关数据变化时执行一些操作，并且希望在组件初始化时就执行一次这些操作，使用 watchEffect 会更简洁。比如，在页面加载时以及相关数据变化时更新页面标题：

### teleport 组件
> teleport 是 Vue 3 引入的一个内置组件，它的主要作用是允许你在组件的逻辑结构保持不变的情况下，将组件的一部分内容渲染到 DOM 中的其他位置。简单来说，就是可以把组件里的内容 “传送” 到页面上指定的其他地方去渲染，而不影响组件本身的嵌套结构和数据逻辑。
使用场景

1. 模态框和弹出层
在开发模态框或者弹出层时，通常希望这些元素能够脱离当前组件的 DOM 结构，直接渲染到 <body> 元素下。因为模态框和弹出层往往需要覆盖整个页面，并且不受父元素样式（如 overflow: hidden）的影响。使用 teleport 可以轻松实现这一点，将模态框内容 “传送” 到 <body> 下进行渲染。
```vue
<template>
  <div>
    <button @click="isModalOpen = true">打开模态框</button>
    <teleport to="body">
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
          <h2>这是一个模态框</h2>
          <button @click="isModalOpen = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
``` 
在这个例子中，模态框的内容通过 teleport 被渲染到了 <body> 元素下，这样可以确保模态框能正常覆盖整个页面。
2. 页脚和侧边栏
> 当页面布局比较复杂，需要将某些组件的内容固定显示在页面的特定位置（如页脚、侧边栏）时，使用 teleport 可以方便地将这些内容渲染到合适的位置，而不影响组件的逻辑结构。


### 