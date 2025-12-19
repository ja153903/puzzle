import { getData } from "./03.data";

async function solve(isTest = false) {
	const data = await getData(isTest);

	const matches = data.matchAll(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g);
	if (!matches) {
		throw new Error("No matches; Regex probably incorrect");
	}

	let result = 0;
	let enabled = true;

	for (const [op, a, b] of matches) {
		if (op === "do()") {
			enabled = true;
		} else if (op === "don't()") {
			enabled = false;
		} else if (enabled) {
			result += Number.parseInt(a, 10) * Number.parseInt(b, 10);
		}
	}

	return result;
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 03 - Part 2: ${ans}`);
