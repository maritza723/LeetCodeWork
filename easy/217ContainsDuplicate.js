/**217. COntains Duplicates
 * Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * 
 * Example 1:
 * Input: [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length <= 1){
        return false;
    }
    let dict = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in dict){
            return true;
        } else {
            dict[nums[i]] = 1;
        }
    }
    return false;
};

// Example 1: true
// console.log(containsDuplicate([1,2,3,1]));

// Example 2: false
// console.log(containsDuplicate([1,2,3,4]));

// Example 3: true
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

// Accepted!! 07.15.2020
// Runtime: 72 ms, faster than 87.31% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 43.6 MB, less than 21.35% of JavaScript online submissions for Contains Duplicate.