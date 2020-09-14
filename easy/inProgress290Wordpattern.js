/**290. Word Pattern
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space. */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let pat = pattern.length;
    let slen = str.length;
    let j = 0;
    let dict = {};
    // can you talk to me about the key, val pairs you are trying to do here
    // 

    // sure so I am building a value of substring ending at " ";
    // the key is the index of pattern
    // why are you storing indexes?
    // so I can evaluate the patterns, when i iterate through later, i can see if they match
    // so if a is in the beginning it should be the same value later on in the pattern

    /**
     * {
     * a: dog, when I come to a again, i make sure it's still dog, 
     * //       when i come across dog again i make sure it's still a
     * b: cat,
     * 
     * } 
     * */
    // okay okay, makes sense, 
    // but this made problems for the pattern : "abc" and string "c b a" 
    // becuase i was looking for key a and it might find value a instead
    // weird
    // okay my recomendation without changing too much would be... 
    //  create the dict like you are, then if that key exists, check that the value is the same as what you 
    //  would want to put in, it's wierd though bc it looks correct, I am going to peek at mine
    // I know I used a nice built in function so I didn't have to while loop though the "words"

    // cool
    for (let i = 0; i < pat; i++) {     // build a dict , so i had a working code which is commented out way below
        // this one worked except when the pattern and str had the same "words" see example 7
        let run = "";
        while (str[j] != " ") {
            if (j >= slen) {
                break;
            }
            run += str[j];
            j++;
        }
        // console.log(dict)
        if (pattern[i] in dict && dict[pattern[i]] != run) {  // so that's all here in this logic run is the value and well you can see the key
            console.log("line 41");
            return false;
        } else if (run in dict && dict[run] != pattern[i]) {
            return false;
        } else {
            dict[pattern[i]] = run;

        }
        j++;

    }

    // console.log(dict)
    return true;
};

// console.log("true examples: ");
// example 1:
// console.log(wordPattern("abba", "dog cat cat dog"));

// // example 7:
// console.log(wordPattern("abc", "b c a"));



// console.log("false examples: ");
// example 2:
// console.log(wordPattern("abba", "dog cat cat fish"));

// // example 3:
// console.log(wordPattern("aaaa", "dog cat cat dog"));

// // example 4:
// console.log(wordPattern("abba", "dog dog dog dog"));

// // example 5:
// console.log(wordPattern("abc", "dog cat dog"));

// // example 6:
// console.log(wordPattern("aaa", "aa aa aa aa"));

const lia = (pattern, str) => {
    let dict = {};
    let arrOfWords = [];
    let built = "";
    let arrOfUniqueWords = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            built += str[i];
        }
        if (i === str.length - 1 || str[i] === " ") {
            arrOfWords.push(built);
            built = "";
        }
    }
    if (pattern.length != arrOfWords.length) {
        return false;
    }
    console.log(arrOfWords, "arrOfWords");
    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i];
        let word = arrOfWords[i];
        if ((letter in dict) && word != dict[letter]) {
            console.log("false route");
            console.log(dict);
            console.log(dict[letter]);
            console.log(word);
            return false;
        } else if (!(letter in dict)) {
            dict[letter] = [word];
            if (!(arrOfUniqueWords.includes(word))) {
                arrOfUniqueWords.push(word);
                console.log(arrOfUniqueWords, "unique words 145");
            } else {
                return false;
            }
        }
    }
    return true;
}

// this makes so much sense and i can see where you differentiated the words vs the letters
// i wrote this a while ago... lol still trying to decode... 
// we could run mine if you want 
// just do one


// console.log("true examples: ");
// example 1:
console.log(lia("abba", "dog cat cat dog"));

// // example 7:
console.log(lia("abc", "b c a"));



// console.log("false examples: ");
// example 2:
console.log(lia("abba", "dog cat cat fish"));

// // example 3:
console.log(lia("aaaa", "dog cat cat dog"));

// // example 4:
console.log(lia("abba", "dog dog dog dog"));

// // example 5:
console.log(lia("abc", "dog cat dog"));

// // example 6:
console.log(lia("aaa", "aa aa aa aa"));


/** FIRST TRY
 * let pat = pattern.length;
 *     let slen = str.length;
 *     let count = 0;
 *     let j = 0;
 *     let dict = {};
 *     for (let i = 0; i < pat; i++) {
 *
 *         let newPatt = "";
 *         while (str[j] != " ") {
 *             if (j >= slen) {
 *                 break;
 *             }
 *             newPatt = newPatt + str[j];
 *             // console.log(str[j]);
 *             j++;
 *             if (str[j] == " ") {
 *                 count++;
 *             }
 *         }
 *         if(count >= pat){
 *             return false;
 *         }
 *         console.log(newPatt);
 *         if (pattern[i] in dict && dict[pattern[i]] != newPatt) {
 *             console.log(dict);
 *             return false;
 *         } else if (newPatt in dict && dict[newPatt] != pattern[i]) {
 *             return false;
 *         } else {
 *             dict[pattern[i]] = newPatt;
 *         }
 *         j++;
 *
 *     }
 *     for (let i = 0; i < pat - 1; i++) {
 *         console.log("here")
 *         for (let j = i + 1; j < pat; j++) {
 *             console.log(pattern[i])
 *             console.log(pattern[j])
 *             // console.log(pattern[i])
 *             if (pattern[i] != pattern[j] && dict[pattern[i]] === dict[pattern[j]]) {
 *
 *                 return false;
 *             }
 *         }
 *
 *     }
 *     // console.log(dict)
 *     return true;
 * }; */
// sorry, i have about ten minutes left to stay on, we can still w1ork
//  on this if you want to open a live Share, and i'll hop off , 
// okay ill slack this file too, yes, lets do saturday afternoon?
// no worries I'll go and talk with Darrick, :) connect again soon :))))