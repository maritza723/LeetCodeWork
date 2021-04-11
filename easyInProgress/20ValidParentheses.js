/*** LeetCode 20. Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 * 
 * Input: "()"
 * Output: true
 * @param {string} s
 * @return {boolean}
 */
var isValidWrong = function (s) {
 
    let dict = {'(':0, '[':0,'{':0};
    
    for(let i = 0; i < str.length; i++ ) {
        if(str[i] === '(') {
            dict['('] ++;
        } else if (str[i] === ')') {
            dict['('] --;
        }
        if(str[i] === '[') {
            dict['['] ++;
        } else if (str[i] === ']') {
            dict['['] --;
        }
        if(str[i] === '{') {
            dict['{'] ++;
        } else if (str[i] === '}') {
            dict['{'] --;
        }
        
    }
     
    console.log(dict);
 
    for(let key of dict) {
        if(dict[key] != 0) {
            return false;
        }
    }
     
    return true;


};
/*
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
    
    if(s.length == 0 || s.length%2 != 0) { // if the array is empty or has an odd number of indices, it cannot be valid
        return false;
    }
    let arr = [];
     
    for(i = 0; i < arr.length; i++){
        if(s[i] === '{' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i]);
        } // do we check here for a closing parens? If it starts off closing we can kick right out
        // lets' check one at a time 
        if(s[i] === ')') {
            // we only care about not equals b/c if it does equal lets move along 
            // or if the arr is empty, there is a closing without anything inside of it
            if(arr.length === 0 || arr.pop() != '(') {
                // console.log(arr);
                // console.log("false line 90");
                return false
            } 
        }
        if(s[i] === ']') {
            if(arr.length === 0 || arr.pop() != '[') {
                // console.log(arr);
                // console.log("false line 99");
                return false
            } 
        }
        if(s[i] === '}') {
            if(arr.length === 0 || arr.pop() != '{') {
                // console.log(arr);
                // console.log("false line 108");
                return false
            } 
        }
    }
     
    if(arr.length >0) return false
    return true
};
 
/**
 * @param {string} str
 */
let singleValidParens = (str) => {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
         
        if (str[i] == "(") {
            count += 1;
        } else {
             
            count -= 1;
        }
        if (count < 0) {
            return false;
        }
    }
    return true;
}

function isValidAgain(str) {

    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '{' || str[i] === '[' || str[i] === '{') arr.push(str[i]);
    }
}
console.log(isValid("()[}"));