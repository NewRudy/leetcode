/*
 * @lc app=leetcode.cn id=873 lang=typescript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
// lenLongestFibSubseq([1,3,5])
function lenLongestFibSubseq(arr: number[]): number {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  let dp: number[][] = Array.from({ length: arr.length }, () => new Array(arr.length));
  // dp[0][1] = 2;
  let result: number = 0, temp: number, k: number;
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      temp = arr[i] - arr[j];
      if (map.has(temp)) {
        k = map.get(temp);
        dp[i][j] = k < j ? dp[j][k] + 1 : 2;
      } else {
        dp[i][j] = 2;
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result > 2 ? result : 0;
};
// @lc code=end

