/**169. Majority Element
* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
* 
* You may assume that the array is non-empty and the majority element always exist in the array.
* 
* Example 1:
* 
* Input: [3,2,3]
* Output: 3
*
* Example 2:
* 
* Input: [2,2,1,1,1,2,2]
* Output: 2
* 
* @param {number[]} nums
* @return {number}
*/
var majorityElement = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let magNum = nums.length/2;
    let dict = {};
    
    for(let i = 0; i < nums.length; i++){ 
    
        if(nums[i] in dict){ 
            dict[nums[i]]++;
            if(dict[nums[i]] >= magNum){
                return nums[i];
            }
        } else { 
            dict[nums[i]] = 1; 
        }
    }
};

// example 1: 
// console.log(majorityElement([3,2,3]));

// example 1: 
// console.log(majorityElement([2,2,1,1,1,2,2]));


// Accepted!
// Runtime: 80 ms, faster than 20.31% of JavaScript online submissions for Majority Element.
// Memory Usage: 38.7 MB, less than 9.96% of JavaScript online submissions for Majority Element.