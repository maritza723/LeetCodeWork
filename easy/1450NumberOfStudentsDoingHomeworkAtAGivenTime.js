/**1450 Number of Students Doing Homework at a Given Time
 * Given two integer arrays startTime and endTime and given an integer queryTime.
 * 
 * The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
 * 
 * Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
 * 
 * 
 * Example 1:
 * Input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
 * Output: 1
 * Explanation: We have 3 students where:
 * The first student started doing homework at time 1 and finished at time 3 and wasn't doing anything at time 4.
 * The second student started doing homework at time 2 and finished at time 2 and also wasn't doing anything at time 4.
 * The third student started doing homework at time 3 and finished at time 7 and was the only student doing homework at time 4.
 * 
 * Example 2:
 * Input: startTime = [4], endTime = [4], queryTime = 4
 * Output: 1
 * Explanation: The only student was doing their homework at the queryTime.
 * 
 * Example 3:
 * Input: startTime = [4], endTime = [4], queryTime = 5
 * Output: 0
 * 
 * Example 4:
 * Input: startTime = [1,1,1,1], endTime = [1,3,2,4], queryTime = 7
 * Output: 0
 * Example 5:
 * 
 * Input: startTime = [9,8,7,6,5,4,3,2,1], endTime = [10,10,10,10,10,10,10,10,10], queryTime = 5
 * Output: 5
 */
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0; i < startTime.length; i++){
        if(startTime[i] <= queryTime && endTime[i] >= queryTime){
            count++;
        }
    }
    return count;
};

// //example 1: 1
// console.log(busyStudent([1,2,3], [3,2,7], 4));

// // example 2: 1
// console.log(busyStudent([4], [4], 4));

// // example 3: 0
// console.log(busyStudent([4], [4], 5));

// // example 4: 0
// console.log(busyStudent([1,1,1,1], [1,3,2,4], 7));

// // example 5: 5
// console.log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5));

// Accepted!! 07.20.2020
// Runtime: 104 ms, faster than 7.90% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.
// Memory Usage: 36.5 MB, less than 5.23% of JavaScript online submissions for Number of Students Doing Homework at a Given Time.