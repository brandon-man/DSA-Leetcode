/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // h >= piles.length
    let [ left, right ] = [1, Math.max(...piles)];
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const hourSpent = getHourSpent(mid, piles);
        
        if (h < hourSpent) {
            left = mid + 1;
        }
        
        if (hourSpent <= h) {
            right = mid;
        }
    }
    return right;
};

const getHourSpent = (mid, piles, hour = 0) => {
    for (let pile of piles) {
        hour += Math.ceil(pile / mid);
    }
    return hour;
}