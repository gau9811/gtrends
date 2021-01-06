var sort = (nums) => {
    let arr = []
    let j = 2
    for (let i = 1; i < nums.length; i++) {
        arr.push([nums[i], nums[j++]])
    }
    return arr.pop() ? arr : null
}

var threeSum = function (nums) {
    let arr = sort(nums).map(sort => { return sort.sort() })
    let num = [...arr]

    for (let i = 0; i < num.length; i++) {
        num[i].unshift(nums[0])
        console.log(i)
    }

    console.log(num)
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))