let n = 7
let arr = [1, 2, 1, 2, 1, 2, 1]

// 找奇数个的频数最大值，找偶数列频数最大值，全部相等是特例
let map = new Map(),
  subMap = new Map()
for (let i = 0; i < n; i += 2) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}
let firstArr = [...map].sort((a, b) => b[1] - a[1])
for (let i = 1; i < n; i += 2) {
  if (subMap.has(arr[i])) {
    subMap.set(arr[i], subMap.get(arr[i]) + 1)
  } else {
    subMap.set(arr[i], 1)
  }
}
let secondeArr = [...subMap].sort((a, b) => b[1] - a[1])
let max = 0
if (firstArr[0][0] != secondeArr[0][0]) {
  max = firstArr[0][1] + secondeArr[0][1]
} else {
  if (firstArr.length > 1 && secondeArr.length > 1) {
    max = Math.max(firstArr[0][1] + secondeArr[1][1], firstArr[1][1] + secondeArr[0][1])
  } else if (firstArr.length <= 1 && secondeArr.length <= 1) {
    max = Math.ceil(n / 2)
  } else if (firstArr <= 1) {
    max = firstArr[0][1] + secondeArr[1][1]
  } else {
    max = firstArr[1][1] + secondeArr[0][1]
  }
}
console.log(n - max)
