/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let i = 0, j = s.length - 1, temp: string[];
  while (j > i) {
    temp = [s[j], s[i]];
    [s[i++], s[j--]] = temp;
  }
};
// @lc code=end

