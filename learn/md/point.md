mvc和mvvm的区别和实现原理
    - mvvm 即model-view-viewmodel 模型-视图-视图模型  
        + 双向绑定  v-->vm-->m:数据绑定 m-->vm-->v:DOM事件监听 v与m不能直接通信 依靠vm在中间传输
        + vm及能监听数据的改变也能监听视图的变化
    - mvc 即 model-view-controller 模型-视图-控制器
        + 单向通信
    - 总结
        + MVC和MVVM的区别并不是VM完全取代了C，ViewModel存在目的在于抽离Controller中展示的业务逻辑，而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。也就是说MVVM实现的是业务逻辑组件的重用
vue渐进式框架
    - 1.只用来增加交互体验 --- 已有服务端应用
    - 2.增加业务逻辑  ---  (core+vuex+vue-route)
    - 3.构建大型应用  --- vue-cli  webpack
重绘和回流
    - DOM重绘 < DOM回流
    - DOM增删 元素宽高改变会引发回流 颜色 透明度触发重绘
防抖和节流
    - 防抖函数 用于解决事件频繁触发
---0525
cookie、session、sessionStorage、localStorage的区别
    - 