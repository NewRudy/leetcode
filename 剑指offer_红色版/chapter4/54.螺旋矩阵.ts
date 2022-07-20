/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
// 循环边界条件
// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
// function spiralOrder(matrix: number[][]): number[] {
//   let flagMatrix: boolean[][] = Array.from(new Array(matrix.length), () => new Array(matrix[0].length).fill(true));
//   let i: number = 0, j: number = 0, flag: number = 0, temp: number[];   // flag 0, 1, 2, 3 表示 右，下，左，上
//   const res: number[] = [];
//   while (flagMatrix[i][j]) {
//     flagMatrix[i][j] = false;
//     res.push(matrix[i][j]);
//     temp = walkSpiralOrder(flagMatrix, i, j, flag, 0);
//     if (temp.length) {
//       [i, j, flag] = temp;
//     } else {
//       break;
//     }
//   }
//   return res;
// };
// function walkSpiralOrder(flagMatrix: boolean[][], i: number, j: number, flag: number, index: number): number[] {
//   if (index === 4) {
//     return []
//   }
//   let tempI: number = i, tempJ: number = j;
//   switch (flag) {
//     case 0:
//       j++;
//       break;
//     case 1:
//       i++;
//       break;
//     case 2:
//       j--;
//       break;
//     case 3:
//       i--;
//       break;
//   }
//   if (i >= 0 && i < flagMatrix.length && j >= 0 && j < flagMatrix[0].length && flagMatrix[i][j]) {
//     return [i, j, flag];
//   } else {
//     if (flag === 3) {
//       flag = 0;
//     } else {
//       flag++;
//     }
//     return walkSpiralOrder(flagMatrix, tempI, tempJ, flag, index + 1);
//   }
// }

// 添加第一列，然后左旋矩阵
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  if (rows === 1) {
    return matrix[0];
  }
  if (columns === 1) {
    return matrix.reduce((prev, cur) => prev.concat(cur), []);
  }
  const [first, ...rest] = matrix;
  return [...first, ...spiralOrder(left_rotate(rest))];
}
function left_rotate(matrix: number[][]): number[][] {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length;
  const columns = matrix[0].length;
  if (rows === 1 && columns === 1) return matrix;
  return zip(matrix).reverse() as number[][];
}
function zip(arrays: number[][]) {
  return arrays[0].map(function (_, i) {
    return arrays.map(function (array) {
      return array[i]
    })
  });
}
// @lc code=end

