// ac 90
let n = 4,
  m = 4,
  k = 4
let arr = [
  [1, 2, 3, 6],
  [2, 3, 1, 3],
  [3, 4, 2, 4],
  [3, 4, 2, 1],
]
let flag = new Array(k).fill(true)
let res = new Map()
res.set(1, 1)
let max = 0
reward(1, res, 0)
// 应该是全排列
function reward(day, res, tempMax) {
  if (day > n || res.get(day) > m) {
    return
  }
  for (let i = 0; i < arr.length; i++) {
    if (flag[i]) {
      if (res.has(arr[i][0]) && !res.has(arr[i][1]) && res.get(arr[i][0]) + arr[i][2] <= m) {
        res.set(arr[i][1], res.get(arr[i][0]) + arr[i][2])
        max = Math.max(max, tempMax + arr[i][3])
        flag[i] = false
        reward(arr[i][1], res, tempMax + arr[i][3])
        flag[i] = true
        res.delete(arr[i][1])
      } else if (!res.has(arr[i][0]) && Math.max(...res.values()) + arr[i][2] <= m) {
        let temp = Math.max(...res.values())
        res.set(arr[i][0], temp)
        res.set(arr[i][1], temp + arr[i][2])
        flag[i] = false
        max = Math.max(max, tempMax + arr[i][3])
        reward(arr[i][1], res, tempMax + arr[i][3])
        flag[i] = true
        res.delete(arr[i][1])
      } else if(res.has(arr[i][0]) && res.has(arr[i][1]) && res.get(arr[i][1]) - res.get(arr[i][0]) === res.get(arr[i][2])) {
        max = Math.max(max, tempMax + arr[i][3]);
        flag[i] = false;
        reward(arr[i][1], res, tempMax + arr[i][3]);
        flag[i] = true;
      }
    }
  }
}

console.log(max)
