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
 * @return {number[]}
 */
var preorderTraversal = function(root: TreeNode) {
    let res: Array<number> = []
    function traverse(root: (TreeNode | null)) {
        if(!root) return
        res.push(root.val)
        traverse(root.left)
        traverse(root.right)
    }
    traverse(root)
    return res
};