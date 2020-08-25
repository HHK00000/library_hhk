// example
// async function timeout(){
//   return 'Hello World!';
// }
// timeout().then(res => {
//   console.log('res:',res);
// }).catch(err => {
//   console.log('err:',err)
// })
// // let res =  timeout();
// // console.log(res);
// console.log('虽然我在后面 但我先执行')

// async function timeout(flag){
//   if(flag){
//     return 'Hello World!';
//   } else {
//     return 'My God failure';
//   }
// }
// // timeout().then(res => {
// //   console.log('res:',res);
// // }).catch(err => {
// //   console.log('err:',err)
// // })
// let res =  timeout();
// console.log(res);
// console.log('虽然我在后面 但我先执行')

/*
// [return_value] = await expression; await 只能在 async函数中使用

async function foo() {
  var a = await new Promise((resolve) => {
      setTimeout(() => {
          resolve(1);
      }, 2000);
  });
  console.log(a); // 第2秒时输出: 1

  try {
      var b = await new Promise((resolve, reject) => {
          setTimeout(() => {
              reject(2);
          }, 1000);
      })
  } catch (e) {
      console.log(e); // 第3秒时输出: 2
  }

  // 函数暂停2秒后再继续执行
  var sleep = await new Promise((resolve) => {
      setTimeout(() => {
          resolve('sleep');
      }, 2000);
  });

  var c = await 3;
  console.log(c); // 第5秒时输出: 3
}

foo();
// */

/* 一个休眠函数 休眠固定时间后 执行一个回调函数 
async function sleep(time,callback){
  var a = await new Promise(resolve => {
    setTimeout(() => {
      let val = callback();
      resolve(val);
    },time);
  })
  console.log(a);
}
function fn (){
  console.log('do something')
  return 'done'
}

sleep(3000,fn);
// */

// 让一个定时器 每隔一秒打印一个值
/* 1.Promise + async&await
async function timer (time,interval = 1000){ // time 是一个整数 在 time 时间内 每隔一秒 打印一次时间
  for(let i = 1;i <= time;i++){
    let a = await new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(i)
      },interval);
    })
    console.log(a);
  }
}
timer(5,1000)
// */

/* 2.Promise then + setTimeout
async function timer(time,interval = 1000){
  for(let i = 1;i <= time;i++){
    new Promise((resolve,reject) =>{
      resolve(i)
    }).then((res) => {
      setTimeout(() => {
        console.log(res)
      },i*interval); //保证每个一秒打印一次
    })
  }
}
timer(5,1000);
//*/

/* 3.Promise then + setTimeout  
async function timer(time,interval = 1000){
  for(let i = 1;i <= time;i++){
    new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve(i)
      },i*interval);
    }).then((res) => {
      console.log(res);
    })
  }
}
timer(5,1000);
// */