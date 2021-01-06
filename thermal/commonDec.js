function convertFrac(first){
   let arr = [] 
  for (let i = 0; i < first.length; i++) {
   for (let j = 1; j < first.length; j++) {
     arr.push(first[i++][1] * first[j][1])
   }  
  }

 let num =  arr.sort((a,b)=>b-a)
 let arr2 = []
 for (let i = 0; i < first.length; i++) {
    arr2.push(`(${num[0]/first[i][1]}${num[0]})`)
 }
 return arr2.join('')
}
console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))