/**1672. Richest Customer Wealth
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * 
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * 
 * Example 1:
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * Explanation:
 * 1st customer has wealth = 1 + 2 + 3 = 6
 * 2nd customer has wealth = 3 + 2 + 1 = 6
 * Both customers are considered the richest with a wealth of 6 each, so return 6.
 * 
 * Example 2:
 * Input: accounts = [[1,5],[7,3],[3,5]]
 * Output: 10
 * Explanation: 
 * 1st customer has wealth = 6
 * 2nd customer has wealth = 10 
 * 3rd customer has wealth = 8
 * The 2nd customer is the richest with a wealth of 10.
 * 
 * Example 3:
 * Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
 * Output: 17
 *//**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let accLen = accounts.length;
    let cust = accounts[0];
    let len = cust.length;
    let max = 0;
    for (let i = 0; i < accLen; i++){
        let sum = accounts[i][0]; 
        for(let j = 1; j < len; j++){
            sum += accounts[i][j];
        }
        if(sum > max){ max = sum; }
    }
    return max;
};

// Accepted!! 12.01.2020
// Runtime: 84 ms, faster than 51.80% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 38.4 MB, less than 78.42% of JavaScript online submissions for Richest Customer Wealth.


// console.log(maximumWealth([[1,2,3],[3,2,1]]) + " == 6");
// console.log();
// console.log(maximumWealth([[1,5],[7,3],[3,5]]) + " == 10");
// console.log();
// console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) + " == 17");