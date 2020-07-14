/** 315. Count of Smaller Numbers After Self
 * You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].
 * 
 * Example:
 * 
 * Input: [5,2,6,1]
 * Output: [2,1,1,0] 
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let len = nums.length;
    let counts = [];
    let add = 0;
    let j = 0;
    for(let i = 0; i < len; i++){    
        console.log("line 23, counts: " + counts);
        for(let j = i; j < len; j++){ 
            if(nums[i] > nums[j]){
            add++;
            } 
        }
        counts.push(add);
        add = 0;
    }
    return counts;
};

// example: [2,1,1,0] 
console.log(countSmaller([5,2,6,1]));

// Accepted!! 06.22.2020
// Runtime: 720 ms, faster than 13.37% of JavaScript online submissions for Count of Smaller Numbers After Self.
// Memory Usage: 39.6 MB, less than 34.30% of JavaScript online submissions for Count of Smaller Numbers After Self.