var waysToMakeFair = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums.filter(num => num != nums[i]))
    }
    let arr2 = []

    for (let i = 0; i < arr.length; i++) {
        let arr3 = []
        for (let j = 0; j <= arr[i].length; j++) {

            if (j % 2 == 0 || j == 0) {
                arr3.push(arr[i][j])
            }
        }
        arr2.push(arr3)
        arr3 = []
    }
    let num2 = arr2.map(item => item.reduce((a, b) => a + b))

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            console.log(num2[j] == arr[i++][1] ? 'fair' : 'unfair')
        }
    }
};
console.log(waysToMakeFair([2, 1, 6, 4]))
