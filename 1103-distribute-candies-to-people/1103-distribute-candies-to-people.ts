function distributeCandies(candies: number, num_people: number): number[] {
    const res: number[] = new Array(num_people).fill(0);
    
    for(let i = 1; candies > 0; i++) {
        res[(i - 1) % num_people] += Math.min(i, candies);
        candies -= i;
    }
    
    return res;
};