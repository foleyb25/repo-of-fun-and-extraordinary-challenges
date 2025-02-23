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
export default class TreeNode {
    val: any
    left: TreeNode
    right: TreeNode

    constructor(val: any = 0, left: TreeNode = undefined!, right: TreeNode = undefined!) {
        this.val = val
        this.left = left
        this.right = right
    }
}