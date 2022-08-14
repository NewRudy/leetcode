/*
 * @lc app=leetcode.cn id=127 lang=typescript
 *
 * [127] 单词接龙
 */

// @lc code=start
// 双向广度优先遍历
// ladderLength('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  let words: Set<string> = new Set(wordList);
  if (!words.has(endWord)) {
    return 0;
  }
  if (beginWord.length === 1) return 2;
  let begSet: Set<string> = new Set([beginWord]);
  let endSet: Set<string> = new Set([endWord]);
  words.delete(endWord);
  let size = 1, temp: Set<string>;
  while (begSet.size) {
    if (begSet.size > endSet.size) {
      [begSet, endSet] = [endSet, begSet];
    }
    for (let i of begSet) {   // 判断是不是相连了
      for (let j of endSet) {
        if (diffOneLength(i, j)) {
          return size + 1;
        }
      }
    }
    temp = new Set();
    for (let i of begSet) {
      for (let j of words) {
        if (diffOneLength(i, j)) {
          temp.add(j);
          words.delete(j);
        }
      }
    }
    if (temp.size === 0) {
      return 0;
    }
    begSet = temp;
    size++;
  }
  return 0;
};

function diffOneLength(str1: string, str2: string): boolean {
  let len = 2;
  for (let i = 0; len > 0 && i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      len--;
    }
  }
  return len === 1;
}
// @lc code=end

