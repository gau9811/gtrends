function rot13(message) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let split = message.split("");
  let arr = [];
  for (let i = 0; i < alpha.length; i++) {
    for (let j = 0; j < split.length; j++) {
      if (alpha[i] === split[j]) {
        let jo = `${i},${split[j]}`;
        arr.push(jo);
      }
    }
  }

  let arr2 = [];
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let num = arr[j].length - 1;
      if (split[i] === arr[j][num]) {
        arr2.push(arr[j++]);
      }
    }
  }

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    arr3.push(parseInt(arr2[i]));
  }

  let arr4 = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 13) {
      arr4.push(arr3[i] + 13);
    } else {
      arr4.push(arr3[i] - 13);
    }
  }

  let arr5 = [];
  for (let i = 0; i < arr4.length; i++) {
    arr5.push(alpha[arr4[i]]);
  }

  return arr5.join("");
}
console.log(rot13("test"));
