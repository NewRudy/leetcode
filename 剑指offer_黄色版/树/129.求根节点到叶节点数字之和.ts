/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  return sumNumbersDfs(root, 0);
};
function sumNumbersDfs(root: TreeNode, temp: number): number{
  if (root === null) {
    return 0;
  }
  temp = temp * 10 + root.val;
  if (root.left === null && root.right === null) {
    return temp;
  }
  return sumNumbersDfs(root.left, temp) + sumNumbersDfs(root.right, temp);
}
// @lc code=end

