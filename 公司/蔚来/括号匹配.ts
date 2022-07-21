// 括号匹配，只通过了 51%
function temp(str) {
  if (!str || str === '') {
    return false
  }
  let data = str.match(/<.*?>/g);    // 返回所有的尖括号
  if (data.length % 2 != 0) {   // 如果括号不是成对匹配，直接 pass
    return false
    return;
  }
  for (let i = 0; i < data.length; i++) {
    if ((i + 1) % 2) {
      if (data[i] <= 2) {
        return false;
      }
    } else {
      if (!/<\/.+?>/g.test(data[i])) {
        return false;
      }
    }
  }
  let dataTemp = str.match(/>.*?</g);
  for (let i = 0; i < dataTemp.length; i++) {
    if (/\//g.test(data[i])) {
      return false;
    }
  }
  return true;
}
temp("<te><</te><st></st>")
