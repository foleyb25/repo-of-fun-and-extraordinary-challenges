import {unOrderedTree1} from "./Trees/unOrderedTree.js"

var inOrderTraversal = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    let curr = root
    while(curr) {
        
        if(curr.left) {
            //add left node onto the stack and update curr pointer
            curr = curr.left
            stack.push(curr)
        } else if(curr.right) {
            // if a left node does not exist pop from stack and push to result
            res.push(stack.pop().val)
            curr = curr.right
            stack.push(curr)
        } else {
            // if a left nodes does not exist pop from stack and push to result
            res.push(stack.pop().val)
            //traverse back up the stack in a while loop until a right node is found. if a right node is found continue with outer while loop. This will traverse back down to the left side
            while(stack.length > 0 && !stack[stack.length-1]?.right) {
                res.push(stack.pop().val)
            }
            //pop off item and set it to curr
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
console.log("inOrderTraversal Result: ", inOrderTraversalRecursiveResult.toString())

console.assert(expected.every(val => inOrderTraversalResult.includes(val)), "Arrays do not match")
console.assert(expected.every(val => inOrderTraversalRecursiveResult.includes(val)), "Arrays do not match")