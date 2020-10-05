/**1446. Consecutive Characters
 * Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.
 * 
 * Return the power of the string.
 * 
 * Example 1:
 * Input: s = "leetcode"
 * Output: 2
 * Explanation: The substring "ee" is of length 2 with the character 'e' only.
 * 
 * Example 2:
 * Input: s = "abbcccddddeeeeedcba"
 * Output: 5
 * Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
 * 
 * Example 3:
 * Input: s = "triplepillooooow"
 * Output: 5
 * 
 * Example 4:
 * Input: s = "hooraaaaaaaaaaay"
 * Output: 11
 * 
 * Example 5:
 * Input: s = "tourist"
 * Output: 1
 *  *//**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let len = s.length;
    let count = 1;
    let max = 1;
    for (let i = 0; i < len; i++){
        if(s[i] === s[i + 1]){
            count ++;
        } else { count = 1; }

        if(count > max){ max = count; }
    }
    return max;
};

// Accepted!!! 10.05.2020
// Runtime: 84 ms, faster than 67.91% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 39.6 MB, less than 13.40% of JavaScript online submissions for Consecutive Characters.


console.log(maxPower("leetcode") + " == 2");
console.log();
console.log(maxPower("abbcccddddeeeeedcba") + " == 5");
console.log();
console.log(maxPower("triplepillooooow") + " == 5");
console.log();
console.log(maxPower("hooraaaaaaaaaaay") + " == 11");
console.log();
console.log(maxPower("tourist") + " == 1");