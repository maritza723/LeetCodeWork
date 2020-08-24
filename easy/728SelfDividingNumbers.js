/**728. Self Dividing Numbers
 * Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
 * 
 * Example 1:
 * Input: 
 * left = 1, right = 22
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * Note:
 * The boundaries of each input argument are 1 <= left <= right <= 10000.
 *//**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];
    for(let i = left; i <= right; i++){
        if(i < 10){
            ans.push(i);
        } else {
            // let arr = Array.from(i.toString(), (val) => Number(val));
            let num = i.toString();
            console.log(num)
            let track = 0;
            for(let j = 0; j < num.length; j++){
                
                
                if(num[j] == 0){
                   break;
                }
                if((i % Number(num[j])) == 0){
                    track++;  
                    console.log("i: " + i + ", num[j]: " + num[j]) 
                    console.log(i % Number(num[j]) == 0)
                }
                console.log(track)
                if(track == num.length){
                    console.log("if track")
                    ans.push(i);
                    track = 0 ;
                }
            }
            
        }
    }
    return ans;
};

// Accepted!! 08.24.2020
// Runtime: 92 ms, faster than 43.70% of JavaScript online submissions for Self Dividing Numbers.
// Memory Usage: 38.3 MB, less than 59.75% of JavaScript online submissions for Self Dividing Numbers.

// example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
console.log(selfDividingNumbers(1, 22));
