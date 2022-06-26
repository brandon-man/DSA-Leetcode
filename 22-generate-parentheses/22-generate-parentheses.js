/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
    
    function generatePara(str, open, close) {
        if (open === n && close === n) {
            return res.push(str);
        }
        
        if (open < n) {
            generatePara(str + '(', open+1, close);
        }
        
        if (open > close) {
            generatePara(str + ')', open, close+1);
        }
    }
    
    generatePara('', 0, 0);
    return res;
};