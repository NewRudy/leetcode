/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
function singleNonDuplicate(nums: number[]): number {
  let left: number = 0, right: number = nums.length - 1, mid: number;
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === nums[mid ^ 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};
// @lc code=end

