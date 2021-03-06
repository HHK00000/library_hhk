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
// 回文字符串
/*
// 2.判断字符串是回文字符串
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
// 罗马数字转整数  //输入在0~3999之间
/*
function RomanToNum(str) {
    let mapList = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0,Max_Index,Max_Str,direction;
    let strList = str.split('');
    let RomanList = Object.keys(mapList);
    for(let i=RomanList.length-1;i>-1;i--){
        let item = RomanList[i];
        Max_Index = strList.indexOf(item);
        if(Max_Index>-1){
            Max_Str = item;
            break;
        }
    }
    Max_Index === 0?direction = 'right': direction= 'left';
    if(direction === 'right'){
        strList.map(item=>{
            result+=mapList[item];
        })
    }
    if(direction === 'left'){
        for(var i = 0;i< strList.length-1;i++){
            let item = strList[i];
            result +=mapList[item];
        }
        result = mapList[Max_Str] - result;
    }
    // console.log(result);
    return result;
}
console.log(RomanToNum('IX'));
//*/
/*
// 最长公共前缀
function publicPerfix(arr){
    let result = '',arrItem;
    for(var i=0;i< arr.length;i++){
        let item = arr[i];
        if(i===0){
            arrItem=item.split('');
        } else {
            let itemToArr = item.split('');
            let newArrItem = []
            for(var j=0;j<itemToArr.length;j++){
                if(itemToArr[j]!==arrItem[j]){
                    arrItem = newArrItem;
                    break;
                }
                newArrItem.push(itemToArr[j]);
            }
        }
    }
    result = arrItem.join('');
    console.log(result);
    return result;
}
publicPerfix(['asd','asc','aser']);
// */
/*
// 三数之和
function tripleAdd(arr){
    let result=[];
    for(let i=0;i<arr.length-2;i++){
        let numI = arr[i];
        for(let j=i+1;j<arr.length-1;j++){
            let numJ= arr[j];
            for(let k=j+1;k<arr.length;k++){
                let numK=arr[k];
                let sum = numI+numJ+numK;
                if(sum === 0){
                    result.push([numI,numJ,numK]);
                }
            }
        }
    }
    //result去重 [-1,0,1]和[1,-1,0]视为两个相同项
    if(result.length>1){
        for(let i=0;i<result.length-1;i++){
            let res1=result[i];
            let num1=res1[0],num2=res1[1],num3=res1[2];
            for(let j=i+1;j<result.length;j++){
                let res2 = result[j];
                //bool标识res1和res2是否为相同的两项
                let bool = res2.indexOf(num1)>-1&&res2.indexOf(num2)>-1&&res2.indexOf(num3)>-1;
                if(bool){
                    result.splice(j,1);
                    i--;
                    j--;
                }
            }
        }
    }

    console.log(result);
    return result;
}
tripleAdd([-1,0,1,2,-1,-4]);
// */
/*
// 电话号码的字母组合

function alphabet(params){
    let mapList = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }
    let result = [],resultItem = [];
    let arrPre = params.split('');
    for(let i=0;i<arrPre.length;i++){
        let item = arrPre[i]; //item 为数字2/9/4/3
        let letterList = mapList[item];
        resultItem.push(letterList);
    }
    

    result = resultItem;
    console.log(result);
    return result;
}
let str_alphabet = '2943';
alphabet(str_alphabet);
// */
/*

function alphabet(digits){
    if(digits.length == 0) return;
    let result = [];
    let numMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    for(let code of digits){
        let word = numMap[code];
        if(result.length >0){
            let temp = [];
            for(let char of word){
                for(let old of result){//三重for of 循环
                    temp.push(old+char);
                }
            }
            result = temp;
        }
        else {
            result.push(...word);
        }
    }
    console.log(result);
    return result;
}
let str_alphabet = '2943';
alphabet(str_alphabet);
// */


