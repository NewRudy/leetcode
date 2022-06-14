/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) {
    return 0;
  }
  return pathSumDfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
function pathSumDfs(root: TreeNode, targetSum: number): number {
  if (root === null) {
    return 0;
  }
  let temp: number = 0;
  if (root.val === targetSum) {
    temp = 1;
  }
  return temp + pathSumDfs(root.left, targetSum - root.val) + pathSumDfs(root.right, targetSum - root.val);
}
// @lc code=end

