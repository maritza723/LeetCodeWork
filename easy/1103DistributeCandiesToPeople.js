/**1103. Distribute Candies to People
 * We distribute some number of candies, to a row of n = num_people people in the following way:
 * 
 * We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.
 * 
 * Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
 * 
 * This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
 * 
 * Return an array (of length num_people and sum candies) that represents the final distribution of candies.
 * 
 * Example 1:
 * Input: candies = 7, num_people = 4
 * Output: [1,2,3,1]
 * Explanation:
 * On the first turn, ans[0] += 1, and the array is [1,0,0,0].
 * On the second turn, ans[1] += 2, and the array is [1,2,0,0].
 * On the third turn, ans[2] += 3, and the array is [1,2,3,0].
 * On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
 * 
 * Example 2:
 * Input: candies = 10, num_people = 3
 * Output: [5,2,3]
 * Explanation: 
 * On the first turn, ans[0] += 1, and the array is [1,0,0].
 * On the second turn, ans[1] += 2, and the array is [1,2,0].
 * On the third turn, ans[2] += 3, and the array is [1,2,3].
 * On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let ans = [];

    // loop to build ans to correct length
    for (let i = 0; ans.length < num_people; i++) {
        if (candies > i) {
            ans.push(i + 1);
        } else {
            ans.push(candies);
        }
        candies -= (i + 1);
    }
    // console.log(ans)
    // loop to add remaining candies
    let len = ans.length - 1;
    let j = 0;
    let add = num_people + 1;
    while (candies > j && candies >= add) {
        // console.log("** " + ans)        
        ans[j] += (add);
        candies -= (add);
        if (j < len) {
            // console.log("if")
            j++;
        } else if (j = len) {
            // console.log("else: " + ans)
            j = 0;
        }
        // console.log("candies: " + candies)
        // console.log("ans: " + ans)
            add++;
    }
    // console.log("Last" + ans)
    // add any remaining candies that are left over
    if (candies > 0 && j <= (num_people - 1)) {
        ans[j] += candies;
    } else if (candies > 0 && j == (num_people)) {
        ans[0] += candies;
    }
    // lastly, check for negatives
    for(let i = 0; i < ans.length; i++){
        if(ans[i] < 0){
            ans[i] = 0;
        }
    }
    return ans;
};

// Accepted!! 08.18.2020
// Runtime: 68 ms, faster than 86.49% of JavaScript online submissions for Distribute Candies to People.
// Memory Usage: 37.2 MB, less than 5.41% of JavaScript online submissions for Distribute Candies to People.


// // example 1: [1,2,3,1]
// console.log(distributeCandies(7, 4));

// // example 2: [5,2,3]
// console.log(distributeCandies(10, 3));

// // example 2: [15,18,15,12]
// console.log(distributeCandies(60, 4));


// DEADCODE


// let ans = [];
// let i = 0
// for (i = 0; candies >= num_people; i++) {
//     if(i < num_people && candies > i){
//         ans.push(i + 1);
//     } else if (i > num_people){
//         i = -1;
//     } else {
//         ans[i] += (i + 1);
//     }
//     candies -= (i + 1);
// }

// if(ans.length < num_people && candies ){
//         ans.push(candies);   
// } 
