/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    
    if (nums.length < 3) return res;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
            res.push([nums[i], nums[left], nums[right]]);
            while (nums[left] === nums[left+1]) left++;
            while (nums[right] === nums[right-1]) right--;
            
            left++;
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
        }    
    }
    return res;
};

/**
* solve for a + b + c = 0
* left start at i+1 and right start at last
* can sort array because we can afford the O(n log n) since solution is a O(n2)
* loop ends at second last to not move with right
* if the current number is positive, stop loop
* skip if the index is more than 0 and the number is duplicate
* if current + left + right = target
* push the triplet numbers as an array into new array
* check if the left and right numbers are duplicates and move the pointers
* move pointers again 
* else if less than 0, move left pointer
* move right
*/