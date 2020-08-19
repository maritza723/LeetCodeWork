/**328. Odd Even Linked List
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
 

Constraints:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
The length of the linked list is between [0, 10^4]. 
 */
const ListNode = require('../datastructures/ListNode');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next === null) { return head; }
    let back = head.next;
    let curr = head;
    let front = curr.next;
    let hold = back;
    while(curr.next != null && front.next != null){
        curr.next = front.next;
        curr = front. next;
        front = curr.next;
        back.next = front;
        back = front;
    }
    curr.next = hold;
    return head;
};

// Accepted!! 07.22.2020
// Runtime: 96 ms, faster than 28.52% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 39 MB, less than 23.15% of JavaScript online submissions for Odd Even Linked List.

// const myList = new ListNode(1);
// for (let val of [2, 3, 4, 5]) {
//     myList.add(val);
// }
// console.log("example one" + myList);
// myList.print();
// oddEvenList(myList).print();
// expected: [1, 3, 5, 2, 4]

// const myList = new ListNode(2);
// for (let val of [1, 3, 5, 6, 4, 7]) {
//     myList.add(val);
// }
// console.log("example two");
// // myList.print();
// oddEvenList(myList).print();
// expected: [2, 3, 6, 7, 1, 5, 4]
