/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
    
    let stack = [];
    let hash = {")" : "(",
                "}" : "{", 
                "]" : "["
               }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" ||  s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === hash[s[i]]) {
            stack.pop()
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

/**
* use a stack - LIFO
* use hash map to associate opening and closing parentheses
* if left parentheses, push in
* then check if right parentheses, pop if true
* if stack is empty, return true;
*/