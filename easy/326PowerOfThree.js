/**326. Power of Three
 * Given an integer, write a function to determine if it is a power of three.
 * 
 * Example 1:
 * Input: 27
 * Output: true
 * 
 * Example 2:
 * Input: 0
 * Output: false
 * 
 * Example 3:
 * Input: 9
 * Output: true
 * 
 * Example 4:
 * Input: 45
 * Output: false
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) { return false }
    for (let i = 0; i < n; i++) {
        if (n == Math.pow(3, i)) {
            return true;
        } else {
            n /= 3;
            i--;
        }

    }
    return false;
};

// Accepted!! 08.05.2020
// Runtime: 400 ms, faster than 13.78% of JavaScript online submissions for Power of Three.
// Memory Usage: 47.2 MB, less than 5.13% of JavaScript online submissions for Power of Three.

// example 1: true
console.log(isPowerOfThree(27));

// example 2: false
console.log(isPowerOfThree(0));

// example 3: true
console.log(isPowerOfThree(9));

// example 4: false
console.log(isPowerOfThree(45));

