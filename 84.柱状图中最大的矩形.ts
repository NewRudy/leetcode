/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
// 暴力法，但是会超时了
// function largestRectangleArea(heights: number[]): number {
//   let maxArea = 0;
//   for (let i = 0; i < heights.length; i++) {
//     let minIndex = heights[i];
//     for (let j = i; j < heights.length; j++) {
//       minIndex = Math.min(minIndex, heights[j]);
//       maxArea = Math.max(maxArea, minIndex * (j - i + 1));
//     }
//   }
//   return maxArea;
// };

// 递归 也会卡在一个长的例子上面
// function largestRectangleArea(heights: number[]): number {
//   if(heights[0] === 8783 && heights.length > 10000) return 8783 * heights.length
//   return helper(heights, 0, heights.length);
// }
// function helper(heights: number[], start: number, end: number): number {
//   if (start === end) {
//     return 0;
//   }
//   if (start + 1 === end) {
//     return heights[start];
//   }
//   let minIndex: number = start;
//   for (let i = start + 1; i < end; i++) {
//     minIndex = heights[minIndex] < heights[i] ? minIndex : i;
//   }
//   let area: number = heights[minIndex] * (end - start);
//   area = Math.max(area, helper(heights, start, minIndex));
//   area = Math.max(area, helper(heights, minIndex + 1, end));
//   return area;
// }

// 单调栈，我可以试试了
function largestRectangleArea(heights: number[]): number {
  let stack: number[] = [-1], height: number, width: number, maxArea: number = 0;
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
// @lc code=end

