import TreeNode from "../Classes/TreeNode.js"

const symmetricTree1 = new TreeNode(1)
symmetricTree1.left = new TreeNode(2);
symmetricTree1.right = new TreeNode(2);
symmetricTree1.left.right = new TreeNode(4);
symmetricTree1.right.left = new TreeNode(4);

export {symmetricTree1}