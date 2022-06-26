/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  // only add open parenthesis if open < n
  // only add closed parenthesis if closed < open
  // valid only if open and close equals to n  
  let res = [];
    
    function generatePara(str, open, close) {
        if (open === n && close === n) {
            return res.push(str);
        }
        
        if (open < n) {
            generatePara(str + '(', open+1, close);
        }
        
        if (close < open) {
            generatePara(str + ')', open, close+1);
        }
    }
    
    generatePara('', 0, 0);
    return res;
};