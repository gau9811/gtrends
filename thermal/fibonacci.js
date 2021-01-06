function fib(n) {
    // var a = 0
    // let b = 1
    // for (let i = 0; i < n; i++) {
    //     a = a + b
    //     b = a - b

    // }

    // return a

    var a = 0
    let b = 1
    for (let i = 0; i < n; i++) {
        var temp = a + b
        a = b
        b = temp
    }

    return a

}

var t1 = performance.now()
fib(18)
var t2 = performance.now()

console.log((t2 - t1) / 1000)