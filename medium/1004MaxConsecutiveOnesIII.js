/**1004. Max Consecutive Ones III
 * Given an array A of 0s and 1s, we may change up to K values from 0 to 1.
 * 
 * Return the length of the longest (contiguous) subarray that contains only 1s. 
 * 
 * Example 1:
 * Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
 * Output: 6
 * Explanation: 
 * [1,1,1,0,0,1,1,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 * 
 * Example 2:
 * Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
 * Output: 10
 * Explanation: 
 * [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
 * Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined. 
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    let len = A.length;
    let count0 = 0; 
    let count1 = 0
    let run = 0;
    let ans = 0;
    for (let i = 0; i < len; i++) {        
        if(A[i] == 1){
            count1++;
        } 
        if (A[i] == 0){
            count0++;
            run++;        
            if(run >= K){
                count1 = 0;
                count0--;  
                run = 0;
            }
        }      

        if((count1 + count0) > ans){
            ans = (count1 + count0);
        } 
    }
    return ans;
};


// example 1: 6
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

// example 2: 10
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); 