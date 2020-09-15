/**709. To Lower Case
Easy

531

1642

Add to List

Share
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"

Example 3:
Input: "LOVELY"
Output: "lovely" *//**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let len = str.length;
    let ans = "";
    let dict = {
        "A": "a",
        "B": "b",
        "C": "c",
        "D": "d",
        "E": "e",
        "F": "f",
        "G": "g",
        "H": "h",
        "I": "i",
        "J": "j",
        "K": "k",
        "L": "l",
        "M": "m",
        "N": "n",
        "O": "o",
        "P": "p",
        "Q": "q",
        "R": "r",
        "S": "s",
        "T": "t",
        "U": "u",
        "V": "v",
        "W": "w",
        "X": "x",
        "Y": "y",
        "Z": "z"
    }
    for(let i = 0; i < len; i++){
        if(str[i] in dict){
            ans += dict[str[i]]
        } else { ans += str[i] }
    }
    // console.log(str[i]);
    //     console.log(dict[str[i]]);
    return ans;
};

// Accepted!! 09.14.2020
// Runtime: 72 ms, faster than 74.29% of JavaScript online submissions for To Lower Case.
// Memory Usage: 36.6 MB, less than 39.11% of JavaScript online submissions for To Lower Case.


// example 1: "hello"
// console.log(toLowerCase("Hello"));

// example 2: "here"
// console.log(toLowerCase("here"));

// example 3: "lovely"
// console.log(toLowerCase("LOVELY"));


