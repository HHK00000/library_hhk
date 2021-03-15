let aaa;
try {
  fetch('./b.json')
  .then(res => {
    let temp = res.json();
    console.log(res,temp,777)
    return temp
  })
  .then(json=> {
    console.log(json,'json')
    aaa = json
    console.log(aaa)
    return json
  })
  .catch(err => {
    console.log(err,'err')
  })
} catch (err){
  console.log(err,'er11r');
}
console.log(aaa,'aaa')