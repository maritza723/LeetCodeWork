/**83. Remove Duplicates from Sorted List
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 * 
 * Example 1:
 * Input: 1->1->2
 * Output: 1->2
 * Example 2:
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 * 
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
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) { 
        return head; 
    }
    let back = head;
    let curr = head;
    let front = head.next;
    let dict = {};
    while(front != null){
        if(curr.val in dict){
            back.next = curr.next;
        } else {
            dict[curr.val] = 1;
            back = curr;
        }
        curr = front;
        front = front.next;
    }
    if(curr.val in dict){
        back.next = null;
    } 
    return head;
};

// const myList = new ListNode(1);
// for (let val of [1, 2]) {
//     myList.add(val);
// }
// console.log("example one" + myList);
// // myList.print();
// deleteDuplicates(myList).print();

// const myList = new ListNode(1);
// for (let val of [1, 2, 3, 3]) {
//     myList.add(val);
// }
// console.log("example two" + myList);
// // myList.print();
// deleteDuplicates(myList).print();

// Accepted!!
// Runtime: 172 ms, faster than 5.78% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 38.2 MB, less than 13.94% of JavaScript online submissions for Remove Duplicates from Sorted List.
