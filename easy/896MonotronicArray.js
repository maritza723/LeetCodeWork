/**896. Monotonic Array
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:
Input: [1,2,2,3]
Output: true

Example 2:
Input: [6,5,4,4]
Output: true

Example 3:
Input: [1,3,2]
Output: false

Example 4:
Input: [1,2,4,5]
Output: true

Example 5:
Input: [1,1,1]
Output: true *//**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let len = A.length;
    let incOrDec;
    for (let i = 1; i < len; i++) {
        if (A[i - 1] - A[i] == 0) {
            continue;
        }
        if (incOrDec == undefined) {
            if (A[i - 1] < A[i]) { 
                incOrDec = "inc";
            } else {
                incOrDec = "dec";
            }
        } else {
            if (A[i - 1] < A[i] && incOrDec == "dec") { 
                return false;
            } else if (A[i - 1] > A[i] && incOrDec == "inc") { 
                return false;
            }
        }
    }
    return true;
};

// Accepted!! 08.25.2020
// Runtime: 84 ms, faster than 92.51% of JavaScript online submissions for Monotonic Array.
// Memory Usage: 43.4 MB, less than 15.64% of JavaScript online submissions for Monotonic Array.


// example 1: true
// console.log(isMonotonic([1,2,2,3]));

// example 2: true
// console.log(isMonotonic([6,5,4,4]));

// example 3: false
// console.log(isMonotonic([1,3,2]));

// example 4: true
// console.log(isMonotonic([1,2,4,5]));

// example 5: true
// console.log(isMonotonic([1,1,1]));

// example 6: true
// console.log(isMonotonic([1,1,0]));

// example 7: false
// console.log(isMonotonic([2,2,2,1,4,5]))


// DEADCODE 

//     using for loops to find {{linear}} monotony

// let len = A.length;
// if(A[0] == A[1]){
//     for(let i = 1; i < len - 1; i++){
//         if(A[i] != A[i + 1]){
//             return false;
//         }
//     }
// }
// if(A[0] > A[1]){
//     for(let i = 1; i < len - 1; i++){
//         if(A[i] < A[i + 1]){
//             return false;
//         }
//     }
// }
// if(A[0] < A[1]){
//     for(let i = 1; i < len - 1; i++){
//         if(A[i] > A[i + 1]){
//             return false;
//         }
//     }
// }
// return true;

let increasingOrDecreasing; // I will have this store a string of "inc" or "dec", got it
for (let i = 1; i < len; i++) {
    let prev = A[i - 1], curr = A[i];

    if (prev - curr == 0) {
        // if they are the same
        continue;
    }
    // if the inc/dec is not declared
    if (increasingOrDecreasing == undefined) {
        if (prev > curr) {
            increasingOrDecreasing = "dec";
        } else {
            increasingOrDecreasing = "inc";
        }
    } else {
        if (prev > curr && increasingOrDecreasing == "inc") {
            return false;
        } else if (prev < curr && increasingOrDecreasing == "dec") {
            return false;
        }
    }
}