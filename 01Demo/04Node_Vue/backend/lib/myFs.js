const fs = require('fs'),
  path = require('path');

function readFile(pathname, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    // pathname = path.resolve(__dirname, pathname);
    pathname = path.resolve(pathname);
    fs.readFile(pathname, encoding, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

function writeFile(pathname, data, encoding = 'utf8') {
  return new Promise((resolve, reject) => {
    if (typeof data !== "string") {
      data = JSON.stringify(data);
    }
    fs.writeFile(pathname, data, encoding, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  })
}
module.exports = {
  readFile,
  writeFile
}