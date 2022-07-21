/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
// merge([[1, 4], [0, 4]])
function merge(intervals: number[][]): number[][] {
  intervals.sort((i, j) => i[0] - j[0]);
  const res: number[][] = [];
  let current: number[] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      res.push(current);
      current = intervals[i];
    }
  }
  res.push(current);
  return res;
};
// @lc code=end

