// 80
let str = 'aa_TTTTTT';
console.log('_'.charCodeAt(0))
transfer(str)

function transfer(str) {
  if (str[0].charCodeAt(0) - 'A'.charCodeAt(0) >= 0 && str[0].charCodeAt(0) - 'Z'.charCodeAt(0) <= 0) {
    console.log(str);
    return;
  }
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if ((i > 0 && (str[i - 1].charCodeAt(0) - 'a'.charCodeAt(0)) >= 0 && (str[i].charCodeAt(0) - 'a'.charCodeAt(0) < 0)) ||
      (i > 0 && i + 1 < str.length && (str[i - 1].charCodeAt(0) - 'a'.charCodeAt(0)) < 0 && (str[i].charCodeAt(0) - 'a'.charCodeAt(0)) < 0 && (str[i + 1].charCodeAt(0) - 'a'.charCodeAt(0)) >= 0)) {
      res += '_'
    }
    res += str[i].toLocaleLowerCase();
  }
  console.log(res.replace(/_+/g, '_'));
}
