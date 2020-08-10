/**922. Sort Array By Parity II
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
 * 
 * Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 * 
 * You may return any answer array that satisfies this condition.
 * 
 * Example 1:
 * Input: [4,2,5,7]
 * Output: [4,5,2,7]
 * Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let ans = [];
    let oddArr = [];
    let evenArr = [];
    let len = A.length;
    for (let i = 0; i < len; i++) {
        if (A[i] % 2 == 0) {
            evenArr.push(A[i]);
        } else {
            oddArr.push(A[i]);
        }
    }
    console.log("odd: " + oddArr + ", even: " + evenArr);
    for(let i = 0; i < len; i++) {
        if(i%2 == 0){
            ans.push(evenArr[0]);
            evenArr.splice(0, 1);
        } else {
            ans.push(oddArr[0]);
            oddArr.splice(0, 1);
        }
    }
    return ans;
};

// Accepted!! 08.10.2020
// Runtime: 188 ms, faster than 8.85% of JavaScript online submissions for Sort Array By Parity II.
// Memory Usage: 45.3 MB, less than 6.00% of JavaScript online submissions for Sort Array By Parity II.

// example: 
console.log(sortArrayByParityII([1, 3, 5, 8, 6, 4]));


    // DEADCODE

    //loops
    // let ans = [];
    // let len = A.length;
    // for (let i = 0; i < len; i++) {
    //     for (let j = 0; j < len; j++) {
    //         if (i % 2 == 0) {
    //             if (A[j] % 2 == 0) {
    //                 console.log("both even J");
    //                 ans.push(A[j]);
    //                 A.splice(A[j], 1);
    //                 // break;
    //             }
    //         } else {
    //             if (A[j] % 2 != 0) {
    //                 console.log("both odd J");
    //                 ans.push(A[j]);
    //                 A.splice(A[j], 1);
    //                 // break;
    //             }
    //             console.log(A);
    //         }
    //         i++;
    //     }
    //     return ans;
    // }


    //Dictionaries
    // let ans = [];
    // let oddDict = {};
    // let evenDict = {};
    // let len = A.length;
    // for (let i = 0; i < len; i++) {
    //     console.log("***")
    //     if(!(A[i] in oddDict) && A[i]%2 != 0) {
    //         oddDict[A[i]] = 1;
    //     } else if(!(A[i] in evenDict) && A[i]%2 == 0) {
    //         evenDict[A[i]] = 1;
    //     }
    // }
    // console.log("odd: ")
    // console.log(oddDict);
    // console.log("even: ")
    // console.log(evenDict);
    // for (let i = 0; i < len; i++) {
    //     if(i%2 == 0){
    //         ans.push(evenDict[]);
    //         evenDict[A[i]]--;
    //     } else if(i%2 != 0){
    //         ans.push(oddDict[0]);
    //         oddDict[A[i + 1]]--;
    //     }
    // }