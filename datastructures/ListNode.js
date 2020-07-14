/***
 * trying to import and export file and modularize my code 
 */
module.exports = class ListNode {
    /**
     * A Node with two characteristics Val and Next
     * @param { number } val values integer for the node
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    /**
     * 
     * 
     * @param {number} val 
     * @returns {ListNode}
     */
    add = (val) => {
        let curr = this;
        while (curr.next != null) {
            curr = curr.next;
        }
        let newNode = new ListNode(val);
        curr.next = newNode;
        return this;
    }
    /**
     * @returns void
     */
    print = () => {
        let arr = [];
        let curr = this;
        while (curr != null) {
            arr.push(curr.val);
            curr = curr.next;
        }
        console.log(arr);
    }
}