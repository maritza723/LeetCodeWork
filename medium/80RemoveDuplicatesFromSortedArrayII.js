/**80. Remove Duplicates from Sorted Array II
 * Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Given nums = [1,1,1,2,2,3],
 * 
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * Example 2:
 * Given nums = [0,0,1,1,1,1,2,3,3],
 * 
 * Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
 * 
 * It doesn't matter what values are set beyond the returned length.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    let dict = {};
    for(let i = len - 1; i >= 0; i--){
        console.log("FOR LOOP, i: " + i + ", nums: " + nums);

        if(nums[i] in dict && dict[nums[i]] == 1){ 
            dict[nums[i]]++;
        } else if(nums[i] in dict) { 
            dict[nums[i]]++;
            nums.splice(i,1);
        } else {
            dict[nums[i]] = 1; 
        }
    }
    console.log(nums);
    return nums.length;
};

// example 1: 5 [1,1,2,2,3]
console.log(removeDuplicates([1,1,1,2,2,3]));

// example 2: 7 [0,0,1,1,2,3,3]
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));

// Accepted!!
// Runtime: 92 ms, faster than 19.90% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 38.6 MB, less than 5.15% of JavaScript online submissions for Remove Duplicates from Sorted Array II.