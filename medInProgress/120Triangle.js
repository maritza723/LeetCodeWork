/**120. Triangle
 * Given a triangle array, return the minimum path sum from top to bottom.
 * 
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 * 
 * Example 1:
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 * 
 * Example 2:
 * Input: triangle = [[-10]]
 * Output: -10 *//**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let sum = 0;
    let array = [];
    for (let i = 0; i < triangle.length; i++){
        let min = triangle[i][0];
        for (let j = 0; j < triangle.length; j++){
            console.log(min);
            if(triangle[i][j] < min){
                min = triangle[i][j];
            }
        }
        array.push(min);
    }
    let len = array.length;
    for(let i = 0; i < len; i++){
        sum += array[i];
    }
    return sum;

};

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]) + " == 11");
// console.log();
// console.log(minimumTotal([[-10]]) + " == -10");
// console.log();
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]) + " == -1");