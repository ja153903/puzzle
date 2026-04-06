export function setCancellableTimeout(
	callback: (...args: unknown[]) => unknown,
	delay?: number,
	...args: unknown[]
): () => void {
	const id = setTimeout(() => callback(...args), delay);
	return () => clearTimeout(id);
}
