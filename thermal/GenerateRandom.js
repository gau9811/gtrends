// function Genrate(number) {
//     let arr = []

//     for (let i = 1; i < 50; i++) {
//         let a = Math.floor(Math.random() * Math.floor(number))
//         let b = Math.floor(Math.random() * Math.floor(number))

//         arr.push([a, b])

//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[i][j] !== 0 ? arr[i++].splice(0, i) : null)
//         }
//     }

let obj = {
    done: true
}

obj.done = !obj.done
console.log(obj.done)
// console.log(Genrate(5))