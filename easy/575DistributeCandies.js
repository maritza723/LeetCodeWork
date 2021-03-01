/**575. Distribute Candies
 * Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
 * 
 * The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
 * 
 * Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
 * 
 * Example 1:
 * Input: candyType = [1,1,2,2,3,3]
 * Output: 3
 * Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
 * 
 * Example 2:
 * Input: candyType = [1,1,2,3]
 * Output: 2
 * Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
 * 
 * Example 3:
 * Input: candyType = [6,6,6,6]
 * Output: 1
 * Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type. *//**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let len = candies.length;
    let max = len/2;
    let ans = 0;
    let dict = {};
    for(let i = 0; i < len; i++){
        if(candies[i] in dict){
            dict[candies[i]]++;
            
        } else {
            ans++;
            dict[candies[i]] = 1;
        }
        if(ans >= max) { return max; }
    }
    return ans;
};

// Accepted!! 03.01.21
// Runtime: 208 ms, faster than 37.24% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 52.5 MB, less than 51.88% of JavaScript online submissions for Distribute Candies.

// console.log(distributeCandies([1,1,2,2,3,3]) + " == 3");
// console.log();
// console.log(distributeCandies([1,1,2,3]) + " == 2");
// console.log();
// console.log(distributeCandies([6,6,6,6]) + " == 1");
// console.log();
// console.log(distributeCandies([1,2,2,3,3,3,4,5,6,7]) + " == 5");