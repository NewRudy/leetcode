// 逆向约瑟夫环，吐了，0 ac，刚开始就用的数组，写着写着发现很麻烦，后面转成了双向循环链表，但是刚写完还没测试，时间超出了 1 min，没有测试了
let n = 4
let arr = '1 2 3 4'.split(' ')

class Node {
  prev
  next
  vlaue
  constructor(vlaue, prev, next) {
    this.vlaue = vlaue
    this.prev = null
    this.next = null
  }
}
const node = new Node(0) // 构建双向循环链表
let tail = node
arr.forEach((i) => {
  let data = new Node(+i)
  data.prev = tail
  tail.next = data
  tail = data
})
tail.next = node.next

const res = new Array(n).fill(0)

func(n)
console.log(res.join(' '))

// 1 2 3 => 2 3 1  1 2 3 4 => 4 2 1 3
// 第一个变成了第三个，确定一个位置，然后从底部抽两个上顶部，直到最后的只剩下两个

function func(a) {
  if (a === 0) {
    return
  }
  let source = node // 找到初始值
  let temp = 0,
    target = 0
  while (temp < 3) {
    // 找到 res 中第三个是 0 的位置
    if (res[target] === 0) {
      temp++
      target = (target + 1) % n
    }
    target = (target + 1) % n
  }
  res[target] = source.next.vlaue // arr 的第一个数赋给 res 的第三个数
  source.next = source.next.next
  source.next.prev = source
  if (node.next && node.next.next) {
    for (let i = 0; i < 2; i++) {
      // 将链表尾两个节点移到头部
      let tempNode = tail
      tail = tail.prev
      tempNode.next = node.next
      node.next = tempNode
      tempNode.prev = node
      tempNode.next.prev = tempNode
    }
  }
  func(a - 1)
}
