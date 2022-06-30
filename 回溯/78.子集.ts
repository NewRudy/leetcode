/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  let current: number[] = []
  subsetsRecall(nums, result, current, 0);
  return result;
};
function subsetsRecall(nums: number[], result: number[][], current: number[], i: number): void {
  if (i === nums.length) {
    result.push(current.slice());   // slice > Array.from()
    return;
  }
  subsetsRecall(nums, result, current, ++i);
  --i;
  current.push(nums[i]);
  subsetsRecall(nums, result, current, ++i);
  current.pop();
  --i;
}
// subsets([1, 2, 3]);
// @lc code=end

