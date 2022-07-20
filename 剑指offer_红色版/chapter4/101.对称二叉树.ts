/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  tempInvertTree(root.right);
  return tempWalkTree(root.left, root.right);
};
function tempInvertTree(root: TreeNode | null):void{
  if (!root) {
    return;
  }
  [root.left, root.right] = [root.right, root.left];
  tempInvertTree(root.left);
  tempInvertTree(root.right);
}
function tempWalkTree(left: TreeNode | null, right: TreeNode | null):boolean {
  if (!left && !right) {
    return true;
  }
  if (!left || !right || left.val != right.val) {
    return false;
  }
  return tempWalkTree(left.left, right.left) && tempWalkTree(left.right, right.right);
}
// @lc code=end

