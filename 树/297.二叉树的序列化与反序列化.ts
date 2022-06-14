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
  if (root === null) {
    return '#';
  }
  let left: String = serialize(root.left);
  let right: String = serialize(root.right);
  return root.val + ',' + left + ',' + right;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const strs: string[] = data.split(',');
  const i: number[] = [0];
  return deserializeDfs(strs, i);
};

function deserializeDfs(strs:string[], i: number[]): TreeNode {
  let str: string = strs[i[0]++];
  if (str === '#') {
    return null;
  }
  const root: TreeNode = new TreeNode(+str);
  root.left = deserializeDfs(strs, i);
  root.right = deserializeDfs(strs, i);
  return root;
}


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

