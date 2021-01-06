var maxArea = function(height) {
  let arrSort =  height.sort((a,b)=> b - a)

  let arr2 = []
   for (let j = 1;j < arrSort.length;j++) {
        let arr = []
        arr.push(arrSort[0], arrSort[j])
        arr2.push(arr)
        arr = []
   }

   console.log(height)
  
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))