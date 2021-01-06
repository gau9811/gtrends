var exist = function (board, word) {

    var words = word.split('')
    let num = 0
    let arr = []
    for (let j = 0; j < board.length; j++) {
        for (let i = 0; i <= board.length; i++) {
            if (board[j][i]) {
                arr.push(board[j][i])
            }
        }
    }

    let i = 0
    while (i < word.length) {
        for (let j = 0; j < arr.length; j++) {
            if (words[i] === arr[j]) {
                console.log(words[i])
            }
        }
        i++
    }

}
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))