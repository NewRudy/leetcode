/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  const flag: boolean[][] = Array.from(new Array(board.length), () => new Array(board[0].length).fill(true));
  let res: boolean[] = [false];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (!res[0]) {
        existRecall(board, word, flag, i, j, 0, res);
      }
    }
  }
  return res[0];
};
function existRecall(board: string[][], word: string, flag: boolean[][], i: number, j: number, k: number, res: boolean[]): void {
  if (res[0]) {
    return;
  }
  if (i >= 0 && i < board.length && j >= 0 && j < board[0].length && flag[i][j] && board[i][j] === word[k]) {
    flag[i][j] = false;
    k++;
  } else {
    return;
  }
  if (k === word.length) {
    res[0] = true;
    return;
  }
  existRecall(board, word, flag, i + 1, j, k, res);
  existRecall(board, word, flag, i - 1, j, k, res);
  existRecall(board, word, flag, i, j + 1, k, res);
  existRecall(board, word, flag, i, j - 1, k, res);
  flag[i][j] = true;
  k--;
}
// let data = [["C","A","A"],["A","A","A"],["B","C","D"]];
// let word = "AAE";
// exist(data, word);
// @lc code=end

