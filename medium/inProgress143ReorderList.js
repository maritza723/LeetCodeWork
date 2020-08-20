/**143. Reorder List
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
 * reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * You may not modify the values in the list's nodes, only nodes itself may be changed.
 * 
 * Example 1:
 * Given 1->2->3->4, reorder it to 1->4->2->3.
 * 
 * Example 2:
 * Given 1->2->3->4->5, reorder it to 1->5->2->4->3. */
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if(head === null || head.next === null) { return head; }
    let back = head;
    let curr = head.next;
    let runner = head;
    let front = head.next;

    while (curr != null && curr.next != null) {
        console.log("first while loop")
        while (front.next != null) {
            console.log("second while loop")
            front = front.next;
            runner = runner.next;
        }
        console.log("reassignment")
        runner.next = null;    // need to reassign to null :|
        back.next = front;
        front.next = curr;
        back = curr;
        curr = back.next;
        runner = back;
        
        // if(curr.next != null){
           front = curr; 
        // }
        
    }
    runner.next = null;    // need to reassign to null :|
    back.next = front;
    front.next = curr;
    
    console.log("return")
    return head;
};



// let ex1 = new ListNode(1);
// for (let val of [2, 3, 4]) {
//     ex1.add(val);
// }
// console.log("example 1: [1, 2, 3, 4]");
// ex1.print();
// console.log(reorderList(ex1));
// console.log();

// let ex2 = new ListNode(1);
// for (let val of [2, 3, 4, 5]) {
//     ex2.add(val);
// }
// console.log("example 2: [1, 2, 3, 4, 5]");
// ex2.print();
// console.log(reorderList(ex2));
// console.log();
