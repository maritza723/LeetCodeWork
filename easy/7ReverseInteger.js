/**7. Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x == 0){ return x }
    let s = x.toString();
    let ans = "";
    if(x < 0){
        ans = "-";
        x *= -1;
    }
    let len = s.length - 1;
    for(let i  = len; i >= 0; i--){
        if(ans != "" && s[i] == 0){
            ans = ans + s[i];
        } else if(s[i] != "0" && s[i] != "-"){
            ans = ans + s[i];
        }
    }   
    x = parseInt(ans)
    if(Math.abs(x) > 2147483647){
        return 0;
    } else { return x };
};

// Accepted!! 08.08.2020
// Runtime: 188 ms, faster than 5.21% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 39.6 MB, less than 5.04% of JavaScript online submissions for Reverse Integer.

// // example 1: 321
// console.log(reverse(123));
 
// // example 2: -321
// console.log(reverse(-123));
 
// // example 3: 21
// console.log(reverse(120));

// // example 4: 109
// console.log(reverse(901000));

// // example 5: 0
// console.log(reverse(-2147483648));
