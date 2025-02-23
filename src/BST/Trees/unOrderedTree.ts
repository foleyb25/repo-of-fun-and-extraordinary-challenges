import TreeNode from "../Classes/TreeNode.js"

const unOrderedTree1 = new TreeNode(2)
unOrderedTree1.left = new TreeNode(9);
unOrderedTree1.right = new TreeNode(20);
unOrderedTree1.right.left = new TreeNode(15);
unOrderedTree1.right.right = new TreeNode(7);
unOrderedTree1.left.left = new TreeNode(6);
unOrderedTree1.left.right = new TreeNode(7);
unOrderedTree1.right.right.left = new TreeNode(8);
unOrderedTree1.right.right.right = new TreeNode(9);

export {unOrderedTree1}