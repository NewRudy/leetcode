/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  if (n < 2) {
    return 0;
  }
  else if (n === 2) {
    return 1;
  }
  else if (n === 3) {
    return 2;
  }
  const maxProduct: number[] = new Array(n + 1).fill(0);
  maxProduct[0] = 0;
  maxProduct[1] = 1;
  maxProduct[2] = 2;
  maxProduct[3] = 3;
  let product: number;
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= Math.floor(i / 2); j++) {
      product = maxProduct[j] * maxProduct[i - j];
      maxProduct[i] = Math.max(maxProduct[i], product);
    }
  }
  return maxProduct[n];
};
// integerBreak(10);
// @lc code=end

