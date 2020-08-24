
var x = 1;
var obj = {x:2}
obj.fn=(function(x){
  this.x*=x++;
  return function(y){
    x+=y;
    this.x*=++x;
    console.log(x);
  }
})(obj.x);
var fn = obj.fn;
obj.fn(2);//6
fn(1);//8
console.log(obj.x,x);//fault:24 8 true: 12 16