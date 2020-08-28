/**1528. Shuffle String
 * Given a string s and an integer array indices of the same length.
 * 
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * 
 * Return the shuffled string.
 * 
 * Example 1:
 * Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
 * Output: "leetcode"
 * Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
 * 
 * Example 2:
 * Input: s = "abc", indices = [0,1,2]
 * Output: "abc"
 * Explanation: After shuffling, each character remains in its position.
 * 
 * Example 3:
 * Input: s = "aiohn", indices = [3,1,4,2,0]
 * Output: "nihao"
 * 
 * Example 4:
 * Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
 * Output: "arigatou"
 * 
 * Example 5:
 * Input: s = "art", indices = [1,0,2]
 * Output: "rat" *//**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let len = s.length;
    let ans = [];
    let S = s.split("");
    // let push;
    for(let i = 0; i < len; i++){
        ans.push(S[i]);
    }
    for(let i = 0; i < len; i++){
        let j = indices[i];
        ans[j] = S[i];
        // console.log(ans[i]);
    }
    let ansStr = "";
    for(let i = 0; i < len; i++){
        ansStr = ansStr + ans[i];
    }
    return ansStr;
};

// Accepted!! 08.27.2020
// Runtime: 92 ms, faster than 51.55% of JavaScript online submissions for Shuffle String.
// Memory Usage: 38.4 MB, less than 42.05% of JavaScript online submissions for Shuffle String.


//                
// // example 1: "leetcode"
// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

// // example 2: "abc"
// console.log(restoreString("abc", [0,1,2]));

// // example 3: "nihao"
// console.log(restoreString("aiohn", [3,1,4,2,0]));
                                

// // example 4: "arigatou"
// console.log(restoreString("aaiougrt", [4,0,2,6,7,3,1,5]));

// // example 5: "rat" 
// console.log(restoreString("art", [1,0,2]));






// UNRELATED DEADCODE
//  put in code
// const helper = (startInd, endInd) => {
    //     let temp = givenSArr[startInd];
    //     givenSArr[startInd] = givenSArr[endInd];
    //     givenSArr[endInd] = temp;
    // }




