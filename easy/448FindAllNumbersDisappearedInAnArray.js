/**448. Find All Numbers Disappeared in an Array
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * 
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 * 
 * Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 * 
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * 
 * Output:
 * [5,6]
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if(nums.length === 1){
        nums[0]++;
        return nums;
    }
    let len = nums.length;
    let dict = {};
    let ans = [];
    for(let i = len - 1; i >= 0; i--){
        if(nums[i] in dict){ 
            nums.splice(i,1);
        } else { 
            dict[nums[i]] = 1; 
        }
    }
    if(nums.length === 1 && nums[0] === 1){
        nums[0]++;
        return nums;
    }
    // console.log(dict);
    for(i = 1; i <= len; i++){
        if(i in dict){ 
            nums.splice(i,1);
        } else {
            ans.push(i);
        }
    }
    return ans;
};

// example: [5,6]
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));

// test 1: [2]
// console.log(findDisappearedNumbers([1,1]));

// test 2: [1]
// console.log(findDisappearedNumbers([2,2]));

// test 3: [3,4]
// test 2: [1]
// console.log(findDisappearedNumbers([1,1,2,2]));

// Accepted!! 06.28.2020
// Runtime: 696 ms, faster than 25.07% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
// Memory Usage: 49.9 MB, less than 18.54% of JavaScript online submissions for Find All Numbers Disappeared in an Array.

// DEADCODE 
// for(let i = len - 1; i >= 0; i--){
//     if(nums[i] in dict){ 
//         nums.splice(i,1);
//     } else { 
//         dict[nums[i]] = 1; 
//     }
// }
// if(nums.length === 1){
//     nums[0]++;
//     return nums;
// }
// console.log(dict);
// for(i = 1; i < len; i++){
//     if(i in dict){ 
//         nums.splice(i,1);
//     } else {
//         ans.push(i);
//     }
// }