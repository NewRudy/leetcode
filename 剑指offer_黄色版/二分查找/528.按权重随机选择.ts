/*
 * @lc app=leetcode.cn id=528 lang=typescript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
class Solution {
    private total: number;
    private len: number;
    private weight: number[];
    constructor(w: number[]) {
        this.total = w[0];
        this.len = w.length;
        this.weight = new Array(this.len).fill(w[0]);
        for (let i = 1; i < w.length; i++){
            this.total += w[i];
            this.weight[i] = this.weight[i - 1] + w[i];
        }
    }

    pickIndex(): number {
        let x = Math.floor(Math.random() * this.total) + 1;
        return this.searchPickIndex(x);
    }

    searchPickIndex(x: number): number {
        let left = 0, right = this.weight.length - 1, mid:number;
        while (left < right) {
            mid = Math.floor((right - left) / 2) + left;
            if (this.weight[mid] < x) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

