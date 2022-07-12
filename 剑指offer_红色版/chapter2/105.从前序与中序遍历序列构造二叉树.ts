/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start

// Definition for a binary tree node.
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.left = (left===undefined ? null : left)
//         this.right = (right===undefined ? null : right)
//     }
// }
 

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!(preorder.length && inorder.length)) {
    return null;
  }
  const root: TreeNode = new TreeNode(preorder[0]);
  let i = 0;
  for (; i < inorder.length; i++) {
    if (inorder[i] === preorder[0]) {
      break;
    }
  }
  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i));
  root.right = buildTree(preorder.slice(i + 1, preorder.length), inorder.slice(i + 1, inorder.length));
  return root;
};
// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
// @lc code=end

