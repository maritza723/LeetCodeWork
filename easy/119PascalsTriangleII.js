/**119. Pascal's Triangle II
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 * 
 * Example:
 * Input: 3
 * Output: [1,3,3,1]
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
    // if (rowIndex == 0) {
    //     return [];
    // }
    rowIndex+=1;
    let ans = [[1]];
    
    for (let i = 1; i < rowIndex; i++) {
        let run = [1];
        let arr = ans[i - 1];
        for (let j = 1; j < arr.length; j++) {
            let sum = arr[j - 1] + arr[j];
            run.push(sum);
        }
        run.push(1);
        ans.push(run);
        console.log(ans)

    }

    return ans[rowIndex -1];
};

// Accepted!! 08.01.2020
// Runtime: 68 ms, faster than 78.43% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 36.9 MB, less than 12.00% of JavaScript online submissions for Pascal's Triangle II.


// example 1:
console.log(getRow(3));

// example 2:
console.log(getRow(0));