/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
// findNthDigit(100);
function findNthDigit(n: number): number {
  let temp = n, digit = 0, i, res;
  for (i = 0; i <= n; i++) {
    if (i % 10 === 0) {   // 判断位数是否有增加
      let flag = true, flagTemp = i - 1;
      while (flagTemp > 0) {
        if (flagTemp % 10 != 9) {
          flag = false;
          break;
        }
        flagTemp = Math.floor(flagTemp / 10);
      }
      if (flag) {
        digit++;
      }
    }
    if (temp < digit) {
      break;
    } else {
      temp -= digit;
    }
  }
  const str = ('' + i).split('');
  return +str[temp];
};
// @lc code=end

