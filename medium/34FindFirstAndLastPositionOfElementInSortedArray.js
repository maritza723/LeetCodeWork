/**34. Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * 
 * If target is not found in the array, return [-1, -1].
 * 
 * Follow up: Could you write an algorithm with O(log n) runtime complexity?
 * 
 *  
 * 
 * Example 1:
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 * 
 * Example 2:
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 * 
 * Example 3:
 * Input: nums = [], target = 0
 * Output: [-1,-1] *//**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length;
    // if(len == 0){ return [-1,-1]};
    // if(len == 1  && nums[0] == target){ 
    //     return [0,0]; 
    // } else if (len == 1 && nums[0] !== target){
    //     return [-1,-1];
    // }

    let ans = [];
    // let j = 0;
    for(let i = 0; i < len; i++){
        if(nums[i] == target){
            ans.push(i);
            // j = i;
            break;
        }
    }
   let end = ans[0];
    for(let i = len - 1; i > end; i--){
        if(nums[i] === target){
            ans.push(i);
            break;
        }
    }
    if(ans.length == 0){
        ans.push(-1);
        ans.push(-1);
    } else if(ans.length == 1){
        ans.push(ans[0]);
    }
    return ans;
};

// Accepted!! 04.29.2021
// Runtime: 84 ms, faster than 31.77% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
// Memory Usage: 39.7 MB, less than 57.77% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.


// console.log(searchRange([5,7,7,8,8,10], 8) + " == [3,4]");
// console.log();
// console.log(searchRange([5,7,7,8,8,10], 6) + " == [-1,-1]");
// console.log();
// console.log(searchRange([], 0) + " == [-1,-1]");

