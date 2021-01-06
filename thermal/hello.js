function find(...chatBoyGetAnswer) {
  // let msg = "enter your account no";
  // if (msg == chatBoyGetAnswer[0]) {
  //   return "thanks for providing  your bank  account details";
  // } else if (msg == chatBoyGetAnswer[1]) {
  //   return "thanks for providing the account number";
  // } else {
  //   return "oops i don't get it what you want";
  // }\
  return chatBoyGetAnswer.flat();
}

console.log(find([["enter your account no"], "some details about bank info"]));
