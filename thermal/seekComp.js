var countServers = function (grid) {

    let arr = []
    var num = 1
    var num2 = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {

            if (grid[i][j] == grid[i][num] && grid[i][num] == 1 && grid[i][j] == 1) {
                num2 = num2 + 1
            }
        }
        num++
    }

    

    console.log(num2 - 1)
};
console.log(countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]))
