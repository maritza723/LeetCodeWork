/**1207. Unique Number of Occurrences
 * Given an array of integers arr, write a function that returns true if and only if the number 
 * of occurrences of each value in the array is unique.
 * 
 * Example 1:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
 * 
 * Example 2:
 * Input: arr = [1,2]
 * Output: false
 * Example 3:
 * 
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true *//**
* @param {number[]} arr
* @return {boolean}
*/
var uniqueOccurrences = function (arr) {
    let len = arr.length;
    let dict = {};
    for (let i = 0; i < len; i++){
        if(arr[i] in dict){
            dict[arr[i]]++;
        } else { dict[arr[i]] = 1; }
    }
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            if(arr[i] != arr[j] && dict[arr[i]] === dict[arr[j]]){ return false; }
        }
    }
    return true;
};

// Accepted!! 11.06.2020
// Runtime: 160 ms, faster than 7.37% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 39.2 MB, less than 11.06% of JavaScript online submissions for Unique Number of Occurrences.

// console.log("true: ");
// console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// console.log();
// console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
// console.log("false: ");
// console.log(uniqueOccurrences([1, 2]));

var uniqueOccurrences2 = function (arr) {
    let dict = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in dict) {
            dict[arr[i]]++;
            arr.splice(i, 1);
            i--;
        } else { dict[arr[i]] = 1; }
    }
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] != arr[j] && dict[arr[i]] === dict[arr[j]]) { return false; }
        }
    }
    return true;
};

// Accepted!! 11.06.2020
// Runtime: 80 ms, faster than 61.92% of JavaScript online submissions for Unique Number of Occurrences.
// Memory Usage: 39.3 MB, less than 11.06% of JavaScript online submissions for Unique Number of Occurrences.