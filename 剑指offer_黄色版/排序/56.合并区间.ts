/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  intervals.sort((i, j) => i[0] - j[0]);
  let result: number[][] = [];
  let current: number[] = [intervals[0][0], intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = current[1] > intervals[i][1] ? current[1] : intervals[i][1];
    } else {
      result.push(current);
      current = [intervals[i][0], intervals[i][1]];
    }
  }
  result.push(current);
  return result;
};
// @lc code=end

