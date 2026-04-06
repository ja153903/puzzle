/**
 * Implement a function `setCancellableInterval`, that acts like `setInterval` but instead of returning
 * a timer ID, it returns a function when called, cancels the interval. The `setCancellableInterval` function
 * should have the same exact signature as `setInterval`
 */
export function setCancellableInterval(
	callback: Function,
	delay?: number,
	...args: Array<unknown>
): () => void {
	const id = setInterval(() => {
		callback(...args);
	}, delay);
	return () => {
		clearInterval(id);
	};
}
