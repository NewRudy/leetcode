/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  let stack: number[] = [];
  let res: number[] = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; ++i) {
    while (stack.length != 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let temp:number = stack.pop() as number;
      res[temp] = i - temp;
    }
    stack.push(i);
  }
  return res;
};
