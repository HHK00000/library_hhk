function responseInfo(res, options) {
  let config = Object.assign({
    code: 0,
    codeText: 'OK!'
  }, options);
  res.status(200).type('application/json').send(config);
}

function againMD5(text) {
  if (typeof text === 'string' && text.length > 4) {
    // console.log(text);
    return text.substring(4,text.length - 4).split('').reverse().join('');
  }
}
/**
 * 计算以前的一个时间点 是否距离现在的时间 不超过一个固定时间段
 * @param {*} preTime  以前的一个时间点
 * @param {*} piece   从现在算起 往前推一段时间  单位为分钟
 */
function checkTime(preTime, piece = 0) {
  let now = new Date();
  now = now.getTime();
  let previous = new Date(preTime);
  previous = previous.getTime();
  piece = piece * 60 * 1000;
  let minus = now - previous;
  if (minus <= 0 || minus >= piece) {
    return false;
  }
  return true;
}

module.exports = {
  responseInfo,
  againMD5,
  checkTime
}