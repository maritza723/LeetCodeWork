/**1748. Sum of Unique Elements
 * You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
 * 
 * Return the sum of all the unique elements of nums.
 * 
 * Example 1:
 * Input: nums = [1,2,3,2]
 * Output: 4
 * Explanation: The unique elements are [1,3], and the sum is 4.
 * 
 * Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: 0
 * Explanation: There are no unique elements, and the sum is 0.
 * 
 * Example 3:
 * Input: nums = [1,2,3,4,5]
 * Output: 15
 * Explanation: The unique elements are [1,2,3,4,5], and the sum is 15. *//**
* @param {number[]} nums
* @return {number}
*/
var sumOfUnique = function (nums) {
    let len = nums.length;
    let dict = {};
    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] in dict) {
            dict[nums[i]]++;
        } else { dict[nums[i]] = 1; }
    }
    // console.log(dict);

    for (let i = 0; i < len; i++) {
        if (dict[nums[i]] == 1) {
            // console.log(nums[i]);
            sum += nums[i];
            // console.log(sum);
        }
    }
    return sum;
};

// Accepted!! 04.19.2021
// Runtime: 76 ms, faster than 82.01% of JavaScript online submissions for Sum of Unique Elements.
// Memory Usage: 38.6 MB, less than 71.95% of JavaScript online submissions for Sum of Unique Elements.

console.log(sumOfUnique([1,2,3,2]) + " == 4");
console.log();
console.log(sumOfUnique([1,1,1,1,1]) + " == 0");
console.log();
console.log(sumOfUnique([1,2,3,4,5]) + " == 15");
console.log();
console.log(sumOfUnique([10, 4, 10, 9, 5]) + " == 18");

    // for (key in dict){
    //     if (dict[nums[i]] == 1){ 
    //         console.log(nums[i]);
    //         sum += nums[i]; 
    //         console.log(sum);        
    //     }
    //     i++;
    // }