/* for 和 forEach哪个性能更好
// for 和 forEach哪个性能更好 --- 实测跟数组是否为empty有关 
let arr=Array(9000000);
arr.fill(0);//不往数组里面塞东西的话 forEach性能更好 反之 for性能更好
console.time('for');
for(let i=0;i<arr.length;i++){

}
console.timeEnd('for');
console.time('forEach');
arr.forEach(item=>{})
console.timeEnd('forEach');
//*/

/*
// 四数之和  arr = [2,0,-1，-1,3] target = 0 =>  [2,0,-1，-1]

function sunFourNum(arr, target) {
    //默认arr为数组且长度至少为4 target为一个number整数 不再做输入校验
    let arrList = [];
    for (let i = 0; i < arr.length - 3; i++) {
        let valueI = arr[i];
        for (let j = i+1; j < arr.length - 2; j++) {
            let valueJ = arr[j];
            for (let k = j+1; k < arr.length - 1; k++) {
                let valueK = arr[k];
                for (let m = k+1; m < arr.length; m++) {
                    let valueM = arr[m];
                    let sumFour = valueI + valueJ + valueK + valueM;
                    if (sumFour === target) {
                        let sumSingle = [valueI, valueJ, valueK, valueM];
                        //对数组内元素相同 顺序不同的元素进行去重 
                        let arrListClone = arrList.slice();
                        if(arrListClone.length ===0){
                            arrList.push(sumSingle);
                            continue;
                        }
                        arrListClone.map(item=>{
                            let repeat = item.includes(valueI)&&item.includes(valueJ)&&item.includes(valueK)&&item.includes(valueM);
                            repeat?null:arrList.push(sumSingle);
                        })
                    }
                }
            }
        }
    }
    console.log(arrList);
    return arrList;
}

let arr = [2, 1, 0,-1, 1,-2];
let target = 1;
sunFourNum(arr, target);
// */

// /* ---- 未完成
// 有效的括号
function effectBrackets(str){
    let result;
    for(let s of str){
        console.log(s);
    }

    return result;
}
let str_brackets = '({{[]}})';
effectBrackets(str_brackets);
// */

/*
//  ES6  实现输出两个数组中重复原素
let arr1 = [1,2,2,3,4],
    arr2 = [2,3,3,4,5];
let arrDouble = arr1.reduce(function(prev,cur,index,arr){
    // arr2.indexOf(cur)>-1?prev.push(cur):null;
    arr2.indexOf(cur)>-1?prev.push(cur):null;
    prev = Array.from(new Set(prev));
    return prev;
},[]);
console.log(arrDouble);
// */

/*
// ES6 实现 输入 abbbbbcddffbbb输出abcdfb
let str1 = 'abbbbbcddffbbb';
function  removalRepeat(str){
    return str.split('').reduce(function(prev,cur,index,arr){
        console.log(prev,cur,index,arr);
        cur === prev[prev.length-1]? null:prev.push(cur);
        index === str.length-1? prev = prev.join(''):null;
        return prev;
    },[]);
}
let str = removalRepeat(str1);
console.log(str);
//*/

/*
// 使用正则实现  电话号码中间四位星号隐藏
let phoneNum = '18788888888';
let encryption_phoneNum = phoneNum.replace(/^(\d{3})(\d{4})(\d{4})/,"$1****$3")
console.log(encryption_phoneNum);
// */

/*
// 打印html中所有标签
var s = "";
function travel(space,node){
    if(node.tagName){
        console.log(node.tagName);
        s += space + node.tagName + '<br/>';
    }
    var len = node.childNodes.length;
    for(let i=0;i<len;i++){
        travel(space+'|-',node.childNodes[i]);
    }
}
travel('',document);
document.write(s);

// */

// /*
// 打印0-10000之间的所有 "回文数"
console.log('test')
function findPalindromeNumber (max){
    let result = [];
    for(let i=0;i<=max;i++){
        let iStr = i+'';
        let jStr = iStr.split('').reverse().join('');
        if(iStr === jStr){
            result.push(i);
        }
    }
    return result;
}
let max = 10000;
let arr = findPalindromeNumber(max);
console.log(arr);
//  */