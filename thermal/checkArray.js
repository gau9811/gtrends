function name(params) {
    var num1 = 0
    var num2 = 1
    let arr = [num1, num2]
    for (let i = 0; i < params.length; i++) {
        if (i % 2 == 0) {
            console.log(arr.sort((a, b) => a - b).flat())
        }
        else {
            console.log(arr.sort((a, b) => b - a).flat())
        }
    }
    console.log(arr)
}
console.log(name([1, 2, 3, 5]))