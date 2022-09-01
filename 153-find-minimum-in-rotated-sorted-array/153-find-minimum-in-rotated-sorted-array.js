/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        let target = Math.min(...nums);
        
        if (nums[mid] === target) return nums[mid];
        
        if (nums[left] <= nums[mid]) {
            if (target < nums[left] || target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > nums[right] || target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
};