/**287. Find the Duplicate Number
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
 * 
 * Example 1:
 * 
 * Input: [1,3,4,2,2]
 * Output: 2
 * Example 2:
 * 
 * Input: [3,1,3,4,2]
 * Output: 3
 * Note:
 * 
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n2).
 * There is only one duplicate number in the array, but it could be repeated more than once.
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let len = nums.length;
    let dict = {};
    for(let i = len - 1; i >= 0; i--){
        console.log("FOR LOOP, i: " + i + ", nums: " + nums);

        if(nums[i] in dict){ 
            return nums[i];
            
        } else {
            dict[nums[i]] = 1; 
        }
    }
    console.log(nums);
    return nums.length;
    
};

// example 1: 2
console.log(findDuplicate([1,3,4,2,2]));

// example 2: 3
console.log(findDuplicate([3,1,3,4,2]));

// Accepted!! 07.05.2020
// Runtime: 84 ms, faster than 26.75% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 36.8 MB, less than 30.15% of JavaScript online submissions for Find the Duplicate Number.