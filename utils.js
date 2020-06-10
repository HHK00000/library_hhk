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
/*
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

/*
// 图片 字符串url 转 base64格式
//实现将项目的图片转化成base64
function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('canvas'),
　　ctx = canvas.getContext('2d'),
　　img = new Image;
　　img.crossOrigin = 'Anonymous';
　　img.onload = function(){
    　　canvas.height = img.height;
    　　canvas.width = img.width;
    　　ctx.drawImage(img,0,0);
    　　var dataURL = canvas.toDataURL(outputFormat || 'image/png');
    　　callback.call(this, dataURL);
    　　canvas = null; 
    };
　　img.src = url;
}
// 调用示例
var url = "static/img/js1.jpg";//这是站内的一张图片资源，采用的相对路径
utils.convertImgToBase64(url, function(base64Img){
    console.log(base64Img);
});
// */

/*
// 事件派发、blob转base64 ---  未测验 无blob数据

let input_dom = document.createElement('input');
input_dom.type='file';
// input_dom.value = url;
input_dom.addEventListener('change',readFile,false);
let evObj = document.createEvent('HTMLEvents');
evObj.initEvent( 'change', true, true );
input_dom.dispatchEvent(evObj);
function readFile(){
    console.log(this,'调用onchange事件')
    console.dir(this)
    var file=url;
    // if(!/image\/\w+/.test(file.type)){ 
    // 	alert("请确保文件为图像类型"); 
    // 	console.log(file.type);
    //     return false; 
    // }
    var reader=new FileReader();
    
    // let result = reader.readAsDataURL(file);
    // console.log(result,'result')
    // reader.function(){
    //     base64_code.innerHTML = this.result; 
    //     img_area.innerHTML = '<div>图片img标签展示：</div><img src="'+this.result+'" alt=""/>'; 
    // }
}

// */

/*
// 数组转对象 --- 不使用for map等任何循环
// [{name:'a',value:'a1'}] -> {a:'a1'}
function arrToObj([obj,...rest],res={}){
    if(obj){
        res[obj.name]=obj.value;
        return arrToObj(rest,res);
    }else return res;
}
// */