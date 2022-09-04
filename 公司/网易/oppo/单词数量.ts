// console.log('1234567890 http:// aa'.replace(/-/g, '').replace(/\d+/g, '').replace(/\shttp.*\s/g, ''))
// 15
count("aaa")
function count(str) {
  let temp = str.replace(/-/g, '').replace(/\d+/g, '').replace(/\shttp.?$/g, ' ').replace(/\s+/g, ' ')
  if (temp != '' && !temp.includes(' ')) {
    temp += ' '
  }
  let res = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === ' ') {
      res++;
    }
  }
  console.log(temp)
  console.log(res);
}
