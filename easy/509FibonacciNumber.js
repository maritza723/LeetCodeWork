/**509. Fibonacci Number
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, 
 * such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 * 
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 * Given n, calculate F(n).
 * 
 *  
 * 
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * Example 2:
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 *  Example 3:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 *//**
* @param {number} n
* @return {number}
*/
var fib = function (n) {
    if (n == 0) { return 0; }
    if(n == 1) { return 1; }
    let diff1 = n - 1;
    let diff2 = n - 2;
    let ans = helperFib(diff1) + helperFib(diff2);
    return ans;

};
var helperFib = function (num) {
    let a = 0, b = 1, c, i;
    if (num == 0)
        return a;
    for (i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};
console.log(fib(2) + " == 1");
console.log(fib(3) + " == 2");
console.log(fib(4) + " == 3");

// Accepted!! 04.15.21
// Runtime: 80 ms, faster than 57.34% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.5 MB, less than 45.42% of JavaScript online submissions for Fibonacci Number.
