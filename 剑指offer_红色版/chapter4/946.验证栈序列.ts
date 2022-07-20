/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
// validateStackSequences([2, 1, 0], [1, 2, 0])
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let i: number = 0, j: number = 0, len: number = pushed.length, stack: number[] = [];
  while (i != len) {
    while (i < len && pushed[i] != popped[j]) {
      stack.push(pushed[i++]);
    }
    if (i < len) {
      stack.push(pushed[i++]);
    }
    while (j < len && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }
  if (j === len) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end

