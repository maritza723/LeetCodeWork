/**1. Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target && i != j){
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
    return arr;
};

 // example 1: [0, 1]
 console.log(twoSum([2, 7, 11, 15], 9));

 // test 1: [1, 2]
 console.log(twoSum([3,2,4], 6));
 
 // test 2: [1, 2]
 console.log(twoSum([2, 5, 5, 11], 10))

// Accepted!! 07.15.2020
// Runtime: 212 ms, faster than 12.59% of JavaScript online submissions for Two Sum.
// Memory Usage: 36.3 MB, less than 52.65% of JavaScript online submissions for Two Sum.