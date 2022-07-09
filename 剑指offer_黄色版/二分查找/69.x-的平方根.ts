/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0) return 0;
  let left: number = 1, right: number = x, mid: number;
  while (left < right) {
    mid = Math.floor((right - left) / 2) + left;
    if (mid * mid <= x && (mid + 1) * (mid + 1) >= x) {
      if ((mid + 1) * (mid + 1) === x) {
        return mid + 1;
      }
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
// mySqrt(36);
// @lc code=end

