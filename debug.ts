function singleNumber(nums: number[]): number {
  const map: Map<number, number> = new Map(), set: Set<number> = new Set();
  for (let i of nums) {
    if (map.has(i)) {
        set.delete(i);
    } else {
      map.set(i, 1);
      set.add(i);
    }
  }
  for (let i of set.keys()) {
    return i;
  }
};
