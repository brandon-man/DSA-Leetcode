/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height.length) return 0;
    // two pointers 
   let left = 0, right = height.length - 1;
    // counter
    let res = 0;
    
    let leftMax = height[left], rightMax = height[right];
    
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            res += leftMax - height[left]
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            res += rightMax - height[right];
        }
    }
    return res;
};