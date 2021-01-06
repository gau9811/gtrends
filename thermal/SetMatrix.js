
function findIndex(mat) {
    let arr = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j <= mat.length; j++) {
            if (mat[i][j] == 0) {
                arr.push(j)
            }
        }
    }
    return arr
}


function setMatrixZero(matrix) {
    let num = findIndex(matrix)
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j <= matrix.length; j++) {
            if (matrix[i][j] == 0) {

                matrix[i].fill(0)
            }
        }
    }


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < num.length; j++) {
            matrix[i][num[j]] = 0
        }

    }
    return matrix
}
console.log(setMatrixZero([[2, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]))