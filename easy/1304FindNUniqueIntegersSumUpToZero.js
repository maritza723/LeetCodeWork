/**1304. Find N Unique Integers Sum up to Zero
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 * 
 * Example 1:
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
 * 
 * Example 2:
 * Input: n = 3
 * Output: [-1,0,1]
 * 
 * Example 3:
 * Input: n = 1
 * Output: [0] *//**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans = [];
    for(let i = 1; ans.length < n; i+=2){
        ans.push(i);
        ans.push(-i);

    }
    if(ans.length < n){
            ans.push(0);
        }
        if(ans.length > n){
            ans.pop();
            ans.pop();
            ans.push(0);
        }
    return ans;
};

// Accepted!! 09.13.2020
// Runtime: 116 ms, faster than 9.17% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 37.4 MB, less than 33.27% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.

// example 1: [-7,-1,1,3,4]
console.log(sumZero(5));

// example 2: [-1,0,1]
console.log(sumZero(3));

// example 3: [1, -1] 
console.log(sumZero(2));