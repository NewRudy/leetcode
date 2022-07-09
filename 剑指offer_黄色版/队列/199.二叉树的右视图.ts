/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [], queue: TreeNode[] = [];
  let current: number, next: number, temp: TreeNode;
  if (root != null) {
    queue.push(root);
    current = 1;
    next = 0;
  }
  while (queue.length != 0) {
    temp = queue.shift();
    current--;
    if (temp.left != null) {
      queue.push(temp.left);
      next++;
    }
    if (temp.right != null) {
      queue.push(temp.right);
      next++;
    }
    if (current === 0) {
      res.push(temp.val);
      current = next;
      next = 0;
    }
  }
  return res;
};
// @lc code=end

