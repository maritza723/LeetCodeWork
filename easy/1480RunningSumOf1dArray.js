/**1480. Running Sum of 1d Array
 * Given an array nums. We define a running sum of an array as 
 * runningSum[i] = sum(nums[0]…nums[i]).
 * 
 * Return the running sum of nums.
 * 
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 * 
 * Example 2:
 * 
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let sum = 0;
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        ans.push(sum);
        // console.log(ans);
    }


    return ans;

};
// example 1: [1,3,6,10]
console.log(runningSum([1, 2, 3, 4]));

// example 2: [1,2,3,4,5]
console.log(runningSum([1, 1, 1, 1, 1]));

// Accepted! 06.19.2020
// Runtime: 72 ms, faster than 70.23% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Running Sum of 1d Array.
