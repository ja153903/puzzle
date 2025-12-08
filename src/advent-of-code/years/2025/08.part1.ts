import { UnionFind } from "@/lib/graphs";
import { combinations } from "@/lib/itertools";
import { getData } from "./08.data";

function getDistanceBetweenNodes(pair: number[][]) {
	const [a, b] = pair;
	const dist = Math.sqrt(
		(b[2] - a[2]) ** 2 + (b[1] - a[1]) ** 2 + (b[0] - a[0]) ** 2,
	);
	return dist;
}

async function solve(isTest = false) {
	const data = await getData(isTest);
	const combs = Array.from(combinations(data, 2));
	combs.sort((a, b) => {
		return getDistanceBetweenNodes(a) - getDistanceBetweenNodes(b);
	});

	const nClosest = combs.slice(0, isTest ? 10 : 1000);
	const uf = new UnionFind<string>();

	for (const [u, v] of nClosest) {
		const uHash = JSON.stringify(u);
		const vHash = JSON.stringify(v);
		uf.union(uHash, vHash);
	}

	return uf
		.getGroups()
		.map((group) => group.length)
		.toSorted((a, b) => b - a)
		.slice(0, 3)
		.reduce((acc, num) => acc * num, 1);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 08 - Part 1: ${ans}`);
