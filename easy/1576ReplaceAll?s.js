/**1576. Replace All ?'s to Avoid Consecutive Repeating Characters
 * Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.
 * 
 * It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.
 * 
 * Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.
 * 
 * Example 1:
 * Input: s = "?zs"
 * Output: "azs"
 * Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
 * 
 * Example 2:
 * Input: s = "ubv?w"
 * Output: "ubvaw"
 * Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
 * 
 * Example 3:
 * Input: s = "j?qg??b"
 * Output: "jaqgacb"
 * 
 * Example 4:
 * Input: s = "??yw?ipkj?"
 * Output: "acywaipkja" *//**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    let len = s.length;
    let ans = "";
    let dict = {
        1: "a",
        2: "b",
        3: "c",
        4: "d",
        5: "e",
        6: "f",
        7: "g",
        8: "h",
        9: "i",
        10: "j",
        11: "k",
        12: "l",
        13: "m",
        14: "n",
        15: "o",
        16: "p",
        17: "q",
        18: "r",
        19: "s",
        20: "t",
        21: "u",
        22: "v",
        23: "w",
        24: "x",
        25: "y",
        26: "z"
    };
    let j = 24;
    for(let i = 0; i < len; i++){
        
        if(s[i] == "?"){
            if(dict[s[j]] == s[i - 1] || dict[s[j]] == s[i + 1]){
            ans += dict[[j + 2]];
            } else { 
                ans += dict[[j + 1]];
            }
        } else { ans += s[i] }
        
        if(j <= 1){
            j ++;
        } else {
            j --;
        }
    }
    return ans;
};

// example 1:
// console.log(modifyString("?zs"));

// example 2: 
// console.log(modifyString("ubv?w"));

// example 3: 
// console.log(modifyString("j?qg??b"));

// example 4: 
// console.log(modifyString("??yw?ipkj?"));

// example 5: 
// console.log(modifyString("v?w"));


    // let dict = {
    //     "a": 1,
    //     "b": 1,
    //     "c": 1,
    //     "d": 1,
    //     "e": 1,
    //     "f": 1,
    //     "g": 1,
    //     "h": 1,
    //     "i": 1,
    //     "j": 1,
    //     "k": 1,
    //     "l": 1,
    //     "m": 1,
    //     "n": 1,
    //     "o": 1,
    //     "p": 1,
    //     "q": 1,
    //     "r": 1,
    //     "s": 1,
    //     "t": 1,
    //     "u": 1,
    //     "v": 1,
    //     "w": 1,
    //     "x": 1,
    //     "y": 1,
    //     "z": 1,
    // }

            // let dict = {
            //     "a": 1,
            //     "b": 2,
            //     "c": 3,
            //     "d": 4,
            //     "e": 5,
            //     "f": 6,
            //     "g": 7,
            //     "h": 8,
            //     "i": 9,
            //     "j": 10,
            //     "k": 11,
            //     "l": 12,
            //     "m": 13,
            //     "n": 14,
            //     "o": 15,
            //     "p": 16,
            //     "q": 17,
            //     "r": 18,
            //     "s": 19,
            //     "t": 20,
            //     "u": 21,
            //     "v": 22,
            //     "w": 23,
            //     "x": 24,
            //     "y": 25,
            //     "z": 26
            // };
            