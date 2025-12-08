import { getData } from "./03.data";

function getMaxSequence(line: string) {
	const stack: string[] = [line[0], line[1]];

	for (let i = 2; i < line.length; i++) {
		const char = line[i];
		if (stack[0] < stack[1]) {
			stack[0] = stack[1];
			stack[1] = char;
		} else if (char > stack[1]) {
			stack[1] = char;
		}
	}

	const joined = stack.map((number) => number.toString()).join("");

	return Number.parseInt(joined, 10);
}

async function solve() {
	const lines = await getData();

	return lines.reduce((acc, line) => {
		return acc + getMaxSequence(line);
	}, 0);
}

const ans = await solve();
console.log(`Advent of Code 2025 - Day 03 - Part 1: ${ans}`);
