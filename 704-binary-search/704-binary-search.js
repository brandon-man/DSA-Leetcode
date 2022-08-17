/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let mid = Math.floor(right - left / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            mid = mid - 1;
            right--;
        } else {
            mid = mid + 1;
            left++;
        }
    }
    return -1;
};

    // start from the middle
    // right + left / 2
    // if mid = target, return mid
    // if right > target, move pointer to left
    // else move pointer to right
    // return -1
    
    