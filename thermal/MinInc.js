var minIncrementForUnique = function (A) {
    let sum = A

    let j = 1
    let arr = []
    let arr2 = []

    if (A) {
        let find = A.sort((a, b) => { return a - b })


        for (let i = 0; i <= find.length; i++) {
            if (find[i] == find[j] && find[i] !== undefined) {
                arr2.push(find[i])
            }
            if (find[i] !== find[j] && find[j] !== undefined) {
                arr.push(find[j])
            }
            j++
        }
    }


    arr.shift()


    for (let i = 0; i < A.length; i++) {
        if (A[i] == arr[i]) {
            A[i] = arr[i] + 1
        }
    }
    console.log(sum)
}
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7]))