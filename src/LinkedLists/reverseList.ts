/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 */

import { ListNode } from "./Classes/ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Utilizes a stack
 */
var reverseList = function(head: (ListNode | null)) {
    if(!head) return null
    let stack = []
    //loop to push nodes to stack
    while(head) {
        stack.push(head)
        let temp = head
        head = head.next
        temp.next = null
    }
    head = stack[stack.length-1]
    while(stack.length > 0) {
        let temp = stack.pop()
        if(temp && stack[stack.length-1]) {
            temp.next = stack[stack.length-1]
        }
    }
    return head
};

var reverseListAlt = function(head: ListNode) {
    let caboose = null
    let pilot: (ListNode | null) = head
    while (pilot) {
        let nextNode: (ListNode | null) = pilot.next
        pilot.next = caboose
        caboose = pilot
        head = caboose
        pilot = nextNode
    }

    return head
};