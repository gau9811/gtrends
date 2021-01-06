class Vector {
  constructor(a){
      this.a = a
  }
  


  add(param){

    if(this.a.length === param.a.length){
     let arr = []
    for (let i = 0; i < param.a.length; i++) {
          arr.push(this.a[i] + param.a[i])
    }
    return arr
   }else{
      return 'length not match'
   }

  }

  subtract(param){
     let arr = [] 
    if(this.a.length === param.a.length){
        let arr = []
       for (let i = 0; i < param.a.length; i++) {
             arr.push(this.a[i] - param.a[i])
       }
       return arr
      }else{
         return 'length not match'
      }
   
  }

  dot(param){
    let arr = [] 
   if(this.a.length === param.a.length){
       let arr = []
      for (let i = 0; i < param.a.length; i++) {
            arr.push(this.a[i] * param.a[i])
      }
      return arr.reduce((a,b)=>a+b)
     }else{
        return 'length not match'
     }
  
 }
 norm(){
    
  
       let arr = []
      for (let i = 0; i < param.a.length; i++) {
            arr.push(this.a[i] - param.a[i])
      }
      return arr
    }
}
let a = new Vector([1,2,3])
let b = new Vector([3,4,5])
let c = new Vector([5,6,7,8])

a.add(b)
a.subtract(b)
console.log(a.dot(b))
