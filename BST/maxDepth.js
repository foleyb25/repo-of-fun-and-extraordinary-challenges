import {unOrderedTree1} from "./Trees/unOrderedTree.js"

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

function maxDepthRecursive(node) {
    if(!node) {
        return 0
    }

    return Math.max(1+maxDepthRecursive(node.left), 1+maxDepthRecursive(node.right))
}

console.assert(maxDepth(unOrderedTree1) === 4)
console.assert(maxDepthRecursive(unOrderedTree1) === 4)
