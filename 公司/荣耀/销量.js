let temp = readline().split(' ').map(i => +i);
let n = temp[0], m = temp[1];
let arr = readline()
  .split(' ')
  .map((i) => +i);
for(let i = 0; i < m; i++) {
  temp = readline().split(' ');
  if(temp[0] === 'Q') {
    let sum = 0, start = +temp[1] - 1, end = +temp[2] - 1;
    for(let i = start; i <= end; i++) {
      sum += arr[i];
    }
    console.log(Math.floor(sum/(end - start)));
  } else {
    let index = +temp[1] - 1;
    arr[index] += +temp[2];
  }
}
