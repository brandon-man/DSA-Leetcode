/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let [left, right] = [0, nums.length - 1];
    let res = [];
    
    for(let i = nums.length - 1; i >= 0; i--) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] * nums[left]
            left++;
        } else {
            res[i] = nums[right] * nums[right];
            right--;
        }
    }
    return res;
};