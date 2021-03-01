/**344. Reverse String
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * You may assume all the characters consist of printable ascii characters.
 * 
 *  
 * 
 * Example 1:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length - 1;
    let mid = ((len)/2); 
    for(let i = 0; i < mid; i++){
        let temp = s[i];
        s[i] = s[len - i];
        s[len - i] = temp;
        // console.log(s[i])
    }
    return s;
};

// Accepted!! 08.08.2020
// Runtime: 112 ms, faster than 54.86% of JavaScript online submissions for Reverse String.
// Memory Usage: 42.7 MB, less than 62.33% of JavaScript online submissions for Reverse String.


// // example 1: ["o","l","l","e","h"]
// console.log(reverseString(["h","e","l","l","o"]));

// // example 2: ["h","a","n","n","a","H"]
// console.log(reverseString(["H","a","n","n","a","h"]));

// // example 3: ["a","m","a","n","a","P"," ",":","l","a","n","a","c"," ","a"," ",",","n","a","l","p"," ","a"," ",",","n","a","m"," ","A"]
// console.log(reverseString(["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]));