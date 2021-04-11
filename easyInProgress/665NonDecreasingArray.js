/**665. Non-decreasing Array
 * Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * 
 * We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 * 
 * Example 1:
 * Input: nums = [4,2,3]
 * Output: true
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 * 
 * Example 2:
 * Input: nums = [4,2,1]
 * Output: false
 * Explanation: You can't get a non-decreasing array by modify at most one element.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = nums.length;
    if(nums.length%2 === 0){
        count++; 
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[i + 1]){
            count--;
        }
    }
    if(count > Math.round(nums.length/2)){
    return true;
    } else {
    return false;
    }

};



// example 1: true
console.log(checkPossibility([4,2,3]));

// example 2: false
console.log(checkPossibility([4,2,1]));

// test 1: false
console.log(checkPossibility([3,4,2,3]));