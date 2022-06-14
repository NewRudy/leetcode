/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

function maxPathSum(root: TreeNode | null): number {
  if (root === null) {
    return Number.NEGATIVE_INFINITY;
  }
  const max: number[] = [Number.NEGATIVE_INFINITY];
  maxPathSumDfs(root, max);
  return max[0];
};
function maxPathSumDfs(root: TreeNode, max: number[]): number {
  if (root === null) {
    return Number.NEGATIVE_INFINITY;
  }
  if (root.left === null && root.right === null) {
    if (root.val > max[0]) max[0] = root.val;
    return root.val;
  }
  let left: number = maxPathSumDfs(root.left, max);
  let right: number = maxPathSumDfs(root.right, max);
  max[0] = Math.max(max[0], left + right + root.val, left + root.val, right + root.val, root.val, left, right);
  return Math.max(left + root.val, right + root.val, root.val);
}
// @lc code=end

