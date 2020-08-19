/**1550. Three Consecutive Odds
 * Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 *  
 * Example 1:
 * Input: arr = [2,6,4,1]
 * Output: false
 * Explanation: There are no three consecutive odds.
 * 
 * Example 2:
 * Input: arr = [1,2,34,3,4,5,7,23,12]
 * Output: true
 * Explanation: [5,7,23] are three consecutive odds.
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let odds = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] % 2 != 0){
            odds++;
        } else {
            odds = 0;
        }
        if(odds === 3){ return true; }
    }
    return false;
};


//Accepted!! 08.18.2020
// Runtime: 68 ms, faster than 94.55% of JavaScript online submissions for Three Consecutive Odds.
// Memory Usage: 37.1 MB, less than 8.19% of JavaScript online submissions for Three Consecutive Odds.

// example 1: false
console.log(threeConsecutiveOdds([2,6,4,1]));

// example 2: true
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));