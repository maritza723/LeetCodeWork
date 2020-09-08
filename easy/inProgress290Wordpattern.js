/**290. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let pat = pattern.length;
    let slen = str.length;
    let j = 0;
    let dict = {};
    for (let i = 0; i < pat; i++) {
        let run = "";
        while(str[j] != " "){
            if(j >= slen){
                break;
            }
            run += str[j];
            j++;
        } 
        console.log(run);
        // console.log(pattern[i]);
        // console.log(dict[pattern[i]]);
        // console.log(dict)
        if(pattern[i] in dict && dict[pattern[i]] != run){
            console.log("line 41");
            return false;
        } else if (run in dict && dict[run] != pattern[i]){
            return false;
        } else {
            dict[pattern[i]] = run;
            
        }
        j++;
        
    }
    
    console.log(dict)
    return true;
};

// console.log("true examples: ");
// example 1:
// console.log(wordPattern("abba", "dog cat cat dog"));

// // example 7:
// console.log(wordPattern("abc", "b c a"));



// console.log("false examples: ");
// example 2:
// console.log(wordPattern("abba", "dog cat cat fish"));

// // example 3:
// console.log(wordPattern("aaaa", "dog cat cat dog"));

// // example 4:
// console.log(wordPattern("abba", "dog dog dog dog"));

// // example 5:
// console.log(wordPattern("abc", "dog cat dog"));

// // example 6:
// console.log(wordPattern("aaa", "aa aa aa aa"));

// // example 7:
// console.log(wordPattern("abc", "b c a"));


/** FIRST TRY
 * let pat = pattern.length;
 *     let slen = str.length;
 *     let count = 0;
 *     let j = 0;
 *     let dict = {};
 *     for (let i = 0; i < pat; i++) {
 * 
 *         let newPatt = "";
 *         while (str[j] != " ") {
 *             if (j >= slen) {
 *                 break;
 *             }
 *             newPatt = newPatt + str[j];
 *             // console.log(str[j]);
 *             j++;
 *             if (str[j] == " ") {
 *                 count++;
 *             }
 *         }
 *         if(count >= pat){
 *             return false;
 *         }
 *         console.log(newPatt);
 *         if (pattern[i] in dict && dict[pattern[i]] != newPatt) {
 *             console.log(dict);
 *             return false;
 *         } else if (newPatt in dict && dict[newPatt] != pattern[i]) {
 *             return false;
 *         } else {
 *             dict[pattern[i]] = newPatt;
 *         }
 *         j++;
 * 
 *     }
 *     for (let i = 0; i < pat - 1; i++) {
 *         console.log("here")
 *         for (let j = i + 1; j < pat; j++) {
 *             console.log(pattern[i])
 *             console.log(pattern[j])
 *             // console.log(pattern[i])
 *             if (pattern[i] != pattern[j] && dict[pattern[i]] === dict[pattern[j]]) {
 * 
 *                 return false;
 *             }
 *         }
 * 
 *     }
 *     // console.log(dict)
 *     return true;
 * }; */