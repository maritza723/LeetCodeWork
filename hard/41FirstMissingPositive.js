/** 41. First Missing Positive
 * Given an unsorted integer array, find the smallest missing positive integer.
 * 
 * Example 1:
 * Input: [1,2,0]
 * Output: 3
 * 
 * Example 2:
 * Input: [3,4,-1,1]
 * Output: 2
 * 
 * Example 3:
 * Input: [7,8,9,11,12]
 * Output: 1
 *  
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max = nums.length;
    let i = 0;
    let ans = 1;
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


// Example 1: 3
// console.log(firstMissingPositive([1,2,0]));

// example 2: 2
// console.log(firstMissingPositive([3,4,-1,1]));

// example 3: 1
// console.log(firstMissingPositive([7,8,9,11,12]));

// Accepted!!! 06.27.2020
// Runtime: 84 ms, faster than 16.91% of JavaScript online submissions for First Missing Positive.
// Memory Usage: 35.3 MB, less than 25.01% of JavaScript online submissions for First Missing Positive.