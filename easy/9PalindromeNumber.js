/**9. Palindrome Number
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 * 
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2:
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome. 
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let arr = Array.from(x.toString()).map(x => Number(x));
    console.log(arr);
    let len = arr.length - 1;
    for(let i = 0; i <= len; i++){
        if(arr[i] != arr[len- i]){
            return false;
        }
    }
    return true;
};

// Accepted!! 07.22.2020
// Runtime: 224 ms, faster than 51.89% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 46.6 MB, less than 28.23% of JavaScript online submissions for Palindrome Number.

// // example 1: true
console.log(isPalindrome(121));

// // example 2: false
console.log(isPalindrome(-121));

// // example 3: false
console.log(isPalindrome(10));