
const fs = require('fs');

let userData = fs.readFileSync('./user.json', 'utf8');
userData = JSON.parse(userData);
let passwordList = [];
userData.map(item => {
  passwordList.push({
    phone: item.phone,
    password: item.password
  });
})
// console.log(userData);

fs.writeFileSync('./code.json',JSON.stringify(passwordList),'utf8');
console.log(userData);

function getPhone(num = 11, begin = '') {
  if (typeof num != 'number') {
    return;
  }
  let length = 0;
  if (begin && typeof begin === 'string') {
    length = begin.length;
  }
  let str = begin;
  num = num - length;
  if (num <= 0) return;
  for (i = 0; i < num; i++) {
    item = parseInt(10 * Math.random());
    str += JSON.stringify(item);
  }
  return str;
}