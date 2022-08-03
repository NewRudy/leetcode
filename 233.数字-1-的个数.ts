/*
 * @lc app=leetcode.cn id=233 lang=typescript
 *
 * [233] 数字 1 的个数
 */

// @lc code=start
// countDigitOne(13);
function countDigitOne(n: number): number {
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
    ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
    mulk *= 10;
  }
  return ans;
};
// @lc code=end

