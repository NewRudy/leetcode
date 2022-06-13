/*
 * @lc app=leetcode.cn id=919 lang=typescript
 *
 * [919] 完全二叉树插入器
 */

// @lc code=start

// Definition for a binary tree node.
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


class CBTInserter {
    root: TreeNode;
    queue: TreeNode[] = [];
    constructor(root: TreeNode | null) {
        this.root = root;
        this.queue.push(root);
        let temp: TreeNode;
        while (this.queue[0] && this.queue[0].left != null && this.queue[0].right != null) {
            temp = this.queue.shift();
            this.queue.push(temp.left);
            this.queue.push(temp.right);
        }
    }

    insert(val: number): number {
        let temp: TreeNode = new TreeNode(val);
        let insertNode: TreeNode = this.queue[0];
        if (insertNode.left === null) {
            insertNode.left = temp;
        } else {
            insertNode.right = temp;
            this.queue.shift();
            this.queue.push(insertNode.left);
            this.queue.push(insertNode.right);
        }
        return insertNode.val;
    }

    get_root(): TreeNode | null {
        return this.root;
    }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end

