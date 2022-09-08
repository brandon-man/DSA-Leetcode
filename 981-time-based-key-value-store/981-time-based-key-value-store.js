
class TimeMap {
    constructor() {
        this.map = {};
    }

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
set(key, value, timestamp) {
    const bucket = this.map[key] || [];
    
    this.map[key] = bucket;
    
    bucket.push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
get(key, timestamp, value = '', bucket = (this.map[key] || [])) {
    let [left, right] = [0, bucket.length - 1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const [guessValue, guessTimestamp] = bucket[mid];
        
        if (guessTimestamp <= timestamp) {
            value = guessValue;
            left = mid + 1;
        }
        if (timestamp < guessTimestamp) {
            right = mid - 1;
        }
    }
    return value;
  }
};
/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */