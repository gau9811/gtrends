function factorial(num) {
  if (num === 0 || num === 1) {
    return "you cannot make fatorial of either 1 or 0";
  }
  var number = 1;
  for (let i = 1; i <= num; i++) {
    number = number * i;
  }
  return number;
}
console.log(factorial(5));
