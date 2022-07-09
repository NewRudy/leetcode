/*
 * @lc app=leetcode.cn id=897 lang=typescript
 *
 * [897] 递增顺序搜索树
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

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  let left: TreeNode = increasingBST(root.left);
  let temp: TreeNode = left;
  while (temp != null && temp.right != null) {
    temp = temp.right;
  }
  root.left = null;
  if(temp != null) temp.right = root;
  root.right = increasingBST(root.right);
  return left === null ? root : left;
};
// @lc code=end

