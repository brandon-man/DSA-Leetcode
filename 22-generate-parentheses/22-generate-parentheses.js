/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    function generateP(str, open, closed) {
        if (open === n && closed === n) {
            return res.push(str);
        }
        
        if (open < n) {
            generateP(`${str}(`, open+1, closed);
        }
        
        if (closed < open) {
            generateP(`${str})`, open, closed+1);
        }
    }
    
    generateP("", 0, 0);
        
    return res;
};

/**
* create an array
* create a function with three arguements: string, open and closed brackets
* if open and close = n, then return str pushed into array
* if open < n, generate open parenethesis
* if close < open, generate close parenthesis
* invoke function with empty string and 0s
*/