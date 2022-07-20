/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
function copyRandomList(head: Node | null): Node | null {
  const map: Map<Node, Node> = new Map(), dummy: Node = new Node();
  let temp: Node = head, front: Node = dummy, rear: Node;
  while (temp) {
    rear = new Node(temp.val);
    front.next = rear;
    front = front.next;
    map.set(temp, rear);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    if (temp.random) {
      map.get(temp).random = map.get(temp.random);
    } else {
      map.get(temp).random = front.next;
    }
    temp = temp.next;
  }
  return dummy.next;
};
// @lc code=end

