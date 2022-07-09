/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  let current: string = '';
  generateParenthesisRecall(n, n, result, current);
  return result;
};
function generateParenthesisRecall(n: number, m: number, result: string[], current: string) {
  if (n === 0 && m === 0) {
    result.push(current);
    return;
  }
  if (n > 0) {
    generateParenthesisRecall(n - 1, m, result, current + '(');
  }
  if (n < m) {
    generateParenthesisRecall(n, m - 1, result, current + ')');
  }
}
// @lc code=end

