/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param k int整型 拥有多少苹果
 * @param n int整型 拥有几层楼
 * @return int整型
 */
function superAppleDrop(k, n) {
  // write code here
  if(k === 1) {
    return n;
  }
  if(k > 1) {
    return superAppleDrop(k - 1, Math.floor(n /2));
  }
}
module.exports = {
  superAppleDrop: superAppleDrop,
}
