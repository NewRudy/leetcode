/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  let current: string = '';
  restoreIpAddressesRecall(s, 0, 3, result, current);
  return result;
};
function restoreIpAddressesRecall(s: string, start: number,num: number,result: string[], current: string) {
  if (start === s.length && num === 0) {
    result.push(current);
    return;
  }
  if (num >= 0 && start < s.length) {
    for (let i = start; i < s.length; i++) {
      let tempString: string = s.substring(start, i + 1);
      if (tempString.length > 1 && tempString[0] === '0') {
        continue;
      }
      let tempInt: number = parseInt(tempString);
      if (tempInt >= 0 && tempInt <= 255) {
        if (current === '') {
          restoreIpAddressesRecall(s, i + 1, num, result, tempString);
        } else {
          restoreIpAddressesRecall(s, i + 1, num - 1, result, current + '.' + tempString);
        }

      }
    }
  }

}
// restoreIpAddresses("101023");
// @lc code=end

