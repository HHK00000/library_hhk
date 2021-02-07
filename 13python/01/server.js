const fs = require('fs');


let data = fs.readFileSync('./novel.json', 'utf8');
console.log(data);
if (typeof data != 'object') {
  data = JSON.parse(data);
}
let name_list = '',
  url_list = '';
data.map((item, index) => {
  name_list += item.title + '\n';
  url_list += item.picUrl + '\n';
})
fs.writeFileSync('./name.txt', name_list, 'utf8');
fs.writeFileSync('./url.txt', url_list, 'utf8');

// fs.writeFile('./name.txt', name_list, function (err) {
//   if (err) {};
//   console.log("write file ok");
// })