/**1351. Count Negative Numbers in a Sorted Matrix
Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 

Return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:
Input: grid = [[-1]]
Output: 1 *//**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let len = grid.length;
    let count = 0;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] < 0){
                count++;
            }
        }
    }
    return count;
};

// Accepted!! 09.13.2020
// Runtime: 76 ms, faster than 78.94% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// Memory Usage: 38.2 MB, less than 36.22% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.

// example 1: 8
// console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));

// example 2: 0
// console.log(countNegatives([[3,2],[1,0]]));

// example 3: 3
// console.log(countNegatives([[1,-1],[-1,-1]]));

// example 4: 1
// console.log(countNegatives([[-1]]));