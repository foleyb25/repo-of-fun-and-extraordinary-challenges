/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import { ListNode } from "./Classes/ListNode";

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var intersectVal: (ListNode | null) = null

var getIntersectionNode = function(headA: (ListNode | null), headB: (ListNode | null)): (ListNode | null) {
    let map: Map<ListNode, number> = new Map()
    let skipIndexA: number = 0
    intersectVal = null
    let skipA: number = -1
    let skipB: number = -1
    let skipIndexB: number = 0
    while(headA || headB) {
        if(headA) {
            if(map.has(headA)) {
                intersectVal = headA
                skipA = skipIndexA
                break
            }
            map.set(headA,skipIndexA)
            skipIndexA++
            headA = headA.next
        }
        if(headB) {
            if(map.has(headB)) {
                intersectVal = headB
                skipB = skipIndexB
                break
            }
            map.set(headB,skipIndexB)
            skipIndexB++
            headB = headB.next
        }
    }
    return intersectVal
};