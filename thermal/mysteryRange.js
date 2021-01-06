var smallestRangeII = function (A, k) {
  let positive = k;
  let negative = k;

  let B = [];
  if (k.length == 1) {
    return a[0] + positive;
  } else {
    for (let i = 0; i < A.length - 1; i++) {
      B.push(A[i] + positive);
    }

    B.push(A.pop() - negative);
  }
};

console.log(smallestRangeII((A = [0, 10]), (K = 2)));
