/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
        let len = position.length;
    let map = new Map(), res = 0, lastTime = -1; // last time is the time last car reached target
    
    // store car position and its speed
    for(let i = 0; i < len; i++){
        map.set(position[i], speed[i]);
    }
    
    // sort cars with their position, with first car being the closest car to target
    const sortedPos = [...map.keys()].sort((a, b) => b - a);
    
    for(let i = 0; i < len; i++){
        let time = (target - sortedPos[i]) / map.get(sortedPos[i]);
        
        // case 1: if our curr car is fast and takes even less time to reach target then our last car, they will be merged
        // case 2: our current car takes more time to reach target, it cant merge with the last car it has to be a new fleet
        if(time > lastTime){ 
            res++;
            lastTime = time;
        }
    }
    
    return res;
};