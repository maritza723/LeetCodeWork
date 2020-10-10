/**532. K-diff Pairs in an Array
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 * 
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 * 
 * 0 <= i, j < nums.length
 * i != j
 * |nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 * 
 * Example 1:
 * Input: nums = [3,1,4,1,5], k = 2
 * Output: 2
 * Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
 * Although we have two 1s in the input, we should only return the number of unique pairs.
 * 
 * Example 2:
 * Input: nums = [1,2,3,4,5], k = 1
 * Output: 4
 * Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
 * 
 * Example 3:
 * Input: nums = [1,3,1,5,4], k = 0
 * Output: 1
 * Explanation: There is one 0-diff pair in the array, (1, 1).
 * 
 * Example 4:
 * Input: nums = [1,2,4,4,3,3,0,9,2,3], k = 3
 * Output: 2
 * 
 * Example 5:
 * Input: nums = [-1,-2,-3], k = 1
 * Output: 2 *//**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let len = nums.length;
    let dict = {};
    let dictLen = 0;
    let ans = 0;
    for (let i = 0; i < len; i++){
        if (nums[i] in dict && k > 0){
            dict[nums[i]]++;
            nums.splice(i, 1);
            i--;
            len --;
        } else if (nums[i] in dict && k == 0){
            if(dict[nums[i]] == 1){
                dict[nums[i]]++;
                dictLen++;
            }
        } else { dict[nums[i]] = 1; }
        
    }
    if(k == 0){ return dictLen; }
    len = nums.length;
    for (let i = 0; i < len; i++){
        for (let j = i + 1; j < len; j++){
                if(Math.abs(nums[i] - nums[j]) == k){
                    ans ++;
            }
        }
    }
    return ans;
};

// Accepted!! 10.10.2020
// Runtime: 216 ms, faster than 28.15% of JavaScript online submissions for K-diff Pairs in an Array.
// Memory Usage: 42.5 MB, less than 5.26% of JavaScript online submissions for K-diff Pairs in an Array.


// console.log(findPairs([3,1,4,1,5], 2) + " == 2");
// console.log();
// console.log(findPairs([1,2,3,4,5], 1) + " == 4");
// console.log();
// console.log(findPairs([1,3,1,5,4], 0) + " == 1");
// console.log();
// console.log(findPairs([1,2,4,4,3,3,0,9,2,3], 3) + " == 2");
// console.log();
// console.log(findPairs([-1,-2,-3], 1) + " == 2");
// console.log();
// console.log(findPairs([1,1,1,1,1], 0) + " == 1");
// console.log();
// console.log(findPairs([1,1,1,2,2], 0) + " == 2");
// console.log();
