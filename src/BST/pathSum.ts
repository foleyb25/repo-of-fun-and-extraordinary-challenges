import TreeNode from "./Classes/TreeNode.js";
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
 * @param {number} targetSum
 * @return {boolean}
 * 
 * Determine if Tree contains a path - leaf to root - that sums to targetSum
 * 
 */
var hasPathSum = function(root: (TreeNode | null | undefined), targetSum: number): boolean {
    if(!root) return false
    
    //if we found a root node, calculate
    if(!root.left && !root.right) {
        targetSum -= root.val
        return targetSum === 0
    }

    return (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val))
};