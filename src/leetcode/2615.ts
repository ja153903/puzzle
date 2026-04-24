function distance(nums: number[]): number[] {
  const dists = new Array(nums.length).fill(0);
  const prefixByNumber = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (!prefixByNumber.has(num)) {
      prefixByNumber.set(num, []);
    }

    prefixByNumber.get(num)?.push(i);
  }

  for (const indices of prefixByNumber.values()) {
    const total = indices.reduce((a, b) => a + b);
    let leftSum = 0;
    for (let i = 0; i < indices.length; i++) {
      const rightSum = total - leftSum - indices[i];
      const left = indices[i] * i - leftSum;
      const right = rightSum - indices[i] * (indices.length - i - 1);
      dists[indices[i]] = left + right;
      leftSum += indices[i];
    }
  }

  return dists;
}

export { distance };
