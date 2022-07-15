/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let map = new Map();
    
    for (let i = 0; i < position.length; i++) {
        map.set(position[i], speed[i]);
    }
    
    position.sort((a, b) => a - b);
    
    let stack = [];
    
    stack.push(position.pop());
    
    while(position.length) {
        let fleetAhead = stack[stack.length - 1];
        let fleetBehind = position.pop();
        if ((target - fleetAhead) / map.get(fleetAhead) < (target - fleetBehind) / map.get(fleetBehind))
            stack.push(fleetBehind);
    }
    
    return stack.length;
}