import { getData } from "./11.data";

function dfs(graph: Map<string, Set<string>>, u: string, v: string) {
	function rec(node: string, cache: Map<string, number>) {
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

async function solve(isTest = false) {
	const graph = await getData(isTest);
	let paths = dfs(graph, "svr", "fft");
	paths *= dfs(graph, "fft", "dac");
	paths *= dfs(graph, "dac", "out");
	return paths;
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 11 - Part 2: ${ans}`);
