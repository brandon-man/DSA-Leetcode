/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = s.replace(/[\W_]/g, "").toLowerCase();
    let left = 0, right = word.length - 1;
                                                 
    while (left < right) {
        if (word[left] !== word[right]) return false;
        left++;
        right--;
    }                    
    return true;
};

/**
* sanitize the word to remove all non alphanumeric chars
* check if any words at left and right pointer don't match
* return false if they don't
*/