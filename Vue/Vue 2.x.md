### MVVM

    MVVM是Model-View-ViewModel的缩写,
    在前端页面中，把Model用纯JavaScript对象表示，View负责显示，两者做到了最大限度的分离。
    把Model和View关联起来的就是ViewModel。ViewModel负责把Model的数据同步到View显示出来，还负责把View的修改同步回Model。

> MVVM的设计思想：关注Model的变化，让MVVM框架去自动更新DOM的状态，从而把开发者从操作DOM的繁琐步骤中解脱出来

### Vue2.x响应式数据/双向绑定原理
    简述： 
        Vue实例初始化的时候，Observer用于监听劫持所有的data属性，通过obeject.defineProperty为 data数据的每个属性添加get/set，这个过程中每个属性都有对应的dep->subs->watchers，进而更新数据；在有数据变化是，会调用dep.notify,遍历watcher，实现视图更新。compile是解析组件模板，初始化渲染视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。

    1、对象实现响应式：

    是在初始化的时候利用definePrototype的定义set和get过滤器，在进行 组件模板编译时实现water的监听搜集依赖项，当数据发生变化时在set中 通过调用dep.notify进行发布通知，实现视图的更新。
    
    2、数组实现响应式：

    对于数组则是通过继承重写数组的方法splice、pop、push、shift、unshift、sort、reverse、等可以修改原数组的方式实现响应式的，但是通过length以及直接利用item[index]方式修改数组是不能实现响应式的改变dom（这种两种方式涉及到数组的内部实现）。在数据更新后为了避免过于频繁的进行dom的操作，在vue中会将更新的dom进行批量操作，而不是直接有数据更新就刷新dom，vue将需要更新的dom压入异步队列记性批量操作，提高性能。

> https://www.jb51.net/article/142950.htm
> https://juejin.im/post/6844903709055401991#heading-2

### 