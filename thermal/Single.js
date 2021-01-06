// function missing(s) {
// let numb = s.split("");
// let num2 = numb.map((s) => parseInt(s));

// let num = 1;
// for (let j = 0; j < num2.length; j++) {
//   if (num !== num2[j]) {
//     console.log(num);
//   }
//   num++;
// }

const squares = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * i);
  }
  return arr;
};

const range = (n, start, step) => {
  let arr = [];
  let num = start * step + 1;
  let num2 = 1;
  for (let i = 0; i < n; i++) {
    arr.push((num2 += 2));
  }

  return arr;
};

console.log(range(6, 3, 2));
// console.log(squares(5));
