let t = +readline()
for (let i = 0; i < t; i++) {
  let n, m, x, y
  ;[n, m, x, y] = readline()
    .split(' ')
    .map((i) => +i)
  let time = readline()
    .split(' ')
    .map((i) => +i).sort((a, b) => a - b);
  let maxTime = Math.max(...time),
    result = 0
  while (n > 0) {
    if(n > m) {
      result += maxTime;
      n -= m;
    } else {
      result += time[n - 1];
      n -= m; 
    }
  }
  result += Math.max(x, y) // 默认洗杯子的时间比煮咖啡的时间段，并且只用加一次洗杯子的时间
  console.log(result)
}
