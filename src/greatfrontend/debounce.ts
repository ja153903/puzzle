type Fn = (...args: unknown[]) => unknown;

export function debounce(fn: Fn, wait: number): Fn {
	let timeoutId: NodeJS.Timeout | undefined;

	return function (this: unknown, ...args: unknown[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = undefined;
			fn.apply(this, args);
		}, wait);
	};
}
