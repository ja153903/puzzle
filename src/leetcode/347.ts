// since we would need to heap sort anyway, we can just sort the array and grab k elements
function topKFrequent(nums: number[], k: number): number[] {
	const counter = new Map<number, number>();
	for (const num of nums) {
		counter.set(num, (counter.get(num) ?? 0) + 1);
	}

	return Array.from(counter.entries())
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map((entry) => entry[0]);
}

export { topKFrequent };
