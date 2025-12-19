import { getData } from "./01.data";

async function solve(isTest = false) {
	const lines = await getData(isTest);

	const left = lines.map(({ left }) => left).toSorted((a, b) => a - b);
	const right = lines.map(({ right }) => right).toSorted((a, b) => a - b);

	return left.reduce((acc, value, index) => {
		return acc + Math.abs(value - right[index]);
	}, 0);
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 01 - Part 1: ${ans}`);
