/**268. Missing Number
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 * 
 * Example 1:
 * Input: [3,0,1]
 * Output: 2
 * 
 * Example 2:
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = nums.length;
    let i = 0;
    let ans = 0;
    while(i < max){
        if(ans == nums[i]){
            ans++;
            i = 0;
        } else {
            i++;
        }   
    }
    return ans;
};

// example 1: 2
console.log(missingNumber([3,0,1]));

// example 2: 8
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// Accepted!! 06.26.2020
// Runtime: 444 ms, faster than 5.13% of JavaScript online submissions for Missing Number.
// Memory Usage: 36.9 MB, less than 55.76% of JavaScript online submissions for Missing Number.
