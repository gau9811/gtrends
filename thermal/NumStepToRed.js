// function numberOfSteps(num, sum = 0) {
//     let number = 0
//     console.log(sum)
//     if (num !== 0) {
//         number = number + 1
//     } else {
//         return (sum)
//     }

//     if (num % 2 == 0) {
//         numberOfSteps(num / 2, sum = sum + 1)
//     } else {
//         numberOfSteps(num - 1, sum = sum + 1)
//     }

// };
// console.log(numberOfSteps(8))


let A = [1, 2, 3, 4, 5];
let B = [1, 2, 3, 4, 5];


let c = [...A, ...B]

console.log(c)