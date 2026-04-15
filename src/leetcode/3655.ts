const MOD = 10 ** 9 + 7;

function xorAfterQueries__TLE(nums: number[], queries: number[][]): number {
	for (const [l, r, k, v] of queries) {
		let idx = l;
		while (idx <= r) {
			nums[idx] = (nums[idx] * v) % MOD;
			idx += k;
		}
	}

	return nums.reduce((a, b) => a ^ b);
}

// FIXME: Can't figure out what the optimal solution here is
function xorAfterQueries(nums: number[], queries: number[][]): number {
	/**
	 * we have to make sure that we're iterating over all the queries so that's O(n) that we're incurring
	 * we have to somehow optimize the operations we're doing
	 */
	for (const [l, r, k, v] of queries) {
		for (let i = l; i <= r; i += k) {
			nums[i] = (nums[i] * v) % MOD;
		}
	}

	return nums.reduce((a, b) => a ^ b);
}

export { xorAfterQueries, xorAfterQueries__TLE };
