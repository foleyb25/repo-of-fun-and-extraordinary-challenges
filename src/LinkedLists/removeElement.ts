import { ListNode } from "./Classes/ListNode.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 */
var removeElements = function(head: (ListNode | null), val: number) {
    if(!head) return null

    let caboose: (ListNode | null) = head
    let pilot: (ListNode | null) = head
    
    while(pilot) {
        if(pilot.val === val) {
            while(pilot && pilot.val === val) {
                let temp = pilot
                pilot = pilot.next
                temp.next = null
            }
            if(caboose && caboose?.val !== val) {
                caboose.next = pilot
            } 
            caboose = pilot
            if(head?.val === val) head = caboose
        } else {
            pilot = pilot.next
            if(pilot?.val !== val) {
                caboose = pilot
            }
        }
    }
    return head
};

/**
 * A simpler solution which uses just one pointer and looks ahead, rather than at the current nodes
 */

var removeElementsSimple = function(head: (ListNode | null), val: number) {
    if(!head) return null
    let pilot: (ListNode | null) = head
    if(head.val === val) head = null
    while(pilot.next) {
        if(pilot.next.val === val) {
            pilot.next = pilot.next.next
        } else {
            pilot = pilot.next
            if(pilot && head === null) head = pilot
        }
    }
    return head
};