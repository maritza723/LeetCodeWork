/**645. Set Mismatch
 * The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.
 * 
 * Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.
 * 
 * Example 1:
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * Note:
 * The given array size will in the range [2, 10000].
 * The given array's numbers won't have any order. *//**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums.sort();
    let dict = {};
    let ans = [];
    let len = nums.length;
    for (let i = 0; i < len; i++){
        if (nums[i] in dict){
            dict[nums[i]]++;
            ans.push(nums[i]);
        } else { dict[nums[i]] = 0; }
    }
    
    if(nums[0] != 1){ 
        ans.push(1); 
        return ans;
    } else {
        for(let i = 1; i <= len; i++){
            if(!(i in dict)){
                ans.push(i);
                return ans;
            }
        }
    }

    
};

// Accepted!! 11.19.2020
// Runtime: 132 ms, faster than 22.05% of JavaScript online submissions for Set Mismatch.
// Memory Usage: 43.9 MB, less than 45.13% of JavaScript online submissions for Set Mismatch.

// console.log(findErrorNums([1,2,2,4]) + " == [2,3]");
// console.log();
// console.log(findErrorNums([2,2]) + " == [2, 1]");
// console.log();
// console.log(findErrorNums([1,1]) + " == [1, 2]");
// console.log();
// console.log(findErrorNums([1,3,3,4]) + " == [3,2]");



// var findErrorNumsFirstTry = function(nums) {
//     nums.sort();
    // let ans = [];
    // let len = nums.length;
    // for (let i= 0; i < len; i++){
    //     let j = i + 1;
    //     if (nums[i] == nums[j]){
    //         ans.push(nums[j]);
    //         if(nums[0] == 1){
    //             ans.push(nums[j] + 1);
    //         } else { ans.push(1); }
    //     }
    // }
    // return ans;