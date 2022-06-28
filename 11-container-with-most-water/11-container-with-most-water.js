/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // find w * h
    // if left height is less than right, update max and move left pointer
    // else move update and move right pointer
    
    let maxA = 0;
    let left = 0, right = height.length - 1;
    
    while (left < right) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        if (height[left] < height[right]) {
            maxA = Math.max(maxA, (h*w));
            left++;
        } else {
            maxA = Math.max(maxA, (h*w));
            right--;
        }
    }
    return maxA;
};