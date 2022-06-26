/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // if open and close equals to n, return parentheses pushed into array
    // open < n, generate open p
    // close < open, generate close
    
    // create an array to push parentheses onto
    let res = [];
    
    // create a backtrack function to generate parentheses
    function generateP(str, open, close) {
        if (open === n && close === n) {
            return res.push(str);
        }
        if (open < n) {
            generateP(str + "(", open+1, close)
        }
        
        if (close < open) {
            generateP(str + ")", open, close+1);
        }
    }
    
    generateP("", 0, 0)
    
    return res;
};