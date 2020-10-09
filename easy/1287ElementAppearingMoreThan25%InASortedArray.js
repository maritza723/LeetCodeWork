/**1287. Element Appearing More Than 25% In Sorted Array
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.
 * 
 * Return that integer.
 * 
 * Example 1:
 * 
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6 *//**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let len = arr.length;
    let spec = Math.trunc(len/4);
    let dict = {};
    for (let i = 0; i < len; i++){
        if (arr[i] in dict){
            dict[arr[i]]++;
        } else { dict[arr[i]] = 1; }
        if(dict[arr[i]] > spec){ return arr[i]; }
    }
    
};

// Accepted!! 10.09.2020
// Runtime: 88 ms, faster than 43.87% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
// Memory Usage: 41.5 MB, less than 11.46% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.


console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]) + ", Output: 6");