/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // min of 1 bananas and max piles
    let [left, right] = [1, Math.max(...piles)];
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let hourSpent = getHourSpent(mid, piles);
        
        if (hourSpent <= h) right = mid;
        
        if (h < hourSpent) left = mid + 1;
    }
    return right;
};

const getHourSpent = (mid, piles, hour = 0) => {
    for (let pile of piles) {
        hour += Math.ceil(pile / mid);
    }
    return hour;
}