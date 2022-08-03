let t = +read_line()
let data, a, b, res
for (let i = 0; i < t; i++) {
  data = read_line().split(' ')
  a = temp(data[0], data[1], data[2])
  b = temp(data[3], data[4], data[5])
  if (a < b) {
    console.log('A')
  } else if (a > b) {
    console.log('B')
  } else {
    console.log('A&B')
  }
}

function temp(i, j, k) {
  return Math.ceil(+k / +i) * +j
}
