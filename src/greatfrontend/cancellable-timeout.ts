export function setCancellableTimeout(
	callback: Function,
	delay?: number,
	...args: Array<unknown>
): () => void {
	const id = setTimeout(() => callback(...args), delay);
	return () => clearTimeout(id);
}
