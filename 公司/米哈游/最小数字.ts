// ac 了，输入一个数字，返回这个数字能组成的最小的数字
function smallestNumber(num: number): number {
  // write code here
  // 直接对 num 的字符串排序，如果第一位是 0，找到不是0的那个交换一下即可
  const str: string[] = (num + '').split('').sort((a, b) => (+a) - (+b));
  if (str[0] === '0') {
    let i = 0;
    while (i < str.length && str[i] === '0') {
      i++;
    }
    str[0] = str[i];
    str[i] = '0'
  }
  return +str.join('');
}
smallestNumber(4120);
