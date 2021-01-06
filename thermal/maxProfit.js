var maxProfitAssignment = function (difficulty, profit, worker) {
    let main = []

    for (let i = 0; i < difficulty.length; i++) {
        worker.filter(num => num == difficulty[i] ? main.push(parseInt(num)) : null)
    }

    let arr = []
    let num = 0

    for (let i = 0; i < difficulty.length; i++) {
        if (difficulty[i] == main[num]) {
            arr.push(profit[i])
            num++
        }
    }
    console.log([...arr, ...arr].sort((a, b) => a - b))
};
console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7, 8]))