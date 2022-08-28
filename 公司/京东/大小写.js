let temp = readline().split(' ').map(i => +i)
let n = temp[0],
  k = temp[1]
let str = readline()
let res = ''
for (let i = 0; i < k; i++) {
  res += str[i].toLocaleUpperCase()
}
for (let i = k; i < n; i++) {
  res += str[i].toLocaleLowerCase()
}
console.log(res)
