/**1402. Reducing Dishes
 * A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.
 * 
 * Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  i.e.  time[i]*satisfaction[i]
 * 
 * Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.
 * 
 * Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.
 * 
 * Example 1:
 * Input: satisfaction = [-1,-8,0,5,-9]
 * Output: 14
 * Explanation: After Removing the second and last dish, the maximum total Like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14). Each dish is prepared in one unit of time.
 * 
 * Example 2:
 * Input: satisfaction = [4,3,2]
 * Output: 20
 * Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)
 * 
 * Example 3:
 * Input: satisfaction = [-1,-4,-5]
 * Output: 0
 * Explanation: People don't like the dishes. No dish is prepared.
 * 
 * Example 4:
 * Input: satisfaction = [-2,5,-1,0,3,-3]
 * Output: 35
 */
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    satisfaction.sort((a, b) => (a - b));
    let len = satisfaction.length;
    let sum = 0;
    console.log(satisfaction)
    
    for (let i = 0; i < len; i++) {
        console.log(satisfaction)
        for(let j = 0; j < len; j++){
            let satAsIs = (satisfaction[j] * (j + 1)) + (satisfaction[len - 1 - j] * (len - j));
            let satMaybe = (satisfaction[len - 1 - j] * (len - 1 - j));
            if (satAsIs < satMaybe) {
                satisfaction.splice(j, 1);
                // i = 0;
            }
        }
    
    }
    
    for(let i = 0; i < satisfaction.length; i++){
        sum += (satisfaction[i] * (i + 1));
    }


if (sum <= 0) { return 0; }
return sum;

};

// example 1: 14
// console.log(maxSatisfaction([-1, -8, 0, 5, -9]));

// example 2: 20
// console.log(maxSatisfaction([4,3,2])); 

// example 3: 0
// console.log(maxSatisfaction([-1,-4,-5])); 

// example 4: 35
// console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]));

// example 5: 270
// console.log(maxSatisfaction([-8,4,-10,4,-7,-10,2,4,-9,3,0,-8,-3,-7,8,8]));


// DEADCODE
// satisfaction.sort((a, b) => (a - b));
// let len = satisfaction.length;
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// let arr = [];
// for (let i = 0; i < len; i++) {
//     sum1 += (satisfaction[i] * (i + 1));
//     if (i >= 1) {
//         sum2 += (satisfaction[i] * (i));
//     }
//     if (i >= 2) {
//         sum3 += (satisfaction[i] * (i - 1));
//     }
// }
// console.log("s1: " + sum1)
// console.log("s2: " + sum2)
// console.log("s3: " + sum3)
// arr.push(sum1);
// arr.push(sum2);
// arr.push(sum3);
// arr.sort((a, b) => (a - b));
// if(arr[arr.length - 1] < 0){ return 0 };
// return arr[arr.length - 1];


// if (satisfaction[i] == 0){
//             sum += (satisfaction[i] * (i + 1))
//             // console.log("if statement: sum is " + sum)
//         } else if ((satisfaction[len - 1 - i] * (len - i)) == 0){
//             sum += (satisfaction[i] * (i + 1));   
//             // console.log("else if statement: sum is " + sum)
//         } else {
//             // console.log("else statement: sum is " + sum)
//             let satAsIs = (satisfaction[i] * (i + 1)) + (satisfaction[len - 1 - i] * (len - i));
//             let satMaybe = (satisfaction[len - 1 - i] * (len - 1 - i));
//             // console.log("satAsIs: " + satAsIs + ", satMaybe: "+ satMaybe);
//             if (sum += satAsIs > (sum += satMaybe)) {
//                 // console.log(satAsIs)
//                 sum += satAsIs;


//             } else {
//                 sum += satMaybe;
//                 satisfaction.splice(i, 1);
//             }