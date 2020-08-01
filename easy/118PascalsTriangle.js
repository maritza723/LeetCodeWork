/**118. Pascal's Triangle
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * 
 * Input: 5
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows == 0) {
        return [];
    }
    let ans = [[1]];

    for (let i = 1; i < numRows; i++) {
        let run = [1];
        let arr = ans[i - 1];
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[j - 1] + arr[j];
            run.push(sum);
        }
        run.push(1);
        ans.push(run);

    }

    return ans;
};

// Accepted!! 08.01.2020
// Runtime: 68 ms, faster than 74.08% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 36.8 MB, less than 6.67% of JavaScript online submissions for Pascal's Triangle.

// example 1:
console.log(generate(5));