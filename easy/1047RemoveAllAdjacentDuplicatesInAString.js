/**1047. Remove All Adjacent Duplicates In String
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
 * 
 * We repeatedly make duplicate removals on S until we no longer can.
 * 
 * Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
 * 
 * Example 1:
 * 
 * Input: "abbaca"
 * Output: "ca"
 * Explanation: 
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  
 * The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca". */
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let len = S.length;
    let s = S.split("");
    let ans = "";
    for (let i = 0; i < len; i++){
        console.log(s[i]);
        console.log(s[i + 1]);
        if(s[i] == s[i + 1]){
            s.splice(i, 2);
            i = -1;
            len -= 2;
        }
    }
    for (let i = 0; i < len; i ++){
        ans += s[i];
    }
    return ans;
};

// Accepted!! 11.11.2020
// Runtime: 752 ms, faster than 7.02% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
// Memory Usage: 45.9 MB, less than 5.09% of JavaScript online submissions for Remove All Adjacent Duplicates In String.


// console.log(removeDuplicates("abbaca") + " == ca");