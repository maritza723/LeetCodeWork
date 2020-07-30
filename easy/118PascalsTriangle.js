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
var generate = function(numRows) {
    if(numRows == 1){
        return [1];
    }
    let ans = [[1], [1,1]];
    let run = [1,1];
    for(let i = 2; i <= numRows; i++){       
        run[i]+=1;
        run[run.length - 1]+=1;
        run.unshift(1);
        run.push(1);
        ans.push(run);
    }
    return ans;
};

// example 1:
console.log(generate(5));