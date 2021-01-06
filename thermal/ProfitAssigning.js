var maxProfitAssignment = function (difficulty, profit, worker) {
    let arr = []
    for (let i = 0; i <= difficulty.length; i++) {
        for (let j = 0; j < worker.length; j++) {
            if (difficulty[i] == worker[j]) {
                arr.push(difficulty[i])
            }
        }
    }


    let arr2 = [...arr, ...arr]

    var profits = []

    for (let i = 0; i < profit.length; i++) {
        for (let j = 0; j < difficulty.length; j++) {
            profits.push([difficulty[j], profit[i++]])
        }
    }

    let benefits = []
    for (let i = 0; i < profits.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (profits[i][0] == arr2[j]) {
                benefits.push(profits[i][1])
            }
        }

    }

    return benefits.reduce((a, b) => a + b)

};

console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7]))