/*
 * @lc app=leetcode.cn id=648 lang=typescript
 *
 * [648] 单词替换
 */

// @lc code=start
// 1. 前缀树的写法太慢了
// class TrieNode {
//   isWord: boolean;
//   children: TrieNode[];
//   constructor(isWord?: boolean) {
//     this.isWord = isWord === undefined ? false : isWord;
//     this.children = [];
//   }
// }
// class Trie {
//   root: TrieNode;
//   constructor() {
//       this.root = new TrieNode();
//   }

//   insert(word: string): void {
//       let cur = this.root, index;
//       for (let i of word) {
//           index = i.charCodeAt(0) - 97;
//           if (!cur[index]) {
//               cur[index] = new TrieNode();
//           }
//           cur = cur[index];
//       }
//       cur.isWord = true;
//   }

//   search(word: string): boolean {
//       let cur = this.root, index;
//       for (let i of word) {
//           index = i.charCodeAt(0) - 97;
//           if (!cur[index]) {
//               return false;
//           }
//           cur = cur[index];
//       }
//       if (cur.isWord) {
//           return true;
//       }
//       return false;
//   }

//   startsWith(prefix: string): boolean {
//       let cur = this.root, index;
//       for (let i of prefix) {
//           index = i.charCodeAt(0) - 97;
//           if (!cur[index]) {
//               return false;
//           }
//           cur = cur[index];
//       }
//       return true;
//   }
// }
// function replaceWords(dictionary: string[], sentence: string): string {
//   const trie = new Trie();
//   for (let i of dictionary) {
//     trie.insert(i);
//   }
//   const temp = sentence.split(' ');
//   const result = [];
//   for (let i of temp) {
//     let flag: boolean = true;
//     for (let j: number = 1; j <= i.length; ++j) {
//       let subString = i.substring(0, j);
//       if (trie.startsWith(subString)) {
//         if (trie.search(subString)) {
//           result.push(subString);
//           flag = false;
//           break;
//         }
//       } else {
//         break;
//       }
//     }
//     if (flag) {
//       result.push(i);
//     }
//   }
//   return result.join(' ');
// };

// 2. 尝试哈希写法
function replaceWords(dictionary: string[], sentence: string): string {
  const sets: Set<string> = new Set(dictionary);
  const temp: string[] = sentence.split(' ');
  const result: string[] = [];
  let flag: boolean, subString: string;
  for (let i of temp) {
    flag = true;
    for (let j = 0; j < i.length; j++) {
      subString = i.substring(0, j + 1);
      if (sets.has(subString)) {
        result.push(subString);
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(i);
    }
  }
  return result.join(" ");
}
// @lc code=end

