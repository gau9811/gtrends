function perimeter(n) {
if(n==0){
    return 4
}
    var arr = [1,1]
    var num=0
    var num2=1
    for (let i = 1 ; i<=n ; i++){
      let p = arr[num] + arr[num2]
       num++
       num2++
       arr.push(p)
    }
    arr.pop()
   let num3 = arr.reduce((a,b)=>a+b)
    return 4*num3
}
console.log(perimeter(20))