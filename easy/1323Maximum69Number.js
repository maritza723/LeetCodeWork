/**1323. Maximum 69 Number
 * Given a positive integer num consisting only of digits 6 and 9.
 * 
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 * 
 * Example 1:
 * Input: num = 9669
 * Output: 9969
 * Explanation: 
 * Changing the first digit results in 6669.
 * Changing the second digit results in 9969.
 * Changing the third digit results in 9699.
 * Changing the fourth digit results in 9666. 
 * The maximum number is 9969.
 * 
 * Example 2:
 * Input: num = 9996
 * Output: 9999
 * Explanation: Changing the last digit 6 to 9 results in the maximum number.
 * 
 * Example 3:
 * Input: num = 9999
 * Output: 9999
 * Explanation: It is better not to apply any change.
 */
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let arr = Array.from(num.toString()).map(x => Number(x));
    let ans = 0;
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 6 && count == 0){
            console.log("***")
            arr[i] = 9;
            count++;
            console.log(arr);
        }
        ans *= 10;
        ans += arr[i];
    }
    return ans;
};


// example 1: 9969
// console.log(maximum69Number(9669));

// example 2: 9999
// console.log(maximum69Number(9996));

// example 3: 9999
// console.log(maximum69Number(9999));

// Accepted!!! 07.20.2020 
// Runtime: 92 ms, faster than 13.75% of JavaScript online submissions for Maximum 69 Number.
// Memory Usage: 36.7 MB, less than 5.23% of JavaScript online submissions for Maximum 69 Number.


// DEADCODE
// let arr = Array.from(num.toString()).map(x => Number(x));
// let ans = 0;
// let count = 1;
// for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 6){
//             arr.splice(i);
//             arr[i] = 9;            
//         }
//         arr[i] *= 10;
//         ans+=arr[i];
//         ans *= 10;
//         console.log(ans);

// }