function firstStableIndex(nums: number[], k: number): number {
	for (let i = 0; i < nums.length; i++) {
		let score = 0;

		let max = nums[0];
		for (let j = 0; j <= i; j++) {
			max = Math.max(max, nums[j]);
		}

		score += max;

		let min = nums[i];

		for (let j = i; j < nums.length; j++) {
			min = Math.min(min, nums[j]);
		}

		score -= min;

		if (score <= k) {
			return i;
		}
	}

	return -1;
}

export { firstStableIndex };
