/**3. Longest Substring Without Repeating Characters
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * Example 4:
 * Input: s = ""
 * Output: 0 *//**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len <= 1) { return len; }
    let dict = {};
    let ans = 0; 
    let run = 0;
    for(let i = 0; i < len; i++){
        if(s[i] in dict && dict[s[i]] > 0){
            dict[s[i]] = 0;
            run = 0;
            for (key in dict){ dict[key] = 0; }
            // i++;
            console.log(dict);
            console.log("there")
        } else {
            console.log("here");
            run++;
            if(run > ans) { ans = run; }
        }
    }
    
    // for (let i = 0; i < len; i++){
    //     if(s[i] == s[i + 1]){
    //         run++;
    //         if(run > ans) { ans = run; }
    //     } else {
    //         run = 0;
    //         i++;
    //     }
    // }
    return ans;
};

// console.log(lengthOfLongestSubstring("abcabcbb") + " == 3");
// console.log();
// console.log(lengthOfLongestSubstring("bbbbb") + " == 1");
// console.log();
// console.log(lengthOfLongestSubstring("pwwkew") + " == 3");
// console.log();
// console.log(lengthOfLongestSubstring("") + " == 0");