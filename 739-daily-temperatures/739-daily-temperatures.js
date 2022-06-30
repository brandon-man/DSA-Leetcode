/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < temperatures.length; i++) {
        const currTemp = temperatures[i];
        
        while(stack.length && stack[stack.length - 1][0] < currTemp) {
            const [poppedTemp, poppedIndex] = stack.pop();
            
            res[poppedIndex] = i - poppedIndex;
        }
        
        stack.push([currTemp, i])
    }
    
    return res;
};