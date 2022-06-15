/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let complement = target - current;
        
        if (map.has(complement)) {
            return [i, map.get(complement)]
        }
        map.set(current, i)
    }
};