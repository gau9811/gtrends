var canCompleteCircuit = function (gas, cost) {
    var num = 4
    var sum = gas[3] - cost[3] + gas[4]

    for (let i = 3; i < cost.length; i++) {
        // if (console.log(cost[i] == cost.pop())) {
        sum = sum - cost[i] + gas[0]
        console.log(sum)
        if (i == cost.length - 1) {
            num = 1
            for (let j = 0; j < i; j++) {
                console.log(sum = sum - cost[j] + gas[num])
                num++
            }

        }

    }

};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))