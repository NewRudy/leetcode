// 最长回文子串，ac 了，但是是暴力解法，刚开始判断回文的函数有问题，测试的时候出错了，后面改了
getLongestPalindrome("abc");
// 暴力解法
function getLongestPalindrome(str: string): string {
  // write code here
  for (let len = str.length - 1; len >= 0; len--) {
    for (let i = 0; i <= str.length - 1 && i + len <= str.length; i++) {
      if (isPalindrome(str, i, i + len)) {
        return str.slice(i, i + len + 1);
      }
    }
  }
  return '';
}
function isPalindrome(str: string, i: number, j: number): boolean{
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
