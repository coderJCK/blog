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