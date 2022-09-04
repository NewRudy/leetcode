// ac 73
let n = 5, k = 2;
let arr = [5, 5, 5, 5, 5];
countPeach(k, arr, arr.length)
function countPeach(k, arr, len) {
  let sum = 0;
  for(let i = 0; i < len; i++) {
    sum += arr[i];
  }
  if(arr[len - 1] > (sum / n * k)) {
    countPeach(k, arr, len - 1);
  } else {
    console.log(len)
  }
}
