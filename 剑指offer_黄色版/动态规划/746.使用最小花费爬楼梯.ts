/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
// 1. 直接递归
// function minCostClimbingStairs(cost: number[]): number {
//   return Math.min(minCostClimbingStairsRecur(cost, cost.length - 1), minCostClimbingStairsRecur(cost, cost.length - 2));
// };
// function minCostClimbingStairsRecur(cost: number[], i: number):number {
//   if (i < 2) {
//     return cost[i];
//   }
//   return Math.min(minCostClimbingStairsRecur(cost, i - 2), minCostClimbingStairsRecur(cost, i - 1)) + cost[i];
// }
// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])

// 递归求解 dp
// minCostClimbingStairs([0,0,0,0])
// function minCostClimbingStairs(cost: number[]): number {
//   const dp: number[] = new Array(cost.length).fill(-1);
//   dp[0] = cost[0];
//   dp[1] = cost[1];
//   minCostClimbingStairsRecur(cost, dp, cost.length - 1);
//   return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
// }
// function minCostClimbingStairsRecur(cost: number[], dp: number[], i: number) {
//   if (dp[i] === -1) {
//     minCostClimbingStairsRecur(cost, dp, i - 1);
//     minCostClimbingStairsRecur(cost, dp, i - 2);
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
//   }
// }

// 循环求解 dp
// function minCostClimbingStairs(cost: number[]): number {
//   const dp: number[] = new Array(cost.length);
//   dp[0] = cost[0];
//   dp[1] = cost[1];
//   for (let i = 2; i < cost.length; i++) {
//     dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
//   }
//   return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
// }

// 对 dp 进行空间优化
// minCostClimbingStairs([10,15,20])
function minCostClimbingStairs(cost: number[]): number {
  const dp: number[] = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i % 2] = Math.min(dp[0], dp[1]) + cost[i];
  }
  return Math.min(dp[0], dp[1]);
}
// @lc code=end

