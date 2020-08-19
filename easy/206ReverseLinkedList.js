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
var ListNode = require('../datastructures/ListNode');

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    // edge case with empty node or 
    // one single node with out a .next being passed into the function
    if (head === null || head.next === null) { return head; } 
    let back = head;
    let front = head.next;
    let curr = head;
    
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

// Accepted!! 07.12.2020
// Runtime: 76 ms, faster than 42.68% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 36.8 MB, less than 9.56% of JavaScript online submissions for Reverse Linked List.


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
