

// js深拷贝一个对象
function deepClone(obj) {//递归 借用原型
    var target = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (typeof obj[key] === 'object') {
                target[key] = deepClone(obj[key]);
            } else {
                target[key] = obj[key];
            }
        }
    }
    return target;
}

// js深拷贝一个对象
function deepCopy(obj) {
    // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
    // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
    var copy = Object.create(Object.getPrototypeOf(obj));//创建新的空对象 且原型链属性指向原对象

    // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
    var propNames = Object.getOwnPropertyNames(obj);

    // Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
    propNames.forEach(function (name) {
        var desc = Object.getOwnPropertyDescriptor(obj, name);
        Object.defineProperty(copy, name, desc);
    });

    return copy;
}

// js深拷贝  多种数据类型  ---- 对函数支持不是太好
function DeepClone (obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    // if(typeof obj === 'function'){
    //     const func = (value) => { alert(value) };
    //     const funcStr = func + '';
    //     return new Function('return ' + funcStr)();
    // }
	var cpObj = obj instanceof Array ? [] : {};
	for (var key in obj) cpObj[key] = DeepClone(obj[key]);
	return cpObj;
}

let obj = {
    a: {
        b: {
            c: '3',
            func: anonymous
        }
    }
}
function anonymous(){
    console.log('随便打印点啥')
}
anonymous.a = 'a';
// let obj_clone = deepClone(obj);
console.log(deepClone(obj));
console.log(deepCopy(obj));
console.log(DeepClone(obj));
let a1 = deepClone(obj);
let a2 = DeepClone(obj);
a1.a.b.func();
a2.a.b.func();