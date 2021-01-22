/**1679. Max Number of K-Sum Pairs
 * You are given an integer array nums and an integer k.
 * 
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * 
 * Return the maximum number of operations you can perform on the array.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4], k = 5
 * Output: 2
 * Explanation: Starting with nums = [1,2,3,4]:
 * - Remove numbers 1 and 4, then nums = [2,3]
 * - Remove numbers 2 and 3, then nums = []
 * There are no more pairs that sum up to 5, hence a total of 2 operations.
 * 
 * Example 2:
 * Input: nums = [3,1,3,4,3], k = 6
 * Output: 1
 * Explanation: Starting with nums = [3,1,3,4,3]:
 * - Remove the first two 3's, then nums = [1,4,3]
 * There are no more pairs that sum up to 6, hence a total of 1 operation. *//**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var maxOperations = function (nums, k) {
    let len = nums.length;
    let ans = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] >= k) {
            nums.splice(i, 1);
            i++;
        }
        for (let j = i + 1; j < len; j++) {
            // console.log("@i: " + nums[i]);
            // console.log("@j: " + nums[j]);
            // console.log("nums", nums);

            if (nums[j] >= k) {
                nums.splice(j, 1);
                // j++;
            }

            if (nums[i] + nums[j] == k) {
                ans++;
                nums.splice(j, 1);
                break;
                // nums.splice(nums[i], 1);
                // i++;
                // j = i;
                // console.log(nums);
            }
            if (len > nums.length) {
                len = nums.length;
            }
            // console.log("ans: " + ans);
        }
    }
    return ans;
};

console.log(maxOperations([1, 2, 3, 4], 5) + " == 2");
console.log();
console.log(maxOperations([3, 1, 3, 4, 3], 6) + " == 1");
console.log();
console.log(maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2) + " == 2");
console.log();
console.log(maxOperations([3, 5, 1, 5], 2) + " == 0");
console.log();
console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4) + " == 2");
console.log();
console.log(maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3) + " == 4");


// var didntPassEdges = function (nums, k) {
//     let len = nums.length;
//     let ans = 0;
//     let i = 0;
//     for (let j = i + 1; j < len; j++) {
//         // console.log("@i: " + nums[i]);
//         // console.log("@j: " + nums[j]);
//         // console.log("nums", nums);
//         if (nums[i] >= k) {
//             nums.splice(i, 1);
//             i++;
//             j++;
//         }
//         if (nums[j] >= k) {
//             nums.splice(j, 1);
//         }

//         if (nums[i] + nums[j] == k) {

//             ans++;
//             nums.splice(j, 1);
//             // nums.splice(nums[i], 1);
//             i++;
//             j = i;
//             // console.log(nums);
//         }
//         if (len > nums.length) {  // to avoid NaN with the splicing
//             len = nums.length;
//         }
//         if (j == len - 1 && i < len - 1) {    // if j gets to the end of the array, we need to move i forward and start j again at i + 1
//             i++;
//             j = i;
//         }
//         // console.log("ans: " + ans);
//     }
//     return ans;
// };


// var LiaSolution = function (nums, k) {
//     let ans = 0;
//     let dict = {};
//     for (let val of [1, 2, 3, 4, 1, 4, 2, 3]) {
//         if (val >= 5) { continue; }
//         if ((5 - val) in dict) {
//             delete dict[5 - val];
//             ans++;
//         } else {
//             dict[5 - val] = 0;
//         }
//         // console.log();
//         // console.log("dict", dict);
//         // console.log("val", val, " 5-val", 5 - val);
//         // console.log();
//     }
//     // console.log("answer!!!!", ans);
// }