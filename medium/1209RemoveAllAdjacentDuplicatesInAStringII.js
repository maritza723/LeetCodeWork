/**1209. Remove All Adjacent Duplicates in String II
 * Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.
 * 
 * We repeatedly make k duplicate removals on s until we no longer can.
 * 
 * Return the final string after all such duplicate removals have been made.
 * 
 * It is guaranteed that the answer is unique.
 * 
 * Example 1:
 * Input: s = "abcd", k = 2
 * Output: "abcd"
 * Explanation: There's nothing to delete.
 * 
 * Example 2:
 * Input: s = "deeedbbcccbdaa", k = 3
 * Output: "aa"
 * Explanation: 
 * First delete "eee" and "ccc", get "ddbbbdaa"
 * Then delete "bbb", get "dddaa"
 * Finally delete "ddd", get "aa"
 * 
 * Example 3:
 * Input: s = "pbbcggttciiippooaais", k = 2
 * Output: "ps"
 *//**
* @param {string} s
* @param {number} k
* @return {string}
*/
var removeDuplicates = function (s, k) {
    let len = s.length;
    let dict = {};
    let runner = "";
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (s[i] in dict) {
                dict[s[i]]++;
            } else {
                dict[s[i]] = 1;
            }
            if (dict[s[i]] === k) {
                
                dict[s[i]] = 0;
            }
        }
    }

};

console.log(removeDuplicates("abcd", 2) + " == abcd")
console.log(removeDuplicates("deeedbbcccbdaa", 3) + " == aa")
console.log(removeDuplicates("pbbcggttciiippooaais", 2) + " == ps")