/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  nums.sort((i, j) => i - j);
  const result: number[][] = [];
  const current: number[] = [];
  const flags: boolean[] = new Array(nums.length).fill(true);
  permuteUniqueRecall(nums, result, current, nums.length, flags);
  return result;
};
function permuteUniqueRecall(nums: number[], result: number[][], current: number[], i: number, flags: boolean[]) {
  if (i === 0) {
    result.push(current.slice());
    return;
  }
  for (let j = 0; j < nums.length; j++) {
    if (j > 0 && nums[j] === nums[j - 1] && flags[j - 1]) {
      continue;
    }
    if (flags[j]) {
      flags[j] = false;
      current.push(nums[j]);
      permuteUniqueRecall(nums, result, current, i - 1, flags);
      flags[j] = true;
      current.pop();
    }
  }
}
permuteUnique([1, 1, 2]);
// @lc code=end

