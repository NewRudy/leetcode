/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const current: number[] = []
  combinationSumRecall(candidates, target, result, current, 0);
  return result;
};
function combinationSumRecall(candidates: number[], target: number, result: number[][], current: number[], i: number): void {
  if (target === -0) {
    result.push(current.slice());
  } else if (target > 0 && i < candidates.length) {
    combinationSumRecall(candidates, target, result, current, i + 1);
    current.push(candidates[i]);
    combinationSumRecall(candidates, target - candidates[i], result, current, i);
    current.pop();
  }
}
// combinationSum([2, 3, 6, 7], 7);
// @lc code=end

