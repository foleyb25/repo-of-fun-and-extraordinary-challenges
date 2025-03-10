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
var postOrderTraversal = function(root: TreeNode) {
    let res: Array<number> = []
    function traverse(node: (TreeNode | null)) {
        if(!node) return 
        traverse(node.left)
        traverse(node.right) 
        res.push(node.val)
    }
    traverse(root)
    return res
};