function num(n) {
  var num = n;
  let i = 0;

  while (i < 100) {
    if (num != 1 && parseFloat(num) == false) {
      num = (num - i) / 2;
      console.log(num);
    }
    if (num == 1) {
      i++;
      num = n;
    }
  }
}

console.log(num(16));
