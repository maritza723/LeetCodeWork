/**231. Power of Two
 * Given an integer, write a function to determine if it is a power of two.
 * 
 * Example 1:
 * Input: 1
 * Output: true 
 * Explanation: 20 = 1
 * 
 * Example 2:
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * 
 * Example 3:
 * Input: 218
 * Output: false
 *  */
/**
* @param {number} n
* @return {boolean}
*/
var isPowerOfTwo = function (n) {
    if (n < 0) { return false }

    for (let i = 0; i < n; i++) {
        if (n == Math.pow(2, i)) { 
            return true;
        } else {
            n /= 2;
            i--;
        }

    }
    return false;

};


// Accepted!! 08.05.2020
// Runtime: 120 ms, faster than 15.92% of JavaScript online submissions for Power of Two.
// Memory Usage: 37.7 MB, less than 6.25% of JavaScript online submissions for Power of Two.


// // example 1: true
// console.log(isPowerOfTwo(1));

// // example 2: true
// console.log(isPowerOfTwo(16));

// // example 3: false
// console.log(isPowerOfTwo(218));

// // example 4: true
// console.log(isPowerOfTwo(2));

// // example 5: true
// console.log(isPowerOfTwo(8));

// // example 6: ???
// console.log(isPowerOfTwo(67108863));
