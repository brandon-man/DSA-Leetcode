/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // create an array filled with 0s
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    
    // iterate thru each temp
    temperatures.forEach((temp, index) => {
        // while stack is not empty and the top of the stack is less than temp
        while (stack.length && temperatures[stack[stack.length - 1]] < temp) {
            // pop prev index from stack
            let prev = stack.pop();
            // prev index assigned to result is now index minus prev index
            // calculates how many days until temp increases
            result[prev] = index - prev;
        }
        // push index into stack
        stack.push(index);
    });
    
    return result;
};