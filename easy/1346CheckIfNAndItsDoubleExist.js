/**1346. Check If N and Its Double Exist
 * Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
 * 
 * More formally check if there exists two indices i and j such that :
 * 
 * i != j
 * 0 <= i, j < arr.length
 * arr[i] == 2 * arr[j]
 * 
 * Example 1:
 * Input: arr = [10,2,5,3]
 * Output: true
 * Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
 * 
 * Example 2:
 * Input: arr = [7,1,14,11]
 * Output: true
 * Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
 * 
 * Example 3:
 * Input: arr = [3,1,7,11]
 * Output: false
 * Explanation: In this case does not exist N and M, such that N = 2 * M. *//**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let len = arr.length;
    let dict = {};
    for(let i = 0; i < len; i++){
        if(arr[i] in dict){
            dict[arr[i]]++;
        } else { dict[arr[i]] = 1; }
    }  
    let n = 0;
    for(let i = 0; i < len; i++){
        if(arr[i] == 0 && dict[0] === 2){ 
            return true; 
        } else if(arr[i] == 0 && dict[0] != 2){ continue; }
        n = arr[i] * 2;
        // console.log(arr[i]);
        // console.log(n);
        // console.log(dict[0]);
        if(arr[i] in dict && n in dict){
            return true;
        } 
    }  
    return false;  
};

// Accepted!! 09.20.2020
// Runtime: 64 ms, faster than 99.28% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 39.1 MB, less than 14.93% of JavaScript online submissions for Check If N and Its Double Exist.




//  console.log("true: ")
//  console.log(checkIfExist([10,2,5,3]));
//  console.log(checkIfExist([7,1,14,11]));
//  console.log(checkIfExist([0,0]));

// console.log("false: ")
//  console.log(checkIfExist([3,1,7,11]));
//  console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
