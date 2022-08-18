/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // rows = length of matrix, cols = first index of each arrays inside matrix
    const [rows, cols] = [matrix.length, matrix[0].length];
    // left = first pointer in array, right = rows * cols - 1
    let [left, right] = [0, ((rows * cols) - 1)];
    
    while (left <= right) {
        // ???
        const mid = (left + right) >> 1;
        const [row, col] = [(Math.floor(mid / cols)), (mid % cols)];
        const guess = matrix[row][col];
        
        if (guess === target) return true;
        
        if (guess < target) left = mid + 1;

        if (target < guess) right = mid - 1;
    }
    return false;
};