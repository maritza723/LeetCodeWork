/**66. Plus One
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 * Example 1:
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * Example 2:
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length;
    digits[len - 1]++;
    console.log(digits)
    for(let i = len - 1; i >= 0; i--) {
        if(digits[i] === 10) {
            digits[i] = 0;
            if(i===0){
                digits.unshift(1);
            } else {
                digits[i-1]++;
            }
        }
    }
    return digits;
};

// example 1: [1,2,4]
// console.log(plusOne([1,2,3]));

// example 2: [4,3,2,2]
// console.log(plusOne([4,3,2,1]));

// test 1:
// console.log(plusOne([9,9]));

// test 2:
// console.log(plusOne([1,9,9]));

// Accepted!! 06.24.2020
// Runtime: 68 ms, faster than 48.38% of JavaScript online submissions for Plus One.
// Memory Usage: 33.4 MB, less than 97.17% of JavaScript online submissions for Plus One.


// DEADCODE

// for(let i = len - 1; i > 0; i--){  
//     console.log("digits at line 36: [" + digits + "]")
//     if(digits[i] < 9){
//         let nums = digits[i];
//         nums++;
//         digits.pop();
//         digits.push(nums);
//         return digits;
//     } else if(digits[i] === 9 && i === 1){
//         digits.pop();
//         digits.push(1);
//         digits.push(0);
//     }
// }