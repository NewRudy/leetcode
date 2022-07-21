/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let maxIndex = 0, sum = 0, temp = 0;
  for (let i = 0; i < height.length; i++) {
    if (height[i] > temp) {
      maxIndex = i;
      temp = height[i];
    }
  }
  let index = 0;
  temp = height[index];
  while (index < maxIndex) {
    index++;
    if (height[index] > temp) {
      temp = height[index];
    } else {
      sum += temp - height[index];
    }
  }
  index = height.length - 1;
  temp = height[index];
  while (index > maxIndex) {
    index--;
    if (height[index] > temp) {
      temp = height[index];
    } else {
      sum += temp - height[index];
    }
  }
  return sum;
};
// @lc code=end

