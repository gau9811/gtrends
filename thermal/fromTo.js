function sumOfDigits(from, to) {
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  let arr2 = arr
    .join("")
    .split("")
    .map((s) => parseInt(s))
    .reduce((a, b) => a + b);

  return arr2;
}
console.log(sumOfDigits(14, 112));
