/**242. Valid Anagram
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * Note:
 * You may assume the string contains only lowercase alphabets. */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let len = s.length;
    if (len != t.length) { return false }
    let sDict = {};
    let tDict = {};
    for (let i = 0; i < len; i++) {
        if (s[i] in sDict) {
            sDict[s[i]]++;
        } else {
            sDict[s[i]] = 1;
        }
        if (t[i] in tDict) {
            tDict[t[i]]++;
        } else {
            tDict[t[i]] = 1;
        }
    }

    for (key in sDict) {
    console.log(sDict);
    console.log(tDict);
        if (key in tDict){
            if(sDict[key] != tDict[key]) { return false }
        } else { return false }
    }
    return true;
};

// Accepted!! 08.12.2020
// Runtime: 92 ms, faster than 72.00% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 38.7 MB, less than 65.86% of JavaScript online submissions for Valid Anagram.

// example 1: true
// console.log(isAnagram("anagram", "nagaram"));

// example 2: false
// console.log(isAnagram("rat", "car"));

// example 3: false
// console.log(isAnagram("aaca", "ccac"));

// example 4: false
// console.log(isAnagram("a", "b"));