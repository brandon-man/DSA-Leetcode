/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    
    for (let str of strs) {
        let key = [...str].sort();
        if (!hash[key]) {
            hash[key] = [];
        }
        hash[key].push(str);
    }
    return Object.values(hash);
};

/**
* create a key with the value being the sorted str 
* if there is no value, create an empty array
* push the str into array
* return hash as an array
*/