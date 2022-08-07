// ac 了，排序后暴力解决的，应该有更优雅的解决办法
function stringMatching(words: string[]): string[] {
  // write code here
  const res: string[] = [];
  if (!words || words.length === 0) {
    return res;
  }
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].indexOf(words[i]) >= 0) {
        res.push(words[i]);
        break;
      }
    }
  }
  return res;
}
stringMatching(["mass", "as", "hero", "superhero"]);
