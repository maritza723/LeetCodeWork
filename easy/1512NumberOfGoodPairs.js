/**1512. Number of Good Pairs
 * Given an array of integers nums.
 * 
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Return the number of good pairs.
 * 
 *  
 * 
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 * 
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 0
 *  
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 100
 * 1 <= nums[i] <= 100
 * 
 * /
 * /**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                count++;
            }
        }
    }
    return count;
};

// example 1: 4
// console.log(numIdenticalPairs([1,2,3,1,1,3]));

// example 2: 6
// console.log(numIdenticalPairs([1,1,1,1]));

// example 3: 0
// console.log(numIdenticalPairs([1,2,3]));

//Accepted 07.14.2020
//Runtime: 72 ms, faster than 81.91% of JavaScript online submissions for Number of Good Pairs.
// Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Number of Good Pairs.