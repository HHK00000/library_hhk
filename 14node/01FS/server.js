const fs = require('fs');
const xlsx = require('node-xlsx');

/* 配置项：读取的url文件、query词 文件、输出的文件名 */
const {
  OutpuName, // 必填
  UrlData,  // 必填
  XlsxData, // 必填
  QueryData, // 当 WriteQueryJson 为 true 时必填
  CopyName  // 非必填
} = {
  OutpuName: 'data.json', //输出文件的名字
  UrlData: 'url.json', // 影视id、封面：图片url数据 -- 来自 批量上传图片的接口返回值
  XlsxData: 'query.xlsx', // 按时
  QueryData: 'query.json', // 影视名、影视id、影视搜索词 --- 来自execl表格
  CopyName: ''  // 输出文件时，同步复制输出到此文件中 为空则不复制输出, 用于同步修改 输入的数据
};
/* 配置项：execl表格的表头 */
const {
  csv_name,
  csv_id,
  csv_query
} = {
  csv_name: '名称',
  csv_id: '海报名',
  csv_query: '搜索词'
}
/*配置项：是否从 图片url数据 url.json 中读取影视名 true 则从 图片url数据中读取，false则从上传的execl中读取*/
const ReadNameFromUrlData = true; //true 为信任已有数据，设置为false时，若 execl文件 里面的影视名有错误而id没有错误 则会导致页面中影视名也错误
const WriteQueryJson = false; // 是否在读取xlsx以后 同时写入 query.json 文件中



// 读取xlsx数据
const query_data = getXlsxData(XlsxData,0); // 从xlsx文件中读取query词数据

// 读取json数据  
// const query_data = getFileData(QueryData); // 从json文件中读取query词数据

// 读取json数据  
const url_data = getFileData(UrlData); // 从json文件中读取url数据  --- 来自 批量上传图片的接口返回值


// 将文件 合并处理  得到要写入的数据exportData
let exportData = url_data.map(item => {
  query_data.map(ite => {
    if (item.poster_id == ite[csv_id]) {
      item.poster_query = ite[csv_query];
      ReadNameFromUrlData?item.poster_name = item['poster_name']:item.poster_name = ite[csv_name];
    }
  })
  return item;
})
//检查数据 是否有id变化而导致内容缺失的
let examine = exportData.some(item=> {
  let bool = item.poster_name&&item.poster_id&&item.pic_url&&item.poster_query;
  return bool;
})
// 写入json数据
if(examine){
  writeData(OutpuName, exportData);
} else {
  console.log('合并后的数据有误!');
}


/**读取xlsx文件
 * filename: 读取的 xlsx文件名
 * tableIndex: 读取表格的 第几个工作表
 * return: 返回表格数据 已处理表头信息
 */
function getXlsxData(filename,tableIndex){
  let excelData = xlsx.parse(`./${filename}`); //使用第三方模块 xlsx 读取表格
  let excelArr = excelData[tableIndex]['data'];  //默认使用 表格内的第一个表 --- 数据为二维表格 第一项为表头信息
  let title = excelArr[0]; // 获取表头信息
  excelArr.shift(); // 删除表头
  // 把读取表格的二维数组转换成对象数组
  let temp = excelArr.map(item => {
    let obj = {};
    title.map((ite,index) => {
      obj[ite] = item[index];
    })
    return obj;
  })
  if(WriteQueryJson){
    let data = JSON.stringify(temp);
    // 将读取的excel数据 写入json文件
    fs.writeFileSync(`./${QueryData}`, data, 'utf8');
  }
  return temp;
}

/** 写入json文件
 * filename:输入 json文件 的文件名
 * return: 输出 json对象
 */
function getFileData(filename) {
  if (typeof filename !== 'string') {
    return {};
  }
  let data = fs.readFileSync(`${__dirname}/${filename}`, 'utf8');
  if (typeof data !== 'string') {
    return {};
  }
  data = JSON.parse(data) || {};
  return data;
}
/** 写入json文件
 * filename:输入json文件名
 * data:写入的数据
 * return: 无返回值，直接写入本地文件
 */
function writeData(filename, data) {
  if (typeof filename !== 'string') {
    return;
  }
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }
  if (typeof data !== 'string') {
    return;
  }
  // 以后加一个异常捕获
  fs.writeFileSync(`./${filename}`, data, 'utf8');
  if(CopyName){
    fs.writeFileSync(`./${CopyName}`, data, 'utf8');
  }
  console.log('写入数据完成！')
}
