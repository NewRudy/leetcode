/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
// isInterleave("aabcc", "dbbca", "aadbbcbcac")
function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length != s3.length) {
    return false;
  }
  if (s1.length > s2.length) {
    [s1, s2] = [s2, s1];
  }
  const dp: boolean[][] = Array.from(new Array(2), () =>
    new Array(s2.length + 1));
  for (let i = 0; i < s2.length; i++) {
    dp[0][i + 1] = s2[i] === s3[i];
  }
  dp[0][0] = true;
  dp[1][0] = s1[0] === s3[0];
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      dp[(i + 1) % 2][j + 1] = ((s1[i] === s3[i + j + 1] && dp[(i + 1) % 2][j]) || (s2[j] === s3[i + j + 1] && dp[(i) % 2][j + 1]));
    }
  }
  return dp[s1.length % 2][s2.length];
 };
// @lc code=end

