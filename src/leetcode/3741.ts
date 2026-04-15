function minimumDistance(nums: number[]): number {
	const dist = ([i, j, k]: [number, number, number]) =>
		Math.abs(i - j) + Math.abs(j - k) + Math.abs(i - k);

	let result = Infinity;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				if (nums[i] === nums[j] && nums[j] === nums[k]) {
					result = Math.min(result, dist([i, j, k]));
				}
			}
		}
	}

	return result;
}

export { minimumDistance };
