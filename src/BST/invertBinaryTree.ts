/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import TreeNode from "./Classes/TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root: (TreeNode|null)) {
    if(!root) return null
    let tempRootLeft = invertTree(root.left)
    let tempRootRight = invertTree(root.right)
    root.right = tempRootLeft
    root.left = tempRootRight
    return root
};