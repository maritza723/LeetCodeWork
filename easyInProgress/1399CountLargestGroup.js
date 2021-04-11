/**1399. Count Largest Group
 * Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 
 * 
 * Return how many groups have the largest size.
 * 
 *  
 * 
 * Example 1:
 * Input: n = 13
 * Output: 4
 * Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
 * [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
 * 
 * Example 2:
 * Input: n = 2
 * Output: 2
 * Explanation: There are 2 groups [1], [2] of size 1.
 * 
 * Example 3:
 * Input: n = 15
 * Output: 6
 * 
 * Example 4:
 * Input: n = 24
 * Output: 5 */ /**
* @param {number} n
* @return {number}
*/
var countLargestGroup = function (n) {
    if (n < 10) { return n; }

    // array of possible answers
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // find tenth digit of n
    let x = Math.floor(n / 10);
    // find the correct index for answer
    let y = (n % 10) - x;
    // console.log(x);
    // console.log(y);
    x++;
    //remove index 
    arr.splice(0, x);
    // console.log(arr);

    return arr[y];
};



// example 1: 4
console.log("ex.1: ")
console.log(countLargestGroup(13));
// [ [1,10] ,[2,11,20],[3,12,21], 4,5,6,7,8,9]
// this is a really cool way of solving it!

//thank you :) I think i need a loop to get it to work for more than 99
// ya, so when we are given 100, or even 1000 idk if there is a 
// nice way of getting an output like this
// i was thinking of tracking how many times i iteerate to find the tenth digit 
// and use that to build an array or keep looping through the- i dunno-this is where i left off lol
// I think we would have to use the 10 factor, and keep multiplying it.... 
// I am sure there is an answer to this problem your way, 
// I did it kinda like actually building into it and some string and number parsing
// oh interesting

// it kinda went like this

const again = n => {
    // this dictionary's keys are the sums the integers add up to
    // the values of this dict is an array of numbers who's individual integers add up to it.
    let dict = {};
    // in this for loop we take the number and turn it into a string
    // this loops though the "letters" parsing them back to type number and adding
    // up the individual "letters" to the sum
    // then add or create to the dictionary
    for(let i = 1; i <= n ; i++) {
        // create variables that change i into a string and has a running sum
        let str;
        let sum;
        // iterate through the strings "letters", which are actually numbers
        // then add to the sum
        for(){}

        // now that we have calculated the sum
        // fill in the dictionary
        if(key in dict){
            // if that already exists
            // push into the correct key, val pairs
        }else {
            // we want sums to be the key 
            // and arrays of the numbers where their "letters" sum to the key
        }
    }

    // now that the dictionary is complete
    // loop though and look for the sum key that has 
    // the largest amount of numbers inside of it's array
    let largestAmount, count;
    for(key in dict) {
        if(){
            // override largest amount
        }
    }

    // now that we know what the largest amount of numbers are for some of the sums,
    // loop again and count how many match that amount
    for(key in dict) {
        if() {count++;}
    }

    // return the final count of how many groups hold the largest amount
    return 
    // kinda make sense? 
    // Yes, I understand what you did. It seems lengthy but accurate
    // ya trying to explain it was hard because I couldn't 
    // point to anything and just use my vocabulary
    // i totally understand and can relate 
    //Breaking it down you explained it very clearly and thoroughly
    // thanks :) I think it is almost nicer to see the skeleton like that 
    // then you can go back and try to write it again :)

    // agreed

    // i'm going to try to figure out my way later too
    // I love how mathy the algo's are. In the sense that there is a logical answer, but you can get there a couple 
    //different ways
    
    // agreed! I like how you did it and if you got correct answers it is super efficient!, 
    // you would just have to validate in the beginning that the input was less than 100, yup

    // hey, i have another one i was wokring on today with dun dun dun!! Linked lists. 
    // I couldn't figure out how to work wiht null. i feel like i have before

    // pull it up,  unless you're feeling done. I wanna peek :)

}


const whatever = (n) => {

    // ha I already made notes to myself over this :)

    let dict = {};

    for (let i = 1; i <= n; i++) {
        let strN = i.toString();
        let sum = 0;
        for (let letter of strN) {
            sum += Number(letter);
            // okay here, idk what it did if we got number 275...
            // sum should be 14, now 14 is a "new" sum so we create a new column or
            // to keep track of it and all the other numbers who's integers add to 14
            // { "14" : [257, 275, 572, 554, 725, 752] }
        }
        // console.log(`\ti is ${i} and it sums to ${sum}`);
        if (sum in dict) {
            dict[sum].push(i);
        } else {
            dict[sum] = [i];
        }
    }
    // okay so here the dict has multiple keys, more than 9, and created new arrays for it
    // console.log('dict');
    // console.log(dict);
    let maxLen = 0, count = 0;
    // this loop looks though the dict looking for the longest val array
    for (let key in dict) {
        if (dict[key].length > maxLen) {
            maxLen = dict[key].length;
        }
    }
    // this loop counts how many of them are at that max
    for (let key in dict) {
        if (dict[key].length === maxLen) {
            count++;
        }
    }
    return count;
}




console.log();

// example 2: 2
console.log("ex.2: ")
console.log(countLargestGroup(2));
console.log();

// example 3: 6
console.log("ex.3: ")
console.log(countLargestGroup(15));
console.log();

// example 4: 5
console.log("ex.4: ")
console.log(countLargestGroup(24));
console.log();

// example 5: 9
console.log("ex.5: ")
console.log(countLargestGroup(18));
console.log();

// example Lia
console.log("ex.Lia: ")
console.log(whatever(275));
// okay I see what happened, made notes around lines 82-94
console.log();

// DEADCODE 

    //  no loops- did not work if n > 99 && if y > 8
    // if(n < 10){ return n; }
    // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // let x = Math.floor(n / 10);
    // let y = (n % 10) - x;
    // console.log(x);
// console.log(y);
// x++;
// arr.splice(0, x);
// console.log(arr);
// 
// return arr[y];
// let arr = [[1], [2]] // blah blah blah :)
// for (let i = 1; i <= n; i++) {
//     // take that number say i = 275
//     let starter = i.toString();
//     let sum = 0;
//     // change it into a string
//     while (sum > 10) {
//         // I am going to copy past my old one over
//         // is that cool? or do you want to talk about it more

//         // let's see your copy of it and then talk about it
//         // kk cool 

//         //over the string and add all the individual numbers 2+7+5 = 14, 1+4 = 5
//     }
//     // is that correct? is that where is would end up in the 5-th position?

// }