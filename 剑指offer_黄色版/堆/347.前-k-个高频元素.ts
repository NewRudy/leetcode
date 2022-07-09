/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const result: number[] = [];
  const arr: { key: number, value: number }[] = [];
  nums.sort((a: number, b: number) => b - a);
  let i = 0, j = 0;
  while (j < nums.length) {
    while (nums[i] === nums[j]) {
      j++;
    }
    arr.push({ key: nums[i], value: j - i });
    i = j;
  }
  arr.sort((a: { key: number, value: number }, b: { key: number, value: number }) => b.value - a.value);
  for (let i = 0; i < k; i++) {
    result.push(arr[i].key);
  }
  return result;
};
// @lc code=end

