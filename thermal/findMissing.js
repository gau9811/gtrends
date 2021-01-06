function findMissNum(params) {
  let arr = [];
  for (let i = 0; i < params.length; i++) {
    for (let j = 1; j < params.length; j++) {
      arr.push(params[j] - params[i++]);
    }
  }

  let arr2 = [];
  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[i++] == arr[j] ? (num = arr[j]) : null;
    }
  }

  let find = params.pop();
  let arr3 = [];
  for (let i = 1; i <= find; i = i + num) {
    arr3.push(i);
  }
  return arr3;
}
console.log(findMissNum([1, 3, 5, 9, 11]));
