/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinNode {
    next: MinNode | null;
    val: number | undefined;
    constructor(val?: number | undefined, next?: MinNode | null) {
        this.val = val;
        this.next = next ? next : null;
    }
}
class MinStack {
    private stack: number[];
    private root: MinNode;
    constructor() {
        this.stack = [];
        this.root = new MinNode();
    }

    push(val: number): void {
        let temp = this.root;
        while (temp.next && this.stack[temp.next.val] <= val) {
            temp = temp.next;
        }
        let tempNode = new MinNode(this.stack.length);
        tempNode.next = temp.next;
        temp.next = tempNode;
        this.stack.push(val);
    }

    pop(): void {
        if (this.stack.length === 0) {
            return;
        }
        this.stack.pop();
        let temp = this.root;
        while (temp.next) {
            if (temp.next.val === this.stack.length) {
                break;
            }
            temp = temp.next;
        }
        if (temp.next) {
            temp.next = temp.next.next;
        }
    }

    top(): number {
        if (this.stack.length) {
            return this.stack[this.stack.length - 1];
        }
        return undefined;
    }

    getMin(): number {
        if (this.root.next) {
            return this.stack[this.root.next.val];
        }
        return undefined;
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

