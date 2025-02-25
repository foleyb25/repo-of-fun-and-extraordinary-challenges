import TreeNode from "./Classes/TreeNode.js"

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
 * @return {boolean}
 */
var isBalanced = function(root: (TreeNode | null )): boolean {
    if(!root) return true
        function getHeight(node: (TreeNode | null )): number {
            if(!node) return 0

            return Math.max( 1 + getHeight(node.left), 1 + getHeight(node.right))
        }
    let leftMax = getHeight(root.left)
    let rightMax = getHeight(root.right)
    if (Math.abs( (leftMax - rightMax) ) <=1 ) {
        // the left and the right subtrees look good, lets dive down their left and right subtrees and look for imbalances
        return isBalanced(root.left) && isBalanced(root.right)
    } else {
        return false
    }
    
};