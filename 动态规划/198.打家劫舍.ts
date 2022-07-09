/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
// 空间优化的解法
function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp: number[] = [nums[0], (nums[0] > nums[1] ? nums[0] : nums[1])];
  let temp: number;
  for (let i = 2; i < nums.length; i++) {
    temp = dp[1];
    dp[1] = Math.max(dp[0] + nums[i], dp[1]);
    dp[0] = temp;
  }
  return Math.max(dp[0], dp[1]);
};
// @lc code=end

