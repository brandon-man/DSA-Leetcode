/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    // create prefix and postfix at 0
    let prefix = 1, postfix = 1;
    // iterate thru nums
    for (let i = 0; i < nums.length; i++) {
        // assign prefix to new array
        res[i] = prefix;
        prefix *= nums[i]
    }
    // iterate thru nums
    for (let j = nums.length - 1; j >= 0; j--) {
        // multiply postfix
        res[j] *= postfix;
        postfix *= nums[j]
    }
    return res;
};