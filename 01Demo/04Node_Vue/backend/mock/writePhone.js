const fs = require('fs');

let userData = fs.readFileSync('./user.json', 'utf8');
console.log(userData);
userData = JSON.parse(userData);
userData.map(item => {
  item.name = item.username;
  item.phone = getPhone(11, '187');
})
// console.log(userData);

fs.writeFileSync('./user.json',JSON.stringify(userData),'utf8');

function getPhone(num = 11, begin) {
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