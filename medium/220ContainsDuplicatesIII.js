/**220. Contains Duplicate III
 * Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1], k = 3, t = 0
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,0,1,1], k = 1, t = 2
 * Output: true
 * Example 3:
 * 
 * Input: nums = [1,5,9,1,5,9], k = 2, t = 3
 * Output: false *//**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    for(let i = 0; i < len; i++){
        for(let j = i + 1; (j < i + k + 1) && (j < len); j++){
            // console.log("*i: " + i);
            // console.log("**j: " + j)
            // console.log("k: " + k);
           if(Math.abs(nums[i] - nums[j]) <= t){
            //    console.log("nums[i] - nums[j]: " + Math.abs(nums[i] - nums[j]));
            //    console.log("t: " + t);
               return true;
           }
        }
        
    }
    
    return false;
};


// Accepted!! 09.02.2020
// Runtime: 456 ms, faster than 35.87% of JavaScript online submissions for Contains Duplicate III.
// Memory Usage: 36.8 MB, less than 69.96% of JavaScript online submissions for Contains Duplicate III.

// console.log("true examples: ");
// example 1:
// console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0));

// example 2:
// console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2));

// console.log("false examples: ");
// example 3:
// console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3));