function matchServer(arr) {
    let num = 0
    while (num <= arr.length) {
        arr.map((item) => {

                console.log(item[num])

            })
        num++
    }
}
console.log(matchServer([[1, 0], [1, 1]]))


