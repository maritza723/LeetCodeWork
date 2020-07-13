/**441. Arranging Coins
 * You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
 * 
 * Given n, find the total number of full staircase rows that can be formed.
 * 
 * n is a non-negative integer and fits within the range of a 32-bit signed integer.
 * 
 * Example 1:
 * n = 5
 * 
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤
 * Because the 3rd row is incomplete, we return 2.
 * 
 * Example 2:
 * n = 8
 * 
 * The coins can form the following rows:
 * ¤
 * ¤ ¤
 * ¤ ¤ ¤
 * ¤ ¤
 * Because the 4th row is incomplete, we return 3.
 *
 *  
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n < 1){
        return 0;
    }
    let steps = 1;
    let count = 0;
    while(n > 0){
        if(n - count > steps + 1){
            n--;
            count = count + steps;
            steps++;
        } else {
            return steps;
        }
    }
};

// example 1: 2
// console.log(arrangeCoins(5));

// example 2: 3
// console.log(arrangeCoins(8));

// Accepted!!
// Runtime: 100 ms, faster than 48.56% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 38.7 MB, less than 9.15% of JavaScript online submissions for Arranging Coins.