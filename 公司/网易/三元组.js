// let n = +readline()
// let arr = readline()
//   .split(' ')
//   .map((i) => +i);
let n = 6
let arr = [3, 1, 3, 4, 3, 4]
let res = 0

// 先暴力解法，ac 57%
// for(let i = 0; i < n; i++) {
//   for(let j = i + 1; j < n - 1; j++) {
//     if(arr [j] < arr[i]) {
//       for(let k = j + 1; k < n; k++) {
//         if(arr[i] === arr[k]) {
//           res++;
//         }
//       }
//     }
//   }
// }

// 从中间往两边遍历
let leftMap, rightMap;
for (let i = 1; i < n - 1; i++) {
  leftMap = new Map();
  rightMap = new Map();
  for(let j = i - 1; j >= 0; j--) {
    if(arr[i] < arr[j]) {
      if(leftMap.has(arr[j])) {
        leftMap.set(arr[j], leftMap.get(arr[j]) + 1);
      } else {
        leftMap.set(arr[j], 1);
      }
    }
  }
  for (let j = i + 1; j < n; j++) {
    if (arr[i] < arr[j]) {
      if (rightMap.has(arr[j])) {
        rightMap.set(arr[j], rightMap.get(arr[j]) + 1)
      } else {
        rightMap.set(arr[j], 1)
      }
    }
  }
  if(leftMap.size > 0 && rightMap.size > 0) {
  for (let key of leftMap.keys()) {
    if (rightMap.has(key)) {
      res += leftMap.get(key) * rightMap.get(key)
    }
  }
  }
}
console.log(res)
