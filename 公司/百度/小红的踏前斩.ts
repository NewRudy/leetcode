count([1, 1, 2, 3, 2, 3]);
function count(arr: number[]) {
  let i = 0, res = 0;
  while (i < arr.length) {
    while (arr[i] <= 0) {
      i++;
    }
    if (judge(i, arr)) {
      arr[i] -= 1;
      arr[i + 1] -= 2;
      arr[i + 2] -= 3;
      res += 5;
    } else if(arr[i] > 0) {
      arr[i]--;
      res++;
    }
  }
  console.log(res);
}
function judge(i: number, arr: number[]): boolean {
  if (i > arr.length - 2) {
    return false;
  }
  if (arr[i] >= 1 && arr[i + 1] >= 2 && arr[i + 2] >= 3) {
    return true;
  } else {
    return false;
  }
}
