/**824. Goat Latin
 * A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
 * 
 * We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
 * 
 * The rules of Goat Latin are as follows:
 * 
 * If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
 * For example, the word 'apple' becomes 'applema'.
 *  
 * If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
 * For example, the word "goat" becomes "oatgma".
 *  
 * Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
 * For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
 * Return the final sentence representing the conversion from S to Goat Latin. 
 * 
 * Example 1:
 * Input: "I speak Goat Latin"
 * Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 * 
 * Example 2:
 * Input: "The quick brown fox jumped over the lazy dog"
 * Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 */
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let vowels = {
        "a": 1,
        "A": 1,
        "e": 1,
        "E": 1,
        "i": 1,
        "I": 1,
        "o": 1,
        "O": 1,
        "u": 1,
        "U": 1
    }
    let len = S.length;
    let addOn = "ma";
    // let word = "";
    let cons = "";
    let ans = "";
    for (let i = 0; i < len; i++) {
        console.log(S[i]);
        if (S[i] === " ") {
            addOn = addOn + "a";
        } else {
            for (let j = i; j < len; j++) {
                i = j;
                if(S[j] === " "){
                    break;
                }
                if (!(S[i] in vowels)) {
                    cons = S[i];
                    j++;
                    console.log(cons);
                }
                ans = ans + S[j];
                j++;
                // console.log(ans)
                
            }
            ans = ans + addOn + " ";
            if (cons != "") {
                ans = ans + cons;
            }
            cons = "";
            
        }
    }
    return ans;
};


// example 1: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// console.log("example 1: " + toGoatLatin("I speak Goat Latin"));

// example 2: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
// console.log("example 2: " + toGoatLatin("The quick brown fox jumped over the lazy dog"));