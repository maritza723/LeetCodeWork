/**152. Maximum Product Subarray
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray. *//**
* @param {number[]} nums
* @return {number}
*/
var maxProduct = function (nums) {
    let len = nums.length;
    if(len == 1) { return nums[0]; }
    let max = 1;
    let maxAns = 1;
    let con = 0;
    let j = 1;
    for (let i = 0; i < len - 1; i++) {
        if(max * nums[i] * nums[j] < max){
            con = 0;
            max = 1;
        } else if (max * nums[i] * nums[j] > max && con == 0 & j != i + 1) {
            con = 0;
            max = 1;
        } else if (nums[i] * nums[j] >= max && con == 0){
            con++;
            max = nums[i] * nums[j];
            console.log(nums[i] + "\t" + nums[j]);
            console.log(max);
        } else if (max * nums[j] >= max && con > 0){
            con++;
            max *= nums[j];
            console.log(nums[i] + "\t" + nums[j]);
            console.log(max);
        }
        if(maxAns < max){
            maxAns = max;
        }
        j++;

    }
    nums.sort((a, b) => (a - b));
    if(nums[len - 1] == 0){
         return 0; 
    } else if (maxAns == 1 && nums[len - 1]){
        return nums[1];
    }
    return maxAns;
};

// // example 1: 6
// console.log(maxProduct([2,3,-2,4]));

// example 2: 0
// console.log(maxProduct([-2,0,-1]));

// example 3: 
// console.log(maxProduct([0, 10, 20, 3, 4, -10, 5, 50]))

/**
let len = nums.length;
let max = 0;
let con = 0;
let j = 1;
for (let i = 0; i < len - 1; i++) {
    
    if(nums[i] * nums[j] < max){
        con = 0;
    } else if (nums[i] * nums[j] > max && con == 0 & j != i + 1) {
        con = 0;
    } else if (nums[i] * nums[j] >= max && con >= 0){
        con++;
        max = nums[i] * nums[j];

    }
    j++;

}
return max; */