/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let row: number = matrix.length, column = matrix[0].length;
  for (let i = 0; i < row; i++) {
    if (matrix[i][column - 1] < target || matrix[i][0] > target) {
      continue;
    }
    if (tempSearchMatrix(matrix[i], target)) {
      return true;
    }
  }
  return false;
};
function tempSearchMatrix(arr: number[], target: number): boolean{
  let left: number = 0, right: number = arr.length, mid: number;
  while (right > left) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  } 
  return false;
}
// let data = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
// searchMatrix(data, 5);
// @lc code=end

