/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    
    for (let num of nums) {
        if (set.has(num - 1)) continue;
        
        let max = 1;
        while (set.has(num + 1)) {
            num++;
            max++;
        }
        longest = Math.max(longest, max);
    }
    return longest;
};

/**
* find the longest of the conseq and update it
* check array if it is conseq
* create a max variable of 1
* check in the set if there is a number next to it
* move to next number and increment max
* check if max or longest is bigger
*/