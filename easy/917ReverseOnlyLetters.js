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
 * Output: "Qedo1ct-eeLg=ntse-T!" */
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {

    const miniAlgo = (someString) => {
        let rntStr = "";
        for (let i = someString.length - 1; i >= 0; i--) {
            if (someString[i].match('[a-zA-Z]')) {
                rntStr += someString[i];
            } // k, gotta google real quick
        }
        return rntStr;
    };
    let finalStr = "";
    let reversedAlphaOnly = miniAlgo(S);
    // console.log(reverseOnlyLetters, " reversed Letters Only")
    for (let i = 0, j = 0; i < S.length; i++) {
        let letter = S[i];
        if (letter.match('[a-zA-Z]')) {
            finalStr += reversedAlphaOnly[j];
            j++;
        } else {
            finalStr += S[i];
        }
    }
    return finalStr;
};

// Accepted!! 10.15.2020
// Runtime: 72 ms, faster than 90.10% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 40.3 MB, less than 5.80% of JavaScript online submissions for Reverse Only Letters.

// console.log(reverseOnlyLetters("ab-cd") + " == dc-ba");
// console.log();
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj") + " == j-Ih-gfE-dCba");
// console.log();
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!") + " == Qedo1ct-eeLg=ntse-T!");
// console.log();

const inPlace = (S) => {
    const swap = (i, j) => {
        let temp = letterArr[j];
        letterArr[j] = letterArr[i];
        letterArr[i] = temp;
    }
    let letterArr = Array.from(S);
    console.log(letterArr);
    let front = 0, back = S.length - 1;
    let count = 0;
    while (front < back && count < 100) {
        if (S[front].match('[a-zA-Z]') && S[back].match('[a-zA-Z]')) {
            // S[front,back] = S[back,front]
            swap(front,back);
            // [S[front], S[back]] = [S[back], S[front]];
            front++;
            back--;
        } else if (!S[front].match('[a-zA-Z]')) {
            front++;
        } else if (!S[back].match('[a-zA-Z]')) {
            back--;
        } else if (count == 99) {
            console.log("something went wrong");
        }
        count++;
        console.log(letterArr);
    }
    console.log(S);
    return letterArr.reduce((addToMe, runningVal) => addToMe + runningVal, "");
    /**
     * Runtime: 80 ms, faster than 55.29% of JavaScript online submissions for Reverse Only Letters.
     * Memory Usage: 40 MB, less than 5.80% of JavaScript online submissions for Reverse Only Letters.
     */
}
console.log(inPlace("ab-cd"), "  : dc-ba");


// console.log(
//     [2,3,4].reduce((accum, runner) => {
//         console.log(accum, " accum");
//         console.log(runner, " runner\n");
//         if(runner %2 ==0) {
//             return accum + runner;
//         }
//         return accum;
//     } , 0), " this .reduce() function should return the sum, of 2,3,4"
// );

// console.log(
//     ['l','i','a'].reduce((accum, runner) => {
//         console.log(accum, " accum");
//         console.log(runner, " runner\n");
//         return accum + runner;
//     } , ''), " this .reduce() function should return the sum, of l,i,a"
// );


// Accepted!! 10.15.2020
// Runtime: 72 ms, faster than 90.10% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 40.3 MB, less than 5.80% of JavaScript online submissions for Reverse Only Letters.

// console.log(reverseOnlyLetters("ab-cd") + " == dc-ba");
// console.log("a-bC-dEf-ghIj");
// console.log(inPlace("a-bC-dEf-ghIj") + " == j-Ih-gfE-dCba");
// console.log();
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!") + " == Qedo1ct-eeLg=ntse-T!");
// console.log();

/**
 * so, im thinking two runners. one front and one back.
 * orrrrr . . . do we remove symbols and add back later?
 * make a dict of symbols with the placement as their dict value
 *
 * idk that last example kinda f*s me up
 * "Test1ng-Leet=code-Q!"
 * "Qedo1ct-eeLg=ntse-T!"
 *
 * reading left to right  or like "front pointer" and "back pointer"
 * // we only have to go halfway, right?
 * // yes we will go until front == back...
 * I want to build two separate strings and just join them at the end
 * bc strings are immutable.... unless we want to use Array.of("string") => which returns ["s","t","r","i","n","g"]
 * i think using an array would be easier
 * okay agreed then we can just to a straight swap,
 *
 * dude so I was thinking of "streaming" this to my new classmate to show off some collabrative algo skills
 * but I kinda wanted you to myself lol, awwww, you are so sweet. we can do it again :)
 *
 * be a little more intamate :)
 * bc all the bros don't actually hop on the liveshare with me and basically just watch or
 * lend an opinion, or talk about the gym.... hahah, lol!!!
 *
 * but darrick is cool he can join hahaha, he's grandfathered in XD
 *
 * that cuddley grandfather hahaha, lmao
 *
 * okay I feel like we could write this, using .match({{regex goes in here}})
 * for alphabet letters it will look like this letter.match('[a-zA-Z]') => T/F;
 * // i understand what youre doing but would like to see it executed
 *  :)))))))
 * swap(T,Q)
 * swap(e,e)
 * swap(s,d) //
 * swap(t,o)
 * swap(1,1) // this does not happen symbols and non-letters stay in place...
 * swap(n,c)
 * swap(g,t)
 * swap(-,-) // this does not happen symbols and non-letters stay in place.
 *
 *
 *
 *
 * runner in front adds either letter from backrunner OR symbol?
 *
 */
/**
 * ya let's game plan before darrick gets here :)
 */

// console.log(miniAlgo("lia2m*cC4l345a'&&neLOVES09823ri$$t&%s"));
// run it lol  :)), okay that is some of .match()
// awwwww!! I love you tooo babes, i see how this will be helpful in this algo for sure

// console.log(reverseOnlyLetters("ab-cd") + " == dc-ba");
// console.log();
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj") + " == j-Ih-gfE-dCba");
// console.log();
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!") + " == Qedo1ct-eeLg=ntse-T!");
// console.log();