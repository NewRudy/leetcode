/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
// rob([1,2,3,1]);
function rob(nums: number[]): number {
  if (nums.length <= 3) {
    return Math.max(...nums);
  }
  return Math.max(robRecur(nums, 0, nums.length - 2), robRecur(nums, 1, nums.length - 1));
};
function robRecur(nums: number[], start: number, end: number): number {
  const dp: number[] = [nums[start], nums[start + 1]];
  let temp: number;
  for (let i = start + 2; i <= end; i++) {
    temp = Math.max(dp[0], dp[1])
    dp[1] = Math.max(dp[0] + nums[i], dp[1]);
    dp[0] = temp;
  }
  return Math.max(dp[0], dp[1]);
}
// @lc code=end

