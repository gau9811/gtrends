function recall(number) {

    if (number !== 1) {

        let num = number.toString().split('')
        let arr = []

        for (let i = 0; i < num.length; i++) {
            arr.push(parseInt(num[i]))
        }

        let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            arr2.push(Math.pow(arr[i], 2))
        }

        let number2 = arr2.reduce((a, b) => a + b)

        recall(number2)

    }


    if (number == 1) {
        return true
    }

}
console.log(recall(68))