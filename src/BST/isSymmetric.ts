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
    if(!root.left && !root.right) return true
    if(!root.left && root.right) return false
    if(!root.right && root.left) return false
    if(root.left.val !== root.right.val) return false
    
    let lq: Array<TreeNode> = []
    let rq: Array<TreeNode> = []
    let lNode: (TreeNode | undefined) = root.left
    let rNode: (TreeNode | undefined) = root.right 

    while((lNode || lq.length > 0) && (rNode || rq.length > 0)) {
        while(lNode && rNode) {
            lq.push(lNode)
            rq.push(rNode)
            lNode = lNode.left
            rNode = rNode.right
            if( (lNode?.val !== rNode?.val) ) return false
            if( (lNode?.val !== rNode?.val) ) return false
        }

        lNode = lq.pop()?.right
        rNode = rq.pop()?.left

        if( (lNode?.val !== rNode?.val) ) return false
        if( (lNode?.val !== rNode?.val) ) return false
    }

    return true
};

var isSymmetricRecursive = function(root: TreeNode) {
    if(!root) return true
    const isReflective = (l: TreeNode, r: TreeNode): boolean => {
        if(!l && !r) return true
        if(!l || !r || l.val !== r.val) return false

        //We want to traverse the tree so a pointer is referenced at mirrored sides of the tree. The previous solution will 
        return isReflective(l.left, r.right) && isReflective(l.right, r.left)
    }
    return isReflective(root.left, root.right)
};

console.assert(isSymmetric(symmetricTree1) === true);
console.assert(isSymmetricRecursive(symmetricTree1) === true);