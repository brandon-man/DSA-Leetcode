/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // find rectangle = h * w
    // update max
    let maxArea = 0;
    let left = 0, right = height.length - 1;
    
    while (left < right) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        let res = h * w;
        
        if (height[left] < height[right]) {
            maxArea = Math.max(maxArea, res);
            left++;
        } else {
            maxArea = Math.max(maxArea, res)
            right--;
        }
    }
    return maxArea;
};