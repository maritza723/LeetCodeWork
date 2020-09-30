/**125. Valid Palindrome
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Example 1:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * Example 2:
 * Input: "race a car"
 * Output: false *//**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "";
    let S = s.toLowerCase();
    let len = s.length;
    let dict = {
        "a": "A",
        "b": "B",
        "c": "C",
        "d": "D",
        "e": "E",
        "f": "F",
        "g": "G",
        "h": "H",
        "i": "I",
        "j": "J",
        "k": "K",
        "l": "L",
        "m": "M",
        "n": "N",
        "o": "O",
        "p": "P",
        "q": "Q",
        "r": "R",
        "s": "S",
        "t": "T",
        "u": "U",
        "v": "V",
        "w": "W",
        "x": "X",
        "y": "Y",
        "z": "Z", 
        "0": "0", 
        "1": "1",
        "2": "2",
        "3": "3", 
        "4": "4", 
        "5": "5",
        "6": "6", 
        "7": "7",
        "8": "8",
        "9": "9"
    }
    for(let i = 0; i < len; i++){
        if(S[i] in dict){
        //    console.log("here")
            str += S[i];
        }
    }
    // console.log(str);
    len = str.length - 1;
    for(let i = 0; i < Math.round(len/2); i++){
        console.log(str[i] + "\t" + str[len - i])
        if(str[i] != str[len- i]){ return false; }
    }
    return true;
};

// Accepted!! 09.27.2020
// Runtime: 104 ms, faster than 29.41% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 42.7 MB, less than 29.96% of JavaScript online submissions for Valid Palindrome.


// console.log("true: ");
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// console.log("false: ");
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("0P"));