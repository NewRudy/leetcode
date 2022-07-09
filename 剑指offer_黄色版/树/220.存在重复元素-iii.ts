/*
 * @lc app=leetcode.cn id=220 lang=typescript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < i + 1 + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

