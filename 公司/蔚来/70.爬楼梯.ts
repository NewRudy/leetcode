/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }
  let front = 1, rear = 2, temp: number;
  for (let i = 3; i <= n; i++) {
    temp = rear;
    rear = front + rear;
    front = temp;
  }
  return rear;
};
// @lc code=end

