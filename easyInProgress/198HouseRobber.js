/**198. House Robber
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). 
 * Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). 
 * Total amount you can rob = 2 + 9 + 1 = 12. *//**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let len = nums.length;
    let robOdds = nums[0];
    let robEvens = nums[1];
    for(let i = 2; i < len; i+=2){
        if(nums[i] > nums[i + 1]){
            robOdds += nums[i];
        }
    }
    for(let i = 3; i < len; i+=2){
        if(nums[i] > nums[i + 1]){
            robEvens += nums[i];
        }
    }
    if(robOdds > robEvens){
        return robOdds
    } else { return robEvens }
};

// example 1: 4
// console.log(rob([1,2,3,1]));

// example 2: 12
// console.log(rob([2,7,9,3,1]));

// example 3: 4
// console.log(rob([2, 1, 1, 2]));




/**FIRST TRY
     * let len = nums.length;
     * let robOdds = 0;
     * let robEvens = 0;
     * for(let i = 0; i < len; i++){
     *     if(i%2 == 0){
     *         robOdds += nums[i];
     *     } else { robEvens += nums[i] }
     *     
     * }
     * if(robOdds > robEvens){
     *     return robOdds
     * } else { return robEvens } */