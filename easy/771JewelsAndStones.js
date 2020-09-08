/**771. Jewels and Stones
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 * 
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * 
 * Example 1:
 * Input: J = "aA", S = "aAAbbbb"
 * Output: 3
 * 
 * Example 2:
 * Input: J = "z", S = "ZZ"
 * Output: 0
 * Note:
 * S and J will consist of letters and have length at most 50.
 * The characters in J are distinct. *//**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let sLen = S.length;
    let jLen = J.length;
    let dict = {};
    let count = 0;
    for(let i = 0; i < sLen; i++){
        if(S[i] in dict){
            dict[S[i]]++;
        } else { dict[S[i]] = 1;}
    }
    for(let i = 0; i < jLen; i++){
        if(J[i] in dict){
            count += dict[J[i]];
        }
    }
    return count;
};

// Accepted!! 09.08.2020
// Runtime: 84 ms, faster than 55.62% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 37.4 MB, less than 32.43% of JavaScript online submissions for Jewels and Stones.

// // example 1: 3
// console.log(numJewelsInStones("aA", "aAAbbbb"));

// // example 2: 0
// console.log(numJewelsInStones("z", "ZZ"));