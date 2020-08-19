/**989. Add to Array-Form of Integer
 * For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].
 * 
 * Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.
 * 
 * Example 1:
 * Input: A = [1,2,0,0], K = 34
 * Output: [1,2,3,4]
 * Explanation: 1200 + 34 = 1234
 * 
 * Example 2:
 * Input: A = [2,7,4], K = 181
 * Output: [4,5,5]
 * Explanation: 274 + 181 = 455
 * 
 * Example 3:
 * Input: A = [2,1,5], K = 806
 * Output: [1,0,2,1]
 * Explanation: 215 + 806 = 1021
 * 
 * Example 4:
 * Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
 * Output: [1,0,0,0,0,0,0,0,0,0,0]
 * Explanation: 9999999999 + 1 = 10000000000
 *  
 * 
 * Note：
 * 
 * 1 <= A.length <= 10000
 * 0 <= A[i] <= 9
 * 0 <= K <= 10000
 * If A.length > 1, then A[0] != 0
 * 
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let KnumArr = Array.from(K.toString()).map(x => Number(x));

    let ans = [];
    // console.log(KnumArr);
    // console.log(A);

    // this while loop 
    let i = KnumArr.length - 1, j = A.length - 1;
    while (i >= 0 || j >= 0) {
        if (i < 0) {
            ans.push(A[j]);
        } else if (j < 0) {
            ans.push(KnumArr[i]);
        } else {
            ans.push(KnumArr[i] + A[j]);
        }
        i--, j--;
    }
    // console.log(ans);

    // this for loop checks to see if we should move 
    // the placement of numbers when "adding"
    let l = ans.length;
    for (let i = 0; i < l; i++) {
        if (ans[i] >= 10) {
            ans[i] -= 10;
            if (i + 1 >= l) {
                ans.push(1);
            } else {
                ans[i + 1] += 1;
            }
        }
    }
    // console.log(ans);

    // this for loop reverse it
    l = ans.length - 1;
    for (let front = 0, back = l; front <= back; front++, back--) {
        // [ans[front], ans[back]] = [ans[back], ans[front]];
        let temp = ans[front];
        ans[front] = ans[back];
        ans[back] = temp;
    }

    return ans; 
};
    
// Accepted!! 07.09.2020
// Runtime: 156 ms, faster than 56.94% of JavaScript online submissions for Add to Array-Form of Integer.
// Memory Usage: 44.7 MB, less than 6.67% of JavaScript online submissions for Add to Array-Form of Integer.


// example 1: [1,2,3,4]
// console.log(addToArrayForm([1, 2, 0, 0], 34));

// example 2:  [4,5,5]
// console.log(addToArrayForm([2,7,4], 181));

// example 3:  [1,0,2,1]
// console.log(addToArrayForm([2,1,5], 806));

// example 4:  [1,0,0,0,0,0,0,0,0,0,0] 
// console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));

// test 1: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// console.log(addToArrayForm2([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));

var addToArrayForm1 = function (A, K){
    let num = 1;
    for (let i = A.length - 1; i >= 0; i--) {
        if (A[i] != 0) {
            console.log(A[i]);
            K += num * A[i];
            console.log(K);
            num *= 10;
        } else {
            // console.log(num);
            num *= 10;
        }
    }
    console.log(A.length);
    let ans = Array.from(String(K, A.length));
    return ans;

};

var addToArrayForm2 = function (A, K) {
    let num = Array.from(String(K, A.length));
    console.log(num);
    let len = 0;
    let j = 0;
    if (num.length <= A.length) {
        len = num.length - 1;
        j = A.length - 1;
    } else {
        len = A.length - 1;
        j = num.length - 1;
    }
    console.log(len + ", j: " + j);
    for (let i = len; i >= 0; i--) {
        console.log(num[i] + " - " + A[j])
        A[j] = parseInt(num[i]) + A[j];
        console.log(num[i] + " - " + A[j])
        j--;
    }



    // console.log(A.length);
    return A;
};

// example 1: [1,2,3,4]
// console.log(addToArrayForm([1, 2, 0, 0], 34));

// example 2:  [4,5,5]
// console.log(addToArrayForm([2,7,4], 181));

// example 3:  [1,0,2,1]
// console.log(addToArrayForm([2,1,5], 806));

// example 4:  [1,0,0,0,0,0,0,0,0,0,0] 
// console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));

// test 1: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]
// console.log(addToArrayForm2([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));

// DEADCODE
//

// let num = 1;
// for(let i = A.length- 1; i >= 0; i--){
//     if (A[i] != 0){
//         console.log(A[i]);
//         K += num*A[i];
//         console.log(K);
//         num *= 10;        
//     } else {
//         // console.log(num);
//         num *= 10;
//     }
// }
// console.log(A.length);
// let ans = Array.from(String(K, A.length));
// return ans;

// for(let i = 0; i < A.length; i++){
//     if (i != A.length - 1){
//         console.log(A[i]);
//         num += A[i];
//         console.log(num);
//         num *= 10;

//     } else {
//         console.log(num);
//         num += A[i];
//     }
// }
// let num = A.pop();
//     num += K;
//     A.push(num);