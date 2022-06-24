/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        switch (token) {
            case "+":
                stack.push(stack.pop() + stack.pop());
                break;
            case "-":
                stack.push(-stack.pop() + stack.pop());
                break;
            case "*":
                stack.push(stack.pop() * stack.pop());
                break;
            case "/":
                stack.push(Math.trunc(1 / stack.pop() * stack.pop()));
                break;
            default:
                stack.push(parseInt(token))
        }
    }
    return stack[0];
};