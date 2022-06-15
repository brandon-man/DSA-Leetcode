/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    
    for (let c of s) {
        map.set(c, map.get(c) + 1 || 1);
    }
    
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
};

/**
* if the length does not match, return false
* increment count of s and decrement count of t
* if the count balances out to 0, we know it's an anagram
* when looping through t, if at any point there is a zero count char 
* or it does not exist, we return false
*/