/*
 * @lc app=leetcode.cn id=451 lang=typescript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
// frequencySort('tree');
function frequencySort(s: string): string {
  const map: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);
  let res: string = '';
  arr.forEach(a => {
    while (a[1]) {
      res += a[0];
      a[1]--;
    }
  })
  return res;
};
// @lc code=end

