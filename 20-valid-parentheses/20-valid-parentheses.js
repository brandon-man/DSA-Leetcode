/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hash = {")" : "(", "}" : "{", "]" : "["};
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (stack[stack.length - 1] === hash[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

/**
* create a hash table to associate opening and closing brackets
* if opening bracket, push into stack
* else if the last element in stack is equal to the associative value in the hash
* remove from stack
* else return false
* check if the stack is empty
*/