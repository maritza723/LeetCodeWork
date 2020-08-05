/**1122. Relative Sort Array
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * 
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
 * 
 * Example 1:
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let rtnArr = [], leftovers = [];
    let dict = {};
    for (let val of arr1) {
        if (!(arr2.includes(val)) && !(leftovers.includes(val))) {
            leftovers.push(val);
        }
    }
    leftovers.sort((a, b) => (a - b));
    // console.log("leftovers ",leftovers);
    arr2.push(...leftovers);
    // console.log("arr2 ",arr2);
    for (let val of arr1) {
        if (val in dict) {
            dict[val].push(val);
        } else {
            dict[val] = [val];
        }
    }
    // console.log(`dict `, dict);
    // console.log(`arr2 `, arr2);
    for (let val of arr2) {
        if (val in dict) {
            rtnArr.push(...dict[val]);
        } else {
            rtnArr.push(val);
        }
        // for(let i = 0; i < dict[val]; i++) {
        //     rtnArr.push(val);
        // }
    }
    // console.log(rtnArr);
    return rtnArr;
};

//Accepted!! 
// Runtime: 96 ms, faster than 19.87% of JavaScript online submissions for Relative Sort Array.
// Memory Usage: 37.2 MB, less than 28.57% of JavaScript online submissions for Relative Sort Array.

// example 1: [2,2,2,1,4,3,3,9,6,7,19]   
// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));

// example 2:[[22,28,8,6,17,44]]
// console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));






var relativeSortArrayTrial = function (arr1, arr2) {
    let dict2 = {};
    let len2 = arr2.length, len1 = arr1.length;
    let leftovers = [];

    // this for loop walks though arr2 and creates a dict
    // where the key, val pairs are 
    // the element, then the index
    for (let i = 0; i < len2; i++) {
        if (!(arr2[i] in dict2)) {
            dict2[arr2[i]] = i;
        }
    }
    // console.log(dict2);

    // this for loop walks though arr1
    // the looks for the elements not in arr2 and pushed them to a leftover arr
    for (let i = 0; i < len1; i++) {
        if (!(arr1[i] in dict2)) {
            leftovers.push(arr1[i]);
        }
    }
    // then we sorted the leftovers
    leftovers.sort((a, b) => (a - b));
    // console.log('leftovers ', leftovers);

    // this for loop might be unnecessary 
    for (let i = 0; i < leftovers.length; i++) {
        dict2[leftovers[i]] = (len2 + i);
    }
    // console.log('dict2 line 36 after pushing leftovers in');
    // console.log(dict2);

    // created a variable that is a function called swap that takes
    // two indexes and an array and swaps them
    const swap = (i, j, arr) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // this variable, pointer, keeps track of where in the arr1 that we are swapping to 
    // it will be walking all the way down arr1 and incremented after every swap
    let pointer = 0;

    // here we concat leftover onto arr2 because we are ordering arr1 with regaurds to arr2
    arr2.concat(leftovers);

    // this for loop walks though all the elements in arr2 
    // then looks though arr1 trying to find the next occurrence of the element we are looking for
    // starting at 1 index before it
    // if it is equal to -1 that means another occurrence of the element does not exist
    // other wise we will see 
    for (let val of arr2) {
        let nextOccurrenceInd = arr1.indexOf(val, pointer + 1);
        while (nextOccurrenceInd != -1) {
            swap(pointer + 1, nextOccurrenceInd, arr1);
            // console.log('arr1: ', arr1);
            nextOccurrenceInd = arr1.indexOf(val, nextOccurrenceInd + 1);
            pointer++;
            // console.log('inner while: ', nextOccurrenceInd);
        }
    }
    console.log(arr1);
};
// console.log(relativeSortArray())
// example 1: [2,2,2,1,4,3,3,9,6,7,19]   
// console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [4, 3, 2, 1, 9]), " top function");


// DEADCODE
// let dict = {}; 
// let len = arr1.length;
// for (let i = 0; i < len; i++) {  // created a dict of arr1
//     if (arr1[i] in dict) {
//         dict[arr1[i]]++;
//     } else {
//         dict[arr1[i]] = 1;
//     }
// }
// dict = { '1': 1, '2': 3, '3': 2, '4': 1, '6': 1, '7': 1, '9': 1, '19': 1 }
//        // i wasn't totally sure what to do with that info 


var relativeSortArrayRitz = function (arr1, arr2) {
    let dict1 = {};
    let dict2 = {};
    let len2 = arr2.length, len1 = arr1.length;

    for (let i = 0; i < len2; i++) {
        if (!(arr2[i] in dict2)) {
            dict2[i] = arr2[i];
        }
    }
    len2--;
    arr1.sort((a, b) => (a - b));
    for (let i = 0; i < len1; i++) {
        if (!(arr1[i] in dict2)) {
            dict2[len2] = arr1[i];
            len2++;
        }

        if (dict1[arr1[i]] in dict1) {
            dict1[arr1[i]]++;
        } else {
            dict1[arr1[i]] = 1;
        }
    }
    let i = 0;
    while (i < len2 && i < 100) {
        if (dict2[i] in dict1 && dict1[dict2[i]] > 0) {
            console.log(dict2[i]);
            arr1.splice(0, 1);
            arr1.push(dict2[i]);
            dict1[dict2[i]]--;
        } else {
            i++;
        }
    }
    return arr1;
};
// yay!!



// example 1: [2,2,2,1,4,3,3,9,6,7,19]   
// console.log(relativeSortArrayRitz([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));

// // example 2:[[22,28,8,6,17,44]]   // this one isn't sorting dict1 :/
// console.log(relativeSortArrayRitz([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));


