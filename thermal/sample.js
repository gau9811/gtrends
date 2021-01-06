let wait = (num) => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            if (typeof num === 'string') {
                reject('this is  string')
            }
            resolve('this have to wait first')
        }, 2000)
    })
}


function wait2() {
    console.log('and then second')
}


let callall = () => {
    let num = wait()
    console.log(num)
    let num2 = wait2()
    console.log(num2)
}

callall()