/**1437. Check If All 1's Are at Least Length K Places Away
 * Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.
 * 
 *  
 * 
 * Example 1:
 * Input: nums = [1,0,0,0,1,0,0,1], k = 2
 * Output: true
 * Explanation: Each of the 1s are at least 2 places away from each other.
 * 
 * Example 2:
 * Input: nums = [1,0,0,1,0,1], k = 2
 * Output: false
 * Explanation: The second 1 and third 1 are only one apart from each other.
 * 
 * Example 3:
 * Input: nums = [1,1,1,1,1], k = 0
 * Output: true
 * 
 * Example 4:
 * Input: nums = [0,1,0,1], k = 1
 * Output: true *//**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let len = nums.length;
    if(k == 0) { return true; }
    // if(k > len) { return false; }
    
    for (let i = 0; i < len; i++){
        while(nums[i] == 0){ i++; }
        // console.log("i", i); 
        let dist = i + k;
        for (let j = i + 1; j <= dist; j++){
            //  && j > dist
            if (nums[j] == 1){
                // console.log("j", j); 
                return false; 
            }
        }
    }
    return true;
};

// Accepted!! 01.26.21
// Runtime: 88 ms, faster than 81.36% of JavaScript online submissions for Check If All 1's Are at Least Length K Places Away.
// Memory Usage: 46.7 MB, less than 33.90% of JavaScript online submissions for Check If All 1's Are at Least Length K Places Away.


// console.log("true: ");
// console.log(kLengthApart([1,0,0,0,1,0,0,1], 2));
// console.log(kLengthApart([1,1,1,1,1], 0));
// console.log(kLengthApart([0,1,0,1], 1));

// console.log();
// console.log("false: ");
// console.log(kLengthApart([1,0,0,1,0,1], 2)); 