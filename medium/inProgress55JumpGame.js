/**55. Jump Game
* Given an array of non-negative integers, you are initially positioned at the first index of the array.
* 
* Each element in the array represents your maximum jump length at that position.
* 
* Determine if you are able to reach the last index.
* 
*  
* 
* Example 1:
* 
* Input: nums = [2,3,1,1,4]
* Output: true
* Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
* 
* Example 2:
* 
* Input: nums = [3,2,1,0,4]
* Output: false
* Explanation: You will always arrive at index 3 no matter what. 
*
* @param {number[]} nums
* @return {boolean}
*/
var canJump = function (nums) {
    let len = nums.length;
    let prev = -1;

    for(i = 1; i < len; i++){
        if(nums[i] != 0){
            i = nums[i];

        } else if(nums[i] === 0 && i != 0){
            i = prev;
        // } else if( )
        } else {
            return false;
        }
        prev++;
        console.log("line 36: i is " + i + " * nums[i] is " + nums[i]);
    }

    if(i >= len){
    return true;
    }
};

// // example 1: true
// console.log(canJump([2,3,1,1,4]));

// // example 2: false
console.log(canJump([3,2,1,0,4])); 

// //test 1: false
// console.log(canJump([0,1]));

// //test 2: true
// console.log(canJump([0]));

// //test 3: false
// console.log(canJump([3,2,1,0,4]));

// //test 4: true
// console.log(canJump([2,0,0]));




// DEADCODE
// let len = nums.length;
// if(nums[0] >= len - 1){
//     return true;
// }
// if(nums[0] === 0 && len != 1){
//     return false;
// }
// for(i = 1; i < len; i++){

//     if(nums[i] != 0){
//         i = nums[i];
//     } else if(nums[i] === 0 && i === len - 1){
//         return true;
//     } else if(nums[i] === 0){
//         return false;
//     }
//     // console.log("line 36: i is " + i + " * nums[i] is " + nums[i]);
// }

// if(i >= len){
// return true;
// }