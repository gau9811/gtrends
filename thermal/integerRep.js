let arr = []

var integerReplacement = function (n) {


    let num = []

    if (n) {
        arr.push(1)
    }

    if (n == 1) {
        return arr.length - 1
    }



    if (n % 2 == 0) {
        let num1 = n / 2

        integerReplacement(num1)
    } else {
        let num2 = n + 1
        integerReplacement(num2)
    }




};
console.log(integerReplacement(8))