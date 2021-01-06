function ArrayCount(Count) {
  let len = Count.map((s, i) => {
    return s.length;
  });

  let select = len.find((s) => Math.max(s));

  let arr = [];

  for (let j = 1; j <= select; j++) {
    arr.push(j);
  }

  let search = len.sort();

  return arr.filter((x) => search.indexOf(x) === -1);
}
console.log(ArrayCount([[1, 1, 3, 4, 5, 6], [1], [5, 8], [4, 8, 9, 7]]));
