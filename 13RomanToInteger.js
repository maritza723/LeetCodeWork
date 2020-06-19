/**LeetCode 13. Roman to Integer
 * passes in a string of "IV" or some roman integer 
 * then returns that numeric value
 * @param {string} s 
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C":100,
        "D": 500,
        "M":1000
    };
    let number = dict[s[0]];

    for(let i = 0; i < s.length - 1; i++){
        let run = dict[s[i+1]];
        if(dict[s[i]] < run){
            number += run - dict[s[i]] - dict[s[i]];
            // console.log("if statement");
            // console.log(number);
        } else {
            number += run;
            // console.log("else statement");
            // console.log(number);
        }
    }
    return number;
    
};
// example 1: 
console.log(romanToInt("III"));
// example 2: 
console.log(romanToInt("IV"));
// example 3: 
console.log(romanToInt("IX"));
// example 4: 
console.log(romanToInt("LVIII"));

