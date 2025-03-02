import { ListNode } from "./Classes/ListNode.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head: (ListNode|null)): boolean {
    let nodeMap: Map<ListNode, number> = new Map()
    let pos: number = 0
    while(head) {
        if(nodeMap.has(head)) return true
        nodeMap.set(head, pos)
        pos++
        head = head.next
    }
    return false
};