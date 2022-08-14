/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
// nthUglyNumber(4)
function nthUglyNumber(n: number): number {
  if (n < 4) {
    return n;
  }
  let res = 0, i = 0;
  while (i < n) {
    res++;
    if (i < n && isUglyNumber(res)) {
      i++;
    }
  }
  return res;
};
function isUglyNumber(num: number): boolean {
  let set = new Set([5, 3, 2]), flag: boolean;
  while (num > 5) {
    flag = true;
    for (let i of set) {
      if (num % i === 0) {
        num /= i;
        flag = false;
      }
    }
    if (flag) {
      return false;
    }
  }
  return true;
}
// @lc code=end

