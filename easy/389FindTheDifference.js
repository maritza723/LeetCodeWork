/**389. Find the Difference
 * Given two strings s and t which consist of only lowercase letters.
 * 
 * String t is generated by random shuffling string s and then add one more letter at a random position.
 * 
 * Find the letter that was added in t.
 * 
 * Example:
 * 
 * Input:
 * s = "abcd"
 * t = "abcde"
 * 
 * Output:
 * e
 * 
 * Explanation:
 * 'e' is the letter that was added. 
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let len = s.length;
    let ans = [];
    for(let i = 0; i <= len; i++){
        ans.push(t[i]);
    }
    for(let i = 0; i < len; i++){
        console.log(ans);
        for(let j = 0; j < len; j++){
            if(s[i] == ans[j]){
                ans.splice(j, 1);
                break;
            }
            
        }
    }

    return ans[0];
};

// Accepted!! 08.19.2020
//Runtime: 132 ms, faster than 7.28% of JavaScript online submissions for Find the Difference.
// Memory Usage: 39.2 MB, less than 14.36% of JavaScript online submissions for Find the Difference.

// example: a
// console.log(findTheDifference("a", "aa"));

// example: e
// console.log(findTheDifference("abcd", "abcde"));

// example: a
// console.log(findTheDifference("ae", "aea"));

// DEADCODE

    // array s in dict, check for index in array t that is not in dict
// let len = s.length;
// let dict = {};
// for(let i = 0; i < len; i++){
//     if(s[i] in dict){
//         dict[s[i]]++;
//     } else {
//         dict[s[i]] = 1;
//     }
// }

// for(let i = 0; i <= len; i++){
//     console.log(dict)
//     if(t[i] in dict && dict[t[i]] != 0){
//         dict[t[i]]--; 
//     } else {
//         return t[i];
//     }       
// }