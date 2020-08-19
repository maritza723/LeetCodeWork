/**92. Reverse Linked List II
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
 */
var ListNode = require('../datastructures/ListNode.js');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (head === null || head.next === null) { return head; } 
    let back = head;
    let curr = head.next;
    if(curr.next == null && m == n){
        
        head = curr;
        head.next = back;
        back.next = null;
        return head;
    } else if(curr.next == null ){
        return head;
    }
    let front = curr.next;
    while(front.val != n){

        if(curr.val != m){
            back = curr;
            curr = front;
        }
        front = front.next;
    }
    back.next = front;
    back = curr.next;
    curr.next = front.next;
    front.next = back;
    while(back.next != front){
         back= back.next; 
    }
    back.next = curr; 
    return head;
};

// const myList = new ListNode(1);
// for (let val of [2, 3, 4, 5]) {
//     myList.add(val);
// }
// console.log("example one");
// myList.print();
// reverseBetween(myList, 2, 4).print();

// const myList = new ListNode(1);
// for (let val of [2, 3, 4, 5, 6, 7]) {
//     myList.add(val);
// }
// console.log("test one");
// myList.print();
// reverseBetween(myList, 2, 5).print();

// const myList = new ListNode(3);
// for (let val of [5]) {
//     myList.add(val);
// }
// console.log("test two");
// myList.print();
// reverseBetween(myList, 1, 2).print();

// const myList = new ListNode(1);
// for (let val of [2, 3]) {
//     myList.add(val);
// }
// console.log("test three");
// myList.print();
// reverseBetween(myList, 1, 2).print();