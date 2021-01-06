// var maxRotateFunction = function (A) {
//     var arr = []
//     let arr2 = []
//     for (let i = 0; i < A.length; i++) {
//         var B = A.shift()
//         A.push(B)
//         arr = [...A]
//         arr2.push(arr)
//     }

//     let arr3 = []
//     let arr4 = []
//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             arr3.push(arr2[i][j] * j)
//         }

//         arr4.push(arr3)
//         arr3 = []
//     }

//     return arr4.map(item => item.reduce((a, b) => a + b)).sort((a, b) => b - a)[0]

// };
// console.log(maxRotateFunction([4, 3, 2, 6, 5, 9, 5, 78, 6]))
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1))
console.log(set.has('1'))
console.log(set.has(1));