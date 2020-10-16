/**74. Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false
Example 3:

Input: matrix = [], target = 0
Output: false *//**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        if (matrix[i][0] > target) {
            break;
        } 
        // else {
            // console.log("here")
            for (let j = 0; j < matrix[0].length; j++) {
                // console.log(matrix[i][j]);
                if (matrix[i][j] === target) { return true; }

            }
        // }
    }
    return false;
};

// Accepted!! 10.16.2020
// Runtime: 72 ms, faster than 91.85% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 38.6 MB, less than 41.06% of JavaScript online submissions for Search a 2D Matrix.

console.log("false");
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13));
console.log(searchMatrix([], 0));
console.log();

console.log("true");
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3));
console.log(searchMatrix([[1, 3]], 3));
console.log();


