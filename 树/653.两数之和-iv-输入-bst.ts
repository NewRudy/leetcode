/*
 * @lc app=leetcode.cn id=653 lang=typescript
 *
 * [653] 两数之和 IV - 输入 BST
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

function findTarget(root: TreeNode | null, k: number): boolean {
  if (root === null) {
    return false;
  }
  const set: Set<number> = new Set();
  return findTargetDfs(root, set, k);
};
function findTargetDfs(root: TreeNode, set: Set<number>, target: number): boolean {
  if (root === null) {
    return false;
  }
  if (set.has(target - root.val)) {
    return true;
  } else {
    set.add(root.val);
  }
  return findTargetDfs(root.left, set, target) || findTargetDfs(root.right, set, target);
}
// @lc code=end

