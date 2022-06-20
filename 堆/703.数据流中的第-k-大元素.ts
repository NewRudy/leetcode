/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
class KthLargest {

    private k: number;
    private nums: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums.sort((a: number, b: number) => b - a);
    }

    add(val: number): number {
        console.log(this.nums)

        let lastIndex = this.k;

        while (lastIndex >= 0 && (val > this.nums[lastIndex] || this.nums[lastIndex] === undefined)) {
            this.nums[lastIndex + 1] = this.nums[lastIndex];
            --lastIndex;
        }
        
        this.nums[lastIndex + 1] = val;

        return this.nums[this.k - 1];
    }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

