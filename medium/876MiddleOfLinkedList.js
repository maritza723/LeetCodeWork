/**876. Middle of the Linked List
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * 
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 * 
 * Example 2:
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * Note:
 * The number of nodes in the given list will be between 1 and 100.
 */
const ListNode = require('../datastructures/ListNode.js')
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
var middleNode = function(head) {
    if(head === null || head.next === null) { return head; }
    let ans = head;
    let run = ans.next;
    while(run.next != null && run.next.next != null){
        console.log(run.next.next);
        ans = ans.next;
        run = run.next.next;
        
    }
    ans = ans.next;
    return ans;
};

// Accepted!! 07.20.2020
// Runtime: 68 ms, faster than 58.68% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 36.9 MB, less than 5.17% of JavaScript online submissions for Middle of the Linked List.

// const myList = new ListNode(1);
// for (let val of [2, 3, 4, 5]) {
//     myList.add(val);
// }
// console.log("example one: " + myList);
// myList.print();
// middleNode(myList).print();
// // expected: [3,4,5]

// const myList = new ListNode(1);
// for (let val of [2, 3, 4, 5, 6]) {
//     myList.add(val);
// }
// console.log("example one: " + myList);
// myList.print();
// middleNode(myList).print();
// // expected: [4,5,6]

