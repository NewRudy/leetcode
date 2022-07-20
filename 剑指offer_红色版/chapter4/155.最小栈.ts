/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */
// @lc code=start
class MinNode {
    next: MinNode | null;
    val: number | undefined;
    constructor(val: number | undefined, next?: MinNode | undefined) {
        this.val = val;
        this.next = next ? next : null;
    }
}
class MinStack {
    private stack: number[];
    private index: MinNode;
    constructor() {
        this.stack = [];
        this.index = new MinNode(-1);
    }

    push(val: number): void {
        let temp: MinNode = this.index;
        while (temp.next) {
            if (val < this.stack[temp.next.val]) {
                break;
            }
            temp = temp.next;
        }
        let data: MinNode = new MinNode(this.stack.length);
        data.next = temp.next;
        temp.next = data;
        this.stack.push(val);
    }

    pop(): void {
        if (this.stack.length === 0) {
            return;
        }
        this.stack.pop();
        let temp: MinNode = this.index;
        while (temp.next) {
            if (temp.next.val === this.stack.length) {
                break;
            }
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.stack[this.index.next.val];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

