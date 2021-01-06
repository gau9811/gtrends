// function score(dice) {

//     var one_To_Hundred = 0
//     var Two_To_Hundred = 0
//     var three_To_Hundred = 0
//     var four_To_Hundred = 0
//     var five_To_Hundred = 0
//     var six_To_Hundred = 0
//     var one_To_Thousand = 0

//     for (let i = 0; i < dice.length; i++) {
//         if (dice[i] === 4) {
//             if (four_To_Hundred <= 3) {
//                 four_To_Hundred += 1
//             }
//             if (four_To_Hundred == 3) {
//                 return 400
//             }
//         }
//     }
//     console.log(four_To_Hundred)
// }
// console.log(score([2, 4, 4, 5, 4]))


// code hoisted
// name = 5

// console.log(firm())

// console.log(name)

// var name
// function firm() {
//     return 'hi'
// }

// //iife
// (function () {
//     return 'd'
// }
// )();



function bike(model, car) {
    this.car = car
    this.model = model
}

bike.prototype.getModel = () => {
    return `this is ${this.car} and model is ${this.model}`
}


let car = new bike(2020, 'pagani')
console.log(car.getModel())

class checkModel {
    constructor(model) {
        this.model = model == undefined ? 45 : model
    }

    getmodel() {
        return this.model
    }
}

class checkYear extends checkModel {
    constructor(car, model) {
        super(model)
        this.car = car
    }
    getyear() {
        return this.model
    }

}


let checkmodel = new checkYear('ecosport', 10)
console.log(checkmodel.getyear())