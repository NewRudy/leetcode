/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

 function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if(lists.length === 0) return null;//没用元素则返回空
  let result:Array<number> = [];//存储数组
  let now:ListNode;
  for (let head of lists) {//依次循环链表数组
      now = head;
      while(now) {
          result.push(now.val);//将链表数据存入存储数组
          now = now.next;
      } 
  }
  if (result.length === 0) return null;//存储数组内没有数据返回空
  result.sort((a, b) => a - b);//排序
  let res:ListNode = new ListNode(result.shift());
  now = res;
  while(result.length > 0) {
      now.next = new ListNode(result.shift());//存储数组转为新链表
      now = now.next;
  }
  return res;
};

// @lc code=end

