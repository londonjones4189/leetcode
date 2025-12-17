/*
optimized approach using javascript
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); 
    
    // Make map 
    for (let i = 0; i < nums.length; i++) { 
        map.set(nums[i], i); 
    }
    
    // Find complement
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) { 
            return [i, map.get(complement)];
        }
    }
    return [];
};