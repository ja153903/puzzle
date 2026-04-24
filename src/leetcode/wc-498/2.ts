function firstStableIndex(nums: number[], k: number): number {
	const maxes: number[] = [];
	const mins: number[] = [];

	for (let i = 0; i < nums.length; i++) {
		if (i === 0) {
			maxes.push(nums[i]);
		} else {
			maxes.push(Math.max(maxes[i - 1], nums[i]));
		}
	}

	for (let i = nums.length - 1; i >= 0; i--) {
		if (i === nums.length - 1) {
			mins.push(nums[i]);
		} else {
			mins.push(Math.min(nums[i], mins[mins.length - 1]));
		}
	}

	mins.reverse();

	for (let i = 0; i < nums.length; i++) {
		if (maxes[i] - mins[i] <= k) {
			return i;
		}
	}

	return -1;
}

export { firstStableIndex };
