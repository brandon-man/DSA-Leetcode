/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
     let hash = new Map()//Use a hash map so we dont need to do stupid array shit
    for(let i = 0; i<position.length; i++){
        hash.set(position[i], speed[i])
    }
    position.sort(function (a,b) {return a-b})//We need to sort array so we are looking at closest to farthest
    
    let stack = []
    
    stack.push(position.pop())
    
    while(position.length){
        let fleetAhead = stack[stack.length-1]
        let fleetBehind = position.pop()
        if((target-fleetAhead)/hash.get(fleetAhead) < ((target)-fleetBehind)/hash.get(fleetBehind)) stack.push(fleetBehind) //Distance/vel = time, compare time. If time ahead is greater than time behind, then car will be behind car ahead. Otherwise, push fleet
    }
    
    return stack.length
};