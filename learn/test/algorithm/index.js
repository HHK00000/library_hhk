// 整数翻转
/*
function reverseNum(num) {
    let inputNum = typeof num === 'number';
    if (!inputNum) return;
    let numStr = num + '';
    let negative = numStr.charCodeAt(0) === '-'.charCodeAt(0);
    let numList = numStr.split('');
    let newNumList = [], strHeader = '';
    if (negative) {
        numList = numList.splice(1);
        strHeader = '-';
    } else {
        strHeader = '';
    }
    newNumList = reverseAndFilterArray(numList);
    console.log(newNumList, 'newNumList')
    return strHeader + newNumList.join('');
    function reverseAndFilterArray(arr) {//翻转数字数组 并且只过滤掉开头为0的项 后续为0的不过滤
        let newArr = [];
        let bool = false;
        for (let i = arr.length - 1; i > -1; i--) {
            let item = arr[i];
            if (item != 0) {
                bool = true;
            }
            if (bool) {
                newArr.push(item);
            }
        }
        return newArr;
    }
}
let num = -3210;
console.log(reverseNum(num));

// var reverse = function(x) {
//     x=x.toString()
//     var str=x.split("").reverse().join("")
//     str = parseInt(str)
//     if(str>2**31-1) return 0
//     return x < 0 ? -str:str;
// }

//*/
// 字符串转换整数
/*
function atoi(str) {
    //判断输入为字符串 且第一个字符是不是'-'
    if (typeof str !== 'string') {
        return;
    }
    let negative = false;
    if (str.indexOf('-') === 0) {
        negative = true;
        str = str.substring(1);
    }
    let transform_num = parseInt(str);
    const INT_MAX = 2 ** 31 - 1;
    if (isNaN(transform_num) || transform_num > INT_MAX || transform_num < INT_MAX * (-1) - 1) {
        return 0;
    }
    if (negative) {
        return transform_num * (-1)
    }
    return transform_num
}
let str = '-42px';
console.log(atoi(str));
// */
// 回文数
 /*
// 1.判断数字是回文数字
function palindrome(num){
    if(typeof num !== 'number'||num<0){
        return false;
    }
    let palindrome_num = num.toString().split('').reverse().join('');
    if(palindrome_num != num){
        return false;
    }
    return true;
}
console.log(palindrome(123321));
// */
// 2.判断字符串是回文字符串
/*

function palindromeString(str){
    if(typeof str !== 'string'){
        return false;
    }
    let palindrome_str = str.split('').reverse().join('');
    if(palindrome_str === str){
        return true;
    }
    return false;
}
console.log(palindromeString('123321'));
// */
// 盛最多的水
/*
function areaMax(arr){
    let bool = typeof arr === 'object'&& Array.isArray(arr) === true;
    if(!bool){
        return;
    }
    let squreList = [];
    for(var i = 0;i < arr.length-1;i++){
        for(var j =i+1;j<arr.length;j++){
            let width = Math.abs(j-i);
            let height = Math.abs(arr[i] - arr[j]);
            let squre = width*height;
            squreList.push(squre);
            // let obj = {squre,width,height,i,j};
            // squreList.push(obj);
        }
    }
    squreList.sort((a,b)=> {return b-a});
    console.log(squreList[0]);
    return squreList[0];
}
let arr = [1,8,6,2,5,4,8,3,7];
areaMax(arr);
// */
// 罗马数字转整数
