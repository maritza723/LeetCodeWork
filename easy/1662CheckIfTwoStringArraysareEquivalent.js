/**1662. Check If Two String Arrays are Equivalent
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
 * 
 * A string is represented by an array if the array elements concatenated in order forms the string.
 * 
 * Example 1:
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
 * Output: true
 * Explanation:
 * word1 represents string "ab" + "c" -> "abc"
 * word2 represents string "a" + "bc" -> "abc"
 * The strings are the same, so return true.
 * 
 * Example 2:
 * Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
 * Output: false
 * 
 * Example 3:
 * Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
 * Output: true *//**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    for (let  i = 0; i < len1; i++){
        
    }
    
};
console.log("true");
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log();
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
console.log("false");
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]));
