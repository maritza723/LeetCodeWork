/**970. Powerful Integers
 * Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
 * 
 * Return a list of all powerful integers that have value less than or equal to bound.
 * 
 * You may return the answer in any order.  In your answer, each value should occur at most once.
 * 
 * Example 1:
 * Input: x = 2, y = 3, bound = 10
 * Output: [2,3,4,5,7,9,10]
 * Explanation: 
 * 2 = 2^0 + 3^0
 * 3 = 2^1 + 3^0
 * 4 = 2^0 + 3^1
 * 5 = 2^1 + 3^1
 * 7 = 2^2 + 3^1
 * 9 = 2^3 + 3^0
 * 10 = 2^0 + 3^2
 * 
 * Example 2:
 * Input: x = 3, y = 5, bound = 15
 * Output: [2,4,6,8,10,14] */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    let arr = [];
    let dict ={};
    let pusher = 0;
    for (let i = 0; i < bound; i++){
        for (let j = 0; j < bound; j++){
            pusher = Math.pow(x, i) + Math.pow(y, j);
            if(pusher <= bound){
                arr.push(pusher);
            }
            
        }
    }
    for (let i = 0; i < arr.length; i++){
        if (dict[arr[i]] in dict){
            arr.splice(i, 1);
        } else { dict[arr[i]] = 1; }
    }
    arr.sort();
    let ans = [];
    while (key in dict){
        if(dict[key] == 1){
            ans.push(key);
        }
        key++;
    }

    return ans;
};


// console.log(powerfulIntegers(2, 3, 10) + " == [2,3,4,5,7,9,10]");
// console.log();
// console.log(powerfulIntegers(3, 5, 15) + " == [2,4,6,8,10,14]"); 
// console.log();