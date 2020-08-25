# 在JS引擎中，我们可以按性质把任务分为两类，macrotask（宏任务）和 microtask（微任务）。

## 浏览器JS引擎中：
```
macrotask（按优先级顺序排列）: script(你的全部JS代码，“同步代码”）, setTimeout, setInterval, setImmediate, I/O,UI rendering
microtask（按优先级顺序排列）:process.nextTick,Promises（这里指浏览器原生实现的 Promise）, Object.observe, MutationObserver
```
```
JS引擎首先从macrotask queue中取出第一个任务，执行完毕后，将microtask queue中的所有任务取出，按顺序全部执行；
然后再从macrotask queue（宏任务队列）中取下一个，执行完毕后，再次将microtask queue（微任务队列）中的全部取出；
循环往复，直到两个queue中的任务都取完。
```
### 所以，浏览器环境中，js执行任务的流程是这样的：
```
第一个事件循环，先执行script中的所有同步代码（即 macrotask 中的第一项任务）
再取出 microtask 中的全部任务执行（先清空process.nextTick队列，再清空promise.then队列）
下一个事件循环，再回到 macrotask 取其中的下一项任务
再重复2
反复执行事件循环…
```
## NodeJS引擎中：
```
先执行script中的所有同步代码，过程中把所有异步任务压进它们各自的队列（假设维护有process.nextTick队列、promise.then队列、setTimeout队列、setImmediate队列等4个队列）
按照优先级（process.nextTick > promise.then > setTimeout > setImmediate），选定一个  不为空 的任务队列，按先进先出的顺序，依次执行所有任务，执行过程中新产生的异步任务继续压进各自的队列尾，直到被选定的任务队列清空。
重复2...
也就是说，NodeJS引擎中，每清空一个任务队列后，都会重新按照优先级来选择一个任务队列来清空，直到所有任务队列被清空。
```