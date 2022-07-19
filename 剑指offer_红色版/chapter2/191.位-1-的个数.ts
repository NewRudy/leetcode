/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let count: number = 0;
  while (n) {
    count++;
    n = (n - 1) & n;
  }
  return count;
};
// @lc code=end

