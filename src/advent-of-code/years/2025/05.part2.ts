import { getData } from "./05.data";

async function solve() {
	const data = await getData();
	return data.ranges.reduce((acc, range) => acc + (range[1] - range[0] + 1), 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 05 - Part 2: ${ans}`);
