import TreeNode from "./Classes/TreeNode";
import { symmetricTree1 } from "./Trees/symmetricTree.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * This solutions works if we are just comparing nodes and disregarding values
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root: TreeNode) {
    if(!root) return true
    const isReflective = (l: TreeNode, r: TreeNode): boolean => {
        if(!l && !r) return true
        if(!l || !r || l.val !== r.val) return false

        //We want to traverse the tree so a pointer is referenced at mirrored sides of the tree. The previous solution will 
        return isReflective(l.left, r.right) && isReflective(l.right, r.left)
    }
    return isReflective(root.left, root.right)
};

console.log(isSymmetric(symmetricTree1));