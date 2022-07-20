/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (!root) {
    return '';
  }
  const preOrderArr: number[] = [], inOrderArr: number[] = [];
  preOrder(root, preOrderArr);
  inOrder(root, inOrderArr);
  return preOrderArr.join(',') + '#' + inOrderArr.join(',');  
};
function preOrder(root: TreeNode | null, arr: number[]) {
  if (!root) {
    return;
  }
  arr.push(root.val);
  preOrder(root.left, arr);
  preOrder(root.right, arr);
}
function inOrder(root: TreeNode | null, arr: number[]) {
  if (!root) {
    return;
  }
  inOrder(root.left, arr);
  arr.push(root.val);
  inOrder(root.right, arr);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === '') {
    return null;
  }
  let str: string[] = data.split('#');
  const preOrderArr: number[] = str[0].split(',').map(i => +i);
  const inOrderArr: number[] = str[1].split(',').map(i => +i);
  return buildTreeNode(preOrderArr, inOrderArr);
};
function buildTreeNode(preOrderArr: number[], inOrderArr: number[]): TreeNode | null {
  if (preOrderArr.length === 0) {
    return null;
  }  
  let root: TreeNode = new TreeNode(preOrderArr[0]);
  let i: number = 0;
  while (root.val != inOrderArr[i]) {
    i++;
  }
  root.left = buildTreeNode(preOrderArr.slice(1, i + 1), inOrderArr.slice(0, i));
  root.right = buildTreeNode(preOrderArr.slice(i + 1,), inOrderArr.slice(i + 1,));
  return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

