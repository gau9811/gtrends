var isPossibleDivide = function (nums, k) {
    let numSorted = [...new Set(nums)].sort((a, b) => a - b)

    console.log(numSorted)
    let o = 0
    for (let i = k; i < numSorted.length; i = i + k) {
        console.log(numSorted.slice(o, i))
        o = o + 3
    }
};
console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3))
