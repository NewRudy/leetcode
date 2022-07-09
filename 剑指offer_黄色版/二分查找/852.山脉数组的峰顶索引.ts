/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
  let left: number = 0, right: number = arr.length - 1, mid: number;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (mid - 1 >= 0 && arr[mid] > arr[mid - 1] && mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (mid - 1 >= 0 && arr[mid] < arr[mid - 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end

