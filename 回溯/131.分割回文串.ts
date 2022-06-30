/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
function partition(s: string): string[][] {
  const result: string[][] = [];
  let current: string[] = [];
  partitionRecall(s, 0, result, current);
  return result;
};
function partitionRecall(s: string, start: number, result: string[][], current: string[]) {
  if (start === s.length) {
    result.push(current.slice());
    return;
  }
  for (let i = start; i < s.length; i++) {
    if (isPalindromeTemp(s, start, i)) {
      current.push(s.substring(start, i + 1));
      partitionRecall(s, i + 1, result, current);
      current.pop();
    }
  }
}
function isPalindromeTemp(s: string, start: number, end: number): boolean {
  while (start < end) {
    if (s[start++] != s[end--]) {
      return false;
    }
  }
  return true;
}
// partition('aab');
// @lc code=end

