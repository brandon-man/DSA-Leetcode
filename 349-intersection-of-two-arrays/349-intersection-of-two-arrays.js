/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let res = [];
        
    for (let num of set1) {
        if (set2.has(num)) {
            res.push(num);
        }
    }
    return res;
};

/**
* store numbers in array in hash
* iterate thru arrays, and store first array in hash
* if number appears in hash, return the numbers
*/