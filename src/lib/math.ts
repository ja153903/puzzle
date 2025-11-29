export function factorial(n: number): number {
	if (n < 0) {
		throw new Error("factorial does not support negative numbers");
	}
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
}
