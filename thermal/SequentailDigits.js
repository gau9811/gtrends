var sequentialDigits = function (low, high) {
    let num = low.toString()
    let arr = []
    let arr3 = []
    for (let i = 1; i <= num.length; i++) {
        arr.push(i)
        arr3.push(1)
    }

    let num1 = parseInt(arr.join(''))
    let num2 = parseInt(arr3.join(''))


    let arr2 = []
    for (let i = num1; i <= high; i = i + num2) {
        console.log(i)
    }
};

console.log(sequentialDigits(123456, 2000000))