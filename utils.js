/*防抖函数 */ //所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间

//1.非立即执行
/*
function debounce(func, wait){
    let timeout;
    return function (){
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.call(context,...args);
            // func.apply(context, args);
        },wait);
    }
}
// */
/*调用示例
<div id="content" style="height:150px;line-height:150px;text-align:center; color: #fff;background-color:#ccc;font-size:80px;"></div>
let num = 1;
let content = document.getElementById('content');
content.onmousemove = debounce(count,1000);
*/
// 2.立即执行
/* 
function debounce(func,wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout); //若定时器存在 此时连续触发事件 会清掉原来的定时器  但此时打印timeout仍为一个数字 所以callNow为fasle不会触发函数调用
        let callNow = !timeout;
        timeout = setTimeout(() => { //每次触发事件都会重新生成一个新的定时器  但是连续触发事件时只会重新给定时器赋值
            timeout = null;   //手动将timeout置为null 则下次如果在 wait 这个时间间隔内 如果没有再触发事件(即没有重新生成定时器) 则wait时间过后 callNow为true会再次触发绑定的事件
        }, wait)

        if (callNow) func.apply(context, args)
    }
}
// */
// 3.综合版
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
/*
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}
// */
/* 函数节流 */ //所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数 与防抖函数的区别是 不会在连续触发事件时重新计算n秒的时间
/*
// 1.时间戳版
function throttle(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}
//  */
// 2.定时器版
/*
function throttle(func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }
    }
}
// */
// 3.综合版
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
// /*
function throttle(func, wait ,type) {
    if(type===1){
        let previous = 0;
    }else if(type===2){
        let timeout;
    }
    return function() {
        let context = this;
        let args = arguments;
        if(type===1){
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        }else if(type===2){
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
// */