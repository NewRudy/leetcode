/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
  const res: number[] = [];
  const queue: TreeNode[] = [];
  let max: number = Number.NEGATIVE_INFINITY, current: number, next: number = 0, temp: TreeNode;
  if (root != null) {
    queue.push(root);
    current = 1;
  }
  while (queue.length != 0) {
    temp = queue.shift();
    max = Math.max(max, temp.val);
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
      current = next;
      next = 0;
      res.push(max);
      max = Number.NEGATIVE_INFINITY;
    }
  }
  return res;
};
// @lc code=end

