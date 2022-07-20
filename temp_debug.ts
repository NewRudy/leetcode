verifyPostorder([4, 8, 6, 12, 16, 14, 10]);
function verifyPostorder(postorder: number[]): boolean {
  if (!postorder || postorder.length < 3) {
    return true;
  }
  let temp: number = postorder[postorder.length - 1], i: number = 0, index: number;
  while (postorder[i] < temp) {
    i++;
  }
  index = i;
  while (postorder[i] > temp) {
    i++;
  }
  if (i != postorder.length - 1) {
    return false;
  }
  return verifyPostorder(postorder.slice(0, index)) && verifyPostorder(postorder.slice(index, postorder.length - 1));
};
