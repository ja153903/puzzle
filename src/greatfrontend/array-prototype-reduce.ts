// biome-ignore lint/correctness/noUnusedVariables: Don't worrry about it
interface Array<T> {
	myReduce<U>(
		callbackFn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[],
		) => U,
		initialValue?: U,
	): U;
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
	if (this.length === 0 && initialValue === undefined) {
		throw new Error("Array is empty");
	}

	if (this.length === 0) {
		return initialValue;
	}

	const start = initialValue !== undefined ? 0 : 1;
	let accum = start === 0 ? initialValue : this[0];

	for (let i = start; i < this.length; i++) {
		if (this[i] === undefined) {
			continue;
		}
		accum = callbackFn.apply(this, [accum, this[i], i, this]);
	}

	return accum;
};
