import { getData } from "./01.data";

async function solve(isTest = false) {
	const lines = await getData(isTest);

	const right = lines.map(({ right }) => right);

	const counter = new Map<number, number>();
	for (const num of right) {
		counter.set(num, (counter.get(num) ?? 0) + 1);
	}

	return lines.reduce((acc, { left: value }) => {
		return acc + value * (counter.get(value) ?? 0);
	}, 0);
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 01 - Part 2: ${ans}`);
