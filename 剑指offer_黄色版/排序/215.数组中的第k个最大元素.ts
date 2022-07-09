/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  nums.sort((i, j) => j - i);
  return nums[k - 1];
};
// @lc code=end

