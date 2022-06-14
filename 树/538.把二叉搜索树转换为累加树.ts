/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
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
// 将树转为数组，这个做法有点傻逼
// function convertBST(root: TreeNode | null): TreeNode | null {
//   if (root === null) {
//     return root;
//   }
//   let queue: TreeNode[] = [];
//   convertBSTDfs(root, queue);
//   let sum: number = 0;
//   for (let i = queue.length - 1; i >= 0; i--) {
//     sum += queue[i].val;
//     queue[i].val = sum;
//   }
//   return root;
// };
// function convertBSTDfs(root: TreeNode, queue: TreeNode[]): void {
//   if (root === null) {
//     return;
//   }
//   convertBSTDfs(root.left, queue);
//   queue.push(root);
//   convertBSTDfs(root.right, queue);
// }

function convertBST(root: TreeNode | null): TreeNode | null {
  const temp: number[] = [0];
  convertBSTDfs(root, temp);
  return root;
}
function convertBSTDfs(root: TreeNode, sum: number[]): void {
  if (root === null) {
    return;
  }
  convertBSTDfs(root.right, sum);
  sum[0] += root.val;
  root.val = sum[0];
  convertBSTDfs(root.left, sum);
}
// @lc code=end

