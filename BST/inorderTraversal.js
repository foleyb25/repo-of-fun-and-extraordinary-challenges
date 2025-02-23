import {unOrderedTree1} from "./Trees/unOrderedTree.js"
/**
 * 1) Traverse down left side of tree and push visited nodes to stack until null is found.
 * 2) If right node is found, pop from stack and add value to result. Continue to look for left nodes if they exist
 * 3) If Left nor Right node exists this indicates a leaf. Pop from stack and push to result. Continue to pop from the stack
 *    (while adding values to result) and check if popped nodes contain a right node. Once found add val to result
 *    and set this node's right node as curr and continue step 1.
 * 
 */
var inOrderTraversal = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    let curr = root
    while(curr) {
        if(curr.left) {
            curr = curr.left
            stack.push(curr)
        } else if(curr.right) {
            // Left node does not exist. Pop from stack and push to result
            res.push(stack.pop().val)
            curr = curr.right
            stack.push(curr)
        } else {
            // Left node does not exist. Pop from stack and push to result
            res.push(stack.pop().val)
            //Traverse back up the stack until a right node is found. If a right node is found, continue with outer while loop.
            while(stack.length > 0 && !stack[stack.length-1]?.right) {
                res.push(stack.pop().val)
            }
            curr = stack.pop()
            if(curr) {
                res.push(curr.val)
                curr = curr.right
                stack.push(curr)
            }
        }
    }
    return res
};

/***
 * Recursive Strategy
 */
var inOrderTraversalRecursive = function(root) {
    let res = []
    function findInOrder(node) {
        if(!node) {
            return
        }
        findInOrder(node.left)
        res.push(node.val)
        findInOrder(node.right)
    }
    findInOrder(root)
    return res
};

let expected = [6,9,7,2,15,20,8,7,9]
let inOrderTraversalResult = inOrderTraversal(unOrderedTree1)
let inOrderTraversalRecursiveResult = inOrderTraversalRecursive(unOrderedTree1)

console.log("inOrderTraversal Result: ", inOrderTraversalResult.toString())
console.log("inOrderRecursiveTraversal Result: ", inOrderTraversalRecursiveResult.toString())

console.assert(expected.every(val => inOrderTraversalResult.includes(val)), "Arrays do not match")
console.assert(expected.every(val => inOrderTraversalRecursiveResult.includes(val)), "Arrays do not match")