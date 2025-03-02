import TreeNode from "./Classes/TreeNode.js"
import { symmetricTree1 } from "./Trees/symmetricTree.js";

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

var isBalanced = function(root: TreeNode): boolean {
    if(!root) return true

    /**
     * 
     * Inner function to get depth of tree at a given node. This will be called on the left and right node of every node in the tree
     * and compared to see if diff > 1
     *
    **/
    function getDepth(root: TreeNode): number {
        if(!root) return 0
        let stack: Array<[TreeNode,number]> = []
        let node: (TreeNode | null | undefined) = root
        let depth: number = 0
        let depthArr: Array<number> = []
        while( node || stack.length ) {
            while( node ) {
                //traverse down left side
                stack.push([node, depth])
                node = node.left
                depth++
            }
            [node, depth] = stack.pop()
            depthArr.push(depth)
            node = node?.right
            depth++
        }
        return Math.max(...depthArr)
    }

    //Function to check for balance in left and right nodes
    function isSubtreeBalanced(l: (TreeNode | null | undefined), r: (TreeNode | null | undefined)): boolean {
        let leftDepth: number = (l) ? getDepth(l) : -1
        let rightDepth: number = (r) ? getDepth(r) : -1
        if ( Math.abs(leftDepth - rightDepth) < 2 ) {
            return true
        }
        return false
    }

    //Here is the start of tree traversal to hit every node in the tree do a balance check
    let node: (TreeNode | null | undefined) = root
    let stack: Array<TreeNode> = []
    while(stack.length || node) {
        while(node) {
            stack.push(node)
            node = node.left 
        }

        node = stack.pop()
        if(!isSubtreeBalanced(node?.left, node?.right) ) {
            return false
        }
        node = node?.right
    }
    return true
};

//Recursive strategy - top down approach
var isBalancedRecursive = function(root: (TreeNode | null | undefined)): boolean {
    if(!root) return true

    // inner function to return the max height of a tree. This will get called for the left and right child of every node in the tree
    function getHeight(node: (TreeNode | null | undefined)): number {
        if(!node) return 0
        return Math.max( 1 + getHeight(node.left), 1 + getHeight(node.right))
    }
    let leftMax = getHeight(root.left)
    let rightMax = getHeight(root.right)
    // if the diff in left and right heights meets standards for a height-balanced tree, continue to move down the tree
    if (Math.abs( (leftMax - rightMax) ) <=1 ) {
        // the left and the right subtrees meet height diff requirements. dive down their left and right subtrees and look for imbalances
        return isBalancedRecursive(root.left) && isBalancedRecursive(root.right)
    } else {
        return false
    }
};

console.log(isBalanced(symmetricTree1))
console.log(isBalancedRecursive(symmetricTree1))