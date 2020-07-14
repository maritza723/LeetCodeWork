/**82. Remove Duplicates from Sorted List II
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * 
 * Return the linked list sorted as well.
 * 
 * Example 1:
 * Input: 1->2->3->3->4->4->5
 * Output: 1->2->5
 * 
 * Example 2:
 * Input: 1->1->1->2->3
 * Output: 2->3
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
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) { return head; }

    let curr = head;
    let front = head.next;
    let dict = {};
    let count = 1;
    while (front != null) {
        if (curr.val in dict) {
            dict[curr.val]++;
        } else {
            dict[curr.val] = 1;
        }
        curr = front;
        front = front.next;
        count++;
    }
    if (curr.val in dict) {
        dict[curr.val]++;
    } else {
        dict[curr.val] = 1;
    }
    console.log(dict);
    let newNode = new ListNode(head.val);
    let runner = newNode;
    for (let key in dict) {
        console.log(newNode);
        while (runner.next != null) {
            if (val == 1) {
                runner.next = Number(dict[key]);
                runner = runner.next;
            }
        }

        // 
        //     if(dict[key] == 1 && runner.next != null){
        //         runner.next = Number(key);
        //         console.log("line 55")

        // } else 
        // if(dict[key] == 1){
        //     newNode.next = Number(key);
        // }

        }
        return newNode;
    };

    const myList = new ListNode(1);
    for (let val of [2, 3, 3, 4, 4, 5]) {
        myList.add(val);
    }
    console.log("example one: " + myList);
    myList.print();
    deleteDuplicates(myList).print();
// // expected: [1,2,5]

// const myList = new ListNode(1);
// for (let val of [1, 1, 2, 3]) {
//     myList.add(val);
// }
// console.log("example two" + myList);
// // myList.print();
// deleteDuplicates(myList).print();
// // expected: [2,3]