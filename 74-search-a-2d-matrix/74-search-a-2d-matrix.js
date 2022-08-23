/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // determine rows and cols
    const [rows, cols] = [matrix.length, matrix[0].length];
    // start from beginning and end of 2D matrix
    let [left, right] = [0, ((rows * cols) - 1)];
    
    while (left <= right) {
         const mid = Math.floor((left + right) / 2);
         const [row, col] = [(Math.floor(mid / cols)), (mid % cols)]
         const guess = matrix[row][col];
        
        if (guess === target) return true;
        
        if (guess < target) left = mid + 1;

        if (target < guess) right = mid - 1;
    }
    return false;
};