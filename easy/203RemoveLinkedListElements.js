/**203. Remove Linked List Elements
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// var ListNode = require('./dataStructures/ListNode');
const ListNode = require('./../datastructures/ListNode');
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        console.log("empty list");
        return head;
    }
    let returnHead = head;
    while (returnHead && returnHead.val === val) {
        returnHead = returnHead.next;
    }
    if (returnHead === null) { return returnHead };

    let prev = returnHead, curr = returnHead.next;
    while (curr) {
        if (curr.val === val) {
            curr = curr.next;
            prev.next = curr;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }
    return returnHead;
};

// Accepted! 07.11.2020
// Runtime: 108 ms, faster than 21.31% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 41.1 MB, less than 5.13% of JavaScript online submissions for Remove Linked List Elements.

// let singleNode = new ListNode(25);
// let ex1 = new ListNode(101);
// for (let val of [11, 11, 12, 11, 13, 14, 104]) { 
//     ex1.add(val);
// }
// ex1.print();


/*********Everything below was done by Lia 07/11/2020 *****************/
const removeElementsLia = (head, val) => {

    // empty list
    if (!(head)) { return head; }

    // list with one node that is the target to remove
    if ((head.next == null) && head.val == val) { return null; }

    let back = null; curr = head; front = head.next;
    let newHead;
    // this while loop moves the curr pointer forward until the attribute 
    // .val != val 
    while (curr && curr.val == val) {
        curr = curr.next;
        // with this loop we have to take into account 
        // a list made of only the val we are trying to get rid of 
        // or a list that just has x number of occurances in the begning of list that we are tring to remove
    }
    if(!(curr)) {return null;}

    newHead = curr;
    back = null;
    front = curr.next ? curr.next : null;
    while(curr) {
        if(curr.val == val) {
            if(front != null && front.next != null){
                front = front.next; 
                // the turnary is basically checking for existance
            }
            // front = front.next ? front.next : null; // the turnary is basically checking for existance
            curr = curr.next;
        } else {
            if(back != null) {
                back.next = curr;
            }
            back = curr;
            // console.log("front node is");
            // console.log(front);
            if(front != null && front.next != null){
                front = front.next; 
                // the turnary is basically checking for existance
            }
            // front = (front.next != null) ? front.next : null; // same as line above
            curr = curr.next;
        }
    }
    back.next = curr;
    
    return newHead;
}
// 2 -> 2-> 2-> 5-> null
// back = null  nH
//              c   f
//               


//   2 -> 2 -> 2 -> 2 -> 15 -> 6 -> 7 -> 2 -> 2 -> 2 -> null
//                       nH
//           b = null     c    f
//                        b    c    f
//                             b    c    f
//                                  b    c    f
//                                  b         c    f
//                                  b              c    f
//                                  b                   c    f

//   2 -> 2 -> 2 -> 2 -> 15 -> 6 -> 7 -> 2 -> 2 -> 2 -> 33 -> null
//                       nH
//           b = null     c    f
//                        b    c    f
//                             b    c    f
//                                  b    c    f
//                                  b         c    f
//                                  b              c    f
//                                  b                   c    f
//                                                      b    c    f


// case where function is passed a null head
// ex 1
// return null
console.log(removeElementsLia(null, 2));
console.log();
// case where function is passed one listnode where it needs to be removed
// ex 2
// returns null
console.log(removeElementsLia(new ListNode(2), 2));
console.log();

// case where the list is completely made of elements we need to remove
// ex3
// returns null
let ex3FullOfTwos = new ListNode(2);
for (let val of [2, 2, 2, 2, 2]) { ex3FullOfTwos.add(val) }
console.log("printing a list of all twos, should return null");
ex3FullOfTwos.print();
console.log(removeElementsLia(ex3FullOfTwos, 2));
console.log();

// case where list is "half" full of vals we need to remove from the front
let ex4HalfFrontFull = new ListNode(2);
for (let val of [2, 2, 2, 2, 6, 7, 8, 4, 10]) { ex4HalfFrontFull.add(val); }
console.log("printing a list HALF all twos, should return without twos");
ex4HalfFrontFull.print();
removeElementsLia(ex4HalfFrontFull, 2).print();
console.log();

