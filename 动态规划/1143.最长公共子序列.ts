/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
// dp 状态转移数组
// function longestCommonSubsequence(text1: string, text2: string): number {
//   const dp: number[][] = Array.from(new Array(text1.length + 1), () => new Array(text2.length + 1));
//   for (let i = 0; i <= text2.length; i++) {
//     dp[0][i] = 0;
//   }
//   for (let i = 0; i <= text1.length; i++) {
//     dp[i][0] = 0;
//   }
//   for (let i = 0; i < text1.length; i++) {
//     for (let j = 0; j < text2.length; j++) {
//       if (text1[i] === text2[j]) {
//         dp[i + 1][j + 1] = dp[i][j] + 1;
//       } else {
//         dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
//       }
//     }
//   }
//   return dp[text1.length][text2.length];
// };

// 二维数组优化
function longestCommonSubsequence(text1: string, text2: string): number {
  if (text1.length > text2.length) {
    [text1, text2] = [text2, text1];
  }
  const dp: number[][] = Array.from(new Array(2), () => new Array(text2.length + 1).fill(0));
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[(i + 1) % 2][j + 1] = dp[i % 2][j] + 1;
      } else {
        dp[(i + 1) % 2][j + 1] = Math.max(dp[(i + 1) % 2][j], dp[i % 2][j + 1]);
      }
    }
  }
  return dp[text1.length % 2][text2.length];
}
longestCommonSubsequence("abcde", "ace");
// @lc code=end

