function findNine(n) {
let arr = []
for (let i = 1; i <= n; i++) {
  arr.push(i.toString())
}    
let len = arr.join('')
var nine = 0
 for (let i = 0; i < len.length; i++) {
        if (len[i] =='9') {
              nine = nine + 1
        } 
     
 }
return nine
}
console.log(findNine(98))
