// let n = +readline();
// let arr = readline().split(' ').map(i => +i);
// ac
let n = 5
let arr = [5, 5, 1, 1, 1]

// 找到奇数和偶数队列的最大值
let max = 0,
  oddmax = 0;
for (let i = 0; i < n; i++) {
  if(i % 2 === 1 && oddmax < arr[i]) {
    oddmax = arr[i]
  } else if(i % 2 === 0 && max < arr[i]) {
    max = arr[i];
  }
}

let res = 0;
for(let i = 0; i < n; i++) {
  if(i%2 === 1) {
    res += oddmax - arr[i];
  } else {
    res += max - arr[i];
  }
}
if (max != oddmax) {
  console.log(res)
} else {
  console.log(res + Math.ceil(n / 2));
}

