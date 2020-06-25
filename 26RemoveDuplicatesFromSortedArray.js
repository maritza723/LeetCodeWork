/**26. Remove Duplicates from Sorted Array
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Given nums = [1,1,2],
 * 
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * Example 2:
 * Given nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
 * 
 * It doesn't matter what values are set beyond the returned length.
 * Clarification:
 * 
 * Confused why the returned value is an integer but your answer is an array?
 * 
 * Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    let dict = {};
    for(let i = len - 1; i >= 0; i--){
        console.log("FOR LOOP, i: " + i + ", nums: " + nums);

        if(nums[i] in dict){ 
            dict[nums[i]]++;
            nums.splice(i,1);

        } else { 
            dict[nums[i]] = 1; 

        }
    }
    console.log(nums);
    return nums.length;
};

//example 1: 2
console.log(removeDuplicates([1,1,2]));

// example 2: 5
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// Accepted!
// Runtime: 100 ms, faster than 36.70% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 39.8 MB, less than 5.02% of JavaScript online submissions for Remove Duplicates from Sorted Array.