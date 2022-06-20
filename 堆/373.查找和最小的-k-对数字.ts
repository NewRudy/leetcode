/*
 * @lc app=leetcode.cn id=373 lang=typescript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const result: number[][] = [];
  const dp: number[] = new Array(nums1.length).fill(0);
  while (k) {
    let total: number = Number.POSITIVE_INFINITY, temp: number[], index: number;
    for (let i = 0; i < nums1.length; i++) {
      const j = dp[i];
      if (j >= nums2.length) continue;
      if ((nums1[i] + nums2[j]) < total) {
        total = nums1[i] + nums2[j];
        temp = [nums1[i], nums2[j]];
        index = i;
      }
      if (j === 0) break;
    }
    if (temp) {
      result.push(temp);
      dp[index]++;
      k--;
    } else {
      return result;
    }
  }
  return result;
};
// kSmallestPairs([1,2], [3], 3);
// @lc code=end

