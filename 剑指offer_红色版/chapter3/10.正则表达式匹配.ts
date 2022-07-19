/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  return isMatchCore(s, p, 0, 0);  
};
function isMatchCore(s: string, p: string, i: number, j: number): boolean {
  if(!s[i] && !p[j]) {
    return true;
  }
  if(s[i] && !p[j]) {
    return false;
  }
  if(p[j + 1] === '*') {
    if(s[i] === p[j] || (s[i] && p[j] === '.')) {
      return isMatchCore(s, p, i + 1, j + 2) ||
      isMatchCore(s, p, i + 1, j) ||
      isMatchCore(s, p, i, j + 2);
    } else {
      return isMatchCore(s, p, i, j + 2);
    }
  }
  if(s[i] === p[j] || (s[i] && p[j] === '.')) {
    return isMatchCore(s, p, i + 1, j + 1);
  }
  return false;
}
// isMatch("ab", ".*");
// @lc code=end

