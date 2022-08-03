let n = +read_line()
let str = read_line().split('')
let res = 0
for (let i = 1; i < str.length; i++) {
  if (str[i] != str[i - 1]) {
    res++
  }
}
console.log(Math.floor(res / 2))
