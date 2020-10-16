/**912. Sort an Array
Given an array of integers nums, sort the array in ascending order.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5] *//**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let len = nums.length;
    // let dict = {};
    for (let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            if (nums[i] > nums[j]){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            }
        }
    }
    // console.log(nums);
    return nums;
    
};

// Accepted!! 10.13.2020
// Runtime: 3800 ms, faster than 8.71% of JavaScript online submissions for Sort an Array.
// Memory Usage: 43.9 MB, less than 5.98% of JavaScript online submissions for Sort an Array.

// console.log(sortArray([5,2,3,1]) + " == [1,2,3,5]");
// console.log();
// console.log(sortArray([5,1,1,2,0,0]) + " == [0,0,1,1,2,5]");
// console.log();

