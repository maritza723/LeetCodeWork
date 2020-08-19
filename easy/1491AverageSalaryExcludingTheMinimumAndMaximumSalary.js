/**1491. Average Salary Excluding the Minimum and Maximum Salary
 * Given an array of unique integers salary where salary[i] is the salary of the employee i.
 * Return the average salary of employees excluding the minimum and maximum salary.
 * 
 * Example 1:
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
 * 
 * Example 2:
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 * Average salary excluding minimum and maximum salary is (2000)/1= 2000
 * 
 * Example 3:
 * Input: salary = [6000,5000,4000,3000,2000,1000]
 * Output: 3500.00000
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let minSal = salary[0];
    let maxSal = salary [0]; // lol nice
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < minSal) {
            minSal = salary[i];
        } else if(salary[i] > maxSal){
            maxSal = salary[i];
        } 
        sum += salary[i];
    }
    sum -= minSal;
    sum -= maxSal; 
    return sum/(salary.length - 2); 
};
// Accepted!! 07.22.2020
// Runtime: 92 ms, faster than 27.96% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.
// Memory Usage: 36.6 MB, less than 100.00% of JavaScript online submissions for Average Salary Excluding the Minimum and Maximum Salary.


let salary1 = [4000, 3000, 1000, 2000];
console.log(average(salary1)); // 2500.00000
console.log(average([1000, 2000, 3000]));//2000.00000
console.log(average([6000, 5000, 4000, 3000, 2000, 1000]));//3500.00000