// ac 5%
let str = readline().split('')
let res = 0,
  temp
for (let i = 0; i < str.length; i += 3) {
  temp = str.slice(i, i + 3).join('')
  if (temp != 'red' && temp != 'der') {
    if (temp.endsWith('ed') || temp.endsWith('er') || temp.startsWith('de') || temp.startsWith('re')) {
      res++
    } else {
      res += 2
    }
  }
}
console.log(res)
