var bagOfTokensScore = function (tokens, P) {

    var flip = false
    var num
    for (let i = 0; i <= tokens.length; i++) {
        if (!flip) {
            console.log(parseInt(tokens.splice(0, 1)))
            flip = true
        }


        if (flip) {
            console.log(parseInt(tokens.splice(tokens.length - 1)))
            flip = false
        }   

    }
};
console.log(bagOfTokensScore([100, 200, 300, 400], 200))