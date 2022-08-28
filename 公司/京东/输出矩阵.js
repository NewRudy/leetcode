let n = 2
let index = 1
if (n % 2) {
  // 如果 n 是奇数的话直接排列下来即可
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n; j++) {
      temp += index
      if (j != n - 1) temp += ' '
      index++
    }
    console.log(temp)
  }
} else {
  // 如果 n 是偶数的话偶数行倒转
  for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j < n; j++) {
      temp += index
      if (j != n - 1) temp += ' '
      index++
    }
    if (i % 2) {
      console.log(temp.split(' ').reverse().join(' '))
    } else {
      console.log(temp)
    }
  }
}
