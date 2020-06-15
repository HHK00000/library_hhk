let num = 1;
let content = document.getElementById('content');

function count() {
    content.innerHTML = num++;
};

// content.onmousemove = count;
// function debounce(func, wait){ //apply改变this指向 获取事件参数 e 
//     let timeout;
//     return function (){
//         let context = this;
//         let args = arguments;
//         if(timeout) clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.call(context,...args);
//             // func.apply(context, args);
//         },wait);
//     }
// }

// function debounce(func,wait) { //apply改变this指向 获取事件参数 e
//     let timeout;
//     return function () {
//         let context = this;
//         let args = arguments;

//         if (timeout) clearTimeout(timeout);
//         console.log(timeout)
//         let callNow = !timeout;
//         timeout = setTimeout(() => {
//             console.log(timeout,'222')
//             timeout = null;
//         }, wait)

//         if (callNow) func.apply(context, args)
//     }
// }

// function throttle(func, wait) {  //闭包 形成不销毁的私有作用域
//     let previous = 0;
//     return function() {
//         let now = Date.now();
//         let context = this;
//         let args = arguments;
//         if (now - previous > wait) {
//             func.apply(context, args);
//             previous = now;
//         }
//     }
// }

function throttle(func, wait) { // 闭包 返回值函数里用到的timeout不会被销毁
    let timeout;
    return function() {
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

// content.onmousemove = debounce(count,1000);

content.onmousemove = throttle(count,1000);