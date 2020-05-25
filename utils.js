/*防抖函数 */

//1.非立即执行
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
/*调用示例
<div id="content" style="height:150px;line-height:150px;text-align:center; color: #fff;background-color:#ccc;font-size:80px;"></div>
let num = 1;
let content = document.getElementById('content');
content.onmousemove = debounce(count,1000);
*/