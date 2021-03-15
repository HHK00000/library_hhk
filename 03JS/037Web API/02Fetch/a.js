const myRequest = new Request('./lion.jpg');
console.log(myRequest,999);


// const myRequest = new Request('http://hanhuankang.com/images/animal/lion.jpg');
// console.log(myRequest,666);
let box = document.getElementById('box')
fetch(myRequest)
  .then(res => res.blob())
  .then(blob => {
    let src = URL.createObjectURL(blob);
    console.log(src,888)
    let img = document.createElement('img');
    img.src = src;
    box.appendChild(img);
  })