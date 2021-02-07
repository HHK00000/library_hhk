==============个人中心 /user/xxx
1.登录
/login POST
@params
  account=xxx&password=xxx&type=1
    account 用户名或手机号
    password 密码或手机验证码(需要MD5加密)
    type 默认1代表用户名密码登录方式 2代表手机号和校验码登录方式
@return
  {
   code: 0成功 1失败
   codeText: 状态描述
   data: { //如果登录成功，返回登录者基本信息
    id: 用户ID
    name： 用户名
    phone: 用户手机号
    pic: 用户头像
   } 
  }
关于MD5加密:登录密码、支付密码等，
客户端处理方式：传给服务端时，一般要进行MD5加密
服务端处理方式：把收到的MD5进行二次加密
  简单处理;32位秘钥，去掉前四后四，剩余的倒序，然后再存入数据库；以后再登录时，只是匹配这去除掉前四后四的这24位 -- 即使服务器被攻克也不会泄露密码

关于登录态的存储
客户端存储登录态：
  使用vuex保持登录态  --- 刷新页面后消失
  使用缓存保持登录态  --- 缓存失效后也会消失
服务端存储登录态：
  登录成功后，可以把信息存储到 session/redis 中
  登录成功后，服务器种植session(sid: 和客户端简历链接的唯一标志符)，存储当前登录用户的ID
  返回给客户端信息(一旦服务器设置session，返回给客户端的信息在响应头中会待着set-cookie字段，存储的是sid)
  客户端发现set-cookie，会网本地设置一份，在下一次请求的时候，基于请求头Cookies把信息再次发给服务器
  服务器拿到通过cookies拿到sid，到指定的session中，找到userid，能找到证明登录过
2.校验是否登录
/login GET
@params
@return
  {
    code: 0已经登录 1未登录
    codeText： 状态描述
  }
3.退出登录
/signout GET
@params
@return
  {
    code: 0
    codeText: 状态描述
  }
4.注册新用户
/register POST
@params
  name=xxx&phone=xxx&password=xxx&passwordPay=xxx
@return
  {
    code: 0
    codeText
  }
5.获取用户信息
/info GET
@params
  id=xxx
    id:用户ID 不传则为获取当前登录用户的信息
@return
  {

  }
6.购物车信息
/cartInfo  GET
@params  
  id=xxx
@return
  {
    
  } 
7.获取当前用户指定状态下的订单信息
/list GET 
@params
  state=xxx
  0 全部(默认)
  1 未支付(等同于购物车)
  2 待收货(等同于已支付)
  3 待评价(等同于已收货)
  4 已评价
@return
  {
    code: 0
    codeText: 状态描述
    data: [
      {
        id: xxx,
        pid: xxx,
        count: xxx,
        state: xxx,
        info: {
          ...产品详细信息
        }
      }
    ]
  }