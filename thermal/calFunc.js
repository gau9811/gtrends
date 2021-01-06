function plus(n) {
  return {
    num1: n,
    cal: "plus",
  };
}
function minus(n) {
  return {
    num1: n,
    cal: "minus",
  };
}
function times(n) {
  return {
    num1: n,
    cal: "times",
  };
}
function dividedBy(n) {
  return {
    num1: n,
    cal: "divide",
  };
}

function zero(n) {
  if (!n) {
    return 0;
  }
  if (n.cal == "times") {
    return 0 * n.num1;
  }
  if (n.cal == "plus") {
    return 0 + n.num1;
  }
  if (n.cal == "minus") {
    return 0 - n.num1;
  }
  if (n.cal == "divide") {
    return 0 / n.num1;
  }
}
function one(n) {
  if (!n) {
    return 1;
  }
  if (n.cal == "times") {
    return 1 * n.num1;
  }
  if (n.cal == "plus") {
    return 1 + n.num1;
  }
  if (n.cal == "minus") {
    return 1 - n.num1;
  }
  if (n.cal == "divide") {
    return 1 / n.num1;
  }
}
function two(n) {
  if (!n) {
    return 2;
  }
  if (n.cal == "times") {
    return 2 * n.num1;
  }
  if (n.cal == "plus") {
    return 2 + n.num1;
  }
  if (n.cal == "minus") {
    return 2 - n.num1;
  }
  if (n.cal == "divide") {
    return 2 / n.num1;
  }
}
function three(n) {
  if (!n) {
    return 3;
  }
  if (n.cal == "times") {
    return 3 * n.num1;
  }
  if (n.cal == "plus") {
    return 3 + n.num1;
  }
  if (n.cal == "minus") {
    return 3 - n.num1;
  }
  if (n.cal == "divide") {
    return 3 / n.num1;
  }
}
function four(n) {
  if (!n) {
    return 4;
  }
  if (n.cal == "times") {
    return 4 * n.num1;
  }
  if (n.cal == "plus") {
    return 4 + n.num1;
  }
  if (n.cal == "minus") {
    return 4 - n.num1;
  }
  if (n.cal == "divide") {
    return 4 / n.num1;
  }
}
function five(n) {
  if (!n) {
    return 5;
  }
  if (n.cal == "times") {
    return 5 * n.num1;
  }
  if (n.cal == "plus") {
    return 5 + n.num1;
  }
  if (n.cal == "minus") {
    return 5 - n.num1;
  }
  if (n.cal == "divide") {
    return 5 / n.num1;
  }
}
function six(n) {
  if (!n) {
    return 6;
  }
  if (n.cal == "times") {
    return 6 * n.num1;
  }
  if (n.cal == "plus") {
    return 6 + n.num1;
  }
  if (n.cal == "minus") {
    return 6 - n.num1;
  }
  if (n.cal == "divide") {
    return 6 / n.num1;
  }
}
function seven(n) {
  if (!n) {
    return 7;
  }
  if (n.cal == "times") {
    return 7 * n.num1;
  }
  if (n.cal == "plus") {
    return 7 + n.num1;
  }
  if (n.cal == "minus") {
    return 7 - n.num1;
  }
  if (n.cal == "divide") {
    return 7 / n.num1;
  }
}
function eight(n) {
  if (!n) {
    return 8;
  }
  if (n.cal == "times") {
    return 8 * n.num1;
  }
  if (n.cal == "plus") {
    return 8 + n.num1;
  }
  if (n.cal == "minus") {
    return 8 - n.num1;
  }
  if (n.cal == "divide") {
    return 8 / n.num1;
  }
}
function nine(n) {
  if (!n) {
    return 9;
  }
  if (n.cal == "times") {
    return 9 * n.num1;
  }
  if (n.cal == "plus") {
    return 9 + n.num1;
  }
  if (n.cal == "minus") {
    return 9 - n.num1;
  }
  if (n.cal == "divide") {
    return 9 / n.num1;
  }
}

console.log(three(plus(four())));
