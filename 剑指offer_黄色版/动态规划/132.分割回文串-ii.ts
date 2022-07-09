/*
 * @lc app=leetcode.cn id=132 lang=typescript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
function minCut(s: string): number {
  let len: number = s.length;
  const isPal: boolean[][] = Array.from(new Array(len), () => new Array(len));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++){
      if (s[i] === s[j] && (i <= j + 1 || isPal[j + 1][i - 1])) {
        isPal[j][i] = true;
      }
    }
  }
  const dp: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (isPal[0][i]) {
      dp[i] = 0;
    } else {
      dp[i] = i;
      for (let j = 1; j <= i; j++){
        if (isPal[j][i]) {
          dp[i] = Math.min(dp[i], dp[j - 1] + 1);
        }
      }
    }
  }
  return dp[len - 1];
};
// @lc code=end

