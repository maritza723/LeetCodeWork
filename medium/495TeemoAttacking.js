/**495. Teemo Attacking
 * In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.
 * 
 * You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.
 * 
 * Example 1:
 * Input: [1,4], 2
 * Output: 4
 * Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately. 
 * This poisoned status will last 2 seconds until the end of time point 2. 
 * And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds. 
 * So you finally need to output 4.
 *  
 * Example 2:
 * Input: [1,2], 2
 * Output: 3
 * Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned. 
 * This poisoned status will last 2 seconds until the end of time point 2. 
 * However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status. 
 * Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3. 
 * So you finally need to output 3.
  */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let len = timeSeries.length;
    if (len === 0) { return 0; }    // !! if there aren't any attacks
    let ans = duration;             // !! start with the first attack accounted for
    for(let i = 0; i < len - 1; i++){   // !! iterate through points of attack
        // if(timeSeries[i + 1] - timeSeries[i] >= duration){
            // console.log(timeSeries[i + 1] - timeSeries[i])
            ans += duration;            // !! add a full attack at each point of attack
        // } else 
        if (timeSeries[i + 1] - timeSeries[i] < duration){ // !! if the next attack is within the current attack, subtract one time unit from the running total
            ans--;
        }
        console.log(i + "\t" + ans);
    }
    return ans;
};


// console.log("should return 4");
// console.log(findPoisonedDuration([1,4], 2));

// console.log("should return 3"); 
// console.log(findPoisonedDuration([1,2], 2));

// console.log("should return 4");  //returning 5 instead of 4 :/
// console.log(findPoisonedDuration([1,2], 3));

// console.log("should return 17");
// console.log(findPoisonedDuration([1,3,5,7,9,11,13,15], 3));
