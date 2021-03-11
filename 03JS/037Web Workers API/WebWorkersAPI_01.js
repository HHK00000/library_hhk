// 主线程业务代码

// 定义一个子线程实例
var worker = new Worker("WebWorkersAPI_02.js");

let type = Object.prototype.toString.call(worker); // "[object Worker]"  数据类型位Object class为 Worcker

// 向子线程发送数据 
worker.postMessage([
  {
    name:'斩风',
    id: 1
  },
  {
    name:'诛仙',
    id: 2
  },
]);

// 接收子线程传回来的数据
worker.onmessage = function (e) {
    console.log(e, '01 message');
};



// 共享线程
// var share_worker = new SharedWorker("WebWorkersAPI_02.js");

// share_worker.port.postMessage("message_share");

// share_worker.port.onmessage = function(e){
//   console.log(e, 'onmessage_share');
// }
