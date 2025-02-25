import {unOrderedTree1} from "./Trees/unOrderedTree.js"
import TreeNode from "./Classes/TreeNode.js"

/**
 * 
 * Find max depth of a tree using a memoization technique
 * 
 * 1) See if the current node have a left and right node. If it does store it in the memo stack - this node will be revisited
 *    to traverse down it's right side. Saves the node (key) and total (value) in a Map.
 * 2) Check if a left node exists. If it does set curr to it and increment.
 * 3) Check if a right node exists. If it does set curr to it and increment.
 * 4) If left or right node does not exist we are at a leaf. Check if new maximum has been reached and if the memoStack
 *    has been depleted. If it has been we can assume we reached the last leaf and return the maximum.
 * 5) Pop off the memoStack and update the total with the value associated with popped node. Set current to right and increment.
      Repeat step 1 and so on.
 */
var maxDepth = function(root: TreeNode): number {
    if(!root) return 0
    let memoStack: Map<TreeNode,number>[] = []
    let curr: (TreeNode | null) = root
    let maximum: (number) = -1
    let total: (number) = 1
    let memo : (Map<TreeNode,number> | undefined);

    while(curr) {
        if(curr.right && curr.left) {
            let myMap = new Map()
            myMap.set(curr, total)
            memoStack.push(myMap)
        }
        if(curr.left) {
            curr = curr.left
            total++
        } else if (curr.right) {
            curr = curr.right
            total++
        } else {
            //reached leaf node, refer back to memo stack and pop off the most recent node. Set current node to right of this node and update total
            if(total > maximum) {
                maximum = total
            }
            //we are at a leaf node and there is nothing else in the memo. Break and return the maximum
            if(memoStack.length === 0) {
                return maximum
            }
            memo = memoStack.pop()
            curr = [...memo?.keys() ?? []][0]
            total = memo?.get(curr) ?? 0
            curr = curr.right
            total++ // increment since we are traversing to the next node
        }
    }
    return maximum
};

function maxDepthRecursive(node: (TreeNode | null) ): number {
    if(!node) {
        return 0
    }
    return Math.max(1+maxDepthRecursive(node.left), 1+maxDepthRecursive(node.right))
}

console.assert(maxDepth(unOrderedTree1) === 4)
console.assert(maxDepthRecursive(unOrderedTree1) === 4)
