/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
 * Design an algorithm that runs in less than O(n) time complexity.
 * 
 */

import TreeNode from "./Classes/TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root: TreeNode) {
    if(!root) return 0
    // traverse left side get heigh h
    // traverse down right side until leaf is reached. Keep track of height:
       //if leaf is reached and h(leaf) === height of tree break
       //if h(leaf) != height heigh of tree. increment counter
    // once brken from loop calculate 2^h of tree = counter
    function getTreeHeight(root: (TreeNode | null)): number{
        if(!root) return -1
        return getTreeHeight(root.left) + 1
    }


    let height = getTreeHeight(root)

    let foundLeaf = false
    let depth: number = 0
    let stack: Array<[TreeNode, number]> = []
    let node: (TreeNode | null | undefined) = root
    let res = 2**(height + 1) - 1

    while(!foundLeaf) {
        while(node) {
            stack.push([node, depth])
            node = node.right
            
            if(!node && (height - depth) === 1) {
                //right node does not exist at second to last level
                res--
            }
            depth++
        }
        let item = stack.pop()
        if(item) {
            node = item[0]
            depth = item[1] ?? 0
        }
        
        if( node && (!node.right && !node.left) &&(depth === height)) {
            // found leaf at last level. We have subtracted all nodes at depth === h. Exit loop and return result
                foundLeaf = true
                break
        }
        node = node?.left
        if(!node && (height - depth) === 1) {
            //left nodes does not exist at second to last level
            res--
        }
        depth++
    }

    return res
};