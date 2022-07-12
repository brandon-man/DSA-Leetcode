/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let hash = new Map();
    
    for (let i = 0; i < position.length; i++) {
        hash.set(position[i], speed[i]);
    }
    
    position.sort((a, b) => a - b);
    
    let stack = [];
    
    stack.push(position.pop());
    
    while (position.length) {
        let fleetAhead = stack[stack.length - 1];
        let fleetBehind = position.pop();
        if ((target - fleetAhead) / hash.get(fleetAhead) < ((target) - fleetBehind) / hash.get(fleetBehind))
            stack.push(fleetBehind)
    }
    return stack.length;
};