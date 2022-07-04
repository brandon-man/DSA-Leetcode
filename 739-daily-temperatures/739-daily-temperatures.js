/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    
    temperatures.forEach((temp, index) => {
        while (stack.length && temp > stack[stack.length - 1][0]) {
            const [stackT, stackIdx] = stack.pop();
            res[stackIdx] = index - stackIdx;
        }
        stack.push([temp, index]);
    })
    return res;
};