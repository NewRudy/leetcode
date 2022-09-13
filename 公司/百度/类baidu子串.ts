
const yuanyin = new Set(['a', 'e', 'i', 'o', 'u']);
function judge(str: string): boolean {
  let set = new Set(str.split(''));
  if (set.size < 5) {
    return false;
  }
  return str.length === 5 && !yuanyin.has(str[0]) && !yuanyin.has(str[3]) && yuanyin.has(str[1]) && yuanyin.has(str[2]) && yuanyin.has(str[4])
}
function count(str: string) {
  let res = 0;
  for (let i = 0; i < str.length - 4; i++) {
    if (judge(str.slice(i, i + 5))) {
      res++;
    }
  }
  console.log(res);
}

count('baiduoxiaojiabankanjiaran')
