/**383. Ransom Note
 * Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
 * 
 * Each letter in the magazine string can only be used once in your ransom note.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true *//**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){ return false; }
    let magDict = {};
    for (let i = 0; i < magazine.length; i++){
        if(magazine[i] in magDict){
            magDict[magazine[i]]++;
        } else { magDict[magazine[i]] = 1; }
    }
    for (let i = 0; i < ransomNote.length; i++){
        console.log(magDict);
        if(ransomNote[i] in magDict && magDict[ransomNote[i]] > 0){
            magDict[ransomNote[i]]--;
        } else { return false; }
    }
    return true;
};

// Accepted!! 10.13.2020
// Runtime: 108 ms, faster than 47.67% of JavaScript online submissions for Ransom Note.
// Memory Usage: 41.6 MB, less than 5.30% of JavaScript online submissions for Ransom Note.


// console.log("false");
// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));

// console.log("true");
// console.log(canConstruct("aa", "aab"));
// console.log(canConstruct("aab", "baa"));
