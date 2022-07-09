/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class TrieNode {
    isWord: boolean;
    children: TrieNode[]
    constructor(isWorld ?: boolean) {
        this.isWord = isWorld === undefined ? isWorld : false;
        this.children = [];
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let cur = this.root, index;
        for (let i of word) {
            index = i.charCodeAt(0) - 97;
            if (!cur[index]) {
                cur[index] = new TrieNode();
            }
            cur = cur[index];
        }
        cur.isWord = true;
    }

    search(word: string): boolean {
        let cur = this.root, index;
        for (let i of word) {
            index = i.charCodeAt(0) - 97;
            if (!cur[index]) {
                return false;
            }
            cur = cur[index];
        }
        if (cur.isWord) {
            return true;
        }
        return false;
    }

    startsWith(prefix: string): boolean {
        let cur = this.root, index;
        for (let i of prefix) {
            index = i.charCodeAt(0) - 97;
            if (!cur[index]) {
                return false;
            }
            cur = cur[index];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

