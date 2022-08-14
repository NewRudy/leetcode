// let n = +readline();
// let str = readline().split('');
// let arr = [];
// for(let i = 0; i < n; i++) {
//   arr.push(readline().split(' ').map(a => +a));
// }

let n = 5
let str = 'cabbd'.split('')
let arr = [
  [2, 5],
  [2, 1],
  [4, 2],
  [2, 3],
]
let set = new Set(...arr)
// 图的节点
class Node {
  index
  value
  handle
  next
  constructor(index, value, next) {
    this.index = index
    this.value = value
    this.handle = 0
    this.next = []
  }
}

let map = [] // 每个学生对应的节点
for (let i = 0; i < n; i++) {
  map[i] = new Node(i + 1, str[i])
}
build(1)
calculate(map[0])
let res = map.reduce((i, j) => i + j.handle, 0)
console.log(res)

function build(src) {
  for (let i = 0; i < arr.length; i++) {
    // 不知道谁是上下级
    if (arr[i][0] === src || arr[i][1] === src) {
      let temp = arr[i][0] === src ? arr[i][1] : arr[i][0]
      map[src - 1].next.push(map[temp])
    }
  }
  if (map[src - 1].next.length) {
    for (let i of map[src - 1].next) {
      build(i.index)
    }
  }
}
function calculate(node) {
  let set = new Set(),
    temp
  for (let i of node.next) {
    temp = calculate(i)
    for (let j of calculate) {
      set.add(j)
    }
  }
  node.handle = set.size
  return set
}
