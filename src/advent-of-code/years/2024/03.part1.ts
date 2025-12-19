import { getData } from "./03.data";

async function solve(isTest = false) {
	const data = await getData(isTest);

	// NOTE: to get capture groups with matchAll, you just need to wrap \d+ with parens
	const matches = data.matchAll(/mul\((\d+),(\d+)\)/g);
	if (!matches) {
		throw new Error("No matches; Regex probably incorrect");
	}

	const entries = Array.from(
		matches.map(([_match, a, b]) => [
			Number.parseInt(a, 10),
			Number.parseInt(b, 10),
		]),
	);

	return entries.reduce((acc, [a, b]) => acc + a * b, 0);
}

const ans = await solve();
console.log(`Advent of Code 2024 - Day 03 - Part 1: ${ans}`);
