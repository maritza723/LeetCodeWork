/**961. N-Repeated Element in Size 2N Array
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 * 
 * Return the element repeated N times.
 * 
 * Example 1:
 * Input: [1,2,3,3]
 * Output: 3
 * 
 * Example 2:
 * Input: [2,1,2,5,3,2]
 * Output: 2
 * 
 * Example 3:
 * Input: [5,1,5,2,5,3,5,4]
 * Output: 5 *//**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let len = A.length;
    // let n = len/2;
    let dict = {};
    for(let i = 0; i < len; i++){
        if(A[i] in dict){
            dict[A[i]]++;
        } else { dict[A[i]] = 1; }
    }
    for(let i = 0; i < len; i++){
        if(dict[A[i]] == len/2){
            return A[i];
        }
    }
};

// Accepted!! 09.17.2020
// Runtime: 144 ms, faster than 14.73% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 42.3 MB, less than 37.77% of JavaScript online submissions for N-Repeated Element in Size 2N Array.


/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimesOptimized = function(A) {
    let len = A.length;
    let dict = {};
    for(let i = 0; i < len; i++){
        if(A[i] in dict){
            dict[A[i]]++;
        } else { dict[A[i]] = 1; }
        if(dict[A[i]] == len/2){
            return A[i];
        }
    }
    
};


// Accepted!! 09.17.2020
// Runtime: 104 ms, faster than 45.84% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
// Memory Usage: 42.5 MB, less than 34.68% of JavaScript online submissions for N-Repeated Element in Size 2N Array.

// example 1: 3
// console.log(repeatedNTimes([1,2,3,3])); 

// example 2: 2
// console.log(repeatedNTimes([2,1,2,5,3,2]));

// example 3: 5
// console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));