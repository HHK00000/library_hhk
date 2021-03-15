// 子线程业务代码

let main_data;

// 获取主线程传过来的数据
onmessage = function (e) {
  console.log(e.data,'02 onmessage');
  main_data = e.data;

  // 对主线程数据进行处理
  handleData(main_data);

  //发送给主线程
  postMessage(main_data)
};







function handleData(data){ //处理数据 添加书名号
  data.map(item=>{
    item.name=`《${item.name}》`
  })
}