// case where the number is no where in the list 
let ex5NoTwos = new ListNode(7);
for (let val of [6, 7, 8, 4, 10]) { ex5NoTwos.add(val); }
console.log("printing a list without any twos");
ex5NoTwos.print();
removeElementsLia(ex5NoTwos, 2).print();
console.log();

// case with sporadic twos
let ex6Sporadic = new ListNode(5);
for (let val of [6, 2, 7, 2, 4, 10]) { ex6Sporadic.add(val); }
console.log("printing a list sporadic twos");
ex6Sporadic.print();
removeElementsLia(ex6Sporadic, 2).print();
console.log();


// case with multiple twos in the center
let ex7MultipleTwoCenter = new ListNode(5);
for (let val of [6, 2, 2, 2, 4, 10]) { ex7MultipleTwoCenter.add(val); }
console.log("printing a list with multiple twos in the center");
ex7MultipleTwoCenter.print();
removeElementsLia(ex7MultipleTwoCenter, 2).print();
console.log();


// case with multiple twos at the end...
let ex7MultipleTwoEnd = new ListNode(5);
for (let val of [6, 2, 2, 2]) { ex7MultipleTwoEnd.add(val); }
console.log("printing a list with multiple twos at the end");
ex7MultipleTwoEnd.print();
removeElementsLia(ex7MultipleTwoEnd, 2).print();
console.log();


// ugh I just kept thinking of cases....... 



// let me know when you want me to run :) 
// thanks
/*********Everything above was done 07/11/2020 *****************/


// so because my print() doesn't return anything and just console.logs
// at the end I can not chain like this ex1.print().removeElements().print()
// now that I am thinking about this I can not even write
// ex1.removeElement()
// because .removeElement() 
// would have to live inside the class to invoke the function like that
// instead I need to invoke it alone
// like this 
// removeElements(ex1,number) 
// where I pass ex1 as a parameter. okay that is all my inner thinking
// lol 
// also I can chain like this though
// removeElements(ex1,number).print();
// because the functions RETURNS a ListNode and I can call the print() function on that node
// I'm listening but haven't had time to absorb and think about remove ELements and yeah lol But, I'm following along
// no worries lol 

// ***********************
// let singleNode = new ListNode(25);
// let ex1 = new ListNode(101);
// for (let val of [11, 11, 12, 11, 13, 14, 104]) { //is this supposed to REMOVE the ten's? 
//     ex1.add(val);
// }
// ex1.print();
/**
 * 40-42 is short hand for //heard
 * // :)
 * let arr = [11, 12, 13, 14];
 * for (let i = 0; i < arr.length; i++) {
 *     ex1.add(arr[i]);
 * }
 */

// test cases

// the function calls for two parameters, so I just put a number
// let's think of the cases we will deal with

// // Edge cases
// // empty list,
// console.log(removeElements(null, 5)); // returns null
// console.log();

// // one node in list
// console.log(removeElements(singleNode, 25)); // returns null
// console.log();

// // val not in the list
// removeElements(ex1, 225).print();
// console.log();


// // multiple occurrences
// removeElements(ex1, 11).print();
// console.log();

// // removing head, first node
// removeElements(ex1, 101).print();
// console.log();

// // removing last node, 104
// removeElements(ex1, 104).print();
// console.log();

// let ex2 = new ListNode(5);
// for (let val of [5, 5, 5, 5, 5]) {
//     ex2.add(val);
// }
// console.log(removeElements(ex2, 5)); // returns null
// console.log();


// failed test case
// removeElements(new ListNode(1) ,2).print();

// let ex3 = new ListNode(1)
// ex3.add(2);
// ex3.print();
// removeElements(ex3,1).print();




/** Unfinished
 * removeElements while created a new list
 * returns a new ListNode that has all the deleted all the val occurrences
 * @param {ListNode} head 
 * @param {number} val 
 * @returns {ListNode} creates a new list and returns it
 */
const removeElements2 = (head, val) => {
    // edge case passed empty list or (one element in the head and != to val)
    if (head === null || (head.next === null && head.val != val)) { return head }

    let curr = head, prev = null, ansHead = null;
    while (curr) {
        if (curr.val != val) {
            let newest = new ListNode(curr.val);
            if (ansHead === null) {
                ansHead = newest;
                prev = ansHead;
            }
            prev.next = newest;
            prev = newest;
        }
        curr = curr.next
    }
    return ansHead;
}
