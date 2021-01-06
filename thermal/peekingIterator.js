class peekingIterator {
    constructor(iterator) {
        this.list = iterator
        this.list2 = []
        this.number = 0
    }

    next() {
        this.number += 1
        this.list2.push(this.list[this.number - 1])
    }

    peek() {
        console.log(this.list[this.list2.length])
    }
}

let initial = new peekingIterator([1, 2, 3])
initial.next()
// initial.next()

// initial.next()

console.log(initial)
