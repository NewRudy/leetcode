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
// movingCount(3, 1, 0);


// minNumber([3, 30, 34, 5, 9]);
function minNumber(nums: number[]): string {
  nums.sort((a, b) => {
    let first = (a + '').split(''), second = (b + '').split('');
    let firstValue = first.reduce((i, j) => +i + +j, 0);
    let secondValue = second.reduce((i, j) => +i + +j, 0);
    if (firstValue === secondValue) {
      return second.length - first.length;
    }
    return firstValue - secondValue;
  })
  return nums.reduce((front, end) => front += end, '');
};

function minNumber1(nums: number[]): string {
  return nums.sort((x, y) => +('' + x + y) - +('' + y + x)).join('');
};

translateNum(12258)
function translateNum(num: number): number {
  let front = 1, end = 1, temp, value;
  let str = ('' + num).split('');
  for (let i = 1; i < str.length; i++) {
    temp = end;
    value = +(str[i - 1] + str[i]);
    if (value >= 10 && value <= 25) {
      end += front;
    } else {
      end = end;
    }
    front = temp;
  }
  return end;
};
