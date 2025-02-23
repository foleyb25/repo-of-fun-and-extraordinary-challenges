import TreeNode from "./Classes/TreeNode.js"
import { unOrderedTree1 } from "./Trees/unOrderedTree.js";

var isSameTree = function(p: TreeNode, q: TreeNode) {
    if(!p && q) return false
    if(!q && p) return false
    if (!p && !q) return true
    if(p.left && !q.left) return false
    if(p.right && !q.right) return false
    if(!p.left && q.left) return false
    if(!p.right && q.right) return false
    
    let qStack: (TreeNode | undefined)[] = []
    let pStack: (TreeNode | undefined)[] = []
    let pCurr: (TreeNode | undefined) = p
    let qCurr: (TreeNode | undefined) = q
    

    while( (qStack.length > 0 || qCurr) && (pStack.length > 0 || pCurr) ) {
        while(qCurr || pCurr) {
            if(qCurr?.val !== pCurr?.val) return false
            pStack.push(pCurr)
            qStack.push(qCurr)

            
            pCurr = pCurr?.left
            qCurr = qCurr?.left
            // if(qCurr?.val !== pCurr?.val) return false

        }

        pCurr = pStack.pop()?.right
        qCurr = qStack.pop()?.right
        if(pCurr?.val !== qCurr?.val) return false
    }

    return true
};

console.assert(isSameTree(unOrderedTree1, unOrderedTree1) === true)