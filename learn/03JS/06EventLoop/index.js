//事件队列 微任务宏任务练习题

setTimeout(() => {
  console.log(1);
},20);
console.log(2);
setTimeout(() => {
  console.log(3);
},10);
console.log(4);
console.time('AA');
for(var i = 0;i < 999999999;i++){
  // do something  1800MS
}
console.timeEnd('AA');
console.log(5);
setTimeout(() => {
  console.log(6);
},8);
console.log(7);
setTimeout(() => {
  console.log(8);
},15);
console.log(9);
//  2 4 AA 5 7 9 3 1 6 8 
