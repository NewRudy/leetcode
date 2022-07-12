function movingCount(m: number, n: number, k: number): number {
  const flag: boolean[][] = Array.from(new Array(m), () => new Array(n).fill(true));
  let count: number[] = [0];
  movingCountRecall(flag, count, 0, 0, k);
  return count[0];
};

function movingCountRecall(flag: boolean[][], count: number[],i: number, j: number, k: number): void {
  if(i >= 0 && i < flag.length && j >= 0 && j < flag[0].length && flag[i][j] && digitSum(i) + digitSum(j) <= k) {
      count[0]++;
      flag[i][j] = false;
      movingCountRecall(flag, count, i + 1, j, k);
      movingCountRecall(flag, count, i, j + 1, k);
  }
}

function digitSum(num: number): number {
  let sum: number = 0;
  while(num) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }
  return sum;
}

movingCount(3, 1, 0);
