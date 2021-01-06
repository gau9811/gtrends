function toeplitz(n) {

    let num = 0
    var j = 0
    let num2 = 1
    var m = 0
    var d = 0
    for (let i = 1; i < n.length; i++) {

        d = i
        console.log(n[i][m++])

    }

    for (let i = 0; i < n.length; i++) {

        m = i
        console.log(n[i][m++])

    }

    while (num < 4) {
        for (let i = 0; i < n.length; i++) {
            console.log(n[i][j = j + 1])
        }
        num++
        j = num2++

    }


}

console.log(toeplitz([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))