// 这题 ac 了，一个字符串转换成另一个字符串，先构建图，然后深度遍历这个图即可，思路不难 ，但是代码量挺多的

class TempNode {
  value: string;
  arr: TempNode[];
  constructor(value: string) {
    this.value = value;
    this.arr = [];
  }
  push(node?: TempNode | undefined) {
    if (!node) return;
    this.arr.push(node);
  }
}

ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  // write code here
  // 首先判断 endWord 是不是在 wordlist 中，没有就直接返回 0，否则就构建一张图，然后找这两点的最短路径
  let tempFlag = true;
  const map: Map<string, TempNode> = new Map(), root = new TempNode(beginWord), flagArr: boolean[] = new Array(wordList.length).fill(true);
  const res: number[] = [1000];
  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] === endWord) {  // 判断 endWord 是不是在 wordlist 中
      tempFlag = false;
    }
    map.set(wordList[i], new TempNode(wordList[i]));
    if (flagArr[i] && flag(beginWord, wordList[i])) {
      if (wordList[i] === endWord) return 1;
      root.push(map.get(wordList[i]));
      flagArr[i] = false;
    }
  }
  if (tempFlag) {
    return 0;
  }
  // 递归构建图
  recall(wordList, flagArr, root, map);
  // 递归查找这个值
  search(root, endWord, 1, res);
  return res[0] === 1000 ? 0 : res[0];
}

// 判断两个字符串是不是就差一个字符
function flag(str1: string, str2: string): boolean {
  let index = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != str2[i]) {
      index++;
      if (index > 1) {
        return false;
      }
    }
  }
  return true;
}

// 构建图
function recall(wordList: string[], flagArr: boolean[], root: TempNode, map: Map<string, TempNode>) {
  for (let j = 0; j < wordList.length; j++) {
    if (flagArr[j] && flag(root.value, wordList[j])) {   // 边查找 endWord, 边构建图
      root.push(map.get(wordList[j]));
      flagArr[j] = false;
    }
  }
  for (let i of root.arr) {
    recall(wordList, flagArr, i, map);
  }
}

// 查找值
function search(root: TempNode, endWord: string, depth: number, res: number[]) {
  if (root.value === endWord) {
    res[0] = Math.min(res[0], depth);
    return;
  }
  for (let i of root.arr) {
    search(i, endWord, depth + 1, res);
  }
}
