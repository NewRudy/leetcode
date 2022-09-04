// let n = +readline();
// let tempArr = readline().split(' '), temp, res = 0;
let n = 20
let tempArr = '0 0 0 3 1 2 3 4 5 6 7 8 1 4 2 4 3 5 5 0 5 5 2 0 2 2 3 0 3 3 4 5 6 1 3 7 4 0 5 2'.split(' '),
  edge1,edge2, edge3,
  res = 0;
for(let i = 0; i < n * 2; i += 2) {   // 每三个点循环一次
    for(let j = i + 2; j < n * 2; j += 2) {
      for(let k = j + 2; k < n * 2; k += 2) {
        edge1 = edge(+tempArr[i], +tempArr[i + 1], +tempArr[j], +tempArr[j + 1]);
        edge2 = edge(+tempArr[i], +tempArr[i + 1], +tempArr[k], +tempArr[k + 1]);
        edge3 = edge(+tempArr[k], +tempArr[k + 1], +tempArr[j], +tempArr[j + 1]);
        if(flag(edge1, edge2, edge3)) {
          res += 1;
        }
      }
    }    
}
console.log(res);

function edge(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
function flag(edge1, edge2, edge3) {
  let tempArr = [edge1, edge2, edge3].sort((a, b) => a - b);
  let temp = tempArr[2] * tempArr[2] - tempArr[0] * tempArr[0] - tempArr[1] * tempArr[1];
  console.log(temp);
  if(temp < 1 && temp > 0) {
    return true;
  } else {
    return false;
  }
}
