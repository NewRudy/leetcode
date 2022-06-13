/*
 * @lc app=leetcode.cn id=85 lang=typescript
 *
 * [85] 最大矩形
 */

// @lc code=start
function largest(heights: number[]): number {
  if (heights.length === 0) {
    return 0;
  }
  let stack: number[] = [-1], maxArea: number = 0, height: number, width: number;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[i] <= heights[stack[stack.length - 1]]) {
      height = heights[stack.pop()];
      width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  while (stack.length > 1) {
    height = heights[stack.pop()];
    width = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, height * width);
  }
  return maxArea;
}

function maximalRectangle(matrix: string[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }
  let heights: number[] = new Array(matrix[0].length).fill(0);
  let maxArea: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        heights[j] = 0;
      } else {
        heights[j]++;
      }
    }
    maxArea = Math.max(maxArea, largest(heights));
  }
  return maxArea;
};
maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
// @lc code=end

