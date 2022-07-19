/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

 function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }
  let first: ListNode = head, second: ListNode = head.next.next;
  while (second && first != second) {
    first = first.next;
    second = second.next;
    if (second) {
      second = second.next;
    }
  }
  if (!second) {
    return null;
  }
  let num: number = 1;  // 环的个数
  while (second.next != first) {
    second = second.next;
    num++;
  }
  first = head;
  second = head;
  while (num > 0) {
    second = second.next;
    num--;
  }
  while (first != second) {
    first = first.next;
    second = second.next;
  }
  return first;
};
// @lc code=end

