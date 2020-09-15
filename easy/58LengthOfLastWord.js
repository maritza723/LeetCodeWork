/**58. Length of Last Word
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a maximal substring consisting of non-space characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5 *//**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.length - 1;
    let count = 0;
    for(let i = len; i >= 0; i--){
        if(s[i] == " " && count != 0){
            break;
        } else if(s[i] == " " && count == 0){
            continue;
        } else {
            count++;
        }
    }
    return count;
};

// Accepted!! 09.15.2020
// Runtime: 116 ms, faster than 5.86% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 36.4 MB, less than 87.56% of JavaScript online submissions for Length of Last Word.

// example: 5
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("b   a    "));
