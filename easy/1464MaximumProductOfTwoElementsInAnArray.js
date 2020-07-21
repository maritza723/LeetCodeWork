/**1464. Maximum Product of Two Elements in an Array
 * Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 *  
 * Example 1:
 * Input: nums = [3,4,5,2]
 * Output: 12 
 * Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
 * 
 * Example 2:
 * Input: nums = [1,5,4,5]
 * Output: 16
 * Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
 * 
 * Example 3:
 * Input: nums = [3,7]
 * Output: 12
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let len = nums.length;
    let max = nums[0];
    let max2 = 0;
    let j = 0;
    for(let i = 1; i < len; i++){
        if(nums[i] >= max){
            max = nums[i];
            j = i;
        } 
    }
    for(i = 0; i < len; i++){
        if(nums[i] >= max2 && i !=j){
            max2 = nums[i];

        } 
    }
    max--;
    max2--;
    console.log(max + "\t" + max2)
    max *= max2;
    return max;
};

// Accepted!! 07.20.2020
// Runtime: 96 ms, faster than 21.27% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
// Memory Usage: 36.5 MB, less than 32.95% of JavaScript online submissions for Maximum Product of Two Elements in an Array.

// // example 1: 12
// console.log(maxProduct([3,4,5,2]));

// // example 2: 16
// console.log(maxProduct([1,5,4,5]));

// // example 3: 12
// console.log(maxProduct([3,7]));

// // test 1: 36
// console.log(maxProduct([10,2,5,2]));

// // test 2: 72
// console.log(maxProduct([1,8,5,4,10,2,6,1,1,1,9]));