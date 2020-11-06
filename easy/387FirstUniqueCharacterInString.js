/**387. First Unique Character in a String
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode"
 * return 2. *//**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split("");
    let len = arr.length;
    let dict = {};
    for (let i = 0; i < len; i++){
        if(arr[i] in dict){
            dict[arr[i]]++; 
        } else { dict[arr[i]] = 1;  }
    }
    for (let i = 0; i < len; i++){
        if(dict[arr[i]] == 1){
            return i;
        }
    }
    return -1;
};

// Accepted!! 11.06.2020
// Runtime: 124 ms, faster than 42.29% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 46 MB, less than 5.04% of JavaScript online submissions for First Unique Character in a String.

// console.log(firstUniqChar("leetcode") + "   returns 0");
// console.log();
// console.log(firstUniqChar("loveleetcode") + "   returns 2");
// console.log();
// console.log(firstUniqChar("aaaaaaa") + "   returns -1");