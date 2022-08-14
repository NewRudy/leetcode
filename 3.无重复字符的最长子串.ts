/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("tmmzuxt");
function lengthOfLongestSubstring(s: string): number {
  const map: Map<string, number> = new Map();
  let max = 0;
  for (let i = 0, j = 0, k = 0; j < s.length;) {
    while (j < s.length && !map.has(s[j])) {
      map.set(s[j], j++);
    }
    max = Math.max(max, j - i);
    k = i;
    i = map.get(s[j]) + 1;
    while (k < i) {
      map.delete(s[k++]);
    }
    map.set(s[j], j++);
  }
  return max;
};
// @lc code=end

