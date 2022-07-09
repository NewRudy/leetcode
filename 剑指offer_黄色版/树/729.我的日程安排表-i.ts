/*
 * @lc app=leetcode.cn id=729 lang=typescript
 *
 * [729] 我的日程安排表 I
 */
// @lc code=start
class SegementTree {
    left: SegementTree | null;
    right: SegementTree | null;
    start: number;
    end: number;
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
}
class MyCalendar {
    root: SegementTree;
    constructor() {
    }

    book(start: number, end: number): boolean {
        if (!this.root) {
            this.root = new SegementTree(start, end);
            return true;
        }
        let temp: SegementTree = this.root;
        while (temp) {
            if (end <= temp.start) {
                if (!temp.left) {
                    temp.left = new SegementTree(start, end);
                    return true;
                }
                temp = temp.left;
            } else if (start >= temp.end) {
                if (!temp.right) {
                    temp.right = new SegementTree(start, end);
                    return true;
                }
                temp = temp.right;
            } else {
                return false;
            }
        }
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

