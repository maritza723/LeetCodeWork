/**1281. Subtract the Product and Sum of Digits of an Integer
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * 
 * Example 1:
 * Input: n = 234
 * Output: 15 
 * Explanation: 
 * Product of digits = 2 * 3 * 4 = 24 
 * Sum of digits = 2 + 3 + 4 = 9 
 * Result = 24 - 9 = 15
 * 
 * Example 2:
 * Input: n = 4421
 * Output: 21
 * Explanation: 
 * Product of digits = 4 * 4 * 2 * 1 = 32 
 * Sum of digits = 4 + 4 + 2 + 1 = 11 
 * Result = 32 - 11 = 21
 *  
 * Constraints:
 * 
 * 1 <= n <= 10^5
 */
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = Array.from(n.toString()).map(x => Number(x));
    let len = arr.length;
    if(len <= 1){ return 0 };
    let sum = arr[0];
    let prod = arr[0];
    for(let i = 1; i < len; i++){

        sum += arr[i];
        prod *= arr[i];
    }
    return prod - sum;
};
// Accepted!! 07.22.2020
// Runtime: 80 ms, faster than 27.07% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 36.8 MB, less than 5.03% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

// example 1: 15
console.log(subtractProductAndSum(234));

// example 2: 21
console.log(subtractProductAndSum(4421));
