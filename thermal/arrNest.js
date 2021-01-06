var arrayNesting = function (nums) {
    let i = 0
    let count = []
    while (i <= nums.length) {
        if (nums[i] !== 0) {
            count.push(nums[i])
            i = nums[i]
            count.push(nums[i])
            i++
        } else {

            for (let i = 0; i < count.length; i++) {
                if (count[i] == 0) {
                    return count.slice(0, i + 1)
                }
            }
        }

    }


}
console.log(arrayNesting([2, 4, 0, 3, 1, 6, 2]))