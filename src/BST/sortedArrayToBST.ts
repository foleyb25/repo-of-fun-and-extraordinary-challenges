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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums: Array<number>): (TreeNode | null) {
    console.log("HELLO")
    let root: (TreeNode | null) = null; //will keep reference to root outside of while loop so we can return it
    let stack: Array<[TreeNode | null, number, number]> = [[null, 0, nums.length-1]]
    while(stack.length) {
        console.log("Inside while loop")
        let [currNode, start, end]: [ TreeNode | null, number, number] = stack.shift()!
        if(start > end) continue
        let mid = (start+end) >> 1
        let node = new TreeNode(nums[mid])
        if(!currNode) { //first iteration, set root node
            root = node 
        } else if(nums[mid] < currNode.val) {
            //set left node
            currNode.left = node
        } else {
            currNode.right = node
            //set right val. Equal nodes will go right
        }

        //push on to queue newly created node, and the left/right points
        stack.push([node, start, mid-1])
        stack.push([node, mid+1, end])
    }
    
    return root
};

// Recursive method using inner function. Uses DFS (stack) approach
var sortedArrayToBSTRecursive = function(nums: Array<number>): (TreeNode | null) {
    
    function generateBST(arr: Array<number>, start: number, end: number) {
        if (start > end) return null

        let mid = Math.ceil( (start + end) / 2 )
        let root = new TreeNode(nums[mid])

        root.left = generateBST(arr, start, mid-1)
        root.right = generateBST(arr, mid+1, end)
        
        return root
    }
    let res = generateBST( nums, 0, nums.length - 1)
    return res
};

//Recursive method using non-inner function
var sortedArrayToBSTRecursive2 = function(nums: Array<number>): (TreeNode | null) {
    if (!nums.length) return null

    let mid = nums.length >> 1 // bit shift right. Divides by 0 and cuts decimal off (rounds down)
    let root = new TreeNode(nums[mid])

    root.left = sortedArrayToBSTRecursive2(nums.slice(0, mid) ) //slice second param is non-inclusive
    root.right = sortedArrayToBSTRecursive2(nums.slice(mid+1) ) // slice if second param is not provided, captures rest of arr
    
    return root //return root to set to either left/right of parent (or root of tree if first iteration)
};

let testArr = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(testArr))
console.log(sortedArrayToBSTRecursive(testArr))
console.log(sortedArrayToBSTRecursive2(testArr))