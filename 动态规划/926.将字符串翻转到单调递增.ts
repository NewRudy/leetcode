/*
 * @lc app=leetcode.cn id=926 lang=typescript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
function minFlipsMonoIncr(s: string): number {
  const dp: number[][] = [[], []];
  dp[0][0] = (s[0] === '0' ? 0 : 1);
  dp[1][0] = (s[0] === '0' ? 1 : 0);
  let temp1: number, temp2: number, tempS: number;
  for (let i = 1; i < s.length; i++) {
    tempS = +s[i];
    temp1 = dp[0][(i - 1) % 2];
    temp2 = dp[1][(i - 1) % 2];
    dp[0][i % 2] = temp1 + (tempS === 1 ? 1 : 0);
    dp[1][i % 2] = Math.min(temp1, temp2) + (tempS === 1 ? 0 : 1);
  }
  return Math.min(dp[0][(s.length - 1) % 2], dp[1][(s.length - 1) % 2]);
};
// minFlipsMonoIncr("00110")
// @lc code=end

