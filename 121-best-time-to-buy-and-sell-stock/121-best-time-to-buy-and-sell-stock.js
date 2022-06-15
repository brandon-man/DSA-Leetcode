/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0;
    let left = 0, right = 1;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxP = Math.max(maxP, profit)
        } else {
            left = right;
        }
        right++;
    }
    return maxP;
};

/**
* left is buy and right is sell
* move right first
* profit = sell - buy
* update current profit with highest
* else shift left to right
* move right pointer 
*/