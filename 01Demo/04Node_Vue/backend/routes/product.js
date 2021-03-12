const express = require('express'),
  route = express.Router(),
  path=require('path');
const fsPromise = require('../lib/myFs'),
  utils = require('../lib/utils');

/* 使用中间件 */
  //在所有请求之前 先读取所需数据
route.use(async (req, res, next) => {
  req.$PRODUCT = await fsPromise.readFile(path.resolve(__dirname,'../mock/product.json'));
  // console.log(req.$PRODUCT);
  next();
})

/* 接口调用 */
route.get('/info', (req, res) => {
  let obj = {
    error: 0,
    status: 1,
    error_message: '',
    data: JSON.parse(req.$PRODUCT)
  }
  res.send(obj);
})

module.exports = route;