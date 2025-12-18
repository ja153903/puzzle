function longestConsecutive(nums: number[]): number {
	const starts = new Set<number>(nums);
	let result = 0;

	for (const num of nums) {
		if (!starts.has(num - 1)) {
			let curr = num;
			let count = 0;
			while (starts.has(curr)) {
				starts.delete(curr);
				count++;
				curr++;
			}

			result = Math.max(result, count);
		}
	}

	return result;
}

export { longestConsecutive };
