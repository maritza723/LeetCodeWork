/**1295. Find Numbers with Even Number of Digits
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *  
 * 
 * Example 1:
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation: 
 * 12 contains 2 digits (even number of digits). 
 * 345 contains 3 digits (odd number of digits). 
 * 2 contains 1 digit (odd number of digits). 
 * 6 contains 1 digit (odd number of digits). 
 * 7896 contains 4 digits (even number of digits). 
 * Therefore only 12 and 7896 contain an even number of digits.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0;
    let tally = 0;
    for (let i = 0; i < nums.length; i++) {
        tally = 0;
        if (nums[i] % 10 == 0) {
            console.log("inside this if");
            console.log(nums[i]);
            nums[i] = nums[i] / 10; 
            console.log(nums[i]);
            tally--;
        }
        
        console.log(nums[i] / 10, "line 41");
        while (nums[i] / 10 > 0) {
            nums[i] = Math.floor(nums[i] / 10);
            console.log(nums[i] + " at line 26***");
            tally++;
            console.log(tally + " at line 28");
        }

        if (tally % 2 == 0) { 
            count++;
            // console.log(nums[i] + " count = " + count);
        } else { tally++; }

    }
    return count;
};

// example 1: 2
// console.log(findNumbers([12,345,2,6,7896]));

// example 2: 0
// console.log(findNumbers([437,315,322,431,686,264,442]));

// example 3: 0 
// console.log(findNumbers([580, 317, 640, 957, 718, 764]));

// example 4: 1 
// console.log(findNumbers([100000]));

// Accepted!! 07.20.2020
// Runtime: 80 ms, faster than 34.96% of JavaScript online submissions for Find Numbers with Even Number of Digits.
// Memory Usage: 37.1 MB, less than 27.21% of JavaScript online submissions for Find Numbers with Even Number of Digits.