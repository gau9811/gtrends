// var canArray = (arr, k) => {
//     let num = arr.length / 2
//     for (let i = 0; i <= arr.length / 2; i++) {
//         for (let j = arr.length - 1; j >= num; j--) {
//             console.log(arr[i++] + arr[j] % k === k)
//         }
//     }
// }

// console.log(canArray([-1, 1, -2, 2, -3, 3, -4, 4], 3))


var canArray = (arr) => {
    console.log(arr.map((item) => item.first_round + item.second_round + item.third_round).sort((a, b) => b - a))

}
console.log(canArray([
    {
        id: 1,
        first_round: 10,
        second_round: 5,
        third_round: 9
    },
    {
        id: 2,
        first_round: 7,
        second_round: 2,
        third_round: 7
    },
    {
        id: 3,
        first_round: 8,
        second_round: 4,
        third_round: 7
    },
]))