/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0, sell = 1;
    let maxP = 0;
    
    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            let profit = prices[sell] - prices[buy];
            maxP = Math.max(maxP, profit);
        } else {
            buy = sell;
        }
        sell++;
    }
    return maxP;
};