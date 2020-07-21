/**977. Squares of a Sorted Array
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
 * 
 *  
 * 
 * Example 1:
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 * Example 2:
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *  
 * 
 * Note:
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order. 
 * */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let len = A.length;

    for (let i = 0; i < len; i++) {
        A[i] *= A[i];
        // console.log(A[i]);
    }

    console.log(A);
    for (i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (A[j] > A[j + 1]) {
                let temp = A[j + 1];
                A[j + 1] = A[j];
                A[j] = temp;
            }

        }
    }
    return A;
};

// Accepted!!! 07.21.2020
// Runtime: 2540 ms, faster than 5.02% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 43 MB, less than 76.29% of JavaScript online submissions for Squares of a Sorted Array.

// example 1: [0,1,9,16,100] 
// console.log(sortedSquares([-4,-1,0,3,10]));

// example 2: [4,9,9,49,121]
// console.log(sortedSquares([-7,-3,2,3,11]));

// test: [1,4,9,9]
// console.log(sortedSquares([-3, -3, -2, 1]));