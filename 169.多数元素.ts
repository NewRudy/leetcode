/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
// majorityElement([4, 5, 4])
function majorityElement(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  let mid = Math.floor(nums.length / 2), temp = majorityElementTemp(nums, left, right);
  while (temp != mid) {
    if (temp > mid) {
      right = temp - 1;
    } else {
      left = temp + 1;
    }
    temp = majorityElementTemp(nums, left, right);
  }
  return nums[mid];
};
function majorityElementTemp(nums: number[], left: number, right: number): number {
  if (left >= right) {
    return left;
  }
  let temp = nums[left];
  while (left < right) {
    while (left < right && nums[right] >= temp) {
      right--;
    }
    nums[left] = nums[right];
    while (left < right && nums[left] < temp) {
      left++;
    }
    nums[right] = nums[left];
  }
  nums[left] = temp;
  return left;
}
// @lc code=end

