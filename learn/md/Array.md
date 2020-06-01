Array
    - JavaScript的 Array 是用于构造数组的全局对象， 数组是类似于列表的高阶对象
    - Array()的构造器会根据给定元素创建一个数组 但是当仅有一个参数且为自然数时例外 此时创建一个 length为参数的空数组 empty*params
Array属性
    - Array.length Array的实例属性 是一个无符号32bit整数 一个 0 到 2e32-1 的整数 0 - Math.pow(2,32)-1
    - Array.prototype[@@unscopables] arr[Symbol.unscopables]Symbol 属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 with 语句绑定的环境中
Array方法
    -Array私有方法
        + Array.from() 类数组转为标准数组
        + Array.isArray()  判断是否是一个数组  //底层是根据什么判断的，为什么把数组原型挂在obj上 依然不是数组? 
        + Array.of()    根据参数生成一个数组 对参数没有数量和类型的限制
    - Array原型方法 Array.prototype
        + Array.prototype.concat 
            + 语法 var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
            + 解释 合并两个或多个数组 不改变原来的数组 返回一个新数组 参数可以是任意值 传二维数组需多套一层 只一层数组会结构后合并
        + Array.prototype.copyWithin 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
            + 语法 arr.copyWithin(target[, start[, end]])
            + 解释 从index为target的位置开始 把index为start到end的元素复制覆盖上去
    
