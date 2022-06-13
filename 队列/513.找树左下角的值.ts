/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {
  let res: number, current: number, next: number, temp: TreeNode, flag: boolean;
  const queue: TreeNode[] = [];
  if (root != null) {
    queue.push(root);
    current = 1;
    next = 0;
    flag = true;
  }
  while (queue.length != 0) {
    temp = queue.shift();
    current--;
    if (flag) {
      res = temp.val;
      flag = false;
    }
    if (temp.left != null) {
      queue.push(temp.left);
      next++;
    }
    if (temp.right != null) {
      queue.push(temp.right);
      next++;
    }
    if (current === 0) {
      flag = true;
      current = next;
      next = 0;
    }
  }
  return res;
};
// @lc code=end

