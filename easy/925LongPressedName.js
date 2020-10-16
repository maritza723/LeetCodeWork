/**925. Long Pressed Name
 * Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
 * 
 * You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
 * 
 * Example 1:
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 * 
 * Example 2:
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
 * 
 * Example 3:
 * Input: name = "leelee", typed = "lleeelee"
 * Output: true
 * 
 * Example 4:
 * Input: name = "laiden", typed = "laiden"
 * Output: true
 * Explanation: It's not necessary to long press any character. *//**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let nameLen = name.length;
    let j = 1;
    for (let i= 0; i < nameLen; i++){
            
            if(name[i] === typed[j]) { 
                
                if(name[i + 1] === typed[j + 1]){
                    i++;
                    j++;
                }
                i--;
                j++;
            } else if (name[i] === typed[j + 1]){
                j++;
            } else if (name[i] != typed[j] && name[i + 1] != typed[j]) {
                 return false; 
            } else if (name[i] === name[i + 1] && typed[j] === typed[j + 1]){
                i++;
                j++;
            } 
            
        
    }
    return true;
};


console.log("false");
console.log(isLongPressedName("saeed", "ssaaedd"));
console.log(isLongPressedName("wguoa", "wwgooa"));

console.log("true");
console.log(isLongPressedName("alex", "aaleex"));
console.log(isLongPressedName("leelee", "lleeelee"));
console.log(isLongPressedName("laiden", "laiden"));
console.log(isLongPressedName("laiden", "laiiideeeen"));


let len = S.length - 1;
    let dict ={
        "a": "A",
        "b": "B",
        "c": "C",
        "d": "D",
        "e": "E",
        "f": "F",
        "g": "G",
        "h": "H",
        "i": "I",
        "j": "J",
        "k": "K",
        "l": "L",
        "m": "M",
        "n": "N",
        "o": "O",
        "p": "P",
        "q": "Q",
        "r": "R",
        "s": "S",
        "t": "T",
        "u": "U",
        "v": "V",
        "w": "W",
        "x": "X",
        "y": "Y",
        "z": "Z"
    };
    let ans = "";
    let j = 0;
    for (let i = len; i > 0; i--){
        j++;
        if(S[j] in dict){
            ans += S[i];
        } else { 
            ans += S[j]; 
            j--;
        }
    }
    console.log(ans);