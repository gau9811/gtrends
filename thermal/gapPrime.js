function checkPrime(n, to) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function gapPrime(n, f, t) {
  var check = [];
  for (let i = f; i < t; i++) {
    check.push(i);
  }

  let i = 0;
  let arr = [];
  while (i <= check.length) {
    if (checkPrime(check[i], t) == true) {
      arr.push(check[i]);
    }
    i++;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (Math.abs(arr[i++] - arr[j]) == n) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(checkPrime(304, 400
console.log(gapPrime(8, 300, 400));
