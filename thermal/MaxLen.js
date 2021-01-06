// var getMaxLen = function (nums) {

//     let arr = []

//     for (let i = 2; i <= nums.length; i++) {

//         arr.push(nums.slice(0, i).reduce((a, b) => a * b))

//     }

//     let number = arr.sort((a, b) => b - a)[0]

//     if (Math.sign(number) > 0) {
//         return number
//     } else {
//         return 'number is negative'
//     }
// };
// console.log(getMaxLen([1, -2, -3, 4]))

console.log([3, 3, 3, 3, 5, 5, 5, 2, 2, 7].length)