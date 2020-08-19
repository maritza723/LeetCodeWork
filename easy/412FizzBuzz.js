/**412. Fizz Buzz
 * Write a program that outputs the string representation of numbers from 1 to n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
 * 
 * Example:
 * n = 15,
 * 
 * Return:
 * [
 *     "1",
 *     "2",
 *     "Fizz",
 *     "4",
 *     "Buzz",
 *     "Fizz",
 *     "7",
 *     "8",
 *     "Fizz",
 *     "Buzz",
 *     "11",
 *     "Fizz",
 *     "13",
 *     "14",
 *     "FizzBuzz"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 == 0){
            ans.push("FizzBuzz");
        } else if (i % 3 == 0){

            ans.push("Fizz");
        } else if (i % 5 == 0){

            ans.push("Buzz");
        } else {
            ans.push(i.toString());
        }
    }
    return ans;
};

// Accepted!! 08.06.2020
// Runtime: 76 ms, faster than 71.25% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 38.9 MB, less than 5.51% of JavaScript online submissions for Fizz Buzz.

// example 1: 
console.log(fizzBuzz(15));