/**1539. Kth Missing Positive Number
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
 * 
 * Find the kth positive integer that is missing from this array.
 * 
 * Example 1:
 * Input: arr = [2,3,4,7,11], k = 5
 * Output: 9
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
 * 
 * Example 2:
 * Input: arr = [1,2,3,4], k = 2
 * Output: 6
 * Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6. *//**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missingArr = [];
    let len = arr.length;
    let max = arr[len - 1];
    let j = 1;
    // console.log("here");
    for(let i = 0; i < len; i++){
        for (; j < max; j++){
            if(j < arr[i] ){
                missingArr.push(j);
            } else if (j == arr[i]){
                j++;
                break;
            }
            console.log(missingArr);
        }
    }
    if(missingArr.length == 0){ 
        return k + max;
    } else if (){

    } else { return missingArr[k - 1]; }
};

// console.log(findKthPositive([2,3,4,7,11], 5) + " == 9");
// console.log();
// console.log(findKthPositive([1,2,3,4], 2) + " == 6");
// console.log();
console.log(findKthPositive([5,6,7,8,9], 9) + " == 14");