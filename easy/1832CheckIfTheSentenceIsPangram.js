/**1832. Check if the Sentence Is Pangram
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false */ /**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    if (sentence.length < 26) { return false; }
    let len = sentence.length;
    let alpha = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "o": 0,
        "n": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
    };

    for (let i = 0; i < len; i++) {
        if (sentence[i] in alpha) { alpha[sentence[i]]++; }
    }
    for (key in alpha) {
        if (alpha[key] == 0){
            return false;
        }
}
    return true;
};

// Accepted!! 04.20.2021
// Runtime: 80 ms, faster than 90.73% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 39.4 MB, less than 43.05% of JavaScript online submissions for Check if the Sentence Is Pangram.



console.log("true: ");
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log();
console.log("false: ");
console.log(checkIfPangram("leetcode"));
console.log(checkIfPangram("maritzalovesicecreammorethancookies"));