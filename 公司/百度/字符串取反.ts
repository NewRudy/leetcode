
/*
  3
  101
  1111
  1011

  10111
  00111
  10001   2/5 在哪都可以
*/
judge([1, 0, 1, 1])
function judge(str: number[]){
  if (str.length < 2) {
    console.log('Yes');
  }
  if (str.length === 2 && str[0] != str[1]) {
    console.log('No');
  }
  // 1 可以通过 0 往后一直移，然后数聚集的1的个数，如果是奇数则不可以，否则可以
  let start = 0;
  while (start < str.length - 1) {
    while (start + 1 < str.length && str[start] === str[start + 1]) {
      str[start] = 0;
      str[start + 1] = 0;
        start += 2;
    }
    if (start < str.length - 1) {
      start++;
      str[start] = 1;
    }
  }
  if (str[str.length - 1] === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
