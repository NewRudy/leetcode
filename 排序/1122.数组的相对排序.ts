/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let map:Map<number, number> = new Map(), result: number[] = [];
  for (let i of arr1) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  for (let i of arr2) {
    for (let j = 0; j < map.get(i); j++) {
      result.push(i);
    }
    map.delete(i);
  }
  let temp: number[][] = Array.from(map);
  temp.sort((i, j) => i[0] - j[0]);
  for (let i of temp) {
    for (let j = 0; j < i[1]; j++) {
      result.push(i[0]);
    }
  }
  return result;
};
// @lc code=end

