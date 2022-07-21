/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
// longestPalindrome("aacabdkacaa")
function longestPalindrome(s: string): string {
  for (let len = s.length - 1; len >= 0; len--) {
    for (let i = 0; i <= s.length - 1 && i + len <= s.length; i++) {
      if (tempPalindrome(s, i, i + len)) {
        return s.slice(i, i + len + 1);
      }
    }
  }
};
function tempPalindrome(str: string, i: number, j: number): boolean {
  while (i < j) {
    if (str[i++] != str[j--]) {
      return false;
    }
  }
  return true;
}
// @lc code=end

