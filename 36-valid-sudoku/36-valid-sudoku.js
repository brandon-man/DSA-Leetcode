/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Set(),
        columns = new Set(),
        boxes = new Set();
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            let val = board[row][col];
            if (val === ".") continue;
            
            let rowKey = row + "r" + val;
            let colKey = col + "c" + val;
            let boxKey = Math.floor(row / 3) + "b" + Math.floor(col / 3) + "b" + val;
            
            if (rows.has(rowKey) || columns.has(colKey) || boxes.has(boxKey)) return false;
            
            rows.add(rowKey);
            columns.add(colKey);
            boxes.add(boxKey);
        }
    }
    return true;
};

/**
* find the rows, columns, and boxes
* if the board has empty, skip
* create keys for rows, columns, and boxes
* if it has the key, return false
* set the keys to the hash table
* return true
*/