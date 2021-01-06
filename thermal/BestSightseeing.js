var maxScoreSightseeingPair = function (A, W) {

    if (A.length % W === 0) {
        let name = A.sort((a, b) => a - b)
        let j = 1

        let arr = []
        for (let i = 0; i <= name.length; i++) {

            if (name[i] === name[j]) {
                arr.push(name[i])
            }
            j++
        }
        // console.log(name)

        let num1 = 0
        let num2 = W - 1
        var arr2 = []
        arr2.push(name.slice(num1, W))
        for (let i = 0; i < name.length; i++) {
            num1 += 2,
            num2 += 3
            console.log(num1, num2)
            name.slice(num1, num2).length && name.slice(num1, num2).length !== 1 ? arr2.push(name.slice(num1, num2)) : null
        }
    }


    console.log(arr2)
};
console.log(maxScoreSightseeingPair([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))