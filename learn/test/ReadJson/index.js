window.onload = function () {
    var url = "/demo.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    // var url = "http://hanhuankang.com:8000/demo.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    //  8000需要跟本地端口号一致 hosts文件配置 127.0.0.1 指向 hanhuankang.com
    var request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            console.log(request,6666666666666);
            var json = JSON.parse(request.responseText);
            for(var i=0;i<json.length;i++){
                console.log(json[i].name);
            }
            console.log(json);
        }
    }
}