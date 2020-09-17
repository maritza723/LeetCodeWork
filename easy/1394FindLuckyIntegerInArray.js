/**1394. Find Lucky Integer in an Array
 * Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
 * 
 * Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.
 * 
 * Example 1:
 * Input: arr = [2,2,3,4]
 * Output: 2
 * Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
 * 
 * Example 2:
 * Input: arr = [1,2,2,3,3,3]
 * Output: 3
 * Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
 * 
 * Example 3:
 * Input: arr = [2,2,2,3,3]
 * Output: -1
 * Explanation: There are no lucky numbers in the array.
 * 
 * Example 4:
 * Input: arr = [5]
 * Output: -1
 * 
 * Example 5:
 * Input: arr = [7,7,7,7,7,7,7]
 * Output: 7
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let dict = {};
    let ans = [];
    arr.sort((a, b) => (b - a));
    console.log(arr)
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] in dict) {
            dict[arr[i]]++;
        } else {
            dict[arr[i]] = 1;
        }
    }
    for (let i = 0; i < len; i++) {
        if (arr[i] == dict[arr[i]]) {
            ans = dict[arr[i]];
            return ans;
            // } else {
            //     dict[arr[i]] = 1;
        }
    }
    return -1;

};

// Accepted!! 08.12.2020
// Runtime: 84 ms, faster than 51.40% of JavaScript online submissions for Find Lucky Integer in an Array.
// Memory Usage: 37.4 MB, less than 40.64% of JavaScript online submissions for Find Lucky Integer in an Array.

// example 1: 2
// console.log(findLucky([2,2,3,4]));

// example 2: 3
// console.log(findLucky([1,2,2,3,3,3]));

// example 3: -1
// console.log(findLucky([2,2,2,3,3]));

// example 4: -1
// console.log(findLucky([5]));

// example 5: 7
// console.log(findLucky([7,7,7,7,7,7,7]));

// example 6: 3
// console.log(findLucky([3, 3, 5, 6, 7, 2, 2, 1, 3]));