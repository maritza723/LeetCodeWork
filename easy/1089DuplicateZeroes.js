/**1089. Duplicate Zeros
 * Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
 * 
 * Note that elements beyond the length of the original array are not written.
 * 
 * Do the above modifications to the input array in place, do not return anything from your function.
 * 
 *  
 * 
 * Example 1:
 * Input: [1,0,2,3,0,4,5,0]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
 * 
 * Example 2:
 * Input: [1,2,3]
 * Output: null
 * Explanation: After calling your function, the input array is modified to: [1,2,3]
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i] == 0) {
            let j = i + 1;   
            let temp = arr[j];
            console.log("** " + temp);
            while (j < len - 1) {
                let temp2 = arr[j + 1];
                arr[j + 1] = temp;
                temp = temp2;
                j++;
            }
            console.log(temp)
            if(i + 1 < len){ arr[i + 1] = 0; }
            i++;
        }
        
    }
    return arr;
};

// Accepted!! 08.02.2020
// Runtime: 100 ms, faster than 36.07% of JavaScript online submissions for Duplicate Zeros.
// Memory Usage: 37.4 MB, less than 36.84% of JavaScript online submissions for Duplicate Zeros.


// // example 1: [1,0,0,2,3,0,0,4]
// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// // example 2: [1,2,3]
// console.log(duplicateZeros([1,2,3]));

// // example 2: [0,0,0,0,0,0,0]
// console.log(duplicateZeros([0,0,0,0,0,0,0]));


// DEADCODE

// let len = arr.length;    // build a new array, works but not what algo asked for
// let ans = [];
// for(let i = 0; ans.length < len; i++) {
//     if(arr[i] == 0){
//         ans.push(0);
//         ans.push(0);
//     } else { ans.push(arr[i])}
// }
// return ans;

// let ans = arr;  // build back into old array
// arr = [];
// for (let i = 0; arr.length < len; i++) {
//     if (ans[i] == 0) {
//         arr.push(0);
//         arr.push(0);
//     } else { arr.push(ans[i]) }
// }
// return arr;


// if (arr[i] == 0) {    // using temp variable to swap indices 
// let temp = arr[i + 1]; // reassigned tmp so it wasn't saved form last run through "J FOR LOOP"
// console.log("** " + temp);
// for (let j = i + 1; arr[j] != 0; j++) {
    // let temp2 = arr[j + 1];
    // arr[j + 1] = temp;
    // temp = temp2;
    // 
// }
// console.log(temp)
// arr[i + 1] = 0;
// i++;