/**136. Single Number
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let len = nums.length;
    let dict = {};
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
                return val;
            }
        }
    }
};

//Accepted!! 07.24.2020
// Runtime: 124 ms, faster than 20.90% of JavaScript online submissions for Single Number.
// Memory Usage: 40.3 MB, less than 20.43% of JavaScript online submissions for Single Number.

// example 1: 1
console.log(singleNumber([2,2,1]));

// example 2: 4
console.log(singleNumber([4,1,2,1,2]));