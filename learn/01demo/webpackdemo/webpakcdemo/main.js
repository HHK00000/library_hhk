require('./reset.css')

console.log('编译执行');
setTimeout(()=>{
    console.log('箭头函数-定时器触发')
},500);
let a1 =1;
let b2 = 2;
function sum(a,b){
    return a+b;
}
let result = sum(a1,b2);
console.log('watch')
// console.log('watch2')
console.log(result,'result');
console.log('server')