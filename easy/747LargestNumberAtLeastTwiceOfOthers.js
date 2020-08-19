/**747. Largest Number At Least Twice of Others
 * In a given integer array nums, there is always exactly one largest element.
 * 
 * Find whether the largest element in the array is at least twice as much as every other number in the array.
 * 
 * If it is, return the index of the largest element, otherwise return -1.
 * 
 * Example 1:
 * Input: nums = [3, 6, 1, 0]
 * Output: 1
 * Explanation: 6 is the largest integer, and for every other number in the array x,
 * 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 *  
 * Example 2:
 * Input: nums = [1, 2, 3, 4]
 * Output: -1
 * Explanation: 4 isn't at least as big as twice the value of 3, so we return -1. */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let len = nums.length;
    let indx = 0;
    let max = 0;
    for(let i = 0; i < len; i++){
        if(nums[i] >= max){
            max = nums[i];
            indx = i;
        }
    }
    nums.splice(indx, 1);
    for(let i = 0; i < len - 1; i++){
        if(nums[i] > (max/2)){
            return -1;
        }
    }
    return indx;
};

// Accepted!! 08.18.2020
// Runtime: 92 ms, faster than 28.73% of JavaScript online submissions for Largest Number At Least Twice of Others.
// Memory Usage: 36.9 MB, less than 32.05% of JavaScript online submissions for Largest Number At Least Twice of Others.

// // example 1: 1
console.log("example 1: ")
console.log(dominantIndex([3, 6, 1, 0]));
 
// // example 2: -1
// console.log("example 2: ")
console.log(dominantIndex([1, 2, 3, 4]));