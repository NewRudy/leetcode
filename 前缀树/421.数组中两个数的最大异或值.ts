/*
 * @lc app=leetcode.cn id=421 lang=typescript
 *
 * [421] 数组中两个数的最大异或值
 */

// @lc code=start
interface FindTrie {
  left?: FindTrie
  right?: FindTrie
}

class FindTrie {
  constructor() {
      // left 代表 0，right 代表 1
      this.left = null
      this.right = null
  }
}

function findMaximumXOR(nums: number[]): number {
  const root = new FindTrie()
  let res = 0
  // 建立字典树
  for (let i = 0; i < nums.length; i++) {
      let node = root
      for (let k = 30; k >= 0; k--){
          let bit = (nums[i] >> k) & 1 // 左移 k 位
          if (bit == 0) {
              if (!node.left) {
                  node.left = new FindTrie()
              }
              node = node.left
          } else if (bit == 1) {
              if (!node.right) {
                  node.right = new FindTrie()
              }
              node = node.right
          }
      }
      // 每次加入一个数字后 check 一下最大值
      check(nums[i])
  }

  function check (num: number){
      // 遍历字典树求最大可能的值
      let node = root
      let tmp = 0
      for (let k = 30; k >= 0; k--) {
          let bit = (num >> k) & 1
          if (bit == 0) {
              if (node.right) {
                  node = node.right
                  tmp = tmp * 2 + 1
              } else {
                  node = node.left
                  tmp = tmp * 2
              }
          } else if (bit == 1) {
              if (node.left) {
                  node = node.left
                  tmp = tmp * 2 + 1
              } else {
                  node = node.right
                  tmp = tmp * 2
              }
          }
          res = Math.max(tmp, res)
      }
  }
  return res
};
// @lc code=end

