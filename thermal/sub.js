function productSum(a, m) {
    for (let i = 0;i<a.length;i++){
        for (let j = m-1;j<a.length;j++){
               // if(a[i]!==a[j]){
                  console.log(a[i],a[j])
               // }
        }
    }
}
console.log(productSum([2,3,4,5],3))
