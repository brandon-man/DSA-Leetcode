/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = new Map();
    let bucket = [];
    let res = [];
    
    for (let num of nums) {
        freqMap.set(num, freqMap.get(num) + 1 || 1);
    }
    
    for (let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if (res.length === k) break;
    }
    return res;
};

/**
* store count of element in hash table
* sort into bucket array based on freq
* then going thru bucket array from the end, we want to push most frequent ele 
* if bucket has the ele
* we need to push all elements in bucket
* once the array length is equal to k, we stop
*/