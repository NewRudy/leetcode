// 60
func('2 3 4 4 5')

function func(str) {
  let temp = str.split(' ').map(a => +a).sort((a, b) => a - b);
  let arr = []
  for (let i = 0; i < temp.length; i++) {
    if (arr.length === 0 || arr[arr.length - 1] != temp[i]) {
      arr.push(temp[i])
    }
  }
  let res = 0;
  for (let b = 1; b < arr.length - 1; b++) {
    for (let a = b - 1, c = b +1; a >= 0&& c<arr.length; a--) {
      if (arr[a] + arr[b] < arr[c]) {
        break;
      }
      if (judge(arr[a], arr[b], arr[c])) {
        res++;
      }
    }
  }
  console.log(res)
}

function judge(a, b, c) {
  if (c * c - a * a - b * b < 1) {
    return true;
  } else {
    return false;
  }
}
