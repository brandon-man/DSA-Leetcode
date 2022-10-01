/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let match = target - nums[i];
        if(map.has(match)) {
            return [i, map.get(match)];
        }
        map.set(nums[i], i);
    }
};