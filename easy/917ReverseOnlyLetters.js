/**917. Reverse Only Letters
 * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.
 * 
 * Example 1:
 * 
 * Input: "ab-cd"
 * Output: "dc-ba"
 * Example 2:
 * 
 * Input: "a-bC-dEf-ghIj"
 * Output: "j-Ih-gfE-dCba"
 * Example 3:
 * 
 * Input: "Test1ng-Leet=code-Q!"
 * Output: "Qedo1ct-eeLg=ntse-T!" *//**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
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
};



// console.log(reverseOnlyLetters("ab-cd") + " == dc-ba");
// console.log();
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj") + " == j-Ih-gfE-dCba");
// console.log();
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!") + " == Qedo1ct-eeLg=ntse-T!");
// console.log();