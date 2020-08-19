/**137. Single Number II
 * Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * Example 1:
 * 
 * Input: [2,2,3,2]
 * Output: 3
 * 
 * Example 2:
 * Input: [0,1,0,1,0,1,99]
 * Output: 99
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
        } else { dict[nums[i]] = 1; }
    }
    console.log(dict);
    for(val in dict){
        console.log
        if(val in dict){
            // console.log(dict[val]);
            dict[val]++;
            if(dict[val] == 2){
                return val;
            }
        } 
    }

};

// Accepted!! 07.24.2020
// Runtime: 132 ms, faster than 7.21% of JavaScript online submissions for Single Number II.
// Memory Usage: 40.9 MB, less than 5.88% of JavaScript online submissions for Single Number II.

// example 1: 3
 console.log(singleNumber([2,2,3,2]));

// example 2: 99
console.log(singleNumber([0,1,0,1,0,1,99]));