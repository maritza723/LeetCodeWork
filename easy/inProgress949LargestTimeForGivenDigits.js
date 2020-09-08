/**949. Largest Time for Given Digits
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * 
 * The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
 * 
 * Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
 * 
 * 
 * 
 * Example 1:
 * Input: [1,2,3,4]
 * Output: "23:41"
 * 
 * Example 2:
 * Input: [5,5,5,5]
 * Output: ""
 * 
 * 
 * Note:
 * 
 * A.length == 4
 * 0 <= A[i] <= 9 *//**
* @param {number[]} A
* @return {string}
*/
var largestTimeFromDigits = function (A) {
    let len = A.length;
    A.sort((a, b) => (a - b));
    let dict = {};
    for (let i = 0; i < len; i++) {
        if (A[i] in dict) {
            dict[A[i]]++;
        } else {
            dict[A[i]] = 1;
        }
    }
    let hour = [];
    let min = [];
    for(let i = 9; i >= 0; i--){
        if(i in dict && dict[i] >= 2){
            if(hour.length == 0){
               hour.push(i); 
               dict[i]--;
               if(1 in dict){
                   hour.unshift(1);
                   dict[1]--;
               } else if (0 in dict){
                hour.unshift(0);
                dict[0]--;
               }
            } 
            if(min.length == 0){
                min.push(i);
                dict[i]--;
            }
        }
        if(i in dict && dict[i] == 1 && hour.length == 2 && min.length == 1){
            min.unshift(i);
        }
    }




    // console.log(dict);
    
    if (2 in dict && dict[2] == 1) {
        hour.push(2);
        dict[2]--;

        for (let i = 3; i >= 0; i--) {
            if (i in dict && dict[i] > 0) {

                hour.push(i);
                dict[i]--;
                break;
            }
        }
    } else if (1 in dict) {
        hour.push(1);
        dict[1]--;
        console.log(hour);
        if (dict[A[len - 1]] > 0) {
            hour.push(A[len - 1]);
            dict[A[len - 1]]--;
            A.pop();
        } else {
            hour.push(A[len - 2]);
            dict[A[len - 2]]--;
            A.pop();
            A.pop();
        }

    } else if (0 in dict) {
        hour.push(0);
        dict[0]--;
        if (dict[A[len - 1]] > 0) {
            hour.push(A[len - 1]);
            dict[A[len - 1]]--;
            A.pop();
        } else {
            hour.push(A[len - 2]);
            dict[A[len - 2]]--;
            A.pop();
            A.pop();
        }
    }
    console.log(hour);
    console.log(dict);
    let ans = ":";
    for (let i = hour.length - 1; i >= 0; i--) {
        ans = hour[i].toString() + ans;
    }
    
    console.log(dict);
    for (let i = 5; i >= 0; i--) {
        if (i in dict && dict[i] > 0) {
            min.unshift(i);
            dict[i]--;
            i = 0;
        }
    }
    for (let i = 9; i >= 0; i--) {
        if (i in dict && dict[i] > 0) {
            min.unshift(i);
            dict[i]--;
            i = 0;
        }
    }
    console.log(min);
    if(ans[0] > 3 || ans[3] > 5){
        return false;
    }
    // console.log(min);
    for (let i = min.length - 1; i >= 0; i--) {
        ans = ans + min[i].toString();
    }
    if (ans.length < 5 || min.length > 2 || hour.length > 2) {
        return false;
    }
    return ans;
};



// example 1: "23:41"
// console.log(largestTimeFromDigits([1, 2, 3, 4]));

// example 2: ""
// console.log(largestTimeFromDigits([5,5,5,5]));

// example 3: "21:54"
// console.log(largestTimeFromDigits([4, 1, 2, 5]));

// example 4: "23:59"
// console.log(largestTimeFromDigits([3, 2, 9, 5]));

// example 5: "19:51"
// console.log(largestTimeFromDigits([5, 1, 9, 1]));

// example 6: "09:00"
// console.log(largestTimeFromDigits([0, 0, 9, 0]));

// example 7: ""
// console.log(largestTimeFromDigits([0, 9, 7, 7]));

// example 8: "19:06"
// console.log(largestTimeFromDigits([6, 1, 9, 0]));

// example 9: "00:00"
// console.log(largestTimeFromDigits([0, 0, 0, 0]));

// example 10: "10:00"
// console.log(largestTimeFromDigits([0, 0, 1, 0]));

// example 11: ""
// console.log(largestTimeFromDigits([4, 3, 3, 4]));

// example 12: "06:26"
console.log(largestTimeFromDigits([2,0,6,6]));



// DEADCODE

            // FORGOT ABOUT MILITARY TIME
        // for(let i = 9; i >= 0; i--){
        //     console.log("hour: " + hour);
        //     console.log("min: " + min);
        //     if(i in dict && i >= 6){
        //         min = min + i;
        //         dict[i]--;
        //      } else if(i in dict && i <= 5){
        //         min = i + min;
        //         dict[i]--;
        //      } else if(i in dict && i <= 3){
        //          hour = hour + i;
        //          dict[i]--;
        //      } else if(i in dict && i == 2){
        //         hour = i + hour;
        //         dict[i]--;
        //      } else if(i in dict && hour != "2"){
        //         hour = i + hour;
        //         dict[i]--;
        //      }
        // }
        // // console.log(hour);