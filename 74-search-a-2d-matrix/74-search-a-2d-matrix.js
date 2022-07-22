/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let top = 0, bot = rows * cols - 1;
    
    while (top <= bot) {
        const m = Math.floor((top + bot) / 2);
        const r = Math.floor(m / cols);
        const c = m % cols;
        
        if (matrix[r][c] === target) {
            return true;
        }
        
        if (matrix[r][c] < target) {
            top = m + 1;
        } else {
            bot = m - 1;
        }
    }
    return false;
};