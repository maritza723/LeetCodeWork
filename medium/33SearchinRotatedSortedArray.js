/**33. Search in Rotated Sorted Array
 * You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.
 * 
 * Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * If target is found in the array return its index, otherwise, return -1.
 * 
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * 
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * 
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1 *//**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length;
    if(nums[0] == target){ 
        return 0;
    } else if(nums[0] > target){
        for(let i = len - 1; i > 0; i--){
            if(nums[i] == target){ return i; }
        }
    } else { 
            for(let i = 1; i < len; i++){
                if(nums[i] == target){ return i; }
            }
    }
    return -1;
};

// Accepted!! 01.14.2021
// Runtime: 80 ms, faster than 70.16% of JavaScript online submissions for Search in Rotated Sorted Array.
// Memory Usage: 38.8 MB, less than 41.86% of JavaScript online submissions for Search in Rotated Sorted Array.

// console.log(search([4,5,6,7,0,1,2], 0) + " == 4");
// console.log();
// console.log(search([4,5,6,7,0,1,2], 3) + " == -1");
// console.log();
// console.log(search([1], 0) + " == -1");