/** biome-ignore-all lint/style/noNonNullAssertion: tis a puzzle */
import { UnionFind } from "@/lib/graphs";

function minimumHammingDistance(
	source: number[],
	target: number[],
	allowedSwaps: number[][],
): number {
	const uf = new UnionFind<number>();
	for (const [i, j] of allowedSwaps) {
		uf.union(i, j);
	}

	const groups = new Map<number, Map<number, number>>();

	for (let i = 0; i < source.length; i++) {
		const root = uf.find(i);
		if (!groups.has(root)) {
			groups.set(root, new Map());
		}
		groups
			.get(root)
			?.set(source[i], (groups.get(root)?.get(source[i]) ?? 0) + 1);
	}

	let result = 0;

	for (let i = 0; i < source.length; i++) {
		const root = uf.find(i);
		const freq = groups.get(root)!;
		if ((freq.get(target[i]) ?? 0) > 0) {
			freq.set(target[i], freq.get(target[i])! - 1);
		} else {
			result++;
		}
	}

	return result;
}

export { minimumHammingDistance };
