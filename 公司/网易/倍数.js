// let temp = readline().split(' ');
// ac 6%
let temp = '1234 99'.split(' ');
let n = temp[0].split('');
let m = temp[1].split('');
let result = Number.MAX_SAFE_INTEGER;
let exist = false;

beishu(n, m, 0);
if(exist) {
  console.log(result);
} else {
  console.log(-1);
}

// 逐个逐个进行遍历
function beishu(n, m, res) {
  if(flag(n, m)) {
    exist = true;
    result = Math.min(result, res);
    return;
  }
  let temp;
  for(let i = 0; i < n.length; i++) {
    temp = n.slice(0, i).concat(n.slice(i + 1,));
    beishu(temp, m, res + 1)
  }
  for(let i = 0; i < m.length; i++) {
    temp = m.slice(0, i).concat(m.slice(i + 1,));
    beishu(n, temp, res + 1)
  }
}

function flag(n, m) {
  let [min, max] = n.length < m.length ? [+n.join(''), +m.join('')] : [+m.join(''), +n.join('')];
  if(min != 0 && max % min === 0) {
    return true;
  } else {
    return false;
  }
}
