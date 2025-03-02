import TreeNode from "./Classes/TreeNode.js"
import { unOrderedTree1 } from "./Trees/unOrderedTree.js"

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var minDepth = function(root: (TreeNode | null | undefined)): number {
    if(!root) {
        return 0
    } else if(!root.left && !root.right) {
        return 1
    } else if(root.right && !root.left) {
        //Traverse right side
        return minDepth(root.right) + 1
    } else if (root.left && !root.right) {
        //Traverse left Side
        return minDepth(root.left) + 1
    } else {
        //Get the minimum Depth of left and right sides
        return Math.min(minDepth(root.left) + 1, minDepth(root.right) + 1)
    }
}