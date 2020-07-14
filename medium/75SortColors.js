/** 75. Sort Colors
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * 
 * Note: You are not suppose to use the library's sort function for this problem.
 * 
 * Example:
 * 
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let sum1 = 0;
    let sum2 = 0;
    let len = nums.length;
    let count = 0;

    for (let i = 0; count < len; i++) {
        console.log(nums + " @ " + i + ", " + "line 19")
        if (nums[i] === 1) {
            nums.splice(i, 1);
            console.log(nums + " if 1***");
            i--;
            sum1++;
        } else if (nums[i] === 2) {
            nums.splice(i, 1);
            console.log(nums + " if 2***");
            i--;
            sum2++;
        }
        count++;
    }
        for (i = 0; i < sum1; i++) {
            nums.push(1);
        }
        for (i = 0; i < sum2; i++) {
            nums.push(2);
            console.log(nums + " line 41!!!");
        }
        return nums;
    };

    // example: 
    // console.log(sortColors([2, 0, 2, 1, 1, 0]));

// Accepted! 06.29.2020
// Runtime: 64 ms, faster than 77.06% of JavaScript online submissions for Sort Colors.
// Memory Usage: 33.6 MB, less than 93.46% of JavaScript online submissions for Sort Colors.





// DEADCODE

// let sum0 = 0;
// let sum1 = 0;
// let sum2 = 0;

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0){
//         sum0++;
//     } else if(nums[i] === 1){
//         sum1++;
//     } else {
//         sum2++;
//     }
//     console.log(nums);
//     console.log(sum0 + ", " + sum1 + ", " + sum2);
// }
// nums = [];
// for(i = 0; i < sum0; i++){
//     nums.push(0);
// }
// for(i = 0; i < sum1; i++){
//     nums.push(1);
// }
// for(i = 0; i < sum2; i++){
//     nums.push(2);
// }


// *****DID NOT CHANGE ARRAY HAHA*****
// let len = nums.length;

// for(let i = 0; i < len; i++){
//     console.log(nums + " @ " + i + ", " + "line 19")
//     if(nums[0] === 0){
//         nums.splice(0, 1);
//         console.log(nums + " if 0***");
//         nums.push(0);
//     } else if(nums[0] === 1){
//         nums.splice(0, 1);
//         console.log(nums + " if 1***");
//         nums.push(1);
//     } else if(nums[0] === 2){
//         nums.splice(0, 1);
//         console.log(nums + " if 2***");
//         nums.push(2);
//     }
//     console.log(nums + " line 33");
// }

// return nums;
// };