/**283. Move Zeros
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Return the running sum of nums.
 * 
 * Example 1:
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let chk = 0;
    if(nums[0] === 0){
        nums.splice(0, 1);
        // console.log(i);
        // console.log(chk);
        // console.log(nums + " at line 24");
        nums.push(0);
        // console.log(nums + " at line 26");
    } 
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1);
            // console.log(i);
            // console.log(chk);
            // console.log(nums + " at line 24");
            nums.push(0);
            // console.log(nums + " at line 26");
            i = chk;
            chk++;
        } 

    }
    return nums;
};

// example 1: 
// console.log(moveZeroes([0,1,0,3,12]));
// test 2:
// console.log(moveZeroes([0,0,1]));
// test 3:
// console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));

// Accepted!!
// Runtime: 124 ms, faster than 5.63% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.9 MB, less than 5.02% of JavaScript online submissions for Move Zeroes.







// DEAD CODE :(
// let chk = 0;
    
// for(let i = 1; i < nums.length; i++){
//     if(nums[i] > 0 && nums [i-1] != 0){
//         let temp = nums[i];
//         console.log(temp + " at line 20");
//         nums[i] = nums [i-1];
//         nums[i-1] = temp;
//         i = chk;
//         chk++;
//         console.log(chk);
//         console.log(nums);
//     } else if (nums[i] > 0){
//         let temp = nums[i];
//         console.log(temp + " at line 29");
//         nums[i] = nums [chk];
//         nums[chk] = temp;
//         i = chk;
//         chk++;
//         console.log(chk);
//         console.log(nums);
//     }

// }
// return nums;