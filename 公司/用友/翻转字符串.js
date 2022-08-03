let data = '["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]'.split(',');
let temp = '', tempDigit;
const tempRes = [];
let res = [];
for(let i of data) {
  tempDigit = getDigit(i);
  if(tempDigit != ' ') {
    temp += tempDigit;
  } else {
    tempRes.push(temp);
    temp = '';
  }
}
tempRes.push(temp);
tempRes.reverse();
for(let i of tempRes) {
  for(let j of i.split('')) {
      res.push('\"' + j + '\"')
  }
  res.push('\" \"');
}
if(res.length > 0 ) {
  res.pop();
}
console.log('[' + res.join(',') + ']');

function getDigit(str) {
  if(str.includes('[')) {
    return str[2];
  } else {
    return str[1];
  }
}


function getDigit(str) {
  if(str.includes('[')) {
    return str[2];
  } else {
    return str[1];
  }
}
