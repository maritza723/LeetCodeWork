/**189. Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] *//**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let len = nums.length;
    while(k > 0){
        nums.unshift(nums[len - 1]);
        nums.pop();
        k--;
    }
    return nums;
};

// Accepted!! 09.30.2020
// Runtime: 116 ms, faster than 34.10% of JavaScript online submissions for Rotate Array.
// Memory Usage: 39.9 MB, less than 5.00% of JavaScript online submissions for Rotate Array.


// console.log("[5,6,7,1,2,3,4]");
// console.log(rotate([1,2,3,4,5,6,7], 3)); 

// console.log("[3,99,-1,-100]");
// console.log(rotate([-1,-100,3,99], 2)); 




//         let len = nums.length;
//         let ans = [];
//         let i = len - k;
//         for (; ans.length < len; i++){
//             if(i == len){
//                 i = 0;
//             }
//             ans.push(nums[i]);
//         }
//         return ans;

// let len = nums.length;
//     let track = 0;
//     let i = len - k;
//     for (; track <= len; track ++){
//         if(i > len){
//             i = 0;
//         }
//         nums.push(nums[i]);
//         nums.splice(i, 1);
        
//     }
//     return nums;