/**316. Remove Duplicate Letters
 * Given a string s, remove duplicate letters so that every letter appears once and only once. 
 * You must make sure your result is the smallest in lexicographical order among all possible results.
 * 
 * Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * 
 * Example 1:
 * Input: s = "bcabc"
 * Output: "abc"
 * 
 * Example 2:
 * Input: s = "cbacdcbc"
 * Output: "acdb" *//**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let len = s.length;
    let arr = [];
    for (let i = 0; i < len; i++){
        arr.push(s[i]);
    }
    arr.sort();
    console.log(arr);
    let track = arr[0];
    let dict = {};
    let ans = "";
    let i = 0;
    while(s[i] != track){
        i++;
    }
    for (; i < len; i++){
        if(s[i] in dict){
            dict[s[i]]++;
        } else {
            dict[s[i]] = 1;
            ans += s[i];
        }
    }
    for (let i = 0; i < len; i++){
        if(s[i] in dict){
            dict[s[i]]++;
        } else {
            dict[s[i]] = 1;
            ans = s[i] + ans;
        }
    }


    return ans;
};

// // console.log();
// console.log(removeDuplicateLetters("bcabc") + " == abc");
// // console.log();
// console.log(removeDuplicateLetters("cbacdcbc") + " == acdb");
// // console.log();
// console.log(removeDuplicateLetters("ecbacba") + " == eacb");
// // console.log();
// console.log(removeDuplicateLetters("leetcode") + " == letcod");


        // let len = s.length;
        //     let dict = {};
        //     arr = [];
        //     let ans = "";
        //     for (let i = 0; i < len; i++){
        //         if(s[i] in dict){
        //             dict[s[i]]++;
        //         } else {
        //             dict[s[i]] = 1;
        //             arr.push(s[i]);
        //         }
        //     }
        //     console.log(arr.sort());

            
        //     return ans;