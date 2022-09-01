// 字符转换，leetcode 原题， ac 0，gg
let source = 'intention', target = 'execution';
transfer(source, target);

function transfer(source: string, target: string) {
  let len = Math.abs(source.length - target.length);
  let sourceMap = new Map(), targetMap = new Map();
  for (let i = 0; i < source.length; i++) {
    if (!sourceMap.has(source[i])) {
      sourceMap.set(source[i], 1);
    } else {
      sourceMap.set(source[i], sourceMap.get(source[i]));
    }
  }
  for (let i = 0; i < target.length; i++) {
    if (!targetMap.has(target[i])) {
      targetMap.set(target[i], 1);
    } else {
      targetMap.set(target[i], targetMap.get(target[i]));
    }
  }
  for (let i of targetMap.keys()) {
    if (!sourceMap.has(i)) {
      len += targetMap.get(i);
    } else {
      len += targetMap.get(i) - sourceMap.get(i);
    }
  }
  console.log(len);
}
