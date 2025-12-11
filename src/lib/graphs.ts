/** biome-ignore-all lint/style/noNonNullAssertion: <We know there will be a value> */
export class UnionFind<T> {
	parent: Map<T, T> = new Map();
	rank: Map<T, number> = new Map();

	find(x: T): T {
		if (!this.parent.has(x)) {
			this.parent.set(x, x);
			this.rank.set(x, 0);
		}

		if (this.parent.get(x) !== x) {
			this.parent.set(x, this.find(this.parent.get(x)!));
		}

		return this.parent.get(x)!;
	}

	union(x: T, y: T): void {
		const rootX = this.find(x);
		const rootY = this.find(y);

		if (rootX === rootY) return;

		const rankX = this.rank.get(rootX)!;
		const rankY = this.rank.get(rootY)!;

		if (rankX < rankY) {
			this.parent.set(rootX, rootY);
		} else if (rankX > rankY) {
			this.parent.set(rootY, rootX);
		} else {
			this.parent.set(rootY, rootX);
			this.rank.set(rootX, rankX + 1);
		}
	}

	connected(x: T, y: T): boolean {
		return this.find(x) === this.find(y);
	}

	getGroups(): T[][] {
		const groups = new Map<T, T[]>();

		for (const key of this.parent.keys()) {
			const root = this.find(key);
			if (!groups.has(root)) {
				groups.set(root, []);
			}
			groups.get(root)!.push(key);
		}

		return Array.from(groups.values());
	}
}

/**
 * `countPaths` is a cache-backed solution to counting the number of paths
 * between nodes `u` and `v` as represented by an adjacency list
 */
export function countPaths<T>(graph: Map<T, Iterable<T>>, u: T, v: T) {
	function rec(node: T, cache: Map<T, number>) {
		if (cache.has(node)) {
			return cache.get(node) ?? 0;
		}
		if (node === v) {
			return 1;
		}

		let result = 0;
		const neighbors = graph.get(node);
		if (neighbors) {
			for (const neighbor of neighbors) {
				result += rec(neighbor, cache);
			}
		}

		cache.set(node, result);

		return result;
	}

	return rec(u, new Map());
}
