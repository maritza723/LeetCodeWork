/**1417. Reformat The String
 * Given alphanumeric string s. (Alphanumeric string is a 
 * string consisting of lowercase English letters and digits).
 * 
 * You have to find a permutation of the string where no letter 
 * is followed by another letter and no digit is followed by another digit. 
 * That is, no two adjacent characters have the same type.
 * 
 * Return the reformatted string or return an empty string if it 
 * is impossible to reformat the string.
 * 
 * Example 1:
 * Input: s = "a0b1c2"
 * Output: "0a1b2c"
 * Explanation: No two adjacent characters 
 * have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" 
 * are also valid permutations.
 * 
 * Example 2:
 * Input: s = "leetcode"
 * Output: ""
 * Explanation: "leetcode" has only characters so we cannot separate them by digits.
 * 
 * Example 3:
 * Input: s = "1229857369"
 * Output: ""
 * Explanation: "1229857369" has only digits so we cannot separate them by characters.
 * 
 * Example 4:
 * Input: s = "covid2019"
 * Output: "c2o0v1i9d"
 * 
 * Example 5:
 * Input: s = "ab123"
 * Output: "1a2b3"
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let len = s.length;
    let S = s.split("");
    let nums = [];
    let ltrs = [];
    for (let i = 0; i < len; i++) {
        if (S[i].match(/[0-9]/i)) {
            nums.push(S[i]);
        } else {
            ltrs.push(S[i]);
        }
    }
    let ans = "";
    // console.log(nums);
    // console.log(ltrs);
    let i = 0;
    if (Math.abs(nums.length - ltrs.length) > 1) { return ""; }
    if (nums.length > ltrs.length) {
        ans = ans + nums[0];
        nums.splice(0,1);
        // i = 1;
    }
    let j = 0;
    let k = 0;
    for (; ans.length < len; i++) {
        if (i % 2 == 0) {
            // console.log("if even: " + ltrs[i]);
            ans = ans + ltrs[j];
            j++;
        }
        if (i % 2 != 0) {
            // console.log("if odd: " + nums[i]);
            ans = ans + nums[k];
            k++;
        }
    }

    return ans;


};
// Accepted!! 08.27.2020
// Runtime: 100 ms, faster than 43.91% of JavaScript online submissions for Reformat The String.
// Memory Usage: 43.4 MB, less than 9.23% of JavaScript online submissions for Reformat The String.


// example 1: 0a1b2c
// console.log(reformat("a0b1c2"));

// example 2:  empty
// console.log(reformat("leetcode"));

// example 3:  empty
// console.log(reformat("1229857369"));

// example 4: c2o0v1i9d
// console.log(reformat("covid2019"));

// example 5: 1a2b3
// console.log(reformat("ab123"));
