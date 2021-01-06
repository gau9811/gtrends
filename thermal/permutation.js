var permute = function (nums) {
   let arr2 = []
   let arr3 = []
   var arr = []
   for (let j = 0; j < nums.length; j++) {
      for (let i = 0; i < nums.length; i++) {
         if (nums[j] !== nums[i]) {
            arr.push(nums[i])
         }
      }
      arr2.push(arr)
      arr3.push(arr)
      arr = []
   }


   for (let i = 0; i < arr3.length; i++) {
      arr3[i].push(arr3[i].shift())
   }
};
console.log(permute([1, 2, 3]))