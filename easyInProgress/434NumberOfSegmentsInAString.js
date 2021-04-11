/**434. Number of Segments in a String
 * You are given a string s, return the number of segments in the string. 
 * 
 * A segment is defined to be a contiguous sequence of non-space characters.
 * 
 * Example 1:
 * Input: s = "Hello, my name is John"
 * Output: 5
 * Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
 * 
 * Example 2:
 * Input: s = "Hello"
 * Output: 1
 * 
 * Example 3:
 * Input: s = "love live! mu'sic forever"
 * Output: 4
 * 
 * Example 4:
 * Input: s = ""
 * Output: 0 *//**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let len = s.length;
    // if (len == 0) { return 0; }
    let spaces = 1;
    let letters = 0;
    for(let i = 0; i < len - 1; i++){
        if(s[i] === " " && s[i + 1] != " "){ 
            spaces++; 
        } else {
            letters++;
        }
    }
    if(letters == 0){
        return 0;
    } else { return spaces; };
};




// example 1: 5
// console.log(countSegments("Hello, my name is John"));

// example 2: 1
// console.log(countSegments("Hello"));

// example 3: 4
// console.log(countSegments("love live! mu'sic forever"));

// example 4: 0
// console.log(countSegments("")); 

// example 5: 0
console.log(countSegments("       "));

// example 6: 13
// console.log(countSegments("Of all the gin joints in all the towns in all the world,   "));