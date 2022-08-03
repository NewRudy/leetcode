/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
class MedianFinderTemp {
    value: number;
    next: MedianFinderTemp;
    constructor(value?: number | undefined, next?: MedianFinderTemp | undefined) {
        this.value = value != undefined ? value : undefined;
        this.next = next ? next : null;
    }
}
class MedianFinder {
    root: MedianFinderTemp;
    len: number;
    constructor() {
        this.root = new MedianFinderTemp();
        this.len = 0;
    }

    addNum(num: number): void {
        let temp = this.root;
        while (temp.next && num > temp.next.value) {
            temp = temp.next;
        }
        let node = new MedianFinderTemp(num);
        node.next = temp.next;
        temp.next = node;
        this.len++;
    }

    findMedian(): number {
        let temp = this.root, len = Math.floor(this.len / 2);
        for (let i = 0; i < len && temp; i++) {
            temp = temp.next;
        }
        if (this.len % 2 === 1) {
            return temp.next.value;
        } else {
            return (temp.value + temp.next.value) / 2;
        }
    }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

