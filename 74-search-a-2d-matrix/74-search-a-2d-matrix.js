/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const [rows, cols] = [matrix.length, matrix[0].length];
    
    let [left, right] = [0, ((rows * cols) - 1)];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // to find row and col
        // mid / cols = row, mid % cols = col
        let [row, col] = [Math.floor(mid / cols), mid % cols];
        let match = matrix[row][col];
        
        if (match < target) {
            left = mid + 1;
        } else if (match > target) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};