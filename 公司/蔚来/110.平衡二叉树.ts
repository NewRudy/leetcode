/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  return preOrderIsBalanced(root);
};
function preOrderIsBalanced(root: TreeNode | null):boolean {
  if (!root) {
    return true;
  }
  let left = getDepth(root.left);
  let right = getDepth(root.right);
  let flag: boolean = Math.abs(left - right) <= 1;
  return flag && preOrderIsBalanced(root.left) && preOrderIsBalanced(root.right);
}
function getDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let left = getDepth(root.left);
  let right = getDepth(root.right);
  return (left > right ? left : right) + 1;
}
// @lc code=end

