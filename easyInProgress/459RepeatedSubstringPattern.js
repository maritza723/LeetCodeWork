/**459. Repeated Substring Pattern
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * 
 * 
 * Example 1:
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * 
 * Example 2:
 * Input: "aba"
 * Output: False
 * 
 * Example 3:
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.) *//**
* @param {string} s
* @return {boolean}
*/
var repeatedSubstringPattern = function (s) {
    let len = s.length;
    if (len === 1) { return false; }
    let i = 0;
    let j = 0;
    while(j <= len){
        check = s.substring(s[i], 1);
        // console.log("***" + check);
        if(s[i] == s[j] && s[i + 1] == s[j + 1]){
            // console.log("if loop");
            i = j;
            check = check + s[j];
            
        } else if(s[i] == s[j] && check != s.substring(i, j)){
            // console.log(check);
            // console.log(s.substring(i, j));
            // console.log("false loop");
            return false;
        } else if(s[i] != s[j]){
            // console.log("else if loop");
            check = check + s[j];
            // console.log("check: " + check)
        }
        j++;
    }    
    return true;
};


console.log("true: ")
// console.log(repeatedSubstringPattern("abab"));
// console.log(repeatedSubstringPattern("abcabcabcabc"));
// console.log(repeatedSubstringPattern("abccbaabccba"));
// console.log(repeatedSubstringPattern("mariimarii"));
// console.log(repeatedSubstringPattern("abcaabcaabca"));


// console.log("false: ")
// console.log(repeatedSubstringPattern("aba"));
// console.log(repeatedSubstringPattern("abba"));



// DEADCODE

// let len = s.length;
//     let track = 0;
//     let dict = {};
//     for(let i = 0; i < len; i++){
//         if(s[i] in dict){
//             dict[s[i]]++;
//         } else {
//             dict[s[i]] = 1;
//             track++;
//         }
//     }
//     // console.log(dict);
//     if(len%track != 0){ return false; }
//     for(let i = 0; i < len/2; i++){
//         console.log(s[i]);
//         console.log(s[i + track]);
//         if(s[i] != s[i + track]){
//             return false;
//         }
//     }
//     return true;

// let len = s.length;
// let track = 0;
// for (let i = 0; i < len; i++) {
//     for (let j = i + track; j < len; j++) {
//         console.log(track);
//         console.log(s[i]);
//         console.log(s[j]);
//         if (s[i] === s[j]) {
//             i = j;
//             track = j;
//         }

//         if(track === len - 1){
//             return false;
//         }
//     }
// }

// return true;


// let check = s.substring(s[0]);
// let track = 0;
// let dict = {};
// for(let i = 0; i < len; i++){
//     if(s[i] in dict){
//         dict[s[i]]++;
//         track++;
//     } else {
//         dict[s[i]] = 1;    
//     }
// }
// console.log(track);








//     for (let i = 0; i < len; i++) {
//         for (let j = i + track; j < len; j++) {
//             if (s.substring(i + track, j + track) != s.substring(i, j)){
//                 // console.log(s.substring(0, i - 1));
//                 // console.log(check.substring(i, j));
//                 return false;
//             // }{
//             //     check = check + s[j];
//             } else if(s[i] == s[j]){
//                 // i = j - 1;
//                 track = j;
//             }
//             // console.log("sSub: " + s.substring(i, j));
//             // console.log("chSub: " + s.substring(i + track, j + track));
        
//             if (track === len - 1) {
//                 return false;
//             }
//         }
//     }
// return true;

// let len = s.length;
//     let track = 0;
//     // let i = 0;
//     // let j = 1;
//     let check = "";
//     while (track < len) {
//         let i = track;
//         let j = i + 1;
//         if (s[i] === s[j]) {
//             track = j;
//             i++;
//         } else {
//         check = check + s[i];
//         }
//         if (s.substring(i, j) == check.substring(i, j)) {
//             i = j - 1;
//         }            

//     }
//     // if()
//         return true;
/**
 * 
 */
const repSubPattern = (s) => {
    console.log(s);

    let pattern = s[0],
        i = 0,                              // my base iterator
        len = s.length,
        runner = 1;                         // this is my j index, it is going to reset to one in front of i each time 
    // because we could have a pattern like aaabaaa aaabaaa , I do a check for if 
    // runner has ever hit the end of the string 
    if (len == 1) { return false; }         // edge case caught by leetcode XP

    /**
     * I create
     * @param {string} p
     */
    helper = (p) => {
        let pLen = p.length;
        if (len % pLen != 0) { return false; }
        for (let ind = 0; ind < len; ind += pLen) {
            // console.log(s.slice(ind, ind + pLen),"inside helper");
            if (!(p == (s.slice(ind, ind + pLen)))) {
                return false;
            }
        }
        return true;
    }

    while (i < len && !(runner > len && i === 0)) {
        if (s[i] === s[runner]) {
            console.log("\tchecking", pattern);
            console.log("\ts[", runner, "]", s[runner]);
            // check if the pattern repeats though the string
            let found = helper(pattern);
            if (found) {
                // console.log("\tfound the pattern", pattern);
                // console.log(true);
                return true;
            } else if (runner > len) {
                pattern = s[i];
                runner = i + 1;
                i++;
            } else {
                pattern += s[runner];
                runner++;
            }
        } else if (s[i] != s[runner]) {
            pattern += s[runner];
            runner++;
        }
    }
    return false;
}
// repSubPattern("abab"); // true
// repSubPattern("aaaaaaa"); // true
// repSubPattern("cabcabcab"); // true
// repSubPattern("liaaliaaliaa"); // true



// // false
// repSubPattern("cabab"); // false 
