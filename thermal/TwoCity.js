function two_city(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i].sort((a, b) => a - b)[0]
    }
    return total
}
console.log(two_city([[10, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200], [400, 50], [30, 20], [30, 200]))