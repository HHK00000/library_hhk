const express = require('express'),
  route = express.Router(),
  path = require('path'),
  md5 = require('md5-node');
const fsPromise = require('../lib/myFs'),
  utils = require('../lib/utils');

/* 使用中间件 */
//在所有请求之前 先读取所需数据
route.use(async (req, res, next) => {
  req.$USER = await fsPromise.readFile(path.resolve(__dirname, '../mock/user.json'));
  req.$CODE = await fsPromise.readFile(path.resolve(__dirname, '../mock/code.json'));
  next();
})

// 登录处理
route.post('/login', (req, res) => {
  let {
    account,
    password,
    type = 1
  } = req.body;
  password = utils.againMD5(md5(password));
  let data, code = JSON.parse(req.$CODE),
    users = JSON.parse(req.$USER);
  //账号密码登录
  if (parseInt(type) === 1) {
    data = users.find(item => {
      return (item.name === account || item.phone === account) && item.password === password;
    })
  }
  //短信验证码登录
  if (parseInt(type) === 2) {
    data = code.find(item => {
      // return item.phone === account&&item.code === password&&utils.checkTime(item.time,30)
      let item_password = utils.againMD5(md5(item.password));
      return item.phone === account && item_password === password
    })
    if (data) {
      data = users.find(item => {
        return item.phone === data.phone;
      })
    }
    // 返回对应结果
    if (!data) {
      utils.responseInfo(res, {
        code: 1,
        codeText: 'account and password do not match!'
      });
      return;
    }
    // 如果登录成功 需要服务端记录登录态
    req.session.userId = parseInt(data.id);
    // 响应数据
    utils.responseInfo(res, {
      data: {
        id: data.id,
        name: data.name,
        phone: data.phone,
        email: data.email,
        sex: data.sex,
        city: data.city,
        experience: data.experience,
        ip: data.ip,
        joinTime: data.joinTime,
        dw_xinzhi: data.dw_xinzhi,
        logins: data.logins,
      }
    })
  }
})

// 校验是否登录
route.get('/login', (req, res) => {
  const userId = req.session.userId;
  if(!userId){
    utils.responseInfo(res, {
      code:1,
      codeText:'not logged in!'
    })
    return;
  }
  utils.responseInfo(res);
})

// 退出登录
route.get('/signout',(req,res)=> {
  req.session.userId = null;
  utils.responseInfo(res);
})

/* 接口调用 */
route.get('/info', (req, res) => {
  res.send('OK');
})

module.exports = route;