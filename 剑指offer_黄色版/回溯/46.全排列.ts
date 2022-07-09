/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const flags: boolean[] = new Array(nums.length).fill(true);
  const result: number[][] = [];
  const current: number[] = [];
  permuteRecall(nums, result, current, nums.length, flags);
  return result;
};
function permuteRecall(nums: number[], result: number[][], current: number[], i: number, flags: boolean[]) {
  if (i === 0) {
    result.push(current.slice());
    return;
  }
  for (let j = 0; j < nums.length; j++) {
    if (flags[j]) {
      flags[j] = false;
      current.push(nums[j]);
      permuteRecall(nums, result, current, i - 1, flags);
      flags[j] = true;
      current.pop();
    }
  }
}
// @lc code=end

