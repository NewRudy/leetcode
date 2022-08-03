/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
function maxSubArray(nums: number[]): number {
  let front = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    front = Math.max(front + nums[i], nums[i]);
    max = Math.max(max, front);
  }
  return max;
};
// @lc code=end

