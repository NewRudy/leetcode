/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  let current: number[] = [];
  combineRecall(n, k, result, current, 1);
  return result;
};
function combineRecall(n: number, k: number, result: number[][], current: number[], i: number) {
  if (current.length > k) {
    return;
  }
  if (current.length + n - i + 1 < k) {
    return;
  }
  if (current.length === k) {
    result.push(current.slice());
    return;
  }
  combineRecall(n, k, result, current, i + 1);
  current.push(i);
  combineRecall(n, k, result, current, i + 1);
  current.pop();
}
// combine(4, 2);
// @lc code=end

