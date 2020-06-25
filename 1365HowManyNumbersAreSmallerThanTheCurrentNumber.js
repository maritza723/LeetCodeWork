/**1365. How Many Numbers Are Smaller Than the Current Number 
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * 
 * Return the answer in an array.
 * 
 *  
 * 
 * Example 1:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 * Explanation: 
 * For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
 * For nums[1]=1 does not exist any smaller number than it.
 * For nums[2]=2 there exist one smaller number than it (1). 
 * For nums[3]=2 there exist one smaller number than it (1). 
 * For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
 * 
 * Example 2:
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3] 
 *  
 * Example 3:
 * Input: nums = [7,7,7,7]
 * Output: [0,0,0,0]
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let len = nums.length;
    let newArr = [];
    let count = 0;
    let j = 0;
    for(let i = 0; i < len; i++){    
        console.log("line 33, newArr: " + newArr);
        for(let j = 0; j < len; j++){ 
            if(nums[i] > nums[j]){
            count++;
            } 
        }
        newArr.push(count);
        count = 0;
    }
    return newArr;
};
// example 1: [4,0,1,1,3]
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

// example 2: [2,1,0,3] 
console.log(smallerNumbersThanCurrent([6,5,4,8]));

// example 3: [0,0,0,0]
console.log(smallerNumbersThanCurrent([7,7,7,7]));


// Accepted!!
// Runtime: 84 ms, faster than 62.30% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
// Memory Usage: 36.9 MB, less than 41.72% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.


// DEADCODE 
// let dict = {};
// for(let i = 0; i < nums.length; i++){     
//     if(nums[i] in dict){ 
//         dict[nums[i]]++;
//     } else { 
//         dict[nums[i]] = 1; 
//     }
//     console.log("dict at line 39: " + `${dict[nums[i]]}`);
// }
// // if(dict[nums[] > ]){

// // }