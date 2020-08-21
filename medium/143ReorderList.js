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
    // if we are passed null or a node with only one in it 
    if(head === null || head.next === null) { return head; }
    let back = head;
    let curr = head.next;
    let runner = head;
    let front = head.next;

    while (curr != null && curr.next != null) {
        // console.log("first while loop") // moves front to last node, front = runner.next & front.next = null
        while (front.next != null) {
            // console.log("second while loop")
            front = front.next;
            runner = runner.next;
        }
        // console.log("reassignment")
        runner.next = null;    
        back.next = front;
        front.next = curr;
        back = curr;
        curr = back.next;
        runner = back;
        
        // if(curr.next != null){
           front = curr; 
        // }
        
    }
    runner.next = null;    
    back.next = front;
    // front.next = curr;
    
    // console.log("return")
    return head;
};

// Accepted!! 08.20.2020
// Runtime: 992 ms, faster than 5.02% of JavaScript online submissions for Reorder List.
// Memory Usage: 45.5 MB, less than 13.80% of JavaScript online submissions for Reorder List.






// let ex1 = new ListNode(1);
// for (let val of [2, 3, 4]) {
//     ex1.add(val);
// }
// // console.log("example 1: [1, 2, 3, 4]");
// ex1.print();
// reorderList(ex1).print();

// while(count < 100 && runner) {
//     count++;
//     console.log(runner.val);
//     runner= runner.next;
// }



// console.log();

let ex2 = new ListNode(1);
for (let val of [2, 3, 4, 5]) {
    ex2.add(val);
}
console.log("example 2: [1, 2, 3, 4, 5]");
ex2.print();
reorderList(ex2).print();
console.log(reorderList(ex2).val);
console.log();

class BTS {
    BTS(num){
        this.left = null;
        this.right = null;
        this.val = num;
    }
}
const myBTS = new BTS(200);
myBTS.left = new BTS(100);
myBTS.right = new BTS(300);
//   200
// 100  300

myBTS.left.left = new BTS(50);