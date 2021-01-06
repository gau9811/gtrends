function Counter(num, count) {
    let arr = []

    for (var i = 0; i < count.length; i++) {
        for (let j = num; j <= count.length; j++) {
            var check = count.slice(i++, j)
            if (check.length != 0) {
                arr.push(check)
            }


        }
    }
    return arr
}

function min(count) {

    let arr = []
    for (let i = 1; i <= count.length; i++) {
        arr.push(Counter(i, count))
    }
    console.log(arr)
}
console.log(min([1, 2, 3, 4]))