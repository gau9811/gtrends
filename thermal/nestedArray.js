var arrayNesting = function (nums) {

    let arr = []
    let i = 0
    while (i < nums.length) {
        arr.push(nums[i])
        i = nums[i]
        if (nums[i] == 0) {
            i = null
        }

    }

    arr.push(0)

    let obj = arr.filter(s => s != undefined)

    return { ...obj }
};
console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]))