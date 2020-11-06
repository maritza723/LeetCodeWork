/**1217. Minimum Cost to Move Chips to The Same Position
 * We have n chips, where the position of the ith chip is position[i].
 * 
 * We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
 * 
 * position[i] + 2 or position[i] - 2 with cost = 0.
 * position[i] + 1 or position[i] - 1 with cost = 1.
 * Return the minimum cost needed to move all the chips to the same position.
 * 
 * Example 1:
 * Input: position = [1,2,3]
 * Output: 1
 * Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
 * Second step: Move the chip at position 2 to position 1 with cost = 1.
 * Total cost is 1.
 * 
 * Example 2:
 * Input: position = [2,2,2,3,3]
 * Output: 2
 * Explanation: We can move the two chips at poistion 3 to position 2. Each move has cost = 1. The total cost = 2.
 * 
 * Example 3:
 * Input: position = [1,1000000000]
 * Output: 1 *//**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function(chips) {
    let len = chips.length;
    let dict = { 
        "evens": 0,
        "odds": 0, 
    };
    for (let i = 0; i < len; i++){
        if(chips[i]%2 == 0){dict["evens"]++;}
        else { dict["odds"]++;}
    }
    return Math.min(dict["odds"], dict["evens"]);
};


// Accepted!! 11.05.2020
// Runtime: 80 ms, faster than 34.62% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
// Memory Usage: 38.4 MB, less than 32.69% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.


console.log(minCostToMoveChips([1,2,3]) + " == 1");
console.log();
console.log(minCostToMoveChips([2,2,2,3,3]) + " == 2");
console.log();
console.log(minCostToMoveChips([1,1000000000]) + " == 1");