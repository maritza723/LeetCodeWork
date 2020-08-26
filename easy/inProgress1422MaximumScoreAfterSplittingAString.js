/**1422. Maximum Score After Splitting a String
 * Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
 * 
 * The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
 * 
 * Example 1:
 * Input: s = "011101"
 * Output: 5 
 * Explanation: 
 * All possible ways of splitting s into two non-empty substrings are:
 * left = "0" and right = "11101", score = 1 + 4 = 5 
 * left = "01" and right = "1101", score = 1 + 3 = 4 
 * left = "011" and right = "101", score = 1 + 2 = 3 
 * left = "0111" and right = "01", score = 1 + 1 = 2 
 * left = "01110" and right = "1", score = 2 + 1 = 3
 * 
 * Example 2:
 * Input: s = "00111"
 * Output: 5
 * Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
 * 
 * Example 3:
 * Input: s = "1111"
 * Output: 3 *//**
* @param {string} s
* @return {number}
*/
var maxScore = function (s) {
    let len = s.length - 1;
    let max = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] == 0) {
            left++;
        }
        for (let j = len; j > i; j--) {
            // console.log("line 38")
            if (s[j] == 1) {
                right++;
            } else {
                right--;
            }
            console.log("left: " + left);
            console.log("right: " + right);
            if (max <= left + right) {
                max = left + right;
            }
            // if (s[len] == 0) {
                right = 0;
            // }
            
            // console.log(max)
        }
    }
    return max;
};


// example 1: 5 
// console.log(maxScore("011101"));

// example 2: 5
// console.log(maxScore("00111"));

// example 3: 3
// console.log(maxScore("1111"));


// DEADCODE

    // FOR LOOPS COUNTING ZEROES AND THEN ONES 
    // let len = s.length - 1;
    // let max = 0;
    // let zeroes = 0;
    // let ones = 0;
    // if(s[0] == 0){
    //     zeroes = 1;

    // }

    // for(let i = 1; i < len; i++){
    //     if(s[i] == 0){
    //         zeroes++;
    //     }
    // }
    // console.log(" LINE 43 zeroes: " + zeroes);
    // let zero = zeroes;
    // for(let j = 1; j <= len; j++){
    //     zeroes = zero;
    //     if(s[j] == 0){
    //         zeroes--;
    //     } else {
    //         ones++;
    //     }
    //     console.log("zeroes: " + zeroes);
    //     console.log("ones: " + ones);
    //     if(max <= zeroes + ones){
    //         max = zeroes + ones;
    //     }
    //     console.log(max)
    // }
    // return max;