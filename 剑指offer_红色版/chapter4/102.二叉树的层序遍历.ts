/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  const res: number[][] = [], stack: TreeNode[] = [root];
  let tempArr: number[], temp: TreeNode, i: number;
  while (stack.length) {
    i = stack.length;
    tempArr = [];
    while (i > 0) {
      i--;
      temp = stack.shift();
      tempArr.push(temp.val);
      if (temp.left) {
        stack.push(temp.left);
      }
      if (temp.right) {
        stack.push(temp.right);
      }
    }
    res.push(tempArr);
  }
  return res;
};
// @lc code=end

