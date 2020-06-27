/**442. FindAll Duplicates in an Array
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * 
 * Find all the elements that appear twice in this array.
 * 
 * Could you do it without extra space and in O(n) runtime?
 * 
 * Example:
 * Input:
 * [4,3,2,7,8,2,3,1]
 * 
 * Output:
 * [2,3]
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let len = nums.length;
    let dict = {};
    for(let i = len - 1; i >= 0; i--){
        console.log("FOR LOOP, i: " + i + ", nums: " + nums);

        if(nums[i] in dict){ 
            dict[nums[i]]++;

        } else { 
            dict[nums[i]] = 1; 
            nums.splice(i,1);
        }
    }
    console.log(nums);
    return nums;
};

// example: [2,3]
console.log(findDuplicates([4,3,2,7,8,2,3,1]));

// Accepted!!
// Runtime: 464 ms, faster than 12.54% of JavaScript online submissions for Find All Duplicates in an Array.
// Memory Usage: 50.2 MB, less than 23.01% of JavaScript online submissions for Find All Duplicates in an Array.