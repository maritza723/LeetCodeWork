/**371. Sum of Two Integers
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * 
 * Example 1:
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * Example 2:
 * Input: a = -2, b = 3
 * Output: 1 *//**
* @param {number} a
* @param {number} b
* @return {number}
*/
var getSum = function (a, b) {
    
};

// example 1: 3
// console.log(getSum(1, 2));

// example 2: 1 
// console.log(getSum(-2, 3));

// example 3: 35
// console.log(getSum(10, 25));

// example 4: -20
// console.log(getSum(-12, -8));


// var getSumWrong = function (a, b) {
//     if((-1)*a == b || a == (-1)*b){ return 0 };
//     if(a == 2147483647 && b == -2147483648){ return -1;}
//     let ans = [];
//     if (a < 0 && b < 0) {
//         while (a < 0) {
//             ans.push(a);
//             a++;
//         }
//         while (b < 0) {
//             ans.push(b);
//             b++;
//         }
//         let negAns = (-1) * ans.length
//         return negAns;
//     }
//     if (a > 0) {
//         console.log(a);
//         while (a > 0) {
//             ans.push(a);
//             a--;
//         }
//     }
//     if (b > 0) {
//         console.log(b);
//         while (b > 0) {
//             ans.push(b);
//             b--;
//         }
//     }
//     if (a < 0) {
//         console.log(a);
//         while (a < 0) {
//             ans.splice(a, 1);
//             a++;
//         }
//     }
//     if (b < 0) {
//         console.log(b);
//         while (b > 0) {
//             ans.splice(b, 1);
//             b++;
//         }
//     }
//     return ans.length;
// };

// Accepted! 08.28.2020 // used ++ and -- :/
//Runtime: 64 ms, faster than 94.13% of JavaScript online submissions for Sum of Two Integers.
// Memory Usage: 36.9 MB, less than 5.27% of JavaScript online submissions for Sum of Two Integers.

