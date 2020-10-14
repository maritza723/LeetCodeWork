/**1556. Thousand Separator
Given an integer n, add a dot (".") as the thousands separator and return it in string format.

Example 1:
Input: n = 987
Output: "987"

Example 2:
Input: n = 1234
Output: "1.234"

Example 3:
Input: n = 123456789
Output: "123.456.789"

Example 4:
Input: n = 0
Output: "0" *//**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let num = n.toString();
    let len = num.length;
    let ans = "";
    let track = 0;
    for (let i = len - 1; i >= 0; i--){
        
    //    console.log(ans); 
        ans = num[i] + ans;
        track++;
        if(track%3 === 0 && i != 0){
            ans = "." + ans;
            track = 0;
        }
        
    }
    return ans;
};

// Accepted!! 10.13.2020
// Runtime: 76 ms, faster than 71.94% of JavaScript online submissions for Thousand Separator.
// Memory Usage: 38.6 MB, less than 17.42% of JavaScript online submissions for Thousand Separator.


console.log(thousandSeparator(987) + " == 987");
console.log();
console.log(thousandSeparator(1234) + " == 1.234");
console.log();
console.log(thousandSeparator(123456789) + " == 123.456.789");
console.log();
console.log(thousandSeparator(0) + " == 0"); 
console.log();


        // DEADCODE

    // let num = n.toString();
    // let len = num.length;
    // let ans = "";
    // let track = 1;
    // for (let i = 0; i < len; i++){
    // //    console.log("here"); 
    //     ans += num[i];
    //     if(track%3 === 0){
    //         ans += ".";
    //     }
        
    //     track++;
    // }
    // len = ans.length - 1;
    // if(ans[len] == "."){
    //     ans = ans.slice(0, len);
    // }
    // return ans;