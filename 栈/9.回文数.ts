/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let temp: number = x;
  let reverseNumber: number = 0;
  while (temp) {
    reverseNumber = reverseNumber * 10 + temp % 10;
    temp = Math.floor(temp / 10); 
  }
  return reverseNumber === x;
};
// @lc code=end
