/*
Brute force approach javascript
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []; 
    for (let j = 0; j < nums.length - 1; j++){
    for (let i = j + 1 ; i < nums.length ; i++){ 
        if (nums[i] + nums[j] == target){
            result.push(i, j);
        }
    }
    } 
    return result;
};