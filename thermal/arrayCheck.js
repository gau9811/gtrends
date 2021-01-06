function array(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i++] == b[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(array([1, [1, 1]], [1, [1, 1]]));
