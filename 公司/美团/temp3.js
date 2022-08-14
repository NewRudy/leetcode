// ac 了 50，但是原因看牛客说是因为 read_line 函数读取的字符串长度有限制
let n, t;
[n, t] = '6 5'.split(' ').map((a) => +a)
let time = '100 101 102 103 104 105'
  .split(' ')
  .map((a) => +a)
  .sort((a, b) => a - b)

minTime();

function minTime() {
  let res = 0, index = 0;
  for(let i = 0; i < n && index < n; i++, index++) {
    while(i < n && index < n && (i + 1) * t > time[index]) {   // 一个订单超时的情况
      res++;
      index++;
    }
  }
  console.log(res);
}
