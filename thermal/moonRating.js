function moon(rate) {
  var check = rate.toString().split(".");

  var num = [];

  if (parseInt(check[0]) != 0 && parseInt(check[1]) > 8) {
    num = parseInt(check[0]) + 1;
  }
  let arr = [];

  if (parseInt(check[0]) != 0 && parseInt(check[1]) > 8) {
    for (let i = 0; i < num; i = i + 2) {
      console.log(i);
      arr.push("o");
    }
  }

  if (parseInt(check[0]) != 0 && parseInt(check[1]) > 2) {
    
  }
  let left = 10 - num;

  for (let i = 0; i < left; i = i + 2) {
    arr.push("x");
  }
  console.log(arr);
}
console.log(moon(5.9));
