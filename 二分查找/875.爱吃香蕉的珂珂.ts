/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  if (piles.length === 1) {
    return Math.ceil(piles[0] / h);
  }
  let left: number = 1, right: number = Math.max(...piles), mid: number;
  if (piles.length === h) {
    return right;
  }
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left;
    if (eatDays(piles, h, mid) > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
function eatDays(piles: number[], h: number, k: number) {
  let total = 0;
  for (let i of piles) {
    if (i > k) {
      total += Math.ceil(i / k);
    } else {
      total += 1;
    }
    if (total > h) {
      return total;
    }
  }
  return total;
}
// minEatingSpeed([3,6,7,100,1,1,1,1,1], 10);
// @lc code=end

