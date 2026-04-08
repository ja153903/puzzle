const MOD = 10 ** 9 + 7;

function xorAfterQueries(nums: number[], queries: number[][]): number {
	// queries[i] = [l, r, k, v]

	for (const [l, r, k, v] of queries) {
		let idx = l;
		while (idx <= r) {
			nums[idx] = (nums[idx] * v) % MOD;
			idx += k;
		}
	}

	return nums.reduce((a, b) => a ^ b);
}

export { xorAfterQueries };
