/** biome-ignore-all lint/style/noNonNullAssertion: Guaranteed that value is non-null */
function reverse(num: number): number {
	let result = 0;
	while (num > 0) {
		result = result * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return result;
}

function minMirrorPairDistance(nums: number[]): number {
	const seen = new Map<number, number>();

	let minDist = Number.POSITIVE_INFINITY;

	for (let i = 0; i < nums.length; i++) {
		if (seen.has(nums[i])) {
			minDist = Math.min(minDist, i - seen.get(nums[i])!);
		}

		const reversed = reverse(nums[i]);
		seen.set(reversed, i);
	}

	return minDist === Number.POSITIVE_INFINITY ? -1 : minDist;
}

export { minMirrorPairDistance };
