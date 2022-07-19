/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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
// 迭代解法
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//   let res: ListNode = new ListNode();
//   let cur: ListNode = res;
//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       cur.next = list1;
//       list1 = list1.next;
//     } else {
//       cur.next = list2;
//       list2 = list2.next;
//     }
//     cur = cur.next;
//   }
//   cur.next = list1 != null ? list1 : list2;
//   return res.next;
// };

// 递归解法
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 || !list2) {
    return list1 || list2;
  }
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
  }
  return list1.val <= list2.val ? list1 : list2;
}
// @lc code=end

