// 全排列回文字符串个数，求回文子字符串的个数的时候是根据公式来的
function temp(str) {
  if (!str || str === '') {
    return 0;
  }
  let count = 0;
  let arr = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    arr[str[i].charCodeAt() - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count += (1 + arr[i]) * arr[i] / 2;
    }
  }
  return count;
}
