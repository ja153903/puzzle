function reverse(n: number): number {
	let result = 0;

	while (n > 0) {
		result = result * 10 + (n % 10);
		n = Math.floor(n / 10);
	}

	return result;
}

function mirrorDistance(n: number): number {
	return Math.abs(n - reverse(n));
}

export { mirrorDistance };
