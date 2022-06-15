/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left+1, right+1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

/**
* create two pointers at opposite ends
* if left plus right = sum, return index + 1
* else if sum is less than target, move left pointer
* else move right
*/