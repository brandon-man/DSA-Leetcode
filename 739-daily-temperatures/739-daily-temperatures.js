/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // create an array of temperatures filled with 0s and a stack
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    // loop through temperatures
    temperatures.forEach((temp, index) => {
    // while stack is not empty and temp is greater than top of stack
       while (stack.length && temp > stack[stack.length - 1][0]) {
        // pop from stack the temp and index
           const [poppedT, poppedI] = stack.pop();
        // reassign index of array to popped index - index
           res[poppedI] = index - poppedI;
       }   
    // push temp and index onto stack as an array    
        stack.push([temp, index]);
    })
    return res;
};