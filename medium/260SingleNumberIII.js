/**260. Single Number III
 * Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
 * 
 * Example:
 * Input:  [1,2,1,3,2,5]
 * Output: [3,5]
 * Note:
 * 
 * The order of the result is not important. So in the above example, [5, 3] is also correct.
 * Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let len = nums.length;
    let dict = {};
    let ans = [];
    for(let i = 0; i < len; i++){
        if(nums[i] in dict){
            dict[nums[i]]++;
        } else {
            dict[nums[i]] = 1;
        }
    }
    for(let val of nums) {
        if(val in dict){
            dict[val]++;
            if(dict[val] == 2) {
                ans.push(val);
            }
        }
    }
    return ans;
};

// Accepted!! 07.23.2020
// Runtime: 92 ms, faster than 31.39% of JavaScript online submissions for Single Number III.
// Memory Usage: 40.1 MB, less than 5.00% of JavaScript online submissions for Single Number III.

// example: [3,5]
console.log(singleNumber([1,2,1,3,2,5]));