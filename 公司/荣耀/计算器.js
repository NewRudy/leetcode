let str = '1+2+99-10-10',
  sum = 0;
let first = 0, second = 0, temp;  // 双指针的做法
while(second < str.length) {
  while (second < str.length && str[second] != '+' && str[second] != '-') {
    second++
  }
  temp = +str.slice(first, second);
  if(first === 0 || str[first - 1] === '+') {
    sum += temp;
  } else {
    sum -= temp;
  }
  first = ++second;
}
console.log(sum);
