// 没有调通------

var bytesPerPiece = 1024 * 1024; // 每个文件切片大小定为1MB .
var totalPieces;
//发送请求
function upload() {
    var blob = document.getElementById("file").files[0];
    var start = 0;
    var end;
    var index = 0;
    var filesize = blob.size;
    var filename = blob.name;

    //计算文件切片总数
    totalPieces = Math.ceil(filesize / bytesPerPiece);
    while(start < filesize) {
        end = start + bytesPerPiece;
        if(end > filesize) {
            end = filesize;
        }

        var chunk = blob.slice(start,end);//切割文件    
        var sliceIndex= blob.name + index;
        var formData = new FormData();
        // debugger
        // formData.append("file", chunk, filename);
        // debugger
        // console.log(sliceIndex,'formData');
        // console.dir(formData);
        // $.ajax({
        //     url: 'http://www.hanhuankang.com',
        //     type: 'POST',
        //     cache: false,
        //     data: formData,
        //     processData: false,
        //     contentType: false,
        // }).done(function(res){ 

        // }).fail(function(res) {

        // });
        // start = end;
        // index++;
    }
}