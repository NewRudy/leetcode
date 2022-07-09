/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
class RecentCounter {
    count: number;
    queue: number[];

    constructor() {
        this.count = 0;
        this.queue = [];
    }

    ping(t: number): number {
        while (this.queue.length != 0 && t - this.queue[0] > 3000) {
            this.queue.shift();
        }
        this.queue.push(t);
        return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

