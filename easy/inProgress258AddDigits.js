/**258. Add Digits
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * 
 * Example:
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it. */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let arr = `${num}`.split("").map(x => Number(x));
    let len = arr.length;
    let ans = 10;
    while(ans > 9){
        
        for (let i = 1; i < len; i++){
            ans += arr[i];
        }
    }
    return ans;
};


// console.log(addDigits(38) + "  should = 2");
// console.log();