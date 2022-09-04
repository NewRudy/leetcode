// let N = readline();
// let arr = readline().split(' ');
let N = 32
let arr = '1953 2347 16 -1042 -1546 -933 -1946 -2722 -427 2111 3260 -1265 -8196 -8766 -2922 4135 6564 4644 2726 2789 4939 4451 149 -2320 -1348 2211 3370 900 -886 -1998 -643 172'.split(' ');
let res = [];
for(let i = 0; i < arr.length; i++) {
  res.push(Math.round(+arr[i] * hanmin(i, N)));
}
console.log(res);

function hanmin(n, N) {
  return (1 - Math.cos(2.0 * Math.PI * n / N)) / 2;
}
