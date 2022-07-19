/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if(n === 0) {
    return 1;
  }
  let flag: boolean = false;
  let result: number = 1, temp: number = 1;
  if(n < 0) {
    flag = true;
    n = -n;
  }
  while(n) {
    if(n & 1) {
      result *= x;
    }
    x *= x;
    n >>>= 1;
  }
  if(flag) {
    if(!isFinite(result)) {
      return 0;
    }
    result = 1 / result;
  }
  return result;
};
// myPow(2,3);
// @lc code=end

