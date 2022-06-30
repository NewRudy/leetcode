/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((i, j) => i - j);
  const result: number[][] = [];
  const current: number[] = [];
  combinationSum2Recall(candidates, target, result, current, 0);
  return result;
};
function combinationSum2Recall(candidates: number[], target: number, result: number[][], current: number[], i: number) {
  if (target === 0) {
    result.push(current.slice())
  } else if (target > 0 && i < candidates.length) {
    combinationSum2Recall(candidates, target, result, current, combinationSum2GetNext(candidates, i));
    current.push(candidates[i]);
    combinationSum2Recall(candidates, target - candidates[i], result, current, i + 1);
    current.pop();
  }
}
function combinationSum2GetNext(candidates: number[], i: number) {
  let temp: number = i;
  while (temp < candidates.length && candidates[temp] === candidates[i]) {
    temp++;
  }
  return temp;
}
// combinationSum2([10,1,2,7,6,1,5], 8);
// @lc code=end

