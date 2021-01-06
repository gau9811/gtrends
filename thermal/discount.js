function discount(type, year) {
  if (year > 1) {
    let discount = year * type;
    let number = discount * 0.2;
    let discounts = year * type;

    return discounts - number;
  } else {
    let discount = year * type;
    return discount;
  }
}
console.log(discount(15, 1));
