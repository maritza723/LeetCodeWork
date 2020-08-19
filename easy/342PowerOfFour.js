/**342. Power of Four
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 * 
 * Example 1:
 * Input: 16
 * Output: true
 * 
 * Example 2:
 * Input: 5
 * Output: false
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 0) { return false }

    for (let i = 0; i < num; i++) {
        if (num == Math.pow(4, i)) { 
            return true;
        } else {
            num /= 4;
            i--;
        }

    }
    return false;
};

// Accepted!! 08.05.2020
// Runtime: 136 ms, faster than 10.03% of JavaScript online submissions for Power of Four.
// Memory Usage: 38.1 MB, less than 14.29% of JavaScript online submissions for Power of Four.


// example 1: true
console.log(isPowerOfFour(16));

// example 2: false
console.log(isPowerOfFour(5));