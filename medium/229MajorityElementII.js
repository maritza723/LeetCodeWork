/**229. Majority Element II
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * 
 * Note: The algorithm should run in linear time and in O(1) space.
 * 
 * Example 1:
 * 
 * Input: [3,2,3]
 * Output: [3]
 * Example 2:
 * 
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 * 
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const majorElement = (nums) => {
    // edge cases

    if(nums.length <= 1) { return nums }

    if(nums.length === 2) {


        if(nums[0] === nums[1]){
            nums.pop();
        }
        return nums;
    }
    
    if(nums.length === 3) {
        let dictLen3 = {};
        for(let val of nums) {
            if (val in dictLen3) {
                return [val];
            } else {
                dictLen3[val] = 1
            }
        }
        return []
    }

    let magicNum = Math.ceil(nums.length/3);
    let dict = {};
    let ans = [];
    
    for(let val of nums) {
        if(val in dict){
            dict[val]++;
            if(dict[val]>= magicNum && !(ans.includes(val))) {
                ans.push(val);
            }
        } else {
            dict[val] = 1
        }
    }
    return ans;
};


// example 1: [3]
// console.log(majorElement([3,2,3]));

// example 2: [1,2]
// console.log(majorityElement([1,1,1,3,3,2,2,2]));

// test 1: [2]
// console.log(majorityElement([2,2]));

// test 2: [0] 
// console.log(majorElement([0,0,0]));

// test 3: [] 
// console.log(majorElement([1,2,3]));

// test 4: [1] 
// console.log(majorElement([1]));

// test 5: [1,2] 
// console.log(majorElement([1,2]));

// test 6: [3]
// console.log(majorElement([3, 3, 4]));

// test 7: [5] 
// console.log(majorElement([5,5,5,3]));



// Accepted!! 07.01.2020
// Runtime: 80 ms, faster than 26.53% of JavaScript online submissions for Majority Element II.
// Memory Usage: 40.5 MB, less than 5.24% of JavaScript online submissions for Majority Element II.







// DEADCODE
//
// var majorityElementPractice = function (nums) {
//     if (nums.length === 1) { //if there is onle one in nums, just return nums
//         return nums;
//     }
//     if (nums.length < 3) { //if it's a two long array, and the value is doubled return it once
//         if (nums[0] === nums[1]) {
//             nums.pop();
//         }
//         return nums;
//     }
//     let magNum = nums.length / 3; //target number for a maj element
//     let dict = {};
//     let newArr = [];
//     if (nums.length <= 3) { //if array is under 3
//         // would you want to do this if there is more than 3 elements See below
//         console.log(newArr + "LINE 33")
//         for (let i = 0; i < nums.length; i++) { //iterate through array to create a new array of maj elements only
//             if (nums[i] in dict) {
//                 dict[nums[i]]++;
//                 newArr.push(nums[i]);
//                 if (dict[nums[i]] >= 2) { // this is specific for 3 becuase it checks for one of the tests below. I forget which one
//                     console.log(newArr + "LINE 39")
//                     return newArr;
//                 }
//             } else {
//                 dict[nums[i]] = 1;
//                 nums.splice(0, 1);
//                 console.log(newArr + "LINE 47")
//                 i = 0;
//             }
//         }
//         return newArr;
//     }
//     //this is a repeat with magNum instead of two. I think the one above was for test 2 or 5
//     // understood
//     //  good bones, I can see some repeated code but over all this is how I would do it
//     // what are you running into problems with?
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in dict) {
//             dict[nums[i]]++;
//             if (dict[nums[i]] >= magNum) {
//                 newArr.push(nums[i]);
//             }
//         } else {
//             dict[nums[i]] = 1;
//         }

//     }
//     return newArr;
// };
// if(nums.length === 1) return nums;
// if(nums.length < 3){
// if(nums[0] === nums[1]){
//     nums.pop();
// }
// return nums;
// }
// let magNum = nums.length/3;
// let dict = {};
// let newArr = [];
// if(nums.length <= 3){
//     for(let i = 0; i < nums.length; i++){ 

//         if(nums[i] in dict){ 
//             dict[nums[i]]++;
//             if(dict[nums[i]] >= 2){
//                 newArr.push(nums[i]);
//                 return newArr;
//             }
//         } else { 
//             dict[nums[i]] = 1; 
//         }
//     }
//     if(newArr.length === 0){
//         return newArr;
//     }
// }

// for(let i = 0; i < nums.length; i++){     
//     if(nums[i] in dict){ 
//         dict[nums[i]]++;
//         if(dict[nums[i]] >= magNum){
//             newArr.push(nums[i]);
//         }
//     } else { 
//         dict[nums[i]] = 1; 
//     }


// }
// return newArr;
// };
