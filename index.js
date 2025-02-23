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

class TreeNode {
    constructor(val = 0, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

// var inorderTraversal = function(root) {
//     if (!root) return []
//     let res = []
//     let stack = [root]
//     let curr = root
//     while(curr) {
        
//         if(curr.left) {
//             //add left node onto the stack and update curr pointer
//             curr = curr.left
//             stack.push(curr)
//         } else if(curr.right) {
//             // if a left node does not exist pop from stack and push to result
//             res.push(stack.pop().val)
//             curr = curr.right
//             stack.push(curr)
//         } else {
//             // if a left nodes does not exist pop from stack and push to result
//             res.push(stack.pop().val)
//             //traverse back up the stack in a while loop until a right node is found. if a right node is found continue with outer while loop. This will traverse back down to the left side
//             while(stack.length > 0 && !stack[stack.length-1]?.right) {
//                 res.push(stack.pop().val)
//             }
//             //pop off item and set it to curr
//             curr = stack.pop()
//             if(curr) {
//                 res.push(curr.val)
//                 curr = curr.right
//                 stack.push(curr)
//             }
            
//         }
//     }
//     return res
// };
// let res = []
// var inorderTraversal = function(root) {
//     if(!root) {
//         return
//     }

//     inorderTraversal(root.left)
//     res.push(root.val)
//     inorderTraversal(root.right)
// };

var maxDepth = function(root) {
    let memoStack = []
    let curr = root
    let maximum= -1
    let total = 1
    let memo

    while(curr) {

        if(curr.right && curr.left) {
            let myMap = new Map()
            myMap.set(curr, total)
            memoStack.push(myMap)
        }

        if(curr.left) {
            curr = curr.left
            total++
        } else if (curr.right) {
            curr = curr.right
            total++
        } else {
            //reached leaf node, refer back to memo stack and pop off the most recent node. Set current node to right of this node and update total
            if(total > maximum) {
                maximum = total
            }

            //we are at a leaf node and there is nothing else in the memo. Break and return the maximum
            if(memoStack.length === 0) {
                return maximum
            }
            
            memo = memoStack.pop()
            curr = [...memo.keys()][0]
            total = memo.get(curr)
            curr = curr.right
            total++ // increment since we are traversing to the next node
            
        }
    }
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
// root.left.right.left = new TreeNode(6);
// root.left.right.right = new TreeNode(7);
// root.right.right = new TreeNode(8);
// root.right.right.left = new TreeNode(9);

//inorderTraversal(root)

maxDepth(root)

