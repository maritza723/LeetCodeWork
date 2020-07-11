/**
 * I created a datastructer folder within my leetcode stuff, like on the same 
 * level as the easy,medium, and hard folders, then just imported them to make things "easier
 * 
 * that is when I had to bug Darrick for his import and export file syntax 
 * which was still shitty and got caught on that for a while. Then Brendan fixed
 * it for me by changing some spelling... it was great lol 
 * 
 * so that it my recomemdation, but for this problem, we can just undo some of 
 * the code in the discription
 * 
 * cool, I still have your file that you shared with me. 
 * I just don;t know how to import it. .. we'll deal with that later
 * here we can do that now.
 * okay, it is under datastructures in the leetcodework folder
 * "
 */
//

var ListNode = require('../datastructures/ListNode');

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

/**206. Reverse Linked List
* Reverse a singly linked list.
* 
* Example:
* 
* Input: 1->2->3->4->5->NULL
* Output: 5->4->3->2->1->NULL
* 
* Definition for singly-linked list.
*/
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // edge case with empty node or 
    // one single node with out a .next being passed into the function
    if (head === null || head.next === null) { return head; } // but I know one is assignment lol
    // how many pointers do we need?
    let back = head;
    let front = head.next;
    let curr = head;
    // 11 -> 12 -> 13-> null
    // b
    // c     f

    // 
    
    while(front.next != null){
        curr.next = front.next;
        front.next = back;
        back = front;
        front = curr.next
    }
    front.next = back;
    curr.next = null;
    
    return front;    
    
};

// Accepted!!
// Runtime: 76 ms, faster than 42.68% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 36.8 MB, less than 9.56% of JavaScript online submissions for Reverse Linked List.

// same thing the "=="" vs "==="    just does a type check as well, got it HEARD
// so 1.0 == 1 is true 
// but 
// 1.0 === 1 is false

const myList = new ListNode(5);
for (let val of [6, 8, 9, 10, 22, 30]) {
    myList.add(val);
}
console.log("test one");
myList.print();
// console.log(reverseList(myList));
reverseList(myList).print();

const myList2 = new ListNode(1);
console.log("test two");
myList2.print();
reverseList(myList2).print();
// line 87 is the same as line 82-84
// reverseList(new ListNode(1)).print();


// okay, so the function reverseList take a Listnode instance, not 
// the whole class ListNode
// and if you look back at the other file for removedElement
// sometimes I am logging the return statement, but most of the time
// you just need to call the .print() again bc it returns another listnode


//which it should, but it shouldn't be the head. Do I need to reassign the head at some point?
// idk //thats weird that it stopped at tem Yay!!!