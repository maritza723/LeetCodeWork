/**905. Sort Array By Parity
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * Example 1:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let ans = [];
    let len = A.length;
    for(let i = 0; i < len; i++){
        if(A[i]%2 == 0){
            ans.unshift(A[i]);
        } else {
            ans.push(A[i]);
        }
    }
    return ans;
};

// Accepted!! 08.09.2020
// Runtime: 92 ms, faster than 73.13% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 38.8 MB, less than 60.02% of JavaScript online submissions for Sort Array By Parity.

// example: 
console.log(sortArrayByParity([3,1,2,4]));