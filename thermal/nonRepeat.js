function firstNonRepeatingLetter(s) {
   var spl = s.split('')
   var num = 0
   let arr = []
   while (num<spl.length) {
  
    for (let i = 0; i < s.length; i++) {
      if (spl[num] == s[i]) {
          arr.push(s[i])
      } 
     
    
    }
    num++
}
   
for (let i = 0; i < arr.length; i++) {
for (let j = 1; j < arr.length; j++) {
  if (arr[i++] != arr[j]) {
      return arr[j]
  }
}
}
}
console.log(firstNonRepeatingLetter('stress'))