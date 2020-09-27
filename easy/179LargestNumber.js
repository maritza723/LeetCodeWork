/**179. Largest Number
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer. *//**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let len = nums.length;
    nums.sort((a, b) => (b - a));
    let ans = nums.toString();
    // for (let i = 0; i < len; i++) {
    //     for (let j = i; j < run; j++) {
    //         newArr.push(nums[j]);
            
    //     }    
    // }
    console.log(ans)
    return ans;
};




// // example 1:
console.log(largestNumber([10,2]));
// console.log("answer should be: 210");

// // example 2:
// console.log(largestNumber([3,30,34,5,9]));
// console.log("answer should be: 9534330");

// // example 2:
// console.log(largestNumber([3,30,34,95,89]));
// console.log("answer should be: 958934330");