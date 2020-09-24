/**830. Positions of Large Groups
 * In a string s of lowercase letters, these letters form consecutive groups of the same character.
 * 
 * For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
 * 
 * A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
 * 
 * A group is considered large if it has 3 or more characters.
 * 
 * Return the intervals of every large group sorted in increasing order by start index.
 * 
 * Example 1:
 * Input: s = "abbxxxxzzy"
 * Output: [[3,6]]
 * Explanation: "xxxx" is the only large group with start index 3 and end index 6.
 * 
 * Example 2:
 * Input: s = "abc"
 * Output: []
 * Explanation: We have groups "a", "b", and "c", none of which are large groups.
 * 
 * Example 3:
 * Input: s = "abcdddeeeeaabbbcd"
 * Output: [[3,5],[6,9],[12,14]]
 * Explanation: The large groups are "ddd", "eeee", and "bbb".
 * 
 * Example 4:
 * Input: s = "aba"
 * Output: []
 *  
 * Constraints:
 * 1 <= s.length <= 1000
 * s contains lower-case English letters only.
 *//**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let len = S.length;
    let ans = [];
    let run = [];
    let dict = {};
    for(let i = 0; i < len; i++){
        if(S[i] in dict){
            dict[S[i]]++;
        } else { dict[S[i]] = 1; }
    }
    for(let i = 0; i < len; i++){
        let j = i;
        if(dict[S[i]] >= 3){
            
            if(S[j] == S[j + 1]){
                j++;
            }
        }
        if(3 <= j - i){
            run.push(i);
            run.push(j);
        }
    }
};



// example 1: console.log([[3,6]]);
// console.log(largeGroupPositions("abbxxxxzzy"));

// example 2: console.log([]);
// console.log(largeGroupPositions("abc"));

// example 3: console.log([[3,5],[6,9],[12,14]]);
// console.log(largeGroupPositions("abcdddeeeeaabbbcd"));

// example 4: console.log([]);
// console.log(largeGroupPositions("aba"));
