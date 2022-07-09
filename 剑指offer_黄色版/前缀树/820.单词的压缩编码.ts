/*
 * @lc app=leetcode.cn id=820 lang=typescript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
function minimumLengthEncoding(words: string[]): number {
  let count: number = 0, max: number = 0, min:number, flag:boolean;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue;
    flag = true;
    for (let j = i + 1; j < words.length && flag; j++) {
      if (words[j].startsWith(words[i]) || words[j].endsWith(words[i])) {
        flag = false;
        break;
      }
      // 只需要去后缀就可以了
      if (words[i].endsWith(words[j])) {
        words[j] = ''
      }
    }
    if (flag) count += words[i].length + 1;
  }
  return count;
};
// minimumLengthEncoding(['me', 'time', 'me']);
// @lc code=end

