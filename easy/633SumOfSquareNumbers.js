/**633. Sum of Square Numbers
 * Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
 * 
 * Example 1:
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 *  
 * Example 2:
 * Input: 3
 * Output: False 
 * 
*/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
    for(let i = 0; Math.pow(i, 2) <= c; i++){
        for(let j = 0; Math.pow(j, 2) <= c; j++){
        if(Math.pow(i, 2) + Math.pow(j, 2) == c){
            // console.log(i + "   " + j)
            return true;
            }
        }
    }
    return false;
};

// example 1: True
console.log(judgeSquareSum(5));
 
// example 2: False
console.log(judgeSquareSum(3));

// example 3: True
console.log(judgeSquareSum(4));

// example 4: False **time limit**
console.log(judgeSquareSum(2147483645));