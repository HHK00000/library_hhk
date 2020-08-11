// JS的6种继承方式
// /* 以下是需要继承的父类
// 定义一个动物类
function Animal (name,num) {
	// 属性
    this.name = name || 'Animal';
    this.num = 3||num;
    this.family = {
        children:this.num
    }
	// 实例方法
	this.sleep = function () {
		console.log(this.name + '正在睡觉');
	}
}
// 原型方法
Animal.prototype.eat = function (food) {
	console.log(this.name + '正在吃:' + food);
}
console.dir(Animal);
console.log(Animal,'父类');
// */

/* 1.原型继承
核心: 将父类的实例作为子类的原型
特点:  简单易于实现
缺点:  
    只能实现单继承
    引用属性也是共享的 (父类属性值为引用类型时 属性值的变化会引起所有子类示例的属性值的变化)
    创建子类实例时, 无法向父类构造函数传参
*/
// /*
function Cat(){

}
Cat.prototype = new Animal();
console.dir(Cat);
console.log(Cat,'子类');
let LittleNine = new Cat();
console.log(LittleNine,'子类示例');
Animal.family = {
    a:1
}
// */

/* 2.借用构造函数继承
核心: 使用父类的构造函数来增强子类实例, 等于是复制父类实例的属性给子类
特点: 
    子类实例不共享父类的引用属性
    创建实例时,可以向父类传递参数
    可以实现多继承
缺点:
    只能继承父类的实例的属性和方法, 无法继承父类的原型的属性和方法
    无法实现函数复用, 每个子类都有父类实例函数的副本, 影响性能
*/