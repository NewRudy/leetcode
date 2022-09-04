function maxChars(str) {
  if (!str || str === '') return
  // code
  // 第一种
  // const map = new Map();
  // for(let i = 0; i < str.length;i++) {
  //     if(map.has(s[i])) {
  //         map.set(s[i], map.get(s[i] + 1));
  //     } else {
  //          map.set(s[i], 0)
  //     }
  // }
  //  let arr = Array.from(map);
  //  arr.sort((i, j ) => j[1] - i[1]);
  //  return arr[0][0];

  // 第二种
  s.sort((a, b) => a.charCode(0) - b.charCodeAt(0))
  let max = 0,
    maxIndex = 0,
    i = 0,
    j = 0
  while (j < s.length) {
    if (s[i] === s[j]) {
      j++
    } else {
      if (j - i > max) {
        max = j - i
        maxIndex = i
        j++
        i = j
      }
    }
  }
  return s[maxIndex]
}
