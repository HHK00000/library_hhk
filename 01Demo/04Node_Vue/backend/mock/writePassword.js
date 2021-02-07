
const fs = require('fs');

let userData = fs.readFileSync('./user.json', 'utf8');
userData = JSON.parse(userData);
userData.map(item => {
  item.password = getPhone(12);
})
// console.log(userData);

fs.writeFileSync('./user.json',JSON.stringify(userData),'utf8');
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