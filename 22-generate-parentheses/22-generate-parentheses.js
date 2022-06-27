/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // if open and close = n, end func and push str
    // open < n, generate open parenthesis
    // closed < open, generate closed p
    
    let res = [];
    
    function generateParenthesis(str, open, closed) {
        if (open === n && closed === n) {
            return res.push(str);
        } 
        
        if (open < n) {
            generateParenthesis(`${str}(`, open+1, closed);
        }
        
        if (closed < open) {
            generateParenthesis(`${str})`, open, closed+1);
        }
    }
    
    generateParenthesis("", 0, 0);
    
    return res;
};