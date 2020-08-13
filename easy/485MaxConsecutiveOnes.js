/**485. Max Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * 
 * Example 1:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 *     The maximum number of consecutive 1s is 3.
 * Note:
 * 
 * The input array will only contain 0 and 1.
 * The length of input array is a positive integer and will not exceed 10,000 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let len = nums.length;
    let count = 0;
    let ans = 0;
    for(let i = 0; i < len; i++){
        if(nums[i] == 1){
            count++;
            if(count > ans){
                ans = count;
            }
        } else {
            count = 0;
        }

    }
    return ans;
};

// Accepted!! 08.13.2020
// Runtime: 68 ms, faster than 98.46% of JavaScript online submissions for Max Consecutive Ones.
// Memory Usage: 39.5 MB, less than 30.45% of JavaScript online submissions for Max Consecutive Ones.

// example: 3
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

// example: 3
console.log(findMaxConsecutiveOnes([1,1,1,1,1]));

// example: 3
console.log(findMaxConsecutiveOnes([0,0,0]));