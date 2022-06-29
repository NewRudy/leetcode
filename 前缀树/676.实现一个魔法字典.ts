/*
 * @lc app=leetcode.cn id=676 lang=typescript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start
class MagicDictionary {
    set: Set<string>;
    constructor() {
        this.set = new Set();
    }

    buildDict(dictionary: string[]): void {
        for (let i of dictionary) {
            this.set.add(i);
        }
    }

    search(searchWord: string): boolean {
        for (let i of this.set) {
            if (searchWord.length != i.length) {
                continue;
            }
            let count = 0;
            for (let j = 0; j < searchWord.length; j++) {
                if (searchWord[j] != i[j]) {
                    count++;
                }
                if (count > 1) {
                    break;
                }
            }
            if (count === 1) {
                return true;
            }
        }
        return false;
    }
}
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

