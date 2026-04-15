function closestTarget(
	words: string[],
	target: string,
	startIndex: number,
): number {
	const indices = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i] === target) {
			indices.push(i);
		}
	}

	let result = Number.POSITIVE_INFINITY;
	for (const targetIndex of indices) {
		const [a, b] = [
			Math.max(startIndex, targetIndex),
			Math.min(startIndex, targetIndex),
		];
		result = Math.min(result, Math.min(a - b, b + words.length - a));
	}

	return result === Number.POSITIVE_INFINITY ? -1 : result;
}

export { closestTarget };
