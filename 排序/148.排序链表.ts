/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null);
};
function toSortList(head: ListNode, tail: ListNode):ListNode | null {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow: ListNode = head, fast: ListNode = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) fast = fast.next;
  }
  return mergeList(toSortList(head, slow), toSortList(slow, tail));
}
function mergeList(left: ListNode, right: ListNode): ListNode |null {
  let dummy: ListNode = new ListNode(0);
  let temp: ListNode = dummy;
  while (left != null && right != null) {
    if (left.val < right.val) {
      temp.next = left;
      left = left.next;
    } else {
      temp.next = right;
      right = right.next;
    }
    temp = temp.next;
  }
  temp.next = left === null ? right : left;
  return dummy.next;
}
// @lc code=end

