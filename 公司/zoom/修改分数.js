// let n = +readline();
// let tom = readline().split(' ').map(i => +i);
// let tom1 = [...tom];
// let jerry = readline().split(' ').map(i => +i);
let n = 5
let tom = '1 2 3 1 3'.split(' ').map((i) => +i)
let tom1 = [...tom]
let jerry = '-1 0 3 -1 1'.split(' ').map((i) => +i)
let res1 = 0,
  temp
for (let i = 1; i < n; i++) {
  temp = tom[i - 1] + jerry[i] - jerry[i - 1]
  if (temp != tom[i]) {
    tom[i] = temp
    res1++
  }
}
let res2 = 0
for (let i = n - 1; i > 0; i--) {
  temp = tom1[i] - jerry[i] + jerry[i - 1]
  if (temp != tom1[i - 1]) {
    tom[i - 1] = temp
    res2++
  }
}
console.log(res1 < res2 ? res1 : res2)
