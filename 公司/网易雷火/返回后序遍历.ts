// 根据前序遍历和中序遍历的字符串构建后序遍历的字符串，ac 了，差点就打算先构建这棵树了
function getPostOrderOfTree(preStr: string, midStr: string): string {
  // write code here
  // 要不要先把这个树构建出来呢？不需要，每次都返回后序遍历的结果字符串即可
  if (!preStr || !midStr || preStr.length === 0 || midStr.length === 0) {
    return '';
  }
  let i = midStr.indexOf(preStr[0]);    // 找到根节点
  return getPostOrderOfTree(preStr.slice(1, i + 1), midStr.slice(0, i)) +
    getPostOrderOfTree(preStr.slice(i + 1, preStr.length), midStr.slice(i + 1, midStr.length))
    + preStr[0];
}
console.log(getPostOrderOfTree("ACDEFHGB", "DECAHFBG"));
