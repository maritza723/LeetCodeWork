/**605. Can Place Flowers
 * Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.
 * 
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: True
 * 
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: False
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if(n == 0){ return true; }
    let len = flowerbed.length;
    let run = 0;
    m = (2*n) + 1
    if(flowerbed[0] == 0){
        run++;
    }
    for (let i = 0; i < len; i++) {
        if(flowerbed[i] == 1){
            run = 0;
        } else {
            run++;
            if(i + 1 == len){
                run++;
            } 
        }
        if(flowerbed[i + 1] == 0){
            run++;
            i++;
        }
        if(run >= 3){
            m -= 2;
            n--;
            run = 1;
        }
        if(n == 0){
            return true;
        }
    }
    return false;
};

// Accepted!! 08.19.2020
// Runtime: 120 ms, faster than 12.58% of JavaScript online submissions for Can Place Flowers.
// Memory Usage: 38.8 MB, less than 29.14% of JavaScript online submissions for Can Place Flowers.

// // example 1: True
// console.log("example 1: ");
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));

// // example 2: False
// console.log("example 2: ");
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));

// // example 3: True
// console.log("example 3: ");
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));

// // example 4: True
// console.log("example 4: ");
// console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));

// // example 5: True 
// console.log("example 5: ");
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));

// // example 6: False
// console.log("example 6: ");
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));


// DEADCODE
// let len = flowerbed.length;
// let run = 0;
// if(flowerbed[0] == 0){ run++; }

// for (let i = 0; i < len; i++) {
//     let m = n + 2;
//     if (flowerbed[i] === 0) {
//         run++;
//         if (run == m) {
//             return true;
//         }
//     } else if (flowerbed[i] == 1 && run == 3) {
//         n - run;
//         console.log(n)
//     } else {
//         run = 0;
//     }
// }

// return false;