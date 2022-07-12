/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }
  let left: number = 0, right: number = nums.length - 1, mid: number;
  while (right >= left) {
    if (right - left === 1) {
      break;
    }
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= nums[left] && nums[mid] > nums[right]) {
      left = mid;
    } else if (nums[mid] <= nums[right] && nums[mid] < nums[left]) {
      right = mid;
    } else {
      while (left + 1 < right && nums[left] === nums[left + 1]) {
        left++;
      }
      while (right - 1 > left && nums[right] === nums[right - 1]) {
        right--;
      }
    }
  }
  return nums[right];
};
// findMin([2,2,2,2,2]);
// @lc code=end

