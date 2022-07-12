/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
  let count: number = 0;
  while (n) {
    if (n % 2) count++;
    n = Math.floor(n / 2);
  }
  return count;
};
// @lc code=end

