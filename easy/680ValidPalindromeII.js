/**680. Valid Palindrome II
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 * 
 * Example 1:
 * Input: "aba"
 * Output: True
 * 
 * Example 2:
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'. */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length;
    let str = [];
    for (let i = 0; i < len; i++){
        str.push(s[i]);
    }
    // console.log(str);
    for(let i = 0; i < len; i++){
        console.log(str);
        for (let j = 0; j < len; j++){
            // console.log(str);
            if ( j != i){
            console.log(j + "\t" + str[j] + "\t" + str[len - j - 1]);
            if(str[j] != str[len - j - 1]){ break; }
            if(j === Math.round(len/2)){ 
                return true; 
            } else if (j > Math.round(len/2)) { break; }
        }
    }
        run = [];
        
    }
    return false;
};

// console.log("true: ")
// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abca"));
// console.log("false: ")
// console.log(validPalindrome("abccdcba"), " == false");










// DEADCODE
// let dict = {};      // create a dictionary
    // for (let i = 0; i < len; i++){  // enter each letter in string s
    //     if(s[i] in dict){
    //         dict[s[i]]++;
    //     } else { dict[s[i]] = 1; }
    // }
    // console.log(dict);
    // let str ="";
    // for (let i = 0; i < len; i++){
    //     if(dict[s[i]] != 1 && i != len/2){
    //         str += s[i];
    //     }
    // }
