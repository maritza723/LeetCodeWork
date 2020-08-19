/*** LeetCode 143O. Kids With The Greatest Number of Candies
 * 
 * 
 * Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

* For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

 

* Example 1:
* 
* Input: candies = [2,3,5,1,3], extraCandies = 3
* Output: [true,true,true,false,true] 
* Explanation: 
* Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
* Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
* Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
* Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
* Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
* 
* Example 2:
* 
* Input: candies = [4,2,1,1,2], extraCandies = 1
* Output: [true,false,false,false,false] 
* Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
* 
* Example 3:
* 
* Input: candies = [12,1,12], extraCandies = 10
* Output: [true,false,true]
 * 
 * @param {number[]} candies
 * @param {number} extraCandies 
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let max = 0;
    // determine greatest number of candies 
    for(let i = 0; i < candies.length; i++){
        if(max < candies[i]){
            max = candies[i];
            // console.log(max);        
        }
        
    }    
    for(let i = 0; i < candies.length; i++){
        if(max > candies[i] + extraCandies){
            ans.push(false);
            // console.log(ans);        
        } else {
            ans.push(true);
            // console.log(ans);    
        }
    }
    return ans;

};

// example 1: 
// console.log(kidsWithCandies([2,3,5,1,3], 3));

// example 2: 
// console.log(kidsWithCandies([4,2,1,1,2], 1));

// example 3: 
// console.log(kidsWithCandies([12,1,12], 10));

// Accepted! 06.22.2020
// Runtime: 68 ms, faster than 51.30% of JavaScript online submissions for Kids With the Greatest Number of Candies.
// Memory Usage: 33.8 MB, less than 82.69% of JavaScript online submissions for Kids With the Greatest Number of Candies.

