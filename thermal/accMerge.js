var serp2 = (accounts) => {
    return accounts.map((num) => num.splice(1))
}

var accountsMerge = function (accounts) {
    let flat = serp2(accounts)

    let num = 0
    let num2 = 0

    for (let i = 0; i < flat.length; i++) {
        for (let j = 0; j <= flat.length; j++) {
            if (flat[i][j] !== undefined) {
                if (flat[i][j] === flat[num][num2]) {

                    console.log(i)

                }
            }
        }
        num++
        num2++
    }


    console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]))
// hr@dytecodetechnologies.